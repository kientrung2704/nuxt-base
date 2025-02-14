/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./components/**/*.{js,vue,ts}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./nuxt.config.{js,ts}",
		"./app.vue",
	],
	theme: {
		extend: {
			colors: {
				primary: "rgb(12, 130, 254)", // 自訂主題色
				lightPrimary: "rgb(246, 250, 253)", // login input 背景色
				secondary: "rgb(241, 241, 245)",
			},
			screens: {
				xs: "375px",
			},
			animation: {
				"spin-slow": "spin 1.5s linear infinite",
			},
			spacing: {
				"size-button-01": "var(--size-l)",
				"size-button-02": "var(--size-m)",
				"size-dropdown": "var(--size-xl)",
				"size-input": "var(--size-l)",
				"editor-icon": "var(--padding-icon-editor)",
			},
		},
	},
	plugins: [],
};
