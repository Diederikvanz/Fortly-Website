/** Fortly — Tailwind build. Tokens gelijk aan assets/fortly-theme.js */
module.exports = {
  content: ['./*.html', './blog/*.html'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Fraunces', 'Georgia', 'serif'],
      },
      colors: {
        navy: '#0A192F',
        ink: '#050B18',
        accent: '#007AFF',
        cyan: '#22D3EE',
        violet: '#8B5CF6',
      },
    },
  },
  plugins: [],
}
