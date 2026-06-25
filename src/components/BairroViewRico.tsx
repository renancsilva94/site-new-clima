'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Header from '@/src/components/Header'
import Footer from '@/src/components/Footer'
import {
  Phone, CheckCircle2, MapPin, ChevronDown, ShieldCheck,
  Clock, ArrowRight, MessageSquare, Star, ThumbsUp,
  Wrench, Wind, Droplets, Zap, Building2, Home
} from 'lucide-react'

const WA_BASE = 'https://api.whatsapp.com/send/?phone=5511963462516&text='

function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.445 0 .062 5.383.06 11.983c0 2.108.544 4.165 1.582 6.022L0 24l6.146-1.612a11.827 11.827 0 005.904 1.599h.005c6.605 0 11.988-5.383 11.99-11.984a11.846 11.846 0 00-3.515-8.417z" />
    </svg>
  )
}

export interface BairroRicoProps {
  bairro: string
  slug: string
  zona: string
  vizinhos: string[]
  descricao: string
  referencias: string[]
  depoimentos: { nome: string; texto: string; servico: string; estrelas?: number }[]
  atendimentos?: number
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-slate-50 transition-colors" aria-expanded={open}>
        <span className="font-bold text-primary pr-4">{q}</span>
        <ChevronDown size={18} className={`text-slate-400 transition-transform shrink-0 ${open ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-56 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 pb-5 pt-4 text-slate-500 text-sm leading-relaxed border-t border-slate-50">{a}</div>
      </div>
    </div>
  )
}

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
      ))}
    </div>
  )
}

export default function BairroViewRico({ bairro, slug, zona, vizinhos, descricao, referencias, depoimentos, atendimentos = 200 }: BairroRicoProps) {

  const problemas = [
    { icon: <Wind size={22} />, titulo: 'Não gela mais', desc: 'Falta de gás, compressor fraco ou filtro entupido' },
    { icon: <Droplets size={22} />, titulo: 'Pingando água', desc: 'Dreno entupido ou bandeja com problema' },
    { icon: <Zap size={22} />, titulo: 'Conta de luz alta', desc: 'Aparelho sem manutenção consome até 30% mais' },
    { icon: <Wrench size={22} />, titulo: 'Barulho estranho', desc: 'Vibração, rolamento ou peça solta' },
    { icon: <Wind size={22} />, titulo: 'Mau cheiro', desc: 'Fungos e bactérias acumulados no evaporador' },
    { icon: <Zap size={22} />, titulo: 'Desliga sozinho', desc: 'Problema na placa eletrônica ou superaquecimento' },
  ]

  const servicos = [
    { tag: 'INSTALAÇÃO', cor: 'bg-blue-100 text-blue-700', icon: <Home size={18} />, titulo: `Instalação em ${bairro}`, desc: `Split, multi-split e sistemas para vários cômodos. Obra limpa, infraestrutura embutida e garantia de 1 ano por escrito.`, href: '/instalacao-ar-condicionado-split-sao-paulo', preco: 'A partir de R$ 350' },
    { tag: 'MANUTENÇÃO', cor: 'bg-emerald-100 text-emerald-700', icon: <Wrench size={18} />, titulo: `Manutenção em ${bairro}`, desc: `Preventiva e corretiva em ${bairro}. Todas as marcas, peças originais e garantia de 90 dias.`, href: '/manutencao-ar-condicionado-sp', preco: 'A partir de R$ 180' },
    { tag: 'LIMPEZA', cor: 'bg-cyan-100 text-cyan-700', icon: <Droplets size={18} />, titulo: `Limpeza em ${bairro}`, desc: `Higienização profunda com bactericida certificado. Remove fungos, ácaros e mau cheiro.`, href: '/limpeza-ar-condicionado-sp', preco: 'A partir de R$ 150' },
    { tag: 'CONSERTO', cor: 'bg-orange-100 text-orange-700', icon: <Zap size={18} />, titulo: `Conserto em ${bairro}`, desc: `Diagnóstico rápido, conserto no mesmo dia na maioria dos casos e garantia de 90 dias.`, href: '/conserto-ar-condicionado-sp', preco: 'Diagnóstico grátis' },
    { tag: 'CONTRATO', cor: 'bg-amber-100 text-amber-700', icon: <Building2 size={18} />, titulo: `Contrato PMOC em ${bairro}`, desc: `Para empresas, condomínios e clínicas. Documentação completa conforme a Lei 13.589/18.`, href: '/pmoc-sao-paulo', preco: 'Sob consulta' },
    { tag: 'APARTAMENTO', cor: 'bg-violet-100 text-violet-700', icon: <Building2 size={18} />, titulo: `Apartamento em ${bairro}`, desc: `Especialistas em condomínios. Respeitamos o regimento interno. Obra limpa, aprovado pelo síndico.`, href: '/ar-condicionado-apartamento-sp', preco: 'A partir de R$ 350' },
  ]

  const diferenciais = [
    { icon: <ShieldCheck size={24} />, titulo: 'Garantia por Escrito', desc: 'Certificado de garantia e nota fiscal em todo serviço. Sem letra miúda.' },
    { icon: <Clock size={24} />, titulo: 'Resposta em até 2h', desc: `Atendemos ${bairro} em até 2 horas. Para emergências, tentamos ir no mesmo dia.` },
    { icon: <CheckCircle2 size={24} />, titulo: 'Obra Limpa', desc: 'Instalação sem sujeira, sem quebradeira. Aprovado pelo síndico.' },
    { icon: <Wrench size={24} />, titulo: 'Técnicos Certificados', desc: 'Equipe própria com certificação das principais marcas do mercado.' },
    { icon: <MapPin size={24} />, titulo: 'Base em Vila Mariana', desc: 'Nossa sede é na R. Santa Cruz, 2187 — dentro do próprio bairro.' },
    { icon: <ThumbsUp size={24} />, titulo: 'Nota 4.9 no Google', desc: 'Mais de 24 avaliações 5 estrelas de clientes reais em SP.' },
  ]

  const faq = [
    { q: `Quanto custa instalar ar condicionado em ${bairro}?`, a: `A instalação residencial padrão em ${bairro} começa a partir de R$ 350. O valor varia conforme o tipo de equipamento e a complexidade da infraestrutura. A visita técnica é gratuita e o orçamento é entregue no mesmo dia, sem compromisso.` },
    { q: `Vocês instalam ar condicionado em apartamento em ${bairro}?`, a: `Sim. Somos especialistas em instalação em apartamentos e condomínios em ${bairro}. Respeitamos as normas de fachada, varanda técnica e o regimento interno. Obra limpa, sem sujeira e sem quebradeira.` },
    { q: `Fazem limpeza de ar condicionado em ${bairro}?`, a: `Sim. Realizamos limpeza profunda (higienização) de todas as marcas em ${bairro}. O processo remove fungos, ácaros e bactérias — ideal para quem tem alergia ou o aparelho está com mau cheiro.` },
    { q: `Consertam ar condicionado em ${bairro}?`, a: `Sim. Diagnosticamos e consertamos qualquer defeito — compressor, placa, capacitor, dreno entupido, falta de gás. Atendemos em ${bairro} em até 2 horas e resolvemos na maioria dos casos no mesmo dia.` },
    { q: `Com que frequência fazer manutenção em ${bairro}?`, a: `Para uso residencial, recomendamos manutenção a cada 6 meses. Para escritórios e comércios em ${bairro}, a cada 3 meses. Sem manutenção, o aparelho gasta mais energia, estraga antes do tempo e piora a qualidade do ar.` },
    { q: `Qual o prazo de atendimento em ${bairro}?`, a: `Respondemos em até 2 horas pelo WhatsApp e agendamos a visita conforme sua disponibilidade. Para urgências em ${bairro}, tentamos atender no mesmo dia.` },
  ]

  const waText = encodeURIComponent(`Olá! Gostaria de um orçamento para ar condicionado em ${bairro}.`)

  return (
    <>
      <Header />
      <div className="pb-20">

        {/* ── HERO ── */}
        <section className="bg-primary pt-10 pb-16">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-blue-100/50 text-sm mb-4" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white transition-colors">Início</Link>
              <span>/</span>
              <Link href="/ar-condicionado-sao-paulo" className="hover:text-white transition-colors">São Paulo</Link>
              <span>/</span>
              <span className="text-white font-medium">{bairro}</span>
            </nav>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-3 py-1 rounded-full text-white text-xs font-bold uppercase tracking-widest mb-6">
                <MapPin size={12} /> {zona} — São Paulo
              </div>
              <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-4">Ar Condicionado em {bairro}</h1>
              <p className="text-blue-100/80 text-lg mb-6">Instalação, manutenção, limpeza e conserto em {bairro} — com técnicos que moram e trabalham aqui perto.</p>
              <div className="flex flex-col gap-2 mb-8 max-w-xl">
                {[`Sede própria em ${bairro} — R. Santa Cruz, 2187`, 'Visita técnica gratuita — orçamento no mesmo dia', 'Nota 4.9 ⭐ no Google · Mais de 24 avaliações reais'].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-success shrink-0" />
                    <span className="text-blue-100/80 text-base">{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={`${WA_BASE}${waText}`} rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-success text-white font-bold py-4 px-8 rounded-xl transition-all hover:-translate-y-0.5 shadow-lg">
                  <WhatsAppIcon size={20} /> Orçamento Grátis em {bairro}
                </a>
                <a href="tel:+5511963462516" className="inline-flex items-center justify-center gap-2 border-2 border-white/20 text-white font-bold py-4 px-8 rounded-xl hover:bg-white/10 transition-all">
                  <Phone size={20} /> (11) 96346-2516
                </a>
              </div>
              <div className="flex flex-wrap gap-6 mt-8 pt-8 border-t border-white/10">
                {[{ num: `+${atendimentos}`, label: `atendimentos em ${bairro}` }, { num: '4.9★', label: 'nota no Google' }, { num: '7 anos', label: 'de experiência' }, { num: '2h', label: 'tempo de resposta' }].map((item) => (
                  <div key={item.label}><div className="text-2xl font-extrabold text-white">{item.num}</div><div className="text-blue-100/50 text-xs">{item.label}</div></div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── SOBRE O BAIRRO ── */}
        <section className="py-12 bg-slate-50 border-b border-slate-100">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0"><MapPin size={20} className="text-primary" /></div>
              <div>
                <h2 className="text-lg font-bold text-primary mb-2">New Clima em {bairro}</h2>
                <p className="text-slate-600 leading-relaxed">{descricao}</p>
                {referencias.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {referencias.map((ref) => (<span key={ref} className="bg-white border border-slate-200 text-slate-600 text-xs px-3 py-1 rounded-full">📍 {ref}</span>))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ── PROBLEMAS ── */}
        <section className="py-14 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-extrabold text-primary mb-2">Seu ar condicionado em {bairro} está com algum desses problemas?</h2>
              <p className="text-slate-500">Atendemos em até 2 horas — diagnóstico gratuito.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-8">
              {problemas.map((p) => (
                <div key={p.titulo} className="bg-slate-50 border border-slate-100 rounded-2xl p-4 flex items-start gap-3">
                  <div className="text-primary-light shrink-0 mt-0.5">{p.icon}</div>
                  <div><div className="font-bold text-primary text-sm">{p.titulo}</div><div className="text-slate-400 text-xs mt-0.5">{p.desc}</div></div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <a href={`${WA_BASE}${encodeURIComponent(`Olá! Meu ar condicionado está com problema em ${bairro}. Podem me ajudar?`)}`} rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-success text-white font-bold py-3 px-8 rounded-xl shadow hover:-translate-y-0.5 transition-all">
                <WhatsAppIcon size={18} /> Resolver agora — {bairro}
              </a>
            </div>
          </div>
        </section>

        {/* ── SERVIÇOS ── */}
        <section className="py-14 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-extrabold text-primary mb-2">Serviços de Ar Condicionado em {bairro}</h2>
              <p className="text-slate-500">Para apartamentos, casas e empresas — com preço justo e garantia por escrito.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {servicos.map((s) => (
                <Link key={s.tag} href={s.href} className="bg-white rounded-2xl border border-slate-100 p-6 hover:border-primary hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group block">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full ${s.cor}`}>{s.tag}</span>
                    <span className="text-xs font-semibold text-success bg-emerald-50 px-2 py-1 rounded-lg">{s.preco}</span>
                  </div>
                  <div className="text-primary-light mb-2">{s.icon}</div>
                  <h3 className="text-base font-bold text-primary mb-2 group-hover:text-primary-light transition-colors leading-snug">{s.titulo}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">{s.desc}</p>
                  <div className="flex items-center gap-2 text-primary-light font-semibold text-sm group-hover:gap-3 transition-all">Saiba mais <ArrowRight size={13} /></div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA INTERMEDIÁRIO ── */}
        <section className="py-10 bg-primary-light">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-white font-extrabold text-xl mb-1">Precisa de orçamento rápido em {bairro}?</div>
              <div className="text-blue-100/70 text-sm">Resposta em até 2 horas · Visita gratuita · Sem compromisso</div>
            </div>
            <a href={`${WA_BASE}${waText}`} rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-success text-white font-bold py-3 px-8 rounded-xl shadow whitespace-nowrap hover:-translate-y-0.5 transition-all">
              <WhatsAppIcon size={18} /> Falar no WhatsApp
            </a>
          </div>
        </section>

        {/* ── DIFERENCIAIS ── */}
        <section className="py-14 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-extrabold text-primary mb-2 text-center">Por que a New Clima é a escolha certa em {bairro}?</h2>
            <p className="text-slate-500 text-center mb-10">Empresa com sede no bairro, equipe própria e 7 anos de experiência.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {diferenciais.map((d) => (
                <div key={d.titulo} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary-light mx-auto mb-4">{d.icon}</div>
                  <h3 className="font-bold text-primary mb-2">{d.titulo}</h3>
                  <p className="text-slate-500 text-sm">{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── DEPOIMENTOS ── */}
        <section className="py-14 bg-slate-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-extrabold text-primary mb-2 text-center">O que dizem os clientes da New Clima</h2>
            <p className="text-slate-500 text-center text-sm mb-8">Avaliações reais do Google Meu Negócio · Nota 4.9 ★</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {depoimentos.map((d) => (
                <div key={d.nome} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                  <StarRating count={d.estrelas ?? 5} />
                  <p className="text-slate-600 text-sm leading-relaxed my-3">"{d.texto}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0">{d.nome[0]}</div>
                    <div><div className="font-bold text-primary text-sm">{d.nome}</div><div className="text-slate-400 text-xs">{d.servico}</div></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-6">
              <a href="https://maps.app.goo.gl/kHeynjnXoG943iG3A" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary-light font-semibold text-sm hover:underline">
                Ver todas as avaliações no Google <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-14 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl font-extrabold text-primary mb-2 text-center">Perguntas frequentes sobre ar condicionado em {bairro}</h2>
            <p className="text-slate-500 text-center text-sm mb-8">Instalação, limpeza, conserto e manutenção.</p>
            <div className="space-y-4">{faq.map((item) => <FaqItem key={item.q} q={item.q} a={item.a} />)}</div>
          </div>
        </section>

        {/* ── BAIRROS VIZINHOS ── */}
        <section className="py-10 bg-slate-50">
          <div className="container mx-auto px-4">
            <h2 className="text-lg font-bold text-primary mb-2">Também atendemos bairros próximos a {bairro}</h2>
            <p className="text-slate-500 text-sm mb-5">Instalação, manutenção e limpeza nos bairros vizinhos.</p>
            <div className="flex flex-wrap gap-3">
              {vizinhos.map((v) => (<div key={v} className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-full text-sm font-semibold text-primary-light"><MapPin size={12} /> {v}</div>))}
              <Link href="/ar-condicionado-sao-paulo" className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-sm font-semibold text-primary hover:bg-primary/20 transition-colors">Ver todas as regiões <ArrowRight size={12} /></Link>
            </div>
          </div>
        </section>

        {/* ── CTA FINAL ── */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="text-3xl font-extrabold text-white mb-4">Precisa de ar condicionado em {bairro}?</h2>
            <p className="text-blue-100/70 mb-2">Manda uma mensagem — respondemos em até 2 horas e agendamos a visita gratuita.</p>
            <p className="text-blue-100/40 text-sm mb-8">Visita gratuita · Orçamento no mesmo dia · Garantia por escrito</p>
            <a href={`${WA_BASE}${waText}`} rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-success text-white font-bold py-4 px-10 rounded-xl shadow-xl hover:-translate-y-0.5 transition-all">
              <MessageSquare size={20} /> Falar no WhatsApp — {bairro}
            </a>
          </div>
        </section>

      </div>
      <Footer />
    </>
  )
}
