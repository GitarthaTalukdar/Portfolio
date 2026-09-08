"use client"

import { useEffect, useState } from "react"

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Technologies" },
  { id: "projects", label: "Projects" },
  { id: "research", label: "Research" },
  { id: "experience", label: "Experience" },
  { id: "cultural", label: "Activities" },
  { id: "contact", label: "Contact" },
]

export default function Navbar() {
  const [active, setActive] = useState("")
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      sections.forEach((section) => {
        const element = document.getElementById(section.id)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActive(section.id)
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 backdrop-blur-xl bg-white/10 border-b border-white/20 transition-all duration-300`}
      style={{ fontFamily: "Times New Roman, serif" }}
    >
      <div className="w-full px-6 py-4 flex justify-between items-center">

        {/* Logo / Name */}
        <div className="text-white text-lg md:text-xl font-semibold tracking-wide">
          PORTFOLIO
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-base md:text-lg font-medium">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`transition duration-300 ${
                active === section.id
                  ? "text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {section.label}
            </a>
          ))}
        </div>

        {/* Hamburger Menu */}
        <div
          className="md:hidden flex flex-col cursor-pointer space-y-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="w-6 h-[2px] bg-white"></span>
          <span className="w-6 h-[2px] bg-white"></span>
          <span className="w-6 h-[2px] bg-white"></span>
        </div>

      </div>
      
      

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center bg-black/80 backdrop-blur-lg py-6 space-y-4 text-base">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={() => setMenuOpen(false)}
              className={`transition duration-300 ${
                active === section.id
                  ? "text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {section.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}