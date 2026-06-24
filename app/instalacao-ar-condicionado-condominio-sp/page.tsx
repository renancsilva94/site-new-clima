import { Metadata } from 'next'
import App from '@/src/App'

export const metadata: Metadata = {
  title: 'Instalação de Ar Condicionado em Condomínio em SP | New Clima',
  description: 'Especialistas em instalação de ar condicionado em condomínios de SP. Respeitamos o regimento e garantimos vizinhança tranquila. (11) 96346-2516.',
  alternates: {
    canonical: 'https://www.newclimaar.com.br/instalacao-ar-condicionado-condominio-sp',
  },
  openGraph: {
    title: 'Instalação de Ar Condicionado em Condomínio em SP | New Clima',
    description: 'Especialistas em instalação de ar condicionado em condomínios de SP. Respeitamos o regimento e garantimos vizinhança tranquila. (11) 96346-2516.',
    url: 'https://www.newclimaar.com.br/instalacao-ar-condicionado-condominio-sp',
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
  return <App pathname="/instalacao-ar-condicionado-condominio-sp" />
}
