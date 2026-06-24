import { Metadata } from 'next'
import BairroView from '@/src/components/BairroView'

export const metadata: Metadata = {
  title: 'Instalação de Ar Condicionado em Vila Maria SP | New Clima',
  description:
    'Instalação e manutenção de ar condicionado em Vila Maria. Técnicos certificados, obra limpa e garantia por escrito. Visita técnica gratuita. (11) 96346-2516.',
  alternates: {
    canonical: 'https://www.newclimaar.com.br/instalacao-ar-condicionado-vila-maria',
  },
  openGraph: {
    title: 'Instalação de Ar Condicionado em Vila Maria SP | New Clima',
    description:
      'Instalação e manutenção de ar condicionado em Vila Maria. Técnicos certificados, obra limpa e garantia por escrito. Visita técnica gratuita. (11) 96346-2516.',
    url: 'https://www.newclimaar.com.br/instalacao-ar-condicionado-vila-maria',
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
  return (
    <BairroView
      bairro="Vila Maria"
      slug="vila-maria"
      zona="Zona Norte"
      vizinhos={['Santana', 'Vila Guilherme', 'Tucuruvi', 'Casa Verde', 'Mandaqui']}
    />
  )
}
