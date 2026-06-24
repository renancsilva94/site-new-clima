import { Metadata } from 'next'
import App from '@/src/App'

export const metadata: Metadata = {
  title: 'Manutenção Preventiva de Ar Condicionado e PMOC em SP | New Clima',
  description: 'Manutenção preventiva e gestão de PMOC em São Paulo e ABC. Conformidade com a Lei 13.589/2018. Visita gratuita. (11) 96346-2516.',
  alternates: {
    canonical: 'https://www.newclimaar.com.br/manutencao-preventiva-ar-condicionado-sp',
  },
  openGraph: {
    title: 'Manutenção Preventiva de Ar Condicionado e PMOC em SP | New Clima',
    description: 'Manutenção preventiva e gestão de PMOC em São Paulo e ABC. Conformidade com a Lei 13.589/2018. Visita gratuita. (11) 96346-2516.',
    url: 'https://www.newclimaar.com.br/manutencao-preventiva-ar-condicionado-sp',
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
  return <App pathname="/manutencao-preventiva-ar-condicionado-sp" />
}
