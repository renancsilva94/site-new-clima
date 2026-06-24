import { Metadata } from 'next'
import App from '@/src/App'

export const metadata: Metadata = {
  title: 'Ar Condicionado para Empresas: Split ao VRF | New Clima Blog',
  description: 'Soluções de climatização corporativa com foco em ROI. Do split ao VRF.',
  alternates: {
    canonical: 'https://www.newclimaar.com.br/blog/ar-condicionado-empresas-vrf',
  },
  openGraph: {
    title: 'Ar Condicionado para Empresas: Split ao VRF | New Clima Blog',
    description: 'Soluções de climatização corporativa com foco em ROI. Do split ao VRF.',
    url: 'https://www.newclimaar.com.br/blog/ar-condicionado-empresas-vrf',
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
  return <App pathname="/blog/ar-condicionado-empresas-vrf" />
}
