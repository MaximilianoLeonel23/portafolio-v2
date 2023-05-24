/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      fontFamily: {
        berty: ["Bertioga Sans", "san-serif"],
      },
      fontWeight: {
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      colors: {
        primary: {
          light: {
            500: "#7DB1B1",
            600: "#68A4A4",
            700: "#4C7E7E",
          },
          dark: {
            500: "#A0CECB",
            600: "#ABD3D1",
            700: "#CAE4E2",
          },
          white: "#fffefe",
        },
      },
    },
  },
  plugins: [],
};
