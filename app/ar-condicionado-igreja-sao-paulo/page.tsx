import { Metadata } from 'next'
import App from '@/src/App'

export const metadata: Metadata = {
  title: 'Ar Condicionado para Igrejas e Templos em São Paulo | New Clima',
  description: 'Instalação de ar condicionado para igrejas e templos em SP e ABC. Sistemas silenciosos. (11) 96346-2516.',
  alternates: {
    canonical: 'https://www.newclimaar.com.br/ar-condicionado-igreja-sao-paulo',
  },
  openGraph: {
    title: 'Ar Condicionado para Igrejas e Templos em São Paulo | New Clima',
    description: 'Instalação de ar condicionado para igrejas e templos em SP e ABC. Sistemas silenciosos. (11) 96346-2516.',
    url: 'https://www.newclimaar.com.br/ar-condicionado-igreja-sao-paulo',
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
  return <App pathname="/ar-condicionado-igreja-sao-paulo" />
}
