import { styled } from '@stitches/react'

export const ContainerCarousel = styled('section', {
  display: 'flex',
  height: '100vh',
})

export const HomeCarousel = styled('div', {
  margin: 'auto',
})

export const Photo = styled('div', {
  background: '#202024',
  borderRadius: 12,
  position: 'relative',
  overflow: 'hidden',
  // border: '1px solid red',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  img: {
    objectFit: 'fill',
    // border: '1px solid blue',
  },
})
