/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        spin1: {
          "0%": {
            borderTop: "8px solid #3498db",
            transform: "rotate(0deg)",
          },
          "25%": {
            borderTop: "8px solid #3498db",
            borderRight: "8px solid #3498db",
            transform: "rotate(90deg)",
          },
          "50%": {
            borderTop: "8px solid #3498db",
            borderRight: "8px solid #3498db",
            borderBottom: "8px solid #3498db",
            transform: "rotate(180deg)",
          },
          "75%": {
            borderTop: "8px solid #3498db",
            borderRight: "8px solid #3498db",
            borderBottom: "8px solid #3498db",
            borderLeft: "8px solid #3498db",
            transform: "rotate(270deg)",
          },
          "100%": {
            borderTop: "8px solid #3498db",
            transform: "rotate(360deg)",
          },
        },
        content: {
          "0%": {
            Opacity: "0",
          },
          "25%": {
            Opacity: "25%",
          },
          "50%": {
            Opacity: "50%",
          },
          "75%": {
            Opacity: "75%",
          },
          "100%": {
            Opacity: "100%",
          },
        },
      },
      animation: {
        "custom-Loader": "spin1 4s linear infinite",
        "main-content": "content 10s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
