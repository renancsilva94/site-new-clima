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
  <BlogPostLayout tag="Guia de Compra" title="Ar Condicionado Inverter: Vale a Pena? Economia e Vantagens Reais" date="15 de Março, 2026" author="Ricardo Carvalho">
    <p>Uma das dúvidas mais comuns na <strong>New Clima Ar Condicionado</strong> é se a tecnologia Inverter realmente compensa. Se você busca <strong>economia de energia</strong> e conforto, a resposta é um sim absoluto.</p>
    <h2 className="text-2xl font-bold text-primary">O que é a Tecnologia Inverter?</h2>
    <p>Ao contrário dos modelos convencionais, o <strong>ar condicionado inverter</strong> não desliga o compressor. Ele ajusta a velocidade de rotação para manter a temperatura constante, evitando picos de consumo elétrico.</p>
    <h2 className="text-2xl font-bold text-primary">Principais Benefícios</h2>
    <ul className="list-disc pl-6 space-y-2">
      <li><strong>Economia Real:</strong> Redução de até 60% no consumo de energia elétrica.</li>
      <li><strong>Silêncio:</strong> Operação muito mais silenciosa, ideal para quartos e escritórios.</li>
      <li><strong>Conforto Térmico:</strong> Mantém a temperatura estável, sem oscilações incômodas.</li>
      <li><strong>Durabilidade:</strong> Menor desgaste do compressor, aumentando a vida útil do aparelho.</li>
    </ul>
    <p>Para quem utiliza o aparelho por longos períodos em São Paulo ou no ABC, o investimento em um modelo Inverter se paga rapidamente através da economia mensal.</p>
  </BlogPostLayout>
);

export const BlogApartamento = () => (
  <BlogPostLayout tag="Instalação" title="Instalação de Ar Condicionado em Apartamento em SP: Guia Completo" date="10 de Março, 2026" author="Equipe Técnica New Clima">
    <p>Instalar <strong>ar condicionado em apartamento em São Paulo</strong> requer atenção a detalhes que vão além da escolha do aparelho. É fundamental respeitar as normas do condomínio e garantir uma instalação segura e estética.</p>
    <h2 className="text-2xl font-bold text-primary">Normas e Varanda Técnica</h2>
    <p>A maioria dos prédios novos em SP e no ABC já possui varanda técnica. Nossa equipe é especialista em otimizar o espaço e garantir conformidade com o regimento interno.</p>
    <h2 className="text-2xl font-bold text-primary">Drenagem e Elétrica</h2>
    <p>Um dos maiores desafios em apartamentos é o dreno. Projetamos soluções que evitam infiltrações e garantem o escoamento correto da água.</p>
    <div className="bg-ice p-6 rounded-2xl border border-primary-light/10">
      <p className="font-bold text-primary mb-2">Atenção:</p>
      <p className="text-sm">Sempre exija a ART (Anotação de Responsabilidade Técnica) para instalações em condomínios.</p>
    </div>
  </BlogPostLayout>
);

export const BlogBTUs = () => (
  <BlogPostLayout tag="Guia Técnico" title="Como Calcular os BTUs Ideais Para Seu Ambiente: Não Erre na Escolha" date="05 de Março, 2026" author="Ricardo Carvalho">
    <p>Escolher um ar condicionado com capacidade insuficiente fará com que ele nunca gele o ambiente. Escolher um muito potente é desperdício de dinheiro.</p>
    <h2 className="text-2xl font-bold text-primary">A Regra de Ouro do Cálculo</h2>
    <ul className="list-disc pl-6 space-y-2">
      <li><strong>600 BTUs</strong> por metro quadrado (m²).</li>
      <li><strong>+ 600 BTUs</strong> por pessoa adicional.</li>
      <li><strong>+ 600 BTUs</strong> por cada eletrônico que gere calor.</li>
      <li><strong>+ 800 BTUs</strong> se o ambiente tiver muita incidência de sol à tarde.</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary">Exemplo Prático</h2>
    <p>Um quarto de 15m², com sol à tarde, 2 pessoas e 1 TV: (15m² x 800) + 600 + 600 = <strong>13.200 BTUs</strong>. O ideal seria um aparelho de <strong>12.000 ou 18.000 BTUs</strong>.</p>
  </BlogPostLayout>
);

