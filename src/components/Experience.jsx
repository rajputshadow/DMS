import { motion } from 'framer-motion'

const timeline = [
  {
    role: 'Senior Software Engineer',
    company: 'Bajaj Finserv Limited',
    duration: 'Apr 2022 – Present',
    achievements: [
      'Led architecture and implementation of lending and customer platform APIs.',
      'Collaborated with compliance and audit stakeholders for production-ready onboarding systems.',
      'Owned code reviews, deployments, and production issue resolution for critical journeys.'
    ]
  },
  {
    role: 'Software Engineer',
    company: 'Mugenesys Software Pvt. Ltd.',
    duration: 'May 2019 – Apr 2022',
    achievements: [
      'Delivered full-stack modules across fintech, healthcare, and crypto products.',
      'Migrated monolithic systems to microservices with API gateway patterns.',
      'Built real-time and asynchronous systems with WebSockets and RabbitMQ.'
    ]
  },
  {
    role: 'Market Research Associate',
    company: 'Netscribes (I) Pvt. Ltd.',
    duration: 'Oct 2017 – Oct 2018',
    achievements: [
      'Conducted market and data research to support strategic business decisions.',
      'Strengthened analysis and communication skills applied later in software consulting.',
      'Delivered reports with high accuracy and stakeholder alignment.'
    ]
  }
]

function Experience() {
  return (
    <section id="experience" className="section-container">
      <h2 className="text-3xl font-bold">Experience Timeline</h2>
      <div className="mt-8 space-y-8 border-l-2 border-indigo-300/60 pl-6 dark:border-indigo-500/40">
        {timeline.map((item, idx) => (
          <motion.div
            key={item.company}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08 }}
            className="relative"
          >
            <span className="absolute -left-[34px] top-2 h-4 w-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
            <div className="glass rounded-2xl p-5">
              <h3 className="text-lg font-semibold">{item.role} · {item.company}</h3>
              <p className="mt-1 text-sm text-slate-500">{item.duration}</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600 dark:text-slate-300">
                {item.achievements.map((point) => <li key={point}>{point}</li>)}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Experience
