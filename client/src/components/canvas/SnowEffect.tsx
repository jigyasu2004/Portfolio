import { useRef, useMemo, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

interface Snowflake {
  position: THREE.Vector3;
  velocity: THREE.Vector3;
  size: number;
}

interface IcePoint {
  position: THREE.Vector3;
  scale: number;
  opacity: number;
}

export function SnowEffect() {
  const points = useRef<THREE.Points>(null!);
  const icePoints = useRef<THREE.Points>(null!);
  const { viewport, camera } = useThree();
  const mousePos = useRef(new THREE.Vector3());

  // Create snowflakes
  const snowflakes = useMemo(() => {
    const temp: Snowflake[] = [];
    const count = 1000;

    for (let i = 0; i < count; i++) {
      temp.push({
        position: new THREE.Vector3(
          (Math.random() - 0.5) * viewport.width * 3,
          (Math.random() - 0.5) * viewport.height * 3 + viewport.height,
          Math.random() * 3
        ),
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.02, // Reduced horizontal velocity
          -0.05 - Math.random() * 0.05, // Reduced falling speed
          0
        ),
        size: Math.random() * 1 + 0.5, // Smaller snowflakes
      });
    }
    return temp;
  }, [viewport]);

  // Store ice crystal points
  const icePoints_list = useRef<IcePoint[]>([]);

  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      event.preventDefault();
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      const vector = new THREE.Vector3(x, y, 0.5);
      vector.unproject(camera);
      mousePos.current.copy(vector);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: false });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [camera]);

  useFrame((state) => {
    if (!points.current || !icePoints.current) return;

    // Update snowflakes
    const positions = points.current.geometry.attributes.position;
    const sizes = points.current.geometry.attributes.size;

    snowflakes.forEach((flake, i) => {
      // Add subtle wind effect
      flake.velocity.x += (Math.random() - 0.5) * 0.0002; // Reduced wind effect
      flake.position.add(flake.velocity);

      // Reset if snowflake goes below viewport
      if (flake.position.y < -viewport.height) {
        flake.position.y = viewport.height;
        flake.position.x = (Math.random() - 0.5) * viewport.width * 3;
      }

      // Keep snowflakes within bounds
      if (Math.abs(flake.position.x) > viewport.width * 1.5) {
        flake.velocity.x *= -0.5;
      }

      positions.setXYZ(i, flake.position.x, flake.position.y, flake.position.z);
      sizes.setX(i, flake.size);
    });

    positions.needsUpdate = true;
    sizes.needsUpdate = true;

    // Add new ice crystals at mouse position
    if (Math.random() > 0.7) {
      icePoints_list.current.push({
        position: mousePos.current.clone().add(
          new THREE.Vector3(
            (Math.random() - 0.5) * 0.8,
            (Math.random() - 0.5) * 0.8,
            0
          )
        ),
        scale: 0,
        opacity: 1,
      });
    }

    // Update ice crystals
    const icePositions = icePoints.current.geometry.attributes.position;
    const iceScales = icePoints.current.geometry.attributes.size;
    const iceOpacities = icePoints.current.geometry.attributes.opacity;

    icePoints_list.current = icePoints_list.current.filter((ice, i) => {
      ice.scale = Math.min(ice.scale + 0.2, 5);
      ice.opacity = Math.max(ice.opacity - 0.003, 0);

      if (i < 1000) {
        icePositions.setXYZ(i, ice.position.x, ice.position.y, ice.position.z);
        iceScales.setX(i, ice.scale);
        iceOpacities.setX(i, ice.opacity);
      }

      return ice.opacity > 0;
    });

    icePositions.needsUpdate = true;
    iceScales.needsUpdate = true;
    iceOpacities.needsUpdate = true;
  });

  return (
    <>
      <points ref={points}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={snowflakes.length}
            array={new Float32Array(snowflakes.length * 3)}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-size"
            count={snowflakes.length}
            array={new Float32Array(snowflakes.length)}
            itemSize={1}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.08} // Smaller point size
          sizeAttenuation={true}
          color="#ffffff"
          transparent
          opacity={0.6} // Slightly reduced opacity
          depthWrite={false}
        />
      </points>
      <points ref={icePoints}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={1000}
            array={new Float32Array(1000 * 3)}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-size"
            count={1000}
            array={new Float32Array(1000)}
            itemSize={1}
          />
          <bufferAttribute
            attach="attributes-opacity"
            count={1000}
            array={new Float32Array(1000)}
            itemSize={1}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.2}
          sizeAttenuation={true}
          color="#a8d5ff"
          transparent
          opacity={0.6}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </>
  );
}