import { Metadata } from 'next'
import BairroViewRico from '@/src/components/BairroViewRico'

export const metadata: Metadata = {
  title: 'Instalação de Ar Condicionado em Vila Mariana SP | New Clima',
  description:
    'Instalação e manutenção de ar condicionado em Vila Mariana. Sede própria no bairro, técnicos certificados, obra limpa e garantia por escrito. (11) 96346-2516.',
  alternates: {
    canonical: 'https://www.newclimaar.com.br/instalacao-ar-condicionado-vila-mariana',
  },
  openGraph: {
    title: 'Instalação de Ar Condicionado em Vila Mariana SP | New Clima',
    description: 'Sede própria em Vila Mariana. Técnicos certificados, obra limpa e garantia por escrito. Visita gratuita. (11) 96346-2516.',
    url: 'https://www.newclimaar.com.br/instalacao-ar-condicionado-vila-mariana',
    type: 'website',
    images: [{ url: 'https://www.newclimaar.com.br/images/logo-new-clima.png' }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
}

export default function Page() {
  return (
    <BairroViewRico
      bairro="Vila Mariana"
      slug="vila-mariana"
      zona="Zona Sul"
      vizinhos={['Moema', 'Saúde', 'Ipiranga', 'Paraíso', 'Aclimação', 'Chácara Klabin']}
      descricao="A New Clima tem sede na R. Santa Cruz, 2187 — no coração de Vila Mariana. Atendemos o bairro desde 2018, de apartamentos na Rua Domingos de Morais a condomínios próximos ao Metrô Ana Rosa e ao Hospital São Paulo. Conhecemos bem as regras dos condomínios do bairro e garantimos obra limpa e aprovada pelo síndico."
      referencias={['Metrô Ana Rosa', 'Rua Domingos de Morais', 'Hospital São Paulo', 'UNIFESP', 'Parque Aclimação', 'Av. Paulista']}
      atendimentos={300}
      depoimentos={[
        {
          nome: 'Samuel Carvalho',
          texto: 'Contratei o profissional José Erivaldo para instalação, manutenção preventiva, conserto e limpeza do meu ar-condicionado. O trabalho foi muito ótimo! Ele é pontual, atencioso, caprichoso e explica tudo o que está fazendo. O ambiente ficou limpo e o ar-condicionado funcionando perfeitamente. Recomendo muito!',
          servico: 'Instalação + Manutenção — Vila Mariana',
          estrelas: 5,
        },
        {
          nome: 'Eliana Costa',
          texto: 'Excelente serviço, cumpriu certinho horários e dia agendado. E principalmente o capricho na instalação. Indico esse serviço. Obrigada Sr. Eri',
          servico: 'Instalação — São Paulo',
          estrelas: 5,
        },
        {
          nome: 'Mikhail Baghdadi',
          texto: 'Serviço rápido, eficiente e boa orientação sobre o uso dos aparelhos.',
          servico: 'Manutenção — São Paulo',
          estrelas: 5,
        },
        {
          nome: 'Andreia Lira',
          texto: 'Contratei para instalação de ar-condicionado e gostei muito. Serviço limpo, rápido e bem executado!',
          servico: 'Instalação — São Paulo',
          estrelas: 5,
        },
        {
          nome: 'Vera Martins',
          texto: 'Excelente serviço! Instalação de ar-condicionado feita com muito capricho e profissionalismo. Super recomendo!',
          servico: 'Instalação — São Paulo',
          estrelas: 5,
        },
      ]}
    />
  )
}
