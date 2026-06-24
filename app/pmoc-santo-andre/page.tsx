import { Metadata } from 'next'
import App from '@/src/App'

export const metadata: Metadata = {
  title: 'PMOC em Santo André — Contrato de Manutenção Obrigatório | New Clima',
  description: 'PMOC em Santo André conforme a Lei 13.589/18. Documentação completa para empresas e condomínios. (11) 96346-2516.',
  alternates: {
    canonical: 'https://www.newclimaar.com.br/pmoc-santo-andre',
  },
  openGraph: {
    title: 'PMOC em Santo André — Contrato de Manutenção Obrigatório | New Clima',
    description: 'PMOC em Santo André conforme a Lei 13.589/18. Documentação completa para empresas e condomínios. (11) 96346-2516.',
    url: 'https://www.newclimaar.com.br/pmoc-santo-andre',
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
  return <App pathname="/pmoc-santo-andre" />
}
