import { Metadata } from 'next'
import App from '@/src/App'

export const metadata: Metadata = {
  title: 'Técnico de Ar Condicionado em São Paulo | New Clima',
  description: 'Técnicos certificados de ar condicionado em São Paulo e ABC. Instalação, manutenção e conserto com atendimento em até 2 horas. (11) 96346-2516.',
  alternates: {
    canonical: 'https://www.newclimaar.com.br/tecnico-ar-condicionado-sp',
  },
  openGraph: {
    title: 'Técnico de Ar Condicionado em São Paulo | New Clima',
    description: 'Técnicos certificados de ar condicionado em São Paulo e ABC. Instalação, manutenção e conserto com atendimento em até 2 horas. (11) 96346-2516.',
    url: 'https://www.newclimaar.com.br/tecnico-ar-condicionado-sp',
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
  return <App pathname="/tecnico-ar-condicionado-sp" />
}
