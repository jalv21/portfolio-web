import Background from "../components/Background";
import NavigationBar from "../components/Navigation";
import ContentWrapper from "../components/ContentWrapper";
import SectionBanner from "../components/SectionBanner";
import experiencesData from "../data/experiences.json";
import { LocationPin, CalendarToday } from "@mui/icons-material";

export default function Experiences() {
    return (
        <Background>
            <NavigationBar hasMenu={true} />
            <ContentWrapper>
                <SectionBanner section="Experiências" />
                <ExperiencesTimeLine />
            </ContentWrapper>
        </Background>
    );
}

const ExperiencesTimeLine = () => {
    return (
        <div className="w-full flex flex-col items-center md:flex-row md:justify-center md:items-start">
            <ExpContainer experiences={experiencesData} />
        </div>
    );
}

const ExpContainer = ({ experiences }: { experiences: IExperience[] }) => {
    return (
        <div className="w-full flex flex-col gap-3 md:flex-row md:justify-center md:flex-wrap">
            {experiences.map((experience) => (
                <Experience
                    key={experience.title}
                    title={experience.title}
                    desc={experience.desc}
                    location={experience.location}
                    date={experience.date}
                    myRole={experience.myRole}
                />
            ))}
        </div>
    );
}

interface IExperience {
    title: string;
    desc: string;
    location: string;
    date: string;
    myRole: string;
}
const Experience = (props: IExperience) => {
    return (
        <div className="md:max-w-1/2 p-3 flex flex-col gap-2 bg-black/40 backdrop-blur-sm rounded-lg">
            <div className="flex flex-col gap-2 flex-wrap">
                <h2 className="text-xl font-bold">{props.title}</h2>
                <p className="text-green-200">{props.desc}</p>
                <p className="text-white">{props.myRole}</p>
            </div>
            <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-1">
                    <LocationPin />
                    <p>{props.location}</p>
                </div>
                <div className="flex items-center gap-1">
                    <CalendarToday />
                    <p>{props.date}</p>
                </div>
            </div>
        </div>
    );
}