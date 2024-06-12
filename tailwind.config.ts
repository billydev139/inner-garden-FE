import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        'montserrat-alternates': ['Montserrat Alternates', 'sans-serif'],
      },
      colors: {
        purple: {
          dark: '#564A8D', 
          light: '#B76EF9',   
        },
        blue: {
          dark: '#4F81E5',
          light: '#C4CAF0',
        },
      },
    },
  },
  plugins: [],
};
export default config;
