import { Metadata } from 'next'
import App from '@/src/App'

export const metadata: Metadata = {
  title: 'Gás R32 e R410A: Diferenças e Qual é Melhor | New Clima Blog',
  description: 'Entenda a diferença entre o gás R32 e R410A no ar condicionado.',
  alternates: {
    canonical: 'https://www.newclimaar.com.br/blog/gas-r32-r410a-ar-condicionado',
  },
  openGraph: {
    title: 'Gás R32 e R410A: Diferenças e Qual é Melhor | New Clima Blog',
    description: 'Entenda a diferença entre o gás R32 e R410A no ar condicionado.',
    url: 'https://www.newclimaar.com.br/blog/gas-r32-r410a-ar-condicionado',
    type: 'website',
    images: [{ url: 'https://www.newclimaar.com.br/images/logo-new-clima.png' }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function Page() {
  return <App pathname="/blog/gas-r32-r410a-ar-condicionado" />
}
