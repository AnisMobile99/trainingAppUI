import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionTimingFunction: {
        "in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      transitionDuration: {
        400: "400ms",
        500: "500ms",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      animation: {
        blink: "blink 0.3s ease-in-out", // Animation personnalisée
        "bounce-down": "bounceDown 1.5s infinite", // Animation personnalisée
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: 0 }, // Départ et arrivée avec opacity 0
          "50%": { opacity: 1 }, // Milieu avec opacity 1
        },
        bounceDown: {
          "0%, 100%": { transform: "translateY(0)" }, // Position initiale et finale
          "50%": { transform: "translateY(10px)" }, // Descend légèrement
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
