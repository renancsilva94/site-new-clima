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

// --- 10 Novos Posts ---

export const BlogSaude = () => (
  <BlogPostLayout tag="Saúde" title="Ar Condicionado Faz Mal à Saúde? Verdades e Mitos" date="9 de Maio, 2026" author="José Erivaldo">
    <p>Uma dúvida muito comum entre nossos clientes em São Paulo é: <strong>ar condicionado faz mal à saúde?</strong> A resposta depende de como o equipamento é usado e mantido. Sem manutenção regular, sim, pode causar problemas. Com higienização em dia, é aliado da saúde.</p>
    <h2 className="text-2xl font-bold text-primary">Por que o ar condicionado pode fazer mal?</h2>
    <p>Quando o ar condicionado fica longos períodos sem limpeza, o filtro acumula <strong>fungos, ácaros, bactérias e poeira</strong>. Ao ligar o aparelho, essas partículas são expelidas no ar do ambiente, podendo causar:</p>
    <ul className="space-y-2 list-disc pl-6">
      <li><strong>Rinite e sinusite:</strong> irritação das mucosas nasais</li>
      <li><strong>Asma:</strong> especialmente em crianças e idosos</li>
      <li><strong>Alergias:</strong> coceira nos olhos, espirros frequentes</li>
      <li><strong>Ressecamento:</strong> ar seco irrita garganta e pele</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary">Como evitar os problemas de saúde?</h2>
    <p>A solução é simples: <strong>manutenção preventiva a cada 6 meses</strong> para uso residencial e a cada 3 meses para uso comercial. A higienização profunda elimina todos os agentes causadores de doenças respiratórias.</p>
    <p>Além disso, manter a temperatura entre <strong>23°C e 25°C</strong> e não apontar o fluxo de ar diretamente para as pessoas reduz muito os desconfortos. Em São Paulo, com a qualidade do ar já comprometida pela poluição, um ar condicionado limpo filtra partículas e melhora o ar interior.</p>
    <h2 className="text-2xl font-bold text-primary">Conclusão</h2>
    <p>Ar condicionado não faz mal à saúde — <strong>ar condicionado sujo faz</strong>. Com higienização regular, o equipamento melhora a qualidade do ar e o conforto de quem vive e trabalha no ambiente. Agende sua higienização com a New Clima: <strong>(11) 96346-2516</strong>.</p>
  </BlogPostLayout>
);

export const BlogDormir = () => (
  <BlogPostLayout tag="Uso do Ar Condicionado" title="Dormir com Ar Condicionado Faz Mal? Saiba a Verdade" date="9 de Maio, 2026" author="José Erivaldo">
    <p>Com o calor de São Paulo, dormir com ar condicionado ligado virou rotina para milhões de pessoas. Mas afinal, <strong>dormir com ar condicionado faz mal?</strong> Não necessariamente — desde que você siga algumas boas práticas.</p>
    <h2 className="text-2xl font-bold text-primary">O que pode causar desconforto à noite</h2>
    <ul className="space-y-2 list-disc pl-6">
      <li><strong>Temperatura muito baixa:</strong> abaixo de 20°C resseca as vias aéreas e causa desconforto</li>
      <li><strong>Ar direcionado ao corpo:</strong> pode causar torcicolos e ressecamento</li>
      <li><strong>Filtros sujos:</strong> expelem alérgenos que prejudicam o sono</li>
      <li><strong>Ruído excessivo:</strong> sinal de manutenção atrasada</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary">Como dormir bem com ar condicionado</h2>
    <p>Configure o <strong>timer (sleep mode)</strong> para desligar automaticamente após 2 a 3 horas. Mantenha a temperatura entre <strong>23°C e 26°C</strong>. Não aponte a saída de ar diretamente para a cama. Mantenha a higienização em dia — especialmente no quarto, onde você passa 8 horas respirando o ar filtrado pelo aparelho.</p>
    <p>Um dado importante: o modo <strong>Sleep</strong> presente na maioria dos inverter aumenta gradualmente a temperatura durante a noite, simulando a queda natural da temperatura corporal durante o sono — muito mais confortável e econômico.</p>
    <h2 className="text-2xl font-bold text-primary">Conclusão</h2>
    <p>Dormir com ar condicionado <strong>não faz mal</strong> quando o equipamento está limpo e a temperatura está regulada corretamente. O segredo é manutenção em dia e configuração adequada. Dúvidas? Fale com a New Clima: <strong>(11) 96346-2516</strong>.</p>
  </BlogPostLayout>
);

