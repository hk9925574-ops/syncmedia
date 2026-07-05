"use client";

import { Float } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import MediaIcon from "./MediaIcon";
import { theme } from "@/lib/theme";

const icons = [
  { emoji: "🎥", color: theme.ember },
  { emoji: "📷", color: theme.violet },
  { emoji: "🎬", color: theme.champagne },
  { emoji: "🎵", color: theme.ember },
  { emoji: "🤖", color: theme.violet },
  { emoji: "☁", color: theme.champagne },
];

export default function OrbitingMedia() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = state.clock.elapsedTime * 0.25;
  });

  return (
    <group ref={group}>
      {icons.map((item, index) => {
        const angle = (Math.PI * 2 * index) / icons.length;
        const radius = 3;

        return (
          <Float key={index} speed={2} floatIntensity={1} rotationIntensity={0.5}>
            <group
              position={[
                Math.cos(angle) * radius,
                Math.sin(angle * 2) * 0.4,
                Math.sin(angle) * radius,
              ]}
            >
              <MediaIcon emoji={item.emoji} color={item.color} />
            </group>
          </Float>
        );
      })}
    </group>
  );
}
