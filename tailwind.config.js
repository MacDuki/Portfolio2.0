/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,jsx,js}"],
	theme: {
		extend: {
			fontFamily: {
				tittle: ["Rubik", "sans-serif"],
			},
			textColor: {
				bgLight: "#dbe6f4",
				bgWaveLight: "#516482",
			},
		},
	},
	plugins: [],
};
