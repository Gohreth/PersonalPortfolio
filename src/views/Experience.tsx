import { forwardRef, useState } from "react";

//TODO: Remove placeholder messages for glTF models made in Blender
const MESSAGES = ["Start Experience", "Coming Soon..."];

const Experience = forwardRef<HTMLDivElement, any>((props, ref) => {
  const [index, setIndex] = useState(0);
  return (
    <div
      id={"ExperiencePage"}
      ref={ref}
      className="snap-center h-screen w-screen flex justify-center items-center"
    >
      <button
        onClick={() => {
          setIndex((index + 1) % 2);
          props.onStartPress();
        }}
        className="border-4 rounded-xl p-5 w-48 hover:animate-pulse hover:text-textAccent hover:border-accent transition-colors"
      >
        {MESSAGES[index]}
      </button>
    </div>
  );
});

export default Experience;
