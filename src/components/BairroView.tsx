'use client'

import React from 'react'
import {
  Phone,
  CheckCircle2,
  MapPin,
  ChevronDown,
  ShieldCheck,
  Clock,
  ArrowRight,
  MessageSquare,
} from 'lucide-react'
import Link from 'next/link'

// ─── Types ────────────────────────────────────────────────────────────────────

export interface BairroViewProps {
  bairro: string
  slug: string
  zona: string
  vizinhos: string[]
}

// ─── WhatsApp helpers ─────────────────────────────────────────────────────────

const WA_LINK = 'https://wa.me/5511963462516'

const WhatsAppIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.445 0 .062 5.383.06 11.983c0 2.108.544 4.165 1.582 6.022L0 24l6.146-1.612a11.827 11.827 0 005.904 1.599h.005c6.605 0 11.988-5.383 11.99-11.984a11.846 11.846 0 00-3.515-8.417z" />
  </svg>
)

// ─── Serviços por bairro ──────────────────────────────────────────────────────

interface ServicoCard {
  tag: string
  title: string
  desc: string
  href: string
}

function getServicos(bairro: string): ServicoCard[] {
  return [
    {
      tag: 'INSTALAÇÃO',
      title: `Instalação de Ar Condicionado em ${bairro}`,
      desc: `Split, multi-split e sistemas para vários cômodos em ${bairro}. Obra limpa, sem quebradeira e com garantia de 1 ano por escrito.`,
      href: '/instalacao-ar-condicionado-split-sao-paulo',
    },
    {
      tag: 'MANUTENÇÃO',
      title: `Manutenção de Ar Condicionado em ${bairro}`,
      desc: `Manutenção preventiva e corretiva em ${bairro}. Atendemos todas as marcas com peças originais e garantia de 90 dias.`,
      href: '/manutencao-preventiva-ar-condicionado-sp',
    },
    {
      tag: 'LIMPEZA',
      title: `Limpeza de Ar Condicionado em ${bairro}`,
      desc: `Limpeza profunda que elimina fungos, ácaros e mau cheiro em ${bairro}. Produto bactericida, ar mais limpo e aparelho que dura mais.`,
      href: '/limpeza-higienizacao-ar-condicionado-sp',
    },
    {
      tag: 'CONSERTO',
      title: `Conserto de Ar Condicionado em ${bairro}`,
      desc: `Ar condicionado parou de funcionar em ${bairro}? Diagnóstico rápido, conserto no mesmo dia na maioria dos casos e garantia de 90 dias.`,
      href: '/manutencao-corretiva-ar-condicionado-sp',
    },
    {
      tag: 'CONTRATO',
      title: `Contrato de Manutenção para Empresas em ${bairro}`,
      desc: `Contrato de manutenção (PMOC) para empresas, condomínios e clínicas em ${bairro}. Documentação completa conforme a Lei 13.589/18.`,
      href: '/manutencao-preventiva-ar-condicionado-sp',
    },
    {
      tag: 'APARTAMENTO',
      title: `Ar Condicionado em Apartamento em ${bairro}`,
      desc: `Instalamos em apartamentos e condomínios em ${bairro} respeitando as normas do regimento. Obra limpa, sem sujeira, aprovado pelo síndico.`,
      href: '/ar-condicionado-apartamento-sp',
    },
  ]
}

// ─── FAQ por bairro ───────────────────────────────────────────────────────────

