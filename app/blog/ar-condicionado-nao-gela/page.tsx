import { Metadata } from 'next'
import App from '@/src/App'

export const metadata: Metadata = {
  title: 'Ar Condicionado Não Gela: 7 Causas e Como Resolver em SP',
  description: 'Ar condicionado ligado mas não gela? Veja as 7 causas mais comuns em São Paulo, como identificar cada uma e quando chamar um técnico. Diagnóstico gratuito.',
  alternates: {
    canonical: 'https://www.newclimaar.com.br/blog/ar-condicionado-nao-gela',
  },
  openGraph: {
    title: 'Ar Condicionado Não Gela: 7 Causas e Como Resolver em SP',
    description: 'Ar condicionado ligado mas não gela? Veja as 7 causas mais comuns em São Paulo, como identificar cada uma e quando chamar um técnico. Diagnóstico gratuito.',
    url: 'https://www.newclimaar.com.br/blog/ar-condicionado-nao-gela',
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
  return <App pathname="/blog/ar-condicionado-nao-gela" />
}
