import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const fullText = 'Building Scalable Backend Systems & High-Performance APIs'

function Hero() {
  const [typed, setTyped] = useState('')

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      setTyped(fullText.slice(0, i + 1))
      i += 1
      if (i === fullText.length) clearInterval(timer)
    }, 28)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" className="relative overflow-hidden bg-hero-gradient bg-grid">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="glass relative rounded-3xl p-8 sm:p-12"
        >
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-slate-500 dark:text-slate-300">Senior System Analyst / Backend Engineer</p>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Shubham Rakesh <span className="gradient-text">Singh</span>
          </h1>
          <p className="mt-5 h-12 max-w-3xl text-lg text-slate-700 dark:text-slate-200">{typed}<span className="animate-pulse">|</span></p>
          <p className="mt-3 max-w-3xl text-base text-slate-600 dark:text-slate-300">
            7+ years of experience designing enterprise-grade systems using .NET, Azure, and Microservices.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.02] dark:bg-slate-100 dark:text-slate-900">
              View Projects
            </a>
            <a href="./resume.pdf" download className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-indigo-500 hover:text-indigo-600 dark:border-slate-600 dark:text-slate-100">
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