export const BlogConsumo = () => (
  <BlogPostLayout tag="Economia de Energia" title="Ar Condicionado Gasta Mais de Dia ou à Noite? Descubra Agora" date="9 de Maio, 2026" author="José Erivaldo">
    <p>Uma dúvida frequente de quem quer economizar na conta de luz em São Paulo: <strong>ar condicionado gasta mais de dia ou à noite?</strong> A resposta envolve temperatura externa, tipo de equipamento e como você usa o aparelho.</p>
    <h2 className="text-2xl font-bold text-primary">Por que o período faz diferença</h2>
    <p>O ar condicionado trabalha comparando a temperatura interna desejada com a temperatura externa. Quanto maior a diferença, mais esforço — e mais energia consumida. Em São Paulo, durante o dia o calor pode chegar a <strong>35°C ou mais</strong>. À noite, a temperatura cai para 20°C a 22°C.</p>
    <p>Resultado: <strong>de dia o ar condicionado consome mais</strong>, pois precisa trabalhar mais para atingir os 23°C desejados. À noite, o esforço é menor e o consumo cai significativamente.</p>
    <h2 className="text-2xl font-bold text-primary">Dicas para economizar independente do horário</h2>
    <ul className="space-y-2 list-disc pl-6">
      <li>Use o <strong>modo Inverter</strong> — ele ajusta a potência automaticamente</li>
      <li>Mantenha portas e janelas fechadas</li>
      <li>Use o <strong>timer</strong> para não deixar ligado sem necessidade</li>
      <li>Faça manutenção regular — aparelho limpo consome até <strong>30% menos</strong></li>
      <li>Mantenha a temperatura em <strong>23°C</strong> — cada grau a mais economiza 5% de energia</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary">Tarifa de energia em SP</h2>
    <p>Na ENEL São Paulo, a <strong>tarifa branca</strong> cobra mais nos horários de pico (18h às 21h). Se você tem tarifa convencional, o horário não impacta o custo direto — mas o consumo físico é maior durante o dia pelo calor externo. Consulte a New Clima para escolher o equipamento mais eficiente: <strong>(11) 96346-2516</strong>.</p>
  </BlogPostLayout>
);

export const BlogQuantoGasta = () => (
  <BlogPostLayout tag="Economia de Energia" title="Quanto Gasta um Ar Condicionado Inverter por Mês? Conta Exata" date="9 de Maio, 2026" author="José Erivaldo">
    <p>Antes de comprar ou instalar, a dúvida é sempre: <strong>quanto gasta um ar condicionado inverter por mês?</strong> A resposta depende da potência, horas de uso e tarifa local. Vamos aos números reais para São Paulo.</p>
    <h2 className="text-2xl font-bold text-primary">Como calcular o consumo</h2>
    <p>A fórmula básica: <strong>Consumo (kWh) = Potência (kW) × Horas de uso × Dias</strong>. Um split inverter de 9.000 BTUs tem potência média de 0,85 kW. Usando 8 horas por dia durante 30 dias: <strong>0,85 × 8 × 30 = 204 kWh/mês</strong>.</p>
    <p>Com a tarifa média da ENEL SP de <strong>R$ 0,85/kWh</strong>, o custo seria: <strong>204 × 0,85 = R$ 173/mês</strong>.</p>
    <h2 className="text-2xl font-bold text-primary">Tabela de consumo estimado em SP</h2>
    <ul className="space-y-2 list-disc pl-6">
      <li><strong>9.000 BTUs inverter (8h/dia):</strong> ~R$ 130 a R$ 180/mês</li>
      <li><strong>12.000 BTUs inverter (8h/dia):</strong> ~R$ 170 a R$ 230/mês</li>
      <li><strong>18.000 BTUs inverter (8h/dia):</strong> ~R$ 250 a R$ 320/mês</li>
      <li><strong>24.000 BTUs inverter (8h/dia):</strong> ~R$ 320 a R$ 420/mês</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary">Inverter vs Convencional — diferença real</h2>
    <p>Um modelo convencional de mesma potência consome em média <strong>35% a 60% mais</strong> do que o inverter, pois funciona em liga/desliga constante. O inverter ajusta a rotação do compressor — muito mais eficiente.</p>
    <p>A manutenção em dia também impacta diretamente: um aparelho com filtro sujo consome até <strong>30% mais energia</strong>. Agende com a New Clima: <strong>(11) 96346-2516</strong>.</p>
  </BlogPostLayout>
);

