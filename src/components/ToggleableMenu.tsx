import { animated, config, useSpring } from "@react-spring/web";

const ToggleableMenu = ({
  toggle,
  children,
}: {
  toggle: boolean;
  children: JSX.Element;
}) => {
  const style = useSpring({
    x: toggle ? "-25%" : "50%",
    config: config.stiff,
  });
  return (
    <animated.ul
      style={style}
      className="fixed w-[200%] h-full z-50 md:pointer-events-none flex flex-col justify-evenly bg-black items-center md:hidden"
    >
      {children}
    </animated.ul>
  );
};

export default ToggleableMenu;
