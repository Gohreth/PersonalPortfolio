import { useEffect, useRef, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Projects from "./views/Projects";
import Experience from "./views/Experience";
import DebugText from "./components/DebugText";

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
  return (
    <div className=" text-slate-200">
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
