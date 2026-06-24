import { Metadata } from 'next'
import App from '@/src/App'

export const metadata: Metadata = {
  title: 'Ar Condicionado Inverter: Vale a Pena? | New Clima Blog',
  description: 'Descubra se o ar condicionado inverter compensa. Economia de até 60% na conta de luz.',
  alternates: {
    canonical: 'https://www.newclimaar.com.br/blog/ar-condicionado-inverter',
  },
  openGraph: {
    title: 'Ar Condicionado Inverter: Vale a Pena? | New Clima Blog',
    description: 'Descubra se o ar condicionado inverter compensa. Economia de até 60% na conta de luz.',
    url: 'https://www.newclimaar.com.br/blog/ar-condicionado-inverter',
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
  return <App pathname="/blog/ar-condicionado-inverter" />
}
