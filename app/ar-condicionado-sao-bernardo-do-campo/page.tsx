import { Metadata } from 'next'
import App from '@/src/App'

export const metadata: Metadata = {
  title: 'Ar Condicionado em São Bernardo do Campo | New Clima',
  description: 'Instalação e manutenção de ar condicionado em São Bernardo do Campo. Técnicos especializados. (11) 96346-2516.',
  alternates: {
    canonical: 'https://www.newclimaar.com.br/ar-condicionado-sao-bernardo-do-campo',
  },
  openGraph: {
    title: 'Ar Condicionado em São Bernardo do Campo | New Clima',
    description: 'Instalação e manutenção de ar condicionado em São Bernardo do Campo. Técnicos especializados. (11) 96346-2516.',
    url: 'https://www.newclimaar.com.br/ar-condicionado-sao-bernardo-do-campo',
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
  return <App pathname="/ar-condicionado-sao-bernardo-do-campo" />
}
