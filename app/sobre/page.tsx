import { Metadata } from 'next'
import App from '@/src/App'

export const metadata: Metadata = {
  title: 'Sobre a New Clima Ar Condicionado | Especialistas em SP e ABC',
  description: 'Conheça a New Clima. Desde 2018 somos referência em instalação e manutenção de ar condicionado em SP e ABC.',
  alternates: {
    canonical: 'https://www.newclimaar.com.br/sobre',
  },
  openGraph: {
    title: 'Sobre a New Clima Ar Condicionado | Especialistas em SP e ABC',
    description: 'Conheça a New Clima. Desde 2018 somos referência em instalação e manutenção de ar condicionado em SP e ABC.',
    url: 'https://www.newclimaar.com.br/sobre',
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
  return <App pathname="/sobre" />
}
