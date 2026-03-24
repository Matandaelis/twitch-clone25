import styled from "styled-components";

export const StyledProductCard = styled.div`
  background-color: ${(props) => props.theme.headerDesktop};
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  border: 1px solid ${(props) => props.theme.border};

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }

  .product-image {
    position: relative;
    width: 100%;
    height: 180px;
    overflow: hidden;
    background-color: ${(props) => props.theme.body};

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    &:hover img {
      transform: scale(1.05);
    }

    .discount-badge {
      position: absolute;
      top: 8px;
      left: 8px;
      background-color: #e91916;
      color: white;
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 12px;
      font-weight: 600;
    }

    .low-stock-badge {
      position: absolute;
      top: 8px;
      right: 8px;
      background-color: #f5a623;
      color: white;
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 11px;
      font-weight: 600;
    }

    .out-of-stock-badge {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: rgba(0, 0, 0, 0.7);
      color: white;
      padding: 8px 16px;
      border-radius: 4px;
      font-size: 14px;
      font-weight: 600;
    }

    .pin-button {
      position: absolute;
      bottom: 8px;
      right: 8px;
      background-color: rgba(0, 0, 0, 0.6);
      border: none;
      border-radius: 50%;
      width: 36px;
      height: 36px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      color: white;
      font-size: 18px;
      transition: background-color 0.2s;

      &:hover {
        background-color: rgba(0, 0, 0, 0.8);
      }

      &.pinned {
        background-color: ${(props) => props.theme.color};
        color: white;
      }
    }
  }

  .product-info {
    padding: 16px;

    .product-title {
      font-size: 16px;
      font-weight: 600;
      color: ${(props) => props.theme.textColor};
      margin: 0 0 8px 0;
      line-height: 1.4;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .product-description {
      font-size: 13px;
      color: ${(props) => props.theme.soft};
      margin: 0 0 12px 0;
      line-height: 1.4;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .product-price-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 12px;

      .price-container {
        display: flex;
        align-items: center;
        gap: 8px;

        .original-price {
          font-size: 14px;
          color: ${(props) => props.theme.soft};
          text-decoration: line-through;
        }

        .current-price {
          font-size: 18px;
          font-weight: 700;
          color: ${(props) => props.theme.color};
        }
      }

      .stock-info {
        font-size: 12px;
        color: ${(props) => props.theme.soft};
        background-color: ${(props) => props.theme.hover};
        padding: 4px 8px;
        border-radius: 4px;
      }
    }

    .product-actions {
      .add-to-cart-btn {
        width: 100%;
        padding: 10px;
        background-color: ${(props) => props.theme.color};
        color: white;
        border: none;
        border-radius: 6px;
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        transition: opacity 0.2s;

        &:hover:not(:disabled) {
          opacity: 0.9;
        }

        &:disabled {
          background-color: ${(props) => props.theme.soft};
          cursor: not-allowed;
        }

        svg {
          font-size: 16px;
        }
      }
    }
  }
`;
