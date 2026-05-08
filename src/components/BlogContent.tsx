import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, MessageCircle, Clock, User, Tag } from 'lucide-react';

const BlogPostLayout = ({ title, date, author, tag, children }: { title: string, date: string, author: string, tag: string, children: React.ReactNode }) => (
  <div className="py-12 max-w-4xl mx-auto">
    <Helmet>
      <title>{title} | Blog New Clima Ar Condicionado</title>
      <meta name="description" content={`${title}. Guia técnico da New Clima Ar Condicionado — especialistas em ar condicionado em São Paulo e ABC Paulista.`} />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": title,
        "author": { "@type": "Person", "name": author },
        "datePublished": date,
        "publisher": {
          "@type": "Organization",
          "name": "New Clima Ar Condicionado",
          "url": "https://www.newclimaar.com.br"
        }
      })}</script>
    </Helmet>
    <div className="space-y-6 mb-12">
      <span className="inline-block bg-ice text-primary-light text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full">
        {tag}
      </span>
      <h1 className="text-3xl md:text-5xl font-extrabold text-primary leading-tight">
        {title}
      </h1>
      <div className="flex flex-wrap gap-6 text-sm text-slate-400 font-medium border-b border-slate-100 pb-6">
        <div className="flex items-center gap-2"><Clock size={16} /> {date}</div>
        <div className="flex items-center gap-2"><User size={16} /> {author}</div>
        <div className="flex items-center gap-2"><Tag size={16} /> {tag}</div>
      </div>
    </div>
    <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-6 text-lg">
      {children}
    </div>
    <div className="mt-16 p-8 bg-slate-50 rounded-3xl border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8">
      <div>
        <h4 className="text-xl font-bold text-primary mb-2">Gostou do conteúdo?</h4>
        <p className="text-slate-500 text-sm">Se precisar de ajuda técnica, fale com nossos especialistas.</p>
      </div>
      <a 
        href="https://wa.me/5511963462516" 
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 bg-success text-white font-bold py-4 px-8 rounded-xl transition-all hover:-translate-y-0.5 shadow-lg shadow-success/20"
      >
        <MessageCircle size={20} />
        Solicitar Orçamento
      </a>
    </div>
  </div>
);

export const BlogInverter = () => (
  <BlogPostLayout 
    tag="Guia de Compra"
    title="Ar Condicionado Inverter: Vale a Pena? Economia e Vantagens Reais"
    date="15 de Março, 2026"
    author="Ricardo Carvalho"
  >
    <p>
      Uma das dúvidas mais comuns na <strong>New Clima Ar Condicionado</strong> é se a tecnologia Inverter realmente compensa. Se você busca <strong>economia de energia</strong> e conforto, a resposta é um sim absoluto.
    </p>
    <h2 className="text-2xl font-bold text-primary">O que é a Tecnologia Inverter?</h2>
    <p>
      Ao contrário dos modelos convencionais, o <strong>ar condicionado inverter</strong> não desliga o compressor. Ele ajusta a velocidade de rotação para manter a temperatura constante, evitando picos de consumo elétrico que encarecem a conta de luz.
    </p>
    <h2 className="text-2xl font-bold text-primary">Principais Benefícios</h2>
    <ul className="list-disc pl-6 space-y-2">
      <li><strong>Economia Real:</strong> Redução de até 60% no consumo de energia elétrica.</li>
      <li><strong>Silêncio:</strong> Operação muito mais silenciosa, ideal para quartos e escritórios.</li>
      <li><strong>Conforto Térmico:</strong> Mantém a temperatura estável, sem oscilações incômodas.</li>
      <li><strong>Durabilidade:</strong> Menor desgaste do compressor, aumentando a vida útil do aparelho.</li>
    </ul>
    <p>
      Para quem utiliza o aparelho por longos períodos em São Paulo ou no ABC, o investimento em um modelo Inverter se paga rapidamente através da economia mensal.
    </p>
  </BlogPostLayout>
);

