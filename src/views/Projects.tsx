import { forwardRef } from "react";

const Projects = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div
      id={"ProjectsPage"}
      ref={ref}
      className="snap-center h-screen w-screen bg-black flex justify-center items-center"
    >
      <div className="">Projects</div>
      <div className="">Tech used</div>
    </div>
  );
});

export default Projects;
