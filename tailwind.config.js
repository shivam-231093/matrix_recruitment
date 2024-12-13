/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 2s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(1)' },
          '100%': { transform: 'translateX(-100%)'},
        },
      },
      backgroundImage: {
        'custom-text': "url('image.png')",
      },
      animation: {
        slideIn: 'slideIn 20s linear infinite',
      },
    },
  },
  plugins: [function ({ addUtilities }) {
    addUtilities({
      '.text-stroke': {
        '-webkit-text-stroke': '1px red',
      },
      '.text-stroke-2': {
        '-webkit-text-stroke': '2px black',
      },
      'x-hidden':{
        '-webkit-scrollbars':'none'
      },
      '.clip-text' :{
        '-webkit-background-clip':'text' 
      },
      '.text-stroke-w': {
        '-webkit-text-stroke': '0.5px white',
      },
    });
  },
]
}