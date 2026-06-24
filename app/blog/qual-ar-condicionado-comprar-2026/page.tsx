import { Metadata } from 'next'
import App from '@/src/App'

export const metadata: Metadata = {
  title: 'Qual Ar Condicionado Comprar em 2026? Guia SP | New Clima Blog',
  description: 'Guia para escolher o ar condicionado certo em SP. Inverter vs convencional.',
  alternates: {
    canonical: 'https://www.newclimaar.com.br/blog/qual-ar-condicionado-comprar-2026',
  },
  openGraph: {
    title: 'Qual Ar Condicionado Comprar em 2026? Guia SP | New Clima Blog',
    description: 'Guia para escolher o ar condicionado certo em SP. Inverter vs convencional.',
    url: 'https://www.newclimaar.com.br/blog/qual-ar-condicionado-comprar-2026',
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
  return <App pathname="/blog/qual-ar-condicionado-comprar-2026" />
}
