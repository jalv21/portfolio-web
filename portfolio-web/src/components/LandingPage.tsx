import React from 'react';

const languages = [
  { name: 'Portuguese', acronym: 'PT-BR', iconPath: './public/brazil-flag.png' },
  { name: 'English', acronym: 'EN', iconPath: './public/usa-flag.png' }
];

export default function PageLayout() {
  return (
    <section className="bg-black flex flex-col items-center justify-around gap-2 h-screen font-jetbrains">
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
    <button className="bg-neutral-500 text-white font-display flex items-center justify-center gap-2 px-4 py-2 rounded-full shadow-lg shadow-neutral-400">
      <img src={language.iconPath} alt={`${language.name} language icon`} className="mr-2" />
      {language.acronym}
    </button>
  );
}

export function Profile({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex flex-col items-center justify-center">
      {children}
    </section>
  );
}

export function ProfilePicture() {
  return (
    <div className="flex justify-center items-center h-48 w-48 rounded-full bg-linear-to-b from-purple-200 to-green-200">
      <img src="./public/profile-picture.jpg" alt="Developer Profile Picture" className="size-9/10 object-fit rounded-full" />
    </div>
  );
}

export function ProfileHeading() {
  return (
    <div className="flex flex-col justify-center items-center gap-2 m-4 text-center">
      <h1 className="text-5xl font-bold text-white">João Alvaro Rodrigues</h1>
      <p className="text-2xl text-white">{'<'}<span className="text-green-200">SoftwareEngineer</span>{' />'}</p>
    </div>
  );
}

export function MainMenu() {
  return (
    <ul className="flex flex-col justify-between items-center gap-4 md:gap-10 md:flex-row text-white text-2xl">
      <li>SOBRE MIM</li>
      <li>PROJETOS</li>
      <li>EXPERIENCIAS</li>
      <li>CONTATO</li>
    </ul>
  );
}