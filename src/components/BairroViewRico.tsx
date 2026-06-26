'use client'
import App from '@/src/App'

export default function BairroViewRico({ slug }: { slug: string }) {
  return <App pathname={`/instalacao-ar-condicionado-${slug}`} />
}
