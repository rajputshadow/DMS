import { motion } from 'framer-motion'

const skills = [
  { category: 'Backend', items: ['.NET Core', 'Web API', 'Microservices'], level: 95 },
  { category: 'Frontend', items: ['Angular', 'JavaScript', 'TypeScript'], level: 80 },
  { category: 'Cloud', items: ['Azure', 'CI/CD', 'API Gateway'], level: 88 },
  { category: 'Messaging', items: ['RabbitMQ', 'Azure Service Bus'], level: 90 },
  { category: 'Databases', items: ['SQL Server', 'PostgreSQL', 'MySQL'], level: 92 },
  { category: 'Others', items: ['Redis', 'WebSockets', 'Multithreading', 'JWT'], level: 90 }
]

function Skills() {
  return (
    <section id="skills" className="section-container">
      <h2 className="text-3xl font-bold">Core Skills</h2>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {skills.map((skill, idx) => (
          <motion.div
            key={skill.category}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.06 }}
            className="glass rounded-2xl p-5"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">{skill.category}</h3>
              <span className="text-sm text-slate-500">{skill.level}%</span>
            </div>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{skill.items.join(' • ')}</p>
            <div className="mt-4 h-2 rounded-full bg-slate-200 dark:bg-slate-700">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Skills
