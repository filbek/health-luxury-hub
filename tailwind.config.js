/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#e0f7fa',
          DEFAULT: '#4fc3f7', // sky blue
          dark: '#0288d1',
        },
        secondary: {
          light: '#f1f8e9',
          DEFAULT: '#8bc34a', // light green
          dark: '#558b2f',
        },
        neutral: {
          lightest: '#ffffff',
          light: '#f5f5f5',
          DEFAULT: '#e0e0e0',
          dark: '#9e9e9e',
          darkest: '#212121',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.unsplash.com/photo-1596941248238-0d49dcaa4263?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')",
      },
    },
  },
  plugins: [],
}