export const BlogApartamento = () => (
  <BlogPostLayout 
    tag="Instalação"
    title="Instalação de Ar Condicionado em Apartamento em SP: Guia Completo"
    date="10 de Março, 2026"
    author="Equipe Técnica New Clima"
  >
    <p>
      Instalar <strong>ar condicionado em apartamento em São Paulo</strong> requer atenção a detalhes que vão além da escolha do aparelho. É fundamental respeitar as normas do condomínio e garantir uma instalação segura e estética.
    </p>
    <h2 className="text-2xl font-bold text-primary">Normas e Varanda Técnica</h2>
    <p>
      A maioria dos prédios novos em SP e no ABC já possui varanda técnica. É essencial verificar a capacidade de carga e as regras para alteração de fachada. Nossa equipe é especialista em otimizar o espaço e garantir que a instalação esteja em total conformidade com o regimento interno.
    </p>
    <h2 className="text-2xl font-bold text-primary">Drenagem e Elétrica</h2>
    <p>
      Um dos maiores desafios em apartamentos é o dreno. Projetamos soluções que evitam infiltrações e garantem o escoamento correto da água. Além disso, revisamos a parte elétrica para suportar a carga do novo sistema de climatização.
    </p>
    <div className="bg-ice p-6 rounded-2xl border border-primary-light/10">
      <p className="font-bold text-primary mb-2">Atenção:</p>
      <p className="text-sm">Sempre exija a ART (Anotação de Responsabilidade Técnica) para instalações em condomínios. Isso garante a segurança jurídica e técnica da sua obra.</p>
    </div>
  </BlogPostLayout>
);

export const BlogBTUs = () => (
  <BlogPostLayout 
    tag="Guia Técnico"
    title="Como Calcular os BTUs Ideais Para Seu Ambiente: Não Erre na Escolha"
    date="05 de Março, 2026"
    author="Ricardo Carvalho"
  >
    <p>
      Escolher um ar condicionado com capacidade insuficiente (poucos BTUs) fará com que ele nunca gele o ambiente e gaste muita energia tentando. Escolher um muito potente (muitos BTUs) é desperdício de dinheiro e pode gerar um ambiente úmido e desconfortável.
    </p>
    <h2 className="text-2xl font-bold text-primary">A Regra de Ouro do Cálculo</h2>
    <p>
      Para um cálculo básico residencial em São Paulo, consideramos:
    </p>
    <ul className="list-disc pl-6 space-y-2">
      <li><strong>600 BTUs</strong> por metro quadrado (m²).</li>
      <li><strong>+ 600 BTUs</strong> por pessoa adicional (a primeira não conta).</li>
      <li><strong>+ 600 BTUs</strong> por cada eletrônico que gere calor (TV, Computador).</li>
      <li><strong>+ 800 BTUs</strong> (em vez de 600) se o ambiente tiver muita incidência de sol à tarde.</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary">Exemplo Prático</h2>
    <p>
      Um quarto de 15m², com sol à tarde, 2 pessoas e 1 TV:
      <br />
      (15m² x 800) + 600 (pessoa extra) + 600 (TV) = <strong>13.200 BTUs</strong>.
      <br />
      Nesse caso, o ideal seria um aparelho de <strong>12.000 BTUs</strong> (se o sol for leve) ou <strong>18.000 BTUs</strong> para garantir conforto total.
    </p>
    <p>
      Lembre-se: esse cálculo é uma estimativa. Ambientes comerciais, com pé-direito alto ou muitas janelas de vidro exigem um cálculo de carga térmica profissional feito por um técnico da <strong>New Clima Ar</strong>.
    </p>
  </BlogPostLayout>
);

export const BlogPMOC = () => (
  <BlogPostLayout 
    tag="Legislação"
    title="PMOC Obrigatório: O Que Sua Empresa Precisa Saber Para Evitar Multas"
    date="01 de Março, 2026"
    author="Equipe Técnica New Clima"
  >
    <p>
      Desde 2018, a Lei Federal 13.589 tornou obrigatório o <strong>PMOC (Plano de Manutenção, Operação e Controle)</strong> para todos os edifícios públicos ou privados que possuem sistemas de ar condicionado. Se sua empresa tem uma soma de capacidades superior a 60.000 BTUs (5 TR), você precisa de um PMOC assinado por um responsável técnico.
    </p>
    <h2 className="text-2xl font-bold text-primary">Por que o PMOC é importante?</h2>
    <p>
      O objetivo principal é garantir a qualidade do ar interno e prevenir a "Síndrome do Edifício Doente". A falta do PMOC pode gerar multas que variam de <strong>R$ 2.000,00 a R$ 1.500.000,00</strong>, aplicadas pela Vigilância Sanitária.
    </p>
    <h2 className="text-2xl font-bold text-primary">O que deve constar no seu PMOC?</h2>
    <ul className="list-disc pl-6 space-y-2">
      <li>Identificação do imóvel e do responsável técnico.</li>
      <li>Relação de todos os equipamentos de climatização.</li>
      <li>Cronograma mensal de atividades de manutenção e limpeza.</li>
      <li>Relatórios de análise da qualidade do ar (semestral).</li>
      <li>Registro de todas as ocorrências e reparos feitos no sistema.</li>
    </ul>
    <p>
      A <strong>New Clima Ar Condicionado</strong> oferece a gestão completa do PMOC para sua empresa em São Paulo e ABC, cuidando de toda a burocracia e garantindo que seus equipamentos operem sempre na máxima eficiência.
    </p>
  </BlogPostLayout>
);

