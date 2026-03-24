import styled from "styled-components";

export const StyledStreamControls = styled.div`
  background-color: ${(props) => props.theme.headerDesktop};
  border-radius: 8px;
  padding: 16px;
  border: 1px solid ${(props) => props.theme.border};

  .controls-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    padding-bottom: 16px;
    border-bottom: 1px solid ${(props) => props.theme.border};

    .media-controls {
      display: flex;
      gap: 12px;

      .control-btn {
        width: 44px;
        height: 44px;
        border-radius: 50%;
        border: none;
        background-color: ${(props) => props.theme.hover};
        color: ${(props) => props.theme.textColor};
        font-size: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.2s;

        &:hover {
          background-color: ${(props) => props.theme.color};
          color: white;
        }

        &.disabled {
          background-color: #e91916;
          color: white;
        }

        &.active {
          background-color: #00b894;
          color: white;
        }
      }
    }

    .stream-actions {
      display: flex;
      gap: 12px;

      .stream-btn {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 10px 20px;
        border-radius: 6px;
        border: none;
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s;
        background-color: #e91916;
        color: white;

        &:hover {
          opacity: 0.9;
        }

        svg {
          font-size: 18px;
        }

        &.live {
          background-color: ${(props) => props.theme.soft};

          &:hover {
            background-color: #e91916;
          }
        }
      }

      .end-btn {
        padding: 10px 20px;
        border-radius: 6px;
        border: 1px solid ${(props) => props.theme.border};
        background-color: transparent;
        color: ${(props) => props.theme.textColor};
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s;

        &:hover {
          background-color: ${(props) => props.theme.hover};
        }
      }
    }
  }

  .product-pins {
    h4 {
      font-size: 14px;
      font-weight: 600;
      color: ${(props) => props.theme.textColor};
      margin: 0 0 12px 0;
    }

    .product-list {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      max-height: 150px;
      overflow-y: auto;

      &::-webkit-scrollbar {
        width: 4px;
      }

      &::-webkit-scrollbar-thumb {
        background-color: ${(props) => props.theme.soft};
        border-radius: 2px;
      }
    }

    .product-pin-btn {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 12px;
      background-color: ${(props) => props.theme.body};
      border: 1px solid ${(props) => props.theme.border};
      border-radius: 6px;
      cursor: pointer;
      transition: all 0.2s;
      max-width: 200px;

      .pin-icon {
        color: ${(props) => props.theme.color};
        font-size: 14px;
      }

      .product-name {
        font-size: 13px;
        color: ${(props) => props.theme.textColor};
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        flex: 1;
      }

      .product-price {
        font-size: 12px;
        color: ${(props) => props.theme.color};
        font-weight: 600;
      }

      &:hover:not(:disabled) {
        border-color: ${(props) => props.theme.color};
      }

      &.pinned {
        background-color: ${(props) => props.theme.color}15;
        border-color: ${(props) => props.theme.color};
      }

      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    }

    .pinned-info {
      margin-top: 12px;
      padding: 10px;
      background-color: ${(props) => props.theme.color}15;
      border-radius: 6px;
      font-size: 13px;
      color: ${(props) => props.theme.textColor};

      span {
        font-weight: 500;
      }
    }
  }

  @media (max-width: 768px) {
    .controls-row {
      flex-direction: column;
      gap: 16px;
      align-items: stretch;

      .media-controls {
        justify-content: center;
      }

      .stream-actions {
        justify-content: center;
      }
    }

    .product-pins .product-list {
      max-height: 120px;
    }
  }
`;
