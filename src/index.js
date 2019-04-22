import React from "react";
import { render } from "react-dom";
import HelloCountryApp from "./HelloCountryApp";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};
const App = () => (
  <div style={styles}>
    <HelloCountryApp />
  </div>
);

render(<App />, document.getElementById("root"));
