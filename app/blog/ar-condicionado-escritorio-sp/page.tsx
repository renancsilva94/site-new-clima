import { Metadata } from 'next'
import App from '@/src/App'

export const metadata: Metadata = {
  title: 'Ar Condicionado para Escritório em SP: Como Escolher e Quanto Custa',
  description: 'Guia completo sobre ar condicionado para escritórios em São Paulo: tipos de sistema, BTU, PMOC e preços. Proposta gratuita para sua empresa.',
  alternates: {
    canonical: 'https://www.newclimaar.com.br/blog/ar-condicionado-escritorio-sp',
  },
  openGraph: {
    title: 'Ar Condicionado para Escritório em SP: Como Escolher e Quanto Custa',
    description: 'Guia completo sobre ar condicionado para escritórios em São Paulo: tipos de sistema, BTU, PMOC e preços. Proposta gratuita para sua empresa.',
    url: 'https://www.newclimaar.com.br/blog/ar-condicionado-escritorio-sp',
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
  return <App pathname="/blog/ar-condicionado-escritorio-sp" />
}
