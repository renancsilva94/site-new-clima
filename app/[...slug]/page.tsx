import { Metadata } from 'next'
import SlugClient from './SlugClient'

type Props = {
  params: { slug?: string[] }
}

const BASE = 'https://www.newclimaar.com.br'

const metaMap: Record<string, { title: string; description: string }> = {
  // ─── HOME ────────────────────────────────────────────────────────────────
  '': {
    title: 'New Clima Ar | Instalação e Manutenção de Ar Condicionado em SP e ABC Paulista',
    description: 'Instalação e manutenção de ar condicionado em São Paulo e ABC. 7 anos de experiência, técnicos certificados e visita gratuita. Ligue (11) 96346-2516.',
  },

  // ─── SERVIÇOS ─────────────────────────────────────────────────────────────
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
  'servicos': {
    title: 'Serviços de Ar Condicionado em São Paulo e ABC | New Clima',
    description: 'Instalação, manutenção, limpeza e conserto de ar condicionado em SP e ABC. PMOC para empresas. Visita gratuita. (11) 96346-2516.',
  },

  // ─── PÁGINAS INSTITUCIONAIS ───────────────────────────────────────────────
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
  'mapa-site': {
    title: 'Mapa do Site | New Clima Ar Condicionado SP e ABC',
    description: 'Todas as páginas do site da New Clima Ar Condicionado organizadas por categoria: serviços, regiões e blog.',
  },

  // ─── CIDADES ABC ──────────────────────────────────────────────────────────
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

  // ─── BAIRROS SP ───────────────────────────────────────────────────────────
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
  'instalacao-ar-condicionado-morumbi': {
    title: 'Instalação de Ar Condicionado no Morumbi SP | New Clima',
    description: 'Instalação e manutenção de ar condicionado no Morumbi. Técnicos certificados, obra limpa e garantia por escrito. (11) 96346-2516.',
  },
  'instalacao-ar-condicionado-jardim-paulista': {
    title: 'Instalação de Ar Condicionado no Jardim Paulista | New Clima',
    description: 'Instalação e manutenção de ar condicionado no Jardim Paulista, SP. (11) 96346-2516.',
  },
  'instalacao-ar-condicionado-jardim-europa': {
    title: 'Instalação de Ar Condicionado no Jardim Europa | New Clima',
    description: 'Instalação e manutenção de ar condicionado no Jardim Europa, SP. (11) 96346-2516.',
  },
  'instalacao-ar-condicionado-vila-andrade': {
    title: 'Instalação de Ar Condicionado em Vila Andrade | New Clima',
    description: 'Instalação e manutenção de ar condicionado em Vila Andrade, SP. (11) 96346-2516.',
  },
  'instalacao-ar-condicionado-campo-limpo': {
    title: 'Instalação de Ar Condicionado em Campo Limpo | New Clima',
    description: 'Instalação e manutenção de ar condicionado em Campo Limpo, SP. (11) 96346-2516.',
  },
  'instalacao-ar-condicionado-interlagos': {
    title: 'Instalação de Ar Condicionado em Interlagos | New Clima',
    description: 'Instalação e manutenção de ar condicionado em Interlagos, SP. (11) 96346-2516.',
  },
  'instalacao-ar-condicionado-cerqueira-cesar': {
    title: 'Instalação de Ar Condicionado em Cerqueira César | New Clima',
    description: 'Instalação e manutenção de ar condicionado em Cerqueira César, SP. (11) 96346-2516.',
  },
  'instalacao-ar-condicionado-pacaembu': {
    title: 'Instalação de Ar Condicionado no Pacaembu | New Clima',
    description: 'Instalação e manutenção de ar condicionado no Pacaembu, SP. (11) 96346-2516.',
  },
  'instalacao-ar-condicionado-sumare': {
    title: 'Instalação de Ar Condicionado no Sumaré | New Clima',
    description: 'Instalação e manutenção de ar condicionado no Sumaré, SP. (11) 96346-2516.',
  },
  'instalacao-ar-condicionado-vila-leopoldina': {
    title: 'Instalação de Ar Condicionado em Vila Leopoldina | New Clima',
    description: 'Instalação e manutenção de ar condicionado em Vila Leopoldina, SP. (11) 96346-2516.',
  },
  'instalacao-ar-condicionado-barra-funda': {
    title: 'Instalação de Ar Condicionado na Barra Funda | New Clima',
    description: 'Instalação e manutenção de ar condicionado na Barra Funda, SP. (11) 96346-2516.',
  },
  'instalacao-ar-condicionado-alto-de-pinheiros': {
    title: 'Instalação de Ar Condicionado em Alto de Pinheiros | New Clima',
    description: 'Instalação e manutenção de ar condicionado em Alto de Pinheiros, SP. (11) 96346-2516.',
  },
  'instalacao-ar-condicionado-consolacao': {
    title: 'Instalação de Ar Condicionado na Consolação | New Clima',
    description: 'Instalação e manutenção de ar condicionado na Consolação, SP. (11) 96346-2516.',
  },
  'instalacao-ar-condicionado-vila-guilherme': {
    title: 'Instalação de Ar Condicionado em Vila Guilherme | New Clima',
    description: 'Instalação e manutenção de ar condicionado em Vila Guilherme, SP. (11) 96346-2516.',
  },
  'instalacao-ar-condicionado-vila-maria': {
    title: 'Instalação de Ar Condicionado em Vila Maria | New Clima',
    description: 'Instalação e manutenção de ar condicionado em Vila Maria, SP. (11) 96346-2516.',
  },
  'instalacao-ar-condicionado-casa-verde': {
    title: 'Instalação de Ar Condicionado em Casa Verde | New Clima',
    description: 'Instalação e manutenção de ar condicionado em Casa Verde, SP. (11) 96346-2516.',
  },
  'instalacao-ar-condicionado-mandaqui': {
    title: 'Instalação de Ar Condicionado em Mandaqui | New Clima',
    description: 'Instalação e manutenção de ar condicionado em Mandaqui, SP. (11) 96346-2516.',
  },
  'instalacao-ar-condicionado-tremembe': {
    title: 'Instalação de Ar Condicionado em Tremembé | New Clima',
    description: 'Instalação e manutenção de ar condicionado em Tremembé, SP. (11) 96346-2516.',
  },
  'instalacao-ar-condicionado-freguesia-do-o': {
    title: 'Instalação de Ar Condicionado na Freguesia do Ó | New Clima',
    description: 'Instalação e manutenção de ar condicionado na Freguesia do Ó, SP. (11) 96346-2516.',
  },
  'instalacao-ar-condicionado-limao': {
    title: 'Instalação de Ar Condicionado no Limão | New Clima',
    description: 'Instalação e manutenção de ar condicionado no Limão, SP. (11) 96346-2516.',
  },
  'instalacao-ar-condicionado-belem': {
    title: 'Instalação de Ar Condicionado em Belém | New Clima',
    description: 'Instalação e manutenção de ar condicionado em Belém, SP. (11) 96346-2516.',
  },
  'instalacao-ar-condicionado-bras': {
    title: 'Instalação de Ar Condicionado no Brás | New Clima',
    description: 'Instalação e manutenção de ar condicionado no Brás, SP. (11) 96346-2516.',
  },
  'instalacao-ar-condicionado-carrao': {
    title: 'Instalação de Ar Condicionado no Carrão | New Clima',
    description: 'Instalação e manutenção de ar condicionado no Carrão, SP. (11) 96346-2516.',
  },
  'instalacao-ar-condicionado-vila-formosa': {
    title: 'Instalação de Ar Condicionado em Vila Formosa | New Clima',
    description: 'Instalação e manutenção de ar condicionado em Vila Formosa, SP. (11) 96346-2516.',
  },
  'instalacao-ar-condicionado-sapopemba': {
    title: 'Instalação de Ar Condicionado em Sapopemba | New Clima',
    description: 'Instalação e manutenção de ar condicionado em Sapopemba, SP. (11) 96346-2516.',
  },
  'instalacao-ar-condicionado-penha-de-franca': {
    title: 'Instalação de Ar Condicionado na Penha de França | New Clima',
    description: 'Instalação e manutenção de ar condicionado na Penha de França, SP. (11) 96346-2516.',
  },
  'instalacao-ar-condicionado-jardim-analia': {
    title: 'Instalação de Ar Condicionado no Jardim Anália | New Clima',
    description: 'Instalação e manutenção de ar condicionado no Jardim Anália, SP. (11) 96346-2516.',
  },
  'instalacao-ar-condicionado-aricanduva': {
    title: 'Instalação de Ar Condicionado em Aricanduva | New Clima',
    description: 'Instalação e manutenção de ar condicionado em Aricanduva, SP. (11) 96346-2516.',
  },
  'instalacao-ar-condicionado-republica': {
    title: 'Instalação de Ar Condicionado na República | New Clima',
    description: 'Instalação e manutenção de ar condicionado na República, SP. (11) 96346-2516.',
  },
  'instalacao-ar-condicionado-santa-cecilia': {
    title: 'Instalação de Ar Condicionado em Santa Cecília | New Clima',
    description: 'Instalação e manutenção de ar condicionado em Santa Cecília, SP. (11) 96346-2516.',
  },
  'instalacao-ar-condicionado-bom-retiro': {
    title: 'Instalação de Ar Condicionado no Bom Retiro | New Clima',
    description: 'Instalação e manutenção de ar condicionado no Bom Retiro, SP. (11) 96346-2516.',
  },

  // ─── ZONAS ────────────────────────────────────────────────────────────────
  'ar-condicionado-zona-sul-sp': {
    title: 'Ar Condicionado na Zona Sul de São Paulo | New Clima',
    description: 'Instalação e manutenção de ar condicionado em todos os bairros da Zona Sul de SP. (11) 96346-2516.',
  },
  'ar-condicionado-zona-norte-sp': {
    title: 'Ar Condicionado na Zona Norte de São Paulo | New Clima',
    description: 'Instalação e manutenção de ar condicionado em todos os bairros da Zona Norte de SP. (11) 96346-2516.',
  },
  'ar-condicionado-zona-leste-sp': {
    title: 'Ar Condicionado na Zona Leste de São Paulo | New Clima',
    description: 'Instalação e manutenção de ar condicionado em todos os bairros da Zona Leste de SP. (11) 96346-2516.',
  },
  'ar-condicionado-zona-oeste-sp': {
    title: 'Ar Condicionado na Zona Oeste de São Paulo | New Clima',
    description: 'Instalação e manutenção de ar condicionado em todos os bairros da Zona Oeste de SP. (11) 96346-2516.',
  },
  'ar-condicionado-zona-central-sp': {
    title: 'Ar Condicionado na Região Central de São Paulo | New Clima',
    description: 'Instalação e manutenção de ar condicionado em todos os bairros da Região Central de SP. (11) 96346-2516.',
  },

  // ─── SEGMENTOS ────────────────────────────────────────────────────────────
  'ar-condicionado-clinica-medica-sp': { title: 'Ar Condicionado para Clínicas Médicas em SP | New Clima', description: 'Instalação, manutenção e PMOC para clínicas médicas em São Paulo. Conformidade com a Lei 13.589/18. Técnicos certificados. (11) 96346-2516.' },
  'ar-condicionado-escritorio-sao-paulo': { title: 'Ar Condicionado para Escritórios em São Paulo | New Clima', description: 'Sistemas de climatização para escritórios e espaços corporativos em SP. Sem barulho, sem parada e contrato de manutenção. (11) 96346-2516.' },
  'ar-condicionado-condominio-sp': { title: 'Ar Condicionado para Condomínios em SP | New Clima', description: 'Instalação, manutenção e PMOC para condomínios em São Paulo e ABC. Contratos para síndicos e administradoras. (11) 96346-2516.' },
  'ar-condicionado-restaurante-sp': { title: 'Ar Condicionado para Restaurantes em SP | New Clima', description: 'Climatização para restaurantes, bares e lanchonetes em SP. PMOC para Vigilância Sanitária e manutenção de emergência. (11) 96346-2516.' },
  'ar-condicionado-hotel-sp': { title: 'Ar Condicionado para Hotéis em São Paulo | New Clima', description: 'Sistemas de climatização para hotéis e apart-hotéis em SP. PMOC obrigatório, manutenção silenciosa e atendimento 24h. (11) 96346-2516.' },
  'ar-condicionado-pousada-sp': { title: 'Ar Condicionado para Pousadas em SP e ABC | New Clima', description: 'Instalação e manutenção de ar condicionado para pousadas em São Paulo e ABC Paulista. Conforto para hóspedes. (11) 96346-2516.' },
  'ar-condicionado-academia-sp': { title: 'Ar Condicionado para Academias em São Paulo | New Clima', description: 'Sistemas de alta capacidade para academias e estúdios em SP. PMOC e manutenção frequente para alta ocupação. (11) 96346-2516.' },
  'ar-condicionado-escola-sp': { title: 'Ar Condicionado para Escolas em São Paulo | New Clima', description: 'Instalação e PMOC para escolas, creches e universidades em SP. Qualidade do ar para alunos e professores. (11) 96346-2516.' },
  'ar-condicionado-farmacia-sao-paulo': { title: 'Ar Condicionado para Farmácias em São Paulo | New Clima', description: 'Instalação e manutenção de ar condicionado para farmácias em SP. Temperatura controlada para medicamentos, PMOC conforme ANVISA. (11) 96346-2516.' },
  'ar-condicionado-consultorio-odontologico-sao-paulo': { title: 'Ar Condicionado para Consultório Odontológico em SP | New Clima', description: 'Ar condicionado silencioso para consultórios odontológicos em São Paulo. PMOC, limpeza com bactericida e instalação fora do horário. (11) 96346-2516.' },
  'ar-condicionado-salao-beleza-sao-paulo': { title: 'Ar Condicionado para Salão de Beleza em São Paulo | New Clima', description: 'Instalação e manutenção de ar condicionado para salões de beleza e barbearias em SP e ABC. (11) 96346-2516.' },
  'ar-condicionado-supermercado-sao-paulo': { title: 'Ar Condicionado para Supermercados em São Paulo | New Clima', description: 'Instalação e manutenção de ar condicionado para supermercados em SP. PMOC, atendimento emergencial. (11) 96346-2516.' },
  'ar-condicionado-data-center-sao-paulo': { title: 'Ar Condicionado para Data Center e Sala de Servidor em SP | New Clima', description: 'Ar condicionado de precisão para data centers e salas de servidor em São Paulo. (11) 96346-2516.' },
  'ar-condicionado-coworking-sao-paulo': { title: 'Ar Condicionado para Coworking em São Paulo | New Clima', description: 'Instalação e manutenção de ar condicionado para coworkings em SP. Silencioso, PMOC e contrato de manutenção. (11) 96346-2516.' },
  'ar-condicionado-igreja-sao-paulo': { title: 'Ar Condicionado para Igrejas e Templos em São Paulo | New Clima', description: 'Instalação de ar condicionado para igrejas e templos em SP e ABC. Sistemas silenciosos. (11) 96346-2516.' },
  'ar-condicionado-laboratorio-sao-paulo': { title: 'Ar Condicionado para Laboratórios em São Paulo | New Clima', description: 'Instalação e manutenção de ar condicionado para laboratórios em SP. PMOC conforme ANVISA. (11) 96346-2516.' },
  'ar-condicionado-pet-shop-sao-paulo': { title: 'Ar Condicionado para Pet Shops e Clínicas Veterinárias em SP | New Clima', description: 'Ar condicionado para pet shops e clínicas veterinárias em São Paulo. (11) 96346-2516.' },
  'ar-condicionado-clinica-estetica-sao-paulo': { title: 'Ar Condicionado para Clínicas de Estética em São Paulo | New Clima', description: 'Instalação silenciosa de ar condicionado para clínicas de estética em SP. (11) 96346-2516.' },
  'ar-condicionado-loja-varejo-sao-paulo': { title: 'Ar Condicionado para Lojas e Varejo em São Paulo | New Clima', description: 'Instalação e manutenção de ar condicionado para lojas e varejo em SP. (11) 96346-2516.' },
  'ar-condicionado-banco-financeira-sao-paulo': { title: 'Ar Condicionado para Bancos e Financeiras em São Paulo | New Clima', description: 'Instalação e PMOC para agências bancárias em SP. (11) 96346-2516.' },
  'ar-condicionado-padaria-sao-paulo': { title: 'Ar Condicionado para Padarias e Confeitarias em São Paulo | New Clima', description: 'Ar condicionado para padarias em SP com projeto correto para o calor dos fornos. (11) 96346-2516.' },
  'ar-condicionado-concessionaria-sao-paulo': { title: 'Ar Condicionado para Concessionárias em São Paulo | New Clima', description: 'Instalação de ar condicionado para showrooms e concessionárias em SP e ABC. (11) 96346-2516.' },
  'ar-condicionado-escritorio-advocacia-sao-paulo': { title: 'Ar Condicionado para Escritório de Advocacia em SP | New Clima', description: 'Ar condicionado silencioso para escritórios de advocacia em São Paulo. (11) 96346-2516.' },
  'ar-condicionado-consultorio-psicologia-sao-paulo': { title: 'Ar Condicionado para Consultório de Psicologia em SP | New Clima', description: 'Ar condicionado ultrasilencioso para consultórios de psicologia em São Paulo. (11) 96346-2516.' },
  'ar-condicionado-clinica-fisioterapia-sao-paulo': { title: 'Ar Condicionado para Clínicas de Fisioterapia em SP | New Clima', description: 'Instalação e PMOC para clínicas de fisioterapia em São Paulo. (11) 96346-2516.' },
  'ar-condicionado-creche-sao-paulo': { title: 'Ar Condicionado para Creches e Berçários em São Paulo | New Clima', description: 'Instalação de ar condicionado para creches e berçários em SP. (11) 96346-2516.' },
  'ar-condicionado-bar-pub-sao-paulo': { title: 'Ar Condicionado para Bares e Pubs em São Paulo | New Clima', description: 'Instalação e manutenção de ar condicionado para bares e pubs em SP. (11) 96346-2516.' },

  // ─── TIPOS DE EQUIPAMENTO ─────────────────────────────────────────────────
  'instalacao-ar-condicionado-sp': { title: 'Instalação de Ar Condicionado em São Paulo | New Clima', description: 'Serviço completo de instalação de ar condicionado em São Paulo e ABC. Split, multi-split, VRF e cassete. Técnicos certificados e garantia por escrito. (11) 96346-2516.' },
  'instalacao-ar-condicionado-split-sp': { title: 'Instalação de Ar Condicionado Split em São Paulo | New Clima', description: 'Instalação de split em SP com obra limpa, infraestrutura completa e garantia de 1 ano. (11) 96346-2516.' },
  'instalacao-ar-condicionado-cassete-sp': { title: 'Instalação de Ar Condicionado Cassete em São Paulo | New Clima', description: 'Instalação de cassete de teto em SP e ABC. (11) 96346-2516.' },
  'instalacao-ar-condicionado-piso-teto-sp': { title: 'Instalação de Ar Condicionado Piso-Teto em São Paulo | New Clima', description: 'Instalação de piso-teto em SP. (11) 96346-2516.' },
  'instalacao-multi-split-sp': { title: 'Instalação de Multi Split em São Paulo | New Clima', description: 'Instalação de multi split em SP — vários cômodos, uma condensadora. (11) 96346-2516.' },
  'instalacao-ar-condicionado-inverter-sp': { title: 'Instalação de Ar Condicionado Inverter em São Paulo | New Clima', description: 'Instalação de inverter em SP com infraestrutura adequada para máxima eficiência. (11) 96346-2516.' },
  'instalacao-ar-condicionado-condominio-sp': { title: 'Instalação de Ar Condicionado em Condomínio em SP | New Clima', description: 'Especialistas em instalação de ar condicionado em condomínios de SP. Respeitamos o regimento e garantimos vizinhança tranquila. (11) 96346-2516.' },

  // ─── MANUTENÇÃO ───────────────────────────────────────────────────────────
  'manutencao-ar-condicionado-sp': { title: 'Manutenção de Ar Condicionado em São Paulo | New Clima', description: 'Manutenção preventiva e corretiva de ar condicionado em São Paulo e ABC. Todas as marcas, peças originais e garantia por escrito. (11) 96346-2516.' },
  'manutencao-ar-condicionado-santo-andre': { title: 'Manutenção de Ar Condicionado em Santo André | New Clima', description: 'Manutenção preventiva e corretiva de ar condicionado em Santo André. Todas as marcas, peças originais e garantia por escrito. Visita gratuita. (11) 96346-2516.' },
  'manutencao-ar-condicionado-sao-bernardo-do-campo': { title: 'Manutenção de Ar Condicionado em São Bernardo do Campo | New Clima', description: 'Manutenção preventiva e corretiva de ar condicionado em São Bernardo do Campo. Todas as marcas, peças originais e garantia por escrito. Visita gratuita. (11) 96346-2516.' },
  'manutencao-ar-condicionado-sao-caetano-do-sul': { title: 'Manutenção de Ar Condicionado em São Caetano do Sul | New Clima', description: 'Manutenção preventiva e corretiva de ar condicionado em São Caetano do Sul. Todas as marcas, peças originais e garantia por escrito. Visita gratuita. (11) 96346-2516.' },
  'manutencao-ar-condicionado-diadema': { title: 'Manutenção de Ar Condicionado em Diadema | New Clima', description: 'Manutenção preventiva e corretiva de ar condicionado em Diadema. Todas as marcas, peças originais e garantia por escrito. Visita gratuita. (11) 96346-2516.' },
  'manutencao-ar-condicionado-maua': { title: 'Manutenção de Ar Condicionado em Mauá | New Clima', description: 'Manutenção preventiva e corretiva de ar condicionado em Mauá. Todas as marcas, peças originais e garantia por escrito. Visita gratuita. (11) 96346-2516.' },
  'manutencao-chiller-sao-paulo': { title: 'Manutenção de Chiller em São Paulo | New Clima', description: 'Manutenção preventiva e corretiva de chiller em SP e ABC. PMOC e atendimento emergencial. (11) 96346-2516.' },
  'manutencao-fan-coil-sao-paulo': { title: 'Manutenção e Limpeza de Fan Coil em São Paulo | New Clima', description: 'Manutenção preventiva, corretiva e higienização de fan coil em SP e ABC. (11) 96346-2516.' },
  'manutencao-self-contained-sao-paulo': { title: 'Manutenção de Self Contained em São Paulo | New Clima', description: 'Manutenção de ar condicionado self contained em SP e ABC. (11) 96346-2516.' },
  'manutencao-preventiva-antes-do-verao-sp': { title: 'Manutenção de Ar Condicionado Antes do Verão em SP | New Clima', description: 'Revise seu ar condicionado agora e chegue ao verão sem susto. Manutenção preventiva completa em SP e ABC. (11) 96346-2516.' },

  // ─── LIMPEZA ──────────────────────────────────────────────────────────────
  'limpeza-ar-condicionado-sp': { title: 'Limpeza de Ar Condicionado em São Paulo | New Clima', description: 'Limpeza profunda de ar condicionado em SP. Remove fungos, ácaros e mau cheiro. (11) 96346-2516.' },
  'higienizacao-ar-condicionado-sp': { title: 'Higienização de Ar Condicionado em São Paulo | New Clima', description: 'Higienização profissional com bactericida certificado em SP. (11) 96346-2516.' },
  'limpeza-fan-coil-sao-paulo': { title: 'Limpeza e Higienização de Fan Coil em São Paulo | New Clima', description: 'Higienização profunda de fan coil em SP e ABC. Laudo para Vigilância Sanitária incluído. (11) 96346-2516.' },
  'limpeza-ar-condicionado-santo-andre': { title: 'Limpeza de Ar Condicionado em Santo André | New Clima', description: 'Limpeza profunda de ar condicionado em Santo André. Remove fungos, ácaros e mau cheiro com bactericida certificado. Visita gratuita. (11) 96346-2516.' },
  'limpeza-ar-condicionado-sao-bernardo-do-campo': { title: 'Limpeza de Ar Condicionado em São Bernardo do Campo | New Clima', description: 'Limpeza profunda de ar condicionado em São Bernardo do Campo. Remove fungos, ácaros e mau cheiro com bactericida certificado. Visita gratuita. (11) 96346-2516.' },
  'limpeza-ar-condicionado-sao-caetano-do-sul': { title: 'Limpeza de Ar Condicionado em São Caetano do Sul | New Clima', description: 'Limpeza profunda de ar condicionado em São Caetano do Sul. Remove fungos, ácaros e mau cheiro com bactericida certificado. Visita gratuita. (11) 96346-2516.' },
  'limpeza-ar-condicionado-diadema': { title: 'Limpeza de Ar Condicionado em Diadema | New Clima', description: 'Limpeza profunda de ar condicionado em Diadema. Remove fungos, ácaros e mau cheiro com bactericida certificado. Visita gratuita. (11) 96346-2516.' },
  'limpeza-ar-condicionado-maua': { title: 'Limpeza de Ar Condicionado em Mauá | New Clima', description: 'Limpeza profunda de ar condicionado em Mauá. Remove fungos, ácaros e mau cheiro com bactericida certificado. Visita gratuita. (11) 96346-2516.' },

  // ─── PMOC ─────────────────────────────────────────────────────────────────
  'pmoc-sao-paulo': { title: 'PMOC em São Paulo — Contrato de Manutenção Obrigatório | New Clima', description: 'PMOC em São Paulo conforme a Lei 13.589/18. Elaboração, execução e documentação para empresas, condomínios e clínicas.' },
  'contrato-manutencao-ar-condicionado-sp': { title: 'Contrato de Manutenção de Ar Condicionado em São Paulo | New Clima', description: 'Contratos mensais, trimestrais ou semestrais de manutenção de ar condicionado em SP. (11) 96346-2516.' },
  'pmoc-santo-andre': { title: 'PMOC em Santo André — Contrato de Manutenção Obrigatório | New Clima', description: 'PMOC em Santo André conforme a Lei 13.589/18. Elaboração, execução e documentação completa para empresas, condomínios e clínicas. (11) 96346-2516.' },
  'pmoc-sao-bernardo-do-campo': { title: 'PMOC em São Bernardo do Campo — Contrato de Manutenção Obrigatório | New Clima', description: 'PMOC em São Bernardo do Campo conforme a Lei 13.589/18. Elaboração, execução e documentação completa para empresas, condomínios e clínicas. (11) 96346-2516.' },
  'pmoc-sao-caetano-do-sul': { title: 'PMOC em São Caetano do Sul — Contrato de Manutenção Obrigatório | New Clima', description: 'PMOC em São Caetano do Sul conforme a Lei 13.589/18. Elaboração, execução e documentação completa para empresas, condomínios e clínicas. (11) 96346-2516.' },
  'pmoc-diadema': { title: 'PMOC em Diadema — Contrato de Manutenção Obrigatório | New Clima', description: 'PMOC em Diadema conforme a Lei 13.589/18. Elaboração, execução e documentação completa para empresas, condomínios e clínicas. (11) 96346-2516.' },
  'pmoc-maua': { title: 'PMOC em Mauá — Contrato de Manutenção Obrigatório | New Clima', description: 'PMOC em Mauá conforme a Lei 13.589/18. Elaboração, execução e documentação completa para empresas, condomínios e clínicas. (11) 96346-2516.' },

  // ─── CONSERTO / PROBLEMAS ─────────────────────────────────────────────────
  'tecnico-ar-condicionado-sp': { title: 'Técnico de Ar Condicionado em São Paulo | New Clima', description: 'Técnicos certificados de ar condicionado em São Paulo e ABC. Instalação, manutenção e conserto com atendimento em até 2 horas. (11) 96346-2516.' },
  'conserto-ar-condicionado-sp': { title: 'Conserto de Ar Condicionado em São Paulo | New Clima', description: 'Conserto de ar condicionado em São Paulo e ABC. Diagnóstico preciso, peças originais e garantia de 90 dias. Atendimento em até 2 horas. (11) 96346-2516.' },
  'empresa-ar-condicionado-sp': { title: 'Empresa de Ar Condicionado em São Paulo | New Clima', description: 'New Clima — empresa especializada em ar condicionado em SP e ABC desde 2018. Instalação, manutenção, higienização e PMOC com garantia por escrito.' },
  'assistencia-tecnica-ar-condicionado-sp': { title: 'Assistência Técnica de Ar Condicionado em SP | New Clima', description: 'Assistência técnica especializada em ar condicionado em São Paulo e ABC. Conserto, manutenção e instalação com técnicos certificados. (11) 96346-2516.' },
  'ar-condicionado-nao-gela-sp': { title: 'Ar Condicionado Não Gela em São Paulo — Conserto Rápido | New Clima', description: 'Ar condicionado ligado mas não gela em SP? Diagnóstico gratuito, conserto no mesmo dia. (11) 96346-2516.' },
  'ar-condicionado-vazando-agua-sp': { title: 'Ar Condicionado Vazando Água em São Paulo | New Clima', description: 'Ar condicionado pingando em SP? Atendimento em até 2 horas. (11) 96346-2516.' },
  'recarga-gas-ar-condicionado-sp': { title: 'Recarga de Gás de Ar Condicionado em São Paulo | New Clima', description: 'Recarga de gás R410A e R32 em SP com verificação de vazamento. (11) 96346-2516.' },
  'ar-condicionado-com-mau-cheiro-sp': { title: 'Ar Condicionado com Mau Cheiro em São Paulo | New Clima', description: 'Ar condicionado com cheiro de mofo em SP? Limpeza profunda elimina a causa. (11) 96346-2516.' },
  'ar-condicionado-fazendo-barulho-sp': { title: 'Ar Condicionado Fazendo Barulho em São Paulo | New Clima', description: 'Ar condicionado barulhento em SP? Diagnóstico gratuito e conserto com garantia. (11) 96346-2516.' },
  'ar-condicionado-desligando-sozinho-sp': { title: 'Ar Condicionado Desligando Sozinho em São Paulo | New Clima', description: 'Ar condicionado que desliga sozinho em SP? Diagnóstico gratuito e conserto rápido. (11) 96346-2516.' },

  // ─── RESIDENCIAL ──────────────────────────────────────────────────────────
  'ar-condicionado-apartamento-sp': { title: 'Ar Condicionado para Apartamento em São Paulo | New Clima', description: 'Instalação de ar condicionado em apartamentos em SP. Obra limpa, normas do condomínio e garantia por escrito. Visita gratuita. (11) 96346-2516.' },
  'ar-condicionado-residencial-sp': { title: 'Ar Condicionado Residencial em São Paulo | New Clima', description: 'Soluções completas de ar condicionado residencial em SP e ABC. Instalação, manutenção e higienização para casas e apartamentos. (11) 96346-2516.' },
  'ar-condicionado-casa-sp': { title: 'Ar Condicionado para Casa em São Paulo | New Clima', description: 'Instalação de ar condicionado em casas em SP e ABC. Projeto completo com multi-split e VRF para toda a residência. (11) 96346-2516.' },

  // ─── SISTEMAS ESPECIAIS ───────────────────────────────────────────────────
  'central-agua-gelada-sao-paulo': { title: 'Central de Água Gelada em São Paulo — Instalação e Manutenção | New Clima', description: 'Instalação, manutenção e PMOC de central de água gelada em SP e ABC. (11) 96346-2516.' },
  'ar-condicionado-aquecimento-sp': { title: 'Ar Condicionado para Aquecimento em São Paulo | New Clima', description: 'Modo quente do split inverter — a forma mais econômica de aquecer no inverno de SP. (11) 96346-2516.' },

  // ─── MARCAS ───────────────────────────────────────────────────────────────
  'instalacao-ar-condicionado-lg-sao-paulo': { title: 'Instalação de Ar Condicionado LG em São Paulo | New Clima', description: 'Instalação e manutenção de ar condicionado LG em SP e ABC. Técnicos certificados, garantia de fábrica mantida. (11) 96346-2516.' },
  'instalacao-ar-condicionado-samsung-sao-paulo': { title: 'Instalação de Ar Condicionado Samsung em São Paulo | New Clima', description: 'Instalação e manutenção de ar condicionado Samsung em SP e ABC. (11) 96346-2516.' },
  'instalacao-ar-condicionado-daikin-sao-paulo': { title: 'Instalação de Ar Condicionado Daikin em São Paulo | New Clima', description: 'Instalação e manutenção de ar condicionado Daikin em SP e ABC. (11) 96346-2516.' },
  'instalacao-ar-condicionado-midea-sao-paulo': { title: 'Instalação de Ar Condicionado Midea em São Paulo | New Clima', description: 'Instalação e manutenção de ar condicionado Midea em SP e ABC. (11) 96346-2516.' },
  'instalacao-ar-condicionado-fujitsu-sao-paulo': { title: 'Instalação de Ar Condicionado Fujitsu em São Paulo | New Clima', description: 'Instalação e manutenção de ar condicionado Fujitsu em SP e ABC. (11) 96346-2516.' },
  'instalacao-ar-condicionado-carrier-sao-paulo': { title: 'Instalação de Ar Condicionado Carrier em São Paulo | New Clima', description: 'Instalação e manutenção de ar condicionado Carrier em SP e ABC. (11) 96346-2516.' },
  'instalacao-ar-condicionado-elgin-sao-paulo': { title: 'Instalação de Ar Condicionado Elgin em São Paulo | New Clima', description: 'Instalação e manutenção de ar condicionado Elgin em SP e ABC. (11) 96346-2516.' },
  'instalacao-ar-condicionado-gree-sao-paulo': { title: 'Instalação de Ar Condicionado Gree em São Paulo | New Clima', description: 'Instalação e manutenção de ar condicionado Gree em SP e ABC. (11) 96346-2516.' },
  'instalacao-ar-condicionado-springer-carrier-sao-paulo': { title: 'Instalação de Ar Condicionado Springer Carrier em SP | New Clima', description: 'Instalação e manutenção de ar condicionado Springer Carrier em SP e ABC. (11) 96346-2516.' },
  'instalacao-ar-condicionado-komeco-sao-paulo': { title: 'Instalação de Ar Condicionado Komeco em São Paulo | New Clima', description: 'Instalação e manutenção de ar condicionado Komeco em SP e ABC. (11) 96346-2516.' },
  'instalacao-ar-condicionado-philco-sao-paulo': { title: 'Instalação de Ar Condicionado Philco em São Paulo | New Clima', description: 'Instalação e manutenção de ar condicionado Philco em SP e ABC. (11) 96346-2516.' },
  'instalacao-ar-condicionado-electrolux-sao-paulo': { title: 'Instalação de Ar Condicionado Electrolux em SP | New Clima', description: 'Instalação e manutenção de ar condicionado Electrolux em SP e ABC. (11) 96346-2516.' },
  'instalacao-ar-condicionado-trane-sao-paulo': { title: 'Instalação de Ar Condicionado Trane em São Paulo | New Clima', description: 'Instalação e manutenção de ar condicionado Trane em SP. (11) 96346-2516.' },
  'instalacao-ar-condicionado-york-sao-paulo': { title: 'Instalação de Ar Condicionado York em São Paulo | New Clima', description: 'Instalação e manutenção de ar condicionado York em SP e ABC. (11) 96346-2516.' },
  'instalacao-ar-condicionado-hitachi-sao-paulo': { title: 'Instalação de Ar Condicionado Hitachi em São Paulo | New Clima', description: 'Instalação e manutenção de ar condicionado Hitachi em SP e ABC. (11) 96346-2516.' },
  'instalacao-ar-condicionado-panasonic-sao-paulo': { title: 'Instalação de Ar Condicionado Panasonic em SP | New Clima', description: 'Instalação e manutenção de ar condicionado Panasonic em SP e ABC. (11) 96346-2516.' },
  'instalacao-ar-condicionado-bosch-sao-paulo': { title: 'Instalação de Ar Condicionado Bosch em São Paulo | New Clima', description: 'Instalação e manutenção de ar condicionado Bosch em SP e ABC. (11) 96346-2516.' },
  'instalacao-ar-condicionado-tcl-sao-paulo': { title: 'Instalação de Ar Condicionado TCL em São Paulo | New Clima', description: 'Instalação e manutenção de ar condicionado TCL em SP e ABC. (11) 96346-2516.' },
  'instalacao-ar-condicionado-agratto-sao-paulo': { title: 'Instalação de Ar Condicionado Agratto em São Paulo | New Clima', description: 'Instalação e manutenção de ar condicionado Agratto em SP e ABC. (11) 96346-2516.' },
  'instalacao-ar-condicionado-consul-sao-paulo': { title: 'Instalação de Ar Condicionado Consul em São Paulo | New Clima', description: 'Instalação e manutenção de ar condicionado Consul em SP e ABC. (11) 96346-2516.' },

  // ─── BLOG ─────────────────────────────────────────────────────────────────
  'blog/ar-condicionado-inverter': { title: 'Ar Condicionado Inverter: Vale a Pena? | New Clima Blog', description: 'Descubra se o ar condicionado inverter compensa. Economia de até 60% na conta de luz.' },
  'blog/instalacao-ar-condicionado-apartamento-sp': { title: 'Instalação de Ar Condicionado em Apartamento em SP | New Clima Blog', description: 'Guia completo para instalar ar condicionado em apartamento em São Paulo.' },
  'blog/como-calcular-btus-ar-condicionado': { title: 'Como Calcular BTUs do Ar Condicionado | New Clima Blog', description: 'Aprenda a calcular a potência ideal em BTUs para cada ambiente.' },
  'blog/pmoc-obrigatorio-sao-paulo': { title: 'PMOC Obrigatório: O Que Sua Empresa Precisa Saber | New Clima Blog', description: 'PMOC obrigatório para empresas com mais de 60.000 BTUs. Multas até R$ 1,5 milhão.' },
  'blog/pmoc-obrigatorio-sao-paulo-lei': { title: 'PMOC: O Que É e Por Que Sua Empresa É Obrigada | New Clima Blog', description: 'Lei 13.589/2018 obriga empresas com mais de 60.000 BTUs a terem PMOC em SP.' },
  'blog/multa-pmoc-sao-paulo': { title: 'Multa por Não Ter PMOC em SP: R$ 2.000 a R$ 1,5 Milhão | New Clima Blog', description: 'Valores das multas por falta de PMOC em São Paulo e como regularizar.' },
  'blog/pmoc-condominios-sao-paulo': { title: 'PMOC para Condomínios em SP: Guia para Síndicos | New Clima Blog', description: 'PMOC obrigatório para condomínios em SP. Responsabilidades do síndico.' },
  'blog/quanto-custa-pmoc-sao-paulo': { title: 'Quanto Custa o PMOC em São Paulo? Preços 2026 | New Clima Blog', description: 'Preços do PMOC em SP: R$ 400 a R$ 2.500/mês. O que está incluso e ROI.' },
  'blog/quanto-custa-instalar-ar-condicionado-sp': { title: 'Quanto Custa Instalar Ar Condicionado em SP em 2026? | New Clima Blog', description: 'Tabela de preços de instalação de ar condicionado em São Paulo em 2026.' },
  'blog/qual-ar-condicionado-comprar-2026': { title: 'Qual Ar Condicionado Comprar em 2026? Guia SP | New Clima Blog', description: 'Guia para escolher o ar condicionado certo em SP. Inverter vs convencional.' },
  'blog/split-vs-multi-split-apartamento-sp': { title: 'Split ou Multi Split para Apartamento em SP? | New Clima Blog', description: 'Quando escolher split ou multi split para apartamento em São Paulo.' },
  'blog/manutencao-ar-condicionado-consequencias': { title: 'O Que Acontece Sem Manutenção no Ar Condicionado? | New Clima Blog', description: 'Do aumento na conta de luz à morte do compressor — consequências sem manutenção.' },
  'blog/lg-round-cassette': { title: 'LG Round Cassette: Climatização 360° | New Clima Blog', description: 'LG Round Cassette com distribuição de ar em 360 graus para ambientes de alto padrão.' },
  'blog/instalacao-ar-condicionado-obra-limpa': { title: 'Obra Limpa: Ar Condicionado Sem Quebra-Quebra | New Clima Blog', description: 'Como instalar ar condicionado sem sujeira. Método Obra Limpa da New Clima.' },
  'blog/ar-condicionado-quarto': { title: 'Como Instalar Ar Condicionado no Quarto | New Clima Blog', description: 'Posicionamento ideal do ar condicionado no quarto para noites perfeitas.' },
  'blog/split-convencional-vs-inverter': { title: 'Split Convencional vs Inverter: Qual Escolher? | New Clima Blog', description: 'Diferenças entre split convencional e inverter para São Paulo.' },
  'blog/ar-condicionado-faz-mal-saude': { title: 'Ar Condicionado Faz Mal à Saúde? Verdades e Mitos | New Clima Blog', description: 'Ar condicionado faz mal à saúde? Depende da manutenção. Saiba como evitar problemas respiratórios e manter o ar limpo em SP.' },
  'blog/dormir-com-ar-condicionado-faz-mal': { title: 'Dormir com Ar Condicionado Faz Mal? Saiba a Verdade | New Clima Blog', description: 'Dormir com ar condicionado faz mal? Não, se estiver limpo e regulado. Veja as melhores práticas para noites confortáveis em SP.' },
  'blog/ar-condicionado-gasta-mais-dia-ou-noite': { title: 'Ar Condicionado Gasta Mais de Dia ou à Noite? | New Clima Blog', description: 'Descubra quando o ar condicionado consome mais energia em SP e como economizar na conta de luz sem abrir mão do conforto.' },
  'blog/quanto-gasta-ar-condicionado-inverter': { title: 'Quanto Gasta um Ar Condicionado Inverter por Mês? | New Clima Blog', description: 'Tabela completa de consumo do ar condicionado inverter em SP. Calcule o gasto mensal por BTUs e horas de uso.' },
  'blog/mau-cheiro-ar-condicionado': { title: 'Mau Cheiro no Ar Condicionado: Causas e Solução | New Clima Blog', description: 'Por que o ar condicionado está com cheiro ruim? Conheça as causas e como eliminar o odor com higienização profissional em SP.' },
  'blog/ar-condicionado-desliga-sozinho': { title: 'Ar Condicionado Desliga Sozinho: 7 Causas e Como Resolver | New Clima Blog', description: 'Ar condicionado desligando sozinho? Veja as 7 causas mais comuns e como resolver. Atendimento em SP e ABC.' },
  'blog/vida-util-ar-condicionado': { title: 'Qual a Vida Útil do Ar Condicionado? Como Prolongar | New Clima Blog', description: 'Um split dura até 15 anos com manutenção. Saiba o que reduz a vida útil e como prolongar o seu equipamento em SP.' },
  'blog/temperatura-ideal-ar-condicionado': { title: 'Qual a Temperatura Ideal do Ar Condicionado? | New Clima Blog', description: 'A temperatura ideal do ar condicionado é entre 23°C e 25°C. Saiba o impacto na saúde e na economia de energia em SP.' },
  'blog/funcao-dry-ar-condicionado': { title: 'Função Dry no Ar Condicionado: Para que Serve? | New Clima Blog', description: 'A função Dry desumidifica o ar sem resfriar demais. Ideal para dias úmidos em SP. Saiba quando e como usar.' },
  'blog/gas-r32-r410a-ar-condicionado': { title: 'Gás R32 e R410A: Diferenças e Qual é Melhor | New Clima Blog', description: 'Entenda a diferença entre o gás R32 e R410A no ar condicionado. Qual usar, como recarregar e por que não misturar.' },
  'blog/ar-condicionado-empresas-vrf': { title: 'Ar Condicionado para Empresas: Split ao VRF | New Clima Blog', description: 'Soluções de climatização corporativa com foco em ROI. Do split ao VRF.' },
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slugArr = params.slug ?? []
  const key = slugArr.join('/')

  // canonical: home = BASE, demais = BASE/slug
  const canonical = key ? `${BASE}/${key}` : BASE

  const meta = metaMap[key]

  if (!meta) {
    return {
      title: 'New Clima Ar | Instalação e Manutenção de Ar Condicionado em SP e ABC Paulista',
      description: 'Instalação e manutenção de ar condicionado em São Paulo e ABC. 7 anos de experiência, técnicos certificados e visita gratuita. Ligue (11) 96346-2516.',
      alternates: { canonical },
      robots: { index: true, follow: true },
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
      images: [{ url: `${BASE}/images/logo-new-clima.png` }],
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

export default function SlugPage({ params }: Props) {
  const slugArr = params.slug ?? []
  const key = slugArr.join('/')
  const pathname = key ? `/${key}` : '/'

  return (
    <>
      {pathname === '/' && (
        <link
          rel="preload"
          as="image"
          href="/images/hero-bg.png"
          fetchPriority="high"
        />
      )}
      <SlugClient pathname={pathname} />
    </>
  )
}
