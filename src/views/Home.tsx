import { forwardRef, useEffect, useState } from "react";

const ROLES = ["Web Developer", "Computer Engineer"];

const Home = forwardRef<HTMLDivElement>((props, ref) => {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    //Changes index every 5 seconds (duration of animation)
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
      className="text-4xl snap-center bg-black w-screen h-screen flex justify-center items-center"
    >
      <div className="flex flex-col z-10">
        <div className="flex flex-col gap-y-2">
          <p>
            Hi everyone! <span className="animate-wave inline-block">👋</span>
          </p>
          <div className="flex items-center">
            <p>I'm Sebastian</p>
            <div className="relative h-20 w-20">
              <img
                className="absolute right-0 animate-[vanish_5s_ease-in-out_infinite_alternate-reverse]"
                src="../public/images/projects.png"
                alt=""
              />
              <img
                className="absolute right-0 animate-[vanish_5s_ease-in-out_infinite_alternate]"
                src="../public/images/about.png"
                alt=""
              />
            </div>
          </div>
          <div className="w-max">
            <p className={`animate-[typing_5s_ease-in-out_infinite]`}>
              <p className="animate-[blink_0.75s_step-end_infinite] border-r-2 overflow-hidden whitespace-nowrap">
                {ROLES[index]}
              </p>
            </p>
          </div>
        </div>
        <br />
        <div className="w-full h-auto border-t-4 border-dashed bg-transparent"></div>
        <br />
        <p>
          From Santiago,&nbsp;
          <span className="font-black text-7xl bg-center text-transparent bg-cover bg-clip-text bg-chile">
            Chile
          </span>
        </p>
      </div>
    </div>
  );
});

export default Home;
