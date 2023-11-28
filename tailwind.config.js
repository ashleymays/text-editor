/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      translate: {
        negative50: '-50%'
      }
    }
  },
  plugins: []
};
