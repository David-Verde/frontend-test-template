import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
   
      colors: {
    
        background: "#F5F5F5",
        "surface-primary": "#FFFFFF", 
        "surface-secondary": "#1A1A1A", 
        "surface-tertiary": "#404040", 

  
        "text-primary": "#1A1A1A", 
        "text-secondary": "#737373", 
        "text-on-dark": "#FFFFFF",


        "border-primary": "#E5E5E5",
        "button-secondary": '#585660',
    
        primary: "#3B82F6", 
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
  
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        '2xl': '48px',
      },

      screens: {
        'sm': '375px',
        'md': '640px',
        'lg': '1024px',
        'xl': '1536px',
      },
    },
  },
  plugins: [],
};
export default config;