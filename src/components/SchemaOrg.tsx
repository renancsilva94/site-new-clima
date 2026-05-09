'use client'

import { usePathname } from 'next/navigation'

const BASE_URL = 'https://www.newclimaar.com.br'

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'HVACBusiness',
  '@id': `${BASE_URL}/#business`,
  name: 'New Clima Ar Condicionado',
  url: BASE_URL,
  logo: `${BASE_URL}/images/logo-new-clima.png`,
  image: `${BASE_URL}/images/logo-new-clima.png`,
  description: 'Especialistas em instalação, manutenção e limpeza de ar condicionado em São Paulo e ABC Paulista desde 2018.',
  telephone: '+55-11-96346-2516',
  email: 'contato@newclimaar.com.br',
  priceRange: '$$',
  currenciesAccepted: 'BRL',
  paymentAccepted: 'Cash, Credit Card, PIX',
  areaServed: [
    { '@type': 'City', name: 'São Paulo' },
    { '@type': 'City', name: 'Santo André' },
    { '@type': 'City', name: 'São Bernardo do Campo' },
    { '@type': 'City', name: 'São Caetano do Sul' },
    { '@type': 'City', name: 'Diadema' },
    { '@type': 'City', name: 'Mauá' },
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'R. Santa Cruz, 2187',
    addressLocality: 'São Paulo',
    addressRegion: 'SP',
    addressCountry: 'BR',
    postalCode: '04122-002',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -23.5893,
    longitude: -46.6378,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '08:00',
      closes: '13:00',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '24',
    bestRating: '5',
  },
  sameAs: [
    'https://www.instagram.com/newclimaar',
    'https://www.facebook.com/newclimaar',
  ],
}

const serviceSchemas: Record<string, object> = {
  '/instalacao-ar-condicionado-split-sao-paulo': {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Instalação de Ar Condicionado Split em São Paulo',
    description: 'Serviço de instalação de ar condicionado split e multi split em São Paulo e ABC Paulista. Técnicos certificados, infraestrutura embutida e garantia de 1 ano.',
    provider: { '@id': `${BASE_URL}/#business` },
    areaServed: { '@type': 'City', name: 'São Paulo' },
    url: `${BASE_URL}/instalacao-ar-condicionado-split-sao-paulo`,
    offers: {
      '@type': 'Offer',
      price: '350',
      priceCurrency: 'BRL',
      priceSpecification: { '@type': 'PriceSpecification', minPrice: '350', maxPrice: '900', priceCurrency: 'BRL' },
    },
  },
  '/ar-condicionado-comercial-sao-paulo': {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Ar Condicionado Comercial em São Paulo',
    description: 'Instalação de sistemas Cassete, Piso-Teto e Dutado para empresas em São Paulo e ABC.',
    provider: { '@id': `${BASE_URL}/#business` },
    areaServed: { '@type': 'City', name: 'São Paulo' },
    url: `${BASE_URL}/ar-condicionado-comercial-sao-paulo`,
  },
  '/instalacao-vrf-mini-vrf-sao-paulo': {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Instalação de Sistema VRF e Mini VRF em São Paulo',
    description: 'Projetos completos de sistemas VRF para residências de alto padrão e edifícios corporativos em São Paulo.',
    provider: { '@id': `${BASE_URL}/#business` },
    areaServed: { '@type': 'City', name: 'São Paulo' },
    url: `${BASE_URL}/instalacao-vrf-mini-vrf-sao-paulo`,
  },
  '/manutencao-preventiva-ar-condicionado-sp': {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Manutenção Preventiva de Ar Condicionado e PMOC em SP',
    description: 'Manutenção preventiva e gestão de PMOC para empresas em São Paulo e ABC. Conformidade com a Lei 13.589/2018.',
    provider: { '@id': `${BASE_URL}/#business` },
    areaServed: [{ '@type': 'City', name: 'São Paulo' }, { '@type': 'State', name: 'ABC Paulista' }],
    url: `${BASE_URL}/manutencao-preventiva-ar-condicionado-sp`,
  },
  '/manutencao-corretiva-ar-condicionado-sp': {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Conserto de Ar Condicionado em São Paulo',
    description: 'Manutenção corretiva e conserto de ar condicionado em SP e ABC. Diagnóstico rápido e peças originais.',
    provider: { '@id': `${BASE_URL}/#business` },
    areaServed: { '@type': 'City', name: 'São Paulo' },
    url: `${BASE_URL}/manutencao-corretiva-ar-condicionado-sp`,
  },
  '/limpeza-higienizacao-ar-condicionado-sp': {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Limpeza e Higienização de Ar Condicionado em São Paulo',
    description: 'Higienização profunda com bactericida para residências e empresas em SP e ABC.',
    provider: { '@id': `${BASE_URL}/#business` },
    areaServed: { '@type': 'City', name: 'São Paulo' },
    url: `${BASE_URL}/limpeza-higienizacao-ar-condicionado-sp`,
  },
}

