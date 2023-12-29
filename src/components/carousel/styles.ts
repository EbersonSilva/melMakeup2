import { styled } from '@stitches/react'

export const HomeCarousel = styled('section', {
  display: 'flex',

  border: '1px solid red',
  margin: 'auto',
  height: '100vh',
  width: '100%',
})

export const Photo = styled('div', {
  // background: 'linear-gradient(100deg, #lea483 0%, #7465d4 100%)',

  borderRadius: 8,
  position: 'relative',
  overflow: 'hidden',
  border: '1px solid red',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  img: {
    objectFit: 'fill',
    border: '1px solid blue',
  },
})
