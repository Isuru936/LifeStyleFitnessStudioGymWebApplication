/** @type {import('tailwindcss').Config} */
import { red } from "tailwindcss/colors";
import { white } from "tailwindcss/colors";
import { orange } from "tailwindcss/colors";
import { addDynamicIconSelectors } from "@iconify/tailwind";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      navSelectedCol: "#D1D5DA",
      red: red,
      black: {
        500: "#0D141C",
      },
      white: white,
      orange: orange,
      blue: {
        500: "#4F7096", // Original blue color
        100: "#F2F5F8", // Lighter shade of blue
        0: "#3300FD", // Darker shade of blue
        200: "#A1B8D1", // Slightly lighter shade
        300: "#7899B6", // Medium shade
        400: "#56779F", // Slightly darker shade
        600: "#334D73", // Darker shade
        700: "#273B58", // Even darker shade
        800: "#1A283C", // Very dark shade
        900: "#3283E2",
      },
      lightBlue: {
        500: "#5BC0DE", // Original light blue color
        100: "#E4F4F8", // Lighter shade of light blue
        200: "#A8D9E8", // Slightly lighter shade
        300: "#1A78E5", // Medium shade
        400: "#4FAED0", // Slightly darker shade
        600: "#2F8FA3", // Darker shade
        700: "#1F697C", // Even darker shade
        800: "#0F4556", // Very dark shade
      },
    },
  },
  plugins: [addDynamicIconSelectors()],
};
