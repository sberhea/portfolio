import Navbar from "@/components/Navbar";
import Image from "next/image";

const stories = [
  {
    id: 1,
    title: "STEM Education",
    src: "/community/speaking.JPG", // replace with your actual image path
    alt: "Selam presenting at a STEM education seminar breakout session",
    body: "I worked with a group of women from across Africa and the Middle East to brainstorm a tech-ed program for young people in Western Africa.",
  },
  {
    id: 2,
    title: "Organizing Events",
    src: "/community/msp_tech.png", // replace with your actual image path
    alt: "MSP Tech community meetup group photo",
    body: "I served as a founding organizer for MSP Tech. We hosted meetups across the city. I helped grow our group from a handful to a 500+ community.",
  },
  {
    id: 3,
    title: "Global Networks",
    src: "/community/cairo.JPG", // replace with your actual image path
    alt: "Selam at the Alumni TIES exchange seminar holding African Girls Can Code book",
    body: "I attended a seminar on Women Leadership in STEM in Cairo. I cherish connecting with women who imagine brighter futures for their communities through tech.",
  },
  {
    id: 4,
    title: "Writer's Group",
    src: "/community/writers.JPG", // replace with your actual image path
    alt: "Selam at her favorite South Minneapolis coffee shop with writer's group attendees",
    body: "One of my passions is writing, I host a weekly writer's group in South Minneapolis.",
  },
];

export default function CommunityPage() {
  return (
    <main className="bg-white min-h-screen font-sans">
      <Navbar />

      {/* Page header */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 pt-16 pb-10">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-950 mb-6">
          Community
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
          A snapshot of how I show up outside of work — organizing, connecting, and building
          toward a more equitable tech ecosystem.
        </p>
      </section>

      <hr className="border-t border-gray-200 max-w-5xl mx-auto px-6 md:px-12" />

      {/* Three stories */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 py-14 space-y-20">
        {stories.map((story, i) => (
          <div
            key={story.id}
            className={`flex flex-col md:flex-row gap-10 items-center ${
              i % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Photo */}
            <div className="w-full md:w-1/2 rounded-xl overflow-hidden aspect-[4/3] bg-gray-100 flex items-center justify-center shrink-0">
              {story.src ? (
                <Image
                  src={story.src}
                  alt={story.alt}
                  width={800}
                  height={600}
                  className="w-full h-full object-contain"
                />
              ) : (
                <span className="text-gray-400 text-sm tracking-widest uppercase">
                  {story.title}
                </span>
              )}
            </div>

            {/* Text */}
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-950 mb-4">
                {story.title}
              </h2>
              <p className="text-gray-700 text-base leading-relaxed">{story.body}</p>
            </div>
          </div>
        ))}
      </section>

      <div className="h-24" />
    </main>
  );
}