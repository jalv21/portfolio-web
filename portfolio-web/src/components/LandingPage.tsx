import React from 'react';

let languages = [
  { name: 'Portuguese', acronym: 'PT-BR', iconPath: '' }, 
  { name: 'English', acronym: 'EN', iconPath: '' }
];

export default function PageLayout() {
  return (
    <section className="flex flex-col align-items-center justify-center h-screen">
      <LanguageMenu>
        {languages.map((language) => (<LanguageButton language={language} />))}
      </LanguageMenu>
      <Profile>
        <ProfilePicture />
        <ProfileHeading />
      </Profile>
      <MainMenu />
    </section>
  );
}

export function LanguageMenu({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center">
      {children}
    </div>
  );
}

export function LanguageButton({ language }: { language: any }) {
  return (
    <button className="flex items-center justify-center m-2">
      <img src={language.iconPath} alt={`${language.name} language icon`} className="mr-2" />
      {language.acronym}
    </button>
  );
}

export function Profile({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export function ProfilePicture() {
  return (
    <></>
  );
}

export function ProfileHeading() {
  return (
    <></>
  );
}

export function MainMenu() {
  return (
    <></>
  );
}