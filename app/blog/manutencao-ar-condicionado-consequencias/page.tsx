import { Metadata } from 'next'
import App from '@/src/App'

export const metadata: Metadata = {
  title: 'O Que Acontece Sem Manutenção no Ar Condicionado? | New Clima Blog',
  description: 'Do aumento na conta de luz à morte do compressor — consequências sem manutenção.',
  alternates: {
    canonical: 'https://www.newclimaar.com.br/blog/manutencao-ar-condicionado-consequencias',
  },
  openGraph: {
    title: 'O Que Acontece Sem Manutenção no Ar Condicionado? | New Clima Blog',
    description: 'Do aumento na conta de luz à morte do compressor — consequências sem manutenção.',
    url: 'https://www.newclimaar.com.br/blog/manutencao-ar-condicionado-consequencias',
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
  return <App pathname="/blog/manutencao-ar-condicionado-consequencias" />
}
