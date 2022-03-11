module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      main: "iran",
    },
    extend: {
      colors: {
        maincolor: {
          50: "#568ee40d",
          100: "#568ee41a",
          200: "#568ee433",
          300: "#568ee44d",
          400: "#568ee466",
          500: "#568ee480",
          600: "#568ee499",
          700: "#568ee4b3",
          800: "#568ee4cc",
          900: "#568ee4e6",
          999: "#568ee4",
        },
      },
      transitionProperty: {
        width: "width",
        spacing: "margin, padding",
      },
      boxShadow: {
        nav: "-15px 2px 15px 5 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
      },
    },
  },
  plugins: [],
};
