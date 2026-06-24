import { Metadata } from 'next'
import BairroView from '@/src/components/BairroView'

export const metadata: Metadata = {
  title: 'Instalação de Ar Condicionado em Chácara Klabin SP | New Clima',
  description:
    'Instalação e manutenção de ar condicionado em Chácara Klabin. Técnicos certificados, obra limpa e garantia por escrito. Visita técnica gratuita. (11) 96346-2516.',
  alternates: {
    canonical: 'https://www.newclimaar.com.br/instalacao-ar-condicionado-chacara-klabin',
  },
  openGraph: {
    title: 'Instalação de Ar Condicionado em Chácara Klabin SP | New Clima',
    description:
      'Instalação e manutenção de ar condicionado em Chácara Klabin. Técnicos certificados, obra limpa e garantia por escrito. Visita técnica gratuita. (11) 96346-2516.',
    url: 'https://www.newclimaar.com.br/instalacao-ar-condicionado-chacara-klabin',
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
      bairro="Chácara Klabin"
      slug="chacara-klabin"
      zona="Zona Sul"
      vizinhos={['Vila Mariana', 'Paraíso', 'Aclimação', 'Saúde', 'Cambuci']}
    />
  )
}
