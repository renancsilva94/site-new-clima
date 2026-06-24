import { Metadata } from 'next'
import App from '@/src/App'

export const metadata: Metadata = {
  title: 'Higienização de Ar Condicionado em São Paulo | New Clima',
  description: 'Higienização profissional com bactericida certificado em SP. Remove fungos e bactérias. Visita gratuita. (11) 96346-2516.',
  alternates: {
    canonical: 'https://www.newclimaar.com.br/higienizacao-ar-condicionado-sp',
  },
  openGraph: {
    title: 'Higienização de Ar Condicionado em São Paulo | New Clima',
    description: 'Higienização profissional com bactericida certificado em SP. Remove fungos e bactérias. Visita gratuita. (11) 96346-2516.',
    url: 'https://www.newclimaar.com.br/higienizacao-ar-condicionado-sp',
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
  return <App pathname="/higienizacao-ar-condicionado-sp" />
}
