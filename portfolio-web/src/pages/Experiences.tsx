import Background from "../components/Background";
import NavigationBar from "../components/Navigation";

export default function Experiences() {
    return (
        <Background>
            <NavigationBar hasMenu={true} />
            <div className="flex justify-center items-center h-screen font-jetbrains">
                <h1 className="text-4xl font-bold text-white">Em breve</h1>
            </div>
        </Background>
    );
}