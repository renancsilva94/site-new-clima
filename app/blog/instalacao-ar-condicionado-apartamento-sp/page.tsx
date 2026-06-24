import { Metadata } from 'next'
import App from '@/src/App'

export const metadata: Metadata = {
  title: 'Instalação de Ar Condicionado em Apartamento em SP | New Clima Blog',
  description: 'Guia completo para instalar ar condicionado em apartamento em São Paulo.',
  alternates: {
    canonical: 'https://www.newclimaar.com.br/blog/instalacao-ar-condicionado-apartamento-sp',
  },
  openGraph: {
    title: 'Instalação de Ar Condicionado em Apartamento em SP | New Clima Blog',
    description: 'Guia completo para instalar ar condicionado em apartamento em São Paulo.',
    url: 'https://www.newclimaar.com.br/blog/instalacao-ar-condicionado-apartamento-sp',
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
  return <App pathname="/blog/instalacao-ar-condicionado-apartamento-sp" />
}
