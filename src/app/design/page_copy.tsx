import Navbar from "@/components/Navbar";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
       {/* Navbar */}
        <Navbar/>

      <div className="py-24 sm:py-12">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-base/7 font-semibold">Design Projects</h2>
        <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-gray-950 sm:text-5xl">
          A designer with a developer's eye
        </p>
        <div className="mt-5 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2 ">
          <div className="relative lg:row-span-2 hover:bg-navActive">
            <div className="absolute inset-px" />
            <div className="relative flex h-full flex-col overflow-hidden">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Dr. Dave Tuck
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Flyers, class materials, and web pages for a small business client.
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                <img
                  alt=""
                  src="mm_flyer.png"
                  className="w-full max-lg:max-w-xs"
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px shadow-sm outline outline-black/5 lg:rounded-l-4xl" />
          </div>
          <div className="relative max-lg:row-start-1 hover:bg-navActive">
            <div className="absolute inset-px max-lg:rounded-t-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Attention to Detail</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Branding for a small education consulting business.
                </p>
              </div>
              <div className="flex flex-1 items-center mt-2 justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                <img
                  alt="Pathfinder logo"
                  src="pathfinder.png"
                  className="w-full max-lg:max-w-xs object-scale-down"
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px shadow-sm outline outline-black/5 max-lg:rounded-t-4xl" />
          </div>
          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2 hover:bg-navActive">
            <div className="absolute inset-px" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">A Focus on Accessibility</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Check out this accessibility tool.
                </p>
              </div>
              <div className="@container flex flex-1 items-center max-lg:py-5 lg:pb-2">
                <img
                  alt=""
                  src=""
                  className="h-[min(152px,40cqw)]"
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px shadow-sm outline outline-black/5" />
          </div>
          <div className="relative lg:row-span-2 hover:bg-navActive">
            <div className="absolute inset-px max-lg:rounded-b-4xl lg:rounded-r-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
             <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  ZB Trucking
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  A slick ecommerce site for a trucking company. Designed and coded from scratch.
                </p>
              </div>
             {/* Image container */}
          <div className="relative flex-1 overflow-hidden">
            <img
              alt="ZB Trucking landing screenshot"
              src="/zb_logo.png"
              className="h-full w-full object-scale-down"
            />
            {/* 👆 
              - h-full w-full → span the container 
              - object-cover → crop image to fit 
              - object-top → show top part (first 2/3)
            */}
          </div>
            </div>
            <div className="pointer-events-none absolute inset-px shadow-sm outline outline-black/5 max-lg:rounded-b-4xl lg:rounded-r-4xl" />
          </div>
        </div>
      </div>
    </div>
    </main>
  )
}
