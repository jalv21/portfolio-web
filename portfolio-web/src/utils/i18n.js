import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { translationData } from "../data/translation.json";

i18n.use(initReactI18next).init({
  translationData,
  lng: "pt",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;