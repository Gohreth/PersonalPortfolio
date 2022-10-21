import { forwardRef } from "react";

const Experience = forwardRef<HTMLDivElement, any>((props, ref) => {
  return (
    <div
      id={"ExperiencePage"}
      ref={ref}
      className="snap-center h-screen w-screen flex justify-center items-center"
    >
      <button
        onClick={props.onStartPress}
        className="border-4 rounded-xl p-5 hover:animate-pulse hover:text-textAccent hover:border-accent transition-colors"
      >
        Start Experience
      </button>
    </div>
  );
});

export default Experience;
