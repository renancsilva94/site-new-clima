import { Metadata } from 'next'
import App from '@/src/App'

export const metadata: Metadata = {
  title: 'Ar Condicionado Desligando Sozinho em São Paulo | New Clima',
  description: 'Ar condicionado que desliga sozinho em SP? Diagnóstico gratuito e conserto rápido. (11) 96346-2516.',
  alternates: {
    canonical: 'https://www.newclimaar.com.br/ar-condicionado-desligando-sozinho-sp',
  },
  openGraph: {
    title: 'Ar Condicionado Desligando Sozinho em São Paulo | New Clima',
    description: 'Ar condicionado que desliga sozinho em SP? Diagnóstico gratuito e conserto rápido. (11) 96346-2516.',
    url: 'https://www.newclimaar.com.br/ar-condicionado-desligando-sozinho-sp',
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
  return <App pathname="/ar-condicionado-desligando-sozinho-sp" />
}
