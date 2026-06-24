import { Metadata } from 'next'
import App from '@/src/App'

export const metadata: Metadata = {
  title: 'Multa por Não Ter PMOC em SP: R$ 2.000 a R$ 1,5 Milhão | New Clima Blog',
  description: 'Valores das multas por falta de PMOC em São Paulo e como regularizar.',
  alternates: {
    canonical: 'https://www.newclimaar.com.br/blog/multa-pmoc-sao-paulo',
  },
  openGraph: {
    title: 'Multa por Não Ter PMOC em SP: R$ 2.000 a R$ 1,5 Milhão | New Clima Blog',
    description: 'Valores das multas por falta de PMOC em São Paulo e como regularizar.',
    url: 'https://www.newclimaar.com.br/blog/multa-pmoc-sao-paulo',
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
  return <App pathname="/blog/multa-pmoc-sao-paulo" />
}