export const BlogRoundCassette = () => (
  <BlogPostLayout 
    tag="Tecnologia"
    title="LG Round Cassette: Climatização Circular Para Quem Não Aceita Ponto Quente"
    date="28 de Março, 2026"
    author="Ricardo Carvalho"
  >
    <p>
      O <strong>LG Round Cassette</strong> é a revolução estética e funcional no mercado de climatização comercial e residencial de alto padrão. Diferente dos cassetes tradicionais de 4 vias, que podem deixar "pontos mortos" no ambiente, o design circular permite uma distribuição de ar em 360 graus.
    </p>
    <h2 className="text-2xl font-bold text-primary">Design que Valoriza o Projeto</h2>
    <p>
      Com um perfil ultra-fino e linhas fluidas, ele se integra perfeitamente a tetos com design moderno, sendo a escolha preferida de arquitetos em bairros como <strong>Vila Madalena e Pinheiros</strong>. Além da beleza, ele utiliza a tecnologia de fluxo de ar laminar, que resfria o ambiente de forma mais suave e silenciosa.
    </p>
    <h2 className="text-2xl font-bold text-primary">Vantagens Técnicas</h2>
    <ul className="list-disc pl-6 space-y-2">
      <li><strong>Fluxo de Ar 360°:</strong> Elimina correntes de ar diretas desconfortáveis.</li>
      <li><strong>Instalação Flexível:</strong> Ideal para ambientes com pé-direito alto.</li>
      <li><strong>Eficiência Inverter:</strong> Máxima economia com o selo de qualidade LG.</li>
    </ul>
  </BlogPostLayout>
);

export const BlogObraLimpa = () => (
  <BlogPostLayout 
    tag="Instalação"
    title="Obra Limpa: Como Instalar Ar-Condicionado Sem Quebra-Quebra"
    date="25 de Março, 2026"
    author="Equipe Técnica New Clima"
  >
    <p>
      O maior medo de quem decide climatizar a casa é a sujeira e a destruição das paredes. Na <strong>New Clima Ar</strong>, desenvolvemos o método de <strong>Obra Limpa</strong>, focado em precisão e organização.
    </p>
    <h2 className="text-2xl font-bold text-primary">Tecnologia a Favor da Limpeza</h2>
    <p>
      Utilizamos ferramentas de perfuração com sistema de vácuo integrado, que capturam 99% da poeira no momento do furo. Além disso, protegemos todo o mobiliário e piso com mantas especiais antes de iniciar qualquer atividade.
    </p>
    <h2 className="text-2xl font-bold text-primary">Planejamento Estratégico</h2>
    <p>
      Muitas vezes, é possível utilizar canaletas de acabamento premium ou aproveitar infraestruturas existentes para evitar rasgos na alvenaria. Nosso objetivo é entregar o conforto do ar condicionado com a casa exatamente como a encontramos: limpa e intacta.
    </p>
  </BlogPostLayout>
);

export const BlogQuarto = () => (
  <BlogPostLayout 
    tag="Guia Prático"
    title="Como Instalar Ar Condicionado no Quarto: O Guia Para Noites Perfeitas"
    date="20 de Março, 2026"
    author="Paulo Souza"
  >
    <p>
      A posição do ar condicionado no quarto é decisiva para a qualidade do seu sono. Um erro comum é instalar o aparelho diretamente acima da cabeceira ou soprando ar direto no rosto.
    </p>
    <h2 className="text-2xl font-bold text-primary">Onde Instalar?</h2>
    <p>
      O ideal é que a unidade evaporadora fique em uma parede lateral à cama, permitindo que o ar circule pelo ambiente antes de atingir as pessoas. Isso evita o ressecamento das vias respiratórias e o desconforto térmico.
    </p>
    <h2 className="text-2xl font-bold text-primary">Silêncio é Fundamental</h2>
    <p>
      Para quartos, sempre recomendamos a tecnologia <strong>Inverter</strong>. Além da economia, esses aparelhos são extremamente silenciosos, mantendo a temperatura estável sem os estalos e ruídos de partida dos modelos antigos.
    </p>
  </BlogPostLayout>
);

