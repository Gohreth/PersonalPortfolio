import { forwardRef } from "react";

const Projects = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div
      id={"ProjectsPage"}
      ref={ref}
      className="snap-center h-screen w-screen flex flex-col justify-center items-center gap-y-10"
    >
      <div className="flex flex-col">
        <p className="text-4xl">Projects</p>
        <div className="border p-10"></div>
      </div>
      <div className="flex flex-col">
        <p className="text-4xl">Tech used</p>
        <div className="border p-10"></div>
      </div>
    </div>
  );
});

export default Projects;
