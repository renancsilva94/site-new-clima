import { Metadata } from 'next'
import App from '@/src/App'

export const metadata: Metadata = {
  title: 'Contato | New Clima Ar Condicionado SP e ABC',
  description: 'Entre em contato com a New Clima. Atendimento em SP e ABC. WhatsApp: (11) 96346-2516.',
  alternates: {
    canonical: 'https://www.newclimaar.com.br/contato',
  },
  openGraph: {
    title: 'Contato | New Clima Ar Condicionado SP e ABC',
    description: 'Entre em contato com a New Clima. Atendimento em SP e ABC. WhatsApp: (11) 96346-2516.',
    url: 'https://www.newclimaar.com.br/contato',
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
  return <App pathname="/contato" />
}
