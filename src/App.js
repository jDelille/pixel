import React, { useState, useMemo, useRef } from "react";
import Grid from "./components/Grid";
import ColorPicker from "./components/ColorPicker";
import "./styles/App.scss";
import { exportComponentAsPNG, exportComponentAsJPEG } from "react-component-export-image";
const offCell = {
  on: false,
  color: "#ffffff",
};

// set canvas sizes
let faviconSize = 15 * 15;
let landscapeSize = 15 * 30;
let portraitSize = 500;

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


  // grab image from canvas for download
  const panelRef = useRef();


  const colorSwatch = useMemo(
    () => [
      ...new Set(cells.filter((cell) => cell.on).map((cell) => cell.color)),
    ],
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
    <div className="App">
      {/* LEFT SIDE  */}

      <div className="left">
        <div className="controls">
          <div className="top-controls">
            <ColorPicker
              currentColor={currentColor}
              onSetColor={setCurrentColor}
              className="color-picker"
            />
          </div>

          {/* CHOOSE CANVAS SIZE */}
          <div className="container">
            <div className="title">
              <p> Canvas </p>
            </div>
            <div className="display">
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
          </div>

          {/* COLOR HISTORY CONTAINER */}
          <div className="container">
            {/* color picker */}
            <div className="title">
              <p> Color History </p>
            </div>
            <div className="display">
              {colorSwatch.map((color) => (
                <div
                  key={color}
                  onClick={() => setCurrentColor(color)}
                  className="color-swatch"
                  style={{ background: color }}
                />
              ))}
            </div>
          </div>

          {/* TOGGLE CELL BORDERS  */}
          <div className="container">
            <div className="title">
              <p>Toggle Borders</p>
            </div>
            <div className="display">
              <button
                className="control-btn"
                onClick={() => setBorders(!borders)}
              >
                Show Borders
              </button>
            </div>
          </div>

          {/* EXPORT IMAGE CONTAINER  */}

          <div className="container">
            <div className="title">
              <p> Export as PNG </p>
            </div>
            <div className="display">
              <button
                onClick={() => exportComponentAsPNG(panelRef)}
                className="control-btn"
              >
                Export as PNG
              </button>
              <button
                onClick={() => exportComponentAsJPEG(panelRef)}
                className="control-btn"
              >
                Export as JPEG
              </button>
            </div>
          </div>

          
        </div>
      </div>

      {/* RIGHT SIDE  */}
      <div className="right">
        <div className="canvas">
          <Grid
            cells={cells}
            setCells={setCells}
            currentColor={currentColor}
            borders={borders}
            canvas={panelRef}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
