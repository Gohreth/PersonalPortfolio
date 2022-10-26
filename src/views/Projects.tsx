import { forwardRef, useRef, useEffect, useState } from "react";
import Logos from "../components/Icons";
import ProjectCard from "../components/ProjectCard";
import bGamesImage from "../assets/images/bGames.png";
import portfolioImage from "../assets/images/portfolio.png";

const PROJECTS = [
  {
    name: "Personal Portfolio",
    identifier: "#001",
    description: "Project 1 Description",
    image: portfolioImage,
    tech: ["HTML", "CSS", "JavaScript", "React", "Tailwind", "Three"],
  },
  {
    name: "bGames Dashboard",
    identifier: "#002",
    description: "Project 2 Description",
    image: bGamesImage,
    tech: ["HTML", "CSS", "Vue", "Mongo", "Firebase", "GitHub", "Docker"],
  },
  {
    name: "Dashboard Remake",
    identifier: "#003",
    description: "Project 3 Description",
    image: bGamesImage,
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Next",
      "Tailwind",
      "tRPC",
      "GitHub",
    ],
  },
];

const Projects = forwardRef<HTMLDivElement>((props, ref) => {
  const [observed, setObserved] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  //TODO Dinamically create refs
  const firstRef = useRef<HTMLDivElement>(null);
  const secondRef = useRef<HTMLDivElement>(null);
  const thirdRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          entry.isIntersecting && setObserved(entry.target.id);
        }
      },
      { root: null, rootMargin: "0px", threshold: 0.8 }
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
        <p className="text-base sm:text-2xl lg:text-3xl xl:text-4xl text-center font-bold">
          Projects Showcase
        </p>
        <div
          ref={containerRef}
          className="p-10 px-[50%] snap-x snap-mandatory overflow-y-hidden overflow-x-scroll max-w-[50vw] min-w-[300px] max-h-[300px] min-h-[150px] flex flex-row items-center gap-3"
        >
          <ProjectCard
            ref={firstRef}
            cardProps={PROJECTS[0]}
            observed={observed!}
          />
          <ProjectCard
            ref={secondRef}
            cardProps={PROJECTS[1]}
            observed={observed!}
          />
          <ProjectCard
            ref={thirdRef}
            cardProps={PROJECTS[2]}
            observed={observed!}
          />
        </div>
      </div>

      <Logos
        tech={PROJECTS.find((project) => project.identifier === observed)?.tech}
        color="white"
      ></Logos>
    </div>
  );
});

export default Projects;
