import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./files/en.json";
import sk from "./files/sk.json";

i18n.use(initReactI18next).init({
  fallbackLng: "sk",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    sk: {
      translation: sk,
    },
    en: {
      translation: en,
    },
  },
});

export default i18n;
