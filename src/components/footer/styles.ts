import { styled } from '@stitches/react'

export const ContainerFooter = styled('footer', {
  background: '#202024',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: '4rem',
  gap: 8,
  
})

export const SocialMedia = styled('div',{
  display: 'flex',
  gap: 8,
})

export const NavLinks = styled('div', {
  display: 'flex',
  gap: 8,
  alignItems: 'center',
  
  a:{
    textDecoration: 'none',
    color: '#e1e1e6',
    

  }
})