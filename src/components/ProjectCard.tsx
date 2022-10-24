import { forwardRef, useEffect, useState } from "react";
import { useSpring, animated, config } from "@react-spring/web";

type PropsType = {
  cardProps: { name: string; identifier: string; description: string };
  observed: string;
};

const ProjectCard = forwardRef<HTMLDivElement, PropsType>((props, ref) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isCenter, setIsCenter] = useState(false);
  const titleStyles = useSpring({
    y: !isCenter ? "200%" : "0%",
    config: config.slow,
  });
  const idStyles = useSpring({
    y: !isCenter ? "-100%" : "0%",
    config: config.wobbly,
  });
  const descriptionStyles = useSpring({
    opacity: isVisible ? 1 : 0,
    backgroundColor: isVisible ? "black" : "transparent",
  });
  useEffect(() => {
    if (props.observed === props.cardProps.identifier) setIsCenter(true);
    else {
      setIsCenter(false);
      setIsVisible(false);
    }
  }, [props.observed]);

  return (
    //TODO: Adjust size for responsive design
    <div
      ref={ref}
      id={props.cardProps.identifier}
      className="w-[400px] h-[200px] bg-yellow-300 flex-shrink-0 snap-center relative overflow-hidden"
    >
      <img src="https://picsum.photos/400/200" alt="" className="absolute" />
      <animated.p
        style={idStyles}
        className="absolute top-1 left-1 font-bold z-10"
      >
        {props.cardProps.identifier}
      </animated.p>
      <animated.div
        style={titleStyles}
        className="bg-black w-[20rem] h-[20rem] clip-ellipse absolute right-[-10rem] bottom-[-14rem]"
      />
      <animated.p
        style={titleStyles}
        className="absolute bottom-[1rem] right-[1rem] text-right break-words w-min leading-4 font-semibold"
      >
        {props.cardProps.name}
      </animated.p>
      <animated.div
        style={idStyles}
        className="absolute -top-8 h-16 bg-black opacity-50 w-full z-0"
      ></animated.div>
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="absolute top-2 animate-pulse text-xs font-bold text-center w-full z-10"
      >
        {`${isVisible ? "Hide" : "Show"}`}
      </button>

      <animated.p
        style={descriptionStyles}
        className="absolute inset-0 grid place-items-center font-thin text-sm"
      >
        {props.cardProps.description}
      </animated.p>
    </div>
  );
});

export default ProjectCard;
