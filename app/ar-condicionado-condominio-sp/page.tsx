import { Metadata } from 'next'
import App from '@/src/App'

export const metadata: Metadata = {
  title: 'Ar Condicionado para Condomínios em SP | New Clima',
  description: 'Instalação, manutenção e PMOC para condomínios em São Paulo e ABC. (11) 96346-2516.',
  alternates: {
    canonical: 'https://www.newclimaar.com.br/ar-condicionado-condominio-sp',
  },
  openGraph: {
    title: 'Ar Condicionado para Condomínios em SP | New Clima',
    description: 'Instalação, manutenção e PMOC para condomínios em São Paulo e ABC. (11) 96346-2516.',
    url: 'https://www.newclimaar.com.br/ar-condicionado-condominio-sp',
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
  return <App pathname="/ar-condicionado-condominio-sp" />
}
