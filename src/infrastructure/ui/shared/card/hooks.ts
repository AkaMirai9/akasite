import { useTranslation } from 'react-i18next';

const useHomeCardData = () => {
  const { t } = useTranslation();

  return {
    t
  };
};

export default useHomeCardData;
