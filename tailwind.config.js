/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
        const newUtilities = {
            ".no-scrollbar::-webkit-scrollbar": {
                display: "none",
            },
            ".no-scrollbar": {
                "-ms-overflow-style": "none",
                "scrollbar-width": "none",
            },
        };
        addUtilities(newUtilities);
    },
  ],
}
