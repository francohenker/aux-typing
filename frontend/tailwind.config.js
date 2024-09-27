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
    themes: ["halloween", "light", {
      dark: {
        "primary": "#793ef9",
        "secondary": "#d926a9",
        "accent": "#1fb2a5",
        "neutral": "#2a2e37",
        "base-100": "#1f2937", // Fondo oscuro para el tema 'dark'
        "base-200": "#111827", // Fondo secundario oscuro
        "base-content": "#ffffff",
      }
    }]
    // themes: ["halloween","dark"],
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
