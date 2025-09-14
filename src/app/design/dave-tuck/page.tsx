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
  { id: 1, type: "image", src: "/mm_flyer.png", alt: "Flyer" },
  { id: 2, type: "image", src: "/mm_flyer.png", alt: "Web Screenshot" },
  { id: 3, type: "image", src: "/mm_flyer.png", alt: "Presentation" },
  { id: 4, type: "video", src: "" },
]

export default function DesignPage() {
  const [selected, setSelected] = useState<Card | null>(null)

  return (
    <main>
      <Navbar />
      <div className="p-6 grid grid-cols-2 gap-4 h-[calc(100vh-4rem)] pb-12">
        {/* Left column - Large card */}
        <motion.div
          key={cards[0].id}
          whileHover={{ scale: 1.02 }}
          layoutId={`card-${cards[0].id}`}
          className="relative overflow-hidden shadow-md cursor-pointer bg-gray-200"
          onClick={() => setSelected(cards[0])}
        >
          {cards[0].type === "image" ? (
            <Image
              src={cards[0].src}
              alt={cards[0].alt ?? ""}
              fill
              className="object-cover"
            />
          ) : (
            <video
              src={cards[0].src}
              className="w-full h-full object-cover"
              muted
              autoPlay
              loop
            />
          )}
        </motion.div>

        {/* Right column - Three smaller cards */}
        <div className="grid grid-rows-2 gap-4">
          {/* Top row - Two cards side by side */}
          <div className="grid grid-cols-2 gap-4">
            {[cards[1], cards[2]].map((card) => (
              <motion.div
                key={card.id}
                whileHover={{ scale: 1.05 }}
                layoutId={`card-${card.id}`}
                className="relative overflow-hidden shadow-md cursor-pointer bg-gray-200"
                onClick={() => setSelected(card)}
              >
                {card.type === "image" ? (
                  <Image
                    src={card.src}
                    alt={card.alt ?? ""}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <video
                    src={card.src}
                    className="w-full h-full object-cover"
                    muted
                    autoPlay
                    loop
                  />
                )}
              </motion.div>
            ))}
          </div>

          {/* Bottom row - One wide card */}
          <motion.div
            key={cards[3].id}
            whileHover={{ scale: 1.05 }}
            layoutId={`card-${cards[3].id}`}
            className="relative overflow-hidden shadow-md cursor-pointer bg-gray-200"
            onClick={() => setSelected(cards[3])}
          >
            {cards[3].type === "image" ? (
              <Image
                src={cards[3].src}
                alt={cards[3].alt ?? ""}
                fill
                className="object-cover"
              />
            ) : (
              <video
                src={cards[3].src}
                className="w-full h-full object-cover"
                muted
                autoPlay
                loop
              />
            )}
          </motion.div>
        </div>
      </div>

      {/* Fullscreen modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              layoutId={`card-${selected.id}`}
              className="relative w-11/12 md:w-3/4 lg:w-2/3 h-[80vh] bg-white overflow-hidden"
            >
              {selected.type === "image" ? (
                <Image
                  src={selected.src}
                  alt={selected.alt ?? ""}
                  fill
                  className="object-contain bg-black"
                />
              ) : (
                <video
                  src={selected.src}
                  className="w-full h-full object-contain bg-black"
                  controls
                  autoPlay
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}