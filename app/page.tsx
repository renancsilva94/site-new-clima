'use client'

import dynamic from 'next/dynamic'

const App = dynamic(() => import('../src/App'), {
  ssr: false,
  loading: () => <div style={{minHeight: '100vh'}} />
})

export default function Home() {
  return <App />
}
