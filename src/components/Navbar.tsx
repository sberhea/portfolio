"use client";
import Link from 'next/link'

const Navbar = () => {
  return (
    <header className="px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between">
      <div className="flex flex-col">
        <Link href="/">
          <h1 className="text-xl md:text-2xl font-semibold text-blueText">selam berhea</h1>
        </Link>
        <p className="text-md md:text-lg">selam.work@proton.me</p>
      </div>

      <nav className="flex gap-x-6 mt-3 md:mt-0">
        <a
          href="/design"
          className="px-3 py-1 md:text-xl text-md font-medium bg-fuchsia-200 hover:bg-lime-300 transition-colors duration-200"
        >
          <span className="text-blueText">Projects</span>
        </a>
        <a
          href="/design/community"
          className="px-3 py-1 md:text-xl text-md font-medium bg-fuchsia-200 hover:bg-lime-300 transition-colors duration-200"
        >
          <span className="text-blueText">Community</span>
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
