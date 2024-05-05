/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      screens: {
        xs: "420px",
        "2xs": "380px"
      }
    },
  },
  plugins: [],
}

