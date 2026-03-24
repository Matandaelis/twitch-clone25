import { StyledParticipantList } from "./ParticipantList.styled";
import { useSelector } from "react-redux";
import { selectParticipants, selectParticipantCount } from "../../store/streaming";
import { BsPerson, BsMic, BsMicMute } from "react-icons/bs";

const ParticipantList = () => {
  const participants = useSelector(selectParticipants);
  const count = useSelector(selectParticipantCount);

  return (
    <StyledParticipantList>
      <div className="header">
        <h3>Viewers</h3>
        <span className="count">{count}</span>
      </div>
      <div className="participant-list">
        {participants.map((participant) => (
          <div key={participant.sid} className="participant-item">
            <div className="avatar">
              <BsPerson />
            </div>
            <span className="name">{participant.identity}</span>
            <div className="status">
              {participant.isMicrophoneEnabled ? (
                <BsMic className="icon active" />
              ) : (
                <BsMicMute className="icon muted" />
              )}
            </div>
          </div>
        ))}
        {participants.length === 0 && (
          <div className="empty-state">
            <p>No viewers yet</p>
          </div>
        )}
      </div>
    </StyledParticipantList>
  );
};

export default ParticipantList;
