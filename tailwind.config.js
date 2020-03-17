/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    fontFamily: {
      'poppins': ['Poppins']
    },
    extend:{
      'borderRadius': {
        'xl' : '1rem',
        '2xl' : '1.5rem'
      },
      spacing: {
        '72' : '18rem',
        '80' : '20rem'
      }
    }
  },
  variants: {},
  plugins: []
}