export const BlogMauCheiro = () => (
  <BlogPostLayout tag="Problemas" title="Mau Cheiro no Ar Condicionado: Causas e Como Eliminar" date="9 de Maio, 2026" author="José Erivaldo">
    <p>Se o seu ar condicionado está soltando <strong>mau cheiro</strong>, é sinal de que precisa de atenção imediata. O odor ruim indica acúmulo de fungos, bactérias ou sujeira — o que também prejudica a qualidade do ar que você respira.</p>
    <h2 className="text-2xl font-bold text-primary">Principais causas do mau cheiro</h2>
    <ul className="space-y-2 list-disc pl-6">
      <li><strong>Fungos e mofo:</strong> crescem na umidade do evaporador e na bandeja de dreno</li>
      <li><strong>Dreno entupido:</strong> água parada cria ambiente ideal para bactérias</li>
      <li><strong>Filtros sujos:</strong> retêm sujeira orgânica que apodrece com o calor</li>
      <li><strong>Cheiro de queimado:</strong> pode ser poeira acumulada nos resistores ou problema elétrico</li>
      <li><strong>Cheiro de plástico:</strong> pode ser equipamento novo aquecendo ou problema no motor</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary">Como eliminar o mau cheiro</h2>
    <p>A solução definitiva é a <strong>higienização profunda</strong> com produto bactericida. O processo inclui limpeza da serpentina evaporadora, turbina, filtros e desobstrução do dreno. Em São Paulo, a umidade alta favorece o crescimento de fungos — recomendamos higienização a cada 6 meses para residências.</p>
    <p><strong>Não use produtos caseiros</strong> como vinagre ou desinfetante diretamente no aparelho — podem danificar componentes e anular a garantia. Chame um técnico certificado. Agende com a New Clima: <strong>(11) 96346-2516</strong>.</p>
  </BlogPostLayout>
);

export const BlogDesligaSozinho = () => (
  <BlogPostLayout tag="Problemas" title="Ar Condicionado Desliga Sozinho: 7 Causas e Como Resolver" date="9 de Maio, 2026" author="José Erivaldo">
    <p>Se o seu <strong>ar condicionado desliga sozinho</strong>, não ignore. Pode ser algo simples como o timer ativado ou um sinal de alerta de um problema mais sério. Veja as causas mais comuns e como resolver.</p>
    <h2 className="text-2xl font-bold text-primary">7 razões para o ar condicionado desligar sozinho</h2>
    <ul className="space-y-2 list-disc pl-6">
      <li><strong>1. Timer ativado:</strong> verifique as configurações do controle remoto</li>
      <li><strong>2. Proteção contra superaquecimento:</strong> o compressor desliga para se proteger quando está muito quente — geralmente por falta de gás ou filtro sujo</li>
      <li><strong>3. Falta de gás refrigerante:</strong> o aparelho não consegue resfriar e entra em proteção</li>
      <li><strong>4. Filtro muito sujo:</strong> restringe o fluxo de ar e causa superaquecimento</li>
      <li><strong>5. Problema elétrico:</strong> tensão instável ou disjuntor fraco</li>
      <li><strong>6. Placa eletrônica com defeito:</strong> causa desligamentos aleatórios</li>
      <li><strong>7. Sensor de temperatura com defeito:</strong> lê temperatura errada e desliga indevidamente</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary">O que fazer</h2>
    <p>Primeiro, verifique se o timer está ativado. Se o aparelho desliga após alguns minutos de funcionamento, o mais provável é falta de gás ou filtro muito sujo — ambos resolvidos com uma visita técnica. Não tente recarregar o gás sozinho: exige equipamento específico e técnico habilitado.</p>
    <p>A New Clima atende em São Paulo e ABC com <strong>resposta em até 2 horas</strong>. Ligue: <strong>(11) 96346-2516</strong>.</p>
  </BlogPostLayout>
);

