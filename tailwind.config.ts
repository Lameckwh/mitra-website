import type { Config } from "tailwindcss";
// import defaultTheme from "tailwindcss/defaultTheme";
 
// import colors from "tailwindcss/colors";
// import { default as flattenColorPalette } from "tailwindcss/lib/util/flattenColorPalette";


module.exports = {
	darkMode: 'class',
	
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)',
			primary: '#07B0F1',
  		},
 
  		animation: {
  			scroll: 'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite'
  		},
  		keyframes: {
  			scroll: {
  				to: {
  					transform: 'translate(calc(-50% - 0.5rem))'
  				}
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [
    /* eslint-disable @typescript-eslint/no-require-imports */

    require('daisyui'),
      require("tailwindcss-animate")
],
 
 
} satisfies Config;