import { UseCreateThemeProps } from 'domain/interfaces/props/theme/use-create-theme-props';
import getComponents from 'infrastructure/controllers/theme/get-components';
import { useEffect, useMemo } from 'react';
import { createTheme } from '@mui/material';

const useCreateTheme = (): UseCreateThemeProps => {
  const theme = useMemo(() => {
    const typoStd = {
      fontFamily: [
        'Ubuntu Mono',
        'Poppins',
        'Rubik-var',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        'Fira Sans',
        'Droid Sans',
        'Helvetica Neue',
        'sans-serif'
      ].join(','),
      textTransform: 'none' as const
    };

    return createTheme({
      typography: {
        h1: typoStd,
        h2: typoStd,
        h3: typoStd,
        h4: typoStd,
        h5: typoStd,
        h6: typoStd,
        subtitle1: typoStd,
        subtitle2: typoStd,
        body1: typoStd,
        body2: typoStd,
        button: typoStd,
        caption: typoStd,
        overline: typoStd
      },
      components: getComponents()
    });
  }, []);

  useEffect(() => {
    document.title = 'Tom Frenois';
  }, []);

  return { theme };
};

export default useCreateTheme;
