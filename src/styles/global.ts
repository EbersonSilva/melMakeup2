import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    backgroundColor: '$gray900 !important',
    color: '$gray100 !important',
    '-webkit-font-smoothing': 'antialiased !importante',
  },
})
