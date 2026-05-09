import { Metadata } from 'next'
import SlugClient from './SlugClient'

type MetaMap = {
  [key: string]: { title: string; description: string; canonical: string }
}

const metaMap: MetaMap = {
  '/instalacao-ar-condicionado-split-sao-paulo': {
    title: 'Instalação de Ar Condicionado Split em São Paulo | New Clima',
    description: 'Instalação de ar condicionado split e multi split em São Paulo e ABC Paulista. Técnicos certificados, infraestrutura embutida, garantia de 1 ano. Orçamento gratuito: (11) 96346-2516.',
    canonical: 'https://www.newclimaar.com.br/instalacao-ar-condicionado-split-sao-paulo',
  },
  '/ar-condicionado-comercial-sao-paulo': {
    title: 'Ar Condicionado Cassete e Piso-Teto para Empresas em SP | New Clima',
    description: 'Sistemas de ar condicionado comercial em São Paulo e ABC. Cassete, Piso-Teto e Dutado para lojas, escritórios e restaurantes. Projeto técnico completo.',
    canonical: 'https://www.newclimaar.com.br/ar-condicionado-comercial-sao-paulo',
  },
  '/instalacao-vrf-mini-vrf-sao-paulo': {
    title: 'Instalação de Sistema VRF e Mini VRF em São Paulo | New Clima',
    description: 'Especialistas em sistemas VRF e Mini VRF em São Paulo e ABC. Projetos para residências de alto padrão e edifícios corporativos com máxima eficiência energética.',
    canonical: 'https://www.newclimaar.com.br/instalacao-vrf-mini-vrf-sao-paulo',
  },
  '/manutencao-preventiva-ar-condicionado-sp': {
    title: 'Manutenção Preventiva de Ar Condicionado e PMOC em SP | New Clima',
    description: 'Manutenção preventiva de ar condicionado e gestão de PMOC em São Paulo e ABC. Conformidade com a Lei 13.589/2018. Contratos para empresas e condomínios.',
    canonical: 'https://www.newclimaar.com.br/manutencao-preventiva-ar-condicionado-sp',
  },
  '/manutencao-corretiva-ar-condicionado-sp': {
    title: 'Conserto de Ar Condicionado em São Paulo e ABC | New Clima',
    description: 'Manutenção corretiva e conserto de ar condicionado em São Paulo e ABC. Diagnóstico rápido, peças originais e garantia de 90 dias. Atendimento emergencial.',
    canonical: 'https://www.newclimaar.com.br/manutencao-corretiva-ar-condicionado-sp',
  },
  '/limpeza-higienizacao-ar-condicionado-sp': {
    title: 'Limpeza e Higienização de Ar Condicionado em São Paulo | New Clima',
    description: 'Limpeza profunda e higienização de ar condicionado em São Paulo e ABC. Bactericida profissional, eliminação de fungos e ácaros. Agende pelo WhatsApp.',
    canonical: 'https://www.newclimaar.com.br/limpeza-higienizacao-ar-condicionado-sp',
  },
  '/blog': {
    title: 'Blog sobre Ar Condicionado em SP | New Clima',
    description: 'Dicas técnicas, guias de compra e legislação sobre ar condicionado em São Paulo e ABC Paulista. Conteúdo especializado da New Clima Ar Condicionado.',
    canonical: 'https://www.newclimaar.com.br/blog',
  },
  '/sobre': {
    title: 'Sobre a New Clima Ar Condicionado | Especialistas em SP e ABC',
    description: 'Conheça a New Clima Ar Condicionado. Desde 2018 somos referência em instalação e manutenção de ar condicionado em São Paulo e ABC Paulista.',
    canonical: 'https://www.newclimaar.com.br/sobre',
  },
  '/contato': {
    title: 'Contato | New Clima Ar Condicionado SP e ABC',
    description: 'Entre em contato com a New Clima Ar Condicionado. Atendimento em São Paulo e ABC Paulista. WhatsApp: (11) 96346-2516.',
    canonical: 'https://www.newclimaar.com.br/contato',
  },
  '/ar-condicionado-sao-paulo': {
    title: 'Ar Condicionado em São Paulo (SP) | Instalação e Manutenção | New Clima',
    description: 'Instalação e manutenção de ar condicionado em São Paulo. Técnicos certificados em toda a capital paulista. Orçamento gratuito: (11) 96346-2516.',
    canonical: 'https://www.newclimaar.com.br/ar-condicionado-sao-paulo',
  },
  '/ar-condicionado-santo-andre': {
    title: 'Ar Condicionado em Santo André | Instalação e Manutenção | New Clima',
    description: 'Instalação e manutenção de ar condicionado em Santo André. Técnicos certificados, orçamento gratuito e atendimento rápido em toda a cidade.',
    canonical: 'https://www.newclimaar.com.br/ar-condicionado-santo-andre',
  },
  '/ar-condicionado-sao-bernardo-do-campo': {
    title: 'Ar Condicionado em São Bernardo do Campo | New Clima',
    description: 'Instalação e manutenção de ar condicionado em São Bernardo do Campo. Técnicos especializados em sistemas residenciais, comerciais e industriais.',
    canonical: 'https://www.newclimaar.com.br/ar-condicionado-sao-bernardo-do-campo',
  },
  '/ar-condicionado-sao-caetano-do-sul': {
    title: 'Ar Condicionado em São Caetano do Sul | Instalação Premium | New Clima',
    description: 'Instalação e manutenção de ar condicionado em São Caetano do Sul. Serviço premium para residências, clínicas e empresas. Orçamento gratuito.',
    canonical: 'https://www.newclimaar.com.br/ar-condicionado-sao-caetano-do-sul',
  },
  '/ar-condicionado-diadema': {
    title: 'Ar Condicionado em Diadema | Instalação e Manutenção | New Clima',
    description: 'Instalação e manutenção de ar condicionado em Diadema. Técnicos certificados, orçamento gratuito e atendimento rápido para residências e empresas.',
    canonical: 'https://www.newclimaar.com.br/ar-condicionado-diadema',
  },
  '/ar-condicionado-maua': {
    title: 'Ar Condicionado em Mauá | Instalação e Manutenção | New Clima',
    description: 'Instalação e manutenção de ar condicionado em Mauá. Técnicos certificados, orçamento gratuito e atendimento rápido para residências e empresas.',
    canonical: 'https://www.newclimaar.com.br/ar-condicionado-maua',
  },
  '/blog/ar-condicionado-inverter': {
    title: 'Ar Condicionado Inverter: Vale a Pena? | New Clima Blog',
    description: 'Descubra se o ar condicionado inverter realmente compensa. Economia de até 60% na conta de luz, mais silêncio e durabilidade. Guia completo.',
    canonical: 'https://www.newclimaar.com.br/blog/ar-condicionado-inverter',
  },
  '/blog/instalacao-ar-condicionado-apartamento-sp': {
    title: 'Instalação de Ar Condicionado em Apartamento em SP | New Clima Blog',
    description: 'Guia completo para instalar ar condicionado em apartamento em São Paulo. Normas de condomínio, varanda técnica, drenagem e elétrica.',
    canonical: 'https://www.newclimaar.com.br/blog/instalacao-ar-condicionado-apartamento-sp',
  },
  '/blog/como-calcular-btus-ar-condicionado': {
    title: 'Como Calcular BTUs do Ar Condicionado | New Clima Blog',
    description: 'Aprenda a calcular a potência ideal (BTUs) para cada ambiente. Fórmula simples, exemplos práticos e dicas dos especialistas da New Clima.',
    canonical: 'https://www.newclimaar.com.br/blog/como-calcular-btus-ar-condicionado',
  },
  '/blog/pmoc-obrigatorio-sao-paulo': {
    title: 'PMOC Obrigatório: O Que Sua Empresa Precisa Saber | New Clima Blog',
    description: 'PMOC é obrigatório para empresas com mais de 60.000 BTUs. Multas chegam a R$ 1,5 milhão. Saiba o que é e como regularizar.',
    canonical: 'https://www.newclimaar.com.br/blog/pmoc-obrigatorio-sao-paulo',
  },
  '/blog/pmoc-obrigatorio-sao-paulo-lei': {
    title: 'PMOC: O Que É e Por Que Sua Empresa É Obrigada a Ter | New Clima Blog',
    description: 'Lei 13.589/2018 obriga empresas com mais de 60.000 BTUs a terem PMOC. Veja quem é obrigado e como regularizar em SP.',
    canonical: 'https://www.newclimaar.com.br/blog/pmoc-obrigatorio-sao-paulo-lei',
  },
  '/blog/multa-pmoc-sao-paulo': {
    title: 'Multa por Não Ter PMOC em SP: R$ 2.000 a R$ 1,5 Milhão | New Clima Blog',
    description: 'Saiba os valores das multas por falta de PMOC em São Paulo, como funciona a fiscalização e como regularizar antes de ser autuado.',
    canonical: 'https://www.newclimaar.com.br/blog/multa-pmoc-sao-paulo',
  },
  '/blog/pmoc-condominios-sao-paulo': {
    title: 'PMOC para Condomínios em SP: Guia para Síndicos | New Clima Blog',
    description: 'Guia completo sobre PMOC obrigatório para condomínios em São Paulo. Responsabilidades do síndico, custos e passo a passo para regularizar.',
    canonical: 'https://www.newclimaar.com.br/blog/pmoc-condominios-sao-paulo',
  },
  '/blog/quanto-custa-pmoc-sao-paulo': {
    title: 'Quanto Custa o PMOC em São Paulo? Preços 2026 | New Clima Blog',
    description: 'Tabela de preços do PMOC em SP: R$ 400 a R$ 2.500/mês conforme o porte. Veja o que está incluso e calcule o ROI do contrato.',
    canonical: 'https://www.newclimaar.com.br/blog/quanto-custa-pmoc-sao-paulo',
  },
  '/blog/quanto-custa-instalar-ar-condicionado-sp': {
    title: 'Quanto Custa Instalar Ar Condicionado em SP em 2026? | New Clima Blog',
    description: 'Tabela completa de preços de instalação de ar condicionado em São Paulo em 2026. Split, multi split, cassete e o que encarece o serviço.',
    canonical: 'https://www.newclimaar.com.br/blog/quanto-custa-instalar-ar-condicionado-sp',
  },
  '/blog/qual-ar-condicionado-comprar-2026': {
    title: 'Qual Ar Condicionado Comprar em 2026? Guia Completo SP | New Clima Blog',
    description: 'Guia completo para escolher o ar condicionado certo para São Paulo em 2026. Inverter vs convencional, melhores marcas e cálculo de BTUs.',
    canonical: 'https://www.newclimaar.com.br/blog/qual-ar-condicionado-comprar-2026',
  },
  '/blog/split-vs-multi-split-apartamento-sp': {
    title: 'Split ou Multi Split para Apartamento em SP? | New Clima Blog',
    description: 'Descubra quando escolher split individual ou multi split para seu apartamento em São Paulo. Diferenças de custo e qual é mais econômico.',
    canonical: 'https://www.newclimaar.com.br/blog/split-vs-multi-split-apartamento-sp',
  },
  '/blog/manutencao-ar-condicionado-consequencias': {
    title: 'O Que Acontece Sem Manutenção no Ar Condicionado? | New Clima Blog',
    description: 'Veja o que acontece mês a mês com um ar condicionado sem manutenção: do aumento na conta de luz à morte prematura do compressor.',
    canonical: 'https://www.newclimaar.com.br/blog/manutencao-ar-condicionado-consequencias',
  },
}

export async function generateMetadata({ params }: { params: { slug?: string[] } }): Promise<Metadata> {
  const path = params.slug ? '/' + params.slug.join('/') : '/'
  const meta = metaMap[path]

  if (!meta) {
    return {
      title: 'New Clima Ar | Instalação e Manutenção de Ar Condicionado em SP',
      description: 'Especialistas em ar condicionado em São Paulo e ABC Paulista. Instalação, manutenção e limpeza com técnicos certificados.',
    }
  }

  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: meta.canonical },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: meta.canonical,
      type: 'website',
    },
  }
}

export default function SlugPage() {
  return <SlugClient />
}
