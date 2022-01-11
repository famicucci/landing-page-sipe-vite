module.exports = {
	content: [
		'./index.html',
		'./src/**/*.{react,js,ts,jsx,tsx}',
		'./components/**/*.{react,js,ts,jsx,tsx}',
	],
	theme: {
		colors: {
			blue: { 500: '#3b82f6', 700: '#1d4ed8' },
			gray: { 100: '#EFEFEF', 500: '#6b7280' },
			white: '#ffffff',
		},
		spacing: {
			1: '8px',
			2: '12px',
			3: '16px',
			4: '24px',
			5: '32px',
			6: '48px',
		},
		extend: {},
	},
	plugins: [],
};
