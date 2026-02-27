/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                concrete: '#1A1A1A',
                electricYellow: '#f4f5f0',
                hotOrange: '#FF4D00',
                white: '#F8F8F8',
                accent: '#D3F436' // classic pickleball neon green/yellow
            },
            fontFamily: {
                heading: ['Anton', 'sans-serif'],
                drama: ['Bebas Neue', 'sans-serif'],
                mono: ['Roboto Mono', 'monospace'],
                sans: ['Inter', 'sans-serif'],
            },
            animation: {
                marquee: 'marquee 20s linear infinite',
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-50%)' },
                }
            },
        },
    },
    plugins: [],
}
