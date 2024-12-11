import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import animate from "tailwindcss-animate";
import variantGenerator from "./src/utils/tailwindcss-variant.util";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  options: {
    safelist: ["herosection-tech-1", "herosection-tech-2"],
  },
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
      aspectRatio: {
        "3/4": "3 / 4",
      },
      backgroundImage: {
        "herosection-tech-1": "url('/tech-hero-1.webp')",
        "herosection-tech-2": "url('/tech-hero-2.webp')",
      },
      screens: {
        xxs: { max: "340px" },
        "xxs-rotate": "568px",
        portrait: {
          raw: "(orientation: portrait)",
        },
        landscape: {
          raw: "(orientation: landscape)",
        },
      },
      lineHeight: {
        "11": "2.75rem",
        "12": "3rem",
        "14": "3.5rem",
        "16": "4rem",
        "20": "4.5rem",
      },
      padding: {
        "side-space": "4.25%",
        "side-space-2xl": "10%",
      },
      colors: {
        white: {
          DEFAULT: "#FFFFFF",
          primary: "hsl(var(--white-primary))",
          secondary: "hsl(var(--white-secondary))",
        },
        black: {
          DEFAULT: "#000000",
          primary: "hsl(var(--black-primary))",
          secondary: "hsl(var(--black-secondary))",
        },
        "background-primary": "hsl(var(--background-primary))",
        "background-secondary": "hsl(var(--background-secondary))",
        primary: "hsl(var(--primary))",
        secondary: "hsl(var(--secondary))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "slide-out-right": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "slide-out-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "slide-in-left": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "zoom-in": {
          "0%": { transform: "scale(0.5)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "zoom-out": {
          "0%": { transform: "scale(1)", opacity: "1" },
          "100%": { transform: "scale(0.5)", opacity: "0" },
        },

        "custom-test": {
          "0%": { opacity: "0", width: "0" },
          "100%": { opacity: "1", width: "80px" },
        },

        "move-left": {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(50px)" },
        },

        "arrow-complete": {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },

        "fade-out": {
          "0%": { opacity: "0.5", willChange: "opacity" },
          "100%": { opacity: "1" },
        },

        "fade-in": {
          "0%": { opacity: "1", willChange: "opacity" },
          "100%": { opacity: "0.5" },
        },

        "fade-left": {
          "0%": {
            opacity: "0.5",
            transform: "translateX(20px)",
            willChange: "opacity, transform",
          },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "fade-right": {
          "0%": { opacity: "0.5", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "fade-up": {
          "0%": {
            opacity: "0.5",
            transform: "translateY(20px)",
          },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-down": {
          "0%": {
            opacity: "0.5",
            transform: "translateY(-20px)",
          },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },

        "scale-down": {
          "0%": { transform: "scale(1.02)" },
          "100%": { transform: "scale(1)" },
        },
        "border-expand": {
          "0%": {
            transform:
              "translate3d(-101%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            transformStyle: "preserve-3d",
          },
          "100%": {
            transform:
              "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            transformStyle: "preserve-3d",
          },
        },
      },
      animation: {
        // Fade Motion
        "fade-out": "fade-out 0.5s ease-in-out forwards",
        "fade-in": "fade-in 0.5s ease-in-out forwards",
        "fade-up": "fade-up 0.5s ease-in-out forwards",
        "fade-down": "fade-down 0.5s ease-in-out forwards",
        "fade-right": "fade-right 0.5s ease-in-out forwards",
        "fade-left": "fade-left 0.5s ease-in-out forwards",
        "arrow-complete": "arrow-complete 0.5s ease-out forwards",
        "scale-down": "scale-down 0.5s ease-in-out forwards",
        "move-left": "move-left 2s linear infinite",
        "custom-test": "custom-test 0.5s ease-in-out forwards",
        "border-expand": "border-expand 0.5s ease-in-out forwards",
        "slide-out-right": "slide-out-right 0.5s forwards",
        "slide-in-right": "slide-in-right 0.5s forwards",
        "slide-out-left": "slide-out-left 0.5s forwards",
        "slide-in-left": "slide-in-left 0.5s forwards",
        "zoom-in": "zoom-in 0.5s forwards",
        "zoom-out": "zoom-out 0.5s forwards",
      },
    },
  },
  plugins: [
    animate,
    plugin(function ({ addVariant, e }: { addVariant: any; e: any }) {
      addVariant("rtl", variantGenerator("rtl", e));
      addVariant("ltr", variantGenerator("ltr", e));
      addVariant("fa", variantGenerator("fa", e));
      addVariant("tech", variantGenerator("tech", e));
      addVariant("media", variantGenerator("media", e));
      addVariant("business", variantGenerator("business", e));
    }),
  ],
} satisfies Config;

export default config;
