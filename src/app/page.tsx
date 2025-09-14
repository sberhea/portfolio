import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function HomePage() {
  return (
    <main className="h-screen bg-greenbg overflow-hidden">
       {/* Navbar */}
        <Navbar />
  

      {/* Page content */}
      <div className="max-w-4xl py-12">
        <Hero/>
      </div>
    </main>
  );
}
