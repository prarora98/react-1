import React, { Component } from "react";
import catImage from "./utils/catImage";
import CatImage from "./components/CatImage";
import Loader from "./components/Loader";
import "./stylesheets/App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      url: "",
      load: true
    };
  }
  fetchCat = () => {
    this.setState({ load: true });
    catImage().then(url => this.setState({ url }));
  };
  componentDidMount() {
    this.fetchCat();
  }

  render() {
    return (
      <div className="catContainer">
        <div className="cat-content">
          {this.state.load ? <Loader /> : ""}
          {this.state.url ? (
            <CatImage
              onLoad={() => this.setState({ load: false })}
              style={this.state.load ? { width: 0 } : { width: "450px" }}
              src={this.state.url}
            ></CatImage>
          ) : (
            ""
          )}
        </div>
        <button className="newCatButton" onClick={() => this.fetchCat()}>
          New Cat
        </button>
      </div>
    );
  }
}
