module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    container : {
      center: true,
      padding: '16px',
      margin: '16px',
    },
    extend: {
      colors: {
        primary: '#f43f5e',
        dark : '#0f172a',
        secondery: '#64748b',
      },
      screens: {
        'xl': '1320px',
      }
    },
  },
  plugins: [],
}
