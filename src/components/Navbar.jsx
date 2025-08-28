import ThemeToggle from './ThemeToggle'
import { profile } from '../content'

export default function Navbar({ theme, setTheme }) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-card/70 border-b border-emerald-200/40 dark:border-emerald-900/40">
      <nav className="section flex items-center justify-between py-4">
        <a href="#" className="font-semibold tracking-wide text-lg">{profile.name}</a>
        <div className="flex items-center gap-4">
          <a href="#projects" className="link">Projects</a>
          <a href="#skills" className="link">Skills</a>
          <a href="#education" className="link">Education</a>
          <a href="#contact" className="link">Contact</a>
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </div>
      </nav>
    </header>
  )
}
