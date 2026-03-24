import styled from "styled-components";

export const StyledStreamList = styled.div`
  padding: 20px;
  max-width: 1400px;
  margin: 0 auto;

  .page-header {
    text-align: center;
    margin-bottom: 30px;

    h1 {
      font-size: 28px;
      font-weight: 700;
      color: ${(props) => props.theme.textColor};
      margin: 0 0 8px 0;
    }

    p {
      font-size: 16px;
      color: ${(props) => props.theme.soft};
      margin: 0;
    }
  }

  .streams-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 20px;

    .stream-card {
      background-color: ${(props) => props.theme.headerDesktop};
      border-radius: 12px;
      overflow: hidden;
      cursor: pointer;
      transition: transform 0.2s, box-shadow 0.2s;
      border: 1px solid ${(props) => props.theme.border};

      &:hover {
        transform: translateY(-4px);
        box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);

        .thumbnail img {
          transform: scale(1.05);
        }
      }

      .thumbnail {
        position: relative;
        aspect-ratio: 16 / 9;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s;
        }

        .live-badge {
          position: absolute;
          top: 12px;
          left: 12px;
          background-color: #e91916;
          color: white;
          padding: 4px 10px;
          border-radius: 4px;
          font-size: 12px;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 6px;
          letter-spacing: 0.5px;
          animation: pulse 2s infinite;

          svg {
            font-size: 14px;
          }
        }

        .viewer-count {
          position: absolute;
          bottom: 12px;
          left: 12px;
          background-color: rgba(0, 0, 0, 0.7);
          color: white;
          padding: 4px 10px;
          border-radius: 4px;
          font-size: 13px;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .duration {
          position: absolute;
          bottom: 12px;
          right: 12px;
          background-color: rgba(0, 0, 0, 0.7);
          color: white;
          padding: 4px 10px;
          border-radius: 4px;
          font-size: 13px;
          font-weight: 500;
        }
      }

      .stream-info {
        display: flex;
        gap: 12px;
        padding: 16px;

        .streamer-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          object-fit: cover;
          flex-shrink: 0;
        }

        .stream-details {
          flex: 1;
          min-width: 0;

          .stream-title {
            font-size: 15px;
            font-weight: 600;
            color: ${(props) => props.theme.textColor};
            margin: 0 0 6px 0;
            line-height: 1.4;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

          .streamer-name {
            font-size: 13px;
            color: ${(props) => props.theme.soft};
            margin: 0 0 8px 0;
          }

          .category {
            display: inline-block;
            font-size: 12px;
            color: ${(props) => props.theme.color};
            background-color: ${(props) => props.theme.color}15;
            padding: 4px 10px;
            border-radius: 4px;
            margin-bottom: 8px;
          }

          .pinned-product {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 8px;
            background-color: ${(props) => props.theme.body};
            border-radius: 6px;

            img {
              width: 32px;
              height: 32px;
              object-fit: cover;
              border-radius: 4px;
            }

            span {
              font-size: 13px;
              font-weight: 600;
              color: ${(props) => props.theme.color};
            }
          }
        }
      }
    }
  }

  .empty-state {
    text-align: center;
    padding: 80px 20px;
    color: ${(props) => props.theme.soft};

    .icon {
      font-size: 64px;
      margin-bottom: 16px;
      opacity: 0.5;
    }

    h2 {
      font-size: 20px;
      color: ${(props) => props.theme.textColor};
      margin: 0 0 8px 0;
    }

    p {
      font-size: 14px;
      margin: 0;
    }
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

  @media (max-width: 768px) {
    padding: 15px;

    .page-header {
      h1 {
        font-size: 22px;
      }

      p {
        font-size: 14px;
      }
    }

    .streams-grid {
      grid-template-columns: 1fr;
      gap: 16px;

      .stream-card {
        .stream-info {
          padding: 12px;
        }
      }
    }
  }
`;
