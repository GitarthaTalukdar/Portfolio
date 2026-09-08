"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const galleryItems = [
  "/Images/Drama1.jpeg",
  "/Images/Drama2.jpeg",
  "/Images/Dance.jpeg",
  "/Images/Research1.jpeg",
  "/Images/Dance1.jpeg",
  "/Images/Research2.jpeg",
  "/Images/Instrument.jpeg",
  "/Images/Orientation1.jpeg",
  "/Images/Singing.jpeg",
  "/Images/Guitar.jpeg",
  "/Images/Orientation.jpeg",
  "/Images/Tabla.jpeg",
  "/Images/ICDDA1.jpeg",
  "/Images/Orchestra.jpeg",
  "/Images/Fashion1.jpeg",
  "/Images/Badge.jpeg",
  "/Images/PPT1.jpeg",
  "/Images/Research3.jpeg",
  "/Images/Fashion2.jpeg",
  "/Images/ICDDA2.jpeg"
]

export default function Cultural() {
  return (
    <section
      id="cultural"
      className="py-16 px-6 md:px-16"
      style={{ fontFamily: "Times New Roman, serif" }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-center text-white">
          ACHIEVEMENTS & CULTURAL MOMENTS
        </h2>

        <div className="w-20 h-[2px] bg-gray-400 mx-auto mt-3 mb-10"></div>

        {/* GRID */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.04 } }
          }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"
        >

          {galleryItems.map((img, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="overflow-hidden rounded-md border border-white/10 bg-white/5 group"
            >
              {/* Image Container */}
              <div className="relative w-full h-40 flex items-center justify-center bg-black">

                <Image
                  src={img}
                  alt="gallery"
                  fill
                  className="object-contain p-1 transition duration-300 group-hover:scale-105"
                />

              </div>
            </motion.div>
          ))}

        </motion.div>

      </div>
    </section>
  )
}