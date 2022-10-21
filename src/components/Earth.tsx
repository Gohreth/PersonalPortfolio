import EarthDay from "../../public/textures/2k_earth_daymap.jpeg";
import EarthNight from "../../public/textures/2k_earth_nightmap.jpeg";
import EarthClouds from "../../public/textures/2k_earth_clouds.jpeg";
import NormalEarth from "../../public/textures/2k_earth_normal_map.jpg";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useFrame, useLoader } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { useSpring, animated } from "@react-spring/three";

const TIME = {
  day: 0,
  night: 1,
};

const now = new Date().getHours();

const getIndex = (time: number) => {
  if (time <= 20 && time > 8) {
    return TIME.day;
  } else {
    return TIME.night;
  }
};

const getEarthPosition = (section: string) => {
  switch (section) {
    case "HomePage":
      return [-2.5, 0, 0];

    case "ProjectsPage":
      return [2.5, 0, 0];

    case "ExperiencePage":
      return [0, -1, 1];
  }
};

const Earth = ({ section, start }: { section: string; start: boolean }) => {
  const [earthDay, earthNight, normalEarth, earthClouds] = useLoader(
    TextureLoader,
    [EarthDay, EarthNight, NormalEarth, EarthClouds]
  );
  console.log(start);

  const positions = useSpring({
    position: getEarthPosition(section),
  });

  const rotations = useSpring({
    rotation: start ? [-0.5, -0.32, 0] : [0, 0, 0],
  });
  const mapArray = [earthDay, earthNight];

  const meshRefEarth = useRef<any>(null);
  const meshRefClouds = useRef<any>(null);

  useFrame(({ clock }) => {
    //If experience started then meshes won't rotate
    if (meshRefEarth && meshRefClouds) {
      meshRefEarth.current.rotation.y =
        !start && clock.getElapsedTime() * 0.085;
      meshRefClouds.current.rotation.y =
        clock.getElapsedTime() * (start ? 0.01 : 0.1);
    }
  });
  return (
    <>
      <animated.group
        position={positions.position as any}
        rotation={rotations.rotation as any}
      >
        <animated.mesh ref={meshRefEarth} rotation={rotations.rotation as any}>
          <sphereGeometry args={[2, 32, 32]}></sphereGeometry>
          <meshStandardMaterial
            map={mapArray[getIndex(now)]}
            normalMap={normalEarth}
            metalness={getIndex(now) ? 0 : 0.75}
          />
        </animated.mesh>

        <mesh ref={meshRefClouds}>
          <sphereGeometry args={[2.05, 32, 32]}></sphereGeometry>
          <meshStandardMaterial
            opacity={0.2}
            transparent={true}
            map={earthClouds}
          />
        </mesh>
      </animated.group>
    </>
  );
};

export default Earth;
