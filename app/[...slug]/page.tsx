import { Metadata } from 'next'
import SlugClient from './SlugClient'

const BASE = 'https://www.newclimaar.com.br'

export async function generateMetadata({ params }: { params: { slug?: string[] } }): Promise<Metadata> {
  const slugArr = params.slug ?? []
  const key = slugArr.join('/')
  const canonical = key ? `${BASE}/${key}` : BASE

  return {
    title: 'New Clima Ar | Instalação e Manutenção de Ar Condicionado em SP e ABC Paulista',
    description: 'Instalação e manutenção de ar condicionado em São Paulo e ABC. 7 anos de experiência, técnicos certificados e visita gratuita. Ligue (11) 96346-2516.',
    alternates: { canonical },
    robots: { index: true, follow: true },
  }
}

export default function SlugPage({ params }: { params: { slug?: string[] } }) {
  const slugArr = params.slug ?? []
  const key = slugArr.join('/')
  const pathname = key ? `/${key}` : '/'

  return (
    <>
      {pathname === '/' && (
        <link rel="preload" as="image" href="/images/hero-bg.png" fetchPriority="high" />
      )}
      <SlugClient pathname={pathname} />
    </>
  )
}
