import React from 'react';

let languages = [
  { name: 'Portuguese', acronym: 'PT-BR', iconPath: './public/brazil-flag.png' },
  { name: 'English', acronym: 'EN', iconPath: './public/usa-flag.png' }
];

export default function PageLayout() {
  return (
    <section className="bg-black flex flex-col align-items-center justify-center h-screen">
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
    <div className="flex justify-center gap-2">
      {children}
    </div>
  );
}

export function LanguageButton({ language }: { language: any }) {
  return (
    <button className="bg-neutral-400 text-white font-bold font-mono flex items-center justify-center gap-2 px-4 py-2 rounded-full shadow shadow-neutral-600">
      <img src={language.iconPath} alt={`${language.name} language icon`} className="mr-2" />
      {language.acronym}
    </button>
  );
}

export function Profile({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
    </>
  );
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