import { Metadata } from 'next'
import App from '@/src/App'

export const metadata: Metadata = {
  title: 'Ar Condicionado Pingando Água: Causas, Riscos e Como Resolver',
  description: 'Ar condicionado pingando água dentro de casa? Veja as causas, os riscos para o imóvel e como resolver. Atendimento em até 2h em São Paulo e ABC.',
  alternates: {
    canonical: 'https://www.newclimaar.com.br/blog/ar-condicionado-pingando-agua',
  },
  openGraph: {
    title: 'Ar Condicionado Pingando Água: Causas, Riscos e Como Resolver',
    description: 'Ar condicionado pingando água dentro de casa? Veja as causas, os riscos para o imóvel e como resolver. Atendimento em até 2h em São Paulo e ABC.',
    url: 'https://www.newclimaar.com.br/blog/ar-condicionado-pingando-agua',
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
  return <App pathname="/blog/ar-condicionado-pingando-agua" />
}
