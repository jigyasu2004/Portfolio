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
    const count = 500;
    
    for (let i = 0; i < count; i++) {
      temp.push({
        position: new THREE.Vector3(
          (Math.random() - 0.5) * viewport.width * 2,
          (Math.random() - 0.5) * viewport.height * 2 + viewport.height,
          Math.random() * 2
        ),
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.05,
          -0.1 - Math.random() * 0.1,
          0
        ),
        size: Math.random() * 2 + 1,
      });
    }
    return temp;
  }, [viewport]);

  // Store ice crystal points
  const icePoints_list = useRef<IcePoint[]>([]);

  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      mousePos.current.set(x * viewport.width, y * viewport.height, 0);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [viewport]);

  useFrame((state) => {
    if (!points.current || !icePoints.current) return;

    // Update snowflakes
    const positions = points.current.geometry.attributes.position;
    const sizes = points.current.geometry.attributes.size;

    snowflakes.forEach((flake, i) => {
      flake.position.add(flake.velocity);

      // Reset if snowflake goes below viewport
      if (flake.position.y < -viewport.height) {
        flake.position.y = viewport.height;
        flake.position.x = (Math.random() - 0.5) * viewport.width * 2;
      }

      positions.setXYZ(i, flake.position.x, flake.position.y, flake.position.z);
      sizes.setX(i, flake.size);
    });

    positions.needsUpdate = true;
    sizes.needsUpdate = true;

    // Add new ice crystals at mouse position
    if (Math.random() > 0.9) {
      icePoints_list.current.push({
        position: mousePos.current.clone().add(
          new THREE.Vector3(
            (Math.random() - 0.5) * 0.5,
            (Math.random() - 0.5) * 0.5,
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

    icePoints_list.current.forEach((ice, i) => {
      ice.scale = Math.min(ice.scale + 0.1, 3);
      ice.opacity = Math.max(ice.opacity - 0.005, 0);

      icePositions.setXYZ(i, ice.position.x, ice.position.y, ice.position.z);
      iceScales.setX(i, ice.scale);
      iceOpacities.setX(i, ice.opacity);
    });

    // Remove faded ice crystals
    icePoints_list.current = icePoints_list.current.filter(ice => ice.opacity > 0);

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
          size={0.1}
          sizeAttenuation={true}
          color="#ffffff"
          transparent
          opacity={0.8}
          alphaMap={new THREE.TextureLoader().load("/snowflake.png")}
          blending={THREE.AdditiveBlending}
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
          alphaMap={new THREE.TextureLoader().load("/ice.png")}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </>
  );
}
