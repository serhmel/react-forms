/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1DA1F2',
        success: '#22C55E',
        danger:  '#EF4444',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}