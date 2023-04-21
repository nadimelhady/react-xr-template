import { OrbitControls } from "@react-three/drei";
import { Interactive, useHitTest, useXR } from "@react-three/xr";
import { useEffect, useRef, useState } from "react";
import Model from "./Model";
import { useThree } from "@react-three/fiber";
import { Environment } from "@react-three/drei";

const XrOverlay = () => {
  const reticleRef = useRef();
  const [models, setModels] = useState([]);

  const { isPresenting } = useXR();

  useThree(({ camera }) => {
    if (!isPresenting) {
      camera.position.z = 2.5;
      camera.position.y = 1;
    }
  });

  useEffect(() => {
    const targetCanvas = document.querySelector("div > canvas");
    if (targetCanvas) {
      targetCanvas.style.zIndex = "0";
      targetCanvas.style.position = "relative";
      targetCanvas.parentElement.style.position = "relative";
    }
  }, []);

  useHitTest((hitMatrix, hit) => {
    hitMatrix.decompose(
      reticleRef.current.position,
      reticleRef.current.quaternion,
      reticleRef.current.scale
    );

    reticleRef.current.rotation.set(-Math.PI / 2, 0, 0);
  });

  const placeModel = (e) => {
    let position = e.intersection.object.position.clone();
    let id = Date.now();
    setModels([...models, { position, id }]);
  };

  return (
    <>
      <OrbitControls />
      <Environment preset="sunset" />
      {isPresenting &&
        models.map(({ position, id }) => {
          return <Model key={id} position={position} />;
        })}
      {isPresenting && (
        <Interactive onSelect={placeModel}>
          <mesh ref={reticleRef} rotation-x={-Math.PI / 2}>
            <ringGeometry args={[0.06, 0.12, 32]} />
            <meshStandardMaterial color={"White"} />
          </mesh>
        </Interactive>
      )}
      {!isPresenting && <Model />}
    </>
  );
};

export default XrOverlay;
