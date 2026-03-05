import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Background from "../components/Background";
import NavigationBar from "../components/Navigation";
import ProfilePicture from "../components/ProfilePicture";

export default function PageLayout() {
  return (
    <Background>
      <NavigationBar hasMenu={false} />
      <div className="relative z-auto flex flex-col items-center justify-evenly gap-2 h-screen font-jetbrains">
        <Profile>
          <ProfilePicture size="md"/>
          <ProfileHeading />
        </Profile>
        <Button path="/sobremim" />
      </div>
    </Background>
  );
}

const Profile = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex flex-col items-center justify-center">
      {children}
    </section>
  );
}

const ProfileHeading = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col justify-center items-center gap-2 m-4 text-center">
      <h1 className="text-5xl font-bold text-white">{t("name")}</h1>
      <p className="text-2xl text-white">
        <span className="text-green-200">{'<' + t("title") + ' />'}</span>
      </p>
    </div>
  );
}

const Button = ({ path }: { path: string }) => {
  const { t } = useTranslation();
  const defaultClassName =
    " mb-10 font-sans text-2xl px-8 py-3 font-bold bg-gradient-to-r from-green-200 via-blue-200 to-purple-200 text-black rounded-full";
  const hoverClassName =
    "cursor-pointer transform hover:scale-105 transition-all duration-300 ease-in-out";
  
  return (
    <>
      <Link to={path} className={`${defaultClassName} ${hoverClassName}`}>
        {t("button")}
      </Link>
    </>
  );
}
