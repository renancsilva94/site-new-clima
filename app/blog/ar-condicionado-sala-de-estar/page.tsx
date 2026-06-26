import { Metadata } from 'next'
import App from '@/src/App'

export const metadata: Metadata = {
  title: 'Ar Condicionado para Sala em SP: Qual BTU, Onde Instalar e Qual Modelo',
  description: 'Guia completo para escolher o ar condicionado ideal para sua sala em São Paulo: BTU certo, posição de instalação e qual modelo. Visita gratuita.',
  alternates: {
    canonical: 'https://www.newclimaar.com.br/blog/ar-condicionado-sala-de-estar',
  },
  openGraph: {
    title: 'Ar Condicionado para Sala em SP: Qual BTU, Onde Instalar e Qual Modelo',
    description: 'Guia completo para escolher o ar condicionado ideal para sua sala em São Paulo: BTU certo, posição de instalação e qual modelo. Visita gratuita.',
    url: 'https://www.newclimaar.com.br/blog/ar-condicionado-sala-de-estar',
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
  return <App pathname="/blog/ar-condicionado-sala-de-estar" />
}
