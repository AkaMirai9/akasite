import { Box } from '@mui/material';
import cardsContent from 'domain/const/home/cards-content';
import HomePageStyle from 'infrastructure/ui/page/home/home-page-style';
import useHomePageData from 'infrastructure/ui/page/home/hooks';
import HomeCard from 'infrastructure/ui/shared/card/home-card';
import PageHeader from 'infrastructure/ui/shared/page-header/page-header';

const HomePage = () => {
  const { t, onClickCard } = useHomePageData();

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
        <PageHeader title={t('home.title')} />
        <Box sx={HomePageStyle.cardsContainer}>
          {cardsContent.map((content) => (
            <HomeCard key={content.title} {...content} onClick={onClickCard} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
