import { motion } from 'framer-motion'

const stats = [
  { label: 'Years Experience', value: '7+' },
  { label: 'Projects Delivered', value: '10+' },
  { label: 'Domains', value: 'Fintech · Healthcare · Crypto' }
]

function About() {
  return (
    <section id="about" className="section-container">
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid gap-8 lg:grid-cols-[2fr_1fr]">
        <div>
          <h2 className="text-3xl font-bold">About</h2>
          <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
            I am a results-driven backend engineer and system analyst focused on architecture that scales in real-world enterprise conditions. My work spans API-first platforms, distributed integrations, and high-throughput processing systems across regulated industries.
          </p>
          <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
            I specialize in designing dependable .NET ecosystems with clean service boundaries, asynchronous messaging, and cloud-ready deployment pipelines. In fintech environments, I align delivery with compliance and audit expectations while still improving developer velocity and customer onboarding journeys.
          </p>
        </div>
        <div className="grid gap-4">
          {stats.map((item) => (
            <div key={item.label} className="glass rounded-2xl p-5">
              <p className="text-3xl font-bold gradient-text">{item.value}</p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{item.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default About
