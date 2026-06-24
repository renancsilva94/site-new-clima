import { Metadata } from 'next'
import App from '@/src/App'

export const metadata: Metadata = {
  title: 'Quanto Gasta um Ar Condicionado Inverter por Mês? | New Clima Blog',
  description: 'Tabela completa de consumo do ar condicionado inverter em SP.',
  alternates: {
    canonical: 'https://www.newclimaar.com.br/blog/quanto-gasta-ar-condicionado-inverter',
  },
  openGraph: {
    title: 'Quanto Gasta um Ar Condicionado Inverter por Mês? | New Clima Blog',
    description: 'Tabela completa de consumo do ar condicionado inverter em SP.',
    url: 'https://www.newclimaar.com.br/blog/quanto-gasta-ar-condicionado-inverter',
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
  return <App pathname="/blog/quanto-gasta-ar-condicionado-inverter" />
}
