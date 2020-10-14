module.exports = {
  purge: ["./_includes/*.html", "./_layouts/*.html"],
  plugins: [require("@tailwindcss/typography")],
  theme: {
    typography: {
      md: {
        css: {
          p: {
            textAlign: "justify",
            fontSize: "1.2rem",
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
