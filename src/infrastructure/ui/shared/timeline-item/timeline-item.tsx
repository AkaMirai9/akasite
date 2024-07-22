import { Box } from '@mui/material';
import { TFunction } from 'i18next';
import timelineItemStyle from 'infrastructure/ui/shared/timeline-item/timeline-item-style';

const TimelineItem = ({ variant, step, t }: { variant: 'right' | 'left'; step: string; t: TFunction }) =>
  variant === 'right' ? (
    <Box sx={timelineItemStyle.container}>
      <Box sx={timelineItemStyle.titleRight}>{t(`education.timeline.${step}.title`)}</Box>
      <Box sx={timelineItemStyle.divider}/>
      <Box sx={timelineItemStyle.content}>
        <Box>{t(`education.timeline.${step}.duration`)}</Box>
        <Box>{t(`education.timeline.${step}.cursus`)}</Box>
        <Box>{t(`education.timeline.${step}.description`)}</Box>
      </Box>
    </Box>
  ) : (
    <Box sx={timelineItemStyle.container}>
      <Box sx={timelineItemStyle.content}>
        <Box>{t(`education.timeline.${step}.duration`)}</Box>
        <Box>{t(`education.timeline.${step}.cursus`)}</Box>
        <Box>{t(`education.timeline.${step}.description`)}</Box>
      </Box>
      <Box sx={timelineItemStyle.divider}/>
      <Box sx={timelineItemStyle.titleLeft}>{t(`education.timeline.${step}.title`)}</Box>
    </Box>
  );

export default TimelineItem;
