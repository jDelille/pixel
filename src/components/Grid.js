import React from 'react';

import useStyles from './Grid.styles';

const offCell = {
  on: false,
  color: '#000000',
};

const Grid = ({ currentColor, cells, setCells, borders }) => {
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
    <div className={classes.grid}>
      {cells.map((cell, index) => (
        <div
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          // set default color of cell to white
          style={{ background: cell.on ? cell.color : '#ffffff' }}
          className={borders ? classes.borderedCell : classes.cell}
          onMouseOver={updateCell(index)}
          onMouseDown={updateCell(index)}
          onContextMenu={(e) => e.preventDefault()}
        />
      ))}
    </div>
  );
};

export default Grid;