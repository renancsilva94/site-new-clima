import { Metadata } from 'next'
import App from '@/src/App'

export const metadata: Metadata = {
  title: 'Assistência Técnica de Ar Condicionado em SP | New Clima',
  description: 'Assistência técnica especializada em ar condicionado em São Paulo e ABC. Conserto, manutenção e instalação com técnicos certificados. (11) 96346-2516.',
  alternates: {
    canonical: 'https://www.newclimaar.com.br/assistencia-tecnica-ar-condicionado-sp',
  },
  openGraph: {
    title: 'Assistência Técnica de Ar Condicionado em SP | New Clima',
    description: 'Assistência técnica especializada em ar condicionado em São Paulo e ABC. Conserto, manutenção e instalação com técnicos certificados. (11) 96346-2516.',
    url: 'https://www.newclimaar.com.br/assistencia-tecnica-ar-condicionado-sp',
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
  return <App pathname="/assistencia-tecnica-ar-condicionado-sp" />
}
