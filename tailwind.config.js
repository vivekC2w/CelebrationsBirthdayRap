/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bgImg: "url('/assets/UI_Images/BG.jpg')",
        sidebarBgImg: "url('/assets/UI_Images/HamburgerMenu.png')",
      },
      fontFamily: {
        gibson: ["Gibson", "sans-serif"],
        "gibson-semibold": ["Gibson-SemiBold", "sans-serif"],
        "gibson-bold": ["Gibson-Bold", "sans-serif"],
        "gibson-italic": ["Gibson-Italic", "sans-serif"],
        "gibson-light": ["Gibson-Light", "sans-serif"],
        "gibson-regular": ["Gibson-Regular", "sans-serif"],
        "dairymilk-medium": ["DairyMilkFont-Medium", "sans-serif"],
      },
    },
  },
  plugins: [],
};
