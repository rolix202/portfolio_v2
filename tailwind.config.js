/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // animation: {
      //   slowbounce: 'bounce 3s infinite', 
      //   slideInLeft: "slideInLeft 0.4s ease-out forwards",
      //   fadeIn: "fadeIn 0.6s ease-in forwards",
      // },

      animation: {
        slowbounce: 'bounce 3s infinite',
        menuSlideIn: "menuSlideIn 0.5s cubic-bezier(0.25, 1, 0.5, 1) forwards",
        slideInDelay: "slideInDelay 0.6s ease-in forwards",
        slideInLink: "slideInLink 0.7s ease-out forwards",
        popIn: "popIn 0.8s cubic-bezier(0.25, 1, 0.5, 1) forwards",
      },
      keyframes: {
        menuSlideIn: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideInDelay: {
          "0%": { transform: "translateY(20px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        slideInLink: {
          "0%": { transform: "translateX(-20px)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        popIn: {
          "0%": { transform: "scale(0.8)", opacity: 0 },
          "50%": { transform: "scale(1.05)", opacity: 1 },
          "100%": { transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [
    
  ],
  variants: {
    
  }
}

