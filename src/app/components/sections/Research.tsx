"use client"

import { motion } from "framer-motion"

export default function Research() {
  return (
    <section
      id="research"
      className="py-14 px-5 md:px-10"
      style={{ fontFamily: "Times New Roman, serif" }}
    >
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white">
          RESEARCH & PUBLICATIONS
        </h2>

        <div className="w-20 h-[2px] bg-blue-400 mx-auto mt-3 mb-8 shadow-[0_0_10px_rgba(0,150,255,0.8)]"></div>

        {/* Research Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* 01 — Data Quality */}
          <ResearchCard
            number="01"
            title="A Framework for Optimizing Data Quality - Preprocessing, Attribute Ranking and Noise Handling for Improved Dataset Accuracy"
            org="ICDDA - DATA - DIVEN 2025 · Kaziranga University"
            year="2025"
            status="Submitted to Journal"
            statusColor="bg-green-500"
          />

          {/* 02 — ASD Speech */}
          <ResearchCard
            number="02"
            title="An Ensemble-Based Feature Selection Framework for ASD Speech Classification"
            org="GCON - IEEE 2026"
            year="2026"
            status="Published"
            statusColor="bg-green-500"
            link="https://doi.org/10.1109/GCON69192.2026.11649116"
          />

          {/* 03 — Lexical & Semantic */}
          <ResearchCard
            number="03"
            title="Evaluating Lexical and Semantic Features for Unsupervised Text Clustering"
            org="GCON - IEEE 2026"
            year="2026"
            status="Published"
            statusColor="bg-green-500"
            link="https://doi.org/10.1109/GCON69192.2026.11648215"
          />

          {/* 04 — Brain Tumor */}
          <ResearchCard
            number="04"
            title="A Brain Tumor Classification using Ensemble Learning and Hyperparameter Tuning"
            org="ICCCNS - IEEE 2026"
            year="2026"
            status="Published"
            statusColor="bg-green-500"
            link="https://doi.org/10.1109/ICC-CNS70518.2026.11606042"
          />

          {/* 05 — Hallucination Survey — CENTER */}
          <div className="md:col-span-2 flex justify-center">
            <div className="w-full md:w-[62%]">
              <ResearchCard
                number="05"
                title="Hallucination in Tool-Using Large Language Model Agents: A Survey of Taxonomy, Causes, Mitigation, and Evaluation"
                year="2026"
                status="Ongoing Research"
                statusColor="bg-yellow-500"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}


/* ========================================= */
/* Research Card */
/* ========================================= */

function ResearchCard({
  number,
  title,
  org,
  year,
  status,
  statusColor,
  link,
}: {
  number: string
  title: string
  org?: string
  year: string
  status: string
  statusColor: string
  link?: string
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
        shadow-[0_0_15px_rgba(0,150,255,0.07)]
        hover:shadow-[0_0_25px_rgba(0,150,255,0.20)]
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
          left-6
          right-6
          h-[1.5px]
          bg-blue-400/60
          group-hover:bg-blue-400
          transition-all
          duration-300
        "
      />

      {/* Header */}
      <div className="flex items-center justify-between gap-3 mb-3">

        {/* Number */}
        <span className="text-[10px] text-blue-400/60 font-bold tracking-[0.15em]">
          RESEARCH {number}
        </span>

        {/* Status */}
        <span
          className={`
            ${statusColor}
            text-black
            text-[9px]
            font-bold
            px-2.5
            py-1
            rounded-full
            whitespace-nowrap
          `}
        >
          {status}
        </span>

      </div>


      {/* Title */}
      <h3
        className="
          text-base
          md:text-[17px]
          font-bold
          text-blue-400
          leading-snug
          group-hover:text-blue-300
          transition-colors
          duration-300
        "
      >
        {title}
      </h3>


      {/* Organization */}
      {org && (
        <p className="text-white/80 text-xs mt-2">
          {org}
        </p>
      )}


      {/* Year */}
      <p className="text-gray-500 text-[10px] mt-1">
        {year}
      </p>


      {/* DOI */}
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex
            items-center
            mt-3
            px-3
            py-1.5
            text-[10px]
            font-semibold
            text-blue-200
            border
            border-blue-400/30
            rounded-md
            hover:bg-blue-400
            hover:text-black
            hover:border-blue-400
            transition-all
            duration-300
          "
        >
          View Paper / DOI →
        </a>
      )}

    </motion.div>
  )
}