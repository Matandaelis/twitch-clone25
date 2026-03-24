import styled from "styled-components";

export const StyledHostProductManager = styled.div`
  background-color: ${(props) => props.theme.headerDesktop};
  border-radius: 8px;
  padding: 20px;
  border: 1px solid ${(props) => props.theme.border};

  .manager-header {
    margin-bottom: 20px;

    h3 {
      font-size: 18px;
      font-weight: 600;
      color: ${(props) => props.theme.textColor};
      margin: 0 0 4px 0;
    }

    .subtitle {
      font-size: 13px;
      color: ${(props) => props.theme.soft};
      margin: 0;
    }
  }

  .manager-filters {
    display: flex;
    gap: 12px;
    margin-bottom: 20px;

    .search-box {
      flex: 1;
      position: relative;

      .search-icon {
        position: absolute;
        left: 12px;
        top: 50%;
        transform: translateY(-50%);
        color: ${(props) => props.theme.soft};
        font-size: 16px;
      }

      input {
        width: 100%;
        padding: 10px 12px 10px 40px;
        border: 1px solid ${(props) => props.theme.border};
        border-radius: 6px;
        background-color: ${(props) => props.theme.body};
        color: ${(props) => props.theme.textColor};
        font-size: 14px;

        &::placeholder {
          color: ${(props) => props.theme.soft};
        }

        &:focus {
          outline: none;
          border-color: ${(props) => props.theme.color};
        }
      }
    }

    .stock-filter {
      padding: 10px 16px;
      border: 1px solid ${(props) => props.theme.border};
      border-radius: 6px;
      background-color: ${(props) => props.theme.body};
      color: ${(props) => props.theme.textColor};
      font-size: 14px;
      cursor: pointer;

      &:focus {
        outline: none;
        border-color: ${(props) => props.theme.color};
      }
    }
  }

  .product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 16px;
    max-height: 400px;
    overflow-y: auto;
    margin-bottom: 20px;

    &::-webkit-scrollbar {
      width: 6px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${(props) => props.theme.soft};
      border-radius: 3px;
    }
  }

  .product-card {
    background-color: ${(props) => props.theme.body};
    border: 1px solid ${(props) => props.theme.border};
    border-radius: 8px;
    overflow: hidden;
    transition: all 0.2s;

    &:hover {
      border-color: ${(props) => props.theme.color};
      transform: translateY(-2px);
    }

    &.pinned {
      border-color: ${(props) => props.theme.color};
      box-shadow: 0 0 0 1px ${(props) => props.theme.color};
    }

    &.out {
      opacity: 0.7;
    }

    .product-image {
      position: relative;
      height: 120px;
      background-color: ${(props) => props.theme.hover};

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .pin-badge {
        position: absolute;
        top: 8px;
        right: 8px;
        display: flex;
        align-items: center;
        gap: 4px;
        padding: 4px 8px;
        background-color: ${(props) => props.theme.color};
        color: white;
        border-radius: 4px;
        font-size: 11px;
        font-weight: 600;

        svg {
          font-size: 12px;
        }
      }

      .stock-badge {
        position: absolute;
        top: 8px;
        left: 8px;
        display: flex;
        align-items: center;
        gap: 4px;
        padding: 4px 8px;
        border-radius: 4px;
        font-size: 11px;
        font-weight: 600;

        &.critical, &.out {
          background-color: #e74c3c;
          color: white;
        }

        &.low {
          background-color: #f39c12;
          color: white;
        }

        svg {
          font-size: 12px;
        }
      }
    }

    .product-info {
      padding: 12px;

      .product-title {
        font-size: 14px;
        font-weight: 600;
        color: ${(props) => props.theme.textColor};
        margin: 0 0 6px 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .product-price {
        font-size: 16px;
        font-weight: 700;
        color: ${(props) => props.theme.color};
        margin-bottom: 4px;

        .original-price {
          font-size: 12px;
          color: ${(props) => props.theme.soft};
          text-decoration: line-through;
          margin-left: 8px;
        }
      }

      .stock-info {
        .stock-count {
          font-size: 12px;
          
          &.normal {
            color: #27ae60;
          }
          
          &.low, &.critical {
            color: #f39c12;
          }
          
          &.out {
            color: #e74c3c;
          }
        }
      }
    }

    .product-actions {
      padding: 12px;
      padding-top: 0;
      display: flex;
      flex-direction: column;
      gap: 10px;

      .pin-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
        width: 100%;
        padding: 8px 12px;
        border: 1px solid ${(props) => props.theme.border};
        border-radius: 6px;
        background-color: transparent;
        color: ${(props) => props.theme.textColor};
        font-size: 13px;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s;

        &:hover:not(:disabled) {
          border-color: ${(props) => props.theme.color};
          color: ${(props) => props.theme.color};
        }

        &.pinned {
          background-color: ${(props) => props.theme.color};
          border-color: ${(props) => props.theme.color};
          color: white;
        }

        &:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      }

      .stock-controls {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12px;

        .stock-btn {
          width: 32px;
          height: 32px;
          border-radius: 6px;
          border: 1px solid ${(props) => props.theme.border};
          background-color: ${(props) => props.theme.headerDesktop};
          color: ${(props) => props.theme.textColor};
          font-size: 18px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;

          &:hover:not(:disabled) {
            background-color: ${(props) => props.theme.hover};
          }

          &:disabled {
            opacity: 0.5;
            cursor: not-allowed;
          }

          &.decrease {
            color: #e74c3c;
          }

          &.increase {
            color: #27ae60;
          }
        }

        .stock-label {
          font-size: 12px;
          color: ${(props) => props.theme.soft};
        }
      }
    }
  }

  .no-products {
    text-align: center;
    padding: 40px 20px;
    color: ${(props) => props.theme.soft};
    font-size: 14px;
  }

  .manager-summary {
    display: flex;
    justify-content: space-between;
    padding-top: 16px;
    border-top: 1px solid ${(props) => props.theme.border};

    .summary-item {
      display: flex;
      flex-direction: column;
      align-items: center;

      .label {
        font-size: 11px;
        color: ${(props) => props.theme.soft};
        margin-bottom: 4px;
      }

      .value {
        font-size: 16px;
        font-weight: 600;
        color: ${(props) => props.theme.textColor};

        &.warning {
          color: #f39c12;
        }

        &.danger {
          color: #e74c3c;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .manager-filters {
      flex-direction: column;
    }

    .product-grid {
      grid-template-columns: 1fr;
    }

    .manager-summary {
      flex-wrap: wrap;
      gap: 12px;

      .summary-item {
        flex: 1;
        min-width: 70px;
      }
    }
  }
`;
