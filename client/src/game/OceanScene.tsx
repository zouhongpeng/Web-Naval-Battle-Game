import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GridHelper, Group, LineBasicMaterial } from 'three';

const OCEAN_COLOR = '#0A1628';
const NAVY_COLOR = '#122240';
const STEEL_COLOR = '#1A2D4A';
const ICE_COLOR = '#4A9EFF';

function OceanGrid() {
  const grid = useMemo(() => {
    const helper = new GridHelper(60, 60, ICE_COLOR, NAVY_COLOR);
    const material = helper.material as LineBasicMaterial;
    material.transparent = true;
    material.opacity = 0.18;
    helper.position.y = 0.012;
    return helper;
  }, []);

  return <primitive object={grid} />;
}

function PlaceholderShip() {
  const shipRef = useRef<Group>(null);

  useFrame((_, delta) => {
    if (shipRef.current) {
      shipRef.current.rotation.y += (Math.PI * 2 * delta) / 30;
    }
  });

  return (
    <group ref={shipRef} position={[0, 0.08, 0]}>
      <mesh position={[0, 0.55, 0]} castShadow receiveShadow>
        <boxGeometry args={[4, 1, 1.5]} />
        <meshStandardMaterial color={STEEL_COLOR} roughness={0.72} metalness={0.24} />
      </mesh>

      <mesh position={[0, 1.12, 0]}>
        <boxGeometry args={[1.7, 0.55, 1.05]} />
        <meshStandardMaterial color={NAVY_COLOR} roughness={0.68} metalness={0.28} />
      </mesh>

      <mesh position={[-0.75, 1.5, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.28, 0.28, 0.22, 24]} />
        <meshStandardMaterial color="#223d64" roughness={0.55} metalness={0.32} />
      </mesh>

      <mesh position={[-1.45, 1.5, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.045, 0.045, 1.2, 16]} />
        <meshStandardMaterial color="#6e819c" roughness={0.42} metalness={0.42} />
      </mesh>
    </group>
  );
}

export function OceanScene() {
  return (
    <Canvas
      camera={{ position: [7, 5.4, 8], fov: 45, near: 0.1, far: 220 }}
      gl={{ antialias: true, powerPreference: 'high-performance' }}
    >
      <color attach="background" args={[OCEAN_COLOR]} />
      <fog attach="fog" args={[OCEAN_COLOR, 28, 70]} />
      <ambientLight intensity={0.72} />
      <directionalLight position={[7, 10, 4]} intensity={1.35} />
      <directionalLight position={[-6, 5, -5]} intensity={0.35} color="#8fb8ef" />

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[200, 200, 1, 1]} />
        <meshStandardMaterial color={OCEAN_COLOR} roughness={0.92} metalness={0.05} />
      </mesh>
      <OceanGrid />
      <PlaceholderShip />
      <OrbitControls
        enableDamping
        dampingFactor={0.08}
        enablePan={false}
        minDistance={5}
        maxDistance={18}
        minPolarAngle={0.35}
        maxPolarAngle={1.38}
        target={[0, 0.65, 0]}
      />
    </Canvas>
  );
}
