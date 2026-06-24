import { Metadata } from 'next'
import App from '@/src/App'

export const metadata: Metadata = {
  title: 'PMOC: O Que É e Por Que Sua Empresa É Obrigada | New Clima Blog',
  description: 'Lei 13.589/2018 obriga empresas com mais de 60.000 BTUs a terem PMOC em SP.',
  alternates: {
    canonical: 'https://www.newclimaar.com.br/blog/pmoc-obrigatorio-sao-paulo-lei',
  },
  openGraph: {
    title: 'PMOC: O Que É e Por Que Sua Empresa É Obrigada | New Clima Blog',
    description: 'Lei 13.589/2018 obriga empresas com mais de 60.000 BTUs a terem PMOC em SP.',
    url: 'https://www.newclimaar.com.br/blog/pmoc-obrigatorio-sao-paulo-lei',
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
  return <App pathname="/blog/pmoc-obrigatorio-sao-paulo-lei" />
}
