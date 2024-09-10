/** @type {import('tailwindcss').Config} */
import * as defaultTheme from "tailwindcss/defaultTheme";
import * as defaultColors from "tailwindcss/colors";
export default {
  darkMode: "selector",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        "white-smoke": "#ffffff",
        white: "#f6f6f6",
        "black-lighten": "#444353",
        "black-darken": "#030011",
        black: "#272530",
        "secondary-lighten": "#62e87a",
        "secondary-darken": "#18be36",
        secondary: "#1cd93f",
        "primary-lighten": "#2260fc",
        "primary-darken": "#0804dc",
        "primary-secondary-darken": "#081178",
        primary: "#2522fc",
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(270deg, #0000FF 0%, #081178 100%)",
      },
    },
  },
  plugins: [],
};
