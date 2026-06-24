import { Metadata } from 'next'
import App from '@/src/App'

export const metadata: Metadata = {
  title: 'Ar Condicionado Gasta Mais de Dia ou à Noite? | New Clima Blog',
  description: 'Descubra quando o ar condicionado consome mais energia em SP e como economizar.',
  alternates: {
    canonical: 'https://www.newclimaar.com.br/blog/ar-condicionado-gasta-mais-dia-ou-noite',
  },
  openGraph: {
    title: 'Ar Condicionado Gasta Mais de Dia ou à Noite? | New Clima Blog',
    description: 'Descubra quando o ar condicionado consome mais energia em SP e como economizar.',
    url: 'https://www.newclimaar.com.br/blog/ar-condicionado-gasta-mais-dia-ou-noite',
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
  return <App pathname="/blog/ar-condicionado-gasta-mais-dia-ou-noite" />
}
