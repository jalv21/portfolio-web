export default function ContentWrapper({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative z-auto flex flex-col items-center w-screen size-9/10 font-jetbrains text-white gap-4">
            {children}
        </div>
    );
}