import React, { Component } from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";

class home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <html className="home-pg">
        <div>
          <div className="home-title">
            <h1 className="home-head">Line em up</h1>
            <h3>
              {" "}
              Enter your favorite players from tonights slate and we'll create
              an optimized lineup
            </h3>
            <Link to="/players">
              <button type="button">Let's Get This Bread</button>
            </Link>
          </div>
        </div>
      </html>
    );
  }
}

export default home;
