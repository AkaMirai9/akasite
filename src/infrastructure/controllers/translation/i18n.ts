import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

const getCurrentLanguage = () => localStorage.getItem('i18nextLng') || 'fr';

const initI18n = () => {
  void i18n
    // load translation using http → see /public/locales
    // learn more: https://github.com/i18next/i18next-http-backend
    .use(Backend)
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
      load: 'languageOnly',
      fallbackLng: 'fr',
      debug: true,
      nsSeparator: false,
      ns: ['translation'],
      backend: {
        loadPath: '/locales/{{lng}}/{{ns}}.json'
      },
      lng: getCurrentLanguage(),
      interpolation: {
        escapeValue: false // not needed for react as it escapes by default
      }
    });
};

export default initI18n;
