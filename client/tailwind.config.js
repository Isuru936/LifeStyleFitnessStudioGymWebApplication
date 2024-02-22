/** @type {import('tailwindcss').Config} */
// import { red } from "tailwindcss/colors";
// import { white } from "tailwindcss/colors";
// import { orange } from "tailwindcss/colors";
import { addDynamicIconSelectors } from "@iconify/tailwind";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [addDynamicIconSelectors()],
};
