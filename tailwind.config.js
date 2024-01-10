/** @type {import('tailwindcss').Config} */
const config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	  ],
	theme: {
		screens: {
			sm: '430px', // Larger iPhones
			md: '834px', // iPad Pro and up
			lg: '1024px', //MAIN OTHER SIZE! desktop & iPad Pro and UP
			xl: '1440px', // 
			// MAIN TWO SCREEN SIZES IN FIGMA ARE:
			// 1. default: Mobile (using iPhone SE for Figma designs). 
			// 2. lg: 1280px. but we will use 1024px as the breakpoint.
		},
		colors: {
			'cream': '#f2eae4',
			'darkForest': '#2a2d2a',
			'blackBrown': '#211c16',

			'lightPlum': '#d2bfc6',
			'plum': '#6f4e5b',
			'darkPlum': '#544545',

			'pureWhite': '#ffffff',
			'pureBlack': '#000000',
		},
		fontFamily: {
			display: ['Newsreader', 'Goudy Bookletter 1911', 'Times New Roman'],
			sans: ['Work Sans', 'Geneva', 'sans-serif'],
			quote: ['Niconne', 'Monospace','Cursive'],
			code: ['Anonymous Pro','Monospace'],

			/**
			 * Custom Fonts Links:
			 * - Goudy Bookletter 1911: https://fonts.google.com/specimen/Goudy+Bookletter+1911
			 * - Work Sans: https://fonts.google.com/specimen/Work+Sans
			 * - Niconne: https://fonts.google.com/specimen/Niconne
			 * - Anonymous Pro: https://fonts.google.com/specimen/Anonymous+Pro
			 * 
			 * 
			 * Font alternatives: niconne
			 * - Frank Ruhl Libre: https://fonts.google.com/specimen/Frank+Ruhl+Libre
			 * - Newsreader: https://fonts.google.com/specimen/Newsreader
			 * - Lora: https://fonts.google.com/specimen/Lora
			 * - Yrsa: https://fonts.google.com/specimen/Yrsa
			 * - Półtawski Nowy: https://fonts.google.com/specimen/Poltawski+Nowy
			 * - PT Mono: https://fonts.google.com/specimen/PT+Mono
			 * - Xanh Mono: https://fonts.google.com/specimen/Xanh+Mono
			 */
		},
		extend: {
			spacing: {
				'128': '32rem',
				'144': '36rem',
			},
			borderRadius: {
				'4xl': '2rem',
			}
		}
	}
};

export default config;
