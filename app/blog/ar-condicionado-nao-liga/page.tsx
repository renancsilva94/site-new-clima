import { Metadata } from 'next'
import App from '@/src/App'

export const metadata: Metadata = {
  title: 'Ar Condicionado Não Liga: O Que Verificar Antes de Chamar o Técnico',
  description: 'Ar condicionado não liga em SP? Veja o que verificar primeiro e quais são as causas técnicas. Diagnóstico gratuito em até 2 horas.',
  alternates: {
    canonical: 'https://www.newclimaar.com.br/blog/ar-condicionado-nao-liga',
  },
  openGraph: {
    title: 'Ar Condicionado Não Liga: O Que Verificar Antes de Chamar o Técnico',
    description: 'Ar condicionado não liga em SP? Veja o que verificar primeiro e quais são as causas técnicas. Diagnóstico gratuito em até 2 horas.',
    url: 'https://www.newclimaar.com.br/blog/ar-condicionado-nao-liga',
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
  return <App pathname="/blog/ar-condicionado-nao-liga" />
}
