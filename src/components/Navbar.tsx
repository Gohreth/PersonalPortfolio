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
            <li
              key={section.id}
              className={
                currentSection === section.id ? "animate-pulse text-accent" : ""
              }
            >
              {section.htmlText}
            </li>
          );
        })}
        <hr />
        <hr />
        {/*TODO change img for svg to fill color based on theme selected */}
        <li>
          <img src="/github.svg" alt="" className="h-5 w-5" />
        </li>
        <li>
          <img src="/linkedin.svg" alt="" className="h-5 w-5" />
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
