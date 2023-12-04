/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      mono: ['"Fira Code"', 'monospace']
    },
    extend: {
      translate: {
        neg50: '-50%'
      },
      colors: {
        black: '#070709'
      }
    }
  },
  plugins: []
};
