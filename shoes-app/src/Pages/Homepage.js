import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Homepage extends Component {
  render() {
    return (
      <div className="home">
        <h1>
          Welcome to our Shoes store <br /> Click to take a look at our new
          collection <br />
          <button>
            {" "}
            <Link to="/shoes">Shoes</Link>
          </button>
        </h1>
      </div>
    );
  }
}
