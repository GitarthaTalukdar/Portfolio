"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 md:px-20"
      style={{ fontFamily: "Times New Roman, serif" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-10 md:p-14 shadow-[0_0_25px_rgba(0,150,255,0.15)] transition duration-300 hover:shadow-[0_0_40px_rgba(0,150,255,0.4)] hover:-translate-y-2"

      >
        <div className="grid md:grid-cols-2 gap-7 items-center">

          {/* LEFT IMAGE */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-60 h-60 md:w-72 md:h-72 rounded-2xl overflow-hidden border border-white/20 shadow-[0_0_25px_rgba(34,197,94,0.5)]">
<Image
  src="/profile.jpeg"
  alt="Profile"
  fill
  className="object-cover"
/>

        
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="max-w-xl text-left md:-ml-8">

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
              ABOUT ME
            </h2>

            <div className="w-20 h-1 bg-blue-400 mb-4 shadow-[0_0_10px_rgba(34,197,94,0.6)]"></div>

            {/* Description */}
            <p className="text-white text-lg md:text-xl leading-relaxed">
              I am an AI-focused Computer Science undergraduate passionate about
              building intelligent systems that bridge research and real-world
              applications. My interests include Deep Learning, Speech Intelligence,
              Neural Architectures, and scalable AI deployment.
            </p>
          </div>

        </div>
      </motion.div>
    </section>
  )
}
