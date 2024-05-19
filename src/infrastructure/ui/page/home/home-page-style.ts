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
      fontSize: '7rem'
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
    maxWidth: '600px',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
    gridAutoRows: 'auto',
    gap: '2rem',
    '@media (max-width: 600px)': {
      gridTemplateColumns: '1fr'
    },
    '@media (min-width: 601px)': {
      gridTemplateColumns: 'repeat(2, 1fr)'
    }
  } as SxProps
};

export default HomePageStyle;
