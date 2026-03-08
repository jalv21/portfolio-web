import { useTranslation } from "react-i18next";
import { GlobeIcon } from "@radix-ui/react-icons";
import "./LanguageSwitcher.css";

interface ILanguageSwitcher {
  switcherEvent: any,
  icon: React.ReactNode;
}
const LanguageSwitcher = (props: ILanguageSwitcher) => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
     if (props.switcherEvent) {
      props.switcherEvent();
    }
  };

  const isPortuguese = i18n.language.startsWith("pt");
  const isEnglish = i18n.language.startsWith("en");

  return (
    <div className="switcherContainer">
      {props.icon}
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