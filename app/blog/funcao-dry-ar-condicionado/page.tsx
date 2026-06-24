import { Metadata } from 'next'
import App from '@/src/App'

export const metadata: Metadata = {
  title: 'Função Dry no Ar Condicionado: Para que Serve? | New Clima Blog',
  description: 'A função Dry desumidifica o ar sem resfriar demais. Ideal para dias úmidos em SP.',
  alternates: {
    canonical: 'https://www.newclimaar.com.br/blog/funcao-dry-ar-condicionado',
  },
  openGraph: {
    title: 'Função Dry no Ar Condicionado: Para que Serve? | New Clima Blog',
    description: 'A função Dry desumidifica o ar sem resfriar demais. Ideal para dias úmidos em SP.',
    url: 'https://www.newclimaar.com.br/blog/funcao-dry-ar-condicionado',
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
  return <App pathname="/blog/funcao-dry-ar-condicionado" />
}
