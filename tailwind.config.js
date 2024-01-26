/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,ts,tsx}',
    './index.html',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/assets/images/hero-pattern.svg')",
        'footer-texture': "url('/src/assets/images/footer-texture.png')",
      }
    }
  },
  plugins: [],
}

