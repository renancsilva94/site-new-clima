import { Metadata } from 'next'
import App from '@/src/App'

export const metadata: Metadata = {
  title: 'Manutenção Preventiva de Ar Condicionado em SP: O Que É e Por Que Fazer',
  description: 'Entenda o que é manutenção preventiva de ar condicionado, o que está incluso, a frequência ideal e quanto custa em São Paulo. A partir de R$ 180. Visita gratuita.',
  alternates: {
    canonical: 'https://www.newclimaar.com.br/blog/manutencao-preventiva-ar-condicionado-sp',
  },
  openGraph: {
    title: 'Manutenção Preventiva de Ar Condicionado em SP: O Que É e Por Que Fazer',
    description: 'Entenda o que é manutenção preventiva de ar condicionado, o que está incluso, a frequência ideal e quanto custa em São Paulo. A partir de R$ 180. Visita gratuita.',
    url: 'https://www.newclimaar.com.br/blog/manutencao-preventiva-ar-condicionado-sp',
    type: 'article',
    images: [{ url: 'https://www.newclimaar.com.br/images/logo-new-clima.png' }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
}

export default function Page() {
  return <App pathname="/blog/manutencao-preventiva-ar-condicionado-sp" />
}