function getFaq(bairro: string) {
  return [
    {
      q: `Quanto custa instalar ar condicionado em ${bairro}?`,
      a: `A instalação residencial padrão em ${bairro} começa a partir de R$ 350. O valor varia conforme o tipo de equipamento e a complexidade da infraestrutura. A visita técnica é gratuita e o orçamento é entregue no mesmo dia, sem compromisso.`,
    },
    {
      q: `Vocês instalam ar condicionado em apartamento em ${bairro}?`,
      a: `Sim. Somos especialistas em instalação em apartamentos e condomínios em ${bairro}. Respeitamos as normas de fachada, varanda técnica e o regimento interno. Obra limpa, sem sujeira e sem quebradeira.`,
    },
    {
      q: `Fazem limpeza de ar condicionado em ${bairro}?`,
      a: `Sim. Realizamos limpeza profunda (higienização) de todas as marcas em ${bairro}. O processo remove fungos, ácaros e bactérias — ideal para quem tem alergia ou o aparelho está com mau cheiro.`,
    },
    {
      q: `Consertam ar condicionado em ${bairro}?`,
      a: `Sim. Diagnosticamos e consertamos qualquer defeito — compressor, placa, capacitor, dreno entupido, falta de gás. Atendemos em ${bairro} em até 2 horas e resolvemos na maioria dos casos no mesmo dia.`,
    },
    {
      q: `Com que frequência fazer manutenção em ${bairro}?`,
      a: `Para uso residencial, recomendamos manutenção a cada 6 meses. Para escritórios e comércios em ${bairro}, a cada 3 meses. Sem manutenção, o aparelho gasta mais energia, estraga antes do tempo e piora a qualidade do ar.`,
    },
    {
      q: `Qual o prazo de atendimento em ${bairro}?`,
      a: `Respondemos em até 2 horas pelo WhatsApp e agendamos a visita conforme sua disponibilidade. Para urgências em ${bairro}, tentamos atender no mesmo dia.`,
    },
  ]
}

// ─── Sub-componentes ──────────────────────────────────────────────────────────

