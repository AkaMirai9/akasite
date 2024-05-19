import { SxProps } from '@mui/material';

const pageHeaderStyle = {
  container: {
    marginTop: '1rem',
    width: '100%'
  } as SxProps,

  text: {
    '@media (max-width: 600px)': {
      fontSize: '2.5rem'
    },
    '@media (min-width: 601px)': {
      fontSize: '3.5rem'
    },
    textAlign: 'center'
  } as SxProps
};

export default pageHeaderStyle;
