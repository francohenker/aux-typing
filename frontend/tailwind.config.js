const { default: daisyui } = require('daisyui');

/** @type {import('tailwindcss').Config} */
module.exports = {

  
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      'background': '#333',
    },
    colors: {
      'foreground': '#485A6C',
    }
  },
  
  daisyui: {
    themes: ["halloween"],
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.border-border': {
          border: '1px solid #000', // Example style
        },
      });
    },
    require('daisyui'),
  ],
}