function ServicoCard({ s }: { s: ServicoCard }) {
  const tagColors: Record<string, string> = {
    INSTALAÇÃO: 'bg-blue-100 text-blue-700',
    MANUTENÇÃO: 'bg-emerald-100 text-emerald-700',
    LIMPEZA: 'bg-cyan-100 text-cyan-700',
    CONSERTO: 'bg-orange-100 text-orange-700',
    CONTRATO: 'bg-amber-100 text-amber-700',
    APARTAMENTO: 'bg-violet-100 text-violet-700',
  }

  return (
    <Link
      href={s.href}
      className="p-6 bg-white rounded-2xl border border-slate-100 hover:border-primary hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group block"
    >
      <span className={`inline-block text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4 ${tagColors[s.tag] ?? 'bg-slate-100 text-slate-700'}`}>
        {s.tag}
      </span>
      <h3 className="text-base font-bold text-primary mb-2 group-hover:text-primary-light transition-colors leading-snug">
        {s.title}
      </h3>
      <p className="text-slate-500 text-sm leading-relaxed mb-4">{s.desc}</p>
      <div className="flex items-center gap-2 text-primary-light font-semibold text-sm group-hover:gap-3 transition-all">
        Saiba mais <ArrowRight size={13} />
      </div>
    </Link>
  )
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = React.useState(false)
  return (
    <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-slate-50 transition-colors"
        aria-expanded={open}
      >
        <span className="font-bold text-primary">{q}</span>
        <ChevronDown
          size={18}
          className={`text-slate-400 transition-transform shrink-0 ml-4 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 pb-5 pt-4 text-slate-500 text-sm leading-relaxed border-t border-slate-50">
          {a}
        </div>
      </div>
    </div>
  )
}

// ─── Componente principal ─────────────────────────────────────────────────────

export default function BairroView({ bairro, slug, zona, vizinhos }: BairroViewProps) {
  const servicos = getServicos(bairro)
  const faq = getFaq(bairro)

  return (
    <div className="pt-10 pb-20">

      {/* ── Hero ── */}
      <section className="bg-primary py-16">
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

            <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-6">
              Ar Condicionado em {bairro} — Instalação, Manutenção, Limpeza e Conserto
            </h1>

            <div className="flex flex-col gap-2 mb-8 max-w-xl">
              {[
                `Instalação com obra limpa e garantia de 1 ano em ${bairro}`,
                'Manutenção, limpeza e conserto de todas as marcas',
                'Visita técnica gratuita — orçamento no mesmo dia',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-success shrink-0" />
                  <span className="text-blue-100/80 text-base">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={WA_LINK}
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-success text-white font-bold py-4 px-8 rounded-xl transition-all hover:-translate-y-0.5 shadow-lg"
              >
                <WhatsAppIcon size={20} />
                Orçamento Grátis em {bairro}
              </a>
              <a
                href="tel:+5511963462516"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/20 text-white font-bold py-4 px-8 rounded-xl hover:bg-white/10 transition-all"
              >
                <Phone size={20} />
                (11) 96346-2516
              </a>
            </div>

            <p className="text-blue-100/50 text-sm mt-4">
              ⚡ Resposta em até 2 horas · Visita gratuita · Orçamento no mesmo dia
            </p>
          </div>
        </div>
      </section>

      {/* ── Serviços ── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-3 tracking-tight">
              Serviços de Ar Condicionado em {bairro}
            </h2>
            <p className="text-slate-500 text-lg">
              Para apartamentos, casas e empresas em {bairro} — instalação, manutenção, limpeza e conserto.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {servicos.map((s) => (
              <ServicoCard key={s.tag} s={s} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Diferenciais ── */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-primary mb-3 text-center tracking-tight">
            Por que contratar a New Clima em {bairro}?
          </h2>
          <p className="text-slate-500 text-center mb-8">
            Empresa de ar condicionado com equipe própria, atuando em {bairro} desde 2018.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: <ShieldCheck size={24} />,
                title: 'Garantia por Escrito',
                desc: `Todo serviço em ${bairro} com certificado de garantia e nota fiscal. Sem letra miúda.`,
              },
              {
                icon: <Clock size={24} />,
                title: 'Resposta em até 2h',
                desc: `Atendemos ${bairro} em até 2 horas. Para emergências, tentamos ir no mesmo dia.`,
              },
              {
                icon: <CheckCircle2 size={24} />,
                title: 'Obra Limpa',
                desc: `Instalação em apartamentos e casas em ${bairro} sem sujeira, sem quebradeira e sem surpresa no final.`,
              },
            ].map((item) => (
              <div key={item.title} className="bg-white p-6 rounded-2xl border border-slate-100 text-center">
                <div className="w-12 h-12 bg-ice rounded-xl flex items-center justify-center text-primary-light mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <h2 className="text-2xl font-extrabold text-primary mb-2">
            Perguntas frequentes sobre ar condicionado em {bairro}
          </h2>
          <p className="text-slate-500 text-sm mb-6">
            Instalação, limpeza, conserto e manutenção — respondemos as dúvidas mais comuns.
          </p>
          <div className="space-y-4">
            {faq.map((item) => (
              <FaqItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Bairros vizinhos ── */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-bold text-primary mb-3">
            Também atendemos bairros próximos a {bairro}
          </h2>
          <p className="text-slate-500 text-sm mb-6">
            Instalação, manutenção e limpeza de ar condicionado nos bairros vizinhos.
          </p>
          <div className="flex flex-wrap gap-3">
            {vizinhos.map((v) => (
              <div
                key={v}
                className="flex items-center gap-2 bg-ice px-4 py-2 rounded-full text-sm font-semibold text-primary-light"
              >
                <MapPin size={12} /> {v}
              </div>
            ))}
            <Link
              href="/ar-condicionado-sao-paulo"
              className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-sm font-semibold text-primary hover:bg-primary/20 transition-colors"
            >
              Ver todas as regiões <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Instalação, manutenção ou limpeza de ar condicionado em {bairro}?
          </h2>
          <p className="text-blue-100/70 mb-2">
            Manda uma mensagem — respondemos em até 2 horas e agendamos a visita gratuita.
          </p>
          <p className="text-blue-100/40 text-sm mb-8">
            Visita gratuita · Orçamento no mesmo dia · Garantia por escrito
          </p>
          <a
            href={WA_LINK}
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-success text-white font-bold py-4 px-10 rounded-xl shadow-xl hover:-translate-y-0.5 transition-all"
          >
            <MessageSquare size={20} />
            Falar no WhatsApp — {bairro}
          </a>
        </div>
      </section>

    </div>
  )
}
