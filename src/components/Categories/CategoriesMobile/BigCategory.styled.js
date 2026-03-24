import styled from "styled-components";

export const StyledBigCategory = styled.div`
  .big-category-box {
    color: ${(props) => props.theme.textColor};
    display: flex;
    align-items: center;
    margin: 10px 0;
    animation: pageAnim 0.3s ease-in-out;
    cursor: pointer;
    border-radius: 8px;
    padding: 5px;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: ${(props) => props.theme.hover};
    }

    .game-image {
      width: 80px;
      height: 45px;
      border-radius: 6px;
      overflow: hidden;
      flex-shrink: 0;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .game-info {
      padding: 0 10px;
      flex: 1;
      min-width: 0;

      .name {
        font-weight: 600;
        padding: 5px 0;
        cursor: pointer;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .viewers {
        padding: 5px 0;
        font-size: 15px;
      }
      .tags {
        display: block;

        ul {
          display: flex;
          gap: 5px;
          padding: 5px 0;

          li {
            background-color: ${(props) => props.theme.border};
            padding: 5px 10px;
            border-radius: 50px;
            font-size: 14px;
            cursor: pointer;
            transition: background-color 0.2s ease;

            &:hover {
              background-color: ${(props) => props.theme.color};
              color: white;
            }
          }
        }
      }
    }
  }
`;
