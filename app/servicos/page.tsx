import { Metadata } from 'next'
import App from '@/src/App'

export const metadata: Metadata = {
  title: 'Serviços de Ar Condicionado em São Paulo e ABC | New Clima',
  description: 'Instalação, manutenção, limpeza e conserto de ar condicionado em SP e ABC. PMOC para empresas. (11) 96346-2516.',
  alternates: {
    canonical: 'https://www.newclimaar.com.br/servicos',
  },
  openGraph: {
    title: 'Serviços de Ar Condicionado em São Paulo e ABC | New Clima',
    description: 'Instalação, manutenção, limpeza e conserto de ar condicionado em SP e ABC. PMOC para empresas. (11) 96346-2516.',
    url: 'https://www.newclimaar.com.br/servicos',
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
  return <App pathname="/servicos" />
}
