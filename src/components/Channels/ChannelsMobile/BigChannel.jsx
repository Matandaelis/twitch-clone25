import { StyledBigChannel } from "./BigChannel.styled";

import { useLocation, useNavigate } from "react-router-dom";

import { FaEllipsisV } from "react-icons/fa";

const BigChannel = ({ user, imageId }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleChannelClick = () => {
    const streamId = user.username.toLowerCase().replace(/\s+/g, '-');
    navigate(`/stream/${streamId}`);
  };

  const handleUsernameClick = (e) => {
    e.stopPropagation();
    const streamId = user.username.toLowerCase().replace(/\s+/g, '-');
    navigate(`/stream/${streamId}`);
  };

  const handleGameClick = (e) => {
    e.stopPropagation();
    navigate(`/browse?category=${encodeURIComponent(user.game)}`);
  };

  const handleTagClick = (e) => {
    e.stopPropagation();
    navigate(`/browse?tag=${encodeURIComponent(user.tag)}`);
  };

  return (
    <StyledBigChannel>
      <div className="channel-box" onClick={handleChannelClick}>
        <div
          className={`live-screen ${
            pathname.includes("browse") ? "for-browse" : ""
          }`}
        >
          <img src={user.liveScreen} alt="" />
          <span className="live">Live</span>
          <span className="viewers">{user.viewers} Viewers</span>
        </div>
        <div className="live-info">
          <div className="pp">
            <img src={`https://i.pravatar.cc/5${imageId}`} alt="" />
          </div>
          <div className="titles">
            <div className="username-box">
              <div className="username" onClick={handleUsernameClick}>{user.username}</div>
              <FaEllipsisV className="others" />
            </div>
            <div className="title">{user.title}</div>
            <div className="game" onClick={handleGameClick}>{user.game}</div>
            <div className="tag" onClick={handleTagClick}>{user.tag}</div>
          </div>
        </div>
      </div>
    </StyledBigChannel>
  );
};

export default BigChannel;
