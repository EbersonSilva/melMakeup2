// Importação do Stitches para estilização
import { createStitches } from '@stitches/react'

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      white: '#FFF',

      gray900: '#121214',
      gray800: '#202024',
      gray300: '#c4c4c4',
      gray100: '#e1e1e6',

      green500: '#00875f',
      green300: '#00b37e',
    },
  },
})
