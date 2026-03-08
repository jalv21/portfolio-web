import Background from "../components/Background";
import NavigationBar from "../components/Navigation";
import ContentWrapper from "../components/ContentWrapper";
import ProfilePicture from "../components/ProfilePicture";
import { Code } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { t } from "i18next";

export default function AboutMe() {
    return (
        <Background>
            <NavigationBar hasMenu={true} />
            <ContentWrapper>
                <ProfileBanner />
                <ProfileContent />
            </ContentWrapper>
        </Background>
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
    const { t } = useTranslation();
    return (
        <div className="flex flex-col justify-center">
            <h1 className="text-xl font-bold">{t("name")}</h1>
            <h2 className="text-green-200">{t("titleAboutMe")}</h2>
        </div>
    );
}

const ProfileText = () => {
    const { t } = useTranslation();
    return (
        <div className="flex flex-col gap-2 text-sm">
            <p>
                {t("bio")}
            </p>
        </div>
    );
}

const Skills = () => {
    const { t } = useTranslation();
    const techs = ["HTML", "CSS", "JavaScript", "TypeScript", "React", "TailwindCSS", "MySQL", "MongoDB", "Java", "Python", "C/C++"];
    const estudando = ["Spring Boot", "Docker", "Kubernetes", "Grafana"];
    return (
        <div className="flex flex-col gap-4 p-4">
            <TechStack heading={t("currentStackHeading")} techs={techs} />
            <TechStack heading={t("studyingStackHeading")} techs={estudando} />
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