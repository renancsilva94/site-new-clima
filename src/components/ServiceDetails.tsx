import React from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  MessageCircle, 
  ShieldCheck, 
  Zap, 
  Thermometer, 
  Settings, 
  Droplets, 
  AlertTriangle,
  Layers,
  CircleDot,
  LayoutGrid,
  Square,
  Wind,
  ClipboardCheck,
  Ruler,
  HardHat,
  Wrench,
  Plus,
  Minus,
  ChevronDown,
  Building2,
  ArrowLeftRight,
  Home,
  Layout,
  Search,
  Calendar,
  FileText,
  Filter,
  Snowflake,
  Shield,
  Sparkles,
  Phone
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const WhatsAppButton = ({ text = "Solicitar Orçamento" }: { text?: string }) => (
  <a 
    href="https://wa.me/5511963462516" 
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center gap-2 bg-success hover:bg-success/90 text-white font-bold py-4 px-8 rounded-xl transition-all hover:-translate-y-0.5 shadow-lg shadow-success/20 w-full md:w-auto"
  >
    <MessageCircle size={20} />
    {text}
  </a>
);

export const SistemasInstalamosSection = () => (
  <section className="bg-[#0f172a] py-16">
    <div className="container mx-auto px-4 max-w-6xl">
      <div className="text-center mb-10">
        <span className="text-blue-400 text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Tipos de Instalação</span>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Sistemas que instalamos</h2>
        <p className="text-blue-100/60 max-w-2xl mx-auto">Cada tipo de sistema exige técnicas e infraestrutura específicas. Conheça as opções.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { title: "Split Hi-Wall", icon: <Wind />, desc: "O modelo mais popular para residências. Instalação na parede com infraestrutura embutida e acabamento impecável." },
          { title: "Multi Split", icon: <Layers />, desc: "Uma única condensadora para múltiplas evaporadoras. Ideal para apartamentos e ambientes com espaço limitado na área externa." },
          { title: "Cassete 360°", icon: <CircleDot />, desc: "Distribuição de ar em 360 graus embutido no forro. Perfeito para salas amplas e ambientes integrados de alto padrão." },
          { title: "Cassete 4 Vias", icon: <LayoutGrid />, desc: "Embutido no forro com distribuição em quatro direções. Excelente para escritórios, clínicas e espaços comerciais." },
          { title: "Piso-Teto", icon: <Square />, desc: "Instalação versátil no piso ou no teto. Recomendado para ambientes sem forro rebaixado ou com pé-direito alto." },
          { title: "Dutado", icon: <Wind />, desc: "Sistema invisível com distribuição por dutos. A climatização mais elegante e silenciosa para projetos de alto padrão." }
        ].map((item, i) => (
          <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all group">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
              {React.cloneElement(item.icon as React.ReactElement, { size: 24 })}
            </div>
            <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
            <p className="text-blue-100/50 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const ProcessoSection = () => (
  <section className="py-16">
    <div className="container mx-auto px-4 max-w-6xl">
      <div className="text-center mb-12">
        <span className="text-primary-light text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Como Funciona</span>
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Nosso processo</h2>
        <p className="text-slate-500 max-w-2xl mx-auto">Cada etapa é planejada para garantir qualidade e sua total satisfação.</p>
      </div>

      <div className="relative">
        {/* Connection Line */}
        <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-slate-100 -z-10" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12">
          {[
            { step: "01", title: "Consulta Técnica", icon: <ClipboardCheck />, desc: "Visitamos o local para avaliar o ambiente, medir e dimensionar o sistema ideal." },
            { step: "02", title: "Projeto Técnico", icon: <Ruler />, desc: "Elaboramos o projeto com posicionamento dos equipamentos e traçado da infraestrutura." },
            { step: "03", title: "Infraestrutura", icon: <HardHat />, desc: "Instalamos tubulações, drenos e fiação elétrica com padrão de qualidade premium." },
            { step: "04", title: "Instalação", icon: <Wrench />, desc: "Fixamos e conectamos os equipamentos com testes de pressão e vácuo." },
            { step: "05", title: "Obra Limpa", icon: <CheckCircle2 />, desc: "Fechamos paredes, refazemos forro de gesso e finalizamos com pintura." }
          ].map((item, i) => (
            <div key={i} className="text-center space-y-6">
              <div className="relative inline-block">
                <div className="w-24 h-24 bg-white border-2 border-slate-100 rounded-full flex items-center justify-center text-primary shadow-sm mx-auto">
                  {React.cloneElement(item.icon as React.ReactElement, { size: 32 })}
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white text-xs font-bold rounded-full flex items-center justify-center border-4 border-white">
                  {item.step}
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-primary">{item.title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export const FaqSection = () => {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  const faqItems = [
    {
      question: "Quanto tempo leva uma instalação completa de ar condicionado?",
      answer: "Uma instalação padrão de split hi-wall leva em média de 3 a 5 horas. Sistemas Multi Split ou que exigem infraestrutura embutida podem levar de 1 a 2 dias dependendo da complexidade."
    },
    {
      question: "Qual o melhor tipo de ar condicionado para minha residência ou empresa?",
      answer: "Depende do espaço e número de ambientes. O Split Hi-Wall é ideal para um único cômodo. O Multi Split é perfeito para climatizar vários quartos. Para empresas, Cassete e Piso-Teto oferecem maior vazão e potência."
    },
    {
      question: "A instalação inclui o acabamento de parede e forro?",
      answer: "Sim, na New Clima oferecemos o conceito de 'Obra Limpa'. Realizamos a infraestrutura e, se necessário, o fechamento de gesso e pequenos reparos de pintura para que você não precise contratar outros profissionais."
    },
    {
      question: "Vocês instalam sistemas VRF para empresas?",
      answer: "Sim, somos especialistas em sistemas VRF e Mini VRF para residências de alto padrão e edifícios corporativos, oferecendo projetos completos e máxima eficiência energética."
    },
    {
      question: "Qual a garantia da instalação de ar condicionado?",
      answer: "Oferecemos 1 ano de garantia em toda a nossa mão de obra de instalação, além da garantia de fábrica dos equipamentos que instalamos."
    },
    {
      question: "Preciso preparar algo antes da instalação?",
      answer: "Nossa equipe realiza uma consulta técnica prévia para avaliar a rede elétrica e drenagem. Se houver necessidade de adequações, orientamos ou executamos conforme o projeto aprovado."
    }
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-10">
          <span className="text-primary-light text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Dúvidas Frequentes</span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Perguntas frequentes</h2>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
              <button 
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-slate-50 transition-colors"
              >
                <span className="font-bold text-primary md:text-lg">{item.question}</span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openFaq === i ? 'bg-primary text-white' : 'bg-slate-100 text-slate-400'}`}>
                  {openFaq === i ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>
              <AnimatePresence>
                {openFaq === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-8 pb-8 text-slate-500 leading-relaxed border-t border-slate-50 pt-6">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SistemasVRFSection = () => (
  <section className="bg-[#0f172a] py-16">
    <div className="container mx-auto px-4 max-w-6xl">
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Soluções VRF que instalamos</h2>
        <p className="text-blue-100/60 max-w-2xl mx-auto">O mercado VRF oferece configurações para cada porte de projeto. A New Clima dimensiona a solução certa para sua necessidade.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { title: "Mini VRF", icon: <Layout />, desc: "Sistemas de 2 a 6 zonas com capacidade entre 8.000 e 28.000 BTUs por zona. Ideal para escritórios de pequeno e médio porte, consultórios, lojas e residências premium. Menor investimento inicial com toda a eficiência do VRF." },
          { title: "VRF Heat Pump", icon: <Layers />, desc: "Sistema com modo simultâneo de resfriamento em diferentes zonas. Cada ambiente pode operar com temperatura diferente de forma totalmente independente. O mais eficiente para projetos onde as zonas têm cargas térmicas distintas." },
          { title: "VRF Heat Recovery", icon: <ArrowLeftRight />, desc: "A tecnologia mais avançada: algumas zonas resfriam enquanto outras aquecem, com recuperação total da energia. Eficiência energética superior a 50% em relação a sistemas convencionais. Ideal para hotéis, hospitais e edificações 24h." },
          { title: "VRF Corporativo", icon: <Building2 />, desc: "Sistemas de alta capacidade para edifícios corporativos, condomínios e grandes superfícies comerciais. Múltiplas condensadoras interligadas cobrindo até 50 zonas com controle centralizado e integração BMS." },
          { title: "VRF com Dutos", icon: <Wind />, desc: "Combinação de tecnologia VRF com distribuição por dutos para ambientes que exigem invisibilidade total do sistema. Climatização oculta com controle inteligente por zona — o projeto mais sofisticado em climatização." },
          { title: "VRF Residencial", icon: <Home />, desc: "Residências de alto padrão com 5 ou mais ambientes climatizados. Uma única condensadora discreta, evaporadoras elegantes por cômodo e controle via app. Elimina a poluição visual de múltiplas condensadoras na fachada." }
        ].map((item, i) => (
          <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all group">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
              {React.cloneElement(item.icon as React.ReactElement, { size: 24 })}
            </div>
            <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
            <p className="text-blue-100/50 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FaqVRFSection = () => {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  const faqItems = [
    {
      question: "O que é sistema VRF e como funciona?",
      answer: "VRF (Variable Refrigerant Flow) é um sistema de ar condicionado central multi-split que utiliza um único ciclo de refrigeração para atender múltiplas unidades internas. Ele ajusta o fluxo de refrigerante conforme a demanda de cada ambiente, garantindo máxima eficiência."
    },
    {
      question: "Qual a diferença entre VRF e VRV?",
      answer: "Não há diferença técnica. VRV (Variable Refrigerant Volume) é uma marca registrada da Daikin, enquanto VRF é o termo genérico utilizado pelos outros fabricantes para a mesma tecnologia."
    },
    {
      question: "Para qual tipo de ambiente o VRF é indicado?",
      answer: "É indicado para grandes residências de alto padrão, edifícios comerciais, hotéis e hospitais que buscam controle individualizado por ambiente, economia de energia e baixo nível de ruído."
    },
    {
      question: "Qual o preço de um sistema VRF?",
      answer: "O investimento inicial é superior aos sistemas convencionais, porém o custo operacional é muito menor devido à economia de energia. O valor depende da complexidade do projeto e número de ambientes."
    },
    {
      question: "Qual a diferença entre VRF e ar condicionado split convencional?",
      answer: "O VRF permite conectar dezenas de unidades internas a uma única externa, possui compressores inverter de alta performance e permite controle centralizado, enquanto o split convencional exige uma unidade externa para cada interna."
    },
    {
      question: "Quanto tempo leva para instalar um sistema VRF?",
      answer: "A instalação é mais complexa e exige projeto especializado. O tempo varia conforme o porte da obra, podendo levar de algumas semanas a meses em grandes edifícios."
    },
    {
      question: "A New Clima faz projeto técnico de VRF?",
      answer: "Sim, realizamos o projeto completo, dimensionamento de carga térmica, traçado de tubulação e seleção de equipamentos para garantir a performance do sistema."
    },
    {
      question: "O sistema VRF precisa de manutenção?",
      answer: "Sim, a manutenção preventiva é fundamental para manter a eficiência energética e a vida útil do sistema. Recomendamos revisões periódicas conforme o manual do fabricante."
    }
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Perguntas frequentes</h2>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
              <button 
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-slate-50 transition-colors"
              >
                <span className="font-bold text-primary md:text-lg">{item.question}</span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openFaq === i ? 'bg-primary text-white' : 'bg-slate-100 text-slate-400'}`}>
                  {openFaq === i ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>
              <AnimatePresence>
                {openFaq === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-8 pb-8 text-slate-500 leading-relaxed border-t border-slate-50 pt-6">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ServicosPreventivosSection = () => (
  <section className="bg-[#0f172a] py-16">
    <div className="container mx-auto px-4 max-w-6xl">
      <div className="text-center mb-10">
        <span className="text-blue-400 text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Tipos de Manutenção</span>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Serviços preventivos especializados</h2>
        <p className="text-blue-100/60 max-w-2xl mx-auto">Cada etapa da manutenção preventiva é essencial para o desempenho do sistema.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "Limpeza de Filtros", icon: <Filter />, desc: "Remoção de poeira e impurezas dos filtros para garantir a qualidade do ar e a eficiência do equipamento." },
          { title: "Verificação de Gás", icon: <Thermometer />, desc: "Inspeção do nível de gás refrigerante e recarga quando necessário para manter a capacidade de refrigeração." },
          { title: "Check-up Elétrico", icon: <Zap />, desc: "Verificação completa do sistema elétrico, incluindo cabos, conexões, disjuntores e componentes da placa." },
          { title: "PMOC Completo", icon: <FileText />, desc: "Plano de Manutenção, Operação e Controle conforme a Lei 13.589, com relatórios técnicos e cronogramas." }
        ].map((item, i) => (
          <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all group">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
              {React.cloneElement(item.icon as React.ReactElement, { size: 24 })}
            </div>
            <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
            <p className="text-blue-100/50 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const ProcessoManutencaoSection = () => (
  <section className="py-16">
    <div className="container mx-auto px-4 max-w-6xl">
      <div className="text-center mb-12">
        <span className="text-primary-light text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Como Funciona</span>
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Nosso processo</h2>
        <p className="text-slate-500 max-w-2xl mx-auto">Cada etapa é planejada para garantir qualidade e sua total satisfação.</p>
      </div>

      <div className="relative">
        {/* Connection Line */}
        <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-slate-100 -z-10" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12">
          {[
            { step: "01", title: "Agendamento", icon: <Calendar />, desc: "Definimos a melhor data e horário conforme a sua disponibilidade." },
            { step: "02", title: "Diagnóstico Inicial", icon: <Search />, desc: "Avaliamos o estado geral do sistema e identificamos pontos de atenção." },
            { step: "03", title: "Execução Técnica", icon: <Wrench />, desc: "Realizamos todas as etapas da manutenção com ferramentas e produtos profissionais." },
            { step: "04", title: "Testes e Verificação", icon: <ClipboardCheck />, desc: "Testamos o funcionamento completo e verificamos temperatura e vazão de ar." },
            { step: "05", title: "Relatório Técnico", icon: <FileText />, desc: "Entregamos relatório detalhado com tudo o que foi feito e recomendações futuras." }
          ].map((item, i) => (
            <div key={i} className="text-center space-y-6">
              <div className="relative inline-block">
                <div className="w-24 h-24 bg-white border-2 border-slate-100 rounded-full flex items-center justify-center text-primary shadow-sm mx-auto">
                  {React.cloneElement(item.icon as React.ReactElement, { size: 32 })}
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white text-xs font-bold rounded-full flex items-center justify-center border-4 border-white">
                  {item.step}
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-primary">{item.title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const FaqPreventivaSection = () => {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  const faqItems = [
    {
      question: "Com que frequência devo fazer manutenção preventiva no ar condicionado?",
      answer: "Para uso residencial, recomendamos a cada 6 meses. Em ambientes comerciais ou com uso intenso, o ideal é trimestralmente ou mensalmente via PMOC para garantir a qualidade do ar e eficiência."
    },
    {
      question: "O que é o PMOC e por que ele é obrigatório?",
      answer: "PMOC é o Plano de Manutenção, Operação e Controle. É obrigatório por lei (13.589/2018) para todos os edifícios de uso público e coletivo que possuem sistemas de ar condicionado, visando garantir a higiene e saúde dos ocupantes."
    },
    {
      question: "Quais são os benefícios da manutenção preventiva?",
      answer: "Redução de até 30% no consumo de energia, aumento da vida útil do aparelho, prevenção de quebras inesperadas e, principalmente, a eliminação de fungos e bactérias que causam doenças respiratórias."
    },
    {
      question: "A New Clima oferece contrato de manutenção programada?",
      answer: "Sim, oferecemos contratos personalizados para empresas e condomínios, incluindo visitas mensais, suporte prioritário e gestão completa do PMOC com emissão de ART."
    },
    {
      question: "O que inclui uma manutenção preventiva completa?",
      answer: "Limpeza de filtros e serpentinas, higienização da bandeja de dreno, verificação da carga de gás, reaperto de conexões elétricas, testes de sensores e medição da corrente do compressor."
    }
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Perguntas frequentes</h2>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
              <button 
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-slate-50 transition-colors"
              >
                <span className="font-bold text-primary md:text-lg">{item.question}</span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openFaq === i ? 'bg-primary text-white' : 'bg-slate-100 text-slate-400'}`}>
                  {openFaq === i ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>
              <AnimatePresence>
                {openFaq === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-8 pb-8 text-slate-500 leading-relaxed border-t border-slate-50 pt-6">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FaqCorretivaSection = () => {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  const faqItems = [
    {
      question: "Quanto tempo leva o conserto de um ar condicionado?",
      answer: "A maioria dos reparos é concluída na primeira visita. Problemas mais complexos que exigem troca de peças específicas podem levar de 2 a 5 dias úteis para aquisição dos componentes originais."
    },
    {
      question: "Vocês usam peças originais nos reparos?",
      answer: "Sim, trabalhamos prioritariamente com peças originais de cada fabricante para garantir a performance, segurança e a manutenção da garantia do seu equipamento."
    },
    {
      question: "O conserto tem garantia?",
      answer: "Sim, oferecemos 90 dias de garantia em todos os nossos serviços de manutenção corretiva e consertos, cobrindo tanto a mão de obra quanto as peças substituídas."
    },
    {
      question: "Meu ar condicionado parou de gelar, o que pode ser?",
      answer: "As causas mais comuns são falta de gás (vazamento), capacitor queimado, compressor com falha ou sujeira extrema na serpentina. Nossos técnicos realizam o diagnóstico preciso no local."
    },
    {
      question: "Vale a pena consertar um aparelho antigo ou comprar um novo?",
      answer: "Avaliamos o custo do reparo em relação ao valor de um novo. Geralmente, se o conserto ultrapassar 40% do valor de um aparelho novo e mais eficiente (Inverter), recomendamos a substituição."
    }
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Perguntas frequentes</h2>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
              <button 
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-slate-50 transition-colors"
              >
                <span className="font-bold text-primary md:text-lg">{item.question}</span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openFaq === i ? 'bg-primary text-white' : 'bg-slate-100 text-slate-400'}`}>
                  {openFaq === i ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>
              <AnimatePresence>
                {openFaq === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-8 pb-8 text-slate-500 leading-relaxed border-t border-slate-50 pt-6">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const LimpezaDetalhesSection = () => (
  <section className="bg-[#0f172a] py-16">
    <div className="container mx-auto px-4 max-w-6xl">
      <div className="text-center mb-10">
        <span className="text-blue-400 text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Etapas da Higienização</span>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Limpeza completa em cada detalhe</h2>
        <p className="text-blue-100/60 max-w-2xl mx-auto">Cada componente do seu ar condicionado recebe atenção especializada.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "Limpeza de Filtros", icon: <Filter />, desc: "Lavagem e desinfecção dos filtros para restaurar o fluxo de ar e a eficiência do equipamento." },
          { title: "Limpeza do Evaporador", icon: <Snowflake />, desc: "Lavagem profunda da serpentina evaporadora com produto específico para remoção de sujeira incrustada." },
          { title: "Sanitização", icon: <Shield />, desc: "Aplicação de agente bactericida e fungicida para eliminar micro-organismos nocivos à saúde." },
          { title: "Limpeza de Dreno", icon: <Droplets />, desc: "Desobstrução completa do sistema de drenagem para evitar vazamentos e proliferação de fungos." }
        ].map((item, i) => (
          <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all group">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
              {React.cloneElement(item.icon as React.ReactElement, { size: 24 })}
            </div>
            <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
            <p className="text-blue-100/50 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const ProcessoHigienizacaoSection = () => (
  <section className="py-16">
    <div className="container mx-auto px-4 max-w-6xl">
      <div className="text-center mb-12">
        <span className="text-primary-light text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Como Funciona</span>
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Nosso processo</h2>
        <p className="text-slate-500 max-w-2xl mx-auto">Cada etapa é planejada para garantir qualidade e sua total satisfação.</p>
      </div>

      <div className="relative">
        {/* Connection Line */}
        <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-slate-100 -z-10" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12">
          {[
            { step: "01", title: "Agendamento", icon: <Calendar />, desc: "Escolha o melhor dia e horário para a visita da nossa equipe técnica." },
            { step: "02", title: "Proteção do Ambiente", icon: <Shield />, desc: "Protegemos móveis e pisos antes de iniciar o processo de limpeza." },
            { step: "03", title: "Limpeza Profunda", icon: <Sparkles />, desc: "Desmontamos, lavamos e higienizamos todos os componentes internos." },
            { step: "04", title: "Sanitização", icon: <ShieldCheck />, desc: "Aplicamos produto bactericida para eliminar fungos e bactérias." },
            { step: "05", title: "Teste Final", icon: <CheckCircle2 />, desc: "Remontamos o equipamento, testamos o funcionamento e verificamos a qualidade do ar." }
          ].map((item, i) => (
            <div key={i} className="text-center space-y-6">
              <div className="relative inline-block">
                <div className="w-24 h-24 bg-white border-2 border-slate-100 rounded-full flex items-center justify-center text-primary shadow-sm mx-auto">
                  {React.cloneElement(item.icon as React.ReactElement, { size: 32 })}
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white text-xs font-bold rounded-full flex items-center justify-center border-4 border-white">
                  {item.step}
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-primary">{item.title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const FaqLimpezaSection = () => {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  const faqItems = [
    {
      question: "Com que frequência devo limpar o ar condicionado?",
      answer: "Recomendamos a limpeza profunda a cada 6 meses para residências e trimestralmente para comércios e escritórios com alto fluxo de pessoas ou em áreas com muita poluição."
    },
    {
      question: "A limpeza do ar condicionado ajuda com alergias?",
      answer: "Sim! A higienização profunda elimina fungos, ácaros e bactérias que são os principais gatilhos para rinites, asmas e outras doenças respiratórias."
    },
    {
      question: "O que causa mau cheiro no ar condicionado?",
      answer: "O mau cheiro é causado pelo acúmulo de umidade e sujeira na bandeja de dreno e na serpentina, o que favorece a proliferação de fungos. A higienização elimina a causa do odor."
    },
    {
      question: "Qual a diferença entre limpeza simples e higienização completa?",
      answer: "A limpeza simples foca apenas nos filtros. A higienização completa envolve a desmontagem do aparelho para limpar serpentina, turbina, bandeja de dreno e aplicação de bactericida."
    },
    {
      question: "A higienização danifica o equipamento?",
      answer: "Não, pelo contrário. A limpeza profissional protege os componentes contra a corrosão e evita que o compressor trabalhe sobrecarregado, aumentando a vida útil do aparelho."
    }
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Perguntas frequentes</h2>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
              <button 
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-slate-50 transition-colors"
              >
                <span className="font-bold text-primary md:text-lg">{item.question}</span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openFaq === i ? 'bg-primary text-white' : 'bg-slate-100 text-slate-400'}`}>
                  {openFaq === i ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>
              <AnimatePresence>
                {openFaq === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-8 pb-8 text-slate-500 leading-relaxed border-t border-slate-50 pt-6">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ServicosCorretivosSection = () => (
  <section className="bg-[#0f172a] py-16">
    <div className="container mx-auto px-4 max-w-6xl">
      <div className="text-center mb-10">
        <span className="text-blue-400 text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Soluções em Conserto</span>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Serviços de manutenção corretiva</h2>
        <p className="text-blue-100/60 max-w-2xl mx-auto">Atuamos na causa raiz do problema para restaurar a performance do seu sistema.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "Diagnóstico de Falhas", icon: <Search />, desc: "Identificação precisa de erros em placas, sensores e componentes mecânicos do ar condicionado." },
          { title: "Troca de Peças", icon: <Settings />, desc: "Substituição de compressores, ventiladores, capacitores e placas eletrônicas por componentes originais." },
          { title: "Recarga de Gás", icon: <Thermometer />, desc: "Detecção de vazamentos, reparo da tubulação e recarga completa do fluido refrigerante." },
          { title: "Reparo Eletrônico", icon: <Zap />, desc: "Conserto especializado em placas Inverter e sistemas de automação de todas as marcas." }
        ].map((item, i) => (
          <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all group">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
              {React.cloneElement(item.icon as React.ReactElement, { size: 24 })}
            </div>
            <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
            <p className="text-blue-100/50 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const ServiceCTA = ({ 
  title, 
  subtitle = "Solicite uma consulta técnica e receba um projeto completo com obra limpa e garantia real." 
}: { title: React.ReactNode, subtitle?: string }) => (
  <section className="bg-[#0f172a] py-16 border-t border-white/5">
    <div className="container mx-auto px-4 text-center max-w-4xl">
      <span className="text-blue-400 text-xs font-bold tracking-[0.3em] uppercase mb-6 block">Pronto para começar?</span>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
        {title}
      </h2>
      <p className="text-blue-100/60 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
        {subtitle}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <a 
          href="https://wa.me/5511963462516" 
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-full font-bold flex items-center gap-3 transition-all shadow-xl shadow-blue-600/20 group w-full sm:w-auto justify-center"
        >
          <MessageCircle size={22} />
          Falar no WhatsApp
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </a>
        <a 
          href="https://wa.me/5511963462516"
          rel="noopener noreferrer"
          className="border border-white/10 hover:bg-white/5 text-white px-10 py-5 rounded-full font-bold flex items-center gap-3 transition-all w-full sm:w-auto justify-center"
        >
          <Building2 size={22} />
          Ver Detalhes
        </a>
      </div>
    </div>
  </section>
);

const ServiceLayout = ({ title, tag, icon, children }: { title: string, tag: string, icon: React.ReactNode, children: React.ReactNode }) => (
  <div className="py-12 container mx-auto px-4">
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

export const SplitMultiSplit = () => {
  return (
    <div className="space-y-16 pb-20">
      <ServiceLayout 
        tag="Residencial & Comercial"
        title="Instalação de Ar Condicionado Split e Multi Split em SP"
        icon={<Zap />}
      >
        <p>
          A <strong>instalação de sistemas Split e Multi Split</strong> é a solução mais eficiente para climatização de residências, apartamentos e escritórios em <strong>São Paulo e no ABC Paulista</strong>. Na New Clima Ar, realizamos cada projeto com rigor técnico e garantia total.
        </p>
        <p>
          Diferente de instalações amadoras, nosso processo inclui o cálculo preciso da carga térmica, garantindo que seu <strong>ar condicionado split</strong> opere com máxima economia de energia. Utilizamos tubulação de cobre de alta qualidade e isolamento térmico adequado para evitar vazamentos e garantir a durabilidade do seu equipamento.
        </p>
        <h3 className="text-xl font-bold text-primary">Vantagens do Sistema Multi Split</h3>
        <p>
          O sistema Multi Split é ideal para quem deseja climatizar vários ambientes (como quartos e sala) utilizando apenas uma unidade condensadora externa. É a escolha perfeita para apartamentos com varandas técnicas limitadas em São Paulo.
        </p>
        <ul className="space-y-2">
          <li className="flex gap-2"><strong>✓ Instalação Técnica:</strong> Executamos a infraestrutura completa, seja embutida ou aparente.</li>
          <li className="flex gap-2"><strong>✓ Economia de Energia:</strong> Foco em sistemas Inverter para menor consumo de eletricidade.</li>
          <li className="flex gap-2"><strong>✓ Estética Preservada:</strong> Menos unidades externas, mantendo a harmonia da fachada.</li>
        </ul>
      </ServiceLayout>

      <SistemasInstalamosSection />
      <ProcessoSection />
      <FaqSection />
      <ServiceCTA 
        title={<>Pronto para climatizar seu ambiente com <span className="text-blue-500 italic">qualidade real</span>?</>}
        subtitle="Solicite uma consulta técnica e receba um projeto completo de instalação com obra limpa e garantia real."
      />
    </div>
  );
};

export const SistemasComerciais = () => {
  return (
    <div className="space-y-16 pb-20">
      <ServiceLayout 
        tag="Corporativo & Comercial"
        title="Ar Condicionado Cassete, Piso-Teto e Dutados para Empresas"
        icon={<Thermometer />}
      >
        <p>
          Para ambientes comerciais que exigem alta performance, como <strong>lojas, restaurantes e escritórios em São Paulo</strong>, os sistemas Cassete e Piso-Teto são as melhores opções. A New Clima Ar projeta sistemas que garantem distribuição uniforme do ar e baixo nível de ruído.
        </p>
        <p>
          O modelo <strong>Cassete</strong> é discreto e elegante, ideal para forros de gesso. Já o <strong>Piso-Teto</strong> oferece robustez para grandes vãos e pé-direito alto, garantindo que o ambiente atinja a temperatura ideal rapidamente, mesmo nos dias mais quentes do ABC.
        </p>
        <h3 className="text-xl font-bold text-primary">Climatização Comercial Estratégica</h3>
        <p>
          Oferecemos também sistemas <strong>Dutados</strong> para projetos arquitetônicos que exigem invisibilidade dos equipamentos. Nossa equipe técnica garante que a vazão de ar seja perfeita em todos os pontos do seu estabelecimento comercial.
        </p>
        <ul className="space-y-2">
          <li className="flex gap-2"><strong>✓ Alta Capacidade:</strong> Equipamentos dimensionados para grandes fluxos de pessoas.</li>
          <li className="flex gap-2"><strong>✓ Eficiência Térmica:</strong> Projetos focados em reduzir o custo operacional da sua empresa.</li>
          <li className="flex gap-2"><strong>✓ Manutenção Facilitada:</strong> Acesso estratégico para limpezas e reparos periódicos.</li>
        </ul>
      </ServiceLayout>

      <SistemasInstalamosSection />
      <ProcessoSection />
      <FaqSection />
      <ServiceCTA 
        title={<>Pronto para climatizar seu comércio com <span className="text-blue-500 italic">qualidade real</span>?</>}
        subtitle="Especialistas em Cassete, Piso-Teto e Sistemas Dutados para o seu negócio."
      />
    </div>
  );
};

export const VRFMiniVRF = () => {
  return (
    <div className="space-y-16 pb-20">
      <ServiceLayout 
        tag="Alta Tecnologia"
        title="Sistemas VRF e Mini VRF: O Ápice da Climatização"
        icon={<Settings />}
      >
        <p>
          O sistema <strong>VRF (Variable Refrigerant Flow)</strong> é a tecnologia mais avançada para climatização de grandes residências de luxo e edifícios corporativos em <strong>São Paulo</strong>. Oferece controle individualizado por ambiente e uma economia de energia sem precedentes.
        </p>
        <p>
          Na New Clima Ar, nossos engenheiros projetam sistemas VRF que otimizam o espaço das condensadoras e garantem o máximo de conforto com o mínimo de ruído. É a solução definitiva para bairros como Moema, Jardins e para o setor corporativo do ABC.
        </p>
        <h3 className="text-xl font-bold text-primary">Mini VRF para Residências de Alto Padrão</h3>
        <p>
          O Mini VRF traz a potência industrial para o ambiente doméstico, permitindo climatizar toda a casa com uma única unidade externa compacta. Ideal para quem busca sofisticação, silêncio e automação residencial completa.
        </p>
        <ul className="space-y-2">
          <li className="flex gap-2"><strong>✓ Máxima Economia:</strong> Tecnologia que ajusta o fluxo de refrigerante conforme a necessidade real.</li>
          <li className="flex gap-2"><strong>✓ Controle Centralizado:</strong> Gerencie todo o sistema via smartphone ou automação predial.</li>
          <li className="flex gap-2"><strong>✓ Conforto Absoluto:</strong> Estabilidade térmica total em todos os cômodos simultaneamente.</li>
        </ul>
      </ServiceLayout>

      <SistemasVRFSection />
      <ProcessoSection />
      <FaqVRFSection />
      <ServiceCTA 
        title={<>Pronto para o ápice da climatização com <span className="text-blue-500 italic">tecnologia VRF</span>?</>}
        subtitle="Projetos personalizados para grandes residências e edifícios corporativos."
      />
    </div>
  );
};

export const ManutencaoPreventiva = () => {
  return (
    <div className="space-y-16 pb-20">
      <ServiceLayout 
        tag="Saúde & Economia"
        title="Manutenção Preventiva de Ar Condicionado e PMOC em SP"
        icon={<ShieldCheck />}
      >
        <p>
          A <strong>manutenção preventiva de ar condicionado</strong> é essencial para garantir a qualidade do ar e a vida útil do seu aparelho. Em São Paulo, a poluição torna a limpeza dos filtros e a revisão técnica ainda mais críticas para evitar doenças respiratórias e gastos excessivos com energia.
        </p>
        <p>
          Para empresas, implementamos o <strong>PMOC (Plano de Manutenção, Operação e Controle)</strong>, garantindo conformidade com a Lei 13.589/2018. Nossa gestão de PMOC no ABC e SP assegura que seu estabelecimento esteja sempre dentro das normas da Vigilância Sanitária, protegendo seus clientes e funcionários.
        </p>
        <h3 className="text-xl font-bold text-primary">Benefícios da Manutenção Periódica</h3>
        <ul className="space-y-2">
          <li className="flex gap-2"><strong>✓ Ar Mais Puro:</strong> Eliminação de fungos, bactérias e ácaros do sistema.</li>
          <li className="flex gap-2"><strong>✓ Menor Consumo:</strong> Equipamentos limpos e regulados gastam até 30% menos energia.</li>
          <li className="flex gap-2"><strong>✓ Evita Paradas:</strong> Identificamos problemas antes que eles causem a quebra do aparelho.</li>
          <li className="flex gap-2"><strong>✓ Valorização do Ativo:</strong> Seu patrimônio dura muito mais com o cuidado adequado.</li>
        </ul>
      </ServiceLayout>

      <ServicosPreventivosSection />
      <ProcessoManutencaoSection />
      <FaqPreventivaSection />
      <ServiceCTA 
        title={<>Pronto para garantir a <span className="text-blue-500 italic">vida útil</span> do seu ar condicionado?</>}
        subtitle="Evite gastos inesperados e garanta a saúde do seu ambiente com nosso plano de manutenção."
      />
    </div>
  );
};

export const ManutencaoCorretiva = () => {
  return (
    <div className="space-y-16 pb-20">
      <ServiceLayout 
        tag="Assistência Técnica"
        title="Conserto e Manutenção Corretiva de Ar Condicionado em SP"
        icon={<AlertTriangle />}
      >
        <p>
          Seu ar condicionado parou de funcionar? A New Clima Ar oferece <strong>assistência técnica rápida em São Paulo e no ABC</strong>. Realizamos o conserto de ar condicionado de todas as marcas, com diagnóstico preciso e uso de peças originais para garantir a qualidade do reparo.
        </p>
        <p>
          Nossos técnicos são especialistas em resolver falhas em compressores, vazamentos de gás, problemas em placas eletrônicas Inverter e ruídos excessivos. Atendemos com agilidade para que você não sofra com o calor, seja em sua residência ou empresa.
        </p>
        <h3 className="text-xl font-bold text-primary">Soluções Rápidas e Definitivas</h3>
        <p>
          Não fazemos apenas "remendos". Buscamos a causa raiz do problema para que seu <strong>ar condicionado</strong> volte a operar com 100% de performance. Oferecemos garantia em todos os serviços de manutenção corretiva realizados.
        </p>
        <ul className="space-y-2">
          <li className="flex gap-2"><strong>✓ Diagnóstico Técnico:</strong> Avaliação completa do sistema antes de qualquer intervenção.</li>
          <li className="flex gap-2"><strong>✓ Peças Originais:</strong> Maior durabilidade e segurança para seu aparelho.</li>
          <li className="flex gap-2"><strong>✓ Atendimento em SP e ABC:</strong> Equipes prontas para atender seu chamado com rapidez.</li>
        </ul>
      </ServiceLayout>

      <ServicosCorretivosSection />
      <ProcessoManutencaoSection />
      <FaqCorretivaSection />
      <ServiceCTA 
        title={<>Pronto para <span className="text-blue-500 italic">resolver o problema</span> do seu ar condicionado?</>}
        subtitle="Diagnóstico preciso e reparo rápido com peças originais e garantia de 90 dias."
      />
    </div>
  );
};

export const LimpezaHigienizacao = () => {
  return (
    <div className="space-y-16 pb-20">
      <ServiceLayout 
        tag="Qualidade do Ar"
        title="Limpeza e Higienização de Ar Condicionado em São Paulo"
        icon={<Droplets />}
      >
        <p>
          A <strong>limpeza de ar condicionado</strong> é vital para a saúde de quem frequenta o ambiente. Em cidades como São Paulo e as do ABC, o acúmulo de poeira e poluição nos aparelhos é acelerado, exigindo uma higienização profunda e profissional para eliminar fungos, ácaros e odores.
        </p>
        <p>
          Na New Clima Ar, utilizamos produtos bactericidas de alta eficiência que garantem um ar livre de impurezas. Nossa <strong>higienização de ar condicionado</strong> inclui a limpeza da serpentina, turbina, filtros e bandeja de dreno, prevenindo gotejamentos e melhorando a eficiência térmica do aparelho.
        </p>
        <h3 className="text-xl font-bold text-primary">Por que Higienizar seu Ar Condicionado?</h3>
        <ul className="space-y-2">
          <li className="flex gap-2"><strong>✓ Saúde Respiratória:</strong> Prevenção de rinites, asmas e outras alergias.</li>
          <li className="flex gap-2"><strong>✓ Eficiência Energética:</strong> Aparelhos limpos gelam mais rápido e gastam menos.</li>
          <li className="flex gap-2"><strong>✓ Vida Útil:</strong> Evita a corrosão precoce de componentes internos.</li>
        </ul>
        <div className="bg-ice p-4 rounded-xl border border-primary-light/10 mt-6">
          <p className="text-sm font-bold text-primary">Dica de Especialista:</p>
          <p className="text-sm text-slate-600">Recomendamos a limpeza profunda a cada 6 meses para residências e trimestralmente para comércios e escritórios com alto fluxo de pessoas.</p>
        </div>
      </ServiceLayout>

      <LimpezaDetalhesSection />
      <ProcessoHigienizacaoSection />
      <FaqLimpezaSection />
      <ServiceCTA 
        title={<>Pronto para respirar um <span className="text-blue-500 italic">ar mais puro</span> e saudável?</>}
        subtitle="Higienização profunda com bactericida para eliminar fungos, ácaros e odores."
      />
    </div>
  );
};
