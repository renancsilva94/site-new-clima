import { Metadata } from 'next'
import App from '@/src/App'

export const metadata: Metadata = {
  title: 'Quanto Custa Instalar Ar Condicionado em SP em 2026? | New Clima Blog',
  description: 'Tabela de preços de instalação de ar condicionado em São Paulo em 2026.',
  alternates: {
    canonical: 'https://www.newclimaar.com.br/blog/quanto-custa-instalar-ar-condicionado-sp',
  },
  openGraph: {
    title: 'Quanto Custa Instalar Ar Condicionado em SP em 2026? | New Clima Blog',
    description: 'Tabela de preços de instalação de ar condicionado em São Paulo em 2026.',
    url: 'https://www.newclimaar.com.br/blog/quanto-custa-instalar-ar-condicionado-sp',
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
  return <App pathname="/blog/quanto-custa-instalar-ar-condicionado-sp" />
}
