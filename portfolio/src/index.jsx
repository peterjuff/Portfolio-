import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './App';
import Navigation from "./Components/Navigation";
import Header from "./Components/Header";
import * as serviceWorker from "./serviceWorker";

class App extends Component {
  render() {
    return (
      <div>
        <Navigation LogoTitle="Peter Juffernbruch" />

        <Header title="Peter's Portfolio" button="Take a look" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
