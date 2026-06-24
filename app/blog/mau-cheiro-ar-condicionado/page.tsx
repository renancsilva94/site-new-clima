import { Metadata } from 'next'
import App from '@/src/App'

export const metadata: Metadata = {
  title: 'Mau Cheiro no Ar Condicionado: Causas e Solução | New Clima Blog',
  description: 'Por que o ar condicionado está com cheiro ruim? Como eliminar com higienização profissional.',
  alternates: {
    canonical: 'https://www.newclimaar.com.br/blog/mau-cheiro-ar-condicionado',
  },
  openGraph: {
    title: 'Mau Cheiro no Ar Condicionado: Causas e Solução | New Clima Blog',
    description: 'Por que o ar condicionado está com cheiro ruim? Como eliminar com higienização profissional.',
    url: 'https://www.newclimaar.com.br/blog/mau-cheiro-ar-condicionado',
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
  return <App pathname="/blog/mau-cheiro-ar-condicionado" />
}
