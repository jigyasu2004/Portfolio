import { useRef, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function Stars({ count = 5000 }) {
  const mesh = useRef<THREE.Points>(null!);
  const positions = new Float32Array(count * 3);
  const [color, setColor] = useState("#ffffff"); // Default white

  // Generate random positions for stars
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
  }

  // Detect theme change
  useEffect(() => {
    const updateTheme = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setColor(isDark ? "#ffffff" : "#000000");
    };

    updateTheme(); // Set initial theme
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  // Animate stars
  useFrame(() => {
    mesh.current.rotation.x += 0.0003;
    mesh.current.rotation.y += 0.0003;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.005}
        sizeAttenuation={true}
        color={color}
        transparent
        opacity={0.8}
      />
    </points>
  );
}
