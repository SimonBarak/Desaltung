module.exports = {
  purge: ["./_includes/*.html", "./_layouts/*.html", "./dist/*.js"],
  plugins: [require("@tailwindcss/typography")],

  theme: {
    fontFamily: {
      body: ["Inter", "sans-serif"],
    },
    container: {
      center: true,
      padding: "0.7rem",
    },
    typography: {
      md: {
        css: {
          h1: {
            fontSize: "6rem",
          },
          h2: {
            fontSize: "3rem",
          },
          p: {
            fontSize: "1.5rem",
          },
        },
      },
      default: {
        css: {
          h1: {
            fontFamily: ["Inter"],
            fontWeight: 400,
            fontSize: "2rem",
          },
          h2: {
            fontFamily: ["Inter"],
            fontWeight: 200,
            fontSize: "1.5rem",
          },
          h3: {
            fontFamily: ["Inter"],
            fontWeight: 200,
            fontSize: "1rem",
          },
          p: {
            textAlign: "left",
            fontWeight: 200,
            fontSize: "1rem",
          },
        },
      },
    },
    container: {
      center: true,
      padding: "0.7rem",
    },
  },
};
