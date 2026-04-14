/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0f172a',
        dusk: '#1e293b',
        glow: '#6366f1',
        azure: '#2563eb'
      },
      boxShadow: {
        glass: '0 8px 32px rgba(31, 38, 135, 0.22)'
      },
      backgroundImage: {
        'hero-gradient':
          'radial-gradient(circle at 20% 20%, rgba(99,102,241,0.2), transparent 35%), radial-gradient(circle at 80% 10%, rgba(37,99,235,0.18), transparent 40%), radial-gradient(circle at 50% 80%, rgba(14,165,233,0.12), transparent 45%)'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' }
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        gradientShift: 'gradientShift 15s ease infinite'
      }
    }
  },
  plugins: []
}
