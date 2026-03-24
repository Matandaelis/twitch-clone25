import { StyledOfflineChannel } from "./OfflineChannel.styled";
import { useNavigate } from "react-router-dom";

const OfflineChannel = ({ user, imageId }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    const streamId = user.username.toLowerCase().replace(/\s+/g, '-');
    navigate(`/stream/${streamId}`);
  };

  return (
    <StyledOfflineChannel>
      <div className="offline-box" onClick={handleClick}>
        <div className="left">
          <div className="pp">
            <img src={`https://i.pravatar.cc/5${imageId}`} alt="" />
          </div>
        </div>
        <div className="right">
          <div className="username">{user.username}</div>
          <div className="videos">7 new videos</div>
        </div>
      </div>
    </StyledOfflineChannel>
  );
};

export default OfflineChannel;
