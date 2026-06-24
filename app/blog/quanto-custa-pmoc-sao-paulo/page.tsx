import { Metadata } from 'next'
import App from '@/src/App'

export const metadata: Metadata = {
  title: 'Quanto Custa o PMOC em São Paulo? Preços 2026 | New Clima Blog',
  description: 'Preços do PMOC em SP: R$ 400 a R$ 2.500/mês. O que está incluso e ROI.',
  alternates: {
    canonical: 'https://www.newclimaar.com.br/blog/quanto-custa-pmoc-sao-paulo',
  },
  openGraph: {
    title: 'Quanto Custa o PMOC em São Paulo? Preços 2026 | New Clima Blog',
    description: 'Preços do PMOC em SP: R$ 400 a R$ 2.500/mês. O que está incluso e ROI.',
    url: 'https://www.newclimaar.com.br/blog/quanto-custa-pmoc-sao-paulo',
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
  return <App pathname="/blog/quanto-custa-pmoc-sao-paulo" />
}
