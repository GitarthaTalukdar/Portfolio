"use client"

import { motion } from "framer-motion"

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-14 px-5 md:px-10"
      style={{ fontFamily: "Times New Roman, serif" }}
    >
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white">
          EXPERIENCE
        </h2>

        <div className="w-20 h-[2px] bg-blue-400 mx-auto mt-3 mb-9 shadow-[0_0_10px_rgba(0,150,255,0.8)]"></div>


        {/* Experience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* Software Engineer */}
          <ExperienceCard
            role="Software Engineer"
            organization="MedTech Company, India"
            duration="2026 – Present"
            current
            description="Currently working on software engineering and technology-driven solutions in the healthcare technology domain."
          />


         {/* Technical Head */}
<ExperienceCard
  role="Technical Head"
  organization="SCS Coding Club · Kaziranga University"
  duration="2025 – 2026"
  description="Leading technical initiatives, development activities, coding projects, and mentoring within the university coding community."
/>


          {/* IIIT Guwahati */}
          <ExperienceCard
            role="Research Intern"
            organization="Indian Institute of Information Technology Guwahati"
            duration="Jun 2026 – Jul 2026"
            description="Worked on research-oriented problems involving Mobile Edge Computing, Cloud Computing, and Deep Learning."
          />


          {/* Tezpur University */}
          <ExperienceCard
            role="Research Intern"
            organization="Tezpur University"
            duration="Jun 2025 – Apr 2026"
            description="Worked on Machine Learning research, model development, experimentation, and data-driven analysis."
          />


          {/* Joint Secretary */}
          <ExperienceCard
            role="Joint Secretary"
            organization="Kaziranga University · Art & Cultural Club"
            duration="Jun 2025 – May 2026"
            description="Contributed to leadership, event coordination, student initiatives, and organizational activities."
          />


          {/* Gauhati University */}
          <ExperienceCard
            role="Project Intern"
            organization="Gauhati University"
            duration="Jun 2025 – Jul 2025"
            description="Worked on Deep Learning-based project development and practical machine learning experimentation."
          />


          {/* GDSC */}
          <ExperienceCard
            role="AI & ML Lead"
            organization="GDSC · Kaziranga University"
            duration="Oct 2023 – Apr 2025"
            description="Worked on Artificial Intelligence and Machine Learning initiatives, technical projects, and collaborative developer activities."
          />


          {/* Web Development Trainer */}
          <ExperienceCard
            role="Web Development Trainer"
            organization="SAED Solutions Private Limited"
            duration="Jun 2024 – Jul 2024"
            description="Worked on full-stack development training and guided learners through practical web development activities."
          />


          {/* Assistant Facilitator */}
          <ExperienceCard
            role="Assistant Facilitator"
            organization="RHYTHM – A Socio"
            duration="Jul 2022 – Jul 2023"
            description="Supported organizational activities, event coordination, teamwork, and community-focused initiatives."
          />

        </div>

      </div>
    </section>
  )
}


/* ========================================= */
/* Experience Card */
/* ========================================= */

function ExperienceCard({
  role,
  organization,
  duration,
  description,
  current = false,
}: {
  role: string
  organization: string
  duration: string
  description: string
  current?: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      whileHover={{ y: -3 }}

      className="
        group
        relative
        bg-white/[0.035]
        backdrop-blur-xl
        border border-white/10
        rounded-lg
        px-5
        py-4
        shadow-[0_0_16px_rgba(0,150,255,0.07)]
        hover:shadow-[0_0_28px_rgba(0,150,255,0.20)]
        hover:border-blue-400/30
        transition-all
        duration-300
      "
    >

      {/* Top Accent */}
      <div
        className="
          absolute
          top-0
          left-5
          w-12
          h-[2px]
          bg-blue-400
          opacity-70
          group-hover:w-20
          transition-all
          duration-300
        "
      ></div>


      {/* Header */}
      <div className="flex items-start justify-between gap-3">

        <div>

          {/* Role */}
          <h3 className="text-[17px] font-bold text-blue-400 leading-snug">
            {role}
          </h3>

          {/* Organization */}
          <p className="text-white/90 text-xs font-semibold mt-1">
            {organization}
          </p>

          {/* Duration */}
          <p className="text-gray-500 text-[10px] mt-1">
            {duration}
          </p>

        </div>


        {/* Current Badge */}
        {current && (
          <span
            className="
              shrink-0
              px-2.5
              py-1
              rounded-full
              bg-green-500
              text-black
              text-[9px]
              font-bold
              shadow-[0_0_10px_rgba(34,197,94,0.25)]
            "
          >
            CURRENT
          </span>
        )}

      </div>


      {/* Description */}
      <p className="text-gray-300 text-xs leading-5 mt-3">
        {description}
      </p>

    </motion.div>
  )
}