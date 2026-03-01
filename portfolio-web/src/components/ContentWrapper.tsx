export default function ContentWrapper({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative z-auto flex flex-col items-center w-9/10 h-9/10 font-jetbrains text-white gap-4 m-3">
            {children}
        </div>
    );
}