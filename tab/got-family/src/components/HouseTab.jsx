import React, { Component } from "react";
import "../stylesheets/HouseTab.css";

class HouseTab extends Component {
  constructor(props) {
    super();
  }
  render() {
    const houses = this.props.houses;
    if (!houses) return "";
    console.log(houses);
    return houses.map(house => (
      <li>
        <a>{house.name}</a>
      </li>
    ));
  }
}

export default HouseTab;
