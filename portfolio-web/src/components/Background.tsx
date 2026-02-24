import React, { useMemo } from "react";

export default function Background({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Particles />
      {children}
    </>
  );
}

export function Particles() {
  const particleCount = 20;
  let particleClassName = "absolute bg-white rounded-full blur-[1px] animate-float-fade";

  const particles = useMemo(() => {
    return Array.from({ length: particleCount }).map((_, i) => ({
      id: i,
      size: Math.random() * 8 + 4, // size range
      left: `${Math.random() * 100}%`, // position range for all directions
      top: `${Math.random() * 100}%`, 
      duration: Math.random() * 10 + 10, // duration range
      delay: Math.random() * 5, // delay range
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
