import { useXR } from "@react-three/xr";

const ExitARButton = () => {
  const { end } = useXR();

  const handleClick = () => {
    end();
  };

  return (
    <button className="exit-ar-button" onClick={handleClick}>
      Exit AR
    </button>
  );
};

export default ExitARButton;
