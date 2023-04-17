import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const group = useRef();
  const group2 = useRef();

  const { nodes, materials } = useGLTF("/3D/CryptoVreneli.gltf");
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
          position={[-0.03, 0.38, -0.12]}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/3D/CryptoVreneli.gltf");

export default Model;
