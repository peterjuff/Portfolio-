import React, { Component } from "react";
import "./Header.css";
import Background from "../img/main.jpg";

const myStyles = {
  backgroundImage: `url(${Background})`,
  height: "80vh",
  backgroundSize: "cover"
};

class Header extends Component {
  render() {
    return (
      <header style={myStyles}>
        <h1>{this.props.title}</h1>)
      </header>
    );
  }
}

export default Header;
