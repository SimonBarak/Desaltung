module.exports = {
  purge: ["./_includes/*.html", "./_layouts/*.html"],
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
            fontSize: "3rem",
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
            fontFamily: ["Inter", "sans-serif"],
            fontWeight: 100,
            fontSize: "2.5rem",
          },
          h2: {
            fontFamily: ["Inter", "sans-serif"],
            fontWeight: 100,
            fontSize: "2.5rem",
          },
          h3: {
            fontFamily: ["Inter", "sans-serif"],
            fontWeight: 400,
            fontSize: "1rem",
          },
          p: {
            textAlign: "left",
            fontSize: "1.2rem",
          },
        },
      },
    },
    fontThin: 100,
    fontFamily: {
      basic: ["Roboto", "sans-serif"],
      body: ["Times", "serif"],
    },
    container: {
      center: true,
      padding: "0.7rem",
    },
  },
};
