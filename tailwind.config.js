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

        sunrise: {
          "0%": {
            transform: "translateY(1.5rem)",
          },
          "50%": {
            transform: "translateY(0.7rem)",
          },
          "100%": {
            transform: "translateY(0rem)",
          },
        },
        sunset: {
          "0%": {
            transform: "translateY(-1.5rem)",
          },
          "50%": {
            transform: "translateY(-0.7rem)",
          },
          "100%": {
            transform: "translateY(0rem)",
          },
        },
        pulse1: {
          "0%": {
            opacity: "0",
          },
          "50%": {
            opacity: "0.5",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      animation: {
        "custom-Loader": "spin1 4s linear infinite",
        "main-content": "content 100s ease-in-out infinite",
        "sunrise-animation": "sunrise 2s linear ",
        "sunset-animation": "sunset 2s linear ",
        "pulse-animation": "pulse1 1.5s linear",
      },
    },
  },
  plugins: [],
};
