import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Uploader from "./imageUploader";
import SizeSelector from "./sizeSelector";
import StepExampleOrdered from "./progress";

class App extends Component {
  render() {
    return (
      <div>
        <SizeSelector />
        <Uploader />
        <StepExampleOrdered />
      </div>
    );
  }
}

export default App;
