/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/components/**/*.{js,vue,ts}",
        "./app/layouts/**/*.vue",
        "./app/pages/**/*.vue",
        "./app/plugins/**/*.{js,ts}",
        "./app/app.vue",
        "./app/error.vue",
    ],
    theme: {
        extend: {
            colors: {
                background: '#0b0c15', // Deep dark blue/black
                surface: '#151725',
                primary: '#3b82f6', // Bright Blue
                secondary: '#8b5cf6', // Violet/Purple
                accent: '#0dd3bb', // Cyan/Teal accent
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Inter', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
