import styled from "styled-components";

export const StyledPinnedProductOverlay = styled.div`
  position: absolute;
  ${(props) => {
    switch (props.position) {
      case "top-left":
        return "top: 16px; left: 16px;";
      case "top-right":
        return "top: 16px; right: 16px;";
      case "bottom-left":
        return "bottom: 16px; left: 16px;";
      case "bottom-right":
      default:
        return "bottom: 16px; right: 16px;";
    }
  }}
  background-color: rgba(0, 0, 0, 0.9);
  border-radius: 12px;
  padding: 16px;
  width: 320px;
  max-width: calc(100% - 32px);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 100;
  animation: slideIn 0.3s ease;

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .pinned-badge {
    display: flex;
    align-items: center;
    gap: 6px;
    color: ${(props) => props.theme.color};
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 12px;
    text-transform: uppercase;
    letter-spacing: 0.5px;

    svg {
      font-size: 14px;
    }
  }

  .close-btn {
    position: absolute;
    top: 12px;
    right: 12px;
    background: rgba(255, 255, 255, 0.1);
    border: none;
    border-radius: 50%;
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: white;
    font-size: 18px;
    transition: background-color 0.2s;

    &:hover {
      background: rgba(255, 255, 255, 0.2);
    }
  }

  .product-content {
    display: flex;
    gap: 12px;

    .product-image {
      width: 80px;
      height: 80px;
      border-radius: 8px;
      overflow: hidden;
      flex-shrink: 0;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .product-details {
      flex: 1;
      min-width: 0;

      .product-title {
        color: white;
        font-size: 14px;
        font-weight: 600;
        margin: 0 0 6px 0;
        line-height: 1.3;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }

      .price-row {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 6px;

        .original-price {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.5);
          text-decoration: line-through;
        }

        .current-price {
          font-size: 16px;
          font-weight: 700;
          color: ${(props) => props.theme.color};
        }
      }

      .stock-info {
        font-size: 11px;
        color: rgba(255, 255, 255, 0.7);
        margin-bottom: 10px;
      }

      .buy-now-btn {
        width: 100%;
        padding: 8px 12px;
        background-color: ${(props) => props.theme.color};
        color: white;
        border: none;
        border-radius: 6px;
        font-size: 13px;
        font-weight: 600;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
        transition: opacity 0.2s;

        &:hover:not(:disabled) {
          opacity: 0.9;
        }

        &:disabled {
          background-color: rgba(255, 255, 255, 0.2);
          cursor: not-allowed;
        }

        svg {
          font-size: 14px;
        }
      }
    }
  }

  @media (max-width: 768px) {
    width: 280px;
    padding: 12px;

    .product-content {
      .product-image {
        width: 60px;
        height: 60px;
      }

      .product-details {
        .product-title {
          font-size: 13px;
        }

        .current-price {
          font-size: 14px;
        }

        .buy-now-btn {
          padding: 6px 10px;
          font-size: 12px;
        }
      }
    }
  }
`;
