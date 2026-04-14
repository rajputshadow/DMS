import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { projectDomains, projects } from '../data/projects'

function Projects() {
  const [filter, setFilter] = useState('All')
  const [expanded, setExpanded] = useState(null)

  const visibleProjects = useMemo(
    () => projects.filter((item) => filter === 'All' || item.domain === filter),
    [filter]
  )

  return (
    <section id="projects" className="section-container">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h2 className="text-3xl font-bold">Selected Projects</h2>
        <div className="flex flex-wrap gap-2">
          {projectDomains.map((domain) => (
            <button
              key={domain}
              onClick={() => setFilter(domain)}
              className={`rounded-full px-4 py-2 text-sm ${
                filter === domain
                  ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900'
                  : 'border border-slate-300 text-slate-700 dark:border-slate-600 dark:text-slate-200'
              }`}
            >
              {domain}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {visibleProjects.map((project) => {
          const isOpen = expanded === project.id
          return (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-5"
            >
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-300">
                  {project.domain}
                </span>
              </div>
              <p className="mt-1 text-xs text-slate-500">Duration: {project.period}</p>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{project.summary}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="rounded-md border border-slate-300 px-2 py-1 text-xs dark:border-slate-600">
                    {tech}
                  </span>
                ))}
              </div>

              <button
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 dark:text-indigo-300"
                onClick={() => setExpanded(isOpen ? null : project.id)}
              >
                {isOpen ? 'Hide details' : 'View details'}
                <ChevronDown size={16} className={`transition ${isOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="mt-3 text-sm font-semibold text-slate-800 dark:text-slate-200">Architecture highlight</p>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{project.architecture}</p>
                    <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-600 dark:text-slate-300">
                      {project.highlights.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}

export default Projects
