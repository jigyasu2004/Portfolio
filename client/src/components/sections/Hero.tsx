import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { ComputerModel } from "../canvas/ComputerModel";
import { Stars } from "../canvas/Stars";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="h-screen relative overflow-hidden">
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <ComputerModel />
            <Stars />
          </Suspense>
        </Canvas>
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hi, I'm <span className="text-primary">Jigyasu Patel</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              A passionate developer creating innovative solutions and immersive
              digital experiences
            </p>
            <div className="space-x-4">
              <Button asChild>
                <a href="#projects">View My Work</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
