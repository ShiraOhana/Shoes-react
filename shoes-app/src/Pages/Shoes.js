import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Shoes extends Component {
  constructor(props) {
    super(props);
    this.state = { shoesData: [] };
    this.deleteShoe = this.deleteShoe.bind(this);
  }
  async componentDidMount() {
    const result = await axios.get(
      "https://629234e29d159855f0875848.mockapi.io/shoes"
    );
    this.setState({ shoesData: result.data });
  }
  async deleteShoe(id) {
    await axios.delete(
      `https://629234e29d159855f0875848.mockapi.io/shoes/${id}`
    );
    this.setState((prev) => ({
      shoesData: prev.shoesData.filter((x) => x.id !== id),
    }));
  }

  render() {
    return (
      <div>
        <div className="grid">
          {this.state.shoesData.map((item) => (
            <div className="card">
              <img src={item.img} style={{ width: "300px" }} />
              <p>Name:{item.shoename}</p>
              <p>Price:{item.price}</p>
              <button onClick={() => this.deleteShoe(item.id)}>Delete</button>
            </div>
          ))}
        </div>
        <button>
          <Link to="/">Back Home</Link>
        </button>
      </div>
    );
  }
}
