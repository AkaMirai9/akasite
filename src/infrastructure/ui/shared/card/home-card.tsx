import { Box, Card } from '@mui/material';
import { HomeCardProps } from 'domain/interfaces/props/home-card/home-card-props';
import CardStyle from 'infrastructure/ui/shared/card/card-style';
import useHomeCardData from 'infrastructure/ui/shared/card/hooks';

const HomeCard = ({ title, description, className, icon, route, onClick }: HomeCardProps) => {
  const { t } = useHomeCardData();

  return (
    <Card onClick={onClick(route)} className={className} sx={CardStyle.container}>
      {icon}
      <Box sx={CardStyle.title}>{t(title)}</Box>
      <Box sx={CardStyle.description}>{t(description)}</Box>
    </Card>
  );
};

export default HomeCard;
