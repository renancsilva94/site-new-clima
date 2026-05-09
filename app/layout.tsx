import type { Metadata } from 'next'
import { headers } from 'next/headers'
import './globals.css'

const metaMap: Record<string, { title: string; description: string }> = {
  '/instalacao-ar-condicionado-split-sao-paulo': {
    title: 'Instalação de Ar Condicionado Split em São Paulo | New Clima',
    description: 'Instalação de ar condicionado split e multi split em São Paulo e ABC. Técnicos certificados, infraestrutura embutida, garantia de 1 ano. Orçamento: (11) 96346-2516.',
  },
  '/ar-condicionado-comercial-sao-paulo': {
    title: 'Ar Condicionado Cassete e Piso-Teto para Empresas em SP | New Clima',
    description: 'Sistemas de ar condicionado comercial em São Paulo e ABC. Cassete, Piso-Teto e Dutado para lojas, escritórios e restaurantes. Projeto técnico completo.',
  },
  '/instalacao-vrf-mini-vrf-sao-paulo': {
    title: 'Instalação de Sistema VRF e Mini VRF em São Paulo | New Clima',
    description: 'Especialistas em sistemas VRF e Mini VRF em São Paulo e ABC. Projetos para residências de alto padrão e edifícios corporativos.',
  },
  '/manutencao-preventiva-ar-condicionado-sp': {
    title: 'Manutenção Preventiva de Ar Condicionado e PMOC em SP | New Clima',
    description: 'Manutenção preventiva e gestão de PMOC em São Paulo e ABC. Conformidade com a Lei 13.589/2018. Contratos para empresas e condomínios.',
  },
  '/manutencao-corretiva-ar-condicionado-sp': {
    title: 'Conserto de Ar Condicionado em São Paulo e ABC | New Clima',
    description: 'Conserto de ar condicionado em São Paulo e ABC. Diagnóstico rápido, peças originais e garantia de 90 dias. Atendimento emergencial.',
  },
  '/limpeza-higienizacao-ar-condicionado-sp': {
    title: 'Limpeza e Higienização de Ar Condicionado em São Paulo | New Clima',
    description: 'Limpeza profunda e higienização de ar condicionado em São Paulo e ABC. Bactericida profissional, eliminação de fungos e ácaros.',
  },
  '/blog': {
    title: 'Blog sobre Ar Condicionado em SP | New Clima',
    description: 'Dicas técnicas, guias de compra e legislação sobre ar condicionado em São Paulo e ABC Paulista.',
  },
  '/sobre': {
    title: 'Sobre a New Clima Ar Condicionado | Especialistas em SP e ABC',
    description: 'Conheça a New Clima. Desde 2018 somos referência em instalação e manutenção de ar condicionado em São Paulo e ABC Paulista.',
  },
  '/contato': {
    title: 'Contato | New Clima Ar Condicionado SP e ABC',
    description: 'Entre em contato com a New Clima Ar Condicionado. Atendimento em SP e ABC. WhatsApp: (11) 96346-2516.',
  },
  '/ar-condicionado-sao-paulo': {
    title: 'Ar Condicionado em São Paulo (SP) | Instalação e Manutenção | New Clima',
    description: 'Instalação e manutenção de ar condicionado em São Paulo. Técnicos certificados em toda a capital. Orçamento gratuito: (11) 96346-2516.',
  },
  '/ar-condicionado-santo-andre': {
    title: 'Ar Condicionado em Santo André | Instalação e Manutenção | New Clima',
    description: 'Instalação e manutenção de ar condicionado em Santo André. Técnicos certificados e orçamento gratuito.',
  },
  '/ar-condicionado-sao-bernardo-do-campo': {
    title: 'Ar Condicionado em São Bernardo do Campo | New Clima',
    description: 'Instalação e manutenção de ar condicionado em São Bernardo do Campo. Técnicos especializados em sistemas residenciais e comerciais.',
  },
  '/ar-condicionado-sao-caetano-do-sul': {
    title: 'Ar Condicionado em São Caetano do Sul | Instalação Premium | New Clima',
    description: 'Instalação e manutenção de ar condicionado em São Caetano do Sul. Serviço premium para residências, clínicas e empresas.',
  },
  '/ar-condicionado-diadema': {
    title: 'Ar Condicionado em Diadema | Instalação e Manutenção | New Clima',
    description: 'Instalação e manutenção de ar condicionado em Diadema. Técnicos certificados e atendimento rápido.',
  },
  '/ar-condicionado-maua': {
    title: 'Ar Condicionado em Mauá | Instalação e Manutenção | New Clima',
    description: 'Instalação e manutenção de ar condicionado em Mauá. Técnicos certificados e atendimento rápido.',
  },
  '/blog/ar-condicionado-inverter': {
    title: 'Ar Condicionado Inverter: Vale a Pena? | New Clima Blog',
    description: 'Descubra se o ar condicionado inverter compensa. Economia de até 60% na conta de luz, mais silêncio e durabilidade.',
  },
  '/blog/instalacao-ar-condicionado-apartamento-sp': {
    title: 'Instalação de Ar Condicionado em Apartamento em SP | New Clima Blog',
    description: 'Guia completo para instalar ar condicionado em apartamento em São Paulo. Normas, varanda técnica, drenagem e elétrica.',
  },
  '/blog/como-calcular-btus-ar-condicionado': {
    title: 'Como Calcular BTUs do Ar Condicionado | New Clima Blog',
    description: 'Aprenda a calcular a potência ideal (BTUs) para cada ambiente. Fórmula simples e exemplos práticos.',
  },
  '/blog/pmoc-obrigatorio-sao-paulo': {
    title: 'PMOC Obrigatório: O Que Sua Empresa Precisa Saber | New Clima Blog',
    description: 'PMOC obrigatório para empresas com mais de 60.000 BTUs. Multas chegam a R$ 1,5 milhão.',
  },
  '/blog/pmoc-obrigatorio-sao-paulo-lei': {
    title: 'PMOC: O Que É e Por Que Sua Empresa É Obrigada a Ter | New Clima Blog',
    description: 'Lei 13.589/2018 obriga empresas com mais de 60.000 BTUs a terem PMOC em SP.',
  },
  '/blog/multa-pmoc-sao-paulo': {
    title: 'Multa por Não Ter PMOC em SP: R$ 2.000 a R$ 1,5 Milhão | New Clima Blog',
    description: 'Valores das multas por falta de PMOC em São Paulo e como regularizar antes de ser autuado.',
  },
  '/blog/pmoc-condominios-sao-paulo': {
    title: 'PMOC para Condomínios em SP: Guia para Síndicos | New Clima Blog',
    description: 'PMOC obrigatório para condomínios em São Paulo. Responsabilidades do síndico e como regularizar.',
  },
  '/blog/quanto-custa-pmoc-sao-paulo': {
    title: 'Quanto Custa o PMOC em São Paulo? Preços 2026 | New Clima Blog',
    description: 'Preços do PMOC em SP: R$ 400 a R$ 2.500/mês. Veja o que está incluso e calcule o ROI.',
  },
  '/blog/quanto-custa-instalar-ar-condicionado-sp': {
    title: 'Quanto Custa Instalar Ar Condicionado em SP em 2026? | New Clima Blog',
    description: 'Tabela de preços de instalação de ar condicionado em São Paulo em 2026.',
  },
  '/blog/qual-ar-condicionado-comprar-2026': {
    title: 'Qual Ar Condicionado Comprar em 2026? Guia Completo SP | New Clima Blog',
    description: 'Guia para escolher o ar condicionado certo para São Paulo em 2026. Inverter vs convencional e melhores marcas.',
  },
  '/blog/split-vs-multi-split-apartamento-sp': {
    title: 'Split ou Multi Split para Apartamento em SP? | New Clima Blog',
    description: 'Quando escolher split ou multi split para apartamento em São Paulo. Diferenças de custo e economia.',
  },
  '/blog/manutencao-ar-condicionado-consequencias': {
    title: 'O Que Acontece Sem Manutenção no Ar Condicionado? | New Clima Blog',
    description: 'Do aumento na conta de luz à morte prematura do compressor — o que esperar sem manutenção.',
  },
  '/blog/lg-round-cassette': {
    title: 'LG Round Cassette: Climatização Circular | New Clima Blog',
    description: 'Conheça o LG Round Cassette e sua distribuição de ar em 360 graus para ambientes de alto padrão.',
  },
  '/blog/instalacao-ar-condicionado-obra-limpa': {
    title: 'Obra Limpa: Instalar Ar-Condicionado Sem Quebra-Quebra | New Clima Blog',
    description: 'Como instalar ar condicionado sem sujeira e quebradeira. Método Obra Limpa da New Clima.',
  },
  '/blog/ar-condicionado-quarto': {
    title: 'Como Instalar Ar Condicionado no Quarto | New Clima Blog',
    description: 'Posicionamento ideal do ar condicionado no quarto para noites de sono perfeitas.',
  },
  '/blog/split-convencional-vs-inverter': {
    title: 'Split Convencional vs Inverter: Qual Escolher? | New Clima Blog',
    description: 'Diferenças entre split convencional e inverter. Qual a melhor escolha para sua realidade.',
  },
  '/blog/ar-condicionado-empresas-vrf': {
    title: 'Ar Condicionado para Empresas: Split ao VRF | New Clima Blog',
    description: 'Soluções de climatização corporativa com foco em ROI. Do split ao sistema VRF.',
  },
}

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers()
  const pathname = headersList.get('x-pathname') ?? headersList.get('x-invoke-path') ?? '/'
  const meta = metaMap[pathname]
  const base = 'https://www.newclimaar.com.br'
  const canonical = `${base}${pathname}`

  if (!meta) {
    return {
      title: 'New Clima Ar | Instalação e Manutenção de Ar Condicionado em SP e ABC Paulista',
      description: 'Instalação e manutenção de ar condicionado em São Paulo e ABC Paulista. 7 anos de experiência, técnicos certificados e visita gratuita. Ligue (11) 96346-2516.',
      metadataBase: new URL(base),
      alternates: { canonical },
      robots: { index: true, follow: true },
    }
  }

  return {
    title: meta.title,
    description: meta.description,
    metadataBase: new URL(base),
    alternates: { canonical },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: canonical,
      type: 'website',
      images: [{ url: '/images/logo-new-clima.png' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-S26Q4YLC2R"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-S26Q4YLC2R');
            `,
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
