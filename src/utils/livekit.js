import { Room, RoomEvent, VideoPresets } from "livekit-client";

export const createLiveKitRoom = () => {
  return new Room({
    adaptiveStream: true,
    dynacast: true,
    videoCaptureDefaults: {
      resolution: VideoPresets.h720.resolution,
    },
  });
};

export const connectToRoom = async (room, url, token) => {
  try {
    await room.connect(url, token);
    return { success: true, error: null };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const disconnectFromRoom = async (room) => {
  try {
    await room.disconnect();
    return { success: true, error: null };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const enableCamera = async (room) => {
  try {
    await room.localParticipant.enableCameraAndMicrophone();
    return { success: true, error: null };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const disableCamera = async (room) => {
  try {
    await room.localParticipant.setCameraEnabled(false);
    return { success: true, error: null };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const toggleMicrophone = async (room, enabled) => {
  try {
    await room.localParticipant.setMicrophoneEnabled(enabled);
    return { success: true, error: null };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const startScreenShare = async (room) => {
  try {
    await room.localParticipant.setScreenShareEnabled(true);
    return { success: true, error: null };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const stopScreenShare = async (room) => {
  try {
    await room.localParticipant.setScreenShareEnabled(false);
    return { success: true, error: null };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const publishData = async (room, data) => {
  try {
    const encoder = new TextEncoder();
    const payload = encoder.encode(JSON.stringify(data));
    await room.localParticipant.publishData(payload, { reliable: true });
    return { success: true, error: null };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const sendStockUpdate = async (room, productId, stock) => {
  return publishData(room, {
    type: "stock-update",
    payload: { productId, quantity: stock - (await getCurrentStock(room, productId)) },
  });
};

export const sendReaction = async (room, emoji, participantName) => {
  return publishData(room, {
    type: "reaction",
    payload: { emoji, participantName },
  });
};

export const sendChatMessage = async (room, message, senderName) => {
  return publishData(room, {
    type: "chat",
    payload: { message, senderName, timestamp: Date.now() },
  });
};

const getCurrentStock = async (room, productId) => {
  return 0;
};

export const setupRoomEventListeners = (room, callbacks) => {
  const {
    onConnected,
    onDisconnected,
    onParticipantConnected,
    onParticipantDisconnected,
    onTrackSubscribed,
    onTrackUnsubscribed,
    onDataReceived,
    onError,
  } = callbacks;

  room.on(RoomEvent.Connected, () => {
    if (onConnected) onConnected(room);
  });

  room.on(RoomEvent.Disconnected, (reason) => {
    if (onDisconnected) onDisconnected(reason);
  });

  room.on(RoomEvent.ParticipantConnected, (participant) => {
    if (onParticipantConnected) onParticipantConnected(participant);
  });

  room.on(RoomEvent.ParticipantDisconnected, (participant) => {
    if (onParticipantDisconnected) onParticipantDisconnected(participant);
  });

  room.on(RoomEvent.TrackSubscribed, (track, publication, participant) => {
    if (onTrackSubscribed) onTrackSubscribed(track, publication, participant);
  });

  room.on(RoomEvent.TrackUnsubscribed, (track, publication, participant) => {
    if (onTrackUnsubscribed)
      onTrackUnsubscribed(track, publication, participant);
  });

  room.on(RoomEvent.DataReceived, (payload, participant, kind) => {
    if (onDataReceived) {
      try {
        const decoder = new TextDecoder();
        const data = JSON.parse(decoder.decode(payload));
        onDataReceived(data, participant, kind);
      } catch (e) {
        onDataReceived(payload, participant, kind);
      }
    }
  });

  room.on(RoomEvent.MediaDevicesError, (e) => {
    if (onError) onError(e);
  });
};

export const removeRoomEventListeners = (room) => {
  room.off(RoomEvent.Connected);
  room.off(RoomEvent.Disconnected);
  room.off(RoomEvent.ParticipantConnected);
  room.off(RoomEvent.ParticipantDisconnected);
  room.off(RoomEvent.TrackSubscribed);
  room.off(RoomEvent.TrackUnsubscribed);
  room.off(RoomEvent.DataReceived);
  room.off(RoomEvent.MediaDevicesError);
};

export const generateMockToken = (identity, roomName) => {
  const header = btoa(JSON.stringify({ alg: "none", typ: "JWT" }));
  const payload = btoa(
    JSON.stringify({
      exp: Math.floor(Date.now() / 1000) + 3600,
      iss: "dev-key",
      sub: identity,
      video: {
        room: roomName,
        roomJoin: true,
        canPublish: true,
        canSubscribe: true,
      },
    })
  );
  return `${header}.${payload}.`;
};

export const formatDuration = (startTime) => {
  const duration = Date.now() - startTime;
  const hours = Math.floor(duration / 3600000);
  const minutes = Math.floor((duration % 3600000) / 60000);
  const seconds = Math.floor((duration % 60000) / 1000);

  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  }
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
};

export const formatViewerCount = (count) => {
  if (count >= 1000000) {
    return `${(count / 1000000).toFixed(1)}M`;
  }
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}K`;
  }
  return count.toString();
};
