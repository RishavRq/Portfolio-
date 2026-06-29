"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const PARTICLE_COUNT = 900;
const FIELD_RADIUS = 9;

function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);
  const groupRef = useRef<THREE.Group>(null);

  // Generate a stable random distribution once
  const positions = useMemo(() => {
    const arr = new Float32Array(PARTICLE_COUNT * 3);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      // Distribute in a soft sphere, denser toward center for depth
      const radius = FIELD_RADIUS * Math.pow(Math.random(), 0.5);
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      arr[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta) * 0.6;
      arr[i * 3 + 2] = radius * Math.cos(phi) * 0.6 - 2;
    }
    return arr;
  }, []);

  const material = useMemo(() => {
    return new THREE.PointsMaterial({
      size: 0.028,
      color: new THREE.Color("#C9A24B"),
      transparent: true,
      opacity: 0.55,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      // Extremely slow ambient rotation — "subtle motion" not a spin cycle
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      groupRef.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.05) * 0.05;
    }
    if (pointsRef.current) {
      // Gentle breathing opacity for ambient life
      const mat = pointsRef.current.material as THREE.PointsMaterial;
      mat.opacity = 0.45 + Math.sin(state.clock.elapsedTime * 0.4) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <points ref={pointsRef} material={material}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
      </points>
      {/* A few thin orbiting lines for depth, kept minimal per the balanced tier */}
      <OrbitRing radius={4.2} tilt={0.3} speed={0.04} opacity={0.12} />
      <OrbitRing radius={6.5} tilt={-0.45} speed={-0.025} opacity={0.08} />
    </group>
  );
}

function OrbitRing({
  radius,
  tilt,
  speed,
  opacity,
}: {
  radius: number;
  tilt: number;
  speed: number;
  opacity: number;
}) {
  const ref = useRef<THREE.Line>(null);

  const geometry = useMemo(() => {
    const points: THREE.Vector3[] = [];
    const segments = 128;
    for (let i = 0; i <= segments; i++) {
      const angle = (i / segments) * Math.PI * 2;
      points.push(
        new THREE.Vector3(Math.cos(angle) * radius, 0, Math.sin(angle) * radius)
      );
    }
    return new THREE.BufferGeometry().setFromPoints(points);
  }, [radius]);

  const material = useMemo(
    () =>
      new THREE.LineBasicMaterial({
        color: "#C9A24B",
        transparent: true,
        opacity,
      }),
    [opacity]
  );

  const line = useMemo(
    () => new THREE.Line(geometry, material),
    [geometry, material]
  );

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * speed;
    }
  });

  return (
    <primitive
      object={line}
      ref={ref}
      rotation={[Math.PI / 2 + tilt, 0, 0]}
    />
  );
}

/**
 * Cinematic particle universe behind the hero headline.
 * Balanced performance tier: a single particle field + two faint orbit
 * rings, slow ambient rotation only — no heavy postprocessing.
 */
export function HeroScene() {
  return (
    <div className="absolute inset-0 -z-10" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
      >
        <ParticleField />
      </Canvas>
    </div>
  );
}
