import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Página não encontrada | New Clima Ar Condicionado',
  robots: { index: false, follow: true },
}

const links = [
  { href: '/', label: 'Página inicial' },
  { href: '/instalacao-ar-condicionado-split-sao-paulo', label: 'Instalação de ar condicionado' },
  { href: '/manutencao-preventiva-ar-condicionado-sp', label: 'Manutenção preventiva e PMOC' },
  { href: '/limpeza-higienizacao-ar-condicionado-sp', label: 'Limpeza e higienização' },
  { href: '/manutencao-corretiva-ar-condicionado-sp', label: 'Conserto de ar condicionado' },
  { href: '/blog', label: 'Blog' },
  { href: '/contato', label: 'Contato' },
]

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50 px-4 py-20">
      <div className="max-w-xl w-full text-center">
        <p className="text-sm font-bold tracking-[0.15em] uppercase text-slate-400 mb-3">Erro 404</p>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
          Página não encontrada
        </h1>
        <p className="text-slate-600 mb-10">
          O endereço que você acessou não existe ou mudou de lugar. Veja abaixo os serviços da
          New Clima Ar Condicionado em São Paulo e ABC Paulista.
        </p>
        <ul className="grid gap-3 text-left">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="block rounded-lg border border-slate-200 bg-white px-5 py-3 font-semibold text-slate-800 hover:border-slate-400 transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
