import githubLogo from "../assets/github.svg";
import linkedInLogo from "../assets/linkedin.svg";

const SECTIONS = [
  { id: "HomePage", htmlText: "Home" },
  { id: "ProjectsPage", htmlText: "Projects" },
  { id: "ExperiencePage", htmlText: "3D" },
];

const Navbar = ({ currentSection }: { currentSection: string }) => {
  return (
    <header className="fixed top-0 inset-x-0 flex justify-between items-center p-4 rounded-lg m-4">
      <div className="font-black text-4xl">SC</div>
      <ul className="flex gap-10 text-base items-center">
        {SECTIONS.map((section) => {
          return (
            <a href={`#${section.id}`} key={section.id}>
              <li
                className={`relative transition-width duration-300
                before:content-[''] before:absolute before:bottom-0 before:rounded-full  before:h-0.5 before:transition-width before:duration-300
                ${
                  currentSection === section.id
                    ? "before:w-full before:bg-accent text-accent animate-pulse"
                    : "before:w-0 text-textDarkMode"
                }`}
              >
                {section.htmlText}
              </li>
            </a>
          );
        })}
        <hr />
        <hr />
        {/*TODO change img for svg to fill color based on theme selected */}
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
      </ul>
    </header>
  );
};

export default Navbar;
