import { Box } from '@mui/material';
import HomePageStyle from 'infrastructure/ui/page/home/home-page-style';
import useHomePageData from 'infrastructure/ui/page/home/hooks';

function HomePage() {
  useHomePageData();

  return (
    <Box sx={HomePageStyle.container}>
      <Box className="hello" sx={HomePageStyle.text}>
        <Box className="h">H</Box>
        <Box className="e">E</Box>
        <Box className="l1">L</Box>
        <Box className="l2">L</Box>
        <Box className="o">O</Box>
      </Box>
      <Box className="content" sx={HomePageStyle.contentContainer}>
        content
      </Box>
    </Box>
  );
}

export default HomePage;
