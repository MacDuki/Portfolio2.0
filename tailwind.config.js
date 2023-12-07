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
			minHeight: {
				300: "300px",
				350: "350px",
				500: "500px",
				560: "560px",
				600: "600px",
				700: "700px",
				1000: "1000px",
			},
			spacing: {
				400: "400px",
				450: "450px",
				500: "500px",
				600: "600px",
				700: "700px",
				800: "800px",
			},
		},
	},
	plugins: [],
};
