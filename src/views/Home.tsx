import { forwardRef, useEffect, useState } from "react";

const ROLES = ["Web Developer", "Computer Engineer"];

const Home = forwardRef<HTMLDivElement>((props, ref) => {
  const [index, setIndex] = useState<number>(0);
  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prevState) => (prevState + 1) % 2),
      5000
    );
    return () => clearInterval(interval);
  }, []);
  return (
    <div
      ref={ref}
      id={"HomePage"}
      className="snap-center bg-black w-screen h-screen flex justify-center items-center"
    >
      <div className="text-4xl font-sirin flex flex-col justify-start">
        <p>
          Hi everyone! <span className="animate-wave inline-block">👋</span>
        </p>
        <p>I'm Sebastian</p>
        <div className="w-max">
          <p className={`animate-[typing_5s_ease-in-out_infinite]`}>
            <p className="animate-[blink_0.75s_step-end_infinite] border-r-2 overflow-hidden whitespace-nowrap">
              {ROLES[index]}
            </p>
          </p>
        </div>
        <p>From Santiago, Chile</p>
      </div>
    </div>
  );
});

export default Home;
