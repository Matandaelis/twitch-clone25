import { StyledStreamRoom } from "./StreamRoom.styled";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import VideoRoom from "../../components/Streaming/VideoRoom";
import StreamControls from "../../components/Streaming/StreamControls";
import ParticipantList from "../../components/Streaming/ParticipantList";
import Cart from "../../components/ShoppingCart/Cart";
import StreamAnalytics from "../../components/Analytics/StreamAnalytics";
import {
  selectStreamById,
  selectRoomCredentials,
  selectIsConnected,
  selectConnectionError,
  setRoomCredentials,
  resetStreamingState,
} from "../../store/streaming";
import { selectPinnedProduct } from "../../store/product";
import { selectCartItemCount, openCart } from "../../store/cart";
import { toggleAnalytics, startAnalytics, updateViewerCount } from "../../store/analytics";
import { generateMockToken } from "../../utils/livekit";
import { BsPeople, BsEye, BsShare, BsHeart, BsCart, BsBarChart } from "react-icons/bs";

const StreamRoom = () => {
  const { roomId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const stream = useSelector((state) => selectStreamById(state, roomId));
  const roomCredentials = useSelector(selectRoomCredentials);
  const isConnected = useSelector(selectIsConnected);
  const connectionError = useSelector(selectConnectionError);
  const pinnedProduct = useSelector(selectPinnedProduct);
  const cartItemCount = useSelector(selectCartItemCount);

  const [isStreamer, setIsStreamer] = useState(false);
  const [viewerCount, setViewerCount] = useState(stream?.viewerCount || 0);

  useEffect(() => {
    if (!stream) {
      return;
    }

    const token = generateMockToken(
      isStreamer ? "streamer" : `viewer-${Date.now()}`,
      stream.roomName
    );
    dispatch(
      setRoomCredentials({
        token,
        roomName: stream.roomName,
        serverUrl: "wss://demo.livekit.cloud",
      })
    );

    dispatch(startAnalytics(stream.id));

    const viewerInterval = setInterval(() => {
      const randomViewers = Math.floor(Math.random() * 500) + 1000;
      setViewerCount((prev) => {
        const newCount = prev + Math.floor(Math.random() * 20) - 10;
        dispatch(updateViewerCount({ count: Math.max(100, newCount) }));
        return Math.max(100, newCount);
      });
    }, 5000);

    return () => {
      dispatch(resetStreamingState());
      clearInterval(viewerInterval);
    };
  }, [dispatch, stream, isStreamer]);

  const handleEndStream = () => {
    dispatch(resetStreamingState());
    navigate("/streams");
  };

  const handleOpenCart = () => {
    dispatch(openCart());
  };

  const handleToggleAnalytics = () => {
    dispatch(toggleAnalytics());
  };

  const formatDuration = (startTime) => {
    const duration = Date.now() - startTime;
    const hours = Math.floor(duration / 3600000);
    const minutes = Math.floor((duration % 3600000) / 60000);

    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    }
    return `${minutes}m`;
  };

  if (!stream) {
    return (
      <StyledStreamRoom>
        <div className="error-state">
          <h2>Stream Not Found</h2>
          <p>The stream you are looking for does not exist.</p>
          <button onClick={() => navigate("/streams")}>
            Browse Active Streams
          </button>
        </div>
      </StyledStreamRoom>
    );
  }

  return (
    <StyledStreamRoom>
      <div className="stream-layout">
        <div className="main-content">
          <div className="video-section">
            {connectionError && (
              <div className="connection-error">
                <p>Connection error: {connectionError}</p>
                <button onClick={() => window.location.reload()}>Retry</button>
              </div>
            )}
            <div className="video-container">
              <VideoRoom
                token={roomCredentials.token}
                serverUrl={roomCredentials.serverUrl}
                roomName={roomCredentials.roomName}
                isStreamer={isStreamer}
              />
            </div>
          </div>

          <div className="stream-info">
            <div className="streamer-info">
              <img
                src={stream.streamerAvatar}
                alt={stream.streamerName}
                className="streamer-avatar"
              />
              <div className="stream-details">
                <h2>{stream.title}</h2>
                <p className="streamer-name">{stream.streamerName}</p>
                <div className="stream-meta">
                  <span className="category">{stream.category}</span>
                  <span className="duration">
                    {formatDuration(stream.startedAt)}
                  </span>
                </div>
              </div>
            </div>

            <div className="stream-actions">
              <button className="action-btn">
                <BsHeart />
                Follow
              </button>
              <button className="action-btn">
                <BsShare />
                Share
              </button>
              <button className="action-btn cart-btn" onClick={handleOpenCart}>
                <BsCart />
                Cart ({cartItemCount})
              </button>
              {isStreamer && (
                <button className="action-btn analytics-btn" onClick={handleToggleAnalytics}>
                  <BsBarChart />
                  Analytics
                </button>
              )}
              <div className="viewer-count">
                <BsEye />
                <span>{viewerCount.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {isStreamer && (
            <div className="controls-section">
              <div className="streamer-toggle">
                <label>
                  <input
                    type="checkbox"
                    checked={isStreamer}
                    onChange={(e) => setIsStreamer(e.target.checked)}
                  />
                  Streamer Mode
                </label>
              </div>
              <StreamControls onEndStream={handleEndStream} />
            </div>
          )}

          {!isStreamer && (
            <div className="streamer-toggle viewer">
              <label>
                <input
                  type="checkbox"
                  checked={isStreamer}
                  onChange={(e) => setIsStreamer(e.target.checked)}
                />
                Join as Streamer (Demo)
              </label>
            </div>
          )}

          {pinnedProduct && (
            <div className="pinned-section">
              <h3>Pinned Product</h3>
              <div className="pinned-product-card">
                <img
                  src={pinnedProduct.images[0] || "./images/products/placeholder.jpg"}
                  alt={pinnedProduct.title}
                />
                <div className="pinned-details">
                  <h4>{pinnedProduct.title}</h4>
                  <p className="price">
                    ${pinnedProduct.discount
                      ? (
                          pinnedProduct.price *
                          (1 - pinnedProduct.discount / 100)
                        ).toFixed(2)
                      : pinnedProduct.price.toFixed(2)}
                  </p>
                  <button className="buy-btn" onClick={handleOpenCart}>Add to Cart</button>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="sidebar">
          <ParticipantList />
          <div className="chat-placeholder">
            <h3>Live Chat</h3>
            <p>Chat functionality coming soon...</p>
          </div>
        </div>
      </div>

      <Cart />
      <StreamAnalytics />
    </StyledStreamRoom>
  );
};

export default StreamRoom;
