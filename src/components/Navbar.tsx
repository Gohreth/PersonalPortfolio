import { useState } from "react";
import githubLogo from "../assets/github.svg";
import linkedInLogo from "../assets/linkedin.svg";
import HamburgerButton from "./HamburgerButton";
import Sections from "./Sections";
import ToggleableMenu from "./ToggleableMenu";

const Navbar = ({ currentSection }: { currentSection: string }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <header className="fixed top-0 inset-x-0 flex justify-between items-center p-4 rounded-lg m-4">
        <div className="font-black text-4xl">SC</div>
        <ul className="md:flex gap-10 text-base items-center hidden">
          <Sections currentSection={currentSection} />
        </ul>
        {/*TODO change img for svg to fill color based on theme selected */}
        <ul className="flex gap-10 text-base items-center">
          <li>
            <a href="https://github.com/Gohreth" target="__blank">
              <img src={githubLogo} alt="" className="h-5 w-5" />
            </a>
          </li>

          <li>
            <a href="https://linkedin.com/in/sacf94" target="__blank">
              <img src={linkedInLogo} alt="" className="h-5 w-5" />
            </a>
          </li>
          <li>
            <HamburgerButton handleToggle={setToggle} toggle={toggle} />
          </li>
        </ul>
      </header>
      <ToggleableMenu toggle={toggle}>
        <Sections
          currentSection={currentSection}
          isToggleable
          handleToggle={setToggle}
        />
      </ToggleableMenu>
    </>
  );
};

export default Navbar;
