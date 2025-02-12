import { Canvas } from "@react-three/fiber";
import { SnowEffect } from "../canvas/SnowEffect";
import { Suspense } from "react";

interface PageWrapperProps {
  children: React.ReactNode;
}

export function PageWrapper({ children }: PageWrapperProps) {
  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <SnowEffect />
          </Suspense>
        </Canvas>
      </div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}