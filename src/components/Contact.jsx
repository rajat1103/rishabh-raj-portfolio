import { motion } from 'framer-motion'
import { profile } from '../content'

export default function Contact(){
  const handleSubmit = (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const name = form.get('name')
    const mail = form.get('email')
    const message = form.get('message')
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`)
    const body = encodeURIComponent(`From: ${name} <${mail}>
\n${message}`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }
  return (
    <section className="section" id="contact">
      <motion.div
        className="card p-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input className="w-full p-3 rounded-xl border border-emerald-400/40 bg-white/70 dark:bg-emerald-900/20" name="name" placeholder="Your Name" required />
            <input className="w-full p-3 rounded-xl border border-emerald-400/40 bg-white/70 dark:bg-emerald-900/20" name="email" type="email" placeholder="Your Email" required />
            <textarea className="w-full p-3 h-36 rounded-xl border border-emerald-400/40 bg-white/70 dark:bg-emerald-900/20" name="message" placeholder="Your Message" required />
            <button className="px-5 py-3 rounded-xl bg-accent text-white font-semibold shadow-soft hover:opacity-90" type="submit">Send Message</button>
          </form>
          <div>
            <p className="mb-4">Prefer direct contact?</p>
            <ul className="space-y-2">
              <li><a className="link" href={`mailto:${profile.email}`}>{profile.email}</a></li>
              <li><a className="link" href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
              <li><a className="link" href={profile.links.github} target="_blank" rel="noreferrer">GitHub</a></li>
              <li><span className="badge">{profile.phone}</span></li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
