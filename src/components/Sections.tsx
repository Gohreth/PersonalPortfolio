import React from "react";

const SECTIONS = [
  { id: "HomePage", htmlText: "Home" },
  { id: "ProjectsPage", htmlText: "Projects" },
  { id: "ExperiencePage", htmlText: "3D" },
];

const Sections = ({
  currentSection,
  isToggleable,
  handleToggle,
}: {
  currentSection: string;
  isToggleable?: boolean;
  handleToggle?: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const liStyles = isToggleable
    ? {
        base: `transition-colors duration-300 text-2xl font-bold
before:content-[''] before:absolute before:inset-0 before:h-full before:transition-colors before:duration-300 before:-z-50`,
        selected: `before:w-full before:bg-accent text-textLightMode`,
        notSelected: `text-textDarkMode`,
      }
    : {
        base: `relative transition-width duration-300
before:content-[''] before:absolute before:bottom-0 before:rounded-full  before:h-0.5 before:transition-width before:duration-300`,
        selected: `before:w-full before:bg-accent text-accent animate-pulse`,
        notSelected: `before:w-0 text-textDarkMode`,
      };
  return (
    <>
      {SECTIONS.map((section) => {
        return (
          <a
            href={`#${section.id}`}
            key={section.id}
            className={`${
              isToggleable
                ? "h-full w-full grid place-items-center relative"
                : ""
            }`}
            onClick={() => {
              if (handleToggle) handleToggle(false);
            }}
          >
            <li
              className={`${liStyles.base}
              ${
                currentSection === section.id
                  ? liStyles.selected
                  : liStyles.notSelected
              }`}
            >
              {section.htmlText}
            </li>
          </a>
        );
      })}
    </>
  );
};

export default Sections;
