import { join } from 'path'
import type { Config } from 'tailwindcss'
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import { skeleton } from '@skeletonlabs/tw-plugin';
import { qll_theme } from './src/qll_theme'

export default {
  darkMode: 'selector',
  content: ['./src/**/*.{html,js,svelte,ts}', join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
  theme: {
    extend: {
      fontFamily: {
        'sans': 'Overpass, Helvetica, sans-serif',
        'serif': '"Kindersley Grand Arcade", "Times New Roman", serif',
        'brand': 'HammersmithOne, Arial'
      },
    },
  },
  plugins: [
    forms,
    typography,
    skeleton({
      themes: {
        custom: [
          qll_theme,
        ],
      },
    }),
  ],
} satisfies Config;
