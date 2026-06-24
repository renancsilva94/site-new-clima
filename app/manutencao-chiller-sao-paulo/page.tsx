import { Metadata } from 'next'
import App from '@/src/App'

export const metadata: Metadata = {
  title: 'Manutenção de Chiller em São Paulo | New Clima',
  description: 'Manutenção preventiva e corretiva de chiller em SP e ABC. PMOC e atendimento emergencial. (11) 96346-2516.',
  alternates: {
    canonical: 'https://www.newclimaar.com.br/manutencao-chiller-sao-paulo',
  },
  openGraph: {
    title: 'Manutenção de Chiller em São Paulo | New Clima',
    description: 'Manutenção preventiva e corretiva de chiller em SP e ABC. PMOC e atendimento emergencial. (11) 96346-2516.',
    url: 'https://www.newclimaar.com.br/manutencao-chiller-sao-paulo',
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
  return <App pathname="/manutencao-chiller-sao-paulo" />
}
