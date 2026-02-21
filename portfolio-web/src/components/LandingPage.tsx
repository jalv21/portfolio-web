import React from 'react';

export default function PageLayout() {
  return (
    <>
        <LanguageMenu>
            <LanguagePortuguese />
            <LanguageEnglish />
        </LanguageMenu>
        <Profile>
            <ProfilePicture />
            <ProfileHeading />
        </Profile>
        <MainMenu />
    </>
  );
}

export function LanguageMenu({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export function LanguagePortuguese() {
  return (
    <></>
  );
}

export function LanguageEnglish() {
  return (
    <></>
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