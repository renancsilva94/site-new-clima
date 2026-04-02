import React from 'react';
import { ArrowRight, MessageCircle, Clock, User, Tag } from 'lucide-react';

const BlogPostLayout = ({ title, date, author, tag, children }: { title: string, date: string, author: string, tag: string, children: React.ReactNode }) => (
  <div className="py-12 max-w-4xl mx-auto">
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
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 bg-success text-white font-bold py-4 px-8 rounded-xl transition-all hover:-translate-y-0.5 shadow-lg shadow-success/20"
      >
        <MessageCircle size={20} />
        Falar no WhatsApp
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
