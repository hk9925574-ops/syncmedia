"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import useScrollProgress from "@/components/effects/useScrollProgress";
import { theme } from "@/lib/theme";

// The signature element: a mechanical camera iris. Ten blades, pivoting
// in perfect unison — "sync" made literal — that physically open as the
// visitor scrolls, revealing warm light behind them. Replaces the
// glowing-orb-with-orbiting-icons motif entirely; one deliberate object
// instead of a decorative cluster.
const BLADE_COUNT = 10;
const RING_RADIUS = 0.15;
const OPEN_OFFSET = 1.5;
const OPEN_ROTATE = 0.95;

function createBladeGeometry() {
  const shape = new THREE.Shape();
  shape.moveTo(0, 0);
  shape.lineTo(0.18, 1.55);
  shape.quadraticCurveTo(0.75, 1.65, 1.05, 1.35);
  shape.lineTo(0.88, 0.05);
  shape.closePath();

  return new THREE.ExtrudeGeometry(shape, {
    depth: 0.05,
    bevelEnabled: true,
    bevelThickness: 0.012,
    bevelSize: 0.012,
    bevelSegments: 2,
  });
}

export default function ApertureIris() {
  const groupRefs = useRef<(THREE.Group | null)[]>([]);
  const openRef = useRef(0);
  const progress = useScrollProgress();

  const geometry = useMemo(() => createBladeGeometry(), []);
  const material = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#15100C",
        metalness: 0.9,
        roughness: 0.32,
      }),
    []
  );

  useFrame(() => {
    // Iris finishes opening within the first 60% of page scroll,
    // then holds open through the rest of the content.
    const target = Math.min(1, progress / 0.6);
    openRef.current = THREE.MathUtils.lerp(openRef.current, target, 0.045);

    groupRefs.current.forEach((group, i) => {
      if (!group) return;
      const baseAngle = (i / BLADE_COUNT) * Math.PI * 2;
      const dirX = Math.cos(baseAngle);
      const dirY = Math.sin(baseAngle);
      const offset = openRef.current * OPEN_OFFSET;

      group.position.set(
        dirX * (RING_RADIUS + offset),
        dirY * (RING_RADIUS + offset),
        0
      );
      group.rotation.z = baseAngle + Math.PI / 2 + openRef.current * OPEN_ROTATE;
    });
  });

  return (
    <group>
      {/* Warm light glowing through the gap as the iris opens */}
      <mesh position={[0, 0, -0.3]}>
        <circleGeometry args={[1.1, 64]} />
        <meshBasicMaterial color={theme.ember} toneMapped={false} />
      </mesh>
      <pointLight position={[0, 0, -0.2]} color={theme.ember} intensity={14} distance={7} />

      {Array.from({ length: BLADE_COUNT }).map((_, i) => (
        <group
          key={i}
          ref={(el) => {
            groupRefs.current[i] = el;
          }}
        >
          <mesh geometry={geometry} material={material} castShadow receiveShadow />
        </group>
      ))}
    </group>
  );
}
