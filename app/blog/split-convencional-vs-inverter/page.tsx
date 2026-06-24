import { Metadata } from 'next'
import App from '@/src/App'

export const metadata: Metadata = {
  title: 'Split Convencional vs Inverter: Qual Escolher? | New Clima Blog',
  description: 'Diferenças entre split convencional e inverter para São Paulo.',
  alternates: {
    canonical: 'https://www.newclimaar.com.br/blog/split-convencional-vs-inverter',
  },
  openGraph: {
    title: 'Split Convencional vs Inverter: Qual Escolher? | New Clima Blog',
    description: 'Diferenças entre split convencional e inverter para São Paulo.',
    url: 'https://www.newclimaar.com.br/blog/split-convencional-vs-inverter',
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
  return <App pathname="/blog/split-convencional-vs-inverter" />
}
