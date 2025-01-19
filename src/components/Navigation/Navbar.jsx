import { Microscope } from "lucide-react";
import { Link } from "react-router";
import { LINKS } from "../../constants/";
import { useState } from "react";
import { X, AlignJustify } from "lucide-react";

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);

  const togglemenu = () => {
    setisOpen(!isOpen);
  };

  return (
    <nav className="border-b-2 sticky top-0 z-10 bg-white">
      <div className="flex justify-between items-center px-2 py-5 md:py-5 max-w-7xl mx-auto">
        <Link to="/">
          <div className="flex items-center">
            <Microscope className="h-8 w-8 text-[#7FC7D9]" />
            <span className="ml-2 text-xl font-semibold text-[#0F1035]">
              Bharat Testing Labarotary
            </span>
          </div>
        </Link>
        <div className="md:hidden">
          <button
            onClick={togglemenu}
            aria-label={isOpen ? "close menu" : "open menu"}
            className="text-2xl"
          >
            {isOpen ? <X /> : <AlignJustify />}
          </button>
        </div>

        <div className="hidden md:flex md:space-x-4 space-x-8 pr-2">
          {LINKS.map((link, index) => (
            <a
              key={index}
              href={link.link}
              className="uppercase text-lg font-medium p-2 "
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>

      <div
        className={`${
          isOpen ? "block" : "hidden"
        }  absolute z-10 px-4 border-b-4 w-full bg-neutral-50 md:hidden`}
      >
        {LINKS.map((link, index) => (
          <a
            key={index}
            href={link.link}
            className="uppercase text-lg font-medium block py-2 tracking-wide"
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
