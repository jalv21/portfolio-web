import React from "react";
import { useTranslation } from "react-i18next";
import { GlobeIcon } from "@radix-ui/react-icons";
import "./LanguageSwitcher.css";

const LanguageSwitcher = ({ onLanguageChange }: {onLanguageChange: any}) => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
     if (onLanguageChange) {
      onLanguageChange();
    }
  };

  const isPortuguese = i18n.language.startsWith("pt");
  const isEnglish = i18n.language.startsWith("en");

  return (
    <div className="switcherContainer">
      <GlobeIcon className={`icon ${isEnglish ? "active" : ""}`} />
      <span
        className={`langText ${isPortuguese ? "active" : ""}`}
        onClick={() => changeLanguage("pt")}
      >
        PT
      </span>
      <span>|</span>
      <span
        className={`langText ${isEnglish ? "active" : ""}`}
        onClick={() => changeLanguage("en")}
      >
        EN
      </span>
    </div>
  );
};

export default LanguageSwitcher;