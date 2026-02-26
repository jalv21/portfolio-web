import React, { useMemo } from "react";

export default function Background({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 bg-black -z-20"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-200 via-blue-200 to-green-200 opacity-25 -z-20"></div> 
      <div className="absolute inset-0 bg-[url(./public/background-grid.png)] bg-repeat bg-cover opacity-10 -z-20"></div>
      <Particles />
      <div className="relative z-auto flex flex-col items-center justify-around gap-2 h-screen font-jetbrains">
        {children}
      </div>
    </div>
  );
}

export function Particles() {
  const particleCount = 100;
  let particleClassName = "absolute bg-white rounded-full blur-[1px] animate-pulse shadow-lg shadow-neutral-200/50"

  const particles = useMemo(() => {
    return Array.from({ length: particleCount }).map((_, i) => ({
      id: i,
      size: Math.random() * 4, // size range
      left: `${Math.random() * 100}%`, // position range for all directions
      top: `${Math.random() * 100}%`,
      duration: Math.random() * 2 + 1, // duration range
      delay: Math.random() * 2, // delay range
    }));
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-transparent">
      {particles.map((p) => (
        <div
          key={p.id}
          className={particleClassName}
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            left: p.left,
            top: p.top,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
