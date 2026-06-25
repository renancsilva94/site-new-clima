'use client'

import React, { useState } from 'react'
import { Phone, Menu, X, ChevronDown } from 'lucide-react'
import Link from 'next/link'

function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.445 0 .062 5.383.06 11.983c0 2.108.544 4.165 1.582 6.022L0 24l6.146-1.612a11.827 11.827 0 005.904 1.599h.005c6.605 0 11.988-5.383 11.99-11.984a11.846 11.846 0 00-3.515-8.417z" />
    </svg>
  )
}

const regioes = [
  { label: 'São Paulo (Capital)', href: '/ar-condicionado-sao-paulo' },
  { label: 'Santo André', href: '/ar-condicionado-santo-andre' },
  { label: 'São Bernardo do Campo', href: '/ar-condicionado-sao-bernardo-do-campo' },
  { label: 'São Caetano do Sul', href: '/ar-condicionado-sao-caetano-do-sul' },
  { label: 'Diadema', href: '/ar-condicionado-diadema' },
  { label: 'Mauá', href: '/ar-condicionado-maua' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-slate-100">
      {/* Top bar */}
      <div className="bg-primary text-white text-xs py-2 hidden md:block">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href="tel:+5511963462516" className="flex items-center gap-1 hover:text-blue-200 transition-colors">
              <Phone size={12} /> (11) 96346-2516
            </a>
            <a href="mailto:contato@newclimaar.com.br" className="hover:text-blue-200 transition-colors">
              contato@newclimaar.com.br
            </a>
            <span>Seg–Sex 8h–18h</span>
          </div>
          <span>Atendimento em São Paulo e todo o ABC Paulista</span>
        </div>
      </div>

      {/* Main nav */}
      <div className="container mx-auto px-4 h-28 md:h-32 flex items-center justify-between">
        <Link href="/" className="flex items-center group">
          <img
            src="https://cdn.coteibem.com.br/company/41315/logo/f4d0405d-28b6-4834-a8ca-9e63b68073fa.png"
            alt="New Clima Ar Condicionado — Instalação e Manutenção em SP e ABC"
            className="h-24 md:h-28 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          <Link href="/" className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-primary-light transition-colors">Início</Link>
          <Link href="/servicos" className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-primary-light transition-colors">Serviços</Link>
          <Link href="/#depoimentos" className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-primary-light transition-colors">Depoimentos</Link>

          <div className="relative group">
            <button className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-primary-light flex items-center gap-1">
              Regiões <ChevronDown size={14} />
            </button>
            <div className="absolute top-full left-0 w-56 bg-white shadow-xl rounded-xl border border-slate-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all translate-y-2 group-hover:translate-y-0">
              {regioes.map((r) => (
                <Link key={r.href} href={r.href} className="w-full text-left px-4 py-2 text-sm hover:bg-slate-50 hover:text-primary-light transition-colors text-slate-700 block">
                  {r.label}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/blog" className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-primary-light transition-colors">Blog</Link>
          <Link href="/sobre" className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-primary-light transition-colors">Quem Somos</Link>
          <Link href="/contato" className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-primary-light transition-colors">Contato</Link>

          <a
            href="https://wa.me/5511963462516"
            rel="noopener noreferrer"
            className="ml-4 h-11 text-sm px-5 inline-flex items-center gap-2 bg-success text-white font-bold rounded-xl hover:-translate-y-0.5 transition-all shadow"
          >
            <WhatsAppIcon size={16} /> WhatsApp (11) 96346-2516
          </a>
        </nav>

        <button
          className="lg:hidden p-2 text-primary"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden bg-white border-t border-slate-100 overflow-hidden transition-all duration-300 ${mobileOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
          <Link href="/" onClick={() => setMobileOpen(false)} className="text-left font-semibold py-2 text-primary-light">Início</Link>
          <Link href="/servicos" onClick={() => setMobileOpen(false)} className="text-left font-semibold py-2">Serviços</Link>
          <Link href="/blog" onClick={() => setMobileOpen(false)} className="text-left font-semibold py-2">Blog</Link>
          <Link href="/sobre" onClick={() => setMobileOpen(false)} className="text-left font-semibold py-2">Quem Somos</Link>
          <Link href="/contato" onClick={() => setMobileOpen(false)} className="text-left font-semibold py-2">Contato</Link>
          <hr className="border-slate-100" />
          <a
            href="https://wa.me/5511963462516"
            rel="noopener noreferrer"
            className="w-full mt-2 inline-flex items-center justify-center gap-2 bg-success text-white font-bold py-3 px-6 rounded-xl"
          >
            <WhatsAppIcon size={18} /> WhatsApp (11) 96346-2516
          </a>
        </div>
      </div>
    </header>
  )
}
