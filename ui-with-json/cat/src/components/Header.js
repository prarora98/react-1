import React from "react";
import "../stylesheets/Header.css";

function Header() {
  return (
    <header>
      <div>
        random generator{" "}
        <span role="img" aria-label="cat-emoji">
          🐈
        </span>
      </div>
    </header>
  );
}
export default Header;
