import React from "react";
import "../stylesheets/style.css";
function Button(props) {
  return <button className={props.size,}>{props.name}</button>;
}

export default Button;
