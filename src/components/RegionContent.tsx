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
    description="Atendimento especializado em ar condicionado em toda a capital paulista. Instalação, limpeza e manutenção com técnicos certificados em SP."
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
      A <strong>New Clima Ar Condicionado</strong> é referência em climatização na cidade de <strong>São Paulo</strong>. Atendemos todas as zonas da capital, oferecendo soluções completas para residências, apartamentos e empresas que buscam <strong>ar condicionado em SP</strong>.
    </p>
    <h2 className="text-2xl font-bold text-primary">Instalação de Ar Condicionado em SP</h2>
    <p>
      Sabemos que instalar ar condicionado em apartamentos de São Paulo exige o cumprimento rigoroso de normas de fachada e segurança. Nossa equipe realiza instalações limpas, utilizando varandas técnicas ou suportes reforçados, sempre respeitando o regimento interno do seu condomínio em bairros como Moema, Jardins e Itaim Bibi.
    </p>
    <h2 className="text-2xl font-bold text-primary">Manutenção e PMOC em São Paulo</h2>
    <p>
      Atendemos escritórios e empresas em polos como a <strong>Avenida Paulista, Faria Lima e Berrini</strong>. Oferecemos planos de manutenção preventiva (PMOC) que garantem a conformidade com a lei e o bem-estar dos seus colaboradores, evitando paradas inesperadas no sistema de climatização.
    </p>
  </RegionLayout>
);

export const SantoAndreRegion = ({ navigate }: { navigate: (p: any) => void }) => (
  <RegionLayout 
    region="Santo André"
    title="Ar Condicionado em Santo André: Instalação e Limpeza"
    description="Serviços técnicos de ar condicionado em Santo André. Atendimento rápido para instalação, manutenção e higienização no ABC."
    neighborhoods={[
      "Bairro Jardim", "Campestre", "Vila Assunção", "Vila Gilda", "Vila Bastos", 
      "Utinga", "Santa Teresinha", "Parque das Nações", "Centro", "Jardim"
    ]}
    showInstallation
    showCleaning
    navigate={navigate}
  >
    <p>
      Se você busca <strong>ar condicionado em Santo André</strong>, a New Clima Ar é a sua melhor escolha. Atendemos desde residências no Bairro Jardim até grandes comércios no Centro, sempre com o mesmo padrão de excelência e transparência que nos tornou referência no ABC.
    </p>
    <h2 className="text-2xl font-bold text-primary">Assistência Técnica em Santo André</h2>
    <p>
      Nossa base operacional permite um deslocamento ágil para toda a cidade de Santo André. Seja para uma instalação de um Split Inverter ou para uma limpeza profunda com bactericida, nossa equipe chega no horário combinado e realiza o serviço com o máximo de organização e limpeza.
    </p>
  </RegionLayout>
);

export const SaoBernardoRegion = ({ navigate }: { navigate: (p: any) => void }) => (
  <RegionLayout 
    region="São Bernardo do Campo"
    title="Ar Condicionado em São Bernardo do Campo (SBC)"
    description="Instalação e manutenção de ar condicionado em São Bernardo do Campo. Técnicos especializados em sistemas residenciais e industriais em SBC."
    neighborhoods={[
      "Rudge Ramos", "Jardim do Mar", "Assunção", "Nova Petrópolis", "Baeta Neves", 
      "Centro", "Planalto", "Demarchi", "Alves Dias", "Anchieta"
    ]}
    showMaintenance
    navigate={navigate}
  >
    <p>
      Atendemos toda a cidade de <strong>São Bernardo do Campo</strong>, oferecendo soluções de climatização para residências, indústrias e comércios. Em uma cidade com forte presença industrial, a <strong>manutenção de ar condicionado em SBC</strong> é essencial para garantir a saúde e economia.
    </p>
    <h2 className="text-2xl font-bold text-primary">Manutenção Industrial e Comercial em SBC</h2>
    <p>
      Com vasta experiência em sistemas de grande porte, atendemos empresas e galpões industriais em São Bernardo, realizando desde o projeto de infraestrutura até a manutenção corretiva de compressores e placas eletrônicas de alta potência.
    </p>
  </RegionLayout>
);

export const SaoCaetanoRegion = ({ navigate }: { navigate: (p: any) => void }) => (
  <RegionLayout 
    region="São Caetano do Sul"
    title="Ar Condicionado em São Caetano do Sul: Instalação Premium"
    description="Serviços de ar condicionado em São Caetano do Sul. Instalação silenciosa e higienização profunda para residências e clínicas."
    neighborhoods={[
      "Santa Paula", "Barcelona", "Centro", "Santo Antônio", "Olímpico", 
      "Boa Vista", "Cerâmica", "Mauá", "Jardim São Caetano"
    ]}
    showInstallation
    showCleaning
    navigate={navigate}
  >
    <p>
      Em <strong>São Caetano do Sul</strong>, a New Clima Ar Condicionado entrega um serviço que acompanha o alto padrão de vida da cidade. Focamos em <strong>instalação de ar condicionado</strong> estética, silenciosa e extremamente eficiente para residências e clínicas médicas.
    </p>
    <h2 className="text-2xl font-bold text-primary">Especialistas em Clínicas em São Caetano</h2>
    <p>
      Muitos profissionais de saúde em São Caetano confiam na New Clima para a manutenção de seus consultórios. Realizamos a higienização química profunda que elimina 99,9% de germes e bactérias, garantindo um ambiente seguro para seus pacientes.
    </p>
  </RegionLayout>
);

export const DiademaMauaRegion = ({ regionName, navigate }: { regionName: string, navigate: (p: any) => void }) => (
  <RegionLayout 
    region={regionName}
    title={`Ar Condicionado em ${regionName}: Instalação e Limpeza`}
    description={`Serviços técnicos de ar condicionado em ${regionName}. Atendimento especializado para instalação e manutenção residencial e comercial.`}
    neighborhoods={regionName === 'Diadema' ? [
      "Centro", "Serraria", "Taboão", "Piraporinha", "Canhema", "Conceição"
    ] : [
      "Centro", "Jardim Zaíra", "Parque São Vicente", "Vila Assis", "Guapituba"
    ]}
    showInstallation
    showMaintenance
    navigate={navigate}
  >
    <p>
      Moradores e empresários de <strong>{regionName}</strong> contam com o suporte técnico da New Clima Ar Condicionado para garantir o conforto térmico o ano todo. Oferecemos orçamentos transparentes e execução rápida para <strong>instalação de ar condicionado em {regionName}</strong> e manutenção de todas as marcas.
    </p>
  </RegionLayout>
);
