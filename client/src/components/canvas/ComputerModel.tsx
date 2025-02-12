import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export function ComputerModel() {
  const computer = useRef<THREE.Group>(null!);
  
  // Placeholder simple computer model since we can't upload 3D models
  const vertices = new Float32Array([
    -1, -1, -1,  1, -1, -1,  1,  1, -1, -1,  1, -1,
    -1, -1,  1,  1, -1,  1,  1,  1,  1, -1,  1,  1,
  ]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    computer.current.rotation.y = Math.sin(t / 4) / 8;
    computer.current.position.y = Math.sin(t / 1.5) / 10;
  });

  return (
    <group ref={computer}>
      <mesh>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={8}
            array={vertices}
            itemSize={3}
          />
        </bufferGeometry>
        <meshStandardMaterial color="#4a4a4a" />
      </mesh>
    </group>
  );
}
