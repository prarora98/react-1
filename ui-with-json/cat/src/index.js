import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Header from "./components/Header";

const View = function() {
  return (
    <>
      <Header />
      <App />
    </>
  );
};

ReactDOM.render(<View />, document.getElementById("root"));
