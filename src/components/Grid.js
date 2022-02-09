import React, { useRef } from "react";
import "./Grid.scss";
import useStyles from "./Grid.styles";

const offCell = {
  on: false,
  color: "#ffffff",
};

const Grid = ({ currentColor, cells, setCells, borders, canvas }) => {
  const classes = useStyles();

  // get i of cell for onClick reference.
  const updateCell = (i) => (e) => {
    e.preventDefault();

    // if left or right click is pressed
    if (e.buttons === 1 || e.buttons === 2) {
      setCells(
        cells.map((cell, cellIndex) => {
          if (cellIndex === i) {
            if (e.buttons === 1) {
              return {
                on: true,
                color: currentColor,
              };
            }
            return offCell;
          }
          return cell;
        })
      );
    }
  };


  return (
    <div className="right-side">
      <div className="instructions">
        <p> Left click to place color.</p>
        <p> Right click to clear color.</p>
        <p> You can click and drag to place and clear colors faster.</p>
      </div>
      <div
        className={
          cells.length === 15 * 15
            ? "grid"
            : cells.length === 500
            ? "portrait"
            : "landscape"
        }
        ref={canvas}
      >
        {cells.map((cell, index) => (
          <div
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            // set default color of cell to white
            style={{ background: cell.on ? cell.color : "#ffffff" }}
            className={borders ? "borderedCell" : "cell"}
            onMouseOver={updateCell(index)}
            onMouseDown={updateCell(index)}
            onContextMenu={(e) => e.preventDefault()}
          />
        ))}
      </div>
    </div>
  );
};

export default Grid;
