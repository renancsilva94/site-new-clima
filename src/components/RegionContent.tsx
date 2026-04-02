import React from 'react';
import { MapPin, CheckCircle2, MessageCircle, ArrowRight, Clock, ShieldCheck } from 'lucide-react';

const RegionLayout = ({ region, title, description, neighborhoods, children }: { region: string, title: string, description: string, neighborhoods: string[], children: React.ReactNode }) => (
  <div className="py-12">
    <div className="flex flex-col lg:flex-row gap-12 items-start">
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
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-success text-white font-bold py-4 rounded-xl transition-all hover:-translate-y-0.5"
            >
              <MessageCircle size={20} />
              WhatsApp {region}
            </a>
            <a 
              href="tel:+5511963462516" 
              className="flex items-center justify-center gap-2 bg-white/10 text-white font-bold py-4 rounded-xl transition-all hover:bg-white/20"
            >
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
);

export const SaoPauloRegion = () => (
  <RegionLayout 
    region="São Paulo"
    title="Ar Condicionado em São Paulo: Instalação e Manutenção Especializada"
    description="Atendimento premium em toda a capital paulista, com foco em bairros de alto padrão e centros corporativos."
    neighborhoods={[
      "Moema", "Vila Mariana", "Saúde", "Ipiranga", "Pinheiros", "Vila Madalena", 
      "Perdizes", "Santana", "Tatuapé", "Anália Franco", "Mooca", "Brooklin", 
      "Campo Belo", "Morumbi", "Jardins", "Itaim Bibi", "Lapa", "Pompéia"
    ]}
  >
    <p>
      A <strong>New Clima Ar Condicionado</strong> é referência em climatização na cidade de <strong>São Paulo</strong>. Com o clima cada vez mais imprevisível da capital, ter um sistema de ar condicionado eficiente e bem mantido não é apenas uma questão de conforto, mas de produtividade e saúde.
    </p>
    <h2 className="text-2xl font-bold text-primary">Especialistas em Apartamentos e Condomínios</h2>
    <p>
      Sabemos que instalar ar condicionado em apartamentos de São Paulo exige o cumprimento rigoroso de normas de fachada e segurança. Nossa equipe é treinada para realizar instalações limpas, utilizando varandas técnicas ou suportes reforçados, sempre respeitando o regimento interno do seu condomínio.
    </p>
    <h2 className="text-2xl font-bold text-primary">Manutenção em Centros Corporativos</h2>
    <p>
      Atendemos escritórios e empresas em polos como a <strong>Avenida Paulista, Faria Lima e Berrini</strong>. Oferecemos planos de manutenção preventiva (PMOC) que garantem a continuidade da sua operação e o bem-estar dos seus colaboradores, evitando paradas inesperadas no sistema de climatização.
    </p>
  </RegionLayout>
);

export const SantoAndreRegion = () => (
  <RegionLayout 
    region="Santo André"
    title="Instalação e Manutenção de Ar Condicionado em Santo André"
    description="Serviços técnicos de climatização com rapidez e garantia em todos os bairros de Santo André."
    neighborhoods={[
      "Bairro Jardim", "Campestre", "Vila Assunção", "Vila Gilda", "Vila Bastos", 
      "Utinga", "Santa Teresinha", "Parque das Nações", "Centro", "Jardim"
    ]}
  >
    <p>
      Se você busca <strong>ar condicionado em Santo André</strong>, a New Clima Ar é a sua melhor escolha. Atendemos desde residências no Bairro Jardim até grandes comércios no Centro, sempre com o mesmo padrão de excelência e transparência.
    </p>
    <h2 className="text-2xl font-bold text-primary">Atendimento Rápido no ABC</h2>
    <p>
      Nossa base operacional permite um deslocamento ágil para toda a cidade de Santo André. Seja para uma instalação de um Split Inverter ou para uma limpeza profunda com bactericida, nossa equipe chega no horário combinado e realiza o serviço com o máximo de organização e limpeza.
    </p>
  </RegionLayout>
);

export const SaoBernardoRegion = () => (
  <RegionLayout 
    region="São Bernardo do Campo"
    title="Ar Condicionado em São Bernardo do Campo: Soluções Completas"
    description="Instalação, conserto e higienização de ar condicionado em SBC com técnicos certificados."
    neighborhoods={[
      "Rudge Ramos", "Jardim do Mar", "Assunção", "Nova Petrópolis", "Baeta Neves", 
      "Centro", "Planalto", "Demarchi", "Alves Dias", "Anchieta"
    ]}
  >
    <p>
      Atendemos toda a cidade de <strong>São Bernardo do Campo</strong>, oferecendo soluções de climatização para residências, indústrias e comércios. Em uma cidade com forte presença industrial, a manutenção preventiva dos filtros e serpentinas é essencial para combater a poluição e garantir um ar puro.
    </p>
    <h2 className="text-2xl font-bold text-primary">Manutenção Industrial e Comercial em SBC</h2>
    <p>
      Com vasta experiência em sistemas de grande porte, atendemos empresas e galpões industriais em São Bernardo, realizando desde o projeto de infraestrutura até a manutenção corretiva de compressores e placas eletrônicas de alta potência.
    </p>
  </RegionLayout>
);

export const SaoCaetanoRegion = () => (
  <RegionLayout 
    region="São Caetano do Sul"
    title="Climatização de Alto Padrão em São Caetano do Sul"
    description="Serviços premium de ar condicionado para o público mais exigente de São Caetano."
    neighborhoods={[
      "Santa Paula", "Barcelona", "Centro", "Santo Antônio", "Olímpico", 
      "Boa Vista", "Cerâmica", "Mauá", "Jardim São Caetano"
    ]}
  >
    <p>
      Em <strong>São Caetano do Sul</strong>, a New Clima Ar Condicionado entrega um serviço que acompanha o alto padrão de vida da cidade. Focamos em instalações estéticas, silenciosas e extremamente eficientes para residências e clínicas médicas.
    </p>
    <h2 className="text-2xl font-bold text-primary">Especialistas em Clínicas e Consultórios</h2>
    <p>
      Muitos profissionais de saúde em São Caetano confiam na New Clima para a manutenção de seus consultórios. Realizamos a higienização química profunda que elimina 99,9% de germes e bactérias, garantindo um ambiente seguro para seus pacientes.
    </p>
  </RegionLayout>
);

export const DiademaMauaRegion = ({ regionName }: { regionName: string }) => (
  <RegionLayout 
    region={regionName}
    title={`Ar Condicionado em ${regionName}: Instalação e Limpeza`}
    description={`Atendimento técnico especializado em ${regionName} para residências e empresas.`}
    neighborhoods={regionName === 'Diadema' ? [
      "Centro", "Serraria", "Taboão", "Piraporinha", "Canhema", "Conceição"
    ] : [
      "Centro", "Jardim Zaíra", "Parque São Vicente", "Vila Assis", "Guapituba"
    ]}
  >
    <p>
      Moradores e empresários de <strong>{regionName}</strong> contam com o suporte técnico da New Clima Ar Condicionado para garantir o conforto térmico o ano todo. Oferecemos orçamentos transparentes e execução rápida para instalações de Split e manutenção de todas as marcas.
    </p>
  </RegionLayout>
);
