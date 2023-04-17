/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif']
      },
      screens: {
        sm: '200px',
        md: '1024px',
        lg: '1300px',
        xl: '1440px'
      },
      backgroundImage: {
        like: 'url("./public/images/like.png")',
        chel: 'url("./public/images/chel.png")',
        menuIcon: 'url("./public/images/menuIcon.png")',
        facebook: 'url("./public/images/facebook.png")',
        insta: 'url("./public/images/insta.png")',
        telega: 'url("./public/images/telega.png")',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
]
}

