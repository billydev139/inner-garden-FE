import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      montserrat: ['Montserrat'],
      'montserrat-alternates': ['Montserrat Alternates'],
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '2rem',
          xl: '2rem',
          '2xl': '6rem',
        },
      },
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        tertiary: "var(--color-tertiary)",
        quartary: "var(--color-quartary)",
        transparentFooterBg: "var(--color-transparent-footer-bg)",
        tetra: "var(--color-tetra)",
        penta: "var(--color-penta)",
        hexa: "var(--color-hexa)"
      },
    }, 
  },
  plugins: [],
};
export default config;
