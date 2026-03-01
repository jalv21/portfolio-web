import React from "react";
import Background from "../components/Background";
import NavigationBar from "../components/Navigation";
import ProfilePicture from "../components/ProfilePicture";
import { Code } from "@mui/icons-material";

export default function AboutMe() {
    return (
        <Background>
            <NavigationBar hasMenu={true} />
            <div className="relative z-auto flex flex-col items-start justify-center h-screen">
                <Content>
                    <ProfileBanner />
                    <ProfileContent />
                </Content>
            </div>
        </Background>
    );
}

const Content = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="relative z-auto flex flex-col items-center w-screen size-9/10 font-jetbrains text-white gap-4">
            {children}
        </div>
    );
}

const ProfileBanner = () => {
    return (
        <div className="w-9/10 flex justify-center md:justify-start bg-gradient-to-r from-green-200 to-purple-200 p-3 rounded-lg">
            <ProfilePicture size="sm" />
        </div>
    );
}

const ProfileContent = () => {
    return (
        <div className="w-10/10 flex flex-col gap-4 justify-evenly items-start p-2 md:flex-row">
            <ProfileInfo />
            <Skills />
        </div>
    );
}

const ProfileInfo = () => {
    return (
        <div className="flex flex-col gap-4 m-4">
            <ProfileHeading />
            <ProfileText />
        </div>
    );
}

const ProfileHeading = () => {
    return (
        <div className="flex flex-col justify-center">
            <h1 className="text-xl font-bold">João Alvaro Rodrigues</h1>
            <h2 className="text-green-200">Estudante de Engenharia de Software</h2>
        </div>
    );
}

const ProfileText = () => {
    return (
        <div className="flex flex-col gap-2 text-sm">
            <p>
                Desenvolvedor web focado em Front-End. Estudando Engenharia de Software na PUC Minas. <br />
                Lifelong Learner
            </p>
        </div>
    );
}

const Skills = () => {
    const techs = ["HTML", "CSS", "JavaScript", "TypeScript", "React", "TailwindCSS", "MySQL", "MongoDB", "Java", "Python", "C/C++"];
    const estudando = ["Spring Boot", "Docker", "Kubernetes", "Grafana"];
    return (
        <div className="flex flex-col gap-4 p-4">
            <TechStack heading="Tecnologias" techs={techs}/>
            <TechStack heading="Estudando" techs={estudando}/>
        </div>
    );
}

const TechStack = (props: { heading: string, techs: string[] }) => {
    return (
        <div className="flex flex-col gap-4 bg-black/50 backdrop-blur-lg rounded-lg p-4">
            <h3><Code /> {props.heading}</h3>
            <div className="flex gap-2 flex-wrap">
                {props.techs.map((tech, index) => (
                    <p key={index}>{tech}</p>
                ))}
            </div> 
        </div>
    );
}