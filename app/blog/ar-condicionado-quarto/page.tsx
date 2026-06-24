import { Metadata } from 'next'
import App from '@/src/App'

export const metadata: Metadata = {
  title: 'Como Instalar Ar Condicionado no Quarto | New Clima Blog',
  description: 'Posicionamento ideal do ar condicionado no quarto para noites perfeitas.',
  alternates: {
    canonical: 'https://www.newclimaar.com.br/blog/ar-condicionado-quarto',
  },
  openGraph: {
    title: 'Como Instalar Ar Condicionado no Quarto | New Clima Blog',
    description: 'Posicionamento ideal do ar condicionado no quarto para noites perfeitas.',
    url: 'https://www.newclimaar.com.br/blog/ar-condicionado-quarto',
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
  return <App pathname="/blog/ar-condicionado-quarto" />
}
