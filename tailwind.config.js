/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '320px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1920px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        light: '#f1f1f1',
        dark: '#121212',
        boxDark: '#1d1d1d',

        inputDark: '#373737',
        inputLight: '#f5f5f5',

        arrowBoxDark: '#373737',
        arrowBoxLight: '#6b7280',
      },
    },
  },
  plugins: [],
};
