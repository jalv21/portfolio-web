import Background from "../components/Background";
import NavigationBar from "../components/Navigation";
import ContentWrapper from "../components/ContentWrapper";
import projectsData from "../data/projects.json";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export default function Projects() {
    return (
        <Background>
            <NavigationBar hasMenu={true} />
            <ContentWrapper>
                <ProjectsBanner />
                <ProjectsTimeline />
            </ContentWrapper>
        </Background>
    );
}

const ProjectsBanner = () => {
    return (
        <div className="w-full h-35 bg-gradient-to-r from-green-200 to-purple-200 rounded-lg flex items-center justify-center">
            <h1 className="text-3xl font-bold text-black">Projetos</h1>
        </div>
    );
}

const ProjectsTimeline = () => {
    return (
        <div className="w-full flex flex-col items-center md:flex-row md:justify-center md:items-start">
            <ProjectContainer projects={projectsData} />
        </div>
    );
}

const ProjectContainer = ({ projects }: { projects: IProject[] }) => {
    return (
        <div className="w-full flex flex-col gap-3 md:flex-row md:flex-wrap">
            {projects.map((project) => (
                <Project
                    key={project.name}
                    name={project.name}
                    desc={project.desc}
                    date={project.date}
                    techStack={project.techStack}
                    avaliableOnGitHub={project.avaliableOnGitHub}
                    githubUrl={project.githubUrl}
                    coverImgPath={project.coverImgPath}
                />
            ))}
        </div>
    );
}

interface IProject {
    name: string;
    desc: string;
    date: string;
    techStack: ITechStack[];
    avaliableOnGitHub: boolean;
    githubUrl: string;
    coverImgPath: string;
}
const Project = (props: IProject) => {
    let button;
    if(props.avaliableOnGitHub)
        button = <GitHubButton path={props.githubUrl}/>;
    else button = '';
    return (
        <div className="md:max-w-1/2 p-3 flex flex-col gap-4 bg-black/40 backdrop-blur-sm rounded-lg">
            <img src={props.coverImgPath} alt={props.name + ' cover image'} className="h-45"></img>
            <span className="flex flex-col gap-2 flex-wrap">
                <h2 className="text-xl font-bold">{props.name}</h2>
                <p className="text-green-200">{props.desc}</p>
            </span>
            <TechStackBlocks stackItems={props.techStack} />
            {button}
        </div>
    );
}

const GitHubButton = ({ path }: { path: string }) => {
    return (
        <a href={path} className="flex gap-2 items-center p-2 w-50 bg-white text-black rounded-lg font-bold text-sm">
            <GitHubLogoIcon />
            Ver no GitHub
        </a>
    );
}

export function TechStackBlocks({ stackItems }: { stackItems: ITechStack[] }) {
    return (
        <div className="flex gap-2 flex-wrap items-center">
            {stackItems.map((item) => (
                <StackItem name={item.name} />
            ))}
        </div>
    );
}


export interface ITechStack {
    name: string;
}
const StackItem = (props: ITechStack) => {
    return (
        <div className="flex gap-2 items-center p-2">
            <p>{props.name}</p>
        </div>
    );
}