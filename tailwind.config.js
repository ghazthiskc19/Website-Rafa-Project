/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{html,js,css}'],
  theme: {
    fontFamily: {
      'vremena': ['Vremenagrotesk', 'sans-serif'],
    },
    extend: {
      fontWeight: {
        lights: '200',
        regulars: '300',
        mediums: '500',
        bolds: '700',
      },
      colors:{
        coba: '#ff0000'
      }
    },
  },
  plugins: [],
}
