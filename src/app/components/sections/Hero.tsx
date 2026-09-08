"use client"

import { motion } from "framer-motion"
import { FaLinkedin, FaInstagram } from "react-icons/fa"
import { GraduationCap } from "lucide-react"

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-5"
      style={{ fontFamily: "Times New Roman, serif" }}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-black" />

      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px]" />

      {/* Main Content */}
      <div className="relative z-10 text-center flex flex-col items-center">

        {/* Small Profile Image */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-5"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-blue-500/40 blur-xl" />

            <img
              src="/Images/ProfileMain.jpeg"
              alt="Gitartha Talukdar"
              className="relative w-24 h-24 md:w-28 md:h-28 rounded-full object-cover border-2 border-blue-400/70 shadow-[0_0_30px_rgba(59,130,246,0.35)]"
            />
          </div>
        </motion.div>

        {/* Portfolio */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-red-500 text-xs md:text-sm tracking-[0.45em] font-bold mb-4"
        >
          HI, I’M 
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold text-white tracking-wide"
        >
          GITARTHA TALUKDAR
        </motion.h1>

        {/* Underline */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "120px" }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="h-[2px] bg-yellow-400 mt-4 mb-5 shadow-[0_0_12px_rgba(250,204,21,0.5)]"
        />

        {/* Role */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-blue-400 text-sm md:text-base tracking-[0.35em] font-semibold"
        >
          SOFTWARE ENGINEER | AI/ML | RESEARCHER
        </motion.p>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex items-center gap-3 mt-7"
        >
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/gitartha-talukdar"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-9 h-9 flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-gray-300 hover:text-blue-400 hover:border-blue-400/60 hover:bg-blue-400/10 transition-all duration-300"
          >
            <FaLinkedin size={16} />
          </a>

          {/* Google Scholar */}
          <a
            href="https://scholar.google.com/citations?user=C_LpfjIAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Google Scholar"
            className="w-9 h-9 flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-gray-300 hover:text-blue-400 hover:border-blue-400/60 hover:bg-blue-400/10 transition-all duration-300"
          >
            <GraduationCap size={18} />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/code_wiz.exe/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-9 h-9 flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-gray-300 hover:text-pink-400 hover:border-pink-400/60 hover:bg-pink-400/10 transition-all duration-300"
          >
            <FaInstagram size={16} />
          </a>
        </motion.div>

        {/* Small description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-5 max-w-xl text-gray-500 text-[11px] md:text-xs leading-5"
        >
          Exploring Artificial Intelligence, Deep Learning,
          Machine Learning and Intelligent Healthcare Systems.
        </motion.p>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        className="absolute bottom-7 text-gray-600 text-[9px] tracking-[0.3em]"
      >
        SCROLL
      </motion.div>
    </section>
  )
}