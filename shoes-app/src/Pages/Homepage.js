import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Homepage extends Component {
  render() {
    return (
      <div>
        Homepage
        <Link to="/shoes">Shoes</Link>
      </div>
    );
  }
}
