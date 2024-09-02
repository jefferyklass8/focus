/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#591ddd",
        accent_secondary: "#8728e1",
      },
      backgroundImage: {
        body: "url('/body-bg.png')",
      },
    },
  },
  plugins: [],
};
