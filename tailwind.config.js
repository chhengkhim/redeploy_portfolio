// tailwind.config.js

export default {
  darkMode: ['class'],  // Ensure dark mode works with the 'class' strategy
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',  // Adjust this path to your project
  ],
  theme: {
    extend: {
      // Custom styles, animations, etc.
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('tailwindcss-animate')],
};