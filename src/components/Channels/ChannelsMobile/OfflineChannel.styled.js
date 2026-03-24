import styled from "styled-components";

export const StyledOfflineChannel = styled.div`
  .offline-box {
    display: flex;
    align-items: center;
    width: 100%;
    margin: 10px 0 20px 0;
    cursor: pointer;
    padding: 8px;
    border-radius: 8px;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: ${(props) => props.theme.hover};
    }

    .left {
      width: 30px;
      margin-right: 10px;
      flex-shrink: 0;

      .pp {
        border-radius: 999px;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        width: 30px;
        height: 30px;
        
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }

    .right {
      font-size: 15px;
      color: ${(props) => props.theme.textColor};
      min-width: 0;

      .username {
        font-weight: 600;
        cursor: pointer;
      }
      .videos {
        font-size: 13px;
      }
    }
  }
`;
