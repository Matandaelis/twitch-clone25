import { StyledStreamList } from "./StreamList.styled";
import { useSelector } from "react-redux";
import { selectLiveStreams } from "../../store/streaming";
import { useNavigate } from "react-router-dom";
import { BsEye, BsBroadcast } from "react-icons/bs";
import { selectProductById } from "../../store/product";

const StreamCard = ({ stream }) => {
  const navigate = useNavigate();
  const pinnedProduct = useSelector((state) =>
    stream.pinnedProductId
      ? selectProductById(state, stream.pinnedProductId)
      : null
  );

  const formatDuration = (startTime) => {
    const duration = Date.now() - startTime;
    const hours = Math.floor(duration / 3600000);
    const minutes = Math.floor((duration % 3600000) / 60000);

    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    }
    return `${minutes}m`;
  };

  const formatViewerCount = (count) => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`;
    }
    return count.toString();
  };

  return (
    <div
      className="stream-card"
      onClick={() => navigate(`/stream/${stream.id}`)}
    >
      <div className="thumbnail">
        <img
          src={stream.thumbnail || "./images/streams/default.jpg"}
          alt={stream.title}
        />
        <div className="live-badge">
          <BsBroadcast />
          LIVE
        </div>
        <div className="viewer-count">
          <BsEye />
          {formatViewerCount(stream.viewerCount)}
        </div>
        <div className="duration">{formatDuration(stream.startedAt)}</div>
      </div>
      <div className="stream-info">
        <img
          src={stream.streamerAvatar}
          alt={stream.streamerName}
          className="streamer-avatar"
        />
        <div className="stream-details">
          <h3 className="stream-title">{stream.title}</h3>
          <p className="streamer-name">{stream.streamerName}</p>
          <span className="category">{stream.category}</span>
          {pinnedProduct && (
            <div className="pinned-product">
              <img
                src={pinnedProduct.images[0] || "./images/products/placeholder.jpg"}
                alt={pinnedProduct.title}
              />
              <span>${pinnedProduct.price.toFixed(2)}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const StreamList = () => {
  const liveStreams = useSelector(selectLiveStreams);

  return (
    <StyledStreamList>
      <div className="page-header">
        <h1>Live Shopping Streams</h1>
        <p>Join live streams and shop exclusive deals in real-time</p>
      </div>

      <div className="streams-grid">
        {liveStreams.map((stream) => (
          <StreamCard key={stream.id} stream={stream} />
        ))}
      </div>

      {liveStreams.length === 0 && (
        <div className="empty-state">
          <BsBroadcast className="icon" />
          <h2>No Live Streams</h2>
          <p>There are no active shopping streams right now.</p>
        </div>
      )}
    </StyledStreamList>
  );
};

export default StreamList;
