/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        prompt: ['Prompt'],
        montserrat: ['Montserrat']
      },
      fontSize: {
        'xxs': '0.65rem'
      },
      colors: {
        'dark-navy': '#060A32',
        'midnight-blue': '#191D51',
        'patient-gray': '#C6C8D8',
        'regent-gray': '#878BB1',
        'titan-white': '#ECF0FD',
        'royal-blue': '#3A63F3',
        'jellyfish': '#1BCFA9',
        'sunglow': '#FFCA54',
        'bittersweet': '#FF6A5B'
      },
      boxShadow: {
        'sidebar': '0 0 50px rgba(135, 139, 177, 0.1)',
        'progress': '0 0 60px rgba(58, 99, 243, 0.2)'
      },
      backgroundImage: {
        'checked': 'url("/src/assets/checkbox.svg")'
      }
    },
  },
  plugins: [],
}