export const BlogPMOC = () => (
  <BlogPostLayout tag="Legislação" title="PMOC Obrigatório: O Que Sua Empresa Precisa Saber Para Evitar Multas" date="01 de Março, 2026" author="Equipe Técnica New Clima">
    <p>Desde 2018, a Lei Federal 13.589 tornou obrigatório o <strong>PMOC</strong> para todos os edifícios que possuem sistemas de ar condicionado acima de 60.000 BTUs.</p>
    <h2 className="text-2xl font-bold text-primary">Por que o PMOC é importante?</h2>
    <p>A falta do PMOC pode gerar multas que variam de <strong>R$ 2.000,00 a R$ 1.500.000,00</strong>, aplicadas pela Vigilância Sanitária.</p>
    <h2 className="text-2xl font-bold text-primary">O que deve constar no seu PMOC?</h2>
    <ul className="list-disc pl-6 space-y-2">
      <li>Identificação do imóvel e do responsável técnico.</li>
      <li>Relação de todos os equipamentos de climatização.</li>
      <li>Cronograma mensal de atividades de manutenção e limpeza.</li>
      <li>Relatórios de análise da qualidade do ar (semestral).</li>
    </ul>
  </BlogPostLayout>
);

export const BlogRoundCassette = () => (
  <BlogPostLayout tag="Tecnologia" title="LG Round Cassette: Climatização Circular Para Quem Não Aceita Ponto Quente" date="28 de Março, 2026" author="Ricardo Carvalho">
    <p>O <strong>LG Round Cassette</strong> é a revolução estética e funcional no mercado de climatização. O design circular permite uma distribuição de ar em 360 graus.</p>
    <h2 className="text-2xl font-bold text-primary">Design que Valoriza o Projeto</h2>
    <p>Com perfil ultra-fino, ele se integra perfeitamente a tetos modernos, sendo a escolha preferida de arquitetos em bairros como <strong>Vila Madalena e Pinheiros</strong>.</p>
    <h2 className="text-2xl font-bold text-primary">Vantagens Técnicas</h2>
    <ul className="list-disc pl-6 space-y-2">
      <li><strong>Fluxo de Ar 360°:</strong> Elimina correntes de ar diretas desconfortáveis.</li>
      <li><strong>Instalação Flexível:</strong> Ideal para ambientes com pé-direito alto.</li>
      <li><strong>Eficiência Inverter:</strong> Máxima economia com o selo de qualidade LG.</li>
    </ul>
  </BlogPostLayout>
);

export const BlogObraLimpa = () => (
  <BlogPostLayout tag="Instalação" title="Obra Limpa: Como Instalar Ar-Condicionado Sem Quebra-Quebra" date="25 de Março, 2026" author="Equipe Técnica New Clima">
    <p>Na <strong>New Clima Ar</strong>, desenvolvemos o método de <strong>Obra Limpa</strong>, focado em precisão e organização.</p>
    <h2 className="text-2xl font-bold text-primary">Tecnologia a Favor da Limpeza</h2>
    <p>Utilizamos ferramentas de perfuração com sistema de vácuo integrado, que capturam 99% da poeira no momento do furo.</p>
    <h2 className="text-2xl font-bold text-primary">Planejamento Estratégico</h2>
    <p>Nosso objetivo é entregar o conforto do ar condicionado com a casa exatamente como a encontramos: limpa e intacta.</p>
  </BlogPostLayout>
);

export const BlogQuarto = () => (
  <BlogPostLayout tag="Guia Prático" title="Como Instalar Ar Condicionado no Quarto: O Guia Para Noites Perfeitas" date="20 de Março, 2026" author="Paulo Souza">
    <p>A posição do ar condicionado no quarto é decisiva para a qualidade do seu sono. Um erro comum é instalar o aparelho diretamente acima da cabeceira.</p>
    <h2 className="text-2xl font-bold text-primary">Onde Instalar?</h2>
    <p>O ideal é que a unidade evaporadora fique em uma parede lateral à cama, permitindo que o ar circule pelo ambiente antes de atingir as pessoas.</p>
    <h2 className="text-2xl font-bold text-primary">Silêncio é Fundamental</h2>
    <p>Para quartos, sempre recomendamos a tecnologia <strong>Inverter</strong>. Além da economia, esses aparelhos são extremamente silenciosos.</p>
  </BlogPostLayout>
);

