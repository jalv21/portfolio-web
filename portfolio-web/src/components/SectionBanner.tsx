export default function SectionBanner ({ section }: { section: string }) {
    return (
        <div className="w-full h-35 bg-gradient-to-r from-green-200 to-purple-200 rounded-lg flex items-center justify-center">
            <h1 className="text-3xl font-bold text-black">{section}</h1>
        </div>
    );
}