import {
  forwardRef,
  useRef,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import Logos from "../components/Icons";
import ProjectCard from "../components/ProjectCard";

const Projects = forwardRef<HTMLDivElement>((props, ref) => {
  const [observed, setObserved] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  //TODO Dinamically create refs
  const firstRef = useRef<HTMLDivElement>(null);
  const secondRef = useRef<HTMLDivElement>(null);
  const thirdRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    console.log(containerRef);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          console.log(entry);

          entry.isIntersecting && setObserved(entry.target.id);
        }
      },
      { root: null, rootMargin: "0px", threshold: 1 }
    );
    if (firstRef.current) observer.observe(firstRef.current);
    if (secondRef.current) observer.observe(secondRef.current);
    if (thirdRef.current) observer.observe(thirdRef.current);
    return () => {
      if (firstRef.current) observer.unobserve(firstRef.current);
      if (secondRef.current) observer.unobserve(secondRef.current);
      if (thirdRef.current) observer.unobserve(thirdRef.current);
    };
  }, []);
  return (
    <div
      id={"ProjectsPage"}
      ref={ref}
      className="snap-center h-screen w-screen flex flex-col justify-center items-center gap-y-10"
    >
      <div className="flex flex-col">
        <p className="text-4xl text-center font-bold">Projects Showcase</p>
        <div
          ref={containerRef}
          className="p-10 px-[50%] snap-x snap-mandatory overflow-y-hidden overflow-x-scroll max-w-[50vw] flex flex-row items-center gap-3"
        >
          <ProjectCard
            ref={firstRef}
            cardProps={{
              name: "Personal Portfolio",
              identifier: "#001",
              description: "Project 1 Description",
            }}
            observed={observed!}
          />
          <ProjectCard
            ref={secondRef}
            cardProps={{
              name: "bGames Dashboard",
              identifier: "#002",
              description: "Project 2 Description",
            }}
            observed={observed!}
          />
          <ProjectCard
            ref={thirdRef}
            cardProps={{
              name: "Dashboard Remake",
              identifier: "#003",
              description: "Project 3 Description",
            }}
            observed={observed!}
          />
        </div>
      </div>

      <Logos color="white"></Logos>
    </div>
  );
});

export default Projects;
