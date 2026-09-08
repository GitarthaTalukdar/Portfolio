"use client"

import { motion } from "framer-motion"

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-6 md:px-20"
      style={{ fontFamily: "Times New Roman, serif" }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white">
          PROJECTS
        </h2>

        {/* Heading Underline */}
        <div className="w-28 h-[2px] bg-blue-400 mx-auto mt-4 mb-12 shadow-[0_0_12px_rgba(0,150,255,0.8)]"></div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* ============================= */}
          {/* Brain Tumor Classification */}
          {/* ============================= */}
          <ProjectCard
            title="Brain Tumor Classification using PSO-Optimized Deep Learning"
            description="Developed an end-to-end MRI brain tumor classification framework using deep learning and Particle Swarm Optimization for model optimization and improved classification performance."
            technologies={[
              "Python",
              "Deep Learning",
              "CNN",
              "PSO",
              "Medical Imaging",
            ]}
            status="Completed & Delivered"
          />

          {/* ============================= */}
          {/* ASD Speech Classification */}
          {/* ============================= */}
          <ProjectCard
            title="Feature Selection Framework for ASD Speech Classification"
            description="Developed a hybrid feature selection framework for Autism Spectrum Disorder speech classification, focusing on extracting and optimizing informative speech features for machine learning."
            technologies={[
              "Python",
              "Machine Learning",
              "Speech Processing",
              "Feature Selection",
            ]}
            status="Completed & Delivered"
          />

          {/* ============================= */}
          {/* Data Quality Optimization */}
          {/* ============================= */}
          <div className="md:col-span-2 flex justify-center">
            <div className="w-full md:w-[calc(50%-1rem)]">
              <ProjectCard
                title="Data Quality Optimization Framework"
                description="Developed a machine learning-based framework for improving dataset quality through preprocessing, attribute ranking, and effective noise handling to enhance downstream model accuracy."
                technologies={[
                  "Python",
                  "Machine Learning",
                  "Data Preprocessing",
                  "Feature Ranking",
                ]}
                status="Completed & Delivered"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}


/* ========================================= */
/* Project Card Component */
/* ========================================= */

function ProjectCard({
  title,
  description,
  technologies,
  status,
}: {
  title: string
  description: string
  technologies: string[]
  status: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="
        group
        relative
        h-full
        bg-white/[0.04]
        backdrop-blur-xl
        border
        border-white/10
        rounded-xl
        p-7
        shadow-[0_0_25px_rgba(0,150,255,0.10)]
        hover:shadow-[0_0_40px_rgba(0,150,255,0.28)]
        hover:border-blue-400/30
        transition-all
        duration-300
      "
    >

      {/* Top Glow Line */}
      <div
        className="
          absolute
          top-0
          left-8
          right-8
          h-[2px]
          bg-blue-400/70
          opacity-60
          group-hover:opacity-100
          transition-opacity
          duration-300
        "
      ></div>


      {/* Project Title */}
      <h3 className="text-xl font-bold text-blue-400 leading-relaxed">
        {title}
      </h3>


      {/* Project Description */}
      <p className="text-gray-300 text-sm leading-6 mt-4">
        {description}
      </p>


      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mt-5">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="
              px-3
              py-1.5
              text-xs
              text-blue-200
              bg-blue-500/10
              border
              border-blue-400/20
              rounded-md
            "
          >
            {tech}
          </span>
        ))}
      </div>


      {/* Status */}
      <div className="mt-6">
        <span
          className="
            inline-flex
            items-center
            gap-2
            px-4
            py-2
            text-xs
            font-semibold
            text-black
            bg-green-400
            rounded-full
            shadow-[0_0_12px_rgba(34,197,94,0.25)]
          "
        >
          {/* Status Dot */}
          <span className="w-1.5 h-1.5 bg-black rounded-full"></span>

          {status}
        </span>
      </div>

    </motion.div>
  )
}