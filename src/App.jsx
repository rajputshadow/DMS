import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Architecture from './components/Architecture'
import Blog from './components/Blog'
import Contact from './components/Contact'

function App() {
  const [isDark, setIsDark] = useState(() => localStorage.getItem('theme') === 'dark')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  return (
    <div className="relative overflow-x-hidden">
      <motion.div
        className="pointer-events-none fixed inset-0 -z-10 bg-[length:200%_200%] bg-gradient-to-br from-blue-100/50 via-purple-100/30 to-sky-100/50 dark:from-blue-950/40 dark:via-purple-950/30 dark:to-sky-950/40"
        animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
      />

      <Navbar isDark={isDark} onToggleTheme={() => setIsDark((prev) => !prev)} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Architecture />
        <Blog />
        <Contact />
      </main>
    </div>
  )
}

export default App