export const BlogConvencionalInverter = () => (
  <BlogPostLayout tag="Comparativo" title="Split Convencional vs Inverter: Qual Escolher Para Sua Realidade?" date="18 de Março, 2026" author="Ricardo Carvalho">
    <p>Embora o Inverter seja a tecnologia superior, entender as diferenças ajuda a decidir onde investir seu dinheiro.</p>
    <h2 className="text-2xl font-bold text-primary">Convencional (On/Off)</h2>
    <p>Funciona como uma lâmpada: ou está ligado no máximo, ou desligado. Gera picos de consumo e oscilação de temperatura de até 3°C.</p>
    <h2 className="text-2xl font-bold text-primary">Inverter</h2>
    <p>Funciona como um acelerador de carro: ajusta a potência conforme a necessidade. É até 60% mais econômico e muito mais silencioso.</p>
    <div className="bg-ice p-6 rounded-2xl border border-primary-light/10">
      <p className="font-bold text-primary">Veredito:</p>
      <p>Para o dia a dia em São Paulo, o Inverter é o único que faz sentido financeiro e técnico a longo prazo.</p>
    </div>
  </BlogPostLayout>
);

export const BlogEmpresas = () => (
  <BlogPostLayout tag="Corporativo" title="Ar Condicionado para Empresas: Do Split ao VRF com Foco em ROI" date="12 de Março, 2026" author="Equipe Técnica New Clima">
    <p>Climatização corporativa não é custo, é investimento em produtividade. Funcionários em ambientes com temperatura controlada produzem até 15% mais.</p>
    <h2 className="text-2xl font-bold text-primary">Escalabilidade</h2>
    <p>Para andares inteiros ou edifícios, o sistema <strong>VRF</strong> é a solução definitiva, permitindo controle centralizado e economia de escala.</p>
    <h2 className="text-2xl font-bold text-primary">Conformidade Legal</h2>
    <p>Toda empresa com sistema de climatização coletiva deve possuir o <strong>PMOC</strong>. A New Clima Ar cuida de toda a parte técnica e documentação.</p>
  </BlogPostLayout>
);

export const BlogPMOCObrigatorio = () => (
  <BlogPostLayout tag="Legislação" title="PMOC: O Que É e Por Que Sua Empresa em SP É Obrigada a Ter" date="02 de Maio, 2026" author="Equipe Técnica New Clima">
    <p>Se sua empresa em São Paulo possui sistema de ar condicionado com capacidade total acima de 60.000 BTUs, você é obrigado por lei a ter um <strong>PMOC</strong>. Multas chegam a R$ 1,5 milhão.</p>
    <h2 className="text-2xl font-bold text-primary">O Que É o PMOC?</h2>
    <p>Documento técnico obrigatório estabelecido pela <strong>Lei Federal 13.589/2018</strong>, que define todas as atividades de manutenção dos sistemas de climatização.</p>
    <h2 className="text-2xl font-bold text-primary">Quem É Obrigado a Ter PMOC em São Paulo?</h2>
    <ul className="list-disc pl-6 space-y-2">
      <li>Escritórios e edifícios corporativos</li>
      <li>Clínicas médicas, consultórios e hospitais</li>
      <li>Shoppings, lojas e centros comerciais</li>
      <li>Restaurantes, hotéis e bares com ar central</li>
      <li>Condomínios com áreas comuns climatizadas</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary">Como a New Clima Pode Ajudar?</h2>
    <p>A <strong>New Clima Ar Condicionado</strong> elabora e executa o PMOC completo para empresas em São Paulo e ABC. Entre em contato pelo WhatsApp (11) 96346-2516.</p>
  </BlogPostLayout>
);

export const BlogMultaPMOC = () => (
  <BlogPostLayout tag="Legislação" title="Multa por Não Ter PMOC em São Paulo: Valores de R$ 2.000 a R$ 1,5 Milhão" date="03 de Maio, 2026" author="Equipe Técnica New Clima">
    <p>Empresas em São Paulo sem PMOC estão sujeitas a multas de <strong>R$ 2.000 a R$ 1.500.000</strong>, aplicadas pela Vigilância Sanitária.</p>
    <h2 className="text-2xl font-bold text-primary">Valores das Multas por Falta de PMOC</h2>
    <ul className="list-disc pl-6 space-y-2">
      <li><strong>Infração leve:</strong> R$ 2.000 a R$ 75.000</li>
      <li><strong>Infração grave:</strong> R$ 75.000 a R$ 200.000</li>
      <li><strong>Infração gravíssima:</strong> R$ 200.000 a R$ 1.500.000</li>
      <li><strong>Reincidência:</strong> multa em dobro</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary">Como Regularizar Antes de Ser Fiscalizado?</h2>
    <p>Contrate a <strong>New Clima Ar Condicionado</strong> para elaborar e executar o PMOC. Em menos de 30 dias sua empresa estará em conformidade. WhatsApp: <strong>(11) 96346-2516</strong>.</p>
  </BlogPostLayout>
);

