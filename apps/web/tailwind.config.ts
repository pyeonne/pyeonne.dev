import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      height: {
        header: 'var(--header-height)',
      },
      colors: {
        first: 'var(--first-color)',
        'black-light': 'var(--black-color-light)',
        white: 'var(--white-color)',
        title: 'var(--title-color)',
        text: 'var(--text-color)',
        'text-light': 'var(--text-color-light)',
        body: 'var(--body-color)',
        container: 'var(--container-color)',
      },
      fontFamily: {
        player: ['var(--font-player)'],
        suite: ['var(--font-suite)'],
      },
      fontSize: {
        'display-large': 'var(--display-large)',
        'display-medium': 'var(--display-medium)',
        'display-small': 'var(--display-small)',
        'headline-large': 'var(--headline-large)',
        'headline-medium': 'var(--headline-medium)',
        'headline-small': 'var(--headline-small)',
        'title-large': 'var(--title-large)',
        'title-medium': 'var(--title-medium)',
        'title-small': 'var(--title-small)',
        'label-large': 'var(--label-large)',
        'label-medium': 'var(--label-medium)',
        'label-small': 'var(--label-small)',
        'body-large': 'var(--body-large)',
        'body-medium': 'var(--body-medium)',
        'body-small': 'var(--body-small)',
      },
      lineHeight: {
        44: '44px',
        52: '52px',
        64: '64px',
      },
      zIndex: {
        tooltip: 'var(--z-tooltip)',
        fixed: 'var(--z-fixed)',
      },
      transitionProperty: {
        top: 'top',
        color: 'color',
        width: 'width',
      },
      transitionDuration: {
        400: '400ms',
      },
    },
  },
  plugins: [],
}
export default config
