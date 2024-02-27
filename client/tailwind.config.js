/** @type {import('tailwindcss').Config} */

import { addDynamicIconSelectors } from "@iconify/tailwind";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "regal-blue": "#243c5a",
        "side-bar-hover": "#D1D5DA",
      },
    },
  },
  plugins: [addDynamicIconSelectors()],
};