export const BlogPMOCCondominio = () => (
  <BlogPostLayout tag="Legislação" title="PMOC para Condomínios em SP: Guia Completo para Síndicos" date="04 de Maio, 2026" author="Equipe Técnica New Clima">
    <p>Síndicos de condomínios em São Paulo: se as áreas comuns têm mais de 60.000 BTUs de climatização, o <strong>PMOC é obrigatório</strong>. Multa pode chegar a R$ 1,5 milhão.</p>
    <h2 className="text-2xl font-bold text-primary">Responsabilidade do Síndico</h2>
    <p>O síndico é o responsável legal pelo cumprimento do PMOC. Em caso de fiscalização, o auto de infração é lavrado em nome do condomínio.</p>
    <h2 className="text-2xl font-bold text-primary">Quanto Custa o PMOC para Condomínios em SP?</h2>
    <p>Para condomínios de médio porte, o valor varia entre R$ 800 e R$ 2.500 mensais. A <strong>New Clima</strong> oferece orçamento gratuito: (11) 96346-2516.</p>
    <h2 className="text-2xl font-bold text-primary">Passo a Passo Para Regularizar</h2>
    <ul className="list-disc pl-6 space-y-2">
      <li><strong>1. Inventário:</strong> levantar todos os equipamentos das áreas comuns</li>
      <li><strong>2. Responsável técnico:</strong> contratar empresa habilitada</li>
      <li><strong>3. Elaboração do PMOC:</strong> documento com cronograma e procedimentos</li>
      <li><strong>4. Execução:</strong> início das manutenções conforme cronograma</li>
      <li><strong>5. Registros:</strong> manter arquivo de todas as manutenções</li>
    </ul>
  </BlogPostLayout>
);

export const BlogCustoPMOC = () => (
  <BlogPostLayout tag="Preços" title="Quanto Custa o PMOC em São Paulo e ABC? Preços e O Que Está Incluso" date="05 de Maio, 2026" author="Equipe Técnica New Clima">
    <p>O custo do PMOC em São Paulo varia conforme o número de equipamentos e a frequência das manutenções.</p>
    <h2 className="text-2xl font-bold text-primary">Tabela de Preços do PMOC em SP (2026)</h2>
    <ul className="list-disc pl-6 space-y-2">
      <li><strong>Pequeno porte</strong> (até 5 equipamentos): R$ 400 a R$ 800/mês</li>
      <li><strong>Médio porte</strong> (6 a 20 equipamentos): R$ 800 a R$ 2.500/mês</li>
      <li><strong>Grande porte</strong> (acima de 20 equipamentos): a partir de R$ 2.500/mês</li>
      <li><strong>Elaboração do documento</strong> (sem execução): R$ 500 a R$ 1.500 (único)</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary">Vale a Pena? Cálculo de ROI</h2>
    <p>Multa mínima sem PMOC: R$ 2.000. Multa máxima: R$ 1,5 milhão. Contrato médio: R$ 1.200/mês. O PMOC também reduz em até 30% o consumo de energia — frequentemente o custo se paga sozinho.</p>
  </BlogPostLayout>
);

export const BlogCustoInstalacao = () => (
  <BlogPostLayout tag="Preços" title="Quanto Custa Instalar Ar Condicionado em São Paulo em 2026?" date="06 de Maio, 2026" author="Equipe Técnica New Clima">
    <p>O custo de instalação em São Paulo varia conforme o tipo de sistema e a complexidade da infraestrutura.</p>
    <h2 className="text-2xl font-bold text-primary">Tabela de Preços de Instalação em SP (2026)</h2>
    <ul className="list-disc pl-6 space-y-2">
      <li><strong>Split Hi-Wall 9.000 BTUs:</strong> R$ 350 a R$ 500</li>
      <li><strong>Split Hi-Wall 12.000 a 18.000 BTUs:</strong> R$ 400 a R$ 700</li>
      <li><strong>Split Hi-Wall 24.000 BTUs:</strong> R$ 500 a R$ 900</li>
      <li><strong>Multi Split (2 ambientes):</strong> R$ 900 a R$ 1.600</li>
      <li><strong>Multi Split (3 a 4 ambientes):</strong> R$ 1.400 a R$ 2.500</li>
      <li><strong>Cassete (por unidade):</strong> R$ 800 a R$ 1.500</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary">Como Solicitar Orçamento Gratuito?</h2>
    <p>Entre em contato pelo WhatsApp <strong>(11) 96346-2516</strong>. Visita técnica gratuita e orçamento no mesmo dia.</p>
  </BlogPostLayout>
);