export const BlogConvencionalInverter = () => (
  <BlogPostLayout 
    tag="Comparativo"
    title="Split Convencional vs Inverter: Qual Escolher Para Sua Realidade?"
    date="18 de Março, 2026"
    author="Ricardo Carvalho"
  >
    <p>
      Embora o Inverter seja a tecnologia superior, entender as diferenças ajuda a decidir onde investir seu dinheiro.
    </p>
    <h2 className="text-2xl font-bold text-primary">Convencional (On/Off)</h2>
    <p>
      Funciona como uma lâmpada: ou está ligado no máximo, ou desligado. Isso gera picos de consumo e uma oscilação de temperatura de até 3°C no ambiente. É indicado apenas para locais de uso muito esporádico.
    </p>
    <h2 className="text-2xl font-bold text-primary">Inverter</h2>
    <p>
      Funciona como um acelerador de carro: ajusta a potência conforme a necessidade. É até 60% mais econômico, muito mais silencioso e mantém a temperatura com precisão de 0,5°C.
    </p>
    <div className="bg-ice p-6 rounded-2xl border border-primary-light/10">
      <p className="font-bold text-primary">Veredito:</p>
      <p>Para o dia a dia em São Paulo, o Inverter é o único que faz sentido financeiro e técnico a longo prazo.</p>
    </div>
  </BlogPostLayout>
);

export const BlogEmpresas = () => (
  <BlogPostLayout 
    tag="Corporativo"
    title="Ar Condicionado para Empresas: Do Split ao VRF com Foco em ROI"
    date="12 de Março, 2026"
    author="Equipe Técnica New Clima"
  >
    <p>
      Climatização corporativa não é custo, é investimento em produtividade. Funcionários em ambientes com temperatura controlada produzem até 15% mais e cometem menos erros.
    </p>
    <h2 className="text-2xl font-bold text-primary">Escalabilidade</h2>
    <p>
      Para pequenas salas, o Multi Split resolve. Para andares inteiros ou edifícios, o sistema <strong>VRF</strong> é a solução definitiva, permitindo controle centralizado e uma economia de escala impressionante na manutenção e no consumo de energia.
    </p>
    <h2 className="text-2xl font-bold text-primary">Conformidade Legal</h2>
    <p>
      Lembramos que toda empresa com sistema de climatização coletiva deve possuir o <strong>PMOC</strong>. A New Clima Ar cuida de toda a parte técnica e documentação, permitindo que você foque apenas no seu negócio.
    </p>
  </BlogPostLayout>
);

export const BlogPMOCObrigatorio = () => (
  <BlogPostLayout
    tag="Legislação"
    title="PMOC: O Que É e Por Que Sua Empresa em SP É Obrigada a Ter"
    date="02 de Maio, 2026"
    author="Equipe Técnica New Clima"
  >
    <p>
      Se sua empresa em São Paulo possui sistema de ar condicionado com capacidade total acima de 60.000 BTUs (equivalente a 5 TR), você é obrigado por lei a ter um <strong>PMOC — Plano de Manutenção, Operação e Controle</strong>. Ignorar essa obrigação pode resultar em multas de até R$ 1,5 milhão aplicadas pela Vigilância Sanitária.
    </p>
    <h2 className="text-2xl font-bold text-primary">O Que É o PMOC?</h2>
    <p>
      O PMOC é um documento técnico obrigatório estabelecido pela <strong>Lei Federal 13.589/2018</strong> e regulamentado pela Portaria 3.523/98 do Ministério da Saúde. Ele define todas as atividades de manutenção, operação e controle dos sistemas de climatização de um edifício, com o objetivo principal de garantir a qualidade do ar interior e prevenir a chamada "Síndrome do Edifício Doente".
    </p>
    <h2 className="text-2xl font-bold text-primary">Quem É Obrigado a Ter PMOC em São Paulo?</h2>
    <p>
      São obrigados a ter PMOC todos os edifícios de uso público ou coletivo em São Paulo e ABC Paulista que possuam sistemas de climatização com capacidade total igual ou superior a 60.000 BTUs. Isso inclui:
    </p>
    <ul className="list-disc pl-6 space-y-2">
      <li>Escritórios e edifícios corporativos</li>
      <li>Clínicas médicas, consultórios e hospitais</li>
      <li>Shoppings, lojas e centros comerciais</li>
      <li>Restaurantes, hotéis e bares com ar central</li>
      <li>Condomínios com áreas comuns climatizadas</li>
      <li>Escolas, faculdades e instituições de ensino</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary">O Que Deve Constar no PMOC?</h2>
    <p>
      O documento deve conter: identificação do imóvel e responsável técnico, inventário completo dos equipamentos, cronograma mensal de manutenção, procedimentos de limpeza e higienização, parâmetros de qualidade do ar e registro de todas as ocorrências e reparos realizados.
    </p>
    <h2 className="text-2xl font-bold text-primary">Como a New Clima Pode Ajudar Sua Empresa em SP?</h2>
    <p>
      A <strong>New Clima Ar Condicionado</strong> elabora e executa o PMOC completo para empresas em São Paulo e ABC Paulista. Nosso serviço inclui visita técnica, levantamento dos equipamentos, elaboração do documento, execução das manutenções e emissão de relatórios mensais. Entre em contato pelo WhatsApp (11) 96346-2516 para um orçamento gratuito.
    </p>
  </BlogPostLayout>
);

