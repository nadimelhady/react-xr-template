import { Canvas } from "@react-three/fiber";
import XrHitCube from "./XrHitCube";
import { ARButton, XR } from "@react-three/xr";

const XrHitCubeContainer = () => {
  return (
    <>
      <ARButton
        sessionInit={{
          requiredFeatures: ["hit-test"],
        }}
      />
      <Canvas>
        <XR>
          <XrHitCube />
        </XR>
      </Canvas>
    </>
  );
};

export default XrHitCubeContainer;
