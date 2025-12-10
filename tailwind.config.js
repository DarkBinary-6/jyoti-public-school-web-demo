/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#003366', // Navy Blue
        primaryDark: '#001f3f', // Darker Navy
        secondary: '#0ea5e9', // Sky Blue
        secondaryDark: '#0284c7', // Darker Sky Blue
        accent: '#f0f9ff', // Lightest Sky/White
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        '3d': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 20px 25px -5px rgba(0, 0, 0, 0.1)',
        'button': '0 4px 0 rgb(12, 74, 110)', // Navy shadow for buttons
        'card': '0 10px 0 rgba(0,0,0,0.05)',
        'glow': '0 0 15px rgba(14, 165, 233, 0.5)',
      },
      keyframes: {
         'float-3d': {
            '0%, 100%': { transform: 'translateY(0) rotateX(0)' },
            '50%': { transform: 'translateY(-15px) rotateX(5deg)' },
         },
         'fade-in-up': {
            '0%': { opacity: '0', transform: 'translateY(30px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
         },
         'pulse-slow': {
            '0%, 100%': { opacity: '1' },
            '50%': { opacity: '.8' },
         },
         'slide-in-right': {
            '0%': { opacity: '0', transform: 'translateX(50px)' },
            '100%': { opacity: '1', transform: 'translateX(0)' },
         },
         'pop-in': {
            '0%': { opacity: '0', transform: 'scale(0.9)' },
            '100%': { opacity: '1', transform: 'scale(1)' },
         }
      },
      animation: {
        'float-3d': 'float-3d 6s ease-in-out infinite',
        'fade-in-up': 'fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-slow': 'pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slide-in-right': 'slide-in-right 0.8s ease-out forwards',
        'pop-in': 'pop-in 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
      }
    },
  },
  plugins: [],
}