import { motion } from 'framer-motion'
import { profile } from '../content'

export default function Education(){
  return (
    <section className="section" id="education">
      <motion.h2
        className="text-3xl font-bold mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .5 }}
        viewport={{ once: true }}
      >
        Education
      </motion.h2>
      <div className="grid gap-6">
        {profile.education.map((e) => (
          <div key={e.title} className="card p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div>
                <h3 className="text-xl font-semibold">{e.title}</h3>
                <p className="text-inkmute">{e.place}</p>
              </div>
              <div className="text-sm">
                <span className="badge">{e.detail}</span>
                <span className="ml-3 badge">{e.year}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
