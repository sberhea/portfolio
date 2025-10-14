"use client";
import Link from 'next/link'

const Navbar = () => {
  return (
    <header className="flex justify-between items-center px-6 py-4">
        <div className="flex flex-col">
            <Link href="/">
            <h1 className="text-xl md:text-2xl font-semibold text-blueText">selam berhea</h1>
            </Link>
            <p className="text-md md:text-lg">selam.work@proton.me</p>
            </div>
        <nav className="flex justify-evenly gap-x-12">
            <a 
                href="/design" 
                className="px-3 py-1 md:text-xl text-md font-medium bg-fuchsia-300 hover:bg-lime-300 transition-colors duration-200"
            >
                <span className="text-blueText">Projects</span>
            </a>
            {/* <a 
                href="/design" 
                className="px-3 py-1 text-xl font-medium bg-navActive hover:bg-navHover transition-colors duration-200"
            >
                Design
            </a>
            <a 
                href="/writing" 
                className="px-3 py-1 text-xl font-medium  bg-navActive hover:bg-navHover transition-colors duration-200"
            >
                Dev
            </a>
            <a 
                href="/dev" 
                className="px-3 py-1 text-xl font-medium bg-navActive hover:bg-navHover transition-colors duration-200"
            >
                Writing
            </a> */}
            </nav>
    </header>
  );
};

export default Navbar;
