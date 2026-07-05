"use client";

import { MeshTransmissionMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { theme } from "@/lib/theme";

// The signature element: a faceted crystal core that fractures light
// outward toward the orbiting media panels — visual metaphor for one
// studio splitting into every format. Replaces the old camera-lens motif.
export default function SyncOrb() {
  const mesh = useRef<THREE.Mesh>(null);
  const core = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.x += delta * 0.12;
      mesh.current.rotation.y += delta * 0.18;
    }
    if (core.current) {
      const pulse = 1 + Math.sin(state.clock.elapsedTime * 1.6) * 0.06;
      core.current.scale.setScalar(pulse);
    }
  });

  return (
    <group>
      <mesh ref={mesh}>
        <icosahedronGeometry args={[1.15, 1]} />
        <MeshTransmissionMaterial
          color={theme.ember}
          thickness={1.1}
          roughness={0.05}
          transmission={0.95}
          chromaticAberration={0.35}
          distortion={0.15}
          distortionScale={0.25}
          temporalDistortion={0.1}
          anisotropy={0.4}
          ior={1.4}
        />
      </mesh>

      {/* Inner glow core, visible through the crystal facets */}
      <mesh ref={core}>
        <icosahedronGeometry args={[0.45, 0]} />
        <meshBasicMaterial color={theme.violet} toneMapped={false} />
      </mesh>
    </group>
  );
}
