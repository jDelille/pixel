import { createUseStyles } from 'react-jss';

export default createUseStyles({
  grid: {
    display: 'grid',
    gridTemplateRows: 'repeat(16, 1fr)',
    gridTemplateColumns: 'repeat(16, 1fr)',
    width: '500px',
    height: '500px',
    border: '2px solid black',
  },
  cell: {
    cursor: 'pointer',
    background: 'white',
    transition: 'all 200ms linear',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  borderedCell: {
    cursor: 'pointer',
    border: '1px solid black',
    background: 'white',
    transition: 'all 200ms linear',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
});
