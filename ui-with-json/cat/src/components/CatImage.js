import React from "react";

export default function CatImage(props) {
  return (
    <img
      className="catImage"
      onLoad={props.onLoad}
      style={props.style}
      alt="cat"
      src={props.src}
    ></img>
  );
}
