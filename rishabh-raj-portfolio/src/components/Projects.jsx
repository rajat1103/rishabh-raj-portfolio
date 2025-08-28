import { motion } from 'framer-motion'
import { profile } from '../content'

function ProjectCard({ project }){
  return (
    <div className="card p-6 flex flex-col">
      <div className="flex-1">
        <h3 className="text-2xl font-semibold">{project.name}</h3>
        <p className="mt-2 text-inkmute">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map(tag => <span key={tag} className="badge">{tag}</span>)}
        </div>
      </div>
      <div className="mt-6 flex gap-3">
        {project.link && <a className="link" href={project.link} target="_blank" rel="noreferrer">View Repo</a>}
      </div>
    </div>
  )
}

export default function Projects(){
  return (
    <section className="section" id="projects">
      <motion.h2
        className="text-3xl font-bold mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .5 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-6">
        {profile.projects.map(p => <ProjectCard key={p.name} project={p} />)}
      </div>
    </section>
  )
}
