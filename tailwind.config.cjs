/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Bricolage Grotesque Variable",
          "Inter Variable",
          "Inter",
          ...defaultTheme.fontFamily.sans,
        ],
      },
      colors:  {
        coral: "#EE767A",
        magnolia: "#F3EFF5",
        melon: "#F9B29B",
        carmine: "#961B1E",
        green: "#00AF4C",
        gunmetal: "#292F36"
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
