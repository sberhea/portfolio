import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function HomePage() {
  return (
    <main className="">
       <header className="flex justify-between items-center px-6 py-4">
        {/* Left side - Name and Email */}
        <div className="flex flex-col">
          <h1 className="text-2xl font-semibold">selam berhea</h1>
          <p className="text-lg">selam.work@proton.me</p>
        </div>
        
       {/* Navbar */}
        <Navbar />

        <div className="flex"></div>
      </header>

      {/* Page content */}
      <div className="max-w-4xl py-12">
        <Hero/>
      </div>
    </main>
  );
}
