import styled from "styled-components";

export const StyledVideoRoom = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #000;
  border-radius: 8px;
  overflow: hidden;

  .stream-container {
    width: 100%;
    height: 100%;
    position: relative;

    .local-video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .screen-share {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: contain;
      background-color: #1a1a1a;
      z-index: 2;
    }

    &::after {
      content: "LIVE";
      position: absolute;
      top: 16px;
      left: 16px;
      background-color: #e91916;
      color: white;
      padding: 6px 12px;
      border-radius: 4px;
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 1px;
      z-index: 10;
      animation: pulse 2s infinite;
    }

    @keyframes pulse {
      0%,
      100% {
        opacity: 1;
      }
      50% {
        opacity: 0.7;
      }
    }
  }

  .viewer-container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #0e0e10;

    .waiting-screen {
      text-align: center;
      color: ${(props) => props.theme.soft};

      .loading-spinner {
        width: 48px;
        height: 48px;
        border: 3px solid rgba(145, 71, 255, 0.3);
        border-top-color: ${(props) => props.theme.color};
        border-radius: 50%;
        animation: spin 1s linear infinite;
        margin: 0 auto 16px;
      }

      @keyframes spin {
        to {
          transform: rotate(360deg);
        }
      }

      p {
        font-size: 14px;
      }
    }

    .participant-container {
      position: relative;
      width: 100%;
      height: 100%;

      video {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .participant-name {
        position: absolute;
        bottom: 16px;
        left: 16px;
        background-color: rgba(0, 0, 0, 0.7);
        color: white;
        padding: 6px 12px;
        border-radius: 4px;
        font-size: 13px;
        font-weight: 500;
      }
    }
  }

  .participant-video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    border-radius: 0;

    .stream-container::after {
      top: 12px;
      left: 12px;
      padding: 4px 8px;
      font-size: 10px;
    }

    .viewer-container .participant-container .participant-name {
      bottom: 12px;
      left: 12px;
      padding: 4px 8px;
      font-size: 12px;
    }
  }
`;