export const BlogQualAC = () => (
  <BlogPostLayout tag="Guia de Compra" title="Qual Ar Condicionado Comprar em 2026? Guia Completo para São Paulo" date="07 de Maio, 2026" author="Ricardo Carvalho">
    <p>Escolher o ar condicionado certo para o clima de São Paulo exige atenção a fatores além da potência.</p>
    <h2 className="text-2xl font-bold text-primary">Inverter ou Convencional?</h2>
    <p>Para São Paulo, a tecnologia <strong>Inverter é a única que faz sentido financeiro</strong>. Consome até 60% menos energia e mantém temperatura estável.</p>
    <h2 className="text-2xl font-bold text-primary">Melhores Marcas em 2026</h2>
    <ul className="list-disc pl-6 space-y-2">
      <li><strong>Daikin:</strong> melhor custo-benefício para uso intenso</li>
      <li><strong>LG Dual Inverter:</strong> excelente silêncio e eficiência</li>
      <li><strong>Samsung WindFree:</strong> melhor para quartos</li>
      <li><strong>Fujitsu:</strong> premium, alto padrão</li>
      <li><strong>Midea:</strong> melhor custo para uso esporádico</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary">Qual Potência (BTUs) Escolher?</h2>
    <p>Em São Paulo, recomendamos <strong>800 BTUs por m²</strong> para ambientes com sol da tarde, e 600 BTUs/m² para ambientes com sombra.</p>
  </BlogPostLayout>
);

export const BlogSplitMultiSplitApartamento = () => (
  <BlogPostLayout tag="Guia Técnico" title="Split ou Multi Split: Qual a Melhor Opção para Apartamento em SP?" date="08 de Maio, 2026" author="Equipe Técnica New Clima">
    <p>A dúvida mais comum: <strong>splits individuais em cada cômodo ou um sistema Multi Split?</strong></p>
    <h2 className="text-2xl font-bold text-primary">Quando Escolher Split Individual?</h2>
    <ul className="list-disc pl-6 space-y-2">
      <li>Quando você só precisa climatizar 1 ou 2 ambientes</li>
      <li>Quando o orçamento inicial é mais restrito</li>
      <li>Quando há espaço suficiente para múltiplas condensadoras</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary">Quando Escolher Multi Split?</h2>
    <ul className="list-disc pl-6 space-y-2">
      <li>Quando você quer climatizar 3 ou mais ambientes</li>
      <li>Quando o condomínio restringe o número de condensadoras na fachada</li>
      <li>Quando você prioriza estética e menor poluição visual</li>
    </ul>
    <p>A <strong>New Clima Ar Condicionado</strong> faz visita técnica gratuita para avaliar o melhor sistema. Ligue: (11) 96346-2516.</p>
  </BlogPostLayout>
);

export const BlogManutencaoConsequencias = () => (
  <BlogPostLayout tag="Manutenção" title="O Que Acontece se Você Não Fizer Manutenção no Ar Condicionado?" date="09 de Maio, 2026" author="Equipe Técnica New Clima">
    <p>Ignorar a manutenção do ar condicionado é um dos erros mais caros em São Paulo. Uma economia de R$ 200 por semestre pode resultar em conserto de R$ 2.000.</p>
    <h2 className="text-2xl font-bold text-primary">Mês 1 a 3: Queda de Eficiência</h2>
    <p>Com filtros sujos, o consumo de energia aumenta 20 a 30% sem você perceber.</p>
    <h2 className="text-2xl font-bold text-primary">Mês 3 a 6: Proliferação de Fungos</h2>
    <p>A serpentina suja torna-se ambiente perfeito para fungos e bactérias que causam rinite e asma.</p>
    <h2 className="text-2xl font-bold text-primary">Mês 6 a 12: Problemas Mecânicos</h2>
    <p>Sem verificação de gás e limpeza do dreno, o compressor trabalha sobrecarregado. Conserto: R$ 500 a R$ 2.000.</p>
    <h2 className="text-2xl font-bold text-primary">Acima de 12 Meses: Morte Prematura do Compressor</h2>
    <p>Substituição do compressor: R$ 800 a R$ 3.000. Tudo isso evitado com manutenção semestral de R$ 180 a R$ 300. Agende pelo WhatsApp <strong>(11) 96346-2516</strong>.</p>
  </BlogPostLayout>
);
