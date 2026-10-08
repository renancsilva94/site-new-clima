import { Metadata } from 'next'
import App from '@/src/App'

export const metadata: Metadata = {
  title: 'New Clima Ar Condicionado | Instalação e Manutenção em SP',
  description: 'New Clima Ar Condicionado: instalação, manutenção, limpeza e PMOC em São Paulo e ABC desde 2018. Técnicos próprios, garantia por escrito e visita gratuita.',
  alternates: {
    canonical: 'https://www.newclimaar.com.br',
  },
  openGraph: {
    title: 'New Clima Ar Condicionado | Instalação e Manutenção em SP',
    description: 'New Clima Ar Condicionado: instalação, manutenção, limpeza e PMOC em São Paulo e ABC desde 2018. Técnicos próprios, garantia por escrito e visita gratuita.',
    url: 'https://www.newclimaar.com.br',
    type: 'website',
    images: [{ url: 'https://www.newclimaar.com.br/images/logo-new-clima.png' }],
  },
  robots: { index: true, follow: true },
}

export default function HomePage() {
  return <App pathname="/" />
}
