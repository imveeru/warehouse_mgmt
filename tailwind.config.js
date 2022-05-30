module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      title: ['Poppins', 'sans-serif'],
      body: ['Roboto', 'sans-serif'],
    },
    extend: {
      colors: {
        'gray-bg':'#f9f9f9',
      },
      fontSize:{
        'title':'4.5rem',
        'title-sm':'2.5rem',
        'subtitle':'3rem',
        'subtitle-sm':'2.25rem',
        'input':'2.5rem',
        'body':'1.1rem',
        'body-sm':'1rem'
      },
    },
  },
  plugins: [],
}
