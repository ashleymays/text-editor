/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      translate: {
        'neg50': '-50%'
      },
      fontFamily: {
        'mono': ['"Noto Sans Mono"', 'monospace']
      }
    }
  },
  plugins: []
};
