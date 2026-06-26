import { Metadata } from 'next'
import App from '@/src/App'

export const metadata: Metadata = {
  title: 'Conserto de Ar Condicionado em SP: Diagnóstico Gratuito e Atendimento em 2h',
  description: 'Conserto de ar condicionado em São Paulo com diagnóstico gratuito e atendimento em até 2 horas. Todas as marcas, peças originais e garantia de 90 dias. (11) 96346-2516.',
  alternates: {
    canonical: 'https://www.newclimaar.com.br/blog/conserto-ar-condicionado-sp',
  },
  openGraph: {
    title: 'Conserto de Ar Condicionado em SP: Diagnóstico Gratuito e Atendimento em 2h',
    description: 'Conserto de ar condicionado em São Paulo com diagnóstico gratuito e atendimento em até 2 horas. Todas as marcas, peças originais e garantia de 90 dias. (11) 96346-2516.',
    url: 'https://www.newclimaar.com.br/blog/conserto-ar-condicionado-sp',
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
  return <App pathname="/blog/conserto-ar-condicionado-sp" />
}
