import { styled } from '@stitches/react'

export const ContainerTestimonials = styled('section', {
  display: 'flex',
  height: '100vh',
  // border: '1px solid blue',
})
export const HomeTestimonials = styled('div', {
  margin: 'auto',
  //   border: '1px solid yellow',
})

export const Description = styled('div', {
  background: '#202024',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  padding: '2rem',
  borderRadius: 12,

  img: {
    objectFit: 'fill',
  },
})
