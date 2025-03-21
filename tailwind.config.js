/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#006EAD",
          200: "#004178",
          300: "#001A4A",
        },

        dark: {
          50: "#505050",
          100: "#2F2F2F",
          200: "#1B1B1B",
          300: "#161616",
        },

        light: "#D0D2D3",
        borderColor: "#404040",
      },
    },
  },
  plugins: [],
};
