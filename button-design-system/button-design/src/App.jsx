import React from "react";
import Button from "./components/button";

function App() {
  return (
    <>
      <Button name="Button" size="medium" theme="dark" />
      <Button name="Button" size="medium" theme="light" />
      <Button name="Button" size="medium" type="primary" />
      <Button name="Button" size="medium" type="secondary" />
      <Button name="Button" type="dark-color" />
      <Button name="Button" size="small" type="light-color" />
      <Button name="Button" type="dark" size="small" />
      <Button name="Button" size="large" theme="dark" />
      <Button name="Button" size="large" type="primary" />
    </>
  );
}

export default App;
