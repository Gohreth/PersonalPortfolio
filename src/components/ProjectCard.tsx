import { forwardRef, useEffect, useState } from "react";
import { useSpring, animated, config } from "@react-spring/web";

type PropsType = {
  cardProps: {
    name: string;
    identifier: string;
    description: string;
    image: string;
  };
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
      className="aspect-[2/1] w-[300px] md:w-[400px] bg-yellow-300 flex-shrink-0 snap-center relative overflow-hidden"
    >
      <img
        src={props.cardProps.image}
        alt={props.cardProps.name}
        className="absolute object-cover"
        loading="lazy"
      />
      <animated.p
        style={idStyles}
        className="absolute top-2 left-2 md:top-1 md:left-2 font-bold text-xs md:text-base z-10"
      >
        {props.cardProps.identifier}
      </animated.p>
      <animated.div
        style={titleStyles}
        className="bg-black w-[20rem] h-[20rem] clip-ellipse absolute right-[-12rem] bottom-[-15rem] md:right-[-10rem] md:bottom-[-14rem]"
      />
      <animated.p
        style={titleStyles}
        className="absolute text-xs md:text-sm bottom-2 right-2  md:bottom-4 md:right-4 text-right break-words w-min leading-4 font-semibold"
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
        className="absolute inset-0 grid place-items-center font-thin text-[0.5rem] md:text-xs lg:text-sm p-4"
      >
        {props.cardProps.description}
      </animated.p>
    </div>
  );
});

export default ProjectCard;
