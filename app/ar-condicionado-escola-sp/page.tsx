import { Metadata } from 'next'
import App from '@/src/App'

export const metadata: Metadata = {
  title: 'Ar Condicionado para Escolas em São Paulo | New Clima',
  description: 'Instalação e PMOC para escolas, creches e universidades em SP. Qualidade do ar para alunos e professores. (11) 96346-2516.',
  alternates: {
    canonical: 'https://www.newclimaar.com.br/ar-condicionado-escola-sp',
  },
  openGraph: {
    title: 'Ar Condicionado para Escolas em São Paulo | New Clima',
    description: 'Instalação e PMOC para escolas, creches e universidades em SP. Qualidade do ar para alunos e professores. (11) 96346-2516.',
    url: 'https://www.newclimaar.com.br/ar-condicionado-escola-sp',
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
  return <App pathname="/ar-condicionado-escola-sp" />
}
