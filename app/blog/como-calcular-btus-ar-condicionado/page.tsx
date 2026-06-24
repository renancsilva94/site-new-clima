import { Metadata } from 'next'
import App from '@/src/App'

export const metadata: Metadata = {
  title: 'Como Calcular BTUs do Ar Condicionado | New Clima Blog',
  description: 'Aprenda a calcular a potência ideal em BTUs para cada ambiente.',
  alternates: {
    canonical: 'https://www.newclimaar.com.br/blog/como-calcular-btus-ar-condicionado',
  },
  openGraph: {
    title: 'Como Calcular BTUs do Ar Condicionado | New Clima Blog',
    description: 'Aprenda a calcular a potência ideal em BTUs para cada ambiente.',
    url: 'https://www.newclimaar.com.br/blog/como-calcular-btus-ar-condicionado',
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
  return <App pathname="/blog/como-calcular-btus-ar-condicionado" />
}
