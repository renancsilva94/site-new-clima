import { Metadata } from 'next'
import App from '@/src/App'

export const metadata: Metadata = {
  title: 'Empresa de Ar Condicionado em São Paulo | New Clima',
  description: 'New Clima — empresa especializada em ar condicionado em SP e ABC desde 2018. Instalação, manutenção, higienização e PMOC com garantia por escrito.',
  alternates: {
    canonical: 'https://www.newclimaar.com.br/empresa-ar-condicionado-sp',
  },
  openGraph: {
    title: 'Empresa de Ar Condicionado em São Paulo | New Clima',
    description: 'New Clima — empresa especializada em ar condicionado em SP e ABC desde 2018. Instalação, manutenção, higienização e PMOC com garantia por escrito.',
    url: 'https://www.newclimaar.com.br/empresa-ar-condicionado-sp',
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
  return <App pathname="/empresa-ar-condicionado-sp" />
}
