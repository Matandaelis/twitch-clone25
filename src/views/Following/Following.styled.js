import styled from "styled-components";

export const StyledFollowing = styled.div`
  //Following mobile - Base styles (mobile first)
  .follow-mobile {
    display: block;

    .follow-box {
      padding: 55px 10px 20px;
      background-color: ${(props) => props.theme.header};
      color: ${(props) => props.theme.textColor};
      position: relative;
      z-index: 3;
      animation: pageAnim 0.3s ease-in-out;

      h1 {
        font-size: 24px;
        font-weight: 700;
        background-color: ${(props) => props.theme.header};
        margin-bottom: 15px;
      }

      h3 {
        font-size: 18px;
        width: 100%;
        position: sticky;
        top: 50px;
        padding: 12px 0;
        background-color: ${(props) => props.theme.header};
        margin: 0;
        z-index: 2;
      }
    }

    @media (min-width: 768px) {
      display: none;
    }
  }

  //Following Desktop
  .follow-desktop {
    display: none;

    .follow-box {
      display: block;

      .page-title {
        color: ${(props) => props.theme.textColor};
        font-size: 50px;
        padding: 30px 0;
      }

      .nav {
        ul {
          display: flex;
          gap: 5px;

          li {
            font-size: 18px;
            height: 35px;
            font-weight: 500;
            margin-right: 10px;
          }
        }
      }
    }

    @media (min-width: 768px) {
      display: block;
    }
  }
`;
