import React, { Component } from "react";
import MemberCard from "./MemberCard";
import "../stylesheets/HouseTab.css";

class HouseTab extends Component {
  constructor(props) {
    super();
    this.state = {
      activeIndex: 0
    };
  }
  card = i => {
    this.setState({ activeIndex: i });
  };
  render() {
    const { houses } = this.props;
    if (!houses) return "";
    return (
      <>
        <ul>
          {houses.map((house, i) => (
            <li
              className={this.state.activeIndex === i ? "isActive" : ""}
              onClick={() => {
                this.card(i);
              }}
              key={i}
            >
              {house.name}
            </li>
          ))}
        </ul>
        <MemberCard family={houses[this.state.activeIndex]} />
      </>
    );
  }
}

export default HouseTab;
