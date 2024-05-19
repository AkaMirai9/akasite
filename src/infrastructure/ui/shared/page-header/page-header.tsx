import { Box } from '@mui/material';
import { PageHeaderProps } from 'domain/interfaces/props/page-header/page-header-props';
import pageHeaderStyle from 'infrastructure/ui/shared/page-header/page-header-style';

function PageHeader({ title }: PageHeaderProps) {
  return (
    <Box component="header" sx={pageHeaderStyle.container}>
      <Box sx={pageHeaderStyle.text}>{title}</Box>
    </Box>
  );
}

export default PageHeader;
