import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";
import typography from "@tailwindcss/typography";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mobile: { max: "450px" },
      tablet: { min: "451px", max: "1000px" },
      desktop: { min: "1001px" },
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            "h2 > a, h3 > a": {
              textDecoration: "none",
              color: "inherit",
              fontWeight: "inherit",
            },
            code: {
              backgroundColor: "var(--code-bg)",
              color: "var(--code-text)",
              padding: "0.1rem 0.4rem",
              borderRadius: "4px",
            },
            pre: {
              backgroundColor: "var(--pre-bg)",
              color: "var(--pre-text)",
              padding: "1em",
              borderRadius: "0.5rem",
              overflowX: "auto",
            },
            "pre code": {
              backgroundColor: "transparent",
              color: "inherit",
              padding: "0",
            },
            "code::before": { content: "none" },
            "code::after": { content: "none" },
          },
        },
      },
      fontFamily: {
        inter: "var(--font-inter)",
        noto: "var(--font-noto-sans-kr)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        orbit: {
          "0%": { transform: "rotate(0deg) translateX(55px) rotate(0deg)" },
          "100%": {
            transform: "rotate(360deg) translateX(55px) rotate(-360deg)",
          },
        },
        orbitReverse: {
          "0%": {
            transform: "rotate(180deg) translateX(55px) rotate(-180deg)",
          },
          "100%": {
            transform: "rotate(540deg) translateX(55px) rotate(-540deg)",
          },
        },
      },
      animation: {
        orbit: "orbit 5s linear infinite",
        orbitReverse: "orbitReverse 5s linear infinite",
      },
    },
  },
  plugins: [tailwindcssAnimate, typography],
} satisfies Config;
