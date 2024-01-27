/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,jsx,js}"],
	theme: {
		extend: {
			boxShadow: {
				custom: "24px 29px 28px 0px rgba(0, 0, 0.7, 0.1)",
			},
			colors: {
				"blue-900": "rgb(27,33,43)",
				"blue-700": "rgb(74,89,108)",
				"gray-200": "rgb(182,198,219)",
			},
			backgroundColor: {
				blueBlack: "#5B728F",
			},
			backgroundImage: {
				"code-pattern":
					"url('https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=1789&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
				aboutMeBack: "url('/src/assets/aboutMeBackG.svg')",
			},
			fontFamily: {
				tittle: ["Rubik", "sans-serif"],
			},
			textColor: {
				bgLight: "#dbe6f4",
				bgWaveLight: "#516482",
				bgLightTheme: "#D9D5E1",
			},
			minHeight: {
				280: "280px",
				300: "300px",
				350: "350px",
				500: "500px",
				560: "560px",
				580: "580px",
				600: "600px",
				700: "700px",
				750: "750px",
				770: "770px",
				790: "790px",
				800: "850px",
				810: "810px",
				890: "890px",
				900: "900px",
				910: "910px",
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
