import { Metadata } from 'next'
import SlugClient from './SlugClient'

type Props = {
  params: { slug?: string[] }
}

const metaMap: Record<string, { title: string; description: string }> = {
  'instalacao-ar-condicionado-split-sao-paulo': {
    title: 'Instalação de Ar Condicionado Split em São Paulo | New Clima',
    description: 'Instalação de ar condicionado split e multi split em São Paulo e ABC. Técnicos certificados, infraestrutura embutida, garantia de 1 ano. Orçamento: (11) 96346-2516.',
  },
  'ar-condicionado-comercial-sao-paulo': {
    title: 'Ar Condicionado Cassete e Piso-Teto para Empresas em SP | New Clima',
    description: 'Sistemas de ar condicionado comercial em São Paulo e ABC. Cassete, Piso-Teto e Dutado para lojas, escritórios e restaurantes.',
  },
  'instalacao-vrf-mini-vrf-sao-paulo': {
    title: 'Instalação de Sistema VRF e Mini VRF em São Paulo | New Clima',
    description: 'Especialistas em sistemas VRF e Mini VRF em São Paulo e ABC. Projetos para residências de alto padrão e edifícios corporativos.',
  },
  'manutencao-preventiva-ar-condicionado-sp': {
    title: 'Manutenção Preventiva de Ar Condicionado e PMOC em SP | New Clima',
    description: 'Manutenção preventiva e gestão de PMOC em São Paulo e ABC. Conformidade com a Lei 13.589/2018.',
  },
  'manutencao-corretiva-ar-condicionado-sp': {
    title: 'Conserto de Ar Condicionado em São Paulo e ABC | New Clima',
    description: 'Conserto de ar condicionado em SP e ABC. Diagnóstico rápido, peças originais e garantia de 90 dias.',
  },
  'limpeza-higienizacao-ar-condicionado-sp': {
    title: 'Limpeza e Higienização de Ar Condicionado em São Paulo | New Clima',
    description: 'Limpeza profunda e higienização de ar condicionado em SP e ABC. Bactericida profissional, eliminação de fungos e ácaros.',
  },
  'blog': {
    title: 'Blog sobre Ar Condicionado em SP | New Clima',
    description: 'Dicas técnicas, guias de compra e legislação sobre ar condicionado em São Paulo e ABC Paulista.',
  },
  'sobre': {
    title: 'Sobre a New Clima Ar Condicionado | Especialistas em SP e ABC',
    description: 'Conheça a New Clima. Desde 2018 somos referência em instalação e manutenção de ar condicionado em SP e ABC.',
  },
  'contato': {
    title: 'Contato | New Clima Ar Condicionado SP e ABC',
    description: 'Entre em contato com a New Clima. Atendimento em SP e ABC. WhatsApp: (11) 96346-2516.',
  },
  'ar-condicionado-sao-paulo': {
    title: 'Ar Condicionado em São Paulo (SP) | Instalação e Manutenção | New Clima',
    description: 'Instalação e manutenção de ar condicionado em São Paulo. Técnicos certificados. Orçamento gratuito: (11) 96346-2516.',
  },
  'ar-condicionado-santo-andre': {
    title: 'Ar Condicionado em Santo André | Instalação e Manutenção | New Clima',
    description: 'Instalação e manutenção de ar condicionado em Santo André. Técnicos certificados e orçamento gratuito.',
  },
  'ar-condicionado-sao-bernardo-do-campo': {
    title: 'Ar Condicionado em São Bernardo do Campo | New Clima',
    description: 'Instalação e manutenção de ar condicionado em São Bernardo do Campo. Técnicos especializados.',
  },
  'ar-condicionado-sao-caetano-do-sul': {
    title: 'Ar Condicionado em São Caetano do Sul | Instalação Premium | New Clima',
    description: 'Instalação e manutenção de ar condicionado em São Caetano do Sul. Serviço premium para residências e empresas.',
  },
  'ar-condicionado-diadema': {
    title: 'Ar Condicionado em Diadema | Instalação e Manutenção | New Clima',
    description: 'Instalação e manutenção de ar condicionado em Diadema. Técnicos certificados e atendimento rápido.',
  },
  'ar-condicionado-maua': {
    title: 'Ar Condicionado em Mauá | Instalação e Manutenção | New Clima',
    description: 'Instalação e manutenção de ar condicionado em Mauá. Técnicos certificados e atendimento rápido.',
  },
  'blog/ar-condicionado-inverter': {
    title: 'Ar Condicionado Inverter: Vale a Pena? | New Clima Blog',
    description: 'Descubra se o ar condicionado inverter compensa. Economia de até 60% na conta de luz.',
  },
  'blog/instalacao-ar-condicionado-apartamento-sp': {
    title: 'Instalação de Ar Condicionado em Apartamento em SP | New Clima Blog',
    description: 'Guia completo para instalar ar condicionado em apartamento em São Paulo.',
  },
  'blog/como-calcular-btus-ar-condicionado': {
    title: 'Como Calcular BTUs do Ar Condicionado | New Clima Blog',
    description: 'Aprenda a calcular a potência ideal em BTUs para cada ambiente.',
  },
  'blog/pmoc-obrigatorio-sao-paulo': {
    title: 'PMOC Obrigatório: O Que Sua Empresa Precisa Saber | New Clima Blog',
    description: 'PMOC obrigatório para empresas com mais de 60.000 BTUs. Multas até R$ 1,5 milhão.',
  },
  'blog/pmoc-obrigatorio-sao-paulo-lei': {
    title: 'PMOC: O Que É e Por Que Sua Empresa É Obrigada | New Clima Blog',
    description: 'Lei 13.589/2018 obriga empresas com mais de 60.000 BTUs a terem PMOC em SP.',
  },
  'blog/multa-pmoc-sao-paulo': {
    title: 'Multa por Não Ter PMOC em SP: R$ 2.000 a R$ 1,5 Milhão | New Clima Blog',
    description: 'Valores das multas por falta de PMOC em São Paulo e como regularizar.',
  },
  'blog/pmoc-condominios-sao-paulo': {
    title: 'PMOC para Condomínios em SP: Guia para Síndicos | New Clima Blog',
    description: 'PMOC obrigatório para condomínios em SP. Responsabilidades do síndico.',
  },
  'blog/quanto-custa-pmoc-sao-paulo': {
    title: 'Quanto Custa o PMOC em São Paulo? Preços 2026 | New Clima Blog',
    description: 'Preços do PMOC em SP: R$ 400 a R$ 2.500/mês. O que está incluso e ROI.',
  },
  'blog/quanto-custa-instalar-ar-condicionado-sp': {
    title: 'Quanto Custa Instalar Ar Condicionado em SP em 2026? | New Clima Blog',
    description: 'Tabela de preços de instalação de ar condicionado em São Paulo em 2026.',
  },
  'blog/qual-ar-condicionado-comprar-2026': {
    title: 'Qual Ar Condicionado Comprar em 2026? Guia SP | New Clima Blog',
    description: 'Guia para escolher o ar condicionado certo em SP. Inverter vs convencional.',
  },
  'blog/split-vs-multi-split-apartamento-sp': {
    title: 'Split ou Multi Split para Apartamento em SP? | New Clima Blog',
    description: 'Quando escolher split ou multi split para apartamento em São Paulo.',
  },
  'blog/manutencao-ar-condicionado-consequencias': {
    title: 'O Que Acontece Sem Manutenção no Ar Condicionado? | New Clima Blog',
    description: 'Do aumento na conta de luz à morte do compressor — consequências sem manutenção.',
  },
  'blog/lg-round-cassette': {
    title: 'LG Round Cassette: Climatização 360° | New Clima Blog',
    description: 'LG Round Cassette com distribuição de ar em 360 graus para ambientes de alto padrão.',
  },
  'blog/instalacao-ar-condicionado-obra-limpa': {
    title: 'Obra Limpa: Ar Condicionado Sem Quebra-Quebra | New Clima Blog',
    description: 'Como instalar ar condicionado sem sujeira. Método Obra Limpa da New Clima.',
  },
  'blog/ar-condicionado-quarto': {
    title: 'Como Instalar Ar Condicionado no Quarto | New Clima Blog',
    description: 'Posicionamento ideal do ar condicionado no quarto para noites perfeitas.',
  },
  'blog/split-convencional-vs-inverter': {
    title: 'Split Convencional vs Inverter: Qual Escolher? | New Clima Blog',
    description: 'Diferenças entre split convencional e inverter para São Paulo.',
  },
  'instalacao-ar-condicionado-moema': {
    title: 'Instalação de Ar Condicionado em Moema SP | New Clima',
    description: 'Instalação e manutenção de ar condicionado em Moema. Técnicos certificados, obra limpa e garantia por escrito. Visita técnica gratuita. (11) 96346-2516.',
  },
  'instalacao-ar-condicionado-vila-mariana': {
    title: 'Instalação de Ar Condicionado em Vila Mariana SP | New Clima',
    description: 'Instalação e manutenção de ar condicionado em Vila Mariana. Técnicos certificados, obra limpa e garantia por escrito. Visita técnica gratuita. (11) 96346-2516.',
  },
  'instalacao-ar-condicionado-pinheiros': {
    title: 'Instalação de Ar Condicionado em Pinheiros SP | New Clima',
    description: 'Instalação e manutenção de ar condicionado em Pinheiros. Técnicos certificados, obra limpa e garantia por escrito. Visita técnica gratuita. (11) 96346-2516.',
  },
  'instalacao-ar-condicionado-itaim-bibi': {
    title: 'Instalação de Ar Condicionado no Itaim Bibi SP | New Clima',
    description: 'Instalação e manutenção de ar condicionado no Itaim Bibi. Técnicos certificados, obra limpa e garantia por escrito. Visita técnica gratuita. (11) 96346-2516.',
  },
  'instalacao-ar-condicionado-jardins': {
    title: 'Instalação de Ar Condicionado nos Jardins SP | New Clima',
    description: 'Instalação e manutenção de ar condicionado nos Jardins. Técnicos certificados, obra limpa e garantia por escrito. Visita técnica gratuita. (11) 96346-2516.',
  },
  'instalacao-ar-condicionado-tatuape': {
    title: 'Instalação de Ar Condicionado no Tatuapé SP | New Clima',
    description: 'Instalação e manutenção de ar condicionado no Tatuapé. Técnicos certificados, obra limpa e garantia por escrito. Visita técnica gratuita. (11) 96346-2516.',
  },
  'instalacao-ar-condicionado-santana': {
    title: 'Instalação de Ar Condicionado em Santana SP | New Clima',
    description: 'Instalação e manutenção de ar condicionado em Santana. Técnicos certificados, obra limpa e garantia por escrito. Visita técnica gratuita. (11) 96346-2516.',
  },
  'instalacao-ar-condicionado-brooklin': {
    title: 'Instalação de Ar Condicionado no Brooklin SP | New Clima',
    description: 'Instalação e manutenção de ar condicionado no Brooklin. Técnicos certificados, obra limpa e garantia por escrito. Visita técnica gratuita. (11) 96346-2516.',
  },
  'instalacao-ar-condicionado-perdizes': {
    title: 'Instalação de Ar Condicionado em Perdizes SP | New Clima',
    description: 'Instalação e manutenção de ar condicionado em Perdizes. Técnicos certificados, obra limpa e garantia por escrito. Visita técnica gratuita. (11) 96346-2516.',
  },
  'instalacao-ar-condicionado-mooca': {
    title: 'Instalação de Ar Condicionado na Mooca SP | New Clima',
    description: 'Instalação e manutenção de ar condicionado na Mooca. Técnicos certificados, obra limpa e garantia por escrito. Visita técnica gratuita. (11) 96346-2516.',
  },
  'instalacao-ar-condicionado-analia-franco': {
    title: 'Instalação de Ar Condicionado no Anália Franco SP | New Clima',
    description: 'Instalação e manutenção de ar condicionado no Anália Franco. Técnicos certificados, obra limpa e garantia por escrito. Visita técnica gratuita. (11) 96346-2516.',
  },
  'instalacao-ar-condicionado-vila-madalena': {
    title: 'Instalação de Ar Condicionado em Vila Madalena SP | New Clima',
    description: 'Instalação e manutenção de ar condicionado em Vila Madalena. Técnicos certificados, obra limpa e garantia por escrito. Visita técnica gratuita. (11) 96346-2516.',
  },
  'instalacao-ar-condicionado-campo-belo': {
    title: 'Instalação de Ar Condicionado em Campo Belo SP | New Clima',
    description: 'Instalação e manutenção de ar condicionado em Campo Belo. Técnicos certificados, obra limpa e garantia por escrito. Visita técnica gratuita. (11) 96346-2516.',
  },
  'instalacao-ar-condicionado-saude': {
    title: 'Instalação de Ar Condicionado na Saúde SP | New Clima',
    description: 'Instalação e manutenção de ar condicionado na Saúde. Técnicos certificados, obra limpa e garantia por escrito. Visita técnica gratuita. (11) 96346-2516.',
  },
  'instalacao-ar-condicionado-higienopolis': {
    title: 'Instalação de Ar Condicionado em Higienópolis SP | New Clima',
    description: 'Instalação e manutenção de ar condicionado em Higienópolis. Técnicos certificados, obra limpa e garantia por escrito. Visita técnica gratuita. (11) 96346-2516.',
  },
  'instalacao-ar-condicionado-lapa': {
    title: 'Instalação de Ar Condicionado na Lapa SP | New Clima',
    description: 'Instalação e manutenção de ar condicionado na Lapa. Técnicos certificados, obra limpa e garantia por escrito. Visita técnica gratuita. (11) 96346-2516.',
  },
  'instalacao-ar-condicionado-santo-amaro': {
    title: 'Instalação de Ar Condicionado em Santo Amaro SP | New Clima',
    description: 'Instalação e manutenção de ar condicionado em Santo Amaro. Técnicos certificados, obra limpa e garantia por escrito. Visita técnica gratuita. (11) 96346-2516.',
  },
  'instalacao-ar-condicionado-tucuruvi': {
    title: 'Instalação de Ar Condicionado no Tucuruvi SP | New Clima',
    description: 'Instalação e manutenção de ar condicionado no Tucuruvi. Técnicos certificados, obra limpa e garantia por escrito. Visita técnica gratuita. (11) 96346-2516.',
  },
  'instalacao-ar-condicionado-ipiranga': {
    title: 'Instalação de Ar Condicionado no Ipiranga SP | New Clima',
    description: 'Instalação e manutenção de ar condicionado no Ipiranga. Técnicos certificados, obra limpa e garantia por escrito. Visita técnica gratuita. (11) 96346-2516.',
  },
  'instalacao-ar-condicionado-vila-prudente': {
    title: 'Instalação de Ar Condicionado em Vila Prudente SP | New Clima',
    description: 'Instalação e manutenção de ar condicionado em Vila Prudente. Técnicos certificados, obra limpa e garantia por escrito. Visita técnica gratuita. (11) 96346-2516.',
  },
  'instalacao-ar-condicionado-jabaquara': {
    title: 'Instalação de Ar Condicionado no Jabaquara SP | New Clima',
    description: 'Instalação e manutenção de ar condicionado no Jabaquara. Técnicos certificados, obra limpa e garantia por escrito. Visita técnica gratuita. (11) 96346-2516.',
  },
  'instalacao-ar-condicionado-campo-grande': {
    title: 'Instalação de Ar Condicionado em Campo Grande SP | New Clima',
    description: 'Instalação e manutenção de ar condicionado em Campo Grande. Técnicos certificados, obra limpa e garantia por escrito. Visita técnica gratuita. (11) 96346-2516.',
  },
  'instalacao-ar-condicionado-penha': {
    title: 'Instalação de Ar Condicionado na Penha SP | New Clima',
    description: 'Instalação e manutenção de ar condicionado na Penha. Técnicos certificados, obra limpa e garantia por escrito. Visita técnica gratuita. (11) 96346-2516.',
  },
  'instalacao-ar-condicionado-cursino': {
    title: 'Instalação de Ar Condicionado no Cursino SP | New Clima',
    description: 'Instalação e manutenção de ar condicionado no Cursino. Técnicos certificados, obra limpa e garantia por escrito. Visita técnica gratuita. (11) 96346-2516.',
  },
  'instalacao-ar-condicionado-agua-rasa': {
    title: 'Instalação de Ar Condicionado na Água Rasa SP | New Clima',
    description: 'Instalação e manutenção de ar condicionado na Água Rasa. Técnicos certificados, obra limpa e garantia por escrito. Visita técnica gratuita. (11) 96346-2516.',
  },
  'instalacao-ar-condicionado-bela-vista': {
    title: 'Instalação de Ar Condicionado na Bela Vista SP | New Clima',
    description: 'Instalação e manutenção de ar condicionado na Bela Vista. Técnicos certificados, obra limpa e garantia por escrito. Visita técnica gratuita. (11) 96346-2516.',
  },
  'instalacao-ar-condicionado-butanta': {
    title: 'Instalação de Ar Condicionado no Butantã SP | New Clima',
    description: 'Instalação e manutenção de ar condicionado no Butantã. Técnicos certificados, obra limpa e garantia por escrito. Visita técnica gratuita. (11) 96346-2516.',
  },
  'instalacao-ar-condicionado-vila-olimpia': {
    title: 'Instalação de Ar Condicionado em Vila Olímpia SP | New Clima',
    description: 'Instalação e manutenção de ar condicionado em Vila Olímpia. Técnicos certificados, obra limpa e garantia por escrito. Visita técnica gratuita. (11) 96346-2516.',
  },
  'instalacao-ar-condicionado-pompeia': {
    title: 'Instalação de Ar Condicionado em Pompéia SP | New Clima',
    description: 'Instalação e manutenção de ar condicionado em Pompéia. Técnicos certificados, obra limpa e garantia por escrito. Visita técnica gratuita. (11) 96346-2516.',
  },
  'instalacao-ar-condicionado-paraiso': {
    title: 'Instalação de Ar Condicionado no Paraíso SP | New Clima',
    description: 'Instalação e manutenção de ar condicionado no Paraíso. Técnicos certificados, obra limpa e garantia por escrito. Próximo à Vila Mariana. (11) 96346-2516.',
  },
  'instalacao-ar-condicionado-aclimacao': {
    title: 'Instalação de Ar Condicionado na Aclimação SP | New Clima',
    description: 'Instalação e manutenção de ar condicionado na Aclimação. Técnicos certificados, obra limpa e garantia por escrito. Próximo à Vila Mariana. (11) 96346-2516.',
  },
  'instalacao-ar-condicionado-mirandopolis': {
    title: 'Instalação de Ar Condicionado em Mirandópolis SP | New Clima',
    description: 'Instalação e manutenção de ar condicionado em Mirandópolis. Técnicos certificados, obra limpa e garantia por escrito. (11) 96346-2516.',
  },
  'instalacao-ar-condicionado-planalto-paulista': {
    title: 'Instalação de Ar Condicionado no Planalto Paulista SP | New Clima',
    description: 'Instalação e manutenção de ar condicionado no Planalto Paulista. Técnicos certificados, obra limpa e garantia por escrito. (11) 96346-2516.',
  },
  'instalacao-ar-condicionado-vila-clementino': {
    title: 'Instalação de Ar Condicionado em Vila Clementino SP | New Clima',
    description: 'Instalação e manutenção de ar condicionado em Vila Clementino. Técnicos certificados, obra limpa e garantia por escrito. (11) 96346-2516.',
  },
  'instalacao-ar-condicionado-chacara-klabin': {
    title: 'Instalação de Ar Condicionado na Chácara Klabin SP | New Clima',
    description: 'Instalação e manutenção de ar condicionado na Chácara Klabin. Técnicos certificados, obra limpa e garantia por escrito. (11) 96346-2516.',
  },
  'instalacao-ar-condicionado-cambuci': {
    title: 'Instalação de Ar Condicionado no Cambuci SP | New Clima',
    description: 'Instalação e manutenção de ar condicionado no Cambuci. Técnicos certificados, obra limpa e garantia por escrito. (11) 96346-2516.',
  },
  'instalacao-ar-condicionado-liberdade': {
    title: 'Instalação de Ar Condicionado na Liberdade SP | New Clima',
    description: 'Instalação e manutenção de ar condicionado na Liberdade. Técnicos certificados, obra limpa e garantia por escrito. (11) 96346-2516.',
  },
  'ar-condicionado-clinica-medica-sp': {
    title: 'Ar Condicionado para Clínicas Médicas em SP | New Clima',
    description: 'Instalação, manutenção e PMOC para clínicas médicas em São Paulo. Conformidade com a Lei 13.589/18. Técnicos certificados. (11) 96346-2516.',
  },
  'ar-condicionado-escritorio-sao-paulo': {
    title: 'Ar Condicionado para Escritórios em São Paulo | New Clima',
    description: 'Sistemas de climatização para escritórios e espaços corporativos em SP. Sem barulho, sem parada e contrato de manutenção. (11) 96346-2516.',
  },
  'ar-condicionado-condominio-sp': {
    title: 'Ar Condicionado para Condomínios em SP | New Clima',
    description: 'Instalação, manutenção e PMOC para condomínios em São Paulo e ABC. Contratos para síndicos e administradoras. (11) 96346-2516.',
  },
  'ar-condicionado-restaurante-sp': {
    title: 'Ar Condicionado para Restaurantes em SP | New Clima',
    description: 'Climatização para restaurantes, bares e lanchonetes em SP. PMOC para Vigilância Sanitária e manutenção de emergência. (11) 96346-2516.',
  },
  'ar-condicionado-hotel-sp': {
    title: 'Ar Condicionado para Hotéis em São Paulo | New Clima',
    description: 'Sistemas de climatização para hotéis e apart-hotéis em SP. PMOC obrigatório, manutenção silenciosa e atendimento 24h. (11) 96346-2516.',
  },
  'ar-condicionado-pousada-sp': {
    title: 'Ar Condicionado para Pousadas em SP e ABC | New Clima',
    description: 'Instalação e manutenção de ar condicionado para pousadas em São Paulo e ABC Paulista. Conforto para hóspedes. (11) 96346-2516.',
  },
  'ar-condicionado-academia-sp': {
    title: 'Ar Condicionado para Academias em São Paulo | New Clima',
    description: 'Sistemas de alta capacidade para academias e estúdios em SP. PMOC e manutenção frequente para alta ocupação. (11) 96346-2516.',
  },
  'ar-condicionado-escola-sp': {
    title: 'Ar Condicionado para Escolas em São Paulo | New Clima',
    description: 'Instalação e PMOC para escolas, creches e universidades em SP. Qualidade do ar para alunos e professores. (11) 96346-2516.',
  },





  'instalacao-ar-condicionado-sp': {
    title: 'Instalação de Ar Condicionado em São Paulo | New Clima',
    description: 'Serviço completo de instalação de ar condicionado em São Paulo e ABC. Split, multi-split, VRF e cassete. Técnicos certificados e garantia por escrito. (11) 96346-2516.',
  },
  'manutencao-ar-condicionado-sp': {
    title: 'Manutenção de Ar Condicionado em São Paulo | New Clima',
    description: 'Manutenção preventiva e corretiva de ar condicionado em São Paulo e ABC. Todas as marcas, peças originais e garantia por escrito. (11) 96346-2516.',
  },
  'tecnico-ar-condicionado-sp': {
    title: 'Técnico de Ar Condicionado em São Paulo | New Clima',
    description: 'Técnicos certificados de ar condicionado em São Paulo e ABC. Instalação, manutenção e conserto com atendimento em até 2 horas. (11) 96346-2516.',
  },
  'conserto-ar-condicionado-sp': {
    title: 'Conserto de Ar Condicionado em São Paulo | New Clima',
    description: 'Conserto de ar condicionado em São Paulo e ABC. Diagnóstico preciso, peças originais e garantia de 90 dias. Atendimento em até 2 horas. (11) 96346-2516.',
  },
  'empresa-ar-condicionado-sp': {
    title: 'Empresa de Ar Condicionado em São Paulo | New Clima',
    description: 'New Clima — empresa especializada em ar condicionado em SP e ABC desde 2018. Instalação, manutenção, higienização e PMOC com garantia por escrito.',
  },
  'assistencia-tecnica-ar-condicionado-sp': {
    title: 'Assistência Técnica de Ar Condicionado em SP | New Clima',
    description: 'Assistência técnica especializada em ar condicionado em São Paulo e ABC. Conserto, manutenção e instalação com técnicos certificados. (11) 96346-2516.',
  },
  'instalacao-ar-condicionado-morumbi': {
    title: 'Instalação de Ar Condicionado no Morumbi SP | New Clima',
    description: 'Instalação e manutenção de ar condicionado no Morumbi. Técnicos certificados, obra limpa e garantia por escrito. Visita técnica gratuita. (11) 96346-2516.',
  },
  'mapa-site': {
    title: 'Mapa do Site | New Clima Ar Condicionado SP e ABC',
    description: 'Todas as páginas do site da New Clima Ar Condicionado organizadas por categoria: serviços, regiões e blog.',
  },
  'blog/ar-condicionado-empresas-vrf': {
    title: 'Ar Condicionado para Empresas: Split ao VRF | New Clima Blog',
    description: 'Soluções de climatização corporativa com foco em ROI. Do split ao VRF.',
  },
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slugArr = params.slug ?? []
  const key = slugArr.join('/')
  const meta = metaMap[key]
  const base = 'https://www.newclimaar.com.br'
  const canonical = `${base}/${key}`

  if (!meta) {
    return {
      title: 'New Clima Ar | Instalação e Manutenção de Ar Condicionado em SP e ABC Paulista',
      description: 'Instalação e manutenção de ar condicionado em São Paulo e ABC. 7 anos de experiência, técnicos certificados. Ligue (11) 96346-2516.',
    }
  }

  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: canonical,
      type: 'website',
      images: [{ url: `${base}/images/logo-new-clima.png` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
    },
  }
}

export default function SlugPage() {
  return <SlugClient />
}
