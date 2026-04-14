import { motion } from 'framer-motion'

const topics = [
  'API Gateway Design',
  'Distributed Systems',
  'Event-Driven Architecture',
  'High-Throughput Backend Systems',
  'Real-Time Systems (WebSockets)'
]

function Architecture() {
  return (
    <section id="architecture" className="section-container">
      <h2 className="text-3xl font-bold">Architecture & Expertise</h2>
      <p className="mt-4 max-w-3xl text-slate-600 dark:text-slate-300">
        I build systems with reliability and scale as first-class goals. My architecture approach emphasizes modular boundaries, observable APIs, and asynchronous communication for enterprise throughput.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {topics.map((topic, idx) => (
          <motion.div
            key={topic}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.06 }}
            className="glass rounded-2xl p-5"
          >
            <h3 className="font-semibold">{topic}</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Pattern-driven delivery with production-grade observability, fault tolerance, and performance optimization.</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 rounded-2xl border border-dashed border-indigo-400/60 p-5 text-sm text-slate-500 dark:text-slate-300">
        Diagram placeholder: add C4 or event-flow diagrams for lending integrations, campaign orchestration, and trade streaming pipelines.
      </div>
    </section>
  )
}

export default Architecture
