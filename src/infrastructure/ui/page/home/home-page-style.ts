import { SxProps } from '@mui/material';

const HomePageStyle = {
  container: {
    flex: 1,
    width: '100dvw',
    height: '100dvh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'center'
  } as SxProps,

  text: {
    opacity: 0,
    display: 'flex',
    '@media (max-width: 600px)': {
      fontSize: '5rem'
    },
    '@media (min-width: 601px)': {
      fontSize: '15rem'
    },
    position: 'absolute',
    marginTop: 'calc(50dvh - 12.5rem)'
  } as SxProps,

  contentContainer: {
    flex: 1,
    opacity: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflowY: 'scroll',
    paddingX: '1rem'
  } as SxProps,

  cardsContainer: {
    flex: 1,
    marginTop: '2rem',
    marginBottom: '2rem',
    display: 'flex',
    height: 'fit-content',
    alignItems: 'center',
    justifyContent: 'center',
    marginY: 'auto',
    flexWrap: 'wrap',
    gap: '2rem',
    '@media (min-width: 608px)': {
      maxHeight: '600px'
    },
    '@media (max-width: 1301px)': {
      maxWidth: '600px'
    }
  } as SxProps
};

export default HomePageStyle;
