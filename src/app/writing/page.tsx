import Navbar from "@/components/Navbar";
import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="">
       {/* Navbar */}
        <Navbar />
    <section className="p-4 md:p-8">
      {/* Writing Samples */}
    <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <section className="max-w-5xl mx-auto px-6 md:px-12 pt-8">
          <h2 className="text-3xl md:text-5xl font-bold tracking-normal text-gray-950 mb-6 text-center">
            Writing Samples          
          </h2>
        </section>
        <hr className="border-t border-gray-200 max-w-5xl mx-auto px-6 md:px-12" />
        <section className="max-w-5xl mx-auto px-6 md:px-12 py-7 space-y-20">
          <ul className="text-gray-600 text-lg leading-relaxed">
            <li className="list-disc">Beauty out of tragedy: Philando Castile{"'"}s death inspires art, and a tribute, <Link className="text-blue-600 underline" href="https://www.twincities.com/2017/07/03/art-out-of-tragedy-mn-artists-process-the-philando-castile/">Pioneer Press</Link></li>
            <li className="list-disc">Ethiopian Jazz Supergroup Feedel Band Is Keeping Traditional Sounds Alive In The District, <Link className="text-blue-600 underline" href="https://dcist.com/story/19/12/13/ethiopian-jazz-supergroup-feedel-band-is-keeping-traditional-sounds-alive-in-the-district/">DCist</Link></li>
            <li className="list-disc">Homesong, <Link className="text-blue-600 underline" href="https://heyzine.com/flip-book/5019228c98.html#page/72">Ritual January 2026</Link></li>
            {/* <li className="list-disc">Substack</li> */}
          </ul>
      </section>
    </div>
    </section>
    </main>
  )
}
