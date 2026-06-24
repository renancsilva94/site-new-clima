'use client'

import App from '@/src/App'

interface BairroViewProps {
  bairro: string
  slug: string
  zona: string
  vizinhos: string[]
}

export default function BairroView({ slug }: BairroViewProps) {
  return <App pathname={`/instalacao-ar-condicionado-${slug}`} />
}
