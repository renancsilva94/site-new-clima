'use client'

import dynamic from 'next/dynamic'
import { usePathname } from 'next/navigation'
import Head from 'next/head'

const App = dynamic(() => import('../../src/App'), { ssr: false })

const canonicalMap: Record<string, string> = {
  '/instalacao-ar-condicionado-split-sao-paulo': 'https://www.newclimaar.com.br/instalacao-ar-condicionado-split-sao-paulo',
  '/ar-condicionado-comercial-sao-paulo': 'https://www.newclimaar.com.br/ar-condicionado-comercial-sao-paulo',
  '/instalacao-vrf-mini-vrf-sao-paulo': 'https://www.newclimaar.com.br/instalacao-vrf-mini-vrf-sao-paulo',
  '/manutencao-preventiva-ar-condicionado-sp': 'https://www.newclimaar.com.br/manutencao-preventiva-ar-condicionado-sp',
  '/manutencao-corretiva-ar-condicionado-sp': 'https://www.newclimaar.com.br/manutencao-corretiva-ar-condicionado-sp',
  '/limpeza-higienizacao-ar-condicionado-sp': 'https://www.newclimaar.com.br/limpeza-higienizacao-ar-condicionado-sp',
  '/blog': 'https://www.newclimaar.com.br/blog',
  '/sobre': 'https://www.newclimaar.com.br/sobre',
  '/contato': 'https://www.newclimaar.com.br/contato',
  '/ar-condicionado-sao-paulo': 'https://www.newclimaar.com.br/ar-condicionado-sao-paulo',
  '/ar-condicionado-santo-andre': 'https://www.newclimaar.com.br/ar-condicionado-santo-andre',
  '/ar-condicionado-sao-bernardo-do-campo': 'https://www.newclimaar.com.br/ar-condicionado-sao-bernardo-do-campo',
  '/ar-condicionado-sao-caetano-do-sul': 'https://www.newclimaar.com.br/ar-condicionado-sao-caetano-do-sul',
  '/ar-condicionado-diadema': 'https://www.newclimaar.com.br/ar-condicionado-diadema',
  '/ar-condicionado-maua': 'https://www.newclimaar.com.br/ar-condicionado-maua',
  '/blog/ar-condicionado-inverter': 'https://www.newclimaar.com.br/blog/ar-condicionado-inverter',
  '/blog/instalacao-ar-condicionado-apartamento-sp': 'https://www.newclimaar.com.br/blog/instalacao-ar-condicionado-apartamento-sp',
  '/blog/como-calcular-btus-ar-condicionado': 'https://www.newclimaar.com.br/blog/como-calcular-btus-ar-condicionado',
  '/blog/pmoc-obrigatorio-sao-paulo': 'https://www.newclimaar.com.br/blog/pmoc-obrigatorio-sao-paulo',
  '/blog/pmoc-obrigatorio-sao-paulo-lei': 'https://www.newclimaar.com.br/blog/pmoc-obrigatorio-sao-paulo-lei',
  '/blog/multa-pmoc-sao-paulo': 'https://www.newclimaar.com.br/blog/multa-pmoc-sao-paulo',
  '/blog/pmoc-condominios-sao-paulo': 'https://www.newclimaar.com.br/blog/pmoc-condominios-sao-paulo',
  '/blog/quanto-custa-pmoc-sao-paulo': 'https://www.newclimaar.com.br/blog/quanto-custa-pmoc-sao-paulo',
  '/blog/quanto-custa-instalar-ar-condicionado-sp': 'https://www.newclimaar.com.br/blog/quanto-custa-instalar-ar-condicionado-sp',
  '/blog/qual-ar-condicionado-comprar-2026': 'https://www.newclimaar.com.br/blog/qual-ar-condicionado-comprar-2026',
  '/blog/split-vs-multi-split-apartamento-sp': 'https://www.newclimaar.com.br/blog/split-vs-multi-split-apartamento-sp',
  '/blog/manutencao-ar-condicionado-consequencias': 'https://www.newclimaar.com.br/blog/manutencao-ar-condicionado-consequencias',
  '/blog/lg-round-cassette': 'https://www.newclimaar.com.br/blog/lg-round-cassette',
  '/blog/instalacao-ar-condicionado-obra-limpa': 'https://www.newclimaar.com.br/blog/instalacao-ar-condicionado-obra-limpa',
  '/blog/ar-condicionado-quarto': 'https://www.newclimaar.com.br/blog/ar-condicionado-quarto',
  '/blog/split-convencional-vs-inverter': 'https://www.newclimaar.com.br/blog/split-convencional-vs-inverter',
  '/blog/ar-condicionado-empresas-vrf': 'https://www.newclimaar.com.br/blog/ar-condicionado-empresas-vrf',
}

export default function SlugClient() {
  const pathname = usePathname()
  const canonical = canonicalMap[pathname] ?? `https://www.newclimaar.com.br${pathname}`

  return (
    <>
      <Head>
        <link rel="canonical" href={canonical} />
      </Head>
      <App />
    </>
  )
}
