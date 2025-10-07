import Navbar from "@/components/Navbar";
import Image from "next/image"

// const circles = Array.from({ length: 10 });

export default function ZBTruckingPage() {
  return (
    <main>
        <Navbar />
        <div>
          <h2 className="text-center text-base/7 font-semibold">Website Mockups</h2>
          <p className="mx-auto m-4 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-gray-950 sm:text-5xl">
          ZB Trucking
        </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6 px-4 items-stretch">
          <div className="col-span-1 flex">
              <Image src="/mockups/mockup_1.png" alt="Landing Page mockup" width={500} height={500} quality={100} unoptimized className="rounded-xl shadow-lg" />
          </div>
          <div className="col-span-1 flex">
              <Image src="/mockups/mockup_2.png" alt="About Us mockup" width={500} height={500} quality={100} unoptimized className="rounded-xl shadow-lg" />
          </div>
          <div className="bg-lime-50 pt-8">
            <Image src="/zb_logo.png" alt="ZB logo" width={400} height={400} quality={100} unoptimized className="rounded-xl mx-auto items-center" />
            <div className="mx-auto px-8 mt-10 text-center tracking-normal text-balance font-stretch-expanded text-lg/10 space-y-4">
              <p>
                Zack and Ben Trucking is a small transportation company that wanted a clean and professional website.
              </p>
              <p>
                I started this project looking at color palettes and surveying existing transportation websites.
              </p>
              <p>
                Many of the companies’ brand colors were bold and masculine (black/yellow, navy blue, red/white/black).
              </p>
              <p>
                I liked this mix of light and bright colors.
              </p>
              <p>
                Quick, friendly, and reliable is what I was trying to communicate.
              </p>
              <p>
                I also incorporated a trail/road motif through the pages.
              </p>
            </div>
          </div>
          </div>              
          <div className="grid grid-cols-3 mx-auto mt-6 px-2 gap-4 min-h-[600px]">
          {/* <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-red-500 transform -translate-x-1/2 z-0"></div> */}

          <div className="col-span-1 p-8 flex flex-col bg-lime-50 justify-evenly relative">
           {/* Vertical dotted line connector */}
            <div className="absolute left-1/2 top-0 bottom-0 w-.5 border-l-2 border-dotted border-lime-400 transform -translate-x-1/2 z-0"></div>
  
            {/* Color Palette Display */}
            <div className="bg-white p-6 relative z-10">
              <h3 className="text-lg font-semibold mb-4">Color Palette</h3>
              <div className="flex justify-center items-center space-x-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#5CC682] rounded-full mb-2 shadow-lg"></div>
                  <div className="text-xs text-gray-600">#5CC682</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#3C40A6] rounded-full mb-2 shadow-lg"></div>
                  <div className="text-xs text-gray-600">#3C40A6</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#A65D3C] rounded-full mb-2 shadow-lg"></div>
                  <div className="text-xs text-gray-600">#A65D3C</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#3CA65F] rounded-full mb-2 shadow-lg"></div>
                  <div className="text-xs text-gray-600">#3CA65F</div>
                </div>
              </div>
              <div className="text-center mt-4 text-sm text-gray-600">
                "Quick, friendly, and reliable"
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-white p-6 relative z-10">
              <h3 className="text-lg font-semibold mb-4">Project Timeline</h3>
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300"></div>
                {[
                  { step: "Research", desc: "Competitive analysis" },
                  { step: "Design", desc: "Color & layout planning" },
                  { step: "Prototype", desc: "Figma mockups" },
                  { step: "Develop", desc: "Website implementation" }
                ].map((item, i) => (
                  <div key={i} className="relative flex items-center mb-4">
                    <div className="w-8 h-8 bg-navHover rounded-full flex items-center justify-center text-black text-sm font-bold z-10">
                      {i + 1}
                    </div>
                    <div className="ml-4">
                      <div className="font-medium">{item.step}</div>
                      <div className="text-sm text-gray-600">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          
            {/* Quote/Testimonial */}
            <div className="bg-white p-6 relative z-10">
              <h3 className="text-lg font-semibold mb-4">Client Testimonial</h3>
              <div className="text-center">
                <div className="text-4xl text-blue-200 mb-2">"</div>
                <div className="italic text-gray-700 mb-4">
                  "The new website perfectly captures our company values and has helped us attract new clients."
                </div>
                <div className="text-sm font-medium text-gray-600">— Meseret, Founder, ZB Trucking</div>
              </div>
            </div>
            
            <div className="bg-white p-6 relative z-10">
              <p className="text-center tracking-wide text-balance font-stretch-expanded text-lg/10 mt-auto">
                Check out the Figma project <a href="https://www.figma.com/design/E7mkWWgoga3dN4P3jwuI8p/ZB-Trucking?node-id=1097-1328&t=8GKSEUIgUqdJNFy8-1" className="underline font-bold"> here </a>.
              </p>
            </div>
          </div>
          
          {/* Right column - Image */}
          <div className="col-span-2 rounded-xl overflow-hidden shadow-lg">
            {/* <Image src="/mockups/mockup_3.png" 
              alt="About Us mockup" 
              width={500} height={500} 
              className="w-full h-full object-cover" /> */}
            <img 
              src="/mockups/mockup_3.png" 
              alt="Career Mockup" 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>     
    </main>
  )
}
