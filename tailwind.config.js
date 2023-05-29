/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        '20p': '20%',
        '20vw': '20vw',
      },
    },
  },
  plugins: [],
};
