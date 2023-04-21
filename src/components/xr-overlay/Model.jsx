import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useCharacterAnimations } from "../../contexts/CharacterAnimations";

export function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/nadim.glb");
  const { actions, names } = useAnimations(animations, group);

  const { setAnimations, animationIndex } = useCharacterAnimations();
  console.log(names);

  useEffect(() => {
    setAnimations(names);
  }, []);

  useEffect(() => {
    actions[names[animationIndex]].reset().fadeIn(0.5).play();

    return () => {
      actions[names[animationIndex]]?.fadeOut(0.5);
    };
  }, [animationIndex]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.008}>
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
