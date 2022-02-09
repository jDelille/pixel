import React from "react";
import "./ColorPicker.scss";
const ColorPicker = ({ currentColor, onSetColor }) => {
  const colorChange = (event) => {
    onSetColor(event.target.value);
  };
  return (
    <input
      className="colorPicker"
      type="color"
      value={currentColor}
      onChange={colorChange}
    />
  );
};

export default ColorPicker;
