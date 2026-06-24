import { Metadata } from 'next'
import App from '@/src/App'

export const metadata: Metadata = {
  title: 'Ar Condicionado Vazando Água em São Paulo | New Clima',
  description: 'Ar condicionado pingando em SP? Atendimento em até 2 horas. Diagnóstico gratuito. (11) 96346-2516.',
  alternates: {
    canonical: 'https://www.newclimaar.com.br/ar-condicionado-vazando-agua-sp',
  },
  openGraph: {
    title: 'Ar Condicionado Vazando Água em São Paulo | New Clima',
    description: 'Ar condicionado pingando em SP? Atendimento em até 2 horas. Diagnóstico gratuito. (11) 96346-2516.',
    url: 'https://www.newclimaar.com.br/ar-condicionado-vazando-agua-sp',
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
  return <App pathname="/ar-condicionado-vazando-agua-sp" />
}
