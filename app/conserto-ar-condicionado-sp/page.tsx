import { Metadata } from 'next'
import App from '@/src/App'

export const metadata: Metadata = {
  title: 'Conserto de Ar Condicionado em São Paulo | New Clima',
  description: 'Conserto de ar condicionado em SP e ABC. Diagnóstico preciso, peças originais e garantia de 90 dias. Atendimento em até 2 horas. (11) 96346-2516.',
  alternates: {
    canonical: 'https://www.newclimaar.com.br/conserto-ar-condicionado-sp',
  },
  openGraph: {
    title: 'Conserto de Ar Condicionado em São Paulo | New Clima',
    description: 'Conserto de ar condicionado em SP e ABC. Diagnóstico preciso, peças originais e garantia de 90 dias. Atendimento em até 2 horas. (11) 96346-2516.',
    url: 'https://www.newclimaar.com.br/conserto-ar-condicionado-sp',
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
  return <App pathname="/conserto-ar-condicionado-sp" />
}
