// Pagina Global
import { Header } from '@/components/header' // importação do componente Header.
import { globalStyles } from '@/styles/global' // Importação do css global
import type { AppProps } from 'next/app'

globalStyles()
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
    </div>
  )
}
