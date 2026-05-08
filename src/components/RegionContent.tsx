import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, CheckCircle2, MessageCircle, ArrowRight, Clock, ShieldCheck } from 'lucide-react';
import { SistemasInstalamosSection, ProcessoSection, ProcessoManutencaoSection, ProcessoHigienizacaoSection, ServiceCTA } from './ServiceDetails';

const RelatedPagesSection = ({ currentRegion, navigate }: { currentRegion: string, navigate: (p: any) => void }) => {
  const allRegions = [
    { id: 'sao-paulo', name: 'São Paulo', desc: 'Instalação e manutenção em toda a capital paulista.' },
    { id: 'santo-andre', name: 'Santo André', desc: 'Atendimento especializado em toda a região de Santo André.' },
    { id: 'sao-bernardo', name: 'São Bernardo do Campo', desc: 'Serviços técnicos de climatização em São Bernardo do Campo.' },
    { id: 'sao-caetano', name: 'São Caetano do Sul', desc: 'Instalação premium e higienização em São Caetano do Sul.' },
    { id: 'diadema', name: 'Diadema', desc: 'Manutenção e instalação de ar condicionado em Diadema.' },
    { id: 'maua', name: 'Mauá', desc: 'Atendimento técnico para residências e empresas em Mauá.' },
  ];

  const services = [
    { id: 'split-multisplit', name: 'Instalação de Split', desc: 'Projetos completos de climatização residencial e comercial.' },
    { id: 'limpeza', name: 'Limpeza e Higienização', desc: 'Higienização profissional para ar puro e equipamento eficiente.' },
    { id: 'manutencao-preventiva', name: 'Manutenção Preventiva', desc: 'Contratos PMOC e manutenção corretiva especializada.' },
  ];

  // Filter out current region and pick some related pages
  const related = [
    ...allRegions.filter(r => r.name !== currentRegion),
    ...services
  ].slice(0, 5);

  return (
    <section className="py-16 bg-slate-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary-light text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Veja Também</span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary">Mais serviços de ar condicionado em São Paulo e ABC</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {related.map((page, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all group">
              <h4 className="text-xl font-bold text-primary mb-3 group-hover:text-primary-light transition-colors">
                {page.id.includes('blog') || page.id.includes('split') || page.id.includes('limpeza') || page.id.includes('manutencao') 
                  ? page.name 
                  : `Instalação em ${page.name}`}
              </h4>
              <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                {page.desc}
              </p>
              <button 
                onClick={() => navigate(page.id)}
                className="text-primary-light font-bold text-sm flex items-center gap-2 group/btn"
              >
                Ver página <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const RegionLayout = ({ 
  region, 
  title, 
  description, 
  neighborhoods, 
  children,
  navigate,
  showInstallation = false,
  showMaintenance = false,
  showCleaning = false
}: { 
  region: string, 
  title: string, 
  description: string, 
  neighborhoods: string[], 
  children: React.ReactNode,
  navigate: (p: any) => void,
  showInstallation?: boolean,
  showMaintenance?: boolean,
  showCleaning?: boolean
}) => (
  <div className="pt-12">
    <Helmet>
      <title>{title} | New Clima Ar Condicionado</title>
      <meta name="description" content={description} />
    </Helmet>
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row gap-12 items-start mb-16">
        <div className="flex-1 space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 bg-ice text-primary-light text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full">
              <MapPin size={14} /> Atendimento Local
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-primary leading-tight">
              {title}
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed max-w-3xl">
              {description}
            </p>
          </div>

          <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-6">
            {children}
          </div>

          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
            <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
              <MapPin size={20} className="text-primary-light" /> Bairros Atendidos em {region}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {neighborhoods.map((bairro, i) => (
                <div key={i} className="bg-white px-4 py-2 rounded-xl text-sm font-semibold text-slate-600 border border-slate-200 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary-light rounded-full" />
                  {bairro}
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="w-full lg:w-80 space-y-6 shrink-0">
          <div className="bg-primary p-8 rounded-3xl text-white shadow-xl shadow-primary/20">
            <h4 className="text-xl font-bold mb-4">Orçamento em {region}</h4>
            <p className="text-sm text-blue-100/70 mb-8 leading-relaxed">
              Nossa equipe técnica está posicionada estrategicamente para atender seu chamado em {region} com rapidez e eficiência.
            </p>
            <div className="space-y-4">
              <a 
                href="https://wa.me/5511963462516" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-success text-white font-bold py-4 rounded-xl transition-all hover:-translate-y-0.5"
              >
                <MessageCircle size={20} />
                WhatsApp (11) 96346-2516
              </a>
              <a 
                href="https://wa.me/5511963462516" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-white/10 text-white font-bold py-4 rounded-xl transition-all hover:bg-white/20"
              >
                <Clock size={20} />
                Ligar Agora
              </a>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <h4 className="font-bold text-primary mb-4 flex items-center gap-2">
              <Clock size={18} className="text-primary-light" /> Horário de Atendimento
            </h4>
            <div className="space-y-2 text-sm text-slate-500 font-medium">
              <div className="flex justify-between"><span>Segunda a Sexta</span> <span>08h - 18h</span></div>
              <div className="flex justify-between"><span>Sábado</span> <span>08h - 13h</span></div>
              <div className="flex justify-between text-primary-light"><span>Emergências</span> <span>WhatsApp 24h</span></div>
            </div>
          </div>
        </aside>
      </div>
    </div>

    <div className="space-y-0">
      {showInstallation && <SistemasInstalamosSection />}
      {showInstallation ? (
        <ProcessoSection />
      ) : showMaintenance ? (
        <ProcessoManutencaoSection />
      ) : showCleaning ? (
        <ProcessoHigienizacaoSection />
      ) : null}
      <ServiceCTA 
        title={<span>Pronto para climatizar seu ambiente em <span className="text-blue-500 italic">{region}</span>?</span>}
        subtitle={`Atendimento técnico especializado em toda a região de ${region} com garantia técnica e obra limpa.`}
      />
      <RelatedPagesSection currentRegion={region} navigate={navigate} />
    </div>
  </div>
);

export const SaoPauloRegion = ({ navigate }: { navigate: (p: any) => void }) => (
  <RegionLayout 
    region="São Paulo"
    title="Instalação e Manutenção de Ar Condicionado em São Paulo (SP)"
    description="Atendimento especializado em ar condicionado em toda a capital paulista. Instalação, limpeza e manutenção com técnicos certificados em SP. Orçamento gratuito."
    neighborhoods={[
      "Moema", "Vila Mariana", "Saúde", "Ipiranga", "Pinheiros", "Vila Madalena", 
      "Perdizes", "Santana", "Tatuapé", "Anália Franco", "Mooca", "Brooklin", 
      "Campo Belo", "Morumbi", "Jardins", "Itaim Bibi", "Lapa", "Pompéia"
    ]}
    showInstallation
    showMaintenance
    navigate={navigate}
  >
    <p>
      A <strong>New Clima Ar Condicionado</strong> é referência em climatização na cidade de <strong>São Paulo</strong>. Desde 2018 atendemos todas as zonas da capital, oferecendo soluções completas para residências, apartamentos e empresas que buscam <strong>ar condicionado em SP</strong> com qualidade técnica e garantia real.
    </p>
    <h2 className="text-2xl font-bold text-primary">Instalação de Ar Condicionado em SP</h2>
    <p>
      Instalar ar condicionado em apartamentos de São Paulo exige conhecimento das normas de fachada e segurança de cada condomínio. Nossa equipe realiza instalações limpas em bairros como <strong>Moema, Jardins, Itaim Bibi, Vila Mariana e Pinheiros</strong>, utilizando varandas técnicas ou suportes reforçados, sempre respeitando o regimento interno. Trabalhamos com infraestrutura embutida para preservar a estética do seu imóvel.
    </p>
    <h2 className="text-2xl font-bold text-primary">Manutenção e PMOC em São Paulo</h2>
    <p>
      Atendemos escritórios e empresas nos principais polos corporativos de SP: <strong>Avenida Paulista, Faria Lima, Berrini e Alphaville</strong>. Oferecemos planos de manutenção preventiva e gestão completa do <strong>PMOC (Plano de Manutenção, Operação e Controle)</strong>, garantindo conformidade com a Lei 13.589/2018 e evitando multas da Vigilância Sanitária de até R$ 1,5 milhão.
    </p>
    <h2 className="text-2xl font-bold text-primary">Perguntas Frequentes — Ar Condicionado em São Paulo</h2>
    <p><strong>Quanto custa instalar ar condicionado em São Paulo?</strong><br />
    Uma instalação residencial padrão em SP começa a partir de R$ 350. O valor varia conforme a complexidade da infraestrutura e a distância entre as unidades. A visita técnica é gratuita e o orçamento é entregue no mesmo dia.</p>
    <p><strong>Vocês atendem em apartamentos com regras de condomínio?</strong><br />
    Sim. Somos especialistas em instalações em prédios e condomínios de SP, com total respeito às normas de fachada, varandas técnicas e regimentos internos.</p>
    <p><strong>Qual o prazo de atendimento em São Paulo?</strong><br />
    Atendemos em até 24 horas para orçamento e agendamos a instalação conforme sua disponibilidade. Para emergências, nosso WhatsApp funciona 24h.</p>
  </RegionLayout>
);

export const SantoAndreRegion = ({ navigate }: { navigate: (p: any) => void }) => (
  <RegionLayout 
    region="Santo André"
    title="Ar Condicionado em Santo André: Instalação e Manutenção"
    description="Instalação e manutenção de ar condicionado em Santo André. Técnicos certificados, orçamento gratuito e atendimento rápido em toda a cidade."
    neighborhoods={[
      "Bairro Jardim", "Campestre", "Vila Assunção", "Vila Gilda", "Vila Bastos", 
      "Utinga", "Santa Teresinha", "Parque das Nações", "Centro", "Vila Pires",
      "Jardim Bela Vista", "Vila Alzira", "Paraíso"
    ]}
    showInstallation
    showCleaning
    navigate={navigate}
  >
    <p>
      A <strong>New Clima Ar Condicionado</strong> atende toda a cidade de <strong>Santo André</strong> com serviços de instalação, manutenção e limpeza de ar condicionado. Com base estratégica no ABC Paulista, nossa equipe chega rápido e entrega o serviço com o padrão técnico que nos tornou referência na região.
    </p>
    <h2 className="text-2xl font-bold text-primary">Instalação de Ar Condicionado em Santo André</h2>
    <p>
      Atendemos residências e comércios em bairros como <strong>Campestre, Vila Assunção, Bairro Jardim, Utinga e Vila Pires</strong>. Seja para instalar um split inverter num quarto ou um sistema multi split num apartamento, nossa equipe dimensiona o equipamento correto, executa a infraestrutura completa e entrega a obra limpa — sem quebradeira desnecessária.
    </p>
    <h2 className="text-2xl font-bold text-primary">Manutenção e Limpeza em Santo André</h2>
    <p>
      A poluição do ABC acelera o acúmulo de sujeira nos filtros e serpentinas. Oferecemos higienização profissional com bactericida para residências, clínicas, escritórios e comércios em Santo André. Também realizamos manutenção preventiva e corretiva de todas as marcas — Daikin, LG, Samsung, Midea e Carrier.
    </p>
    <h2 className="text-2xl font-bold text-primary">Perguntas Frequentes — Ar Condicionado em Santo André</h2>
    <p><strong>Quanto custa instalar ar condicionado em Santo André?</strong><br />
    O valor depende do modelo e da complexidade da instalação. Uma instalação residencial padrão começa a partir de R$ 350. Oferecemos visita técnica gratuita com orçamento no mesmo dia.</p>
    <p><strong>Vocês atendem no Centro de Santo André?</strong><br />
    Sim, atendemos toda a cidade de Santo André incluindo Centro, Campestre, Vila Assunção e todos os bairros.</p>
    <p><strong>Fazem manutenção de ar condicionado em Santo André?</strong><br />
    Sim. Realizamos manutenção preventiva, corretiva e limpeza profunda de todas as marcas em Santo André e toda a região do ABC.</p>
  </RegionLayout>
);

export const SaoBernardoRegion = ({ navigate }: { navigate: (p: any) => void }) => (
  <RegionLayout 
    region="São Bernardo do Campo"
    title="Ar Condicionado em São Bernardo do Campo (SBC)"
    description="Instalação e manutenção de ar condicionado em São Bernardo do Campo. Técnicos especializados em sistemas residenciais, comerciais e industriais em SBC."
    neighborhoods={[
      "Rudge Ramos", "Jardim do Mar", "Assunção", "Nova Petrópolis", "Baeta Neves", 
      "Centro", "Planalto", "Demarchi", "Alves Dias", "Anchieta",
      "Paulicéia", "Cooperativa", "Vila Euclides"
    ]}
    showMaintenance
    navigate={navigate}
  >
    <p>
      A <strong>New Clima Ar Condicionado</strong> atende toda a cidade de <strong>São Bernardo do Campo</strong> com instalação, manutenção e limpeza de ar condicionado. Em uma das maiores cidades industriais do Brasil, a climatização profissional é essencial tanto para o conforto residencial quanto para a produtividade nos ambientes corporativos.
    </p>
    <h2 className="text-2xl font-bold text-primary">Instalação de Ar Condicionado em SBC</h2>
    <p>
      Atendemos residências e empresas em bairros como <strong>Rudge Ramos, Assunção, Nova Petrópolis, Baeta Neves e Anchieta</strong>. Instalamos sistemas Split, Multi Split, Cassete e VRF com infraestrutura completa e acabamento impecável. Nossa equipe é treinada para atender apartamentos, casas, escritórios e galpões industriais em São Bernardo.
    </p>
    <h2 className="text-2xl font-bold text-primary">Manutenção Industrial e Comercial em SBC</h2>
    <p>
      São Bernardo do Campo concentra grandes polos industriais e corporativos que dependem de sistemas de climatização funcionando 100% do tempo. Oferecemos contratos de <strong>manutenção preventiva e PMOC</strong> para empresas de todos os portes, com relatórios técnicos, cronogramas e gestão completa da documentação exigida pela Lei 13.589/2018.
    </p>
    <h2 className="text-2xl font-bold text-primary">Perguntas Frequentes — Ar Condicionado em São Bernardo</h2>
    <p><strong>Vocês atendem condomínios em São Bernardo do Campo?</strong><br />
    Sim. Atendemos condomínios residenciais e comerciais em toda a cidade, com respeito às normas de fachada e varandas técnicas.</p>
    <p><strong>Fazem PMOC para empresas em SBC?</strong><br />
    Sim. Elaboramos e executamos o PMOC completo para empresas em São Bernardo do Campo, garantindo conformidade com a Vigilância Sanitária.</p>
    <p><strong>Qual o prazo para atendimento em São Bernardo?</strong><br />
    Atendemos em até 24 horas para orçamento. Para emergências, nosso WhatsApp funciona 24h.</p>
  </RegionLayout>
);

export const SaoCaetanoRegion = ({ navigate }: { navigate: (p: any) => void }) => (
  <RegionLayout 
    region="São Caetano do Sul"
    title="Ar Condicionado em São Caetano do Sul: Instalação Premium"
    description="Instalação e manutenção de ar condicionado em São Caetano do Sul. Serviço premium para residências, clínicas e empresas. Orçamento gratuito."
    neighborhoods={[
      "Santa Paula", "Barcelona", "Centro", "Santo Antônio", "Olímpico", 
      "Boa Vista", "Cerâmica", "Fundação", "Nova Gerty", "Jardim São Caetano"
    ]}
    showInstallation
    showCleaning
    navigate={navigate}
  >
    <p>
      A <strong>New Clima Ar Condicionado</strong> atende toda a cidade de <strong>São Caetano do Sul</strong> com instalação e manutenção de ar condicionado. Reconhecida pelo alto padrão de vida, São Caetano exige um serviço diferenciado — e é exatamente isso que entregamos: técnicos certificados, obra limpa e garantia por escrito em todos os serviços.
    </p>
    <h2 className="text-2xl font-bold text-primary">Instalação de Ar Condicionado em São Caetano do Sul</h2>
    <p>
      Atendemos residências e comércios em bairros como <strong>Santa Paula, Barcelona, Olímpico, Boa Vista e Centro</strong>. Instalamos desde splits residenciais Inverter até sistemas Cassete e VRF para espaços comerciais e corporativos. Nossa instalação é silenciosa, estética e totalmente dentro das normas de condomínio.
    </p>
    <h2 className="text-2xl font-bold text-primary">Especialistas em Clínicas e Consultórios em São Caetano</h2>
    <p>
      São Caetano do Sul concentra muitos consultórios médicos, clínicas e espaços de saúde que exigem ar-condicionado funcionando com perfeição. Realizamos higienização química profunda que elimina 99,9% de fungos e bactérias, garantindo um ambiente seguro para pacientes e colaboradores. Também emitimos laudo técnico para fins de vigilância sanitária.
    </p>
    <h2 className="text-2xl font-bold text-primary">Perguntas Frequentes — Ar Condicionado em São Caetano do Sul</h2>
    <p><strong>Quanto custa instalar ar condicionado em São Caetano do Sul?</strong><br />
    Uma instalação residencial padrão começa a partir de R$ 350. A visita técnica é gratuita e o orçamento é entregue no mesmo dia sem compromisso.</p>
    <p><strong>Vocês fazem higienização de ar condicionado em São Caetano?</strong><br />
    Sim. Realizamos higienização completa com bactericida em residências, clínicas e escritórios em toda a cidade de São Caetano do Sul.</p>
    <p><strong>Atendem apartamentos em São Caetano?</strong><br />
    Sim, somos especialistas em instalações em condomínios, com total respeito às normas de fachada e regimento interno.</p>
  </RegionLayout>
);

export const DiademaMauaRegion = ({ regionName, navigate }: { regionName: string, navigate: (p: any) => void }) => (
  <RegionLayout 
    region={regionName}
    title={`Ar Condicionado em ${regionName}: Instalação e Manutenção`}
    description={`Instalação e manutenção de ar condicionado em ${regionName}. Técnicos certificados, orçamento gratuito e atendimento rápido para residências e empresas.`}
    neighborhoods={regionName === 'Diadema' ? [
      "Centro", "Serraria", "Taboão", "Piraporinha", "Canhema", "Conceição",
      "Eldorado", "Campanário", "Inamar", "Vila Nogueira"
    ] : [
      "Centro", "Jardim Zaíra", "Parque São Vicente", "Vila Assis", "Guapituba",
      "Vila Vitória", "Jardim Oratório", "Capuava", "Vila Cardoso"
    ]}
    showInstallation
    showMaintenance
    navigate={navigate}
  >
    <p>
      A <strong>New Clima Ar Condicionado</strong> atende residências e empresas em <strong>{regionName}</strong> com instalação, manutenção e limpeza de ar condicionado. Com base operacional no ABC Paulista, nossa equipe chega rápido e entrega o serviço com garantia técnica de 1 ano.
    </p>
    <h2 className="text-2xl font-bold text-primary">Instalação de Ar Condicionado em {regionName}</h2>
    <p>
      Instalamos sistemas Split, Multi Split e Cassete em {regionName} com infraestrutura completa, acabamento impecável e obra limpa. Atendemos apartamentos, casas, escritórios e comércios — sempre com cálculo preciso de BTUs para garantir eficiência energética e conforto real.
    </p>
    <h2 className="text-2xl font-bold text-primary">Manutenção Preventiva e Corretiva em {regionName}</h2>
    <p>
      Oferecemos manutenção preventiva semestral para residências e contratos de PMOC para empresas em {regionName}. Nossa manutenção inclui limpeza de filtros, verificação de gás, check-up elétrico e relatório técnico completo. Para consertos e emergências, atendemos pelo WhatsApp 24h.
    </p>
    <h2 className="text-2xl font-bold text-primary">Perguntas Frequentes — Ar Condicionado em {regionName}</h2>
    <p><strong>Quanto custa instalar ar condicionado em {regionName}?</strong><br />
    Uma instalação residencial padrão começa a partir de R$ 350. A visita técnica é gratuita e o orçamento é entregue no mesmo dia.</p>
    <p><strong>Vocês fazem manutenção de ar condicionado em {regionName}?</strong><br />
    Sim. Realizamos manutenção preventiva, corretiva e limpeza profissional de todas as marcas em {regionName} e toda a região do ABC.</p>
    <p><strong>Qual o prazo de atendimento em {regionName}?</strong><br />
    Atendemos em até 24 horas para orçamento. Para emergências nosso WhatsApp funciona 24h.</p>
  </RegionLayout>
);
