import { Metadata } from 'next'
import App from '@/src/App'

export const metadata: Metadata = {
  title: 'Instalação de Multi Split em São Paulo | New Clima',
  description: 'Instalação de multi split em SP — vários cômodos, uma condensadora. (11) 96346-2516.',
  alternates: {
    canonical: 'https://www.newclimaar.com.br/instalacao-multi-split-sp',
  },
  openGraph: {
    title: 'Instalação de Multi Split em São Paulo | New Clima',
    description: 'Instalação de multi split em SP — vários cômodos, uma condensadora. (11) 96346-2516.',
    url: 'https://www.newclimaar.com.br/instalacao-multi-split-sp',
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
  return <App pathname="/instalacao-multi-split-sp" />
}
