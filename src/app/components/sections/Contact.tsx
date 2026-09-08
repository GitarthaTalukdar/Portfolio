"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa"

export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const [sending, setSending] = useState(false)
  const [status, setStatus] = useState<"success" | "error" | "">("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setSending(true)
    setStatus("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message")
      }

      setStatus("success")

      // Clear form after successful submission
      setName("")
      setEmail("")
      setMessage("")
    } catch (error) {
      console.error("Contact form error:", error)
      setStatus("error")
    } finally {
      setSending(false)
    }
  }

  return (
    <section
      id="contact"
      className="py-10 px-5 md:px-8"
      style={{ fontFamily: "Times New Roman, serif" }}
    >
      <div className="max-w-3xl mx-auto">

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-center text-white">
          LET’S CONNECT
        </h2>

        <div className="w-16 h-[2px] bg-blue-400 mx-auto mt-2 mb-7 shadow-[0_0_10px_rgba(0,150,255,0.8)]" />

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="
            relative
            bg-white/[0.035]
            backdrop-blur-xl
            border border-white/10
            rounded-lg
            p-5
            shadow-[0_0_18px_rgba(0,150,255,0.08)]
            hover:border-blue-400/25
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
              w-12
              h-[2px]
              bg-blue-400
              shadow-[0_0_8px_rgba(0,150,255,0.7)]
            "
          />

          <h3 className="text-lg font-bold text-blue-400 mb-4">
            Send a Message
          </h3>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3"
          >

            {/* Name */}
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="
                w-full
                bg-black/40
                border border-white/10
                rounded-md
                px-3
                py-2.5
                text-xs
                text-white
                placeholder-gray-500
                focus:outline-none
                focus:border-blue-400/60
                transition
              "
            />

            {/* Email */}
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="
                w-full
                bg-black/40
                border border-white/10
                rounded-md
                px-3
                py-2.5
                text-xs
                text-white
                placeholder-gray-500
                focus:outline-none
                focus:border-blue-400/60
                transition
              "
            />

            {/* Message */}
            <textarea
              name="message"
              rows={4}
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="
                w-full
                bg-black/40
                border border-white/10
                rounded-md
                px-3
                py-2.5
                text-xs
                text-white
                placeholder-gray-500
                focus:outline-none
                focus:border-blue-400/60
                transition
                resize-none
              "
            />

            {/* Send Button */}
            <button
              type="submit"
              disabled={sending}
              className="
                mt-1
                w-full
                px-4
                py-2.5
                bg-gradient-to-r
                from-blue-500
                to-cyan-400
                text-black
                text-xs
                font-bold
                rounded-md
                shadow-[0_0_12px_rgba(0,150,255,0.6)]
                hover:scale-[1.02]
                transition
                duration-300
                disabled:opacity-60
                disabled:hover:scale-100
                disabled:cursor-not-allowed
              "
            >
              {sending ? "Sending..." : "Send Message →"}
            </button>

          </form>

          {/* Success Message */}
          {status === "success" && (
            <motion.p
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-green-400 text-xs mt-4"
            >
              ✓ Message sent successfully!
            </motion.p>
          )}

          {/* Error Message */}
          {status === "error" && (
            <motion.p
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-red-400 text-xs mt-4"
            >
              ✕ Message could not be sent. Please try again.
            </motion.p>
          )}

        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-5 flex items-center justify-center gap-6"
        >

          <SocialIcon
            href="https://www.linkedin.com/in/gitartha-talukdar"
            icon={<FaLinkedin size={20} />}
            hover="hover:text-blue-400"
          />

          <SocialIcon
            href="https://github.com/Gitarthaaa"
            icon={<FaGithub size={20} />}
            hover="hover:text-gray-300"
          />

          <SocialIcon
            href="https://instagram.com/code_wiz.exe"
            icon={<FaInstagram size={20} />}
            hover="hover:text-pink-400"
          />

        </motion.div>

      </div>
    </section>
  )
}


/* Social Icon */

function SocialIcon({
  href,
  icon,
  hover,
}: {
  href: string
  icon: React.ReactNode
  hover: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        text-white
        transition-all
        duration-300
        hover:scale-110
        ${hover}
      `}
    >
      {icon}
    </a>
  )
}