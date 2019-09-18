import React from "react";
import "../stylesheets/MemberCard.css";

class MemberCard extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-left"></div>
            <div className="media-content"></div>
          </div>
          <div className="content">
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default MemberCard;