export const BlogMultaPMOC = () => (
  <BlogPostLayout
    tag="Legislação"
    title="Multa por Não Ter PMOC em São Paulo: Valores de R$ 2.000 a R$ 1,5 Milhão"
    date="03 de Maio, 2026"
    author="Equipe Técnica New Clima"
  >
    <p>
      Empresas em São Paulo que não possuem o PMOC estão sujeitas a multas que variam de <strong>R$ 2.000 a R$ 1.500.000</strong>, aplicadas pela Vigilância Sanitária. Além das multas, a falta do documento pode resultar em interdição do estabelecimento e responsabilização criminal do responsável técnico.
    </p>
    <h2 className="text-2xl font-bold text-primary">Quais São os Valores das Multas por Falta de PMOC?</h2>
    <p>
      As penalidades são graduadas conforme a gravidade da infração:
    </p>
    <ul className="list-disc pl-6 space-y-2">
      <li><strong>Infração leve:</strong> multa de R$ 2.000 a R$ 75.000</li>
      <li><strong>Infração grave:</strong> multa de R$ 75.000 a R$ 200.000</li>
      <li><strong>Infração gravíssima:</strong> multa de R$ 200.000 a R$ 1.500.000</li>
      <li><strong>Reincidência:</strong> multa em dobro</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary">Como Funciona a Fiscalização em São Paulo?</h2>
    <p>
      A fiscalização em São Paulo é realizada pela <strong>Vigilância Sanitária Estadual (COVISA)</strong> e pela Vigilância Sanitária Municipal. As visitas podem ser programadas ou ocorrer por denúncia. Durante a fiscalização, o agente solicita o PMOC atualizado, os registros de manutenção e os laudos de qualidade do ar. A ausência de qualquer documento resulta em auto de infração imediato.
    </p>
    <h2 className="text-2xl font-bold text-primary">Como Regularizar Sua Empresa Antes de Ser Fiscalizada?</h2>
    <p>
      A regularização é simples: contrate uma empresa especializada como a <strong>New Clima Ar Condicionado</strong> para elaborar e executar o PMOC. O processo inclui visita técnica, levantamento dos equipamentos, elaboração do documento e início imediato das manutenções. Em menos de 30 dias sua empresa já estará em conformidade com a lei.
    </p>
    <p>
      Entre em contato pelo WhatsApp <strong>(11) 96346-2516</strong> para uma consultoria gratuita. Atendemos empresas em toda São Paulo e ABC Paulista.
    </p>
  </BlogPostLayout>
);

export const BlogPMOCCondominio = () => (
  <BlogPostLayout
    tag="Legislação"
    title="PMOC para Condomínios em SP: Guia Completo para Síndicos"
    date="04 de Maio, 2026"
    author="Equipe Técnica New Clima"
  >
    <p>
      Síndicos de condomínios em São Paulo precisam estar atentos: se o condomínio possui sistemas de ar condicionado nas áreas comuns com capacidade total acima de 60.000 BTUs, o <strong>PMOC é obrigatório</strong> e a responsabilidade pelo cumprimento é do síndico. A multa por descumprimento pode chegar a R$ 1,5 milhão.
    </p>
    <h2 className="text-2xl font-bold text-primary">Quais Condomínios em SP São Obrigados a Ter PMOC?</h2>
    <p>
      São obrigados os condomínios que possuem climatização coletiva nas áreas comuns — como hall de entrada, salão de festas, academia, coworking ou corredores climatizados — com capacidade total igual ou superior a 60.000 BTUs (equivalente a aproximadamente 3 aparelhos de 18.000 BTUs ou 2 de 24.000 BTUs).
    </p>
    <h2 className="text-2xl font-bold text-primary">Responsabilidade do Síndico</h2>
    <p>
      O síndico é o responsável legal pelo cumprimento do PMOC no condomínio. Isso significa que, em caso de fiscalização, o auto de infração é lavrado em nome do condomínio e o síndico pode ser responsabilizado pessoalmente. A contratação de uma empresa especializada para elaborar e executar o PMOC é a forma correta de transferir a responsabilidade técnica.
    </p>
    <h2 className="text-2xl font-bold text-primary">Quanto Custa o PMOC para Condomínios em SP?</h2>
    <p>
      O custo varia conforme o número de equipamentos e a complexidade do sistema. Para condomínios de médio porte em São Paulo, o valor costuma variar entre R$ 800 e R$ 2.500 mensais, incluindo elaboração do documento, execução das manutenções e emissão de relatórios. A <strong>New Clima Ar Condicionado</strong> oferece orçamento gratuito para condomínios em SP e ABC. Ligue ou envie mensagem para o (11) 96346-2516.
    </p>
    <h2 className="text-2xl font-bold text-primary">Passo a Passo Para Regularizar o PMOC do Seu Condomínio</h2>
    <ul className="list-disc pl-6 space-y-2">
      <li><strong>1. Inventário:</strong> levantar todos os equipamentos de climatização das áreas comuns</li>
      <li><strong>2. Responsável técnico:</strong> contratar empresa com profissional habilitado (engenheiro ou técnico em refrigeração)</li>
      <li><strong>3. Elaboração do PMOC:</strong> documento com cronograma, procedimentos e parâmetros de qualidade do ar</li>
      <li><strong>4. Execução:</strong> início das manutenções conforme cronograma</li>
      <li><strong>5. Registros:</strong> manter arquivo de todas as manutenções realizadas</li>
    </ul>
  </BlogPostLayout>
);

