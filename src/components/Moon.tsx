import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import MoonMap from "../../public/textures/2k_moon.jpeg";
import { useSpring, animated } from "@react-spring/three";

const getMoonPosition = (section: string) => {
  switch (section) {
    case "HomePage":
      return [2.5, 0, 0];

    case "ProjectsPage":
      return [-2.5, 0, 0];

    case "ExperiencePage":
      return [0, 2, -1];
  }
};

const Moon = ({ section }: { section: string }) => {
  const meshRefMoon = useRef<any>(null);

  const positions = useSpring({ position: getMoonPosition(section) });

  const moonMap = useLoader(TextureLoader, MoonMap);

  useFrame(({ clock }) => {
    if (meshRefMoon)
      meshRefMoon.current.rotation.y = clock.getElapsedTime() * -0.085;
  });
  return (
    <animated.mesh ref={meshRefMoon} position={positions.position as any}>
      <sphereGeometry args={[1, 32, 32]}></sphereGeometry>
      <meshStandardMaterial
        map={moonMap}
        metalness={0.75}
      ></meshStandardMaterial>
    </animated.mesh>
  );
};

export default Moon;
