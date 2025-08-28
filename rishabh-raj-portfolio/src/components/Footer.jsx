import { profile } from '../content'

export default function Footer(){
  return (
    <footer className="section pt-10 text-center">
      <div className="text-sm text-inkmute">
        © {new Date().getFullYear()} {profile.name}. Built with React & TailwindCSS.
      </div>
    </footer>
  )
}