export const BlogCustoPMOC = () => (
  <BlogPostLayout
    tag="Preços"
    title="Quanto Custa o PMOC em São Paulo e ABC? Preços e O Que Está Incluso"
    date="05 de Maio, 2026"
    author="Equipe Técnica New Clima"
  >
    <p>
      O custo do PMOC em São Paulo varia conforme o número de equipamentos, a complexidade do sistema e a frequência das manutenções exigidas. Neste guia, detalhamos os valores praticados no mercado paulistano para que você possa comparar e tomar a melhor decisão para sua empresa.
    </p>
    <h2 className="text-2xl font-bold text-primary">Tabela de Preços do PMOC em SP (Referência 2026)</h2>
    <ul className="list-disc pl-6 space-y-2">
      <li><strong>Pequeno porte</strong> (até 5 equipamentos): R$ 400 a R$ 800/mês</li>
      <li><strong>Médio porte</strong> (6 a 20 equipamentos): R$ 800 a R$ 2.500/mês</li>
      <li><strong>Grande porte</strong> (acima de 20 equipamentos): a partir de R$ 2.500/mês</li>
      <li><strong>Elaboração do documento</strong> (sem execução): R$ 500 a R$ 1.500 (único)</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary">O Que Está Incluso no PMOC da New Clima?</h2>
    <p>
      No contrato de PMOC da <strong>New Clima Ar Condicionado</strong> estão inclusos: visita técnica inicial gratuita, elaboração completa do documento PMOC, execução de todas as manutenções conforme cronograma, relatórios mensais de cada visita, análise de qualidade do ar (semestral) e suporte prioritário para emergências. Atendemos empresas em São Paulo (capital) e todas as cidades do ABC Paulista.
    </p>
    <h2 className="text-2xl font-bold text-primary">Vale a Pena Contratar PMOC? Cálculo de ROI</h2>
    <p>
      Considere: a multa mínima por não ter PMOC é de R$ 2.000. A multa máxima é R$ 1,5 milhão. Um contrato de PMOC para empresa de médio porte custa em média R$ 1.200/mês. Além de evitar as multas, o PMOC reduz em até 30% o consumo de energia dos equipamentos e aumenta a vida útil dos aparelhos — gerando economia que frequentemente supera o custo do contrato.
    </p>
  </BlogPostLayout>
);

