import Background from "../components/Background";
import NavigationBar from "../components/Navigation";
import ContentWrapper from "../components/ContentWrapper";

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
        <div className="w-full h-2/10 md:h-3/10 lg:h-4/10 bg-gradient-to-r from-purple-200 to-green-200 rounded-lg">
        </div>
    );
}

const ProjectsTimeline = () => {
    return (
        <></>
    );
}

const Timeline = () => {
    return (
        <></>
    );
}

const Date = () => {
    return (
        <></>
    );
}