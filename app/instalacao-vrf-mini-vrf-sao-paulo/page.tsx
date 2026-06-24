import { Metadata } from 'next'
import App from '@/src/App'

export const metadata: Metadata = {
  title: 'Instalação de Sistema VRF e Mini VRF em São Paulo | New Clima',
  description: 'Especialistas em sistemas VRF e Mini VRF em São Paulo e ABC. Projetos para residências de alto padrão e edifícios corporativos. (11) 96346-2516.',
  alternates: {
    canonical: 'https://www.newclimaar.com.br/instalacao-vrf-mini-vrf-sao-paulo',
  },
  openGraph: {
    title: 'Instalação de Sistema VRF e Mini VRF em São Paulo | New Clima',
    description: 'Especialistas em sistemas VRF e Mini VRF em São Paulo e ABC. Projetos para residências de alto padrão e edifícios corporativos. (11) 96346-2516.',
    url: 'https://www.newclimaar.com.br/instalacao-vrf-mini-vrf-sao-paulo',
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
  return <App pathname="/instalacao-vrf-mini-vrf-sao-paulo" />
}
