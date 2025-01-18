import React from "react";
import { Microscope } from "lucide-react";

import { Link } from "react-router";

const Navlinks = () => {
  return (
    <>
      <Link to="/">
        <div className="flex items-center">
          <Microscope className="h-8 w-8 text-[#7FC7D9]" />
          <span className="ml-2 text-xl font-semibold text-[#0F1035]">
            Bharat Testng Labarotary
          </span>
        </div>
      </Link>
      <div className="hidden md:flex space-x-8">
        <a href="#" className="text-gray-600 hover:text-blue-600">
          Services
        </a>
        <a href="#" className="text-gray-600 hover:text-blue-600">
          About
        </a>
        <a href="#" className="text-gray-600 hover:text-blue-600">
          Contact
        </a>
      </div>

      <div className="block w-full absolute mt-2 bg-neutral-100 px-4 ">
        <a href="#" className="text-gray-600 hover:text-blue-600 block py-2">
          Services
        </a>
        <a href="#" className="text-gray-600 hover:text-blue-600 block">
          About
        </a>
        <a href="#" className="text-gray-600 hover:text-blue-600 block">
          Contact
        </a>
      </div>
    </>
  );
};

export default Navlinks;
