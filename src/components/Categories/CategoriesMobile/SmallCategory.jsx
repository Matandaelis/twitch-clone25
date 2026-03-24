import { StyledSmallCategory } from "./SmallCategory.styled";

import { useNavigate } from "react-router-dom";
import { FaCircle } from "react-icons/fa";

const SmallCategory = ({ game }) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(`/browse?category=${encodeURIComponent(game.name)}`);
  };

  const titleTrim = (title) => {
    if (title.length < 11) return title;
    return title.slice(0, 10) + "...";
  };
  
  return (
    <StyledSmallCategory>
      <div className="game-box" onClick={handleClick}>
        <div className="game-img">
          <img src={game.image} alt={game.name} />
        </div>
        <div className="game-name">{titleTrim(game.name)}</div>
        <div className="game-viewer">
          <FaCircle className="viewer-icon" /> {game.viewer}
        </div>
      </div>
    </StyledSmallCategory>
  );
};

export default SmallCategory;
