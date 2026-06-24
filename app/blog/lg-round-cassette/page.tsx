import { Metadata } from 'next'
import App from '@/src/App'

export const metadata: Metadata = {
  title: 'LG Round Cassette: Climatização 360° | New Clima Blog',
  description: 'LG Round Cassette com distribuição de ar em 360 graus para ambientes de alto padrão.',
  alternates: {
    canonical: 'https://www.newclimaar.com.br/blog/lg-round-cassette',
  },
  openGraph: {
    title: 'LG Round Cassette: Climatização 360° | New Clima Blog',
    description: 'LG Round Cassette com distribuição de ar em 360 graus para ambientes de alto padrão.',
    url: 'https://www.newclimaar.com.br/blog/lg-round-cassette',
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
  return <App pathname="/blog/lg-round-cassette" />
}
