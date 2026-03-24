import styled from "styled-components";

export const StyledChannel = styled.div`
  .channel-box {
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    z-index: 2;
    padding: 8px;
    border-radius: 8px;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: ${(props) => props.theme.hover};
    }

    .live-screen {
      position: relative;
      width: 35%;
      min-width: 150px !important;
      min-height: 50px;
      background-color: black;
      border-radius: 6px;
      overflow: hidden;
      z-index: -1;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      span {
        position: absolute;
        bottom: 2px;
        left: 5px;
        color: #fff;
        font-size: 12px;
        display: flex;
        align-items: center;
        text-shadow: 0 1px 1px #000;
        gap: 3px;

        .live-icon {
          color: red;
          font-size: 9px;
        }
      }
    }

    .live-info {
      flex: 1;
      padding: 0 10px;
      min-width: 0;

      .user {
        display: flex;
        align-items: center;

        .user-pp {
          width: 15px;
          height: 15px;
          border-radius: 999px;
          overflow: hidden;
          flex-shrink: 0;
          
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }

        .user-name {
          padding-left: 5px;
          color: ${(props) => props.theme.textColor};
          font-weight: 600;
        }
      }

      .title,
      .game {
        color: ${(props) => props.theme.soft};
        font-size: 14px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .game {
        margin-top: 2px;
      }

      .tags {
        display: flex;
        font-size: 13px;
        margin-top: 4px;

        .tag {
          padding: 2px 5px;
          background-color: ${(props) => props.theme.textColor}10;
          border-radius: 999px;
          color: ${(props) => props.theme.textColor};
        }
      }
    }
  }
`;
