import React from "react";
import "../stylesheets/style.css";
function Button(props) {
  return (
    <button className={`${props.size} ${props.theme} `}>{props.name}</button>
  );
}

export default Button;
