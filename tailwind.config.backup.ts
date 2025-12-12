/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#f06e8e',
          blue: '#4581e1',
          purple: '#b044b0',
          green: '#46a12f',
          yellow: '#f98d00',
          cyan: '#199bb6',
          red: '#dd1818',
        },
      },
      boxShadow: {
        card: '0 18px 45px rgba(15, 23, 42, 0.16)',
      },
      borderRadius: {
        xl: '1rem',
      },
    },
  },
  plugins: [],
}



// import type { Config } from 'tailwindcss'
// // import type {  } from '@nuxtjs/tailwindcss'

// export default {
//   darkMode: 'class',
//   theme: {
//     extend: {
//       colors: {
//         brand: {
//           DEFAULT: '#f06e8e',
//           blue: '#4581e1',
//           purple: '#b044b0',
//           green: '#46a12f',
//           yellow: '#f98d00',
//           cyan: '#199bb6',
//           red: '#dd1818',
//         },
//       },
//       boxShadow: {
//         card: '0 18px 45px rgba(15, 23, 42, 0.16)',
//       },
//       borderRadius: {
//         xl: '1rem',
//       },
//     },
//   },
//   plugins: [],
// } satisfies Config

