import { Canvas } from "@react-three/fiber";
import XrHitModel from "./XrHitModel";
import { ARButton, XR } from "@react-three/xr";

const XrHitModelContainer = () => {
  return (
    <>
      <ARButton
        sessionInit={{
          requiredFeatures: ["hit-test"],
        }}
      />
      <Canvas>
        <XR>
          <XrHitModel />
        </XR>
      </Canvas>
    </>
  );
};

export default XrHitModelContainer;
