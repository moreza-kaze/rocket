module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      main: "iran",
    },
    extend: {
      screens: {
        xl3: "1700px",
      },
      borderRadius: {
        50: "50%",
      },
      spacing: {
        v90: "80vh",
        calmain: "calc(100vh - 4.0625rem)",
      },
      width: {
        32: "32%",
        p97: "97%",
      },
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
        whitetransparent: {
          500: "#ffffff80",
          600: "#ffffff99",
          700: "#ffffffb3",
        },
        lightblue: "#c9d6ff80",
        coupongreen: {
          100: "#1ebe6c33",
          999: "#24be64",
          300: "#24be644d",
          700: "#24be64b3",
        },
        tableth: "#6799e7",
        dashboard: {
          y1: "#fceabb",
          y2: "#f8b50080",
          b1: "#93edc7",
          b2: "#1cd8d280",
          p1: "#8e54e980",
          p2: "#4776e699",
          o1: "#f7b733",
          o2: "#fc4a1a",
          g1: "#f4d03f",
          g2: "#16a085",
          g3: "#DA445399",
          g4: "#89216Bcc",
        },
        product: "#8e54e921",
      },
      transitionProperty: {
        width: "width",
        spacing: "margin, padding",
      },
      boxShadow: {
        nav: "-5px 1px 13px -12px rgba(0,0,0,1)",
      },
    },
  },
  plugins: [],
};
