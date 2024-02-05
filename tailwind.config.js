/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    container: {
      // you can configure the container to be centered
      center: true,
      // or have default horizontal padding
      padding: '1.2rem',
      // default breakpoints but with 40px removed
      screens: {
        xs: '425px',
        sm: '640px',
        md: '767px',
        lg: '1024px',
        xl: '1240px',
        '2xl': '1536px',
      },
    },
    extend: {},
  },
  plugins: [],
}

