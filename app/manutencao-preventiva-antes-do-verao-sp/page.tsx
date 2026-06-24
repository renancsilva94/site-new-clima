import { Metadata } from 'next'
import App from '@/src/App'

export const metadata: Metadata = {
  title: 'Manutenção de Ar Condicionado Antes do Verão em SP | New Clima',
  description: 'Revise seu ar condicionado agora e chegue ao verão sem susto. Manutenção preventiva completa em SP e ABC. (11) 96346-2516.',
  alternates: {
    canonical: 'https://www.newclimaar.com.br/manutencao-preventiva-antes-do-verao-sp',
  },
  openGraph: {
    title: 'Manutenção de Ar Condicionado Antes do Verão em SP | New Clima',
    description: 'Revise seu ar condicionado agora e chegue ao verão sem susto. Manutenção preventiva completa em SP e ABC. (11) 96346-2516.',
    url: 'https://www.newclimaar.com.br/manutencao-preventiva-antes-do-verao-sp',
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
  return <App pathname="/manutencao-preventiva-antes-do-verao-sp" />
}
