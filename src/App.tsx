import { useEffect, useRef, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Projects from "./views/Projects";
import Experience from "./views/Experience";
import DebugText from "./components/DebugText";

import { Canvas, extend, useFrame } from "@react-three/fiber";
import ThreeBox from "./components/ThreeBox";
import { PerspectiveCamera, Stars, Stats } from "@react-three/drei";
import ThreeText from "./components/ThreeText";
import Earth from "./components/Earth";
import Moon from "./components/Moon";

const getCanvasStyle = (sectionName: string) => {
  switch (sectionName) {
    case "HomePage":
      return "w-1/3 left-0";
    case "ProjectsPage":
      return "w-1/3 right-0";
    case "ExperiencePage":
      return "w-screen";
    default:
      break;
  }
};

function App() {
  const [observed, setObserved] = useState<string | null>(null);

  const homeRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          entry.isIntersecting && setObserved(entry.target.id);
        }
      },
      { root: null, rootMargin: "0px", threshold: 0.55 }
    );
    if (homeRef.current) observer.observe(homeRef.current);
    if (projectsRef.current) observer.observe(projectsRef.current);
    if (experienceRef.current) observer.observe(experienceRef.current);
    return () => {
      if (homeRef.current) observer.unobserve(homeRef.current);
      if (projectsRef.current) observer.unobserve(projectsRef.current);
      if (experienceRef.current) observer.unobserve(experienceRef.current);
    };
  }, []);
  const [swap, setSwap] = useState(0);
  return (
    <div className=" text-slate-200">
      <div className={`-z-10 bg-black h-screen absolute w-screen`}>
        <Canvas>
          <PerspectiveCamera
            makeDefault
            position={[0, 0, 5]}
            fov={75}
            key={undefined}
            view={undefined}
            attach={undefined}
            args={undefined}
            onUpdate={undefined}
            clear={undefined}
            raycast={undefined}
            visible={undefined}
            type={undefined}
            id={undefined}
            uuid={undefined}
            name={undefined}
            parent={undefined}
            modelViewMatrix={undefined}
            normalMatrix={undefined}
            matrixWorld={undefined}
            matrixAutoUpdate={undefined}
            matrixWorldNeedsUpdate={undefined}
            castShadow={undefined}
            receiveShadow={undefined}
            frustumCulled={undefined}
            renderOrder={undefined}
            animations={undefined}
            userData={undefined}
            customDepthMaterial={undefined}
            customDistanceMaterial={undefined}
            isObject3D={undefined}
            onBeforeRender={undefined}
            onAfterRender={undefined}
            applyMatrix4={undefined}
            applyQuaternion={undefined}
            setRotationFromAxisAngle={undefined}
            setRotationFromEuler={undefined}
            setRotationFromMatrix={undefined}
            setRotationFromQuaternion={undefined}
            rotateOnAxis={undefined}
            rotateOnWorldAxis={undefined}
            rotateX={undefined}
            rotateY={undefined}
            rotateZ={undefined}
            translateOnAxis={undefined}
            translateX={undefined}
            translateY={undefined}
            translateZ={undefined}
            localToWorld={undefined}
            worldToLocal={undefined}
            lookAt={undefined}
            add={undefined}
            remove={undefined}
            removeFromParent={undefined}
            getObjectById={undefined}
            getObjectByName={undefined}
            getObjectByProperty={undefined}
            getWorldPosition={undefined}
            getWorldQuaternion={undefined}
            getWorldScale={undefined}
            getWorldDirection={undefined}
            traverse={undefined}
            traverseVisible={undefined}
            traverseAncestors={undefined}
            updateMatrix={undefined}
            updateMatrixWorld={undefined}
            updateWorldMatrix={undefined}
            toJSON={undefined}
            clone={undefined}
            copy={undefined}
            addEventListener={undefined}
            hasEventListener={undefined}
            removeEventListener={undefined}
            dispatchEvent={undefined}
            zoom={undefined}
            matrixWorldInverse={undefined}
            projectionMatrix={undefined}
            projectionMatrixInverse={undefined}
            isCamera={undefined}
            near={undefined}
            far={undefined}
            isPerspectiveCamera={undefined}
            aspect={undefined}
            focus={undefined}
            filmGauge={undefined}
            filmOffset={undefined}
            setFocalLength={undefined}
            getFocalLength={undefined}
            getEffectiveFOV={undefined}
            getFilmWidth={undefined}
            getFilmHeight={undefined}
            setViewOffset={undefined}
            clearViewOffset={undefined}
            updateProjectionMatrix={undefined}
            setLens={undefined}
          >
            <ambientLight></ambientLight>
          </PerspectiveCamera>
          <Earth></Earth>
          <Moon></Moon>
          <Stars
            radius={100}
            depth={5}
            count={5000}
            factor={1}
            saturation={0}
            fade
            speed={0.5}
          />
          <Stats />
        </Canvas>
      </div>

      <Navbar currentSection={observed!} />
      <div className="snap-y snap-mandatory h-screen overflow-y-scroll overflow-x-hidden">
        <Home ref={homeRef} />
        <Projects ref={projectsRef} />
        <Experience ref={experienceRef} />
      </div>
    </div>
  );
}

export default App;
