const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["avenir", "sans-serif"],
        serif: ["philosopher", "serif"],
        body: ["avenir", "sans-serif"],
        caveat: ['Caveat', 'cursive'],
        ShadowsIntoL: ["Shadows Into Light", "cursive"]
      },

      colors: {
        customYellow: '#fcfbc1',
        customBrown:'#7c2602',
        customBlue:'#0b78bd',
        lightGray: '#ededed'
      },
      animation: {
        'spin-slow-reverse': 'spin-reverse 5s linear infinite',
        slideInLeft: 'slideInLeft 0.5s ease-out',
        slideInRight: 'slideInRight 0.5s ease-out',
      },
      keyframes: {
        'spin-reverse': {
          from: { transform: 'rotate(-360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        pulseOpacity: {
          '0%, 100%': { opacity: '0' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        pulseOpacity: 'pulseOpacity 2s ease-in-out infinite',
      },
      
    },
  },
  plugins: [],
})