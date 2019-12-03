import React from "react";
import "./sizeSelector.css";

export default function SizeSelector() {
  return (
    <div>
      <div className="size_selector">
        <input type="radio" id="small" name="radio" />
        <label for="small">Small</label>
        <input type="radio" id="medium" name="radio" />
        <label for="medium">Medium</label>
        <input type="radio" id="large" name="radio" />
        <label for="large">Large</label>
      </div>
    </div>
  );
}
