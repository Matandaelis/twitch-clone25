import { StyledBigCategory } from "./BigCategory.styled";

import { useNavigate } from "react-router-dom";

const BigCategory = ({ game }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/browse?category=${encodeURIComponent(game.name)}`);
  };

  return (
    <StyledBigCategory>
      <div className="big-category-box" onClick={handleClick}>
        <div className="game-image">
          <img src={game.image} alt={game.name} />
        </div>
        <div className="game-info">
          <div className="name">{game.name}</div>
          <div className="viewers">{game.viewer} Viewers</div>
          <div className="tags">
            <ul>
              <li>Shooter</li>
              <li>Action</li>
              <li>Strategy</li>
            </ul>
          </div>
        </div>
      </div>
    </StyledBigCategory>
  );
};

export default BigCategory;