export const BlogVidaUtil = () => (
  <BlogPostLayout tag="Dicas" title="Qual a Vida Útil do Ar Condicionado? Como Prolongar" date="9 de Maio, 2026" author="José Erivaldo">
    <p>Você sabe qual é a <strong>vida útil do ar condicionado</strong>? Em média, um split bem mantido dura entre <strong>10 e 15 anos</strong>. Sem manutenção, esse prazo cai para 5 a 7 anos. Entenda o que faz a diferença.</p>
    <h2 className="text-2xl font-bold text-primary">Vida útil por tipo de equipamento</h2>
    <ul className="space-y-2 list-disc pl-6">
      <li><strong>Split hi-wall residencial:</strong> 10 a 15 anos com manutenção</li>
      <li><strong>Multi-split:</strong> 12 a 15 anos</li>
      <li><strong>Cassete comercial:</strong> 10 a 15 anos</li>
      <li><strong>VRF:</strong> 15 a 20 anos com manutenção preventiva</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary">O que reduz a vida útil</h2>
    <ul className="space-y-2 list-disc pl-6">
      <li>Falta de limpeza dos filtros — aumenta esforço do compressor</li>
      <li>Uso sem manutenção preventiva semestral</li>
      <li>Instalação mal feita — vibração e vazamentos destroem componentes</li>
      <li>Recarga de gás feita por não habilitados — pode causar danos irreversíveis</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary">Como prolongar a vida do seu ar condicionado</h2>
    <p>O segredo é simples: <strong>manutenção preventiva semestral</strong>. Inclui limpeza completa, verificação de gás, inspeção elétrica e lubrificação. O custo de uma manutenção preventiva é de R$ 120 a R$ 200 — muito menos do que um conserto de compressor (R$ 800 a R$ 2.500) ou um aparelho novo.</p>
    <p>Agende manutenção com a New Clima em SP e ABC: <strong>(11) 96346-2516</strong>.</p>
  </BlogPostLayout>
);

export const BlogTemperatura = () => (
  <BlogPostLayout tag="Dicas de Uso" title="Qual a Temperatura Ideal do Ar Condicionado? Conforto e Economia" date="9 de Maio, 2026" author="José Erivaldo">
    <p>Escolher a <strong>temperatura ideal do ar condicionado</strong> impacta diretamente no seu conforto, na conta de luz e na saúde. Em São Paulo, onde o calor pode passar dos 35°C no verão, a tentação é colocar na mínima — mas isso não é recomendado.</p>
    <h2 className="text-2xl font-bold text-primary">Qual temperatura usar?</h2>
    <p>Para <strong>conforto e economia</strong>, a recomendação dos especialistas é entre <strong>23°C e 25°C</strong>. O INMETRO recomenda 23°C como temperatura de referência para ambientes climatizados no Brasil.</p>
    <ul className="space-y-2 list-disc pl-6">
      <li><strong>Quarto (dormir):</strong> 23°C a 26°C</li>
      <li><strong>Sala e escritório:</strong> 22°C a 24°C</li>
      <li><strong>Academia:</strong> 19°C a 22°C</li>
      <li><strong>Servidor/datacenter:</strong> 18°C a 21°C</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary">Impacto na conta de luz</h2>
    <p>Cada grau a menos na temperatura configurada representa cerca de <strong>5% a 8% a mais no consumo de energia</strong>. Ou seja, colocar em 18°C em vez de 23°C aumenta o consumo em cerca de 25% a 40% sem trazer conforto proporcional.</p>
    <h2 className="text-2xl font-bold text-primary">Choque térmico e saúde</h2>
    <p>Temperaturas muito baixas causam <strong>choque térmico</strong> ao entrar e sair do ambiente — especialmente problemático em dias quentes de São Paulo. Para evitar, mantenha a diferença entre temperatura interna e externa em no máximo <strong>8°C a 10°C</strong>.</p>
    <p>Dúvidas sobre qual equipamento escolher para seu ambiente? Fale com a New Clima: <strong>(11) 96346-2516</strong>.</p>
  </BlogPostLayout>
);

