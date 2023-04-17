import { Canvas } from "@react-three/fiber";
import XrOverlay from "./XrOverlay";
import { ARButton, XR } from "@react-three/xr";

const XrOverlayContainer = () => {
  return (
    <>
      <ARButton
        sessionInit={{
          requiredFeatures: ["hit-test"],
        }}
      />
      <Canvas>
        <XR>
          <XrOverlay />
        </XR>
      </Canvas>
    </>
  );
};

export default XrOverlayContainer;
