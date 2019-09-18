import React, { Component } from "react";
import "../stylesheets/HouseTab.css";

class HouseTab extends Component {
  constructor(props) {
    super();
  }
  render() {
    const houses = this.props.houses;
    if (!houses) return "";
    return (
      <ul>
        {houses.map((house, i) => (
          <li key={i}>{house.name}</li>
        ))}
      </ul>
    );
  }
}

export default HouseTab;
