import { Linkedin, Mail } from 'lucide-react'

function Contact() {
  return (
    <section id="contact" className="section-container pb-24">
      <div className="glass rounded-3xl p-8 text-center sm:p-12">
        <h2 className="text-3xl font-bold">Let's Build Something Scalable</h2>
        <p className="mt-4 text-slate-600 dark:text-slate-300">
          Interested in backend architecture, system modernization, or high-throughput API platforms? Let’s connect.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="mailto:rajput.shubh2510@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white dark:bg-slate-100 dark:text-slate-900"
          >
            <Mail size={16} /> rajput.shubh2510@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/shubham-singh-980114148/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold dark:border-slate-600"
          >
            <Linkedin size={16} /> LinkedIn Profile
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
