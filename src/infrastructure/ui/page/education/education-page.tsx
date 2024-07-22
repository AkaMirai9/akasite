import { Box } from '@mui/material';
import educationPageStyle from 'infrastructure/ui/page/education/education-page-style';
import useEducationPageData from 'infrastructure/ui/page/education/hooks';
import PageHeader from 'infrastructure/ui/shared/page-header/page-header';
import TimelineItem from 'infrastructure/ui/shared/timeline-item/timeline-item';

const EducationPage = () => {
  const { t } = useEducationPageData();
  return (
    <Box sx={educationPageStyle.container}>
      <PageHeader title={t('education.title')} />
      <Box className="timeline" sx={educationPageStyle.content}>
        <TimelineItem variant="right" step="biotech" t={t} />
        <TimelineItem variant="left" step="robes" t={t} />
        <TimelineItem variant="right" step="epita" t={t} />
      </Box>
    </Box>
  );
};

export default EducationPage;
