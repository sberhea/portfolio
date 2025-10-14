"use client"
import Navbar from "@/components/Navbar";
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"

type Card = {
  id: number
  type: "image" | "video"
  src: string
  alt?: string
}

const cards: Card[] = [
  { id: 1, type: "video", src: "/temascal.mp4", alt: "Temascal Video" },
  { id: 2, type: "image", src: "/mm_flyer_full.png", alt: "Flyer" },
  { id: 3, type: "image", src: "/followup_email.png", alt: "Follow Up Email" },
  { id: 4, type: "image", src: "/selflovequiz.png", alt: "Quiz" },
  { id: 5, type: "image", src: "/mm_class_pres.png", alt: "MM Class Presentation" },
  // { id: 6, type: "image", src: "/video_row.png", alt: "Video Row" }
]

export default function DaveTuckPage() {
  const [selected, setSelected] = useState<Card | null>(null)

  return (
    <main>
      <Navbar />
      <div className="py-24 sm:py-12">
      <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-gray-950 sm:text-5xl">
        A New Beginning Coaching & Retreats
      </p>
      <div className="p-4 md:p-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Large card - spans 2 rows on desktop */}
          <motion.div
            key={cards[0].id}
            whileHover={{ scale: 1.02 }}
            layoutId={`card-${cards[0].id}`}
            className="relative overflow-hidden shadow-lg cursor-pointer md:row-span-2"
            style={{ minHeight: '400px' }}
            onClick={() => setSelected(cards[0])}
          >
            {cards[0].type === "image" ? (
              <div className="w-full h-full flex items-center justify-center p-4 pointer-events-none">
                <Image
                  src={cards[0].src}
                  alt={cards[0].alt ?? ""}
                  width={800}
                  height={600}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ) : (
              <video
                src={cards[0].src}
                className="w-full h-full object-contain pointer-events-none"
                muted
                autoPlay
                loop
                playsInline
              />
            )}
          </motion.div>

          {/* Remaining cards */}
          {cards.slice(1).map((card) => (
            <motion.div
              key={card.id}
              whileHover={{ scale: 1.02 }}
              layoutId={`card-${card.id}`}
              className="relative overflow-hidden shadow-lg cursor-pointer"
              style={{ minHeight: '200px' }}
              onClick={() => setSelected(card)}
            >
              {card.type === "image" ? (
                <div className="w-full h-full flex items-center justify-center p-4 pointer-events-none">
                  <Image
                    src={card.src}
                    alt={card.alt ?? ""}
                    width={600}
                    height={400}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ) : (
                <video
                  src={card.src}
                  className="w-full h-full object-contain pointer-events-none"
                  muted
                  autoPlay
                  loop
                  playsInline
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              layoutId={`card-${selected.id}`}
              className="relative max-w-[90vw] max-h-[90vh] bg-black overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {selected.type === "image" ? (
                <div className="flex items-center justify-center w-full h-full">
                  <img
                    src={selected.src}
                    alt={selected.alt ?? ""}
                    className="max-w-full max-h-[90vh] object-contain"
                  />
                </div>
              ) : (
                <video
                  src={selected.src}
                  className="max-w-full max-h-[90vh] object-contain"
                  controls
                  autoPlay
                  playsInline
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </main>
  )
}