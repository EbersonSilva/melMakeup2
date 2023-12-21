// Pagina Global

import { globalStyles } from '@/styles/global' // Importação do css global
import { Container } from '@/styles/styles/app' // Importação da estilização do app
import type { AppProps } from 'next/app'

globalStyles()
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Component {...pageProps} />
    </Container>
  )
}
