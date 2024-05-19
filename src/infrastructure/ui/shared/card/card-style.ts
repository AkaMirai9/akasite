import { SxProps } from '@mui/material';
import { goldColor } from 'domain/assets/color';

const CardStyle = {
  container: {
    opacity: 0,
    width: '270px',
    height: '270px',
    backgroundColor: '#ffffff00',
    boxShadow: 'none',
    borderRadius: '8px',
    borderWidth: '2px',
    borderColor: goldColor,
    borderStyle: 'solid',
    color: goldColor,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    transition: 'transform .2s linear',

    '&:hover': {
      transform: 'scale(1.1) !important',
      cursor: 'pointer'
    }
  } as SxProps,

  title: {
    marginTop: '0.7rem',
    fontSize: '1.3rem'
  } as SxProps,

  description: {
    flex: 1,
    placeItems: 'center',
    marginY: '1rem',
    marginX: '1.4rem',
    textAlign: 'justify',
    fontSize: '0.9rem',
    wordSpacing: '-2px'
  } as SxProps
};

export default CardStyle;
