import { Metadata } from 'next'
import App from '@/src/App'

export const metadata: Metadata = {
  title: 'Quanto Custa o PMOC em São Paulo em 2026? Preços e O Que Está Incluso',
  description: 'Descubra quanto custa o PMOC em São Paulo em 2026. Tabela de preços por porte, o que está incluso, multas e como contratar. Consulta gratuita: (11) 96346-2516.',
  alternates: {
    canonical: 'https://www.newclimaar.com.br/blog/quanto-custa-pmoc-sao-paulo',
  },
  openGraph: {
    title: 'Quanto Custa o PMOC em São Paulo em 2026? Preços e O Que Está Incluso',
    description: 'Tabela de preços do PMOC em SP por porte de empresa. O que está incluso, multas e como contratar. Consulta gratuita.',
    url: 'https://www.newclimaar.com.br/blog/quanto-custa-pmoc-sao-paulo',
    type: 'article',
    images: [{ url: 'https://www.newclimaar.com.br/images/logo-new-clima.png' }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
}

export default function Page() {
  return <App pathname="/blog/quanto-custa-pmoc-sao-paulo" />
}
