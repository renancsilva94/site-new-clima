import { Metadata } from 'next'
import App from '@/src/App'

export const metadata: Metadata = {
  title: 'Ar Condicionado para Data Center e Sala de Servidor em SP | New Clima',
  description: 'Ar condicionado de precisão para data centers e salas de servidor em São Paulo. (11) 96346-2516.',
  alternates: {
    canonical: 'https://www.newclimaar.com.br/ar-condicionado-data-center-sao-paulo',
  },
  openGraph: {
    title: 'Ar Condicionado para Data Center e Sala de Servidor em SP | New Clima',
    description: 'Ar condicionado de precisão para data centers e salas de servidor em São Paulo. (11) 96346-2516.',
    url: 'https://www.newclimaar.com.br/ar-condicionado-data-center-sao-paulo',
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
  return <App pathname="/ar-condicionado-data-center-sao-paulo" />
}
