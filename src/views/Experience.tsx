import { forwardRef } from "react";

const Experience = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div
      id={"ExperiencePage"}
      ref={ref}
      className="h-screen w-screen bg-blue-300 overflow-hidden"
    ></div>
  );
});

export default Experience;
