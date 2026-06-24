import { Metadata } from 'next'
import App from '@/src/App'

export const metadata: Metadata = {
  title: 'Instalação de Ar Condicionado Split em São Paulo | New Clima',
  description: 'Instalação de split em SP com obra limpa, infraestrutura completa e garantia de 1 ano. (11) 96346-2516.',
  alternates: {
    canonical: 'https://www.newclimaar.com.br/instalacao-ar-condicionado-split-sp',
  },
  openGraph: {
    title: 'Instalação de Ar Condicionado Split em São Paulo | New Clima',
    description: 'Instalação de split em SP com obra limpa, infraestrutura completa e garantia de 1 ano. (11) 96346-2516.',
    url: 'https://www.newclimaar.com.br/instalacao-ar-condicionado-split-sp',
    type: 'website',
    images: [{ url: 'https://www.newclimaar.com.br/images/logo-new-clima.png' }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function Page() {
  return <App pathname="/instalacao-ar-condicionado-split-sp" />
}
