import { Microscope } from "lucide-react";
import Navlinks from "./Navlinks";

const Navbar = () => {
  return (
    <nav>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Microscope className="h-8 w-8 text-[#7FC7D9]" />
            <span className="ml-2 text-xl font-semibold text-[#0F1035]">
              Bharat Testng Labarotary
            </span>
          </div>
          <Navlinks />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
