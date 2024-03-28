/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  // original CT configuration
  // theme: {
  //   container: {
  //     screens: {
  //       xs: "425px",
  //       sm: "640px",
  //       md: "767px",
  //       lg: "1024px",
  //       xl: "1240px",
  //       "2xl": "1536px",
  //     },
  //   },
  //   extend: {},
  // },
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      screens: {
        DEFAULT: '100%',
        xl: '1280px',
        '2xl': '1536px',
        '3xl': '1920px'
      },
      extend: {
        padding: '80px',
      },
    },
  },
  plugins: [],
};
