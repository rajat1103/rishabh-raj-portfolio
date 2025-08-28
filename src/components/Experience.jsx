import { motion } from 'framer-motion'
import { profile } from '../content'

export default function Experience(){
  return (
    <section className="section" id="experience">
      <motion.h2
        className="text-3xl font-bold mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .5 }}
        viewport={{ once: true }}
      >
        Experience & Hackathons
      </motion.h2>
      <div className="grid gap-6">
        {profile.experiences.map((x) => (
          <div key={x.title} className="card p-6 flex items-start justify-between">
            <div>
              <h3 className="text-xl font-semibold">{x.title}</h3>
              <p className="text-inkmute">{x.place}</p>
              <p className="mt-2">{x.detail}</p>
            </div>
            <span className="badge">{x.year}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
