import React from "react";
import "../stylesheets/MemberCard.css";

class MemberCard extends React.Component {
  constructor(props) {
    super();
    console.log(props);
  }
  render() {
    const { family } = this.props;
    console.log(family);
    return (
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-left"></div>
            <div className="media-content"></div>
          </div>
          <div className="content">
            <ul>
              {this.props.family.people.map(o => (
                <li>{o.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default MemberCard;
