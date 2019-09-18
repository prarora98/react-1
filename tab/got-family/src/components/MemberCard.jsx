import React from "react";
import "../stylesheets/MemberCard.css";

class MemberCard extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    const { people } = this.props.family;
    return (
      <div className="container">
        {people.map(member => (
          <div className="card" key={member.name}>
            <div className="card-content">
              <div className="media">
                <div className="media-left">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="media-content">{member.name}</div>
              </div>
              <div className="content">{member.description}</div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default MemberCard;
