import { createUseStyles } from 'react-jss';

export default createUseStyles({
  test: {
    display: 'grid',
    gridTemplateRows: 'repeat(16, 1fr)',
    gridTemplateColumns: 'repeat(32, 1fr)',
    width: '1080px',
    height: '566px',
    border: '2px solid black',
    'margin': '0 auto',
  },
  portrait: {
    display: 'grid',
    gridTemplateRows: 'repeat(36, 1fr)',
    gridTemplateColumns: 'repeat(16, 1fr)',
    width: '566px',
    height: '1080px',
    border: '2px solid black',
    'margin': '0 auto',
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
    border: '1px solid darkgray',
    background: 'white',
    transition: 'all 200ms linear',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
});
