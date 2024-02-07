/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				body: "rgb(var(--color-bg))",
				"box-bg": "rgb(var(--color-box))",
				"box-shadow": "rgb(var(--box-sd))",
				"box-border": "rgb(var(--box-border))",
				primary: "#5d93fd",
				"heading-1": "rgb(var(--heading-1))",
				"heading-2": "rgb(var(--heading-2))",
				"heading-3": "rgb(var(--heading-3))",
			},
			screens:{
				midmd:"880px"
			}
		},
	},
	plugins: [
		require("tailwindcss-animate"),
		require('tailwind-typewriter')({
            wordsets: {
                welcome: {
                    words: ['Your new budget buddy!', 'Soon...'],
                    repeat: -1,
					eraseSpeed: 0.1,
					writeSpeed: 0.1,
					caretWidth: '5px',
					caretColor: '#5d93fd',
					blinkSpeed: 1
                }
            }
        })
	],
}
