import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./assets/language/en.json";
import translationSR from "./assets/language/sr.json";

const resources = {
  en: {
    translation: translationEN,
  },
  sr: {
    translation: translationSR,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "sr",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
