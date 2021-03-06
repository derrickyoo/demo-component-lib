import { createGlobalStyle } from "styled-components/macro";
import { primaryFont } from "./typography";

import { normalize } from "polished";

export const GlobalStyles = createGlobalStyle`
  ${normalize()}

  html {
    font-size: 16px;
    box-sizing: border-box;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    font-family: ${primaryFont};
  }

  main {
    width: 90%;
    margin: 0 auto;
  }
`;
