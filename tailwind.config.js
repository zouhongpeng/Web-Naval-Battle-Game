/** @type {import('tailwindcss').Config} */
export default {
  content: ['./client/index.html', './client/src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        abyss: 'var(--color-abyss)',
        navy: 'var(--color-navy)',
        steel: 'var(--color-steel)',
        ice: 'var(--color-ice)',
        data: 'var(--color-cyan-data)',
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        'text-disabled': 'var(--color-text-disabled)',
        edge: 'var(--color-border)',
        damage: 'var(--color-damage)',
        buff: 'var(--color-buff)',
        gold: 'var(--color-gold)',
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)'],
      },
      borderRadius: {
        card: 'var(--radius-card)',
        panel: 'var(--radius-panel)',
      },
    },
  },
  plugins: [],
};
