import { motion } from 'framer-motion'
import { profile } from '../content'

function SkillGroup({ title, items }){
  return (
    <div className="card p-6">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <div className="flex flex-wrap gap-3">
        {items.map((x) => <span key={x} className="badge">{x}</span>)}
      </div>
    </div>
  )
}

export default function Skills(){
  const { languages, frameworks, tools, soft } = profile.skills
  return (
    <section className="section" id="skills">
      <motion.h2
        className="text-3xl font-bold mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .5 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-6">
        <SkillGroup title="Programming Languages" items={languages} />
        <SkillGroup title="Frameworks & Libraries" items={frameworks} />
        <SkillGroup title="Databases & Tools" items={tools} />
        <SkillGroup title="Soft Skills" items={soft} />
      </div>
    </section>
  )
}
