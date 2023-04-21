import { Canvas } from "@react-three/fiber";
import { ARButton, XR } from "@react-three/xr";
import { Leva } from "leva";
import { useEffect, useRef } from "react";
import { CharacterAnimationsProvider } from "../../contexts/CharacterAnimations";
import Interface from "./Interface";
import XrOverlay from "./XrOverlay";

const XrOverlayContainer = () => {
  const overlayContentRef = useRef();

  useEffect(() => {
    overlayContentRef.current = document.getElementById("overlay");
  }, []);

  return (
    <>
      <CharacterAnimationsProvider>
        <ARButton
          className="ar-button"
          sessionInit={{
            requiredFeatures: ["hit-test", "dom-overlay"],
            domOverlay: { root: overlayContentRef.current },
          }}
        />
        <Canvas>
          <XR>
            <XrOverlay />
          </XR>
        </Canvas>
        <Interface />
        <Leva hidden={false} />
      </CharacterAnimationsProvider>
    </>
  );
};

export default XrOverlayContainer;
