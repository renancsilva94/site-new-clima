import { Metadata } from 'next'
import App from '@/src/App'

export const metadata: Metadata = {
  title: 'Ar Condicionado Desliga Sozinho: 7 Causas e Como Resolver | New Clima Blog',
  description: 'Ar condicionado desligando sozinho? Veja as 7 causas mais comuns e como resolver.',
  alternates: {
    canonical: 'https://www.newclimaar.com.br/blog/ar-condicionado-desliga-sozinho',
  },
  openGraph: {
    title: 'Ar Condicionado Desliga Sozinho: 7 Causas e Como Resolver | New Clima Blog',
    description: 'Ar condicionado desligando sozinho? Veja as 7 causas mais comuns e como resolver.',
    url: 'https://www.newclimaar.com.br/blog/ar-condicionado-desliga-sozinho',
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
  return <App pathname="/blog/ar-condicionado-desliga-sozinho" />
}
