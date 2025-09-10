"use client";

const Navbar = () => {
  return (
    <nav className="flex justify-evenly gap-x-12">
          <a 
            href="#design" 
            className="px-3 py-1 text-xl font-medium bg-blue-100 hover:bg-yellow-200 transition-colors duration-200"
          >
            Design
          </a>
          <a 
            href="#writing" 
            className="px-3 py-1 text-xl font-medium  bg-blue-100 hover:bg-yellow-200 transition-colors duration-200"
          >
            Writing
          </a>
          <a 
            href="#dev" 
            className="px-3 py-1 text-xl font-medium bg-blue-100 hover:bg-yellow-200 transition-colors duration-200"
          >
            Dev
          </a>
        </nav>
  );
};

export default Navbar;
