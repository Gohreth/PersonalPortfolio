import EarthDay from "../../public/textures/2k_earth_daymap.jpeg";
import EarthNight from "../../public/textures/2k_earth_nightmap.jpeg";
import EarthClouds from "../../public/textures/2k_earth_clouds.jpeg";
import NormalEarth from "../../public/textures/2k_earth_normal_map.jpg";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";

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

const Earth = () => {
  const [earthDay, earthNight, normalEarth, earthClouds] = useLoader(
    TextureLoader,
    [EarthDay, EarthNight, NormalEarth, EarthClouds]
  );
  console.log(now);

  const mapArray = [earthDay, earthNight];

  const meshRefEarth = useRef<any>(null);
  const meshRefClouds = useRef<any>(null);

  useFrame(({ clock }) => {
    if (meshRefEarth && meshRefClouds) {
      meshRefEarth.current.rotation.y = clock.getElapsedTime() * 0.085;

      meshRefClouds.current.rotation.y = clock.getElapsedTime() * 0.1;
    }
  });
  return (
    <>
      <mesh ref={meshRefEarth} position={[-2.5, 0, 0]}>
        <sphereGeometry args={[2, 32, 32]}></sphereGeometry>
        <meshStandardMaterial
          map={mapArray[getIndex(now)]}
          normalMap={normalEarth}
          metalness={getIndex(now) ? 0 : 0.75}
        />
      </mesh>

      <mesh ref={meshRefClouds} position={[-2.5, 0, 0]}>
        <sphereGeometry args={[2.05, 32, 32]}></sphereGeometry>
        <meshStandardMaterial
          opacity={0.2}
          transparent={true}
          map={earthClouds}
        />
      </mesh>
    </>
  );
};

export default Earth;
