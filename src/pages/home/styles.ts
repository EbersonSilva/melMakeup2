import { styled, Heading, Text } from '@ignite-ui/react'

export const Container = styled('div', {
  maxWidth: 1200,
  display: 'flex',
  alignItems: 'center',
  margin: 'auto',
  gap: '$20',
  height: '100vh',
})
export const Hero = styled('div', {
  maxWidth: 480,
  padding: '0 $10',

  [`${Heading}`]: {
    '@media(max-width: 600px': {
      fontSize: '$6xl',
    },
  },

  [`${Text}`]: {
    marginTop: '$2',
    color: '$gray200',
  },
})
export const Preview = styled('div', {})
