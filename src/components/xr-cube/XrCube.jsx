import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React from "react";
import { useRef } from "react";

const XrCube = () => {
  const cubeRef = useRef();

  useFrame((state, delta) => {
    cubeRef.current.rotation.y += delta;
  });

  return (
    <>
      <OrbitControls />;
      <ambientLight intensity={1} />
      <mesh ref={cubeRef} position-z={-5}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>
    </>
  );
};

export default XrCube;
