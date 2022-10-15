import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import Montserrat from "../../public/fonts/Montserrat Black_Regular.json";
import { extend } from "@react-three/fiber";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      textGeometry: any;
    }
  }
}

extend({ TextGeometry });

const ThreeText = ({
  text,
  position,
}: {
  text: string;
  position: [x: number, y: number, z: number];
}) => {
  const font = new FontLoader().parse(Montserrat);
  return (
    <mesh position={[position[0] * -1, position[1], position[2]]}>
      <textGeometry
        args={[text, { font, size: 0.25, height: 0.1 }]}
      ></textGeometry>
      <meshNormalMaterial></meshNormalMaterial>
    </mesh>
  );
};

export default ThreeText;
