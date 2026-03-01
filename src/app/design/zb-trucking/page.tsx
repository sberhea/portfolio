import Navbar from "@/components/Navbar";
import Image from "next/image";

interface ImageData {
  id: number;
  alt: string;
  src: string;
  caption?: string;
}

const designImages: ImageData[] = [
  { id: 1, alt: "ZB Trucking homepage mockup", src: "/zb/home_page.png", caption: "Homepage" },
  { id: 2, alt: "ZB Trucking about page", src: "/zb/our_story.png", caption: "About Page" },
  { id: 3, alt: "ZB Trucking career page", src: "/zb/career_landing.png", caption: "Careers Page" },
  { id: 4, alt: "ZB Trucking staff page", src: "/zb/staff_page.png", caption: "Staff Page" },
  { id: 5, alt: "ZB Trucking contact page", src: "/zb/footer.png", caption: "Contact Page" },
  { id: 6, alt: "ZB Trucking job posting", src: "/zb/job_posting.png", caption: "Job Posting Page" },
];

export default function ZBTruckingPage() {
  return (
    <main className="bg-white min-h-screen font-sans">
      <Navbar />

      {/* Hero — full-width image placeholder */}
      <div className="w-full bg-blue-300 h-[50vh] flex items-center justify-center overflow-hidden">
        {/* <Image src="/zb/home_page.png" fill alt="ZB Trucking Hero" className="object-cover" /> */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-950 mb-12">
          ZB Trucking
        </h1>      
      </div>

      {/* Title + Overview / Role grid */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 pt-16 pb-10">

        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-10">
          {/* Overview */}
          <div>
            <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400 mb-4">
              Overview
            </h2>
            <p className="text-gray-700 text-base leading-relaxed">
              Zack and Ben Trucking is a small, family-owned transportation company that needed a
              clean and professional web presence. I started the project by surveying existing
              transportation websites and building a mood board around color palette options.
            </p>
            <p className="text-gray-700 text-base leading-relaxed mt-4">
              Many companies in the space leaned into bold, masculine palettes — black and yellow,
              navy, red and white. I wanted something that felt quick, friendly, and reliable. I
              landed on a light, bright combination and wove a trail/road motif throughout the pages
              to reinforce the {"brand's"} identity.
            </p>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px bg-gray-200 self-stretch" />

          {/* Role */}
          <div>
            <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400 mb-4">
              Role
            </h2>
            <p className="text-gray-700 text-base leading-relaxed">
              <strong>UX/UI Designer</strong>
              <br />
              Brand Strategy, Visual Design, User Research, Prototyping
            </p>
          </div>
        </div>
      </section>

      <Divider />

      {/* Problem Statement */}
      <Section title="Problem Statement">
        <p>
          ZB Trucking is a small family-owned transportation company. They needed a website that
          communicates their service offerings and establishes legitimacy with potential partners.
          The site needed to serve two very different audiences: owner-operators looking for work
          and carriers who need reliable transport, while also making a strong first impression on
          casual browsers.
        </p>
      </Section>

      <Divider />

      {/* User Personas */}
      <Section title="User Personas">
        <p className="mb-6">
          Through initial conversations with the client, we identified three core user types for the site. We prioritized the first two since their needs were most pressing and most directly tied to the {"business's"} growth.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {[
            {
              num: "01",
              name: "Owner-Operator",
              desc:
                "Drivers who own their own trucks and are looking for a reliable broker to partner with. They need clear information about pay, routes, and how to get started.",
            },
            {
              num: "02",
              name: "Carrier",
              desc:
                "Businesses or individuals who need freight moved. They want to know the company is trustworthy, insured, and responsive.",
            },
            {
              num: "03",
              name: "Casual Browser",
              desc:
                "Someone who lands on the site without a specific intent. The site should still communicate brand quality and leave a positive impression.",
            },
          ].map((p) => (
            <div key={p.num} className="border border-gray-200 rounded-lg p-6">
              <span className="text-xs font-semibold tracking-widest text-gray-400">{p.num}</span>
              <h3 className="text-lg font-semibold text-gray-900 mt-2 mb-3">{p.name}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Divider />

      {/* Defining MVP */}
      <Section title="Defining the MVP">
        <p className="mb-4">
          With a small budget and timeline, scoping the MVP was critical. I worked with the client
          to identify the pages and features that would deliver the most value immediately.
        </p>
        <ul className="space-y-4 mt-6">
          {[
            {
              label: "Homepage.",
              desc:
                "A strong first impression with a clear value proposition and calls-to-action for both owner-operators and carriers.",
            },
            {
              label: "Services Pages.",
              desc:
                "Separate pages tailored to each user persona, answering their top questions and reducing friction to contact.",
            },
            {
              label: "Contact Form.",
              desc:
                "A simple, accessible form that routes inquiries to the right person on the team.",
            },
            {
              label: "Brand Identity.",
              desc:
                "A cohesive color palette, typography system, and road/trail motif applied consistently across all pages.",
            },
          ].map((item) => (
            <li key={item.label} className="flex gap-4">
              <span className="mt-1 w-2 h-2 rounded-full bg-gray-900 shrink-0" />
              <p className="text-gray-700 text-base leading-relaxed">
                <strong>{item.label}</strong> {item.desc}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Divider />

      {/* Designs */}
      <Section title="Designs">
        <p className="mb-10">
          I ran through several rounds of iteration, testing color combinations and layouts before
          landing on the final direction. The goal was a site that felt professional and trustworthy
          without being cold. Tone goals = friendly, energetic, and professional.
        </p>

        <div className="space-y-16">
          {designImages.map((img) => (
            <div key={img.id}>
              {img.caption && (
                <p className="text-sm font-semibold text-gray-900 mb-3">
                  {img.caption}
                </p>
              )}
              <div className="w-full bg-gray-100 rounded-lg overflow-hidden aspect-[16/9] flex items-center justify-center">
                {img.src ? (
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={1200}
                    height={675}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <span className="text-gray-400 text-sm tracking-widest uppercase">
                    {img.caption || "Image"}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Divider />

      {/* Results & Takeaways */}
      <Section title="Results & Takeaways">
        <p className="mb-6">
          For this project I wore the hat of brand strategist, researcher, and visual designer. 
          A few key learnings shaped how {"I'll"} approach similar projects in the future.
        </p>
        <ul className="space-y-6">
          {[
            {
              label: "Know your audience deeply.",
              desc:
                "Owner-operators and carriers have very different mental models. It was important to separate flows for usability.",
            },
            {
              label: "Brand consistency compounds.",
              desc:
                "Repeating the road motif and color palette in small, unexpected places (section dividers, button hover states) strengthened.",
            },
            {
              label: "Scope aggressively, launch fast.",
              desc:
                "For a small business, getting something live quickly is more valuable than a perfect design. We shipped the MVP and iterated based on real feedback.",
            },
          ].map((item) => (
            <li key={item.label} className="flex gap-4">
              <span className="mt-1 w-2 h-2 rounded-full bg-gray-900 shrink-0" />
              <p className="text-gray-700 text-base leading-relaxed">
                <strong>{item.label}</strong> {item.desc}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Footer spacer */}
      <div className="h-24" />
    </main>
  );
}

/* ─── Helpers ─────────────────────────────────────────────────────────────── */

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="max-w-5xl mx-auto px-6 md:px-12 py-14">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-950 mb-8">{title}</h2>
      <div className="text-gray-700 text-base leading-relaxed max-w-3xl">{children}</div>
    </section>
  );
}

function Divider() {
  return <hr className="border-t border-gray-200 max-w-5xl mx-auto px-6 md:px-12" />;
}