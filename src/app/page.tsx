import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden">
       {/* Navbar */}
        <Navbar />
  

      {/* Page content */}
      <div className="max-w-4xl py-4 md:py-12">
        <Hero/>
      </div>
    </main>
  );
}
