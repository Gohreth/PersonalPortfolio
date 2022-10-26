import { useEffect, useRef, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Projects from "./views/Projects";
import Experience from "./views/Experience";

import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, Stars } from "@react-three/drei";

import Earth from "./components/Earth";
import Moon from "./components/Moon";
import Flag from "./components/Flag";

function App() {
  const [observed, setObserved] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);

  const [start, setStart] = useState(false);

  useEffect(() => {
    if (observed !== "ExperiencePage") setStart(false);
  }, [observed]);

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
  return (
    <div className=" text-slate-200">
      <Navbar currentSection={observed!} />
      <div
        ref={containerRef}
        className="snap-y snap-mandatory h-screen overflow-y-scroll overflow-x-hidden"
      >
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
            <Flag start={start}></Flag>
            <Earth section={observed!} start={start}></Earth>
            <Moon section={observed!}></Moon>
            <Stars
              radius={100}
              depth={5}
              count={5000}
              factor={1}
              saturation={0}
              fade
              speed={0.5}
            />
          </Canvas>
        </div>
        <Home ref={homeRef} />
        <Projects ref={projectsRef} />
        <Experience onStartPress={() => setStart(!start)} ref={experienceRef} />
      </div>
    </div>
  );
}

export default App;
