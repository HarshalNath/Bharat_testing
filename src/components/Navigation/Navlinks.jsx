import React from "react";

const Navlinks = () => {
  return (
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
  );
};

export default Navlinks;
