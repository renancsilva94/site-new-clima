import { Metadata } from 'next'
import App from '@/src/App'

export const metadata: Metadata = {
  title: 'Quanto Custa a Limpeza de Ar Condicionado em SP em 2026?',
  description: 'Tabela completa de preços de limpeza de ar condicionado em São Paulo em 2026. O que está incluso, frequência ideal e como agendar. A partir de R$ 150.',
  alternates: {
    canonical: 'https://www.newclimaar.com.br/blog/quanto-custa-limpeza-ar-condicionado',
  },
  openGraph: {
    title: 'Quanto Custa a Limpeza de Ar Condicionado em SP em 2026?',
    description: 'Tabela completa de preços de limpeza de ar condicionado em São Paulo em 2026. O que está incluso, frequência ideal e como agendar. A partir de R$ 150.',
    url: 'https://www.newclimaar.com.br/blog/quanto-custa-limpeza-ar-condicionado',
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
  return <App pathname="/blog/quanto-custa-limpeza-ar-condicionado" />
}
