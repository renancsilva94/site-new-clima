import { Metadata } from 'next'
import App from '@/src/App'

export const metadata: Metadata = {
  title: 'New Clima Ar | Instalação e Manutenção de Ar Condicionado em SP e ABC Paulista',
  description: 'Instalação e manutenção de ar condicionado em São Paulo e ABC. 7 anos de experiência, técnicos certificados e visita gratuita. Ligue (11) 96346-2516.',
  alternates: {
    canonical: 'https://www.newclimaar.com.br',
  },
  openGraph: {
    title: 'New Clima Ar | Instalação e Manutenção de Ar Condicionado em SP e ABC Paulista',
    description: 'Instalação e manutenção de ar condicionado em São Paulo e ABC. 7 anos de experiência, técnicos certificados e visita gratuita. Ligue (11) 96346-2516.',
    url: 'https://www.newclimaar.com.br',
    type: 'website',
    images: [{ url: 'https://www.newclimaar.com.br/images/logo-new-clima.png' }],
  },
  robots: { index: true, follow: true },
}

export default function HomePage() {
  return <App pathname="/" />
}
