import { Metadata } from 'next'
import App from '@/src/App'

export const metadata: Metadata = {
  title: 'Mapa do Site | New Clima Ar Condicionado SP e ABC',
  description: 'Todas as páginas do site da New Clima Ar Condicionado organizadas por categoria: serviços, regiões e blog.',
  alternates: {
    canonical: 'https://www.newclimaar.com.br/mapa-site',
  },
  openGraph: {
    title: 'Mapa do Site | New Clima Ar Condicionado SP e ABC',
    description: 'Todas as páginas do site da New Clima Ar Condicionado organizadas por categoria: serviços, regiões e blog.',
    url: 'https://www.newclimaar.com.br/mapa-site',
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
  return <App pathname="/mapa-site" />
}
