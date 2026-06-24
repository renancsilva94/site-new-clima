import { Metadata } from 'next'
import App from '@/src/App'

export const metadata: Metadata = {
  title: 'Blog sobre Ar Condicionado em SP | New Clima',
  description: 'Dicas técnicas, guias de compra e legislação sobre ar condicionado em São Paulo e ABC Paulista.',
  alternates: {
    canonical: 'https://www.newclimaar.com.br/blog',
  },
  openGraph: {
    title: 'Blog sobre Ar Condicionado em SP | New Clima',
    description: 'Dicas técnicas, guias de compra e legislação sobre ar condicionado em São Paulo e ABC Paulista.',
    url: 'https://www.newclimaar.com.br/blog',
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
  return <App pathname="/blog" />
}
