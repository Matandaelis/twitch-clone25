import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

html {
  scroll-behavior: smooth;
}

body {
  background: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
}
body::-webkit-scrollbar {
  width: 5px;
}
 
body::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
}

a {
  color: ${(props) => props.theme.text};
  text-decoration: none;
}

.app {
  display: block;
}

/* Mobile First - Base styles for mobile */
.main {
  padding: 55px 10px 80px 10px;
}

/* Tablet breakpoint */
@media (min-width: 768px) {
  .app {
    .main {
      padding: 55px 15px 55px 75px;

      &.sidebar-open {
        padding-left: 265px;
      }
    }
  }
}

/* Desktop breakpoint */
@media (min-width: 1200px) {
  body {
    background: ${(props) => props.theme.bodyDesktop};
  }
}

@keyframes pageAnim {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export default GlobalStyles;
