import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Stars } from "../canvas/Stars";

export function Hero() {
  return (
    <section className="h-screen relative overflow-hidden">
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Stars />
          </Suspense>
        </Canvas>
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="max-w-3xl md:w-1/2">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hi, I'm <span className="text-primary">Jigyasu Patel</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              A passionate and driven individual who loves solving problems and embracing new challenges.
            </p>
          </div>

          {/* <div className="md:w-1/2 flex justify-end">
            <div className="space-y-3 w-full max-w-md">
              {["Innovative Thinker", "Strong Leadership & Teamwork", "Curious & Always Learning", "Passionate About Problem-Solving"].map((title, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">{title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}