import { useFrame } from "@react-three/fiber";
import React from "react";
import { useRef } from "react";

const Cube = ({ position }) => {
  const cubeRef = useRef();

  useFrame((state, delta) => {
    cubeRef.current.rotation.y += delta;
  });

  return (
    <>
      <mesh ref={cubeRef} position={position}>
        <boxGeometry args={[0.6, 0.6, 0.6]} />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>
    </>
  );
};

export default Cube;
