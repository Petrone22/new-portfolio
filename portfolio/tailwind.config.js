/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        textClr: "#ffffffe6",
        bgclr: "#030014",
        secondary: "#7668D0",
        filling: "#170C35",
        accent: "#6b5cd1",
        offwhite: "rgba(255,255,255,.2)",
      },
      spacing: {
        "54%": "54%",
        "60%": "70.8%",
      },
    },
  },
  plugins: [],
};
