/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(1)' },
          '100%': { transform: 'translateX(-100%)'},
        },
        slideImg: {
          '0%': { transform: 'translateX(1)' },
          '100%': { transform: 'translateX(-100%)'},
        },
        fadeIn: {
          '0%': { opacity: 1 },
          '70%':{ opactity:0.7},
          '100%': { opacity: 0 },
        },
      },
      backgroundImage: {
        'custom-text': "url('image.png')",
      },
      animation: {
        slideIn: 'slideIn 20s linear infinite',
        slideImg: 'slideImg 20s linear infinite',
        fadeIn: 'fadeIn 1s ease-in-out',
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