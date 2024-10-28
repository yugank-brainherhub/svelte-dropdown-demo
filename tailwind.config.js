/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte}'],
  theme: {
    extend: {
      transitionDuration: {
        '10000': '10000ms',
      }
    },
  },
  plugins: [],
}

