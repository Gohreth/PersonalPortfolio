import { forwardRef, useEffect, useState } from "react";
import AnimojiOne from "../assets/images/about.png";
import AnimojiTwo from "../assets/images/projects.png";
import Timeline from "../components/Timeline";

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
      className="text-base sm:text-2xl lg:text-3xl xl:text-4xl snap-center w-screen h-screen flex justify-center lg:justify-end items-center"
    >
      <div className="flex flex-col font-black w-1/2">
        <div className="flex w-full items-center lg:items-start flex-col gap-y-2">
          <p>
            Hi everyone! <span className="animate-wave inline-block">👋🏻</span>
          </p>
          <div className="flex justify-center lg:justify-start items-center">
            <p>I'm Sebastian</p>
            <div className="relative h-10 w-10 lg:h-15 lg:w-15">
              <img
                className="absolute animate-[vanish_5s_ease-in-out_infinite_alternate-reverse]"
                src={AnimojiTwo}
                alt=""
              />
              <img
                className="absolute animate-[vanish_5s_ease-in-out_infinite_alternate]"
                src={AnimojiOne}
                alt=""
              />
            </div>
          </div>
          <div className="w-max">
            <div className={`animate-[typing_5s_ease-in-out_infinite]`}>
              <p className="animate-[blink_0.75s_step-end_infinite] border-r-2 overflow-hidden whitespace-nowrap">
                {ROLES[index]}
              </p>
            </div>
          </div>
        </div>
        <br />
        <Timeline></Timeline>
        <br />
        <div className="flex flex-col items-center lg:items-start gap-y-2">
          <p>From Santiago</p>
          <p>
            <span className="font-black text-2xl sm:text-4xl lg:text-5xl xl:text-6xl bg-center text-transparent bg-cover bg-clip-text bg-chile">
              Chile
            </span>
          </p>
        </div>
      </div>
    </div>
  );
});

export default Home;
