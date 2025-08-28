import { motion } from 'framer-motion'
import { profile } from '../content'

export default function About(){
  return (
    <section className="section" id="about">
      <motion.div
        className="card p-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg leading-relaxed whitespace-pre-line">{profile.about}</p>
      </motion.div>
    </section>
  )
}
