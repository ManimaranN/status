import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Uploader from "./imageUploader";
import SizeSelector from "./sizeSelector";
import StepExampleOrdered from "./progress";
import LocationSearchInput from "./address.js";

class App extends Component {
  render() {
    return (
      <div>
        {/* <SizeSelector /> */}
        <LocationSearchInput />
        <Uploader />
        <StepExampleOrdered />
      </div>
    );
  }
}

export default App;
