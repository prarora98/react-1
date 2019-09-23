import React, { Component } from "react";
import "../stylesheets/Loader.css";

export default class Loader extends Component {
  render() {
    return (
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    );
  }
}
