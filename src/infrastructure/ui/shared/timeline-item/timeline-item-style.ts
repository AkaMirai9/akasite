import { SxProps } from '@mui/material';

const timelineItemStyle = {
  container: {
    display: 'flex',
    gap: '2rem'
  } as SxProps,

  title: {
    flex: 1
  } as SxProps,

  content: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem'
  } as SxProps
};

export default timelineItemStyle;
