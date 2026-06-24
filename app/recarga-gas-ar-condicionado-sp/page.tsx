import { Metadata } from 'next'
import App from '@/src/App'

export const metadata: Metadata = {
  title: 'Recarga de Gás de Ar Condicionado em São Paulo | New Clima',
  description: 'Recarga de gás R410A e R32 em SP com verificação de vazamento. Técnicos certificados. (11) 96346-2516.',
  alternates: {
    canonical: 'https://www.newclimaar.com.br/recarga-gas-ar-condicionado-sp',
  },
  openGraph: {
    title: 'Recarga de Gás de Ar Condicionado em São Paulo | New Clima',
    description: 'Recarga de gás R410A e R32 em SP com verificação de vazamento. Técnicos certificados. (11) 96346-2516.',
    url: 'https://www.newclimaar.com.br/recarga-gas-ar-condicionado-sp',
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
  return <App pathname="/recarga-gas-ar-condicionado-sp" />
}
