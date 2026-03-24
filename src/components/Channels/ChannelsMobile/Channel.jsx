import { StyledChannel } from "./Channel.styled";
import { useNavigate } from "react-router-dom";
import { FaCircle } from "react-icons/fa";

const Channel = ({ user, imageId }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    const streamId = user.username.toLowerCase().replace(/\s+/g, '-');
    navigate(`/stream/${streamId}`);
  };

  return (
    <StyledChannel>
      <div className="channel-box" onClick={handleClick}>
        <div className="live-screen">
          <img src={user.liveScreen} alt="" />
          <span>
            <FaCircle className="live-icon" /> {user.viewers}
          </span>
        </div>
        <div className="live-info">
          <div className="user">
            <div className="user-pp">
              <img src={`https://i.pravatar.cc/5${imageId}`} alt="" />
            </div>
            <div className="user-name">{user.username}</div>
          </div>
          <div className="title">{user.title}</div>
          <div className="game">{user.game}</div>
          <div className="tags">
            <div className="tag">{user.tag}</div>
          </div>
        </div>
      </div>
    </StyledChannel>
  );
};

export default Channel;
