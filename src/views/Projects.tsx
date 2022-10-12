import { forwardRef } from "react";

const Projects = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div
      id={"ProjectsPage"}
      ref={ref}
      className="h-screen w-screen bg-cyan-300 overflow-hidden"
    ></div>
  );
});

export default Projects;
