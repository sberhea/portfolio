"use client";

const Navbar = ({ style }: { style?: React.CSSProperties }) => {
  return (
    <header className="flex justify-between items-center px-6 py-4">
        <div className="flex flex-col">
            <a href="/">
            <h1 className="text-2xl font-semibold">selam berhea</h1>
            <p className="text-lg">selam.work@proton.me</p>
            </a>
            </div>
        <nav className="flex justify-evenly gap-x-12">
            <a 
                href="/design" 
                className="px-3 py-1 text-xl font-medium bg-navActive hover:bg-navHover transition-colors duration-200"
            >
                Design
            </a>
            <a 
                href="/writing" 
                className="px-3 py-1 text-xl font-medium  bg-navActive hover:bg-navHover transition-colors duration-200"
            >
                Writing
            </a>
            <a 
                href="/dev" 
                className="px-3 py-1 text-xl font-medium bg-navActive hover:bg-navHover transition-colors duration-200"
            >
                Dev
            </a>
            </nav>
    </header>
  );
};

export default Navbar;
