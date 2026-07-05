"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function Aperture() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.z += delta * 0.5;
    }
  });

  return (
    <mesh ref={ref} position={[0, 0, 0.21]}>
      <ringGeometry args={[0.45, 0.8, 64]} />

      <meshStandardMaterial
        color="#00D4FF"
        emissive="#00D4FF"
        emissiveIntensity={2}
      />
    </mesh>
  );
}