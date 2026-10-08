import { Metadata } from 'next'
import App from '@/src/App'

export const metadata: Metadata = {
  title: 'Tabela de Preço de Instalação de Ar Condicionado 2026 em SP',
  description: 'Tabela 2026 com preços reais: split de 9.000 a 24.000 BTUs a partir de R$ 350, multi split e cassete. Instalação em SP e ABC com garantia. Orçamento grátis.',
  alternates: {
    canonical: 'https://www.newclimaar.com.br/blog/quanto-custa-instalar-ar-condicionado-sp',
  },
  openGraph: {
    title: 'Tabela de Preço de Instalação de Ar Condicionado 2026 em SP',
    description: 'Tabela 2026 com preços reais: split de 9.000 a 24.000 BTUs a partir de R$ 350, multi split e cassete. Instalação em SP e ABC com garantia. Orçamento grátis.',
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
