import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const group = useRef();

  const { nodes, materials } = useGLTF("/CryptoVreneli.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.CryptoVreneli.geometry}
        material={materials.Coin}
        position={[0, 0.35, 0]}
        scale={0.13}
      >
        <mesh
          geometry={nodes.Chip.geometry}
          material={materials["Coin-E"]}
          position={[-0.03, 0.03, -0.12]}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/CryptoVreneli.gltf");

export default Model;
