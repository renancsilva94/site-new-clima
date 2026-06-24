import { Metadata } from 'next'
import App from '@/src/App'

export const metadata: Metadata = {
  title: 'Qual a Temperatura Ideal do Ar Condicionado? | New Clima Blog',
  description: 'A temperatura ideal do ar condicionado é entre 23°C e 25°C.',
  alternates: {
    canonical: 'https://www.newclimaar.com.br/blog/temperatura-ideal-ar-condicionado',
  },
  openGraph: {
    title: 'Qual a Temperatura Ideal do Ar Condicionado? | New Clima Blog',
    description: 'A temperatura ideal do ar condicionado é entre 23°C e 25°C.',
    url: 'https://www.newclimaar.com.br/blog/temperatura-ideal-ar-condicionado',
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
  return <App pathname="/blog/temperatura-ideal-ar-condicionado" />
}
