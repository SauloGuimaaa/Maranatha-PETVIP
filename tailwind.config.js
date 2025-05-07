/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        // Cores personalizadas baseadas no seu projeto
        colors: {
          'maranatha-blue': '#063c8f',
          'maranatha-red': '#cf0707',
          'maranatha-beige': '#f5eee6',
          'maranatha-beige-dark': '#e8d9c5',
        },
        // Gradientes personalizados
        backgroundImage: {
          'blue-gradient': 'linear-gradient(135deg, #063c8f 0%, #0a56d6 100%)',
          'beige-gradient': 'linear-gradient(to bottom, #f5eee6, #e8d9c5)',
        },
        // Animação personalizada
        animation: {
          'fade-in': 'fadeIn 1s ease-out forwards',
        },
        keyframes: {
          fadeIn: {
            'from': { opacity: 0, transform: 'translateY(20px)' },
            'to': { opacity: 1, transform: 'translateY(0)' },
          },
        },
        // Box shadow personalizado
        boxShadow: {
          'maranatha': '0 4px 15px rgba(0, 0, 0, 0.1)',
          'maranatha-lg': '0 10px 30px rgba(0, 0, 0, 0.08)',
          'maranatha-red': '0 4px 15px rgba(207, 7, 7, 0.4)',
        }
      },
    },
    plugins: [
      // Plugin para suporte a formulários (opcional)
      require('@tailwindcss/forms'),
    ],
  }