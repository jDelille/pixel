import React, { useState, useMemo } from "react";

import Grid from "./components/Grid";
import ColorPicker from "./components/ColorPicker";
import useStyles from "./styles/App.styles";
import "./styles/App.scss";

const offCell = {
  on: false,
  color: "#ffffff",
};

// set canvas sizes
let faviconSize = 256;
let landscapeSize = 600;
let portraitSize = 32 * 12;

// default favicon size
const initialCells = Array.from({ length: faviconSize }, () => offCell);
// landscape size
const landscapeCells = Array.from({ length: landscapeSize }, () => offCell);
// portrait size
const portraitCells = Array.from({ length: portraitSize }, () => offCell);

function App() {
  const [cells, setCells] = useState(initialCells);
  const [currentColor, setCurrentColor] = useState("#56BC58");
  const [borders, setBorders] = useState(false);
  const [landscape, setLandscape] = useState(false);
  const [portrait, setPortrait] = useState(false);
  const [favicon, setFavicon] = useState(false);

  //

  const classes = useStyles();
  const colorSwatch = useMemo(
    () => [
      ...new Set(cells.filter((cell) => cell.on).map((cell) => cell.color)),
    ],
    [cells]
  );
  const chatString = useMemo(
    () => cells.map((cell) => cell.color.slice(1)).join(","),
    [cells]
  );

  // toggle favicon
  const toggleFavicon = () => {
    setFavicon(true);
    setLandscape(false);
    setPortrait(false);
    setCells(initialCells);
  };

  // toggle landscape
  const toggleLandscape = () => {
    setLandscape(true);
    setPortrait(false);
    setFavicon(false);
    setCells(landscapeCells);
  };

  // toggle portrait
  const togglePortrait = () => {
    setLandscape(false);
    setPortrait(true);
    setFavicon(false);
    setCells(portraitCells);
  };

  return (
    <div className={classes.app}>
      {/* color picker */}
      <ColorPicker currentColor={currentColor} onSetColor={setCurrentColor} />

      <div className={classes.colorSwatchContainer}>
        {colorSwatch.map((color) => (
          <div
            key={color}
            onClick={() => setCurrentColor(color)}
            className={classes.colorSwatch}
            style={{ background: color }}
          />
        ))}
      </div>

      {/* pass each cell and color to grid */}
      <button className="show-borders" onClick={() => setBorders(!borders)}>
        Show Borders
      </button>
      <div className="control-container">
        <button className="control-btn" onClick={toggleFavicon}>
          Favicon Size
        </button>
        <button className="control-btn" onClick={toggleLandscape}>
          Landscape
        </button>
        <button className="control-btn" onClick={togglePortrait}>
          Portrait
        </button>
      </div>
      <div className="canvas">
      <Grid
        cells={cells}
        setCells={setCells}
        currentColor={currentColor}
        borders={borders}
      />
      </div>
      
      <p className={classes.chatString}>
        {/* eslint-disable-next-line */}
        !rgb
        {chatString}
      </p>
    </div>
  );
}

export default App;
