import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        "dark-navy": "hsl(250, 68%, 27%)",
        blue: "hsl(223, 100%, 57%)",
        "light-blue": "hsl(223, 100%, 72%)",
        pink: "hsl(300, 99%, 72%)",
        "light-pink": "hsl(296, 98%, 79%)",
        "lighter-blue": "hsl(220, 90%, 72%)",
        "dark-blue": "hsl(231, 72%, 21%)",
      },
      fontFamily: {
        "mouse-memoirs": ["MouseMemoirs", "sans-serif"],
      },
      // boxShadow: {
      //   primary:
      //     "0px 1px 0px 6px #3C74FF inset, 0px -2px 0px 3px #140E66 inset",
      // },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
