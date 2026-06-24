import { Metadata } from 'next'
import App from '@/src/App'

export const metadata: Metadata = {
  title: 'Ar Condicionado Faz Mal à Saúde? Verdades e Mitos | New Clima Blog',
  description: 'Ar condicionado faz mal à saúde? Depende da manutenção. Saiba como evitar problemas respiratórios.',
  alternates: {
    canonical: 'https://www.newclimaar.com.br/blog/ar-condicionado-faz-mal-saude',
  },
  openGraph: {
    title: 'Ar Condicionado Faz Mal à Saúde? Verdades e Mitos | New Clima Blog',
    description: 'Ar condicionado faz mal à saúde? Depende da manutenção. Saiba como evitar problemas respiratórios.',
    url: 'https://www.newclimaar.com.br/blog/ar-condicionado-faz-mal-saude',
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
  return <App pathname="/blog/ar-condicionado-faz-mal-saude" />
}
