import { animated, config, useSpring } from "@react-spring/web";
import { useEffect, useRef, useState } from "react";

const ICONS = [
  {
    id: 0,
    icon: "🌍",
  },
  {
    id: 1,
    icon: "☀️",
  },
  {
    id: 2,
    icon: "🌑",
  },
];

const Icon = ({
  timelineWidth,
  offset,
  children,
}: {
  timelineWidth: number;
  offset: number;
  children: any;
}) => {
  const spring = useSpring({
    to: { x: offset },
    config: config.slow,
  });
  return (
    <animated.div
      style={spring}
      className={`absolute opacity-90 top-[-11px] text-base`}
    >
      {children}
    </animated.div>
  );
};

const Timeline = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [timelineWidth, setTLWidth] = useState(0);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setTLWidth(Math.round(entry.contentRect.width));
      }
    });
    if (timelineRef) resizeObserver.observe(timelineRef.current!);

    return () => resizeObserver.disconnect();
  }, []);

  const getOffset = (id: number) => {
    const now = new Date().getHours();
    switch (id) {
      case 0:
        return Math.round((timelineWidth / 24) * now);
      case 1:
        return Math.round((timelineWidth / 24) * 9);
      case 2:
        return Math.round((timelineWidth / 24) * 21);
      default:
        return 0;
    }
  };

  return (
    <div
      id="timeline"
      ref={timelineRef}
      className="w-[80%] h-0.5 bg-white rounded-full relative"
    >
      {ICONS.map((icon) => (
        <Icon
          key={icon.id}
          timelineWidth={timelineWidth}
          offset={getOffset(icon.id)}
        >
          {icon.icon}
        </Icon>
      ))}
    </div>
  );
};

export default Timeline;
