import { Metadata } from 'next'
import App from '@/src/App'

export const metadata: Metadata = {
  title: 'PMOC Obrigatório: O Que Sua Empresa Precisa Saber | New Clima Blog',
  description: 'PMOC obrigatório para empresas com mais de 60.000 BTUs. Multas até R$ 1,5 milhão.',
  alternates: {
    canonical: 'https://www.newclimaar.com.br/blog/pmoc-obrigatorio-sao-paulo',
  },
  openGraph: {
    title: 'PMOC Obrigatório: O Que Sua Empresa Precisa Saber | New Clima Blog',
    description: 'PMOC obrigatório para empresas com mais de 60.000 BTUs. Multas até R$ 1,5 milhão.',
    url: 'https://www.newclimaar.com.br/blog/pmoc-obrigatorio-sao-paulo',
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
  return <App pathname="/blog/pmoc-obrigatorio-sao-paulo" />
}
