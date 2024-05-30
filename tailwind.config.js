module.exports = {
  darkMode: "class", // or 'media' if you want to use system preference
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          900: "#004d32",
          800: "#03694c",
          700: "#0b795a", // primary color
          600: "#108969",
          500: "#139674",
          400: "#2fa687",
          300: "#52b69b",
          200: "#82cbb7",
          100: "#b3dfd3",
          50: "#e0f2ee",
        },
        triadic1: {
          900: "#5a0b79",
          800: "#761387",
          700: "#86188f", // color used in the logo
          600: "#981e97",
          500: "#a5229c",
          400: "#b344aa",
          300: "#c166b9",
          200: "#d492cd",
          100: "#e5bde0",
          50: "#f4e5f2",
        },
        triadic2: {
          900: "#0b2a79",
          800: "#1b3b8f",
          700: "#24459b",
          600: "#2e4fa7",
          500: "#3457b1",
          400: "#5670bc",
          300: "#758ac7",
          200: "#9cabd7",
          100: "#c3cce7",
          50: "#e7ebf5",
        },
        lightCream: "#FFF9ED",
        lighterCream: "#FFFDF9",
        darkBlue: "#04212B",
      },
      backgroundColor: (theme) => ({
        ...theme("colors"),
        light: {
          DEFAULT: "#FFF9ED",
        },
        dark: {
          DEFAULT: "#04212B",
        },
      }),
      animation: {
        fadeIn: "fadeIn 2s ease-in forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  variants: {
    animation: ["motion-safe"],
  },
  plugins: [],
};
