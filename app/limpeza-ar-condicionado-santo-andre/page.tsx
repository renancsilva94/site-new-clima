import { Metadata } from 'next'
import App from '@/src/App'

export const metadata: Metadata = {
  title: 'Limpeza de Ar Condicionado em Santo André | New Clima',
  description: 'Limpeza profunda de ar condicionado em Santo André. Remove fungos, ácaros e mau cheiro. (11) 96346-2516.',
  alternates: {
    canonical: 'https://www.newclimaar.com.br/limpeza-ar-condicionado-santo-andre',
  },
  openGraph: {
    title: 'Limpeza de Ar Condicionado em Santo André | New Clima',
    description: 'Limpeza profunda de ar condicionado em Santo André. Remove fungos, ácaros e mau cheiro. (11) 96346-2516.',
    url: 'https://www.newclimaar.com.br/limpeza-ar-condicionado-santo-andre',
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
  return <App pathname="/limpeza-ar-condicionado-santo-andre" />
}
