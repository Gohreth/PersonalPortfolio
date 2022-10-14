import { forwardRef } from "react";

const Experience = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div
      id={"ExperiencePage"}
      ref={ref}
      className="snap-center h-screen w-screen bg-black flex justify-center items-center"
    >
      <button>Start Experience</button>
    </div>
  );
});

export default Experience;
