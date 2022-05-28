import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Shoes from "./Pages/Shoes";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Shoes" element={<Shoes />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
