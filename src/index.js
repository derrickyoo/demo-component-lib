import React from "react";
import ReactDom from "react-dom";
import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
} from "./components/Buttons";

import { GlobalStyles } from "./utils";

const App = () => {
  return (
    <div>
      <PrimaryButton modifiers={["small", "warning"]}>
        Hello World
      </PrimaryButton>
      <SecondaryButton modifiers="large">Goodbye World</SecondaryButton>
      <TertiaryButton>Hey World</TertiaryButton>

      <PrimaryButton disabled>Hello World</PrimaryButton>
      <SecondaryButton disabled>Goodbye World</SecondaryButton>
      <TertiaryButton disabled>Hey World</TertiaryButton>

      <GlobalStyles />
    </div>
  );
};

ReactDom.render(<App />, document.querySelector("#root"));