export const BlogCustoInstalacao = () => (
  <BlogPostLayout
    tag="Preços"
    title="Quanto Custa Instalar Ar Condicionado em São Paulo em 2026?"
    date="06 de Maio, 2026"
    author="Equipe Técnica New Clima"
  >
    <p>
      O custo de instalação de ar condicionado em São Paulo em 2026 varia conforme o tipo de sistema, a complexidade da infraestrutura e o bairro. Neste guia, detalhamos os valores praticados no mercado paulistano para que você não pague mais do que o necessário.
    </p>
    <h2 className="text-2xl font-bold text-primary">Tabela de Preços de Instalação em SP (2026)</h2>
    <ul className="list-disc pl-6 space-y-2">
      <li><strong>Split Hi-Wall 9.000 BTUs (básico):</strong> R$ 350 a R$ 500</li>
      <li><strong>Split Hi-Wall 12.000 a 18.000 BTUs:</strong> R$ 400 a R$ 700</li>
      <li><strong>Split Hi-Wall 24.000 BTUs:</strong> R$ 500 a R$ 900</li>
      <li><strong>Multi Split (2 ambientes):</strong> R$ 900 a R$ 1.600</li>
      <li><strong>Multi Split (3 a 4 ambientes):</strong> R$ 1.400 a R$ 2.500</li>
      <li><strong>Cassete (por unidade):</strong> R$ 800 a R$ 1.500</li>
      <li><strong>Infraestrutura embutida (por ponto):</strong> R$ 200 a R$ 500 adicional</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary">O Que Está Incluso na Instalação da New Clima?</h2>
    <p>
      Na instalação da <strong>New Clima Ar Condicionado</strong> estão inclusos: visita técnica gratuita, cálculo de BTUs, fixação das unidades, tubulação de cobre, dreno, fiação elétrica, vedação e teste de pressão e vácuo. Entregamos a obra limpa — sem poeira, sem entulho.
    </p>
    <h2 className="text-2xl font-bold text-primary">O Que Encarece a Instalação em SP?</h2>
    <p>
      Os principais fatores que aumentam o valor em São Paulo são: distância entre unidade interna e externa (acima de 5 metros há custo adicional por metro de tubulação), necessidade de infraestrutura embutida na parede, instalação em andares altos com acesso difícil, e apartamentos com regras de condomínio que exigem soluções especiais de fachada.
    </p>
    <h2 className="text-2xl font-bold text-primary">Como Solicitar Orçamento Gratuito em SP?</h2>
    <p>
      Entre em contato pelo WhatsApp <strong>(11) 96346-2516</strong>. Nossa equipe agenda a visita técnica gratuita, avalia o local e entrega o orçamento detalhado no mesmo dia — sem compromisso.
    </p>
  </BlogPostLayout>
);

export const BlogQualAC = () => (
  <BlogPostLayout
    tag="Guia de Compra"
    title="Qual Ar Condicionado Comprar em 2026? Guia Completo para São Paulo"
    date="07 de Maio, 2026"
    author="Ricardo Carvalho"
  >
    <p>
      Escolher o ar condicionado certo para o clima de São Paulo exige atenção a alguns fatores que vão além da potência. Neste guia, a equipe da <strong>New Clima Ar Condicionado</strong> explica tudo que você precisa saber para não errar na compra em 2026.
    </p>
    <h2 className="text-2xl font-bold text-primary">Inverter ou Convencional?</h2>
    <p>
      Para São Paulo, onde o ar condicionado é usado por longos períodos especialmente de outubro a março, a tecnologia <strong>Inverter é a única que faz sentido financeiro</strong>. Ela consome até 60% menos energia que os modelos convencionais On/Off e mantém a temperatura estável com muito mais conforto. O custo inicial é maior, mas o retorno pelo menor consumo ocorre em 6 a 18 meses.
    </p>
    <h2 className="text-2xl font-bold text-primary">Quais Marcas São Mais Confiáveis em 2026?</h2>
    <ul className="list-disc pl-6 space-y-2">
      <li><strong>Daikin:</strong> melhor custo-benefício para uso intenso, peças originais disponíveis em SP</li>
      <li><strong>LG Dual Inverter:</strong> excelente silêncio e eficiência, ótima assistência técnica em SP</li>
      <li><strong>Samsung WindFree:</strong> melhor para quartos, fluxo de ar indireto sem corrente de ar direto</li>
      <li><strong>Fujitsu:</strong> premium, ideal para ambientes de alto padrão</li>
      <li><strong>Midea:</strong> melhor custo para uso esporádico ou ambientes secundários</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary">Qual Potência (BTUs) Escolher Para SP?</h2>
    <p>
      Em São Paulo, com verões quentes e umidade alta, sempre recomendamos calcular com <strong>800 BTUs por m²</strong> para ambientes com sol da tarde, e 600 BTUs por m² para ambientes com sombra. Subestime a potência e o aparelho nunca conseguirá refrigerar o ambiente.
    </p>
    <h2 className="text-2xl font-bold text-primary">Devo Comprar o Aparelho Separado da Instalação?</h2>
    <p>
      Sim. Comprando em loja ou online você paga menos pelo equipamento. A instalação é feita separadamente pela <strong>New Clima Ar Condicionado</strong> — atendemos toda SP e ABC. Ligue para o (11) 96346-2516 para orçamento gratuito.
    </p>
  </BlogPostLayout>
);

