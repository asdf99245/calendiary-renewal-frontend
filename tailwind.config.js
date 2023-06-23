/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        primary_gradient: 'linear-gradient(to bottom, #9969BF, #BF69B9)',
      },
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        primary_variant: 'rgb(var(--color-primary-variant) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        secondary_variant: 'rgb(var(--color-secondary-variant) / <alpha-value>)',
        error: 'rgb(var(--color-error) / <alpha-value>)',
        kakao_yellow: 'FEE500',
        naver_green: '03C75A',
        bg: {
          primary: 'rgb(var(--color-bg-primary) / <alpha-value>)',
          secondary: 'rgb(var(--color-bg-secondary) / <alpha-value>)',
          tertiary: 'rgb(var(--color-bg-tertiary) / <alpha-value>)',
        },
        text: {
          primary: 'rgb(var(--color-text-primary) / <alpha-value>)',
          secondary: 'rgb(var(--color-text-secondary) / <alpha-value>)',
          tertiary: 'rgb(var(--color-text-tertiary) / <alpha-value>)',
        },
        border: {
          primary: 'rgb(var(--color-border-primary) / <alpha-value>)',
          secondary: 'rgb(var(--color-border-secondary) / <alpha-value>)',
        },
        palette: {
          white: '#FFFFFF',
          black: '#000000',
          yellow: '#DC9B18',
          blue: '#186ADC',
          green: '#18DC74',
          red: '#EA553E',
        },
      },
    },
  },
  plugins: [],
};
