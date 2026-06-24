import { Metadata } from 'next'
import App from '@/src/App'

export const metadata: Metadata = {
  title: 'Dormir com Ar Condicionado Faz Mal? Saiba a Verdade | New Clima Blog',
  description: 'Dormir com ar condicionado faz mal? Não, se estiver limpo e regulado. Veja as melhores práticas para noites confortáveis em SP.',
  alternates: {
    canonical: 'https://www.newclimaar.com.br/blog/dormir-com-ar-condicionado-faz-mal',
  },
  openGraph: {
    title: 'Dormir com Ar Condicionado Faz Mal? Saiba a Verdade | New Clima Blog',
    description: 'Dormir com ar condicionado faz mal? Não, se estiver limpo e regulado.',
    url: 'https://www.newclimaar.com.br/blog/dormir-com-ar-condicionado-faz-mal',
    type: 'website',
    images: [{ url: 'https://www.newclimaar.com.br/images/logo-new-clima.png' }],
  },
  robots: { index: true, follow: true },
}

export default function Page() {
  return <App pathname="/blog/dormir-com-ar-condicionado-faz-mal" />
}
