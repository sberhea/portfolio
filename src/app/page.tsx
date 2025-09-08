import React from 'react';
import './globals.css';

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      {/* White Section */}
      <section className="bg-white px-8 py-16 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-2xl font-bold mb-2">selam berhea</h1>
            <p className="text-gray-600">selam.work@proton.me</p>
          </div>
          
          <div className="flex gap-6 mb-8">
            <span className="px-4 py-2 bg-blue-500 text-white rounded-full text-sm font-medium">Design</span>
            <span className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full text-sm font-medium">Writing</span>
            <span className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full text-sm font-medium">Dev</span>
          </div>
          
          <div className="prose max-w-none">
            <p className="text-gray-800 leading-relaxed mb-4">
              Selam is a writer, designer, and programmer. She has four years of software engineering experience in startups and Fortune 500 companies. During that time, she discovered a love of UI design that she has brought to clients working in the education world and at the way up the health and wellness space.
            </p>
            <p className="text-gray-800 leading-relaxed">
              Selam sees that in the long seasons of writing, You can find that work in OCHA, CRMA, Zine, and the Great River Review.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;