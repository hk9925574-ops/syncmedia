"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { Environment } from "@react-three/drei";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import ApertureIris from "@/components/worlds/ApertureIris";
import { theme } from "@/lib/theme";

// Deliberately minimal: one lit object, dead-center, no particle field or
// starfield behind it. The scroll-driven reveal comes from the iris itself
// physically opening, not from moving the camera through waypoints.
export default function HeroScene() {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 0, 6], fov: 36 }}
      gl={{ toneMapping: THREE.ACESFilmicToneMapping }}
    >
      <color attach="background" args={[theme.void]} />
      <fogExp2 attach="fog" args={[theme.void, 0.04]} />

      <ambientLight intensity={0.15} />

      {/* Single dramatic key light + a quiet violet rim — studio lighting, not sci-fi glow */}
      <spotLight
        castShadow
        position={[3, 4, 5]}
        intensity={45}
        angle={0.35}
        penumbra={1}
        color={theme.champagne}
      />
      <spotLight
        position={[-4, -2, 3]}
        intensity={10}
        angle={0.4}
        penumbra={1}
        color={theme.violet}
      />

      <Suspense fallback={null}>
        <Environment preset="studio" />
      </Suspense>

      <ApertureIris />

      <EffectComposer>
        <Bloom intensity={1} luminanceThreshold={0.35} />
        <Vignette eskil={false} offset={0.25} darkness={0.85} />
      </EffectComposer>
    </Canvas>
  );
}
