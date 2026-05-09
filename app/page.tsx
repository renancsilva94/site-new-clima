'use client'

import { useEffect, useState } from 'react'

export default function Home() {
  const [App, setApp] = useState<React.ComponentType | null>(null)

  useEffect(() => {
    import('../src/App').then((mod) => {
      setApp(() => mod.default)
    }).catch((err) => {
      console.error('Erro ao carregar App:', err)
    })
  }, [])

  if (!App) return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'sans-serif'
    }}>
      Carregando...
    </div>
  )

  return <App />
}
