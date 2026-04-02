import React from 'react';
import { CheckCircle2, ArrowRight, MessageCircle, ShieldCheck, Zap, Thermometer, Settings, Droplets, AlertTriangle } from 'lucide-react';

const WhatsAppButton = ({ text = "Solicitar Orçamento via WhatsApp" }: { text?: string }) => (
  <a 
    href="https://wa.me/5511963462516?text=Olá! Gostaria de um orçamento para meu ar condicionado." 
    target="_blank" 
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center gap-2 bg-success hover:bg-success/90 text-white font-bold py-4 px-8 rounded-xl transition-all hover:-translate-y-0.5 shadow-lg shadow-success/20 w-full md:w-auto"
  >
    <MessageCircle size={20} />
    {text}
  </a>
);

const ServiceLayout = ({ title, tag, icon, children }: { title: string, tag: string, icon: React.ReactNode, children: React.ReactNode }) => (
  <div className="py-12">
    <div className="flex flex-col md:flex-row gap-12 items-start">
      <div className="flex-1 space-y-8">
        <div className="space-y-4">
          <span className="inline-block bg-ice text-primary-light text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full">
            {tag}
          </span>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center shrink-0">
              {React.cloneElement(icon as React.ReactElement, { size: 24 })}
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary leading-tight">
              {title}
            </h2>
          </div>
        </div>
        <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-6">
          {children}
        </div>
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row gap-6 items-center">
          <WhatsAppButton />
          <div className="text-sm text-slate-400 font-medium">
            Atendimento rápido em São Paulo e ABC Paulista.
          </div>
        </div>
      </div>
      
      <aside className="w-full lg:w-80 space-y-6 shrink-0">
        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
          <h4 className="font-bold text-primary mb-4">Diferenciais New Clima</h4>
          <ul className="space-y-3">
            {[
              "Técnicos Certificados",
              "Garantia de 1 Ano",
              "Material de 1ª Linha",
              "Limpeza Pós-Obra",
              "Suporte 24h WhatsApp"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                <CheckCircle2 size={16} className="text-success shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="bg-primary p-6 rounded-2xl text-white">
          <h4 className="font-bold mb-2">Precisa de Urgência?</h4>
          <p className="text-xs text-blue-100/70 mb-4 leading-relaxed">
            Nossa equipe móvel está posicionada estrategicamente para atender chamados emergenciais em até 4h.
          </p>
          <a href="tel:+5511963462516" className="block w-full bg-white/10 hover:bg-white/20 text-center py-3 rounded-xl font-bold transition-colors">
            Ligar Agora
          </a>
        </div>
      </aside>
    </div>
  </div>
);

export const SplitMultiSplit = () => (
  <ServiceLayout 
    tag="Residencial & Comercial"
    title="Instalação de Ar Condicionado Split e Multi Split"
    icon={<Zap />}
  >
    <p>
      A instalação de sistemas <strong>Split e Multi Split</strong> é a solução mais versátil e procurada para climatização de residências, apartamentos e pequenos escritórios em <strong>São Paulo e no ABC Paulista</strong>. Na New Clima Ar, elevamos o padrão dessa instalação, tratando cada projeto como uma obra de engenharia de precisão.
    </p>
    <p>
      Diferente de instalações genéricas, nosso processo envolve o cálculo rigoroso da carga térmica do ambiente, considerando fatores como incidência solar, quantidade de eletrônicos e circulação de pessoas. Utilizamos apenas <strong>tubulação de cobre de alta pureza</strong> e isolamento térmico blindado, garantindo que seu equipamento opere com a máxima eficiência energética e sem riscos de vazamentos prematuros.
    </p>
    <h3 className="text-xl font-bold text-primary">Por que escolher o sistema Multi Split?</h3>
    <p>
      Ideal para apartamentos com varandas técnicas reduzidas, o sistema Multi Split permite climatizar até 5 ambientes utilizando apenas uma unidade condensadora externa. Isso preserva a estética da fachada e otimiza o espaço, mantendo o controle individual de temperatura em cada cômodo.
    </p>
    <ul className="space-y-2">
      <li className="flex gap-2"><strong>✓ Infraestrutura:</strong> Executamos toda a infraestrutura embutida em alvenaria ou drywall.</li>
      <li className="flex gap-2"><strong>✓ Elétrica:</strong> Dimensionamento correto de disjuntores e fiação conforme normas NBR.</li>
      <li className="flex gap-2"><strong>✓ Drenagem:</strong> Sistemas de dreno com caimento perfeito para evitar infiltrações.</li>
    </ul>
  </ServiceLayout>
);

export const SistemasComerciais = () => (
  <ServiceLayout 
    tag="Corporativo & Comercial"
    title="Sistemas Cassete, Piso-Teto e Dutados"
    icon={<Thermometer />}
  >
    <p>
      Para ambientes que exigem alta vazão de ar e distribuição uniforme, como <strong>lojas, restaurantes, clínicas e grandes escritórios</strong>, os sistemas comerciais são a escolha técnica correta. A New Clima Ar é especialista em projetar e instalar equipamentos de alta capacidade que suportam o uso contínuo com baixo nível de ruído.
    </p>
    <p>
      O modelo <strong>Cassete</strong> é ideal para quem busca discrição, ficando embutido no forro e distribuindo o ar em 4 direções. Já o <strong>Piso-Teto</strong> é a solução robusta para locais com pé-direito alto e grande fluxo de pessoas, garantindo que a temperatura desejada seja atingida rapidamente mesmo em dias de calor extremo em São Paulo.
    </p>
    <h3 className="text-xl font-bold text-primary">Engenharia de Climatização Comercial</h3>
    <p>
      Trabalhamos com sistemas <strong>Dutados</strong> para projetos que exigem estética minimalista, onde apenas as grelhas de insuflamento ficam visíveis. Esse sistema permite a climatização de grandes áreas abertas ou múltiplos ambientes de forma centralizada, facilitando a manutenção e o controle operacional.
    </p>
    <ul className="space-y-2">
      <li className="flex gap-2"><strong>✓ Alta Performance:</strong> Equipamentos dimensionados para uso industrial e comercial pesado.</li>
      <li className="flex gap-2"><strong>✓ Estética:</strong> Integração perfeita com o projeto arquitetônico e de interiores.</li>
      <li className="flex gap-2"><strong>✓ Eficiência:</strong> Tecnologia Inverter para redução drástica no consumo de energia.</li>
    </ul>
  </ServiceLayout>
);

export const VRFMiniVRF = () => (
  <ServiceLayout 
    tag="Alta Tecnologia"
    title="Projetos VRF e Mini VRF de Alta Performance"
    icon={<Settings />}
  >
    <p>
      O sistema <strong>VRF (Variable Refrigerant Flow)</strong> representa o ápice da tecnologia de climatização mundial. Indicado para edifícios corporativos, hospitais e residências de alto padrão em bairros como <strong>Moema, Jardins e Alphaville</strong>, o VRF oferece uma eficiência energética inigualável e um controle de precisão absoluta.
    </p>
    <p>
      Com a New Clima Ar, seu projeto VRF conta com acompanhamento de engenheiros especializados desde a concepção até o comissionamento final. O sistema permite que dezenas de unidades internas sejam conectadas a um único barramento de cobre, reduzindo drasticamente a necessidade de espaço para condensadoras e facilitando a gestão centralizada via automação.
    </p>
    <h3 className="text-xl font-bold text-primary">Mini VRF: O Luxo da Eficiência Residencial</h3>
    <p>
      O Mini VRF traz todos os benefícios do sistema industrial para residências e coberturas. É a solução definitiva para quem não abre mão do silêncio total e quer ter o controle de cada grau Celsius na palma da mão, via smartphone ou integração com Alexa/Google Home.
    </p>
    <ul className="space-y-2">
      <li className="flex gap-2"><strong>✓ Economia:</strong> Redução de até 55% na conta de luz comparado a sistemas tradicionais.</li>
      <li className="flex gap-2"><strong>✓ Conectividade:</strong> Integração total com sistemas de automação residencial e predial.</li>
      <li className="flex gap-2"><strong>✓ Durabilidade:</strong> Equipamentos projetados para vida útil superior a 15 anos com manutenção correta.</li>
    </ul>
  </ServiceLayout>
);

export const ManutencaoPreventiva = () => (
  <ServiceLayout 
    tag="Saúde & Economia"
    title="Manutenção Preventiva e PMOC"
    icon={<ShieldCheck />}
  >
    <p>
      A <strong>manutenção preventiva</strong> de ar condicionado em São Paulo não é apenas uma questão de conforto, mas de saúde pública e economia financeira. Um equipamento sem manutenção acumula fungos, bactérias e ácaros que podem causar crises respiratórias graves, além de consumir até 40% mais energia devido ao esforço excessivo do compressor.
    </p>
    <p>
      Para empresas e condomínios, oferecemos a gestão completa do <strong>PMOC (Plano de Manutenção, Operação e Controle)</strong>, obrigatório por lei (Lei 13.589/2018). Nossa equipe emite os laudos técnicos necessários, garantindo que sua empresa esteja em conformidade com a Vigilância Sanitária e proporcionando um ar puro para seus colaboradores e clientes.
    </p>
    <h3 className="text-xl font-bold text-primary">O que inclui nosso Check-up Premium?</h3>
    <ul className="space-y-2">
      <li className="flex gap-2"><strong>✓ Teste de Estanqueidade:</strong> Verificação de micro-vazamentos de gás refrigerante.</li>
      <li className="flex gap-2"><strong>✓ Análise Elétrica:</strong> Reaperto de bornes e medição de corrente do compressor.</li>
      <li className="flex gap-2"><strong>✓ Lubrificação:</strong> Manutenção dos motores ventiladores para operação silenciosa.</li>
      <li className="flex gap-2"><strong>✓ Higienização:</strong> Aplicação de bactericida na serpentina e bandeja de dreno.</li>
    </ul>
  </ServiceLayout>
);

export const ManutencaoCorretiva = () => (
  <ServiceLayout 
    tag="Assistência Técnica"
    title="Manutenção Corretiva e Conserto de Ar Condicionado"
    icon={<AlertTriangle />}
  >
    <p>
      Seu ar condicionado parou de gelar, está fazendo barulho estranho ou apresentando códigos de erro no painel? A New Clima Ar oferece <strong>assistência técnica especializada em São Paulo e ABC</strong> com diagnóstico preciso e peças originais.
    </p>
    <p>
      Nossa equipe de manutenção corretiva é treinada para resolver desde problemas simples, como capacitores queimados, até falhas complexas em placas eletrônicas Inverter e substituição de compressores. Atendemos todas as marcas do mercado, incluindo <strong>LG, Samsung, Daikin, Fujitsu, Carrier e Midea</strong>.
    </p>
    <h3 className="text-xl font-bold text-primary">Diagnóstico Transparente</h3>
    <p>
      Diferente de técnicos informais, entregamos um orçamento detalhado com a causa raiz do problema. Não fazemos apenas a "recarga de gás" — nós localizamos o vazamento, soldamos com nitrogênio e garantimos que o problema não retorne em poucos meses.
    </p>
    <ul className="space-y-2">
      <li className="flex gap-2"><strong>✓ Agilidade:</strong> Atendimento emergencial para que você não fique no calor.</li>
      <li className="flex gap-2"><strong>✓ Peças Originais:</strong> Garantia de compatibilidade e durabilidade do reparo.</li>
      <li className="flex gap-2"><strong>✓ Transparência:</strong> Explicamos cada etapa do conserto e os custos envolvidos.</li>
    </ul>
  </ServiceLayout>
);

export const LimpezaHigienizacao = () => (
  <ServiceLayout 
    tag="Qualidade do Ar"
    title="Limpeza e Higienização Química Profunda"
    icon={<Droplets />}
  >
    <p>
      A <strong>limpeza de ar condicionado em São Paulo</strong> deve ser levada a sério. A poluição da capital paulista satura os filtros e serpentinas com fuligem e material particulado, criando o ambiente perfeito para o "Síndrome do Edifício Doente". Nossa higienização química vai muito além de apenas lavar o filtro de telinha.
    </p>
    <p>
      Utilizamos produtos <strong>biodegradáveis e bactericidas homologados pela ANVISA</strong> que eliminam 99,9% dos microrganismos. O processo inclui a desmontagem da carenagem, limpeza da turbina (ventilador interno), desobstrução da bandeja de dreno e aplicação de verniz protetor na serpentina para evitar corrosão.
    </p>
    <h3 className="text-xl font-bold text-primary">Benefícios Imediatos</h3>
    <ul className="space-y-2">
      <li className="flex gap-2"><strong>✓ Saúde:</strong> Eliminação total de odores desagradáveis e agentes alérgicos.</li>
      <li className="flex gap-2"><strong>✓ Economia:</strong> Melhora o fluxo de ar, reduzindo o esforço do motor e a conta de luz.</li>
      <li className="flex gap-2"><strong>✓ Conforto:</strong> O aparelho volta a gelar como se fosse novo, com operação silenciosa.</li>
    </ul>
    <div className="bg-ice p-4 rounded-xl border border-primary-light/10 mt-6">
      <p className="text-sm font-bold text-primary">Recomendação Técnica:</p>
      <p className="text-sm text-slate-600">Para uso residencial, a limpeza profunda deve ser feita a cada 6 meses. Para ambientes comerciais, o intervalo ideal é trimestral.</p>
    </div>
  </ServiceLayout>
);
