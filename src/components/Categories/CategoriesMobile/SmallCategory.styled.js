import styled from "styled-components";

export const StyledSmallCategory = styled.div`
  .game-box {
    padding: 5px 0;
    color: ${(props) => props.theme.textColor};
    user-select: none;
    cursor: pointer;
    min-width: 100px;

    .game-img {
      max-width: 120px;
      width: 100%;
      z-index: -1;
      border-radius: 8px;
      overflow: hidden;

      img {
        z-index: -1;
        user-select: none;
        user-drag: none;
        -webkit-user-drag: none;
        user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        width: 100%;
        height: auto;
        display: block;
        transition: transform 0.2s ease;
      }
    }

    .game-box:hover .game-img img {
      transform: scale(1.05);
    }

    .game-name {
      font-size: 15px;
      font-weight: 600;
      padding: 3px 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .game-viewer {
      display: flex;
      align-items: center;
      gap: 5px;
      font-size: 15px;

      .viewer-icon {
        color: red;
        font-size: 10px;
      }
    }
  }
`;

export const StyledSmallCategories = styled.div`
  .small-categories-box {
    width: 100%;
    margin-bottom: 15px;
    .small-categories {
      display: grid;
      gap: 10px;
      grid-template-columns: repeat(12, 1fr);
    }
  }

  @media (max-width: 767px) {
    .small-categories-box {
      overflow-x: scroll;
      -ms-overflow-style: none;
      scrollbar-width: none;

      .small-categories {
        width: max-content;
        padding: 0 10px;
      }

      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
`;
