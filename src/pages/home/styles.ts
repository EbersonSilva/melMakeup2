import { styled } from '@stitches/react'

export const Container = styled('main', {
  maxWidth: 1200,
  margin: 'auto',
  // border: '1px solid yellow',
})

export const Section = styled('section', {
  display: 'flex',
  alignItems: 'center',
  margin: 'auto',
  gap: '5rem',
  height: '100vh',
  // border: '1px solid red',
})
export const Hero = styled('div', {
  maxWidth: 480,
  padding: '2rem',
  // border: '1px solid red',

  h1: {
    fontSize: '3rem',
  },
  text: {
    fontSize: '1.5rem',
  },
})
export const Preview = styled('div', {
  // border: '1px solid red',
})
