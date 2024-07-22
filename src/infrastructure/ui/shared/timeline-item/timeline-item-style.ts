import { SxProps } from '@mui/material';

const timelineItemStyle = {
  container: {
    display: 'flex',
    gap: '2rem'
  } as SxProps,

  titleRight: {
    flex: 1,
    marginTop: '-30px',
    textAlign: 'right'
  } as SxProps,

  titleLeft: {
    flex: 1,
    marginTop: '-35px',
    textAlign: 'left'
  } as SxProps,

  content: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    gap: '1rem'
  } as SxProps,

  divider: {
    height: '100%',
    width: '1px',
    backgroundColor: 'rgba(238, 194, 88, 0.76)',
    marginX: '2rem',

    '&::before': {
      display: 'block',
      marginLeft: '-10px',
      marginTop: '-30px',
      content: '""',
      backgroundColor: '#242424',
      height: '20px',
      width: '20px',
      borderRadius: '50%',
      boxShadow: '0px 0px 0px 10px rgba(238, 194, 88, 0.76)'
    }
  } as SxProps
};

export default timelineItemStyle;
