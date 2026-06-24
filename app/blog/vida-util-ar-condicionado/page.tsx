import { Metadata } from 'next'
import App from '@/src/App'

export const metadata: Metadata = {
  title: 'Qual a Vida Útil do Ar Condicionado? Como Prolongar | New Clima Blog',
  description: 'Um split dura até 15 anos com manutenção. Saiba o que reduz a vida útil.',
  alternates: {
    canonical: 'https://www.newclimaar.com.br/blog/vida-util-ar-condicionado',
  },
  openGraph: {
    title: 'Qual a Vida Útil do Ar Condicionado? Como Prolongar | New Clima Blog',
    description: 'Um split dura até 15 anos com manutenção. Saiba o que reduz a vida útil.',
    url: 'https://www.newclimaar.com.br/blog/vida-util-ar-condicionado',
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
  return <App pathname="/blog/vida-util-ar-condicionado" />
}
