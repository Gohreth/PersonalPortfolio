import React from "react";

const HamburgerButton = ({
  handleToggle,
  toggle,
}: {
  handleToggle: React.Dispatch<React.SetStateAction<boolean>>;
  toggle: boolean;
}) => {
  return (
    <button
      onClick={() => handleToggle(!toggle)}
      className="h-5 w-5 flex flex-col gap-1 md:hidden"
    >
      <div className="h-1 w-full bg-white"></div>
      <div className="h-1 w-full bg-white"></div>
      <div className="h-1 w-full bg-white"></div>
    </button>
  );
};

export default HamburgerButton;
