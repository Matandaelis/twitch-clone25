import styled from "styled-components";

// Page HOME
export const StyledHome = styled.div`
  /* Home Mobile - Base styles (mobile first) */
  .home-mobile {
    display: block;

    .home-box {
      padding: 55px 10px 20px;
      background-color: ${(props) => props.theme.header};
      color: ${(props) => props.theme.textColor};
      position: relative;
      z-index: 3;
      animation: pageAnim 0.3s ease-in-out;

      h1 {
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 20px;
      }

      .categories {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 12px;
        margin: 20px 0;

        .category-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 15px;
          background-color: ${(props) => props.theme.color};
          color: #fff;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.2s ease, opacity 0.2s ease;
          user-select: none;

          &:active {
            transform: scale(0.98);
            opacity: 0.9;
          }

          .category-icon {
            font-size: 20px;
          }
        }
      }
      .home-title {
        font-size: 18px;
        width: 100%;
        padding: 12px 0;
        background-color: ${(props) => props.theme.header};
        position: sticky;
        top: 50px;
        z-index: 2;
        margin: 0;

        span {
          color: ${(props) => props.theme.color};
          cursor: pointer;
        }
      }
    }

    /* Override for tablet and desktop */
    @media (min-width: 768px) {
      display: none;
    }
  }

  /* Home Desktop */
  .home-desktop {
    display: none;

    .home-box {
      display: block;
    }

    @media (min-width: 768px) {
      display: block;
    }
  }
`;
