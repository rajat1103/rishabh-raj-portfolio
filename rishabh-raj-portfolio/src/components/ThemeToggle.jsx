export default function ThemeToggle({ theme, setTheme }){
  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="px-3 py-1 rounded-full border border-emerald-400/40 bg-emerald-50/70 dark:bg-emerald-900/30"
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  )
}
