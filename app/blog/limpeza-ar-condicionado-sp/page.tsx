import { Metadata } from 'next'
import App from '@/src/App'

export const metadata: Metadata = {
  title: 'Limpeza de Ar Condicionado em SP: Preços, Frequência e Como Funciona',
  description: 'Tudo sobre limpeza de ar condicionado em São Paulo: quanto custa, com que frequência fazer, o que está incluso e por que é essencial para a saúde. A partir de R$ 150.',
  alternates: {
    canonical: 'https://www.newclimaar.com.br/blog/limpeza-ar-condicionado-sp',
  },
  openGraph: {
    title: 'Limpeza de Ar Condicionado em SP: Preços, Frequência e Como Funciona',
    description: 'Tudo sobre limpeza de ar condicionado em São Paulo: quanto custa, com que frequência fazer, o que está incluso e por que é essencial para a saúde. A partir de R$ 150.',
    url: 'https://www.newclimaar.com.br/blog/limpeza-ar-condicionado-sp',
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
  return <App pathname="/blog/limpeza-ar-condicionado-sp" />
}
