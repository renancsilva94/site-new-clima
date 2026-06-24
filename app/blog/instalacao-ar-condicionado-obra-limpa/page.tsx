import { Metadata } from 'next'
import App from '@/src/App'

export const metadata: Metadata = {
  title: 'Obra Limpa: Ar Condicionado Sem Quebra-Quebra | New Clima Blog',
  description: 'Como instalar ar condicionado sem sujeira. Método Obra Limpa da New Clima.',
  alternates: {
    canonical: 'https://www.newclimaar.com.br/blog/instalacao-ar-condicionado-obra-limpa',
  },
  openGraph: {
    title: 'Obra Limpa: Ar Condicionado Sem Quebra-Quebra | New Clima Blog',
    description: 'Como instalar ar condicionado sem sujeira. Método Obra Limpa da New Clima.',
    url: 'https://www.newclimaar.com.br/blog/instalacao-ar-condicionado-obra-limpa',
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
  return <App pathname="/blog/instalacao-ar-condicionado-obra-limpa" />
}
