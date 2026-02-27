import React from "react";
import { useNavigate } from "react-router-dom";
import Background from "./Background";
import NavigationBar from "./Navigation";

export default function PageLayout() {
  return (
    <Background>
      <NavigationBar innerMenu={[]}/>
      <div className="relative z-auto flex flex-col items-center justify-evenly gap-2 h-screen font-jetbrains">
        <Profile>
          <ProfilePicture />
          <ProfileHeading />
        </Profile>
        <Button path="/sobremim" />
      </div>
    </Background>
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
      <img
        src="./public/profile-picture.jpg"
        alt="Developer Profile Picture"
        className="size-9/10 object-fit rounded-full"
      />
    </div>
  );
}

export function ProfileHeading() {
  return (
    <div className="flex flex-col justify-center items-center gap-2 m-4 text-center">
      <h1 className="text-5xl font-bold text-white">João Alvaro Rodrigues</h1>
      <p className="text-2xl text-white">
        {"<"}
        <span className="text-green-200">SoftwareEngineer</span>
        {" />"}
      </p>
    </div>
  );
}

export function Button({ path: path, }: { path: string }) {
  const defaultClassName =
    " mb-10 font-sans text-2xl px-8 py-3 font-bold bg-gradient-to-r from-green-200 via-blue-200 to-purple-200 text-black rounded-full";
  const hoverClassName =
    "cursor-pointer transform hover:scale-105 transition-all duration-300 ease-in-out";

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path);
  };
  
  return (
    <>
      <a onClick={handleClick} className={`${defaultClassName} ${hoverClassName}`}>
        Check my portfolio
      </a>
    </>
  );
}
