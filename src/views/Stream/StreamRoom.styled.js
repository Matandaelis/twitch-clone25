import styled from "styled-components";

export const StyledStreamRoom = styled.div`
  padding: 20px;
  max-width: 1600px;
  margin: 0 auto;

  .error-state {
    text-align: center;
    padding: 60px 20px;
    background-color: ${(props) => props.theme.headerDesktop};
    border-radius: 12px;
    border: 1px solid ${(props) => props.theme.border};

    h2 {
      font-size: 24px;
      color: ${(props) => props.theme.textColor};
      margin: 0 0 12px 0;
    }

    p {
      color: ${(props) => props.theme.soft};
      margin: 0 0 20px 0;
    }

    button {
      padding: 12px 24px;
      background-color: ${(props) => props.theme.color};
      color: white;
      border: none;
      border-radius: 6px;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;

      &:hover {
        opacity: 0.9;
      }
    }
  }

  .stream-layout {
    display: grid;
    grid-template-columns: 1fr 320px;
    gap: 20px;

    .main-content {
      .video-section {
        .connection-error {
          background-color: #e91916;
          color: white;
          padding: 12px 16px;
          border-radius: 8px 8px 0 0;
          display: flex;
          align-items: center;
          justify-content: space-between;

          p {
            margin: 0;
            font-size: 14px;
          }

          button {
            padding: 6px 12px;
            background-color: white;
            color: #e91916;
            border: none;
            border-radius: 4px;
            font-size: 13px;
            font-weight: 600;
            cursor: pointer;
          }
        }

        .video-container {
          aspect-ratio: 16 / 9;
          background-color: #000;
          border-radius: 8px;
          overflow: hidden;
        }
      }

      .stream-info {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        padding: 20px 0;
        border-bottom: 1px solid ${(props) => props.theme.border};

        .streamer-info {
          display: flex;
          gap: 16px;

          .streamer-avatar {
            width: 64px;
            height: 64px;
            border-radius: 50%;
            object-fit: cover;
          }

          .stream-details {
            h2 {
              font-size: 20px;
              font-weight: 600;
              color: ${(props) => props.theme.textColor};
              margin: 0 0 6px 0;
            }

            .streamer-name {
              font-size: 14px;
              color: ${(props) => props.theme.color};
              margin: 0 0 8px 0;
              font-weight: 500;
            }

            .stream-meta {
              display: flex;
              gap: 12px;

              .category {
                font-size: 13px;
                color: ${(props) => props.theme.textColor};
                background-color: ${(props) => props.theme.hover};
                padding: 4px 10px;
                border-radius: 4px;
              }

              .duration {
                font-size: 13px;
                color: ${(props) => props.theme.soft};
                display: flex;
                align-items: center;
                gap: 4px;

                &::before {
                  content: "";
                  display: inline-block;
                  width: 6px;
                  height: 6px;
                  background-color: #e91916;
                  border-radius: 50%;
                  animation: pulse 2s infinite;
                }
              }
            }
          }
        }

        .stream-actions {
          display: flex;
          align-items: center;
          gap: 12px;

          .action-btn {
            display: flex;
            align-items: center;
            gap: 6px;
            padding: 8px 16px;
            border: 1px solid ${(props) => props.theme.border};
            background-color: transparent;
            color: ${(props) => props.theme.textColor};
            border-radius: 6px;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${(props) => props.theme.hover};
            }

            svg {
              font-size: 18px;
            }
          }

          .viewer-count {
            display: flex;
            align-items: center;
            gap: 6px;
            padding: 8px 16px;
            background-color: ${(props) => props.theme.hover};
            border-radius: 6px;
            font-size: 14px;
            color: ${(props) => props.theme.textColor};

            svg {
              color: #e91916;
            }
          }
        }
      }

      .controls-section {
        margin-top: 20px;
      }

      .streamer-toggle {
        margin: 16px 0;
        padding: 12px 16px;
        background-color: ${(props) => props.theme.hover};
        border-radius: 6px;

        &.viewer {
          background-color: transparent;
          padding: 0;
        }

        label {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          color: ${(props) => props.theme.textColor};
          cursor: pointer;

          input[type="checkbox"] {
            width: 18px;
            height: 18px;
            accent-color: ${(props) => props.theme.color};
          }
        }
      }

      .pinned-section {
        margin-top: 20px;
        padding: 16px;
        background-color: ${(props) => props.theme.headerDesktop};
        border-radius: 8px;
        border: 1px solid ${(props) => props.theme.border};

        h3 {
          font-size: 14px;
          font-weight: 600;
          color: ${(props) => props.theme.textColor};
          margin: 0 0 12px 0;
          display: flex;
          align-items: center;
          gap: 8px;

          &::before {
            content: "";
            display: inline-block;
            width: 8px;
            height: 8px;
            background-color: ${(props) => props.theme.color};
            border-radius: 2px;
            transform: rotate(45deg);
          }
        }

        .pinned-product-card {
          display: flex;
          gap: 16px;

          img {
            width: 100px;
            height: 100px;
            object-fit: cover;
            border-radius: 8px;
          }

          .pinned-details {
            flex: 1;

            h4 {
              font-size: 16px;
              font-weight: 600;
              color: ${(props) => props.theme.textColor};
              margin: 0 0 8px 0;
            }

            .price {
              font-size: 20px;
              font-weight: 700;
              color: ${(props) => props.theme.color};
              margin: 0 0 12px 0;
            }

            .buy-btn {
              padding: 10px 24px;
              background-color: ${(props) => props.theme.color};
              color: white;
              border: none;
              border-radius: 6px;
              font-size: 14px;
              font-weight: 600;
              cursor: pointer;

              &:hover {
                opacity: 0.9;
              }
            }
          }
        }
      }
    }

    .sidebar {
      display: flex;
      flex-direction: column;
      gap: 16px;

      .chat-placeholder {
        background-color: ${(props) => props.theme.headerDesktop};
        border-radius: 8px;
        border: 1px solid ${(props) => props.theme.border};
        padding: 16px;
        flex: 1;
        min-height: 300px;

        h3 {
          font-size: 16px;
          font-weight: 600;
          color: ${(props) => props.theme.textColor};
          margin: 0 0 12px 0;
          padding-bottom: 12px;
          border-bottom: 1px solid ${(props) => props.theme.border};
        }

        p {
          color: ${(props) => props.theme.soft};
          font-size: 14px;
          text-align: center;
          margin-top: 40px;
        }
      }
    }
  }

  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }

  @media (max-width: 1024px) {
    .stream-layout {
      grid-template-columns: 1fr;

      .sidebar {
        flex-direction: row;

        > * {
          flex: 1;
        }
      }
    }
  }

  @media (max-width: 768px) {
    padding: 10px;

    .stream-layout {
      .main-content {
        .stream-info {
          flex-direction: column;
          gap: 16px;

          .streamer-info {
            .streamer-avatar {
              width: 48px;
              height: 48px;
            }

            .stream-details {
              h2 {
                font-size: 16px;
              }
            }
          }

          .stream-actions {
            width: 100%;
            justify-content: flex-start;
          }
        }

        .pinned-section {
          .pinned-product-card {
            img {
              width: 80px;
              height: 80px;
            }

            .pinned-details {
              h4 {
                font-size: 14px;
              }

              .price {
                font-size: 16px;
              }

              .buy-btn {
                padding: 8px 16px;
                font-size: 13px;
              }
            }
          }
        }
      }

      .sidebar {
        flex-direction: column;
      }
    }
  }
`;
