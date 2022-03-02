import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import { english, portugues } from './locales';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    compatibilityJSON: 'v3',
    resources: {
      pt: {
        translation: {
          ...portugues,
        },
      },
      en: {
        translation: {
          ...english,
        },
      },
    },
  });

export default i18n;
