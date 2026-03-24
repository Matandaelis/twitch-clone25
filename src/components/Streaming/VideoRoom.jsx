import { useEffect, useRef, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyledVideoRoom } from "./VideoRoom.styled";
import PinnedProductOverlay from "../Products/PinnedProductOverlay";
import ViewerReactions from "../ViewerReactions/ViewerReactions";
import {
  selectIsConnected,
  selectParticipants,
  selectLocalParticipant,
  selectStreamSettings,
  setRoomConnectionStatus,
  addParticipant,
  removeParticipant,
  setLocalParticipant,
  addChatMessage,
  updateViewerCount,
} from "../../store/streaming";
import {
  createLiveKitRoom,
  connectToRoom,
  disconnectFromRoom,
  setupRoomEventListeners,
  removeRoomEventListeners,
  publishData,
} from "../../utils/livekit";

const VideoRoom = ({ token, serverUrl, roomName, isStreamer = false }) => {
  const dispatch = useDispatch();
  const containerRef = useRef(null);
  const roomRef = useRef(null);
  const localVideoRef = useRef(null);
  const screenShareRef = useRef(null);
  const [useConference, setUseConference] = useState(true);

  const isConnected = useSelector(selectIsConnected);
  const participants = useSelector(selectParticipants);
  const localParticipant = useSelector(selectLocalParticipant);
  const streamSettings = useSelector(selectStreamSettings);

  const connectRoom = useCallback(async () => {
    if (!token || !serverUrl) {
      dispatch(
        setRoomConnectionStatus({
          isConnecting: false,
          isConnected: false,
          error: "Missing connection credentials",
        })
      );
      return;
    }

    dispatch(
      setRoomConnectionStatus({
        isConnecting: true,
        isConnected: false,
        error: null,
      })
    );

    try {
      const room = createLiveKitRoom();
      roomRef.current = room;

      setupRoomEventListeners(room, {
        onConnected: () => {
          dispatch(
            setRoomConnectionStatus({
              isConnecting: false,
              isConnected: true,
              error: null,
            })
          );
          dispatch(setLocalParticipant(room.localParticipant));
        },
        onDisconnected: () => {
          dispatch(
            setRoomConnectionStatus({
              isConnecting: false,
              isConnected: false,
              error: null,
            })
          );
          dispatch(setLocalParticipant(null));
        },
        onParticipantConnected: (participant) => {
          dispatch(addParticipant(participant));
          dispatch(
            updateViewerCount({
              streamId: roomName,
              count: room.participants.size + 1,
            })
          );
        },
        onParticipantDisconnected: (participant) => {
          dispatch(removeParticipant(participant.sid));
          dispatch(
            updateViewerCount({
              streamId: roomName,
              count: Math.max(0, room.participants.size),
            })
          );
        },
        onDataReceived: (data, participant, kind) => {
          if (data.type === "chat") {
            dispatch(addChatMessage(data.payload));
          } else if (data.type === "stock-update") {
            dispatch({ type: "product/updateStock", payload: data.payload });
          } else if (data.type === "reaction") {
            dispatch({ type: "reactions/addReaction", payload: data.payload });
          }
        },
        onError: (error) => {
          dispatch(
            setRoomConnectionStatus({
              isConnecting: false,
              isConnected: false,
              error: error.message,
            })
          );
        },
      });

      const result = await connectToRoom(room, serverUrl, token);

      if (!result.success) {
        dispatch(
          setRoomConnectionStatus({
            isConnecting: false,
            isConnected: false,
            error: result.error,
          })
        );
      }

      if (isStreamer && room.localParticipant) {
        try {
          await room.localParticipant.enableCameraAndMicrophone();
        } catch (e) {
          console.error("Failed to enable camera:", e);
        }
      }
    } catch (error) {
      dispatch(
        setRoomConnectionStatus({
          isConnecting: false,
          isConnected: false,
          error: error.message,
        })
      );
    }
  }, [dispatch, token, serverUrl, roomName, isStreamer]);

  useEffect(() => {
    connectRoom();

    return () => {
      const cleanup = async () => {
        if (roomRef.current) {
          removeRoomEventListeners(roomRef.current);
          await disconnectFromRoom(roomRef.current);
          roomRef.current = null;
        }
      };
      cleanup();
    };
  }, [connectRoom]);

  useEffect(() => {
    const attachTracks = async () => {
      if (!roomRef.current || !isConnected) return;

      if (isStreamer && localVideoRef.current) {
        const videoTrack = roomRef.current.localParticipant.videoTracks.values().next().value;
        if (videoTrack && videoTrack.track) {
          videoTrack.track.attach(localVideoRef.current);
        }
      }

      participants.forEach((participant) => {
        participant.videoTracks.forEach((track) => {
          if (track.track && containerRef.current) {
            const element = document.createElement("video");
            element.id = `video-${participant.sid}`;
            element.className = "participant-video";
            element.autoplay = true;
            track.track.attach(element);
            containerRef.current.appendChild(element);
          }
        });
      });
    };

    attachTracks();
  }, [isConnected, participants, isStreamer]);

  useEffect(() => {
    const updateMedia = async () => {
      if (!roomRef.current || !isConnected) return;

      if (isStreamer) {
        await roomRef.current.localParticipant.setCameraEnabled(
          streamSettings.videoEnabled
        );
        await roomRef.current.localParticipant.setMicrophoneEnabled(
          streamSettings.audioEnabled
        );

        if (streamSettings.screenShareEnabled) {
          await roomRef.current.localParticipant.setScreenShareEnabled(true);
        } else {
          await roomRef.current.localParticipant.setScreenShareEnabled(false);
        }
      }
    };

    updateMedia();
  }, [streamSettings, isConnected, isStreamer]);

  return (
    <StyledVideoRoom ref={containerRef}>
      {isStreamer ? (
        <div className="stream-container">
          <video
            ref={localVideoRef}
            className="local-video"
            autoPlay
            playsInline
            muted
          />
          {streamSettings.screenShareEnabled && (
            <video
              ref={screenShareRef}
              className="screen-share"
              autoPlay
              playsInline
            />
          )}
          <div className="conference-placeholder">
            <p>LiveKit Video Conference Mode</p>
            <small>Press to enable multi-participant view</small>
          </div>
        </div>
      ) : (
        <div className="viewer-container">
          {participants.length === 0 ? (
            <div className="waiting-screen">
              <div className="loading-spinner" />
              <p>Waiting for streamer...</p>
            </div>
          ) : (
            <div className="video-grid">
              {participants.map((participant) => (
                <div
                  key={participant.sid}
                  className="participant-container"
                  id={`container-${participant.sid}`}
                >
                  <span className="participant-name">{participant.identity}</span>
                </div>
              ))}
            </div>
          )}
          <ViewerReactions />
        </div>
      )}
      <PinnedProductOverlay position="bottom-right" />
    </StyledVideoRoom>
  );
};

export default VideoRoom;
