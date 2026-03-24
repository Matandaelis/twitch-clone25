import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
`;

export const CartOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1000;
  animation: ${fadeIn} 0.2s ease;
`;

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 400px;
  max-width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.bgPrimary};
  box-shadow: -4px 0 20px rgba(0, 0, 0, 0.3);
  z-index: 1001;
  display: flex;
  flex-direction: column;
  animation: ${slideIn} 0.3s ease;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const CartHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid ${(props) => props.theme.border};

  h2 {
    font-size: 18px;
    font-weight: 600;
    color: ${(props) => props.theme.color};
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 0;

    svg {
      font-size: 20px;
      color: ${(props) => props.theme.color};
    }
  }

  .close-btn {
    background: none;
    border: none;
    font-size: 24px;
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

export const CartItems = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 16px;

  .empty-cart {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: ${(props) => props.theme.soft};
    text-align: center;

    svg {
      font-size: 48px;
      margin-bottom: 16px;
      opacity: 0.5;
    }

    p {
      font-size: 14px;
    }
  }
`;

export const CartItem = styled.div`
  display: flex;
  gap: 12px;
  padding: 12px;
  background-color: ${(props) => props.theme.bgSecondary};
  border-radius: 8px;
  margin-bottom: 12px;

  .item-image {
    width: 60px;
    height: 60px;
    border-radius: 6px;
    overflow: hidden;
    flex-shrink: 0;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .item-details {
    flex: 1;
    min-width: 0;

    h4 {
      font-size: 14px;
      font-weight: 500;
      color: ${(props) => props.theme.color};
      margin: 0 0 4px 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .price {
      font-size: 14px;
      font-weight: 600;
      color: ${(props) => props.theme.color};
    }

    .quantity-controls {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-top: 8px;

      button {
        width: 28px;
        height: 28px;
        border-radius: 4px;
        border: 1px solid ${(props) => props.theme.border};
        background: ${(props) => props.theme.bgPrimary};
        color: ${(props) => props.theme.color};
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        transition: all 0.2s;

        &:hover {
          background: ${(props) => props.theme.color};
          color: white;
          border-color: ${(props) => props.theme.color};
        }

        &:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          &:hover {
            background: ${(props) => props.theme.bgPrimary};
            color: ${(props) => props.theme.color};
            border-color: ${(props) => props.theme.border};
          }
        }
      }

      span {
        font-size: 14px;
        font-weight: 500;
        min-width: 24px;
        text-align: center;
      }
    }

    .remove-btn {
      position: absolute;
      top: 8px;
      right: 8px;
      background: none;
      border: none;
      color: ${(props) => props.theme.soft};
      cursor: pointer;
      padding: 4px;
      font-size: 16px;
      transition: color 0.2s;

      &:hover {
        color: #ff4444;
      }
    }
  }
`;

export const CartItemWrapper = styled.div`
  position: relative;
`;

export const CartFooter = styled.div`
  padding: 20px;
  border-top: 1px solid ${(props) => props.theme.border};
  background-color: ${(props) => props.theme.bgSecondary};

  .cart-total {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;

    .total-label {
      font-size: 16px;
      color: ${(props) => props.theme.soft};
    }

    .total-amount {
      font-size: 20px;
      font-weight: 700;
      color: ${(props) => props.theme.color};
    }
  }

  .checkout-btn {
    width: 100%;
    padding: 14px;
    background-color: ${(props) => props.theme.color};
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: opacity 0.2s, ${pulse} 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    &:hover {
      opacity: 0.9;
    }

    &:active {
      animation: ${pulse} 0.2s;
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }

  .clear-cart-btn {
    width: 100%;
    margin-top: 10px;
    padding: 10px;
    background: transparent;
    color: ${(props) => props.theme.soft};
    border: 1px solid ${(props) => props.theme.border};
    border-radius: 6px;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      border-color: #ff4444;
      color: #ff4444;
    }
  }
`;

export const CartBadge = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: #ff4444;
  color: white;
  font-size: 11px;
  font-weight: 600;
  min-width: 20px;
  height: 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 6px;
  animation: ${pulse} 2s infinite;
`;

export const CartButton = styled.button`
  position: relative;
  background: none;
  border: none;
  color: ${(props) => props.theme.color};
  font-size: 24px;
  cursor: pointer;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;