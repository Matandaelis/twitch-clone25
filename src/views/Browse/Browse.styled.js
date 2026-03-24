import styled from "styled-components";

export const StyledBrowse = styled.div`
  // Mobile - Base styles (mobile first)
  .browse-mobile {
    display: block;

    .browse-box {
      padding: 55px 10px 20px;
      color: ${(props) => props.theme.textColor};
      background-color: ${(props) => props.theme.header};
      position: relative;
      z-index: 3;
      animation: pageAnim 0.3s ease-in-out;

      h1 {
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 10px;
      }

      .navigation {
        width: 100%;
        display: flex;
        align-items: center;
        margin: 15px 0;
        font-size: 16px;
        font-weight: 500;
        overflow-x: auto;
        -ms-overflow-style: none;
        scrollbar-width: none;

        &::-webkit-scrollbar {
          display: none;
        }

        & > div {
          border-bottom: 2px solid transparent;
          padding: 8px 12px;
          cursor: pointer;
          user-select: none;
          white-space: nowrap;
          transition: all 0.2s ease;

          &:active {
            opacity: 0.7;
          }
        }

        .nav-liveChannels {
          margin-left: 8px;
        }

        .nav-active {
          border-bottom: 2px solid ${(props) => props.theme.color};
          color: ${(props) => props.theme.color};
        }
      }
    }

    @media (min-width: 768px) {
      display: none;
    }
  }

  // Desktop
  .browse-desktop {
    display: none;

    .browse-box {
      display: block;

      .page-title {
        color: ${(props) => props.theme.textColor};
        font-size: 50px;
        padding: 30px 0;
      }

      .nav {
        margin-top: 40px;
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

      .search-filter {
        margin-top: 20px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: ${(props) => props.theme.textColor};

        .search-box {
          width: 320px;
          display: flex;
          align-items: center;

          span {
            font-size: 13px;
            font-weight: 600;
            width: 80px;
          }
        }

        .filter {
          width: 250px;
          display: flex;
          align-items: center;
          font-size: 13px;
          font-weight: 600;

          span {
            width: 60px;
          }

          .sort {
            display: flex;
            align-items: center;
            height: 30px;
            padding: 0 10px;
            border-radius: 5px;
            background-color: ${(props) => props.theme.hover};
            cursor: pointer;
            transition: 0.1s;
            user-select: none;

            .sort-icon {
              font-size: 20px;
              display: flex;
              align-items: center;
              justify-content: center;
            }

            &:hover {
              box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.3);
            }
          }
        }
      }
    }

    @media (min-width: 768px) {
      display: block;
    }
  }
`;
