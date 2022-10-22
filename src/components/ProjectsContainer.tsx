const ProjectsContainer = ({ children }: { children: JSX.Element }) => {
  return (
    <div className="border p-10 px-[50%] snap-x snap-mandatory overflow-y-hidden overflow-x-scroll max-w-[50vw] flex flex-row items-center gap-3">
      {children}
    </div>
  );
};

export default ProjectsContainer;
