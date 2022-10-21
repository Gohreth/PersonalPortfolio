import { animated, useSpring } from "@react-spring/three";
import { useFrame, useLoader } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import ChileanFlag from "../../public/images/Chile.jpg";

const SHADERS = {
  vertex: `
    uniform float uTime;
    varying vec2 vUv;
    void main() {
        vUv = uv;
        vec4 modelPosition = modelMatrix * vec4(position, 1.0);
        float elevation = sin(5.0 * modelPosition.x + uTime * 1.5) * sin(2.0 * modelPosition.y + uTime * 1.25) * 0.25;
        modelPosition.z += elevation * (smoothstep(0.0, 1.0, uv.x));
        gl_Position = projectionMatrix * viewMatrix * modelPosition;
    }`,
  fragment: `
    uniform sampler2D uFlag;
    varying vec2 vUv;
  void main() {

    gl_FragColor = vec4(texture2D(uFlag, vUv).xyz * 0.75, 1.0);
  }`,
};

const Flag = ({ start }: { start: boolean }) => {
  const flagMesh = useRef<any>(null);
  const positions = useSpring({
    position: start ? [0.15, 0.25, 2.5] : [0.1, 5, 1],
  });
  const chileanFlag = useLoader(TextureLoader, ChileanFlag);
  const uniforms = useMemo(
    () => ({ uFlag: { value: chileanFlag }, uTime: { value: 0 } }),
    []
  );
  useFrame(({ clock }) => {
    if (flagMesh) {
      flagMesh.current.uniforms.uTime.value = clock.getElapsedTime();
    }
  });
  return (
    <animated.group
      position={positions.position as any}
      scale={[0.5, 0.5, 0.5]}
    >
      <mesh position={[0, 0, 1]} scale={[0.75, 0.5, 1]}>
        <planeGeometry args={[1, 1, 32, 32]} />
        <shaderMaterial
          ref={flagMesh}
          vertexShader={SHADERS.vertex}
          fragmentShader={SHADERS.fragment}
          uniforms={uniforms}
        />
      </mesh>
      <mesh position={[-0.375, -0.2, 1]} scale={[0.01, 0.09, 0.01]}>
        <cylinderGeometry args={[1, 1, 10, 32, 10]} />
        <meshBasicMaterial color={"gray"} />
      </mesh>
    </animated.group>
  );
};

export default Flag;
