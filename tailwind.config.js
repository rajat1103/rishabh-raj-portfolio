/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: 'rgb(var(--surface) / <alpha-value>)',
        card: 'rgb(var(--card) / <alpha-value>)',
        accent: 'rgb(var(--accent) / <alpha-value>)',
        mutegreen: 'rgb(var(--mutegreen) / <alpha-value>)',
        ink: 'rgb(var(--ink) / <alpha-value>)',
        inkmute: 'rgb(var(--inkmute) / <alpha-value>)',
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,0.12)',
      }
    },
  },
  plugins: [],
}
