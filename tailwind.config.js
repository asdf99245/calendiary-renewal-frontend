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
      fontSize: {
        heading1: [
          '2.375rem',
          {
            fontWeight: '700',
            lineHeight: '3.063rem',
            letterSpacing: '-0.02em',
          },
        ],
        heading2: [
          '2.125rem',
          {
            fontWeight: '700',
            lineHeight: '2.75rem',
            letterSpacing: '-0.02em',
          },
        ],
        heading3: [
          '1.875rem',
          {
            fontWeight: '700',
            lineHeight: '2.438rem',
            letterSpacing: '-0.02em',
          },
        ],
        heading4: [
          '1.625rem',
          {
            fontWeight: '700',
            lineHeight: '2.125rem',
            letterSpacing: '-0.02em',
          },
        ],
        heading5: [
          '1.375rem',
          {
            fontWeight: '700',
            lineHeight: '1.813rem',
            letterSpacing: '-0.02em',
          },
        ],
        heading6: [
          '1.125rem',
          {
            fontWeight: '700',
            lineHeight: '1.688rem',
            letterSpacing: '-0.02em',
          },
        ],
        body1: [
          '1rem',
          {
            fontWeight: '700',
            lineHeight: '1.5rem',
            letterSpacing: '0',
          },
        ],
        body2: [
          '0.875rem',
          {
            fontWeight: '700',
            lineHeight: '1.313rem',
            letterSpacing: '0',
          },
        ],
        caption: [
          '0.75rem',
          {
            fontWeight: '700',
            lineHeight: '1.125rem',
            letterSpacing: '0',
          },
        ],
        button: [
          '1rem',
          {
            fontWeight: '700',
            lineHeight: '1rem',
            letterSpacing: '0',
          },
        ],
      },
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
