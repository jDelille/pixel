import { createUseStyles } from 'react-jss';

export default createUseStyles({
  app: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'sans-serif',
    background: 'navy',
  },
  colorSwatchContainer: {
    display: 'flex',
  },
  colorSwatch: {
    margin: '0.5rem',
    padding: 0,
    width: '25px',
    height: '25px',
    outline: 'none',
    border: 'none',
    cursor: 'pointer',
  },
  chatString: {
    maxWidth: '2%',
    fontFamily: 'monospace',
    wordWrap: 'break-word',
    background: 'navy',

  },
});