export const BlogFuncaoDry = () => (
  <BlogPostLayout tag="Dicas de Uso" title="Função Dry no Ar Condicionado: Para que Serve e Quando Usar" date="9 de Maio, 2026" author="José Erivaldo">
    <p>Você já viu o símbolo de gota no controle remoto e ficou sem saber o que é? A <strong>função Dry</strong> (ou modo desumidificação) é um dos recursos mais úteis e menos usados dos ar condicionados — especialmente em São Paulo, onde a umidade pode chegar a 90%.</p>
    <h2 className="text-2xl font-bold text-primary">O que é a função Dry?</h2>
    <p>O modo Dry <strong>remove o excesso de umidade do ar</strong> sem resfriar tanto o ambiente. O compressor funciona em ciclos menores, priorizando a desumidificação. O resultado é um ar mais seco e confortável, sem aquela sensação de abafamento.</p>
    <h2 className="text-2xl font-bold text-primary">Quando usar o modo Dry?</h2>
    <ul className="space-y-2 list-disc pl-6">
      <li><strong>Dias nublados e chuvosos</strong> em São Paulo, quando a umidade está alta mas não está quente</li>
      <li><strong>Transição de estações</strong> — outono e primavera paulistana</li>
      <li><strong>Ambientes com mofo</strong> — reduz a umidade que favorece o crescimento de fungos</li>
      <li><strong>Quarto à noite</strong> — quando você quer conforto sem frio excessivo</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary">Dry vs Cool — qual a diferença?</h2>
    <p>No modo <strong>Cool</strong>, o objetivo é resfriar. No modo <strong>Dry</strong>, o objetivo é desumidificar — com temperatura mais próxima do ambiente. O consumo de energia no Dry é geralmente <strong>menor</strong> que no Cool para o mesmo período de uso.</p>
    <p>Para melhor eficiência de qualquer modo, mantenha a manutenção em dia. Agende com a New Clima em SP e ABC: <strong>(11) 96346-2516</strong>.</p>
  </BlogPostLayout>
);

export const BlogGas = () => (
  <BlogPostLayout tag="Técnico" title="Gás R32 e R410A: Qual a Diferença e Qual é Melhor?" date="9 de Maio, 2026" author="José Erivaldo">
    <p>Se você está comprando um ar condicionado novo ou foi informado que precisa recarregar o gás, provavelmente ouviu falar em <strong>R32 ou R410A</strong>. Entenda a diferença e por que isso importa para sua escolha.</p>
    <h2 className="text-2xl font-bold text-primary">O que é o gás refrigerante?</h2>
    <p>O gás refrigerante é o fluido que circula pelo sistema e realiza a troca térmica — é ele quem "faz o frio". Sem gás ou com nível baixo, o ar condicionado não resfria adequadamente e pode danificar o compressor.</p>
    <h2 className="text-2xl font-bold text-primary">R410A — o mais comum no Brasil</h2>
    <p>Durante anos foi o padrão. Não é inflamável e tem boa eficiência. Porém, seu <strong>GWP (potencial de aquecimento global) é alto</strong> — 2.088 vezes maior que o CO₂. Por isso está sendo gradualmente substituído.</p>
    <h2 className="text-2xl font-bold text-primary">R32 — o novo padrão</h2>
    <p>O R32 tem <strong>GWP de 675</strong> — muito menor que o R410A. É mais eficiente energeticamente, usa menor quantidade de carga e está presente na maioria dos inverter novos das marcas LG, Daikin, Midea e Samsung. A desvantagem: é levemente inflamável, exigindo técnico certificado para manuseio.</p>
    <h2 className="text-2xl font-bold text-primary">Posso misturar os gases?</h2>
    <p><strong>Nunca</strong>. R32 e R410A são incompatíveis e não podem ser misturados. Sempre informe o modelo do aparelho ao técnico para que ele use o gás correto. A New Clima trabalha com ambos os tipos em São Paulo e ABC: <strong>(11) 96346-2516</strong>.</p>
  </BlogPostLayout>
);
