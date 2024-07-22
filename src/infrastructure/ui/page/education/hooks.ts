import { useTranslation } from 'react-i18next';

const useEducationPageData = () => {
  const { t } = useTranslation();

  return { t };
};

export default useEducationPageData;
