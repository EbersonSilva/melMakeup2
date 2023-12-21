// Pagina Global
import { globalStyles } from '@/styles/global' // Importação do css global
import type { AppProps } from 'next/app'

globalStyles()
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
