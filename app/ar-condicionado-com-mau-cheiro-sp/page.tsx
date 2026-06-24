import { Metadata } from 'next'
import App from '@/src/App'

export const metadata: Metadata = {
  title: 'Ar Condicionado com Mau Cheiro em São Paulo | New Clima',
  description: 'Ar condicionado com cheiro de mofo em SP? Limpeza profunda elimina a causa. (11) 96346-2516.',
  alternates: {
    canonical: 'https://www.newclimaar.com.br/ar-condicionado-com-mau-cheiro-sp',
  },
  openGraph: {
    title: 'Ar Condicionado com Mau Cheiro em São Paulo | New Clima',
    description: 'Ar condicionado com cheiro de mofo em SP? Limpeza profunda elimina a causa. (11) 96346-2516.',
    url: 'https://www.newclimaar.com.br/ar-condicionado-com-mau-cheiro-sp',
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
  return <App pathname="/ar-condicionado-com-mau-cheiro-sp" />
}
