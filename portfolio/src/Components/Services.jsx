import React, { Component } from "react";
import "./Services.css";
import { FaCode } from "react-icons/fa";

class Services extends Component {
  render() {
    return (
      <div className="services">
        <h3>services</h3>
        <h2>What I offer</h2>
        <div className="row">
          <div>
            <span>
              <FaCode />
            </span>
          </div>
          <div>
            <span />
          </div>
          <div>
            <span />
          </div>
          <div>
            <span />
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
