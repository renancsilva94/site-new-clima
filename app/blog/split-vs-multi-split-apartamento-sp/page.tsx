import { Metadata } from 'next'
import App from '@/src/App'

export const metadata: Metadata = {
  title: 'Split ou Multi Split para Apartamento em SP? | New Clima Blog',
  description: 'Quando escolher split ou multi split para apartamento em São Paulo.',
  alternates: {
    canonical: 'https://www.newclimaar.com.br/blog/split-vs-multi-split-apartamento-sp',
  },
  openGraph: {
    title: 'Split ou Multi Split para Apartamento em SP? | New Clima Blog',
    description: 'Quando escolher split ou multi split para apartamento em São Paulo.',
    url: 'https://www.newclimaar.com.br/blog/split-vs-multi-split-apartamento-sp',
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
  return <App pathname="/blog/split-vs-multi-split-apartamento-sp" />
}
