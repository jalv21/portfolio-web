import { Link } from "react-router-dom";
import {
  NavigateBefore,
  NavigateNext,
  Refresh,
  Translate,
} from "@mui/icons-material";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export default function NavigationBar({
  hasMenu,
}: {
  hasMenu?: boolean;
}) {
  const { t } = useTranslation();
  const [dummyState, setDummyState] = useState(0);

  const handleLanguageChange = () => {
    setDummyState(prev => prev + 1);
  };

  const itemClassName =
    "text-white text-lg font-jetbrains hover:cursor-pointer";
  const basicFlex = "flex justify-between items center";
  return (
    <section className="bg-black/30 backdrop-blur-2xs w-full p-4 border-neutral-700 border-1">
      <ul className="flex justify-between gap-2 items-center text-white">
        <div className={basicFlex + " gap-4"}>
          <span className={basicFlex}>
            <NavigationItem
              icon=<NavigateBefore />
              className={itemClassName}
              link=""
            />
            <NavigationItem
              icon=<NavigateNext />
              className={itemClassName}
              link=""
            />
          </span>
          <NavigationItem icon=<Refresh /> className={itemClassName} link="" />
        </div>
        <LanguageSwitcher switcherEvent={handleLanguageChange} icon=<Translate /> />
      </ul>
      {hasMenu && <InnerMenu />}
    </section>
  );
}

interface NavItemProps {
  icon: React.ReactNode;
  className: string;
  link: string;
}
const NavigationItem = (props: NavItemProps) => {
  return (
    <li className={props.className}>
      <a href={props.link}>{props.icon}</a>
    </li>
  );
};

const InnerMenuItem = (props: { name: string; path: string }) => {
  return (
    <span className="text-white text-lg font-jetbrains hover:cursor-pointer">
      <Link to={props.path}>{props.name}</Link>
    </span>
  );
}

const InnerMenu = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-wrap gap-4 mt-4 md:flex-row md:gap-8">
      <InnerMenuItem name={t("nav_aboutme")} path="/sobremim" />
      <InnerMenuItem name={t("nav_experiences")} path="/experiencias" />
      <InnerMenuItem name={t("nav_projects")} path="/projetos" />
      <InnerMenuItem name={t("nav_contact")} path="/contato" />
    </div>
  );
}