/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      height: {
        '560px': '560px',
      },
      colors: {
        'dark': '#001a1a',
        'green': '#008080',
        'light': '#E6F2F2',
        'white50': 'rgba(255, 255, 255, 0.5)',
        'white90': 'rgba(255, 255, 255, 0.9)',
      }
    },
  },
  plugins: [],
}
