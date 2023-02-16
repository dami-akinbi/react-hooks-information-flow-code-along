import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ onChangeColor, color }) {
  function handleClick() {
    onChangeColor(getRandomColor());
  }
  return (
    <div
      // deliverable 1:
      // child changes parent
      // onClick={onChangeColor}

      // deliverable 2:
      // child changes sibling-child
      onClick={handleClick}
      className="child"
      style={{ backgroundColor: color }}
    />
  );
}

export default Child;
