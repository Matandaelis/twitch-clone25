import styled from "styled-components";

export const StyledProductList = styled.div`
  .product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 20px;
    padding: 20px 0;
  }

  .empty-state {
    text-align: center;
    padding: 60px 20px;
    color: ${(props) => props.theme.soft};

    p {
      font-size: 16px;
    }
  }

  @media (max-width: 768px) {
    .product-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
    }
  }

  @media (max-width: 480px) {
    .product-grid {
      grid-template-columns: 1fr;
    }
  }
`;
