import { Metadata } from 'next'
import App from '@/src/App'

export const metadata: Metadata = {
  title: 'Central de Água Gelada em São Paulo — Instalação e Manutenção | New Clima',
  description: 'Instalação, manutenção e PMOC de central de água gelada em SP e ABC. (11) 96346-2516.',
  alternates: {
    canonical: 'https://www.newclimaar.com.br/central-agua-gelada-sao-paulo',
  },
  openGraph: {
    title: 'Central de Água Gelada em São Paulo — Instalação e Manutenção | New Clima',
    description: 'Instalação, manutenção e PMOC de central de água gelada em SP e ABC. (11) 96346-2516.',
    url: 'https://www.newclimaar.com.br/central-agua-gelada-sao-paulo',
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
  return <App pathname="/central-agua-gelada-sao-paulo" />
}
