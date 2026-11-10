import { Metadata } from 'next'
import App from '@/src/App'

export const metadata: Metadata = {
  title: 'PMOC em São Paulo para Empresas | New Clima',
  description: 'PMOC para empresas em São Paulo conforme a Lei 13.589 e a Portaria 3.523: plano, manutenções, relatórios e ART. Avaliação gratuita.',
  alternates: {
    canonical: 'https://www.newclimaar.com.br/pmoc-sao-paulo',
  },
  openGraph: {
    title: 'PMOC em São Paulo para Empresas | New Clima',
    description: 'PMOC para empresas em São Paulo conforme a Lei 13.589 e a Portaria 3.523: plano, manutenções, relatórios e ART. Avaliação gratuita.',
    url: 'https://www.newclimaar.com.br/pmoc-sao-paulo',
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
  return <App pathname="/pmoc-sao-paulo" />
}
