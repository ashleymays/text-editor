/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      mono: ['"Fira Code"', 'monospace']
    },
    extend: {
      padding: {
        '45vh': '45vh'
      },
      translate: {
        neg50: '-50%'
      }
    }
  },
  plugins: []
};
