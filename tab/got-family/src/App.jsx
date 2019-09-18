import React from "react";
import HouseTab from "./components/HouseTab";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    fetch(
      "https://raw.githubusercontent.com/nnnkit/json-data-collections/master/got-houses.json"
    )
      .then(response => response.json())
      .then(data => this.setState({ houses: data.houses }))
      .catch(err => console.log(err));
  }
  render() {
    return (
      <>
        <HouseTab houses={this.state.houses} />
      </>
    );
  }
}

export default App;
