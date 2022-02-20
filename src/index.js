import React, { useState } from "react";
import ReactDom from "react-dom";
import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
} from "./components/Buttons";

import { GlobalStyles, defaultTheme, darkTheme } from "./utils";

import { ThemeProvider } from "styled-components";

const App = () => {
  const [useDarkTheme, setUserDarkTheme] = useState(false);

  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
      <button
        style={{ margin: "0 16px 24px", padding: "8px", background: "none" }}
        onClick={() => setUserDarkTheme(true)}
      >
        Dark Theme
      </button>
      <button
        style={{ margin: "0 16px 24px", padding: "8px", background: "none" }}
        onClick={() => setUserDarkTheme(false)}
      >
        Default Theme
      </button>

      <div
        style={{
          background: useDarkTheme
            ? defaultTheme.primaryColor
            : darkTheme.primaryColor,
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <PrimaryButton modifiers={["small", "warning"]}>
          Hello World
        </PrimaryButton>
        <SecondaryButton modifiers="large">Goodbye World</SecondaryButton>
        <TertiaryButton>Hey World</TertiaryButton>
      </div>

      <div>
        <PrimaryButton disabled>Hello World</PrimaryButton>
        <SecondaryButton disabled>Goodbye World</SecondaryButton>
        <TertiaryButton disabled>Hey World</TertiaryButton>
      </div>

      <GlobalStyles />
    </ThemeProvider>
  );
};

ReactDom.render(<App />, document.querySelector("#root"));
