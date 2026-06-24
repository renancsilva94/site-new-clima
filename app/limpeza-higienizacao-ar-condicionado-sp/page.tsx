import { Metadata } from 'next'
import App from '@/src/App'

export const metadata: Metadata = {
  title: 'Limpeza e Higienização de Ar Condicionado em São Paulo | New Clima',
  description: 'Limpeza profunda e higienização de ar condicionado em SP e ABC. Bactericida profissional, eliminação de fungos e ácaros. (11) 96346-2516.',
  alternates: {
    canonical: 'https://www.newclimaar.com.br/limpeza-higienizacao-ar-condicionado-sp',
  },
  openGraph: {
    title: 'Limpeza e Higienização de Ar Condicionado em São Paulo | New Clima',
    description: 'Limpeza profunda e higienização de ar condicionado em SP e ABC. Bactericida profissional, eliminação de fungos e ácaros. (11) 96346-2516.',
    url: 'https://www.newclimaar.com.br/limpeza-higienizacao-ar-condicionado-sp',
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
  return <App pathname="/limpeza-higienizacao-ar-condicionado-sp" />
}
