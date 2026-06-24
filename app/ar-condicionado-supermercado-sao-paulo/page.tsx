import { Metadata } from 'next'
import App from '@/src/App'

export const metadata: Metadata = {
  title: 'Ar Condicionado para Supermercados em São Paulo | New Clima',
  description: 'Instalação e manutenção de ar condicionado para supermercados em SP. PMOC, atendimento emergencial. (11) 96346-2516.',
  alternates: {
    canonical: 'https://www.newclimaar.com.br/ar-condicionado-supermercado-sao-paulo',
  },
  openGraph: {
    title: 'Ar Condicionado para Supermercados em São Paulo | New Clima',
    description: 'Instalação e manutenção de ar condicionado para supermercados em SP. PMOC, atendimento emergencial. (11) 96346-2516.',
    url: 'https://www.newclimaar.com.br/ar-condicionado-supermercado-sao-paulo',
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
  return <App pathname="/ar-condicionado-supermercado-sao-paulo" />
}
