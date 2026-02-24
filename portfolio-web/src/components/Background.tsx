import React, { useMemo } from "react";

export default function GridBackground({
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
  const sizeRange = Math.random() * 8 + 4;
  const positionRange = Math.random() * 100;
  const durationRange = Math.random() * 10 + 10;
  const delayRange = Math.random() * 5;

  const particles = useMemo(() => {
    return Array.from({ length: particleCount }).map((_, i) => ({
      id: i,
      size: sizeRange,
      left: `${positionRange}%`,
      top: `${positionRange}%`,
      duration: durationRange,
      delay: delayRange,
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
