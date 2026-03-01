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
        <></>
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