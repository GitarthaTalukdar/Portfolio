"use client"

import dynamic from "next/dynamic"
import Navbar from "./components/Navbar"
import Hero from "./components/sections/Hero"
import About from "./components/sections/About"
import Technologies from "./components/sections/Technolgoies"
import Projects from "./components/sections/projects"
import Research from "./components/sections/Research"
import Experience from "./components/sections/Experience"
import Cultural from "./components/sections/Cultural"
import Contact from "./components/sections/Contact"

const NeuralScene = dynamic(
  () => import("./components/NeuralScene"),
  { ssr: false }
)


export default function Home() {
  return (
    <main className="relative bg-black text-white">
    <div className="fixed inset-0 z-0 opacity-40">
  <NeuralScene />
</div>


      <Navbar />

      <Hero />
      <About />
      <Technologies />
      <Projects />
      <Research />
      <Experience />
      <Cultural />
      <Contact />

    </main>
  )
}