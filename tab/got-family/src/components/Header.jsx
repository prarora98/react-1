import React from "react";
import "../stylesheets/Header.css";

class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <h1>
            Peoples Of GOT{" "}
            <span role="img" aria-label="king emoji">
              👑
            </span>
          </h1>
        </header>
      </React.Fragment>
    );
  }
}
export default Header;
