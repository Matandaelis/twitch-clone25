import styled from "styled-components";

export const StyledShop = styled.div`
  padding: 20px;
  max-width: 1400px;
  margin: 0 auto;

  .shop-header {
    text-align: center;
    margin-bottom: 30px;

    h1 {
      font-size: 32px;
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

  .stats-bar {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 16px;
    margin-bottom: 30px;

    .stat-item {
      background-color: ${(props) => props.theme.headerDesktop};
      padding: 20px;
      border-radius: 12px;
      text-align: center;
      border: 1px solid ${(props) => props.theme.border};

      .stat-value {
        display: block;
        font-size: 24px;
        font-weight: 700;
        color: ${(props) => props.theme.color};
        margin-bottom: 4px;
      }

      .stat-label {
        font-size: 13px;
        color: ${(props) => props.theme.soft};
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }
    }
  }

  .filters-section {
    margin-bottom: 30px;

    h3 {
      font-size: 14px;
      font-weight: 600;
      color: ${(props) => props.theme.soft};
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin: 0 0 12px 0;
    }

    .filter-buttons {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;

      .filter-btn {
        padding: 10px 20px;
        border-radius: 20px;
        border: 1px solid ${(props) => props.theme.border};
        background-color: transparent;
        color: ${(props) => props.theme.textColor};
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s;

        &:hover {
          border-color: ${(props) => props.theme.color};
          color: ${(props) => props.theme.color};
        }

        &.active {
          background-color: ${(props) => props.theme.color};
          border-color: ${(props) => props.theme.color};
          color: white;
        }
      }
    }
  }

  .featured-section,
  .products-section {
    margin-bottom: 40px;

    h2 {
      font-size: 20px;
      font-weight: 600;
      color: ${(props) => props.theme.textColor};
      margin: 0 0 16px 0;
    }
  }

  @media (max-width: 768px) {
    padding: 15px;

    .shop-header {
      h1 {
        font-size: 24px;
      }

      p {
        font-size: 14px;
      }
    }

    .stats-bar {
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;

      .stat-item {
        padding: 15px;

        .stat-value {
          font-size: 18px;
        }

        .stat-label {
          font-size: 11px;
        }
      }
    }

    .filters-section {
      .filter-buttons {
        gap: 8px;

        .filter-btn {
          padding: 8px 16px;
          font-size: 13px;
        }
      }
    }
  }
`;
