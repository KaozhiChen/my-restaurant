/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        back: '#f1edee',
        glass: 'rgba(255,255,255,0.15)',
      },
    },
  },
  plugins: [],
  screens: {
    ss: '480px',
    sm: ' 600px',
    md: '768px',
    lg: '976px',
    xl: '1200px',
  },
};
