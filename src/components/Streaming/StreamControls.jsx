import { StyledStreamControls } from "./StreamControls.styled";
import { useDispatch, useSelector } from "react-redux";
import {
  selectStreamSettings,
  selectIsStreaming,
  selectPinnedProductId,
  setStreamingStatus,
  updateStreamSettings,
  pinProduct,
  unpinProduct,
} from "../../store/streaming";
import {
  selectAllProducts,
} from "../../store/product";
import {
  BsCameraVideo,
  BsCameraVideoOff,
  BsMic,
  BsMicMute,
  BsDisplay,
  BsRecordCircle,
  BsStopCircle,
  BsPinAngleFill,
} from "react-icons/bs";

const StreamControls = ({ onEndStream, room, isStreamer = false }) => {
  const dispatch = useDispatch();
  const streamSettings = useSelector(selectStreamSettings);
  const isStreaming = useSelector(selectIsStreaming);
  const products = useSelector(selectAllProducts);
  const pinnedProductId = useSelector(selectPinnedProductId);

  const handleToggleVideo = () => {
    dispatch(updateStreamSettings({ videoEnabled: !streamSettings.videoEnabled }));
  };

  const handleToggleAudio = () => {
    dispatch(updateStreamSettings({ audioEnabled: !streamSettings.audioEnabled }));
  };

  const handleToggleScreenShare = () => {
    dispatch(
      updateStreamSettings({
        screenShareEnabled: !streamSettings.screenShareEnabled,
      })
    );
  };

  const handleToggleStream = () => {
    dispatch(setStreamingStatus(!isStreaming));
  };

  const handlePinProduct = async (productId) => {
    if (!isStreamer) return;
    
    if (pinnedProductId === productId) {
      dispatch(unpinProduct());
      if (room?.localParticipant) {
        try {
          await room.localParticipant.setAttributes({});
        } catch (e) {
          console.error("Failed to clear pinned product attribute:", e);
        }
      }
    } else {
      dispatch(pinProduct(productId));
      if (room?.localParticipant) {
        try {
          await room.localParticipant.setAttributes({ pinnedProductId: productId });
        } catch (e) {
          console.error("Failed to set pinned product attribute:", e);
        }
      }
    }
  };

  return (
    <StyledStreamControls>
      <div className="controls-row">
        <div className="media-controls">
          <button
            className={`control-btn ${!streamSettings.videoEnabled ? "disabled" : ""}`}
            onClick={handleToggleVideo}
            title={streamSettings.videoEnabled ? "Turn off camera" : "Turn on camera"}
          >
            {streamSettings.videoEnabled ? <BsCameraVideo /> : <BsCameraVideoOff />}
          </button>
          <button
            className={`control-btn ${!streamSettings.audioEnabled ? "disabled" : ""}`}
            onClick={handleToggleAudio}
            title={streamSettings.audioEnabled ? "Mute microphone" : "Unmute microphone"}
          >
            {streamSettings.audioEnabled ? <BsMic /> : <BsMicMute />}
          </button>
          <button
            className={`control-btn ${streamSettings.screenShareEnabled ? "active" : ""}`}
            onClick={handleToggleScreenShare}
            title="Share screen"
          >
            <BsDisplay />
          </button>
        </div>

        <div className="stream-actions">
          <button
            className={`stream-btn ${isStreaming ? "live" : ""}`}
            onClick={handleToggleStream}
          >
            {isStreaming ? (
              <>
                <BsStopCircle />
                End Stream
              </>
            ) : (
              <>
                <BsRecordCircle />
                Go Live
              </>
            )}
          </button>
          {onEndStream && (
            <button className="end-btn" onClick={onEndStream}>
              Leave Room
            </button>
          )}
        </div>
      </div>

      {isStreamer && (
        <div className="product-pins">
          <h4>Pin Product to Stream</h4>
          <div className="product-list">
            {products.map((product) => (
              <button
                key={product.id}
                className={`product-pin-btn ${pinnedProductId === product.id ? "pinned" : ""}`}
                onClick={() => handlePinProduct(product.id)}
                disabled={pinnedProductId && pinnedProductId !== product.id}
              >
                {pinnedProductId === product.id && <BsPinAngleFill className="pin-icon" />}
                <span className="product-name">{product.title}</span>
                <span className="product-price">${product.price.toFixed(2)}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </StyledStreamControls>
  );
};

export default StreamControls;
