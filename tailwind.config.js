/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        salmon: "var(--salmon)",
        "salmon-alt": "var(--salmon-alt)",
        lime: "var(--lime)",
        "lime-alt": "var(--lime-alt)",
        purple: "var(--purple)",
        "purple-alt": "var(--purple-alt)",
        tangerine: "var(--tangerine)",
        "tangerine-alt": "var(--tangerine-alt)",
        dark: "var(--dark)",
        error: "var(--error)",
        success: "var(--success)",
      },
      boxShadow: {
        md: "10px 10px 0 0 var(--dark)",
        sm: "5px 5px 0 0 var(--dark)",
      },
    },
  },
  plugins: [],
};
