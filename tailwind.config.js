/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Comfortaa"],
    },
  },
  plugins: [],
  safelist: [
    "bg-red-50",
    "bg-emerald-50",
    "bg-sky-50",
    "bg-red-200",
    "bg-emerald-200",
    "bg-sky-200",
    "border-red-500",
    "border-emerald-500",
    "border-sky-500",
    "text-red-500",
    "text-green-500",
  ],
};