export const BlogSplitMultiSplitApartamento = () => (
  <BlogPostLayout
    tag="Guia Técnico"
    title="Split ou Multi Split: Qual a Melhor Opção para Apartamento em SP?"
    date="08 de Maio, 2026"
    author="Equipe Técnica New Clima"
  >
    <p>
      Uma das dúvidas mais comuns de quem vai climatizar um apartamento em São Paulo é: <strong>instalar splits individuais em cada cômodo ou um sistema Multi Split com uma única condensadora externa?</strong> A resposta depende do seu apartamento, do espaço disponível e do orçamento.
    </p>
    <h2 className="text-2xl font-bold text-primary">O Que é o Sistema Multi Split?</h2>
    <p>
      O Multi Split conecta 2 a 5 unidades internas (evaporadoras) a uma única unidade externa (condensadora). Isso significa apenas um equipamento na fachada ou varanda técnica, em vez de um por cômodo. É a solução ideal para apartamentos em São Paulo que têm restrição de fachada ou varandas técnicas com espaço limitado.
    </p>
    <h2 className="text-2xl font-bold text-primary">Quando Escolher Split Individual?</h2>
    <ul className="list-disc pl-6 space-y-2">
      <li>Quando você só precisa climatizar 1 ou 2 ambientes</li>
      <li>Quando o orçamento inicial é mais restrito</li>
      <li>Quando os cômodos são usados em horários muito diferentes</li>
      <li>Quando há espaço suficiente na área de serviço ou varanda para múltiplas condensadoras</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary">Quando Escolher Multi Split?</h2>
    <ul className="list-disc pl-6 space-y-2">
      <li>Quando você quer climatizar 3 ou mais ambientes</li>
      <li>Quando o condomínio restringe o número de condensadoras na fachada</li>
      <li>Quando a varanda técnica tem espaço limitado</li>
      <li>Quando você prioriza estética e menor poluição visual na fachada</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary">Qual é Mais Econômico em SP?</h2>
    <p>
      O Multi Split tem custo inicial maior, mas pode ser mais econômico a longo prazo por usar uma única condensadora com tecnologia Inverter de alta eficiência. Para apartamentos em SP onde o ar é usado diariamente em múltiplos cômodos, o Multi Split frequentemente tem melhor retorno sobre investimento.
    </p>
    <p>
      A <strong>New Clima Ar Condicionado</strong> faz visita técnica gratuita para avaliar qual sistema é mais adequado para o seu apartamento em SP. Ligue para o (11) 96346-2516.
    </p>
  </BlogPostLayout>
);

export const BlogManutencaoConsequencias = () => (
  <BlogPostLayout
    tag="Manutenção"
    title="O Que Acontece se Você Não Fizer Manutenção no Ar Condicionado?"
    date="09 de Maio, 2026"
    author="Equipe Técnica New Clima"
  >
    <p>
      Ignorar a manutenção do ar condicionado é um dos erros mais caros que proprietários de imóveis em São Paulo cometem. O que começa como uma economia de R$ 200 por semestre pode resultar em um conserto de R$ 2.000 ou na troca completa do equipamento. Veja o que acontece progressivamente com um aparelho sem manutenção.
    </p>
    <h2 className="text-2xl font-bold text-primary">Mês 1 a 3: Queda de Eficiência</h2>
    <p>
      Com filtros sujos, o aparelho começa a trabalhar mais para entregar a mesma temperatura. O consumo de energia aumenta progressivamente — em São Paulo, com a poeira e poluição, os filtros ficam saturados em menos de 3 meses de uso. O resultado é uma conta de luz 20 a 30% maior sem você perceber.
    </p>
    <h2 className="text-2xl font-bold text-primary">Mês 3 a 6: Proliferação de Fungos</h2>
    <p>
      A serpentina úmida e suja torna-se o ambiente perfeito para fungos e bactérias. O ar exalado pelo aparelho passa a conter esporos que causam rinite, asma e outras alergias respiratórias. Em São Paulo, onde a qualidade do ar já é comprometida pela poluição urbana, um ar condicionado sujo piora significativamente a saúde dos moradores.
    </p>
    <h2 className="text-2xl font-bold text-primary">Mês 6 a 12: Problemas Mecânicos</h2>
    <p>
      Sem verificação do nível de gás refrigerante, o compressor começa a trabalhar com sobrecarga. Sem limpeza do dreno, a água se acumula e causa infiltrações. Sem revisão elétrica, capacitores e placas eletrônicas envelhecem prematuramente. O custo de um conserto nessa fase varia entre R$ 500 e R$ 2.000.
    </p>
    <h2 className="text-2xl font-bold text-primary">Acima de 12 Meses: Morte Prematura do Compressor</h2>
    <p>
      O compressor é o coração do ar condicionado e a peça mais cara — sua substituição pode custar entre R$ 800 e R$ 3.000 dependendo do modelo. Um compressor bem mantido dura 15 a 20 anos. Sem manutenção, pode falhar em 5 a 7 anos. A diferença é simplesmente a manutenção semestral de R$ 180 a R$ 300.
    </p>
    <p>
      Agende sua manutenção preventiva com a <strong>New Clima Ar Condicionado</strong> pelo WhatsApp <strong>(11) 96346-2516</strong>. Atendemos toda São Paulo e ABC Paulista.
    </p>
  </BlogPostLayout>
);
