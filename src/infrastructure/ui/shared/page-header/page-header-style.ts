import { SxProps } from '@mui/material';

const pageHeaderStyle = {
  container: {
    marginTop: '1rem',
    '@media (max-width: 608px)': {
      marginBottom: '2rem'
    },
    width: '100%'
  } as SxProps,

  text: {
    '@media (max-width: 608px)': {
      fontSize: '2.5rem'
    },
    '@media (min-width: 609px)': {
      fontSize: '3.5rem'
    },
    textAlign: 'center'
  } as SxProps
};

export default pageHeaderStyle;
