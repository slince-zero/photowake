import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: 'var(--light)',
        zinc: {
          900: 'var(--dark)',
        },
      },
      keyframes: {
        typing: {
          '0%': { width: '0' },
          '100%': { width: 'var(--typing-width)' },
        },
      },
      animation: {
        typing: 'typing 2s steps(20) infinite alternate',
      },
    },
  },
  plugins: [],
} satisfies Config
