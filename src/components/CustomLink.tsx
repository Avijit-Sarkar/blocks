import { FC } from "react";
import { Link } from "react-scroll";

interface CustomLinkProps {
  to: string;
  title: string;
  activeSection: string; // The currently active section
  handleSetActive: (section: string) => void;
}

const CustomLink: FC<CustomLinkProps> = ({
  to,
  title,
  activeSection,
  handleSetActive,
}) => {
  return (
    <Link
      activeClass="active"
      to={to}
      spy={true}
      smooth={true}
      onSetActive={handleSetActive}
      className={`${
        activeSection === to
          ? "text-prime dark:text-white scale-110"
          : "dark:text-gray-300"
      } cursor-pointer mr-5 hover:scale-110`}
    >
      {title}
    </Link>
  );
};

export default CustomLink;
