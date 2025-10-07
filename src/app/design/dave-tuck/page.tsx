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
  { id: 6, type: "image", src: "/video_row.png", alt: "Video Row" }

]

export default function DaveTuckPage() {
  const [selected, setSelected] = useState<Card | null>(null)

  return (
    <main>
      <Navbar />
      <h2 className="text-center mt-2 text-base/7 font-semibold">Client: Dave Tuck</h2>
        <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-gray-950 sm:text-5xl">
          A New Beginning Coaching & Retreats
        </p>
      <div className="p-6 grid grid-cols-3 gap-4 h-[calc(100vh-4rem)] pb-12">
        {/* Left column - Large card */}
        <motion.div
          key={cards[0].id}
          whileHover={{ scale: 1.02 }}
          layoutId={`card-${cards[0].id}`}
          className="relative overflow-hidden shadow-md cursor-pointer bg-black"
          onClick={() => setSelected(cards[0])}
        >
          {cards[0].type === "image" ? (
            <Image
              src={cards[0].src}
              alt={cards[0].alt ?? ""}
              fill
              className="object-scale-down"
            />
          ) : (
            <video
              src={cards[0].src}
              className="w-full h-full object-scale-down"
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
                className="relative overflow-hidden shadow-md cursor-pointer bg-black"
                onClick={() => setSelected(card)}
              >
                {card.type === "image" ? (
                  <Image
                    src={card.src}
                    alt={card.alt ?? ""}
                    fill
                    className="object-contain"
                  />
                ) : (
                  <video
                    src={card.src}
                    className="w-full h-full object-contain"
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
            className="relative overflow-hidden shadow-md cursor-pointer bg-black"
            onClick={() => setSelected(cards[3])}
          >
            {cards[3].type === "image" ? (
              <Image
                src={cards[3].src}
                alt={cards[3].alt ?? ""}
                fill
                className="w-full h-full object-contain"
              />
            ) : (
              <video
                src={cards[3].src}
                className="w-full h-full object-contain"
                muted
                autoPlay
                loop
              />
            )}
          </motion.div>
        </div>

        <div className="grid grid-rows-2 gap-4">
          {/* Top row - Two cards side by side */}
         {/* Bottom row - One wide card */}
          <motion.div
            key={cards[4].id}
            whileHover={{ scale: 1.05 }}
            layoutId={`card-${cards[4].id}`}
            className="relative overflow-hidden shadow-md cursor-pointer bg-black"
            onClick={() => setSelected(cards[4])}
          >
            {cards[4].type === "image" ? (
              <Image
                src={cards[4].src}
                alt={cards[4].alt ?? ""}
                fill
                className="w-full h-full object-contain"
              />
            ) : (
              <video
                src={cards[4].src}
                className="w-full h-full object-contain"
                muted
                autoPlay
                loop
              />
            )}
          </motion.div>

          {/* Bottom row - One wide card */}
          <motion.div
            key={cards[5].id}
            whileHover={{ scale: 1.05 }}
            layoutId={`card-${cards[5].id}`}
            className="relative overflow-hidden shadow-md cursor-pointer bg-black"
            onClick={() => setSelected(cards[5])}
          >
            {cards[5].type === "image" ? (
              <Image
                src={cards[5].src}
                alt={cards[5].alt ?? ""}
                fill
                className="w-full h-full object-contain"
              />
            ) : (
              <video
                src={cards[5].src}
                className="w-full h-full object-contain"
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