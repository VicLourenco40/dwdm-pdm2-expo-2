import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getLocales } from 'expo-localization';

import en from './locales/en.json';
import pt from './locales/pt.json';

const resources = {
  pt: {
    translation: pt
  },
  en: {
    translation: en
  }
}

i18next
  .use(initReactI18next)
  .init({
    resources,
    lng: getLocales()[0].languageCode || 'en'
  })

export default i18next;
