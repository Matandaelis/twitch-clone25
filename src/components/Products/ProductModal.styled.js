import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.75);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  animation: ${fadeIn} 0.2s ease;
`;

export const ModalContainer = styled.div`
  background: ${(props) => props.theme.bgPrimary};
  border-radius: 16px;
  width: 100%;
  max-width: 700px;
  max-height: 90vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  animation: ${slideUp} 0.3s ease;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  border-bottom: 1px solid ${(props) => props.theme.border};

  h2 {
    font-size: 18px;
    font-weight: 600;
    color: ${(props) => props.theme.color};
    margin: 0;
  }

  .close-btn {
    background: none;
    border: none;
    font-size: 28px;
    color: ${(props) => props.theme.soft};
    cursor: pointer;
    padding: 4px;
    line-height: 1;
    transition: color 0.2s;

    &:hover {
      color: ${(props) => props.theme.color};
    }
  }
`;

export const ModalContent = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 24px;
  display: flex;
  gap: 24px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const ProductImage = styled.div`
  width: 280px;
  flex-shrink: 0;

  @media (max-width: 600px) {
    width: 100%;
  }

  img {
    width: 100%;
    height: 280px;
    object-fit: cover;
    border-radius: 12px;
    background: ${(props) => props.theme.bgSecondary};
  }
`;

export const ProductInfo = styled.div`
  flex: 1;

  .product-category {
    font-size: 12px;
    color: ${(props) => props.theme.color};
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 8px;
  }

  h3 {
    font-size: 22px;
    font-weight: 600;
    color: ${(props) => props.theme.color};
    margin: 0 0 12px 0;
    line-height: 1.3;
  }

  .description {
    font-size: 14px;
    color: ${(props) => props.theme.soft};
    line-height: 1.6;
    margin-bottom: 20px;
  }

  .price-section {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 16px;

    .original-price {
      font-size: 16px;
      color: ${(props) => props.theme.soft};
      text-decoration: line-through;
    }

    .current-price {
      font-size: 28px;
      font-weight: 700;
      color: ${(props) => props.theme.color};
    }

    .discount-badge {
      background: #4caf50;
      color: white;
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 12px;
      font-weight: 600;
    }
  }

  .stock-info {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 20px;
    font-size: 14px;

    .stock-count {
      color: ${(props) => (props.$lowStock ? "#ff9800" : props.theme.soft)};
      font-weight: ${(props) => (props.$lowStock ? "600" : "400")};
    }

    .stock-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: ${(props) => (props.$inStock ? "#4caf50" : "#f44336")};
    }
  }

  .product-stats {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
    padding: 12px;
    background: ${(props) => props.theme.bgSecondary};
    border-radius: 8px;

    .stat {
      text-align: center;

      .stat-value {
        font-size: 18px;
        font-weight: 600;
        color: ${(props) => props.theme.color};
      }

      .stat-label {
        font-size: 11px;
        color: ${(props) => props.theme.soft};
        text-transform: uppercase;
      }
    }
  }
`;

export const QuantitySelector = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;

  .quantity-label {
    font-size: 14px;
    color: ${(props) => props.theme.soft};
  }

  .quantity-controls {
    display: flex;
    align-items: center;
    gap: 8px;

    button {
      width: 36px;
      height: 36px;
      border-radius: 8px;
      border: 1px solid ${(props) => props.theme.border};
      background: ${(props) => props.theme.bgSecondary};
      color: ${(props) => props.theme.color};
      font-size: 18px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s;

      &:hover:not(:disabled) {
        background: ${(props) => props.theme.color};
        color: white;
        border-color: ${(props) => props.theme.color};
      }

      &:disabled {
        opacity: 0.4;
        cursor: not-allowed;
      }
    }

    .quantity-value {
      font-size: 18px;
      font-weight: 600;
      min-width: 40px;
      text-align: center;
      color: ${(props) => props.theme.color};
    }
  }
`;

export const ModalActions = styled.div`
  display: flex;
  gap: 12px;
  padding: 20px 24px;
  border-top: 1px solid ${(props) => props.theme.border};
  background: ${(props) => props.theme.bgSecondary};

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const AddToCartButton = styled.button`
  flex: 1;
  padding: 14px 24px;
  background: ${(props) => props.theme.color};
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.2s;

  &:hover:not(:disabled) {
    opacity: 0.9;
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const BuyNowButton = styled.button`
  flex: 1;
  padding: 14px 24px;
  background: #4caf50;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.2s;

  &:hover:not(:disabled) {
    background: #43a047;
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const OutOfStockButton = styled.button`
  flex: 1;
  padding: 14px 24px;
  background: ${(props) => props.theme.bgPrimary};
  color: ${(props) => props.theme.soft};
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: not-allowed;
`;