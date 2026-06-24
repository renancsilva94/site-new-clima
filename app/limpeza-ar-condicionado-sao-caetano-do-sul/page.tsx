import { Metadata } from 'next'
import App from '@/src/App'

export const metadata: Metadata = {
  title: 'Limpeza de Ar Condicionado em São Caetano do Sul | New Clima',
  description: 'Limpeza profunda de ar condicionado em São Caetano do Sul. (11) 96346-2516.',
  alternates: {
    canonical: 'https://www.newclimaar.com.br/limpeza-ar-condicionado-sao-caetano-do-sul',
  },
  openGraph: {
    title: 'Limpeza de Ar Condicionado em São Caetano do Sul | New Clima',
    description: 'Limpeza profunda de ar condicionado em São Caetano do Sul. (11) 96346-2516.',
    url: 'https://www.newclimaar.com.br/limpeza-ar-condicionado-sao-caetano-do-sul',
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
  return <App pathname="/limpeza-ar-condicionado-sao-caetano-do-sul" />
}
