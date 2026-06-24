import { Metadata } from 'next'
import App from '@/src/App'

export const metadata: Metadata = {
  title: 'Instalação de Ar Condicionado Piso-Teto em São Paulo | New Clima',
  description: 'Instalação de piso-teto em SP. Ideal para ambientes com pé-direito alto. (11) 96346-2516.',
  alternates: {
    canonical: 'https://www.newclimaar.com.br/instalacao-ar-condicionado-piso-teto-sp',
  },
  openGraph: {
    title: 'Instalação de Ar Condicionado Piso-Teto em São Paulo | New Clima',
    description: 'Instalação de piso-teto em SP. Ideal para ambientes com pé-direito alto. (11) 96346-2516.',
    url: 'https://www.newclimaar.com.br/instalacao-ar-condicionado-piso-teto-sp',
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
  return <App pathname="/instalacao-ar-condicionado-piso-teto-sp" />
}
