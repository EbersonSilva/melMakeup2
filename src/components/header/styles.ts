import { styled } from '@stitches/react'

export const HeaderContainer = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  border: '1px solid red',
  color: '$gray100',
  padding: '1.5rem',
  position: 'fixed',
  width: '100%',
})

export const HeaderLogo = styled('span', {
  fontSize: '1.5rem',
  color: '$gray100',
  fontWeight: 'bold',
})

export const HeaderNav = styled('nav', {
  ul: {
    display: 'flex',
    alignItems: 'center',
    listStyle: 'none',
    gap: '4rem',
  },

  a: {
    textDecoration: 'none',
    color: '$gray100',
  },
})
