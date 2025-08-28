import { motion } from 'framer-motion'
import { profile } from '../content'
import profileImg from '../assets/profile.jpg'

export default function Hero(){
  return (
    <section className="section pt-24 md:pt-28" id="home">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            {profile.name}
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-inkmute">{profile.tagline}</p>
          <p className="mt-6 text-lg md:text-xl max-w-xl">
            I’m a 3rd-year B.Tech CSE student passionate about <span className="font-semibold">data analysis</span>, <span className="font-semibold">problem solving</span> and <span className="font-semibold">modern web development</span>.
          </p>
          <div className="mt-8 flex gap-3">
            <a href="#projects" className="badge">View Projects</a>
            <a href="mailto:rajatrishabh03@gmail.com" className="badge">Contact Me</a>
            <a className="badge" href="/Rishabh_Raj_Resume.pdf" download>Download Resume</a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: .6, delay: .1 }}
          viewport={{ once: true }}
          className="justify-self-center"
        >
          <img src={profileImg} alt="Rishabh Raj" className="w-56 h-56 md:w-72 md:h-72 object-cover rounded-2xl shadow-soft border border-emerald-300/50" />
        </motion.div>
      </div>
    </section>
  )
}
