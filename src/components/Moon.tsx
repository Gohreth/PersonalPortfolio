import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import MoonMap from "../../public/textures/2k_moon.jpeg";

const Moon = () => {
  const meshRefMoon = useRef<any>(null);

  const moonMap = useLoader(TextureLoader, MoonMap);

  useFrame(({ clock }) => {
    if (meshRefMoon)
      meshRefMoon.current.rotation.y = clock.getElapsedTime() * -0.085;
  });
  return (
    <mesh ref={meshRefMoon} position={[2.5, 0, 0]}>
      <sphereGeometry args={[1, 32, 32]}></sphereGeometry>
      <meshStandardMaterial
        map={moonMap}
        metalness={0.75}
      ></meshStandardMaterial>
    </mesh>
  );
};

export default Moon;
