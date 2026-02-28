import Background from "./Background";
import NavigationBar from "./Navigation";

export default function Contact() {
    return (
        <Background>
            <NavigationBar innerMenu={[]} paths={[]} />
            <div className="flex justify-center items-center h-screen font-jetbrains">
                <h1 className="text-4xl font-bold text-white">Em breve</h1>
            </div>
        </Background>
    );
}