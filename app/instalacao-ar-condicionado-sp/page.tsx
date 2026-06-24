import { Metadata } from 'next'
import App from '@/src/App'

export const metadata: Metadata = {
  title: 'Instalação de Ar Condicionado em São Paulo | New Clima',
  description: 'Serviço completo de instalação de ar condicionado em São Paulo e ABC. Split, multi-split, VRF e cassete. Técnicos certificados e garantia por escrito. (11) 96346-2516.',
  alternates: {
    canonical: 'https://www.newclimaar.com.br/instalacao-ar-condicionado-sp',
  },
  openGraph: {
    title: 'Instalação de Ar Condicionado em São Paulo | New Clima',
    description: 'Serviço completo de instalação de ar condicionado em São Paulo e ABC. Split, multi-split, VRF e cassete. Técnicos certificados e garantia por escrito. (11) 96346-2516.',
    url: 'https://www.newclimaar.com.br/instalacao-ar-condicionado-sp',
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
  return <App pathname="/instalacao-ar-condicionado-sp" />
}
