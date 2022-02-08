import React, { useState, useMemo } from 'react';

import Grid from './components/Grid';
import ColorPicker from './components/ColorPicker';
import useStyles from './styles/App.styles';
import './styles/App.scss'

const offCell = {
  on: false,
  color: '#ffffff',
};

// set canvas sizes 

let faviconSize = 16 * 16;

// each individual cell
const initialCells = Array.from({ length: faviconSize }, () => offCell);

function App() {
  const [cells, setCells] = useState(initialCells);
  const [currentColor, setCurrentColor] = useState('#56BC58');
  const [borders, setBorders] = useState(false);

  const classes = useStyles();
  const colorSwatch = useMemo(
    () => [
      ...new Set(cells.filter((cell) => cell.on).map((cell) => cell.color)),
    ],
    [cells]
  );
  const chatString = useMemo(
    () => cells.map((cell) => cell.color.slice(1)).join(','),
    [cells]
  );
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
      <button className='show-borders' onClick={() => setBorders(!borders)}>Show Borders</button>
      <Grid cells={cells} setCells={setCells} currentColor={currentColor} borders={borders} />
      <p className={classes.chatString}>
        {/* eslint-disable-next-line */}
        !rgb
        {chatString}
      </p>
    </div>
  );
}

export default App;
