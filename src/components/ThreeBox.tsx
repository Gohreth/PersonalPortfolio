import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const ThreeBox = () => {
  const meshRef = useRef<any>(null);
  useFrame(() => {
    if (meshRef) meshRef.current.rotation.x += 0.01;
  });
  return (
    <mesh ref={meshRef} position={[-4, 0, 0]}>
      <boxGeometry></boxGeometry>
      <meshNormalMaterial></meshNormalMaterial>
    </mesh>
  );
};

export default ThreeBox;
