"use client"

import { motion } from "framer-motion"
import {
  SiPython,
  SiCplusplus,
  SiJavascript,
  SiHtml5,
  SiTensorflow,
  SiPytorch,
  SiReact,
  SiNextdotjs,
  SiFastapi,
  SiDocker,
  SiGithub,
  SiGit,
  SiPostman,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiNumpy,
  SiPandas,
  SiStreamlit,
  SiThreedotjs,
  SiScikitlearn,
  SiOpencv,
  SiNodedotjs,
  SiExpress,
  SiVercel,
  SiNetlify,
  SiFlutter,
  SiDart
} from "react-icons/si"

import { FaJava } from "react-icons/fa"

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-6 md:px-20"
      style={{ fontFamily: "Times New Roman, serif" }}
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center text-white">
          TECHNOLOGIES
        </h2>

        <div className="w-32 h-[2px] bg-blue-400 mx-auto mt-6 mb-16 shadow-[0_0_12px_rgba(0,150,255,0.8)]"></div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* PROGRAMMING LANGUAGES */}
          <SkillCard title="PROGRAMMING LANGUAGES">
            <SkillItem icon={<SiPython color="#3776AB" />} label="Python" />
            <SkillItem icon={<FaJava color="#f89820" />} label="Java" />
            <SkillItem icon={<SiCplusplus color="#00599C" />} label="C/C++" />
            <SkillItem icon={<SiJavascript color="#F7DF1E" />} label="JavaScript" />
            <SkillItem icon={<SiHtml5 color="#E34F26" />} label="HTML5" />
            <SkillItem icon={<SiDart color="#0175C2" />} label="Dart" />
          </SkillCard>

          {/* AI / ML & DATA SCIENCE */}
          <SkillCard title="AI / ML & DATA SCIENCE">
            <SkillItem icon={<SiTensorflow color="#FF6F00" />} label="TensorFlow" />
            <SkillItem icon={<SiPytorch color="#EE4C2C" />} label="PyTorch" />
            <SkillItem icon={<SiScikitlearn color="#F7931E" />} label="Scikit-learn" />
            <SkillItem icon={<SiOpencv color="#5C3EE8" />} label="OpenCV" />
            <SkillItem icon={<SiNumpy color="#013243" />} label="NumPy" />
            <SkillItem icon={<SiPandas color="#150458" />} label="Pandas" />
            <SkillItem icon={<SiStreamlit color="#FF4B4B" />} label="Streamlit" />
          </SkillCard>

          {/* WEB & APP DEVELOPMENT */}
          <SkillCard title="WEB & APP DEVELOPMENT">
            <SkillItem icon={<SiReact color="#61DAFB" />} label="React.js" />
            <SkillItem icon={<SiNextdotjs color="#ffffff" />} label="Next.js" />
            <SkillItem icon={<SiFastapi color="#009688" />} label="FastAPI" />
            <SkillItem icon={<SiNodedotjs color="#339933" />} label="Node.js" />
            <SkillItem icon={<SiExpress color="#ffffff" />} label="Express.js" />
            <SkillItem icon={<SiFlutter color="#02569B" />} label="Flutter" />
            <SkillItem icon={<SiThreedotjs color="#ffffff" />} label="Three.js" />
          </SkillCard>

          {/* DATABASES, DEVOPS & SYSTEMS */}
          <SkillCard title="DATABASES, DEVOPS & SYSTEMS">
            <SkillItem icon={<SiMongodb color="#47A248" />} label="MongoDB" />
            <SkillItem icon={<SiPostgresql color="#336791" />} label="PostgreSQL" />
            <SkillItem icon={<SiMysql color="#4479A1" />} label="MySQL" />
            <SkillItem icon={<SiGit color="#F05032" />} label="Git" />
            <SkillItem icon={<SiGithub color="#ffffff" />} label="GitHub" />
            <SkillItem icon={<SiDocker color="#2496ED" />} label="Docker" />
            <SkillItem icon={<SiPostman color="#FF6C37" />} label="Postman" />
            <SkillItem icon={<SiVercel color="#ffffff" />} label="Vercel" />
            <SkillItem icon={<SiNetlify color="#00C7B7" />} label="Netlify" />
          </SkillCard>

         {/* RESEARCH DOMAIN */}
<div className="md:col-span-2">
  <SkillCard title="">
    <div className="text-center w-full">
      <h3 className="text-2xl font-bold text-blue-400 mb-6 tracking-wide">
        RESEARCH DOMAIN
      </h3>
    </div>

    <div className="flex flex-wrap gap-4 justify-center">
      <SkillItem label="Artificial Intelligence" />
      <SkillItem label="Machine Learning" />
      <SkillItem label="Deep Learning" />
      <SkillItem label="Natural Language Processing" />
      <SkillItem label="Computer Vision" />
      <SkillItem label="Image Processing" />
      <SkillItem label="Model Optimization" />
    </div>
  </SkillCard>
</div>

        </div>
      </div>
    </section>
  )
}

function SkillCard({ title, children }: any) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-8 shadow-[0_0_25px_rgba(0,150,255,0.15)]"
    >
      <h3 className="text-2xl font-bold text-blue-400 mb-6 tracking-wide">
        {title}
      </h3>

      <div className="flex flex-wrap gap-4">
        {children}
      </div>
    </motion.div>
  )
}

function SkillItem({ icon, label }: any) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 250 }}
      className="flex items-center gap-3 bg-black/70 border border-white/10 px-4 py-2 rounded-md text-sm text-white shadow-[0_0_10px_rgba(0,200,255,0.3)] hover:shadow-[0_0_20px_rgba(0,200,255,0.8)] transition duration-300"
    >
      <span className="text-xl">
        {icon}
      </span>
      {label}
    </motion.div>
  )
}