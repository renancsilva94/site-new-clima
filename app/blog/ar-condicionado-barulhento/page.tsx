import { Metadata } from 'next'
import App from '@/src/App'

export const metadata: Metadata = {
  title: 'Ar Condicionado Fazendo Barulho: Causas e Como Resolver em SP',
  description: 'Ar condicionado barulhento em SP? Veja os tipos de barulho, o que cada um indica e como resolver. Diagnóstico gratuito em até 2 horas.',
  alternates: {
    canonical: 'https://www.newclimaar.com.br/blog/ar-condicionado-barulhento',
  },
  openGraph: {
    title: 'Ar Condicionado Fazendo Barulho: Causas e Como Resolver em SP',
    description: 'Ar condicionado barulhento em SP? Veja os tipos de barulho, o que cada um indica e como resolver. Diagnóstico gratuito em até 2 horas.',
    url: 'https://www.newclimaar.com.br/blog/ar-condicionado-barulhento',
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
  return <App pathname="/blog/ar-condicionado-barulhento" />
}