const faqSchemas: Record<string, object> = {
  '/instalacao-ar-condicionado-split-sao-paulo': {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Quanto tempo leva uma instalação de ar condicionado?', acceptedAnswer: { '@type': 'Answer', text: 'Uma instalação padrão de split hi-wall leva em média de 3 a 5 horas. Sistemas Multi Split podem levar de 1 a 2 dias dependendo da complexidade.' } },
      { '@type': 'Question', name: 'Qual a garantia da instalação de ar condicionado?', acceptedAnswer: { '@type': 'Answer', text: 'Oferecemos 1 ano de garantia em toda a nossa mão de obra de instalação, além da garantia de fábrica dos equipamentos.' } },
      { '@type': 'Question', name: 'Quanto custa instalar ar condicionado em São Paulo?', acceptedAnswer: { '@type': 'Answer', text: 'Uma instalação residencial padrão em SP começa a partir de R$ 350. O valor varia conforme a complexidade da infraestrutura. A visita técnica é gratuita.' } },
    ],
  },
  '/manutencao-preventiva-ar-condicionado-sp': {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'O que é o PMOC e por que ele é obrigatório?', acceptedAnswer: { '@type': 'Answer', text: 'PMOC é o Plano de Manutenção, Operação e Controle. É obrigatório por lei (13.589/2018) para todos os edifícios de uso público e coletivo que possuem sistemas de ar condicionado acima de 60.000 BTUs.' } },
      { '@type': 'Question', name: 'Com que frequência devo fazer manutenção preventiva no ar condicionado?', acceptedAnswer: { '@type': 'Answer', text: 'Para uso residencial, recomendamos a cada 6 meses. Em ambientes comerciais ou com uso intenso, o ideal é trimestralmente.' } },
      { '@type': 'Question', name: 'Quais são os benefícios da manutenção preventiva?', acceptedAnswer: { '@type': 'Answer', text: 'Redução de até 30% no consumo de energia, aumento da vida útil do aparelho e eliminação de fungos e bactérias que causam doenças respiratórias.' } },
    ],
  },
  '/limpeza-higienizacao-ar-condicionado-sp': {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Com que frequência devo limpar o ar condicionado?', acceptedAnswer: { '@type': 'Answer', text: 'Recomendamos a limpeza profunda a cada 6 meses para residências e trimestralmente para comércios e escritórios.' } },
      { '@type': 'Question', name: 'A limpeza do ar condicionado ajuda com alergias?', acceptedAnswer: { '@type': 'Answer', text: 'Sim! A higienização profunda elimina fungos, ácaros e bactérias que são os principais gatilhos para rinites e asmas.' } },
    ],
  },
}

export default function SchemaOrg() {
  const pathname = usePathname()

  const schemas = [
    localBusinessSchema,
    serviceSchemas[pathname],
    faqSchemas[pathname],
  ].filter(Boolean)

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}
