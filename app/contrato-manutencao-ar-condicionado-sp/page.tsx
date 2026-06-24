import { Metadata } from 'next'
import App from '@/src/App'

export const metadata: Metadata = {
  title: 'Contrato de Manutenção de Ar Condicionado em São Paulo | New Clima',
  description: 'Contratos mensais, trimestrais ou semestrais de manutenção de ar condicionado em SP. (11) 96346-2516.',
  alternates: {
    canonical: 'https://www.newclimaar.com.br/contrato-manutencao-ar-condicionado-sp',
  },
  openGraph: {
    title: 'Contrato de Manutenção de Ar Condicionado em São Paulo | New Clima',
    description: 'Contratos mensais, trimestrais ou semestrais de manutenção de ar condicionado em SP. (11) 96346-2516.',
    url: 'https://www.newclimaar.com.br/contrato-manutencao-ar-condicionado-sp',
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
  return <App pathname="/contrato-manutencao-ar-condicionado-sp" />
}
