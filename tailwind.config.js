/**@type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "float-fade": {
          "0%, 100%": {
            transform: "translateY(0) translateX(0)",
            opacity: 0,
          },
          "25%": {
            opacity: 0.6,
          },
          "50%": {
            transform: "translateY(-100px) translateX(50px)",
            opacity: 0.3,
          },
          "75%": {
            opacity: 0.6,
          },
        },
      },
      animation: {
        "float-fade": "float-fade linear infinite",
      },
    },
  },
  plugins: [],
};
