import { Metadata } from 'next'
import App from '@/src/App'

export const metadata: Metadata = {
  title: 'Instalação de Ar Condicionado em Vila Mariana SP | New Clima',
  description: 'Instalação e manutenção de ar condicionado em Vila Mariana. Sede própria no bairro, técnicos certificados, obra limpa e garantia por escrito. (11) 96346-2516.',
  alternates: {
    canonical: 'https://www.newclimaar.com.br/instalacao-ar-condicionado-vila-mariana',
  },
  openGraph: {
    title: 'Instalação de Ar Condicionado em Vila Mariana SP | New Clima',
    description: 'Sede própria em Vila Mariana. Técnicos certificados, obra limpa e garantia por escrito. (11) 96346-2516.',
    url: 'https://www.newclimaar.com.br/instalacao-ar-condicionado-vila-mariana',
    type: 'website',
    images: [{ url: 'https://www.newclimaar.com.br/images/logo-new-clima.png' }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
}

export default function Page() {
  return <App pathname="/instalacao-ar-condicionado-vila-mariana" />
}
