import { Metadata } from 'next'
import App from '@/src/App'

export const metadata: Metadata = {
  title: 'PMOC para Condomínios em SP: Guia para Síndicos | New Clima Blog',
  description: 'PMOC obrigatório para condomínios em SP. Responsabilidades do síndico.',
  alternates: {
    canonical: 'https://www.newclimaar.com.br/blog/pmoc-condominios-sao-paulo',
  },
  openGraph: {
    title: 'PMOC para Condomínios em SP: Guia para Síndicos | New Clima Blog',
    description: 'PMOC obrigatório para condomínios em SP. Responsabilidades do síndico.',
    url: 'https://www.newclimaar.com.br/blog/pmoc-condominios-sao-paulo',
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
  return <App pathname="/blog/pmoc-condominios-sao-paulo" />
}
