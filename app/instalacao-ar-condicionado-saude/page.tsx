import { Metadata } from 'next'
import BairroView from '@/src/components/BairroView'

export const metadata: Metadata = {
  title: 'Instalação de Ar Condicionado em Saúde SP | New Clima',
  description:
    'Instalação e manutenção de ar condicionado em Saúde. Técnicos certificados, obra limpa e garantia por escrito. Visita técnica gratuita. (11) 96346-2516.',
  alternates: {
    canonical: 'https://www.newclimaar.com.br/instalacao-ar-condicionado-saude',
  },
  openGraph: {
    title: 'Instalação de Ar Condicionado em Saúde SP | New Clima',
    description:
      'Instalação e manutenção de ar condicionado em Saúde. Técnicos certificados, obra limpa e garantia por escrito. Visita técnica gratuita. (11) 96346-2516.',
    url: 'https://www.newclimaar.com.br/instalacao-ar-condicionado-saude',
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
      bairro="Saúde"
      slug="saude"
      zona="Zona Sul"
      vizinhos={['Vila Mariana', 'Ipiranga', 'Cursino', 'Jabaquara', 'Vila Clementino']}
    />
  )
}
