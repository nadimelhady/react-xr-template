import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/nadim.glb");
  const { actions } = useAnimations(animations, group);

  console.log({ animations });
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh
            name="Nadim_BBoy"
            geometry={nodes.Nadim_BBoy.geometry}
            material={materials["NadimReduced.003"]}
            skeleton={nodes.Nadim_BBoy.skeleton}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/nadim.glb");

export default Model;
