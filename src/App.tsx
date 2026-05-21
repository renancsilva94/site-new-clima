'use client'

import React from 'react';
import { 
  Phone, 
  Menu, 
  X, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Wind,
  ShieldCheck,
  Zap,
  Thermometer,
  Settings,
  Droplets,
  Star,
  AlertTriangle,
  HelpCircle,
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  MessageSquare,
  Ruler,
  HardHat,
  Paintbrush,
  HeartHandshake,
  ExternalLink
} from 'lucide-react';


import { useRouter } from 'next/navigation';

import { 
  SplitMultiSplit, 
  SistemasComerciais, 
  VRFMiniVRF, 
  ManutencaoPreventiva, 
  ManutencaoCorretiva, 
  LimpezaHigienizacao 
} from './components/ServiceDetails';
import { 
  BlogInverter, 
  BlogApartamento, 
  BlogBTUs, 
  BlogPMOC,
  BlogRoundCassette,
  BlogObraLimpa,
  BlogQuarto,
  BlogConvencionalInverter,
  BlogEmpresas,
  BlogPMOCObrigatorio,
  BlogMultaPMOC,
  BlogPMOCCondominio,
  BlogCustoPMOC,
  BlogCustoInstalacao,
  BlogQualAC,
  BlogSplitMultiSplitApartamento,
  BlogManutencaoConsequencias,
  BlogSaude,
  BlogDormir,
  BlogConsumo,
  BlogQuantoGasta,
  BlogMauCheiro,
  BlogDesligaSozinho,
  BlogVidaUtil,
  BlogTemperatura,
  BlogFuncaoDry,
  BlogGas
} from './components/BlogContent';
import SchemaOrg from './components/SchemaOrg';
import { 
  SaoPauloRegion, 
  SantoAndreRegion, 
  SaoBernardoRegion, 
  SaoCaetanoRegion, 
  DiademaMauaRegion 
} from './components/RegionContent';

// --- Types ---
type PageId = string;

// --- Components ---

const WhatsAppIcon = ({ size = 20 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.445 0 .062 5.383.06 11.983c0 2.108.544 4.165 1.582 6.022L0 24l6.146-1.612a11.827 11.827 0 005.904 1.599h.005c6.605 0 11.988-5.383 11.99-11.984a11.846 11.846 0 00-3.515-8.417z" />
  </svg>
);

const WhatsAppButton = ({ className, text = "Solicitar Orçamento" }: { className?: string, text?: string }) => (
  <a 
    href="https://wa.me/5511963462516" 
    rel="noopener noreferrer"
    className={`inline-flex items-center justify-center gap-2 bg-success hover:bg-success/90 text-white font-bold py-3 px-6 rounded-xl transition-all hover:-translate-y-0.5 shadow-lg hover:shadow-success/40 ${className}`}
  >
    <WhatsAppIcon size={20} />
    {text}
  </a>
);

const SectionHeading = ({ tag, title, subtitle, centered = false, asH1 = false }: { tag?: string, title: string, subtitle?: string, centered?: boolean, asH1?: boolean }) => (
  <div className={`mb-14 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'}`}>
    {tag && (
      <span className="inline-block bg-ice text-primary-light text-[11px] font-bold tracking-[0.15em] uppercase px-4 py-1.5 rounded-full mb-5">
        {tag}
      </span>
    )}
    {asH1 ? (
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary mb-5 leading-tight tracking-tight">{title}</h1>
    ) : (
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary mb-5 leading-tight tracking-tight">{title}</h2>
    )}
    {subtitle && (
      <p className="text-lg md:text-xl text-slate-500 leading-relaxed font-normal">
        {subtitle}
      </p>
    )}
  </div>
);

export default function App() {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navigate = (page: string) => {
    const routes: Record<string, string> = {
      'home': '/',
      'split-multisplit': '/instalacao-ar-condicionado-split-sao-paulo',
      'sistemas-comerciais': '/ar-condicionado-comercial-sao-paulo',
      'vrf-mini-vrf': '/instalacao-vrf-mini-vrf-sao-paulo',
      'manutencao-preventiva': '/manutencao-preventiva-ar-condicionado-sp',
      'manutencao-corretiva': '/manutencao-corretiva-ar-condicionado-sp',
      'limpeza': '/limpeza-higienizacao-ar-condicionado-sp',
      'blog': '/blog',
      'sobre': '/sobre',
      'contato': '/contato',
      'mapa-site': '/mapa-site',
      'bairro-moema': '/instalacao-ar-condicionado-moema',
      'bairro-vila-mariana': '/instalacao-ar-condicionado-vila-mariana',
      'bairro-pinheiros': '/instalacao-ar-condicionado-pinheiros',
      'bairro-itaim-bibi': '/instalacao-ar-condicionado-itaim-bibi',
      'bairro-jardins': '/instalacao-ar-condicionado-jardins',
      'bairro-tatuape': '/instalacao-ar-condicionado-tatuape',
      'bairro-santana': '/instalacao-ar-condicionado-santana',
      'bairro-brooklin': '/instalacao-ar-condicionado-brooklin',
      'bairro-perdizes': '/instalacao-ar-condicionado-perdizes',
      'bairro-morumbi': '/instalacao-ar-condicionado-morumbi',
      'bairro-mooca': '/instalacao-ar-condicionado-mooca',
      'bairro-analia-franco': '/instalacao-ar-condicionado-analia-franco',
      'bairro-vila-madalena': '/instalacao-ar-condicionado-vila-madalena',
      'bairro-campo-belo': '/instalacao-ar-condicionado-campo-belo',
      'bairro-saude': '/instalacao-ar-condicionado-saude',
      'bairro-higienopolis': '/instalacao-ar-condicionado-higienopolis',
      'bairro-lapa': '/instalacao-ar-condicionado-lapa',
      'bairro-santo-amaro': '/instalacao-ar-condicionado-santo-amaro',
      'bairro-tucuruvi': '/instalacao-ar-condicionado-tucuruvi',
      'bairro-ipiranga': '/instalacao-ar-condicionado-ipiranga',
      'bairro-vila-prudente': '/instalacao-ar-condicionado-vila-prudente',
      'bairro-jabaquara': '/instalacao-ar-condicionado-jabaquara',
      'bairro-campo-grande': '/instalacao-ar-condicionado-campo-grande',
      'bairro-penha': '/instalacao-ar-condicionado-penha',
      'bairro-cursino': '/instalacao-ar-condicionado-cursino',
      'bairro-agua-rasa': '/instalacao-ar-condicionado-agua-rasa',
      'bairro-bela-vista': '/instalacao-ar-condicionado-bela-vista',
      'bairro-butanta': '/instalacao-ar-condicionado-butanta',
      'bairro-vila-olimpia': '/instalacao-ar-condicionado-vila-olimpia',
      'bairro-pompeia': '/instalacao-ar-condicionado-pompeia',
      'bairro-paraiso': '/instalacao-ar-condicionado-paraiso',
      'bairro-aclimacao': '/instalacao-ar-condicionado-aclimacao',
      'bairro-mirandopolis': '/instalacao-ar-condicionado-mirandopolis',
      'bairro-planalto-paulista': '/instalacao-ar-condicionado-planalto-paulista',
      'bairro-vila-clementino': '/instalacao-ar-condicionado-vila-clementino',
      'bairro-chacara-klabin': '/instalacao-ar-condicionado-chacara-klabin',
      'bairro-cambuci': '/instalacao-ar-condicionado-cambuci',
      'bairro-liberdade': '/instalacao-ar-condicionado-liberdade',
      'segmento-clinica': '/ar-condicionado-clinica-medica-sp',
      'segmento-escritorio': '/ar-condicionado-escritorio-sao-paulo',
      'segmento-condominio': '/ar-condicionado-condominio-sp',
      'segmento-restaurante': '/ar-condicionado-restaurante-sp',
      'segmento-hotel': '/ar-condicionado-hotel-sp',
      'segmento-pousada': '/ar-condicionado-pousada-sp',
      'segmento-academia': '/ar-condicionado-academia-sp',
      'segmento-escola': '/ar-condicionado-escola-sp',
      'sem-instalacao': '/instalacao-ar-condicionado-sp',
      'sem-manutencao': '/manutencao-ar-condicionado-sp',
      'sem-tecnico': '/tecnico-ar-condicionado-sp',
      'sem-conserto': '/conserto-ar-condicionado-sp',
      'sem-empresa': '/empresa-ar-condicionado-sp',
      'sem-assistencia': '/assistencia-tecnica-ar-condicionado-sp',
      'res-apartamento': '/ar-condicionado-apartamento-sp',
      'res-residencial': '/ar-condicionado-residencial-sp',
      'res-casa': '/ar-condicionado-casa-sp',
      'res-condominio-inst': '/instalacao-ar-condicionado-condominio-sp',
      'sao-paulo': '/ar-condicionado-sao-paulo',
      'santo-andre': '/ar-condicionado-santo-andre',
      'sao-bernardo': '/ar-condicionado-sao-bernardo-do-campo',
      'sao-caetano': '/ar-condicionado-sao-caetano-do-sul',
      'diadema': '/ar-condicionado-diadema',
      'maua': '/ar-condicionado-maua',
      'blog-inverter': '/blog/ar-condicionado-inverter',
      'blog-apartamento': '/blog/instalacao-ar-condicionado-apartamento-sp',
      'blog-btus': '/blog/como-calcular-btus-ar-condicionado',
      'blog-pmoc': '/blog/pmoc-obrigatorio-sao-paulo',
      'blog-round-cassette': '/blog/lg-round-cassette',
      'blog-obra-limpa': '/blog/instalacao-ar-condicionado-obra-limpa',
      'blog-quarto': '/blog/ar-condicionado-quarto',
      'blog-convencional-inverter': '/blog/split-convencional-vs-inverter',
      'blog-empresas': '/blog/ar-condicionado-empresas-vrf',
      'blog-pmoc-obrigatorio': '/blog/pmoc-obrigatorio-sao-paulo-lei',
      'blog-multa-pmoc': '/blog/multa-pmoc-sao-paulo',
      'blog-pmoc-condominio': '/blog/pmoc-condominios-sao-paulo',
      'blog-custo-pmoc': '/blog/quanto-custa-pmoc-sao-paulo',
      'blog-custo-instalacao': '/blog/quanto-custa-instalar-ar-condicionado-sp',
      'blog-qual-ac': '/blog/qual-ar-condicionado-comprar-2026',
      'blog-split-multi-split': '/blog/split-vs-multi-split-apartamento-sp',
      'blog-manutencao-consequencias': '/blog/manutencao-ar-condicionado-consequencias',
      'blog-saude': '/blog/ar-condicionado-faz-mal-saude',
      'blog-dormir': '/blog/dormir-com-ar-condicionado-faz-mal',
      'blog-consumo': '/blog/ar-condicionado-gasta-mais-dia-ou-noite',
      'blog-quanto-gasta': '/blog/quanto-gasta-ar-condicionado-inverter',
      'blog-mau-cheiro': '/blog/mau-cheiro-ar-condicionado',
      'blog-desliga-sozinho': '/blog/ar-condicionado-desliga-sozinho',
      'blog-vida-util': '/blog/vida-util-ar-condicionado',
      'blog-temperatura': '/blog/temperatura-ideal-ar-condicionado',
      'blog-funcao-dry': '/blog/funcao-dry-ar-condicionado',
      'blog-gas': '/blog/gas-r32-r410a-ar-condicionado',
      'manutencao-santo-andre': '/manutencao-ar-condicionado-santo-andre',
      'limpeza-santo-andre': '/limpeza-ar-condicionado-santo-andre',
      'pmoc-santo-andre': '/pmoc-santo-andre',
      'manutencao-sao-bernardo': '/manutencao-ar-condicionado-sao-bernardo-do-campo',
      'limpeza-sao-bernardo': '/limpeza-ar-condicionado-sao-bernardo-do-campo',
      'pmoc-sao-bernardo': '/pmoc-sao-bernardo-do-campo',
      'manutencao-sao-caetano': '/manutencao-ar-condicionado-sao-caetano-do-sul',
      'limpeza-sao-caetano': '/limpeza-ar-condicionado-sao-caetano-do-sul',
      'pmoc-sao-caetano': '/pmoc-sao-caetano-do-sul',
      'manutencao-diadema': '/manutencao-ar-condicionado-diadema',
      'limpeza-diadema': '/limpeza-ar-condicionado-diadema',
      'pmoc-diadema': '/pmoc-diadema',
      'manutencao-maua': '/manutencao-ar-condicionado-maua',
      'limpeza-maua': '/limpeza-ar-condicionado-maua',
      'pmoc-maua': '/pmoc-maua',
      'seg-farmacia': '/ar-condicionado-farmacia-sao-paulo',
      'seg-odonto': '/ar-condicionado-consultorio-odontologico-sao-paulo',
      'seg-salao': '/ar-condicionado-salao-beleza-sao-paulo',
      'seg-supermercado': '/ar-condicionado-supermercado-sao-paulo',
      'seg-datacenter': '/ar-condicionado-data-center-sao-paulo',
      'seg-coworking': '/ar-condicionado-coworking-sao-paulo',
      'seg-igreja': '/ar-condicionado-igreja-sao-paulo',
      'seg-laboratorio': '/ar-condicionado-laboratorio-sao-paulo',
      'seg-petshop': '/ar-condicionado-pet-shop-sao-paulo',
      'seg-estetica': '/ar-condicionado-clinica-estetica-sao-paulo',
      'seg-loja': '/ar-condicionado-loja-varejo-sao-paulo',
      'seg-banco': '/ar-condicionado-banco-financeira-sao-paulo',
      'seg-padaria': '/ar-condicionado-padaria-sao-paulo',
      'seg-concessionaria': '/ar-condicionado-concessionaria-sao-paulo',
      'seg-advocacia': '/ar-condicionado-escritorio-advocacia-sao-paulo',
      'seg-psicologia': '/ar-condicionado-consultorio-psicologia-sao-paulo',
      'seg-fisioterapia': '/ar-condicionado-clinica-fisioterapia-sao-paulo',
      'seg-creche': '/ar-condicionado-creche-sao-paulo',
      'seg-bar': '/ar-condicionado-bar-pub-sao-paulo',
      'servicos': '/servicos',
      'inst-split': '/instalacao-ar-condicionado-split-sp',
      'inst-cassete': '/instalacao-ar-condicionado-cassete-sp',
      'inst-piso-teto': '/instalacao-ar-condicionado-piso-teto-sp',
      'inst-multi-split': '/instalacao-multi-split-sp',
      'inst-inverter': '/instalacao-ar-condicionado-inverter-sp',
      'prob-nao-gela': '/ar-condicionado-nao-gela-sp',
      'prob-vazando': '/ar-condicionado-vazando-agua-sp',
      'prob-gas': '/recarga-gas-ar-condicionado-sp',
      'prob-mau-cheiro': '/ar-condicionado-com-mau-cheiro-sp',
      'prob-barulho': '/ar-condicionado-fazendo-barulho-sp',
      'prob-desliga': '/ar-condicionado-desligando-sozinho-sp',
      'serv-limpeza-sp': '/limpeza-ar-condicionado-sp',
      'serv-higienizacao-sp': '/higienizacao-ar-condicionado-sp',
      'serv-pmoc-sp': '/pmoc-sao-paulo',
      'serv-contrato-sp': '/contrato-manutencao-ar-condicionado-sp',
      'marca-lg': '/instalacao-ar-condicionado-lg-sao-paulo',
      'marca-samsung': '/instalacao-ar-condicionado-samsung-sao-paulo',
      'marca-daikin': '/instalacao-ar-condicionado-daikin-sao-paulo',
      'marca-midea': '/instalacao-ar-condicionado-midea-sao-paulo',
      'marca-fujitsu': '/instalacao-ar-condicionado-fujitsu-sao-paulo',
      'marca-carrier': '/instalacao-ar-condicionado-carrier-sao-paulo',
      'marca-elgin': '/instalacao-ar-condicionado-elgin-sao-paulo',
      'marca-gree': '/instalacao-ar-condicionado-gree-sao-paulo',
      'marca-springer': '/instalacao-ar-condicionado-springer-carrier-sao-paulo',
      'marca-komeco': '/instalacao-ar-condicionado-komeco-sao-paulo',
      'marca-philco': '/instalacao-ar-condicionado-philco-sao-paulo',
      'marca-electrolux': '/instalacao-ar-condicionado-electrolux-sao-paulo',
      'marca-trane': '/instalacao-ar-condicionado-trane-sao-paulo',
      'marca-york': '/instalacao-ar-condicionado-york-sao-paulo',
      'marca-hitachi': '/instalacao-ar-condicionado-hitachi-sao-paulo',
      'marca-panasonic': '/instalacao-ar-condicionado-panasonic-sao-paulo',
      'marca-bosch': '/instalacao-ar-condicionado-bosch-sao-paulo',
      'marca-tcl': '/instalacao-ar-condicionado-tcl-sao-paulo',
      'marca-agratto': '/instalacao-ar-condicionado-agratto-sao-paulo',
      'marca-consul': '/instalacao-ar-condicionado-consul-sao-paulo',
      'bairro-jardim-paulista': '/instalacao-ar-condicionado-jardim-paulista',
      'bairro-jardim-europa': '/instalacao-ar-condicionado-jardim-europa',
      'bairro-vila-andrade': '/instalacao-ar-condicionado-vila-andrade',
      'bairro-campo-limpo': '/instalacao-ar-condicionado-campo-limpo',
      'bairro-interlagos': '/instalacao-ar-condicionado-interlagos',
      'bairro-cerqueira-cesar': '/instalacao-ar-condicionado-cerqueira-cesar',
      'bairro-pacaembu': '/instalacao-ar-condicionado-pacaembu',
      'bairro-sumare': '/instalacao-ar-condicionado-sumare',
      'bairro-vila-leopoldina': '/instalacao-ar-condicionado-vila-leopoldina',
      'bairro-barra-funda': '/instalacao-ar-condicionado-barra-funda',
      'bairro-alto-de-pinheiros': '/instalacao-ar-condicionado-alto-de-pinheiros',
      'bairro-consolacao': '/instalacao-ar-condicionado-consolacao',
      'bairro-vila-guilherme': '/instalacao-ar-condicionado-vila-guilherme',
      'bairro-vila-maria': '/instalacao-ar-condicionado-vila-maria',
      'bairro-casa-verde': '/instalacao-ar-condicionado-casa-verde',
      'bairro-mandaqui': '/instalacao-ar-condicionado-mandaqui',
      'bairro-tremembe': '/instalacao-ar-condicionado-tremembe',
      'bairro-freguesia-do-o': '/instalacao-ar-condicionado-freguesia-do-o',
      'bairro-limao': '/instalacao-ar-condicionado-limao',
      'bairro-belem': '/instalacao-ar-condicionado-belem',
      'bairro-bras': '/instalacao-ar-condicionado-bras',
      'bairro-carrao': '/instalacao-ar-condicionado-carrao',
      'bairro-vila-formosa': '/instalacao-ar-condicionado-vila-formosa',
      'bairro-sapopemba': '/instalacao-ar-condicionado-sapopemba',
      'bairro-penha-de-franca': '/instalacao-ar-condicionado-penha-de-franca',
      'bairro-jardim-analia': '/instalacao-ar-condicionado-jardim-analia',
      'bairro-aricanduva': '/instalacao-ar-condicionado-aricanduva',
      'bairro-republica': '/instalacao-ar-condicionado-republica',
      'bairro-santa-cecilia': '/instalacao-ar-condicionado-santa-cecilia',
      'bairro-bom-retiro': '/instalacao-ar-condicionado-bom-retiro',
      'zona-sul': '/ar-condicionado-zona-sul-sp',
      'zona-norte': '/ar-condicionado-zona-norte-sp',
      'zona-leste': '/ar-condicionado-zona-leste-sp',
      'zona-oeste': '/ar-condicionado-zona-oeste-sp',
      'zona-central': '/ar-condicionado-zona-central-sp',
      'manutencao-chiller': '/manutencao-chiller-sao-paulo',
      'manutencao-fan-coil': '/manutencao-fan-coil-sao-paulo',
      'manutencao-self-contained': '/manutencao-self-contained-sao-paulo',
      'limpeza-fan-coil': '/limpeza-fan-coil-sao-paulo',
      'central-agua-gelada': '/central-agua-gelada-sao-paulo',
      'aquecimento-sp': '/ar-condicionado-aquecimento-sp',
      'manutencao-preventiva-verao': '/manutencao-preventiva-antes-do-verao-sp',
    }
    const path = routes[page] || '/'
    router.push(path)
    setIsMobileMenuOpen(false);
   if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }


  return (
    <>
     <SchemaOrg pathname={pathname} />
      <div className="min-h-screen font-sans text-slate-900 bg-white selection:bg-primary/10 selection:text-primary">
        

        {/* Topbar */}
        <div className="hidden md:block bg-primary text-white py-2 text-sm border-b border-white/10">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <div className="flex gap-6">
              <a href="tel:+5511963462516" className="flex items-center gap-2 hover:text-blue-200 transition-colors">
                <Phone size={14} /> (11) 96346-2516
              </a>
              <a href="mailto:contato@newclimaar.com.br" className="flex items-center gap-2 hover:text-blue-200 transition-colors opacity-80">
                <MessageSquare size={14} /> contato@newclimaar.com.br
              </a>
              <span className="flex items-center gap-2 opacity-80">
                <Clock size={14} /> Seg–Sex 8h–18h
              </span>
            </div>
            <div className="flex items-center gap-2 text-blue-100">
              <MapPin size={14} /> Atendimento em São Paulo e todo o ABC Paulista
            </div>
          </div>
        </div>

        {/* Header */}
        <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-slate-100">
          <div className="container mx-auto px-4 h-28 md:h-32 flex items-center justify-between">
            <div 
              className="flex items-center cursor-pointer group" 
              onClick={() => navigate('home')}
            >
              <img 
                src="https://cdn.coteibem.com.br/company/41315/logo/f4d0405d-28b6-4834-a8ca-9e63b68073fa.png" 
                alt="New Clima Ar Condicionado — Instalação e Manutenção em SP e ABC" 
                className="h-24 md:h-28 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </div>

            <nav className="hidden lg:flex items-center gap-1">
              <button onClick={() => navigate('home')} className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-primary-light transition-colors">Início</button>
              <button onClick={() => navigate('servicos')} className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-primary-light transition-colors">Serviços</button>
              <button onClick={() => { navigate('home'); setTimeout(() => { document.getElementById('depoimentos')?.scrollIntoView({ behavior: 'smooth' }); }, 300); }} className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-primary-light transition-colors">Depoimentos</button>
              <div className="relative group">
                <button className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-primary-light flex items-center gap-1">
                  Regiões <ChevronDown size={14} />
                </button>
                <div className="absolute top-full left-0 w-56 bg-white shadow-xl rounded-xl border border-slate-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all translate-y-2 group-hover:translate-y-0">
                  <button onClick={() => navigate('sao-paulo')} className="w-full text-left px-4 py-2 text-sm hover:bg-ice hover:text-primary-light transition-colors text-slate-700">São Paulo (Capital)</button>
                  <button onClick={() => navigate('santo-andre')} className="w-full text-left px-4 py-2 text-sm hover:bg-ice hover:text-primary-light transition-colors text-slate-700">Santo André</button>
                  <button onClick={() => navigate('sao-bernardo')} className="w-full text-left px-4 py-2 text-sm hover:bg-ice hover:text-primary-light transition-colors text-slate-700">São Bernardo do Campo</button>
                  <button onClick={() => navigate('sao-caetano')} className="w-full text-left px-4 py-2 text-sm hover:bg-ice hover:text-primary-light transition-colors text-slate-700">São Caetano do Sul</button>
                  <button onClick={() => navigate('diadema')} className="w-full text-left px-4 py-2 text-sm hover:bg-ice hover:text-primary-light transition-colors text-slate-700">Diadema</button>
                  <button onClick={() => navigate('maua')} className="w-full text-left px-4 py-2 text-sm hover:bg-ice hover:text-primary-light transition-colors text-slate-700">Mauá</button>
                </div>
              </div>
              <button onClick={() => navigate('blog')} className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-primary-light">Blog</button>
              <button onClick={() => navigate('sobre')} className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-primary-light">Quem Somos</button>
              <button onClick={() => navigate('contato')} className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-primary-light">Contato</button>
              <WhatsAppButton className="ml-4 h-11 text-sm px-5" text="WhatsApp (11) 96346-2516" />
            </nav>

            <button 
              className="lg:hidden p-2 text-primary"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`lg:hidden bg-white border-t border-slate-100 overflow-hidden transition-all duration-300 ease-in-out ${
              isMobileMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
                <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
                  <button onClick={() => navigate('home')} className="text-left font-semibold py-2 text-primary-light">Início</button>
                  <button onClick={() => navigate('servicos')} className="text-left font-semibold py-2">Serviços</button>
                  <button onClick={() => { setIsMobileMenuOpen(false); navigate('home'); setTimeout(() => { document.getElementById('depoimentos')?.scrollIntoView({ behavior: 'smooth' }); }, 300); }} className="text-left font-semibold py-2">Depoimentos</button>
                  <hr className="border-slate-100" />
                  <button onClick={() => navigate('blog')} className="text-left font-semibold py-2">Blog</button>
                  <button onClick={() => navigate('sobre')} className="text-left font-semibold py-2">Quem Somos</button>
                  <button onClick={() => navigate('contato')} className="text-left font-semibold py-2">Contato</button>
                  <WhatsAppButton className="w-full mt-2" text="WhatsApp (11) 96346-2516" />
                </div>
          </div>
          </header>

        {/* Main Content */}
        <main>
          {(() => {
            const p = pathname || '/';
            if (p === '/instalacao-ar-condicionado-split-sao-paulo') return <ServiceDetailView service="split" navigate={navigate} />;
            if (p === '/ar-condicionado-comercial-sao-paulo') return <ServiceDetailView service="comercial" navigate={navigate} />;
            if (p === '/instalacao-vrf-mini-vrf-sao-paulo') return <ServiceDetailView service="vrf" navigate={navigate} />;
            if (p === '/manutencao-preventiva-ar-condicionado-sp') return <ServiceDetailView service="preventiva" navigate={navigate} />;
            if (p === '/manutencao-corretiva-ar-condicionado-sp') return <ServiceDetailView service="corretiva" navigate={navigate} />;
            if (p === '/limpeza-higienizacao-ar-condicionado-sp') return <ServiceDetailView service="limpeza" navigate={navigate} />;
            if (p === '/blog/ar-condicionado-inverter') return <BlogView navigate={navigate} postId="inverter" />;
            if (p === '/blog/instalacao-ar-condicionado-apartamento-sp') return <BlogView navigate={navigate} postId="apartamento" />;
            if (p === '/blog/como-calcular-btus-ar-condicionado') return <BlogView navigate={navigate} postId="btus" />;
            if (p === '/blog/pmoc-obrigatorio-sao-paulo') return <BlogView navigate={navigate} postId="pmoc" />;
            if (p === '/blog/lg-round-cassette') return <BlogView navigate={navigate} postId="round-cassette" />;
            if (p === '/blog/instalacao-ar-condicionado-obra-limpa') return <BlogView navigate={navigate} postId="obra-limpa" />;
            if (p === '/blog/ar-condicionado-quarto') return <BlogView navigate={navigate} postId="quarto" />;
            if (p === '/blog/split-convencional-vs-inverter') return <BlogView navigate={navigate} postId="convencional-inverter" />;
            if (p === '/blog/ar-condicionado-empresas-vrf') return <BlogView navigate={navigate} postId="empresas" />;
            if (p === '/blog/pmoc-obrigatorio-sao-paulo-lei') return <BlogView navigate={navigate} postId="pmoc-obrigatorio" />;
            if (p === '/blog/multa-pmoc-sao-paulo') return <BlogView navigate={navigate} postId="multa-pmoc" />;
            if (p === '/blog/pmoc-condominios-sao-paulo') return <BlogView navigate={navigate} postId="pmoc-condominio" />;
            if (p === '/blog/quanto-custa-pmoc-sao-paulo') return <BlogView navigate={navigate} postId="custo-pmoc" />;
            if (p === '/blog/quanto-custa-instalar-ar-condicionado-sp') return <BlogView navigate={navigate} postId="custo-instalacao" />;
            if (p === '/blog/qual-ar-condicionado-comprar-2026') return <BlogView navigate={navigate} postId="qual-ac" />;
            if (p === '/blog/split-vs-multi-split-apartamento-sp') return <BlogView navigate={navigate} postId="split-multi-split" />;
            if (p === '/blog/manutencao-ar-condicionado-consequencias') return <BlogView navigate={navigate} postId="manutencao-consequencias" />;
            if (p === '/blog') return <BlogView navigate={navigate} />;
            if (p === '/sobre') return <AboutView navigate={navigate} />;
            if (p === '/contato') return <ContactView />;
            if (p === '/mapa-site') return <SitemapView navigate={navigate} />;
            if (p === '/instalacao-ar-condicionado-moema') return <BairroView bairro="Moema" slug="moema" zona="Zona Sul" vizinhos={['Vila Mariana', 'Brooklin', 'Campo Belo', 'Itaim Bibi']} navigate={navigate} />;
            if (p === '/instalacao-ar-condicionado-vila-mariana') return <BairroView bairro="Vila Mariana" slug="vila-mariana" zona="Zona Sul" vizinhos={['Moema', 'Saúde', 'Ipiranga', 'Paraíso']} navigate={navigate} />;
            if (p === '/instalacao-ar-condicionado-pinheiros') return <BairroView bairro="Pinheiros" slug="pinheiros" zona="Zona Oeste" vizinhos={['Vila Madalena', 'Jardins', 'Itaim Bibi', 'Alto de Pinheiros']} navigate={navigate} />;
            if (p === '/instalacao-ar-condicionado-itaim-bibi') return <BairroView bairro="Itaim Bibi" slug="itaim-bibi" zona="Zona Sul/Oeste" vizinhos={['Pinheiros', 'Jardins', 'Vila Olímpia', 'Moema']} navigate={navigate} />;
            if (p === '/instalacao-ar-condicionado-jardins') return <BairroView bairro="Jardins" slug="jardins" zona="Zona Oeste" vizinhos={['Pinheiros', 'Itaim Bibi', 'Cerqueira César', 'Jardim Paulista']} navigate={navigate} />;
            if (p === '/instalacao-ar-condicionado-tatuape') return <BairroView bairro="Tatuapé" slug="tatuape" zona="Zona Leste" vizinhos={['Anália Franco', 'Mooca', 'Carrão', 'Parque São Jorge']} navigate={navigate} />;
            if (p === '/instalacao-ar-condicionado-santana') return <BairroView bairro="Santana" slug="santana" zona="Zona Norte" vizinhos={['Tucuruvi', 'Vila Guilherme', 'Casa Verde', 'Mandaqui']} navigate={navigate} />;
            if (p === '/instalacao-ar-condicionado-brooklin') return <BairroView bairro="Brooklin" slug="brooklin" zona="Zona Sul" vizinhos={['Moema', 'Campo Belo', 'Vila Olímpia', 'Santo Amaro']} navigate={navigate} />;
            if (p === '/instalacao-ar-condicionado-perdizes') return <BairroView bairro="Perdizes" slug="perdizes" zona="Zona Oeste" vizinhos={['Pompéia', 'Higienópolis', 'Pacaembu', 'Lapa']} navigate={navigate} />;
            if (p === '/instalacao-ar-condicionado-morumbi') return <BairroView bairro="Morumbi" slug="morumbi" zona="Zona Sul" vizinhos={['Itaim Bibi', 'Vila Andrade', 'Campo Belo', 'Santo Amaro']} navigate={navigate} />;
            if (p === '/instalacao-ar-condicionado-mooca') return <BairroView bairro="Mooca" slug="mooca" zona="Zona Leste" vizinhos={['Tatuapé', 'Brás', 'Belém', 'Vila Prudente']} navigate={navigate} />;
            if (p === '/instalacao-ar-condicionado-analia-franco') return <BairroView bairro="Anália Franco" slug="analia-franco" zona="Zona Leste" vizinhos={['Tatuapé', 'Carrão', 'Jardim Anália', 'Parque São Jorge']} navigate={navigate} />;
            if (p === '/instalacao-ar-condicionado-vila-madalena') return <BairroView bairro="Vila Madalena" slug="vila-madalena" zona="Zona Oeste" vizinhos={['Pinheiros', 'Perdizes', 'Sumaré', 'Alto de Pinheiros']} navigate={navigate} />;
            if (p === '/instalacao-ar-condicionado-campo-belo') return <BairroView bairro="Campo Belo" slug="campo-belo" zona="Zona Sul" vizinhos={['Moema', 'Brooklin', 'Santo Amaro', 'Itaim Bibi']} navigate={navigate} />;
            if (p === '/instalacao-ar-condicionado-saude') return <BairroView bairro="Saúde" slug="saude" zona="Zona Sul" vizinhos={['Vila Mariana', 'Ipiranga', 'Cursino', 'Jabaquara']} navigate={navigate} />;
            if (p === '/instalacao-ar-condicionado-higienopolis') return <BairroView bairro="Higienópolis" slug="higienopolis" zona="Zona Oeste" vizinhos={['Consolação', 'Santa Cecília', 'Perdizes', 'Bom Retiro']} navigate={navigate} />;
            if (p === '/instalacao-ar-condicionado-lapa') return <BairroView bairro="Lapa" slug="lapa" zona="Zona Oeste" vizinhos={['Perdizes', 'Pompéia', 'Vila Leopoldina', 'Água Branca']} navigate={navigate} />;
            if (p === '/instalacao-ar-condicionado-santo-amaro') return <BairroView bairro="Santo Amaro" slug="santo-amaro" zona="Zona Sul" vizinhos={['Campo Belo', 'Brooklin', 'Campo Grande', 'Morumbi']} navigate={navigate} />;
            if (p === '/instalacao-ar-condicionado-tucuruvi') return <BairroView bairro="Tucuruvi" slug="tucuruvi" zona="Zona Norte" vizinhos={['Santana', 'Vila Guilherme', 'Mandaqui', 'Jaçanã']} navigate={navigate} />;
            if (p === '/instalacao-ar-condicionado-ipiranga') return <BairroView bairro="Ipiranga" slug="ipiranga" zona="Zona Sul" vizinhos={['Saúde', 'Cursino', 'Vila Mariana', 'Vila Prudente']} navigate={navigate} />;
            if (p === '/instalacao-ar-condicionado-vila-prudente') return <BairroView bairro="Vila Prudente" slug="vila-prudente" zona="Zona Leste" vizinhos={['Ipiranga', 'Mooca', 'Sapopemba', 'Cursino']} navigate={navigate} />;
            if (p === '/instalacao-ar-condicionado-jabaquara') return <BairroView bairro="Jabaquara" slug="jabaquara" zona="Zona Sul" vizinhos={['Saúde', 'Santo Amaro', 'Cursino', 'Vila Mariana']} navigate={navigate} />;
            if (p === '/instalacao-ar-condicionado-campo-grande') return <BairroView bairro="Campo Grande" slug="campo-grande" zona="Zona Sul" vizinhos={['Santo Amaro', 'Campo Belo', 'Brooklin', 'Morumbi']} navigate={navigate} />;
            if (p === '/instalacao-ar-condicionado-penha') return <BairroView bairro="Penha" slug="penha" zona="Zona Leste" vizinhos={['Tatuapé', 'Anália Franco', 'Ermelino Matarazzo', 'Aricanduva']} navigate={navigate} />;
            if (p === '/instalacao-ar-condicionado-cursino') return <BairroView bairro="Cursino" slug="cursino" zona="Zona Sul" vizinhos={['Saúde', 'Ipiranga', 'Vila Prudente', 'Jabaquara']} navigate={navigate} />;
            if (p === '/instalacao-ar-condicionado-agua-rasa') return <BairroView bairro="Água Rasa" slug="agua-rasa" zona="Zona Leste" vizinhos={['Mooca', 'Tatuapé', 'Belém', 'Vila Prudente']} navigate={navigate} />;
            if (p === '/instalacao-ar-condicionado-bela-vista') return <BairroView bairro="Bela Vista" slug="bela-vista" zona="Região Central" vizinhos={['Paraíso', 'Liberdade', 'Consolação', 'Higienópolis']} navigate={navigate} />;
            if (p === '/instalacao-ar-condicionado-butanta') return <BairroView bairro="Butantã" slug="butanta" zona="Zona Oeste" vizinhos={['Vila Madalena', 'Pinheiros', 'Rio Pequeno', 'Vila Sônia']} navigate={navigate} />;
            if (p === '/instalacao-ar-condicionado-vila-olimpia') return <BairroView bairro="Vila Olímpia" slug="vila-olimpia" zona="Zona Sul" vizinhos={['Itaim Bibi', 'Brooklin', 'Moema', 'Campo Belo']} navigate={navigate} />;
            if (p === '/instalacao-ar-condicionado-pompeia') return <BairroView bairro="Pompéia" slug="pompeia" zona="Zona Oeste" vizinhos={['Perdizes', 'Lapa', 'Água Branca', 'Barra Funda']} navigate={navigate} />;
            if (p === '/instalacao-ar-condicionado-paraiso') return <BairroView bairro="Paraíso" slug="paraiso" zona="Zona Sul" vizinhos={['Vila Mariana', 'Bela Vista', 'Moema', 'Aclimação']} navigate={navigate} />;
            if (p === '/instalacao-ar-condicionado-aclimacao') return <BairroView bairro="Aclimação" slug="aclimacao" zona="Zona Sul" vizinhos={['Paraíso', 'Vila Mariana', 'Cambuci', 'Liberdade']} navigate={navigate} />;
            if (p === '/instalacao-ar-condicionado-mirandopolis') return <BairroView bairro="Mirandópolis" slug="mirandopolis" zona="Zona Sul" vizinhos={['Vila Mariana', 'Moema', 'Saúde', 'Cursino']} navigate={navigate} />;
            if (p === '/instalacao-ar-condicionado-planalto-paulista') return <BairroView bairro="Planalto Paulista" slug="planalto-paulista" zona="Zona Sul" vizinhos={['Vila Mariana', 'Saúde', 'Moema', 'Cursino']} navigate={navigate} />;
            if (p === '/instalacao-ar-condicionado-vila-clementino') return <BairroView bairro="Vila Clementino" slug="vila-clementino" zona="Zona Sul" vizinhos={['Vila Mariana', 'Saúde', 'Jabaquara', 'Moema']} navigate={navigate} />;
            if (p === '/instalacao-ar-condicionado-chacara-klabin') return <BairroView bairro="Chácara Klabin" slug="chacara-klabin" zona="Zona Sul" vizinhos={['Vila Mariana', 'Paraíso', 'Aclimação', 'Saúde']} navigate={navigate} />;
            if (p === '/instalacao-ar-condicionado-cambuci') return <BairroView bairro="Cambuci" slug="cambuci" zona="Região Central" vizinhos={['Liberdade', 'Aclimação', 'Ipiranga', 'Vila Mariana']} navigate={navigate} />;
            if (p === '/instalacao-ar-condicionado-liberdade') return <BairroView bairro="Liberdade" slug="liberdade" zona="Região Central" vizinhos={['Bela Vista', 'Cambuci', 'Aclimação', 'Paraíso']} navigate={navigate} />;
            if (p === '/ar-condicionado-clinica-medica-sp') return <SegmentoView slug="clinica-medica" title="Clínica Médica" tag="SAÚDE" headline="Ar Condicionado para Clínicas e Consultórios em São Paulo" desc="Instalação e manutenção de ar condicionado para clínicas médicas, consultórios e laboratórios em São Paulo e ABC. Ar limpo, temperatura controlada e contrato de manutenção (PMOC) conforme a Vigilância Sanitária." dor="Clínica sem manutenção em dia corre risco de interdição. Estabelecimentos de saúde com ar condicionado acima de 60.000 BTUs são obrigados por lei a ter contrato de manutenção — e a multa chega a R$ 1,5 milhão." servicos={["Instalação de ar condicionado silencioso para salas de consulta e espera", "Contrato de manutenção obrigatório (PMOC) conforme a Lei 13.589/18", "Limpeza e higienização com bactericida certificado para ambientes de saúde", "Manutenção preventiva trimestral com relatório técnico", "Instalação fora do horário de atendimento para não afetar pacientes", "Documentação completa para Vigilância Sanitária"]} faq={[["Clínicas são obrigadas a ter contrato de manutenção do ar condicionado?", "Sim. Qualquer estabelecimento de saúde com sistema de ar condicionado acima de 60.000 BTUs é obrigado pela Lei 13.589/18 a ter um PMOC — Plano de Manutenção, Operação e Controle. A multa por irregularidade pode chegar a R$ 1,5 milhão."], ["Qual tipo de ar condicionado é ideal para sala de consulta?", "Recomendamos splits inverter de baixo ruído — abaixo de 26dB para não atrapalhar consultas. Para centros cirúrgicos e UTIs, sistemas com filtragem especial atendem as normas da ANVISA. Fazemos o projeto gratuitamente."], ["Com que frequência fazer manutenção em clínica?", "A lei exige no mínimo trimestral. Para clínicas com alto fluxo de pacientes, como pronto-socorros, recomendamos a cada 2 meses. A manutenção regular também protege a saúde de pacientes e funcionários."], ["A instalação pode ser feita sem fechar a clínica?", "Sim. Instalamos fora do horário de atendimento — finais de semana ou período noturno — para não impactar pacientes nem funcionários."]]} vizinhos="Vila Mariana · Moema · Itaim Bibi · Pinheiros · Jardins · Higienópolis · Brooklin" navigate={navigate} />;
            if (p === '/ar-condicionado-escritorio-sao-paulo') return <SegmentoView slug="escritorio" title="Escritório" tag="COMERCIAL" headline="Ar Condicionado para Escritório em São Paulo — Instalação e Manutenção" desc="Ar condicionado instalado e mantido para escritórios, coworkings e prédios corporativos em São Paulo e ABC. Sem barulho no ambiente, sem parada no expediente e com contrato de manutenção." dor="Ar condicionado barulhento atrapalha reuniões. Equipamento com defeito para no pior momento — e a conta de manutenção corretiva sempre sai mais cara que a preventiva." servicos={["Instalação silenciosa — split, cassete de teto e piso-teto para salas e open spaces", "Contrato de manutenção mensal ou trimestral para escritórios", "Instalação e manutenção fora do horário comercial (fins de semana e noturno)", "PMOC para prédios obrigados pela Lei 13.589/18", "Atendimento emergencial em até 4 horas em São Paulo e ABC", "Projeto técnico com cálculo de BTUs por sala — sem superdimensionamento"]} faq={[["Qual o melhor tipo de ar condicionado para escritório?", "Depende do tamanho. Para salas individuais (até 20m²), o split hi-wall inverter é silencioso e econômico. Para salas de reunião ou open spaces maiores, o cassete de teto distribui o ar de forma uniforme sem criar zonas frias. Para andares inteiros, o sistema VRF permite controle individual por ambiente. Fazemos o projeto gratuitamente."], ["A instalação pode ser feita sem parar o escritório?", "Sim. Instalamos preferenciamente nos fins de semana ou fora do horário comercial. O ambiente fica pronto e funcionando antes do expediente de segunda."], ["Meu prédio comercial é obrigado a ter contrato de manutenção?", "Prédios com sistema de ar condicionado acima de 60.000 BTUs são obrigados por lei (Lei 13.589/18) a ter um Plano de Manutenção, Operação e Controle (PMOC). A maioria dos prédios comerciais se enquadra nessa faixa. Cuidamos de toda a documentação."], ["Com que frequência fazer manutenção em escritório?", "Para escritórios com uso diário, recomendamos manutenção trimestral no mínimo. Ambientes com muita circulação de pessoas ou poeira podem precisar de visitas mensais. Um contrato de manutenção preventiva sai muito mais barato que um conserto emergencial."]]} vizinhos="Itaim Bibi · Pinheiros · Jardins · Faria Lima · Vila Olímpia · Brooklin · Moema" navigate={navigate} />;
            if (p === '/ar-condicionado-condominio-sp') return <SegmentoView slug="condominio" title="Condomínio" tag="CONDOMÍNIO" headline="Ar Condicionado para Condomínios em São Paulo — Manutenção e PMOC" desc="Instalação e manutenção de ar condicionado para condomínios residenciais e comerciais em São Paulo e ABC. Contratos de manutenção (PMOC) para síndicos e administradoras com toda a documentação incluída." dor="Síndico responde pessoalmente se o condomínio não tiver contrato de manutenção em dia. Condomínios com ar condicionado acima de 60.000 BTUs nas áreas comuns são obrigados por lei — e a multa sai do bolso da administração." servicos={["Contrato de manutenção (PMOC) para áreas comuns — salão, academia, lobby", "Instalação de ar condicionado em unidades residenciais e comerciais", "Manutenção preventiva com relatório técnico para assembleias", "Limpeza e higienização dos equipamentos das áreas comuns", "Atendimento a moradores individualmente — instalação e conserto nas unidades", "Laudos e documentação para Vigilância Sanitária"]} faq={[["Condomínios são obrigados a ter contrato de manutenção do ar condicionado?", "Sim. Condomínios com sistema central ou capacidade acima de 60.000 BTUs nas áreas comuns são obrigados pela Lei 13.589/18 a ter um contrato de manutenção (PMOC). O síndico responde legalmente pelo cumprimento — inclusive com multa pessoal."], ["O que está incluído no contrato de manutenção para condomínio?", "Fazemos o levantamento de todos os equipamentos, elaboramos o PMOC conforme a norma, executamos as visitas preventivas e entregamos relatório técnico após cada visita — pronto para apresentar em assembleia ou para a Vigilância Sanitária."], ["Vocês atendem moradores individualmente também?", "Sim. Além do contrato das áreas comuns, atendemos moradores para instalação, conserto e limpeza de ar condicionado nas próprias unidades."], ["O síndico precisa aprovar a contratação em assembleia?", "Para o contrato de manutenção das áreas comuns, geralmente é necessária aprovação em assembleia ou autorização da administradora. Podemos fornecer proposta técnica para facilitar esse processo."]]} vizinhos="Vila Mariana · Moema · Brooklin · Pinheiros · Jardins · Higienópolis · Itaim Bibi" navigate={navigate} />;
            if (p === '/ar-condicionado-restaurante-sp') return <SegmentoView slug="restaurante" title="Restaurante" tag="ALIMENTAÇÃO" headline="Ar Condicionado para Restaurantes e Bares em São Paulo" desc="Instalação e manutenção de ar condicionado para restaurantes, bares e lanchonetes em São Paulo e ABC. Ambiente fresco para seus clientes, manutenção fora do horário de funcionamento e contrato de manutenção para a Vigilância Sanitária." dor="Restaurante quente perde cliente na hora. Ar condicionado parado no sábado à noite é prejuízo imediato — e a Vigilância Sanitária pode autuar estabelecimentos sem manutenção documentada." servicos={["Instalação de ar condicionado para salões com alta ocupação", "Contrato de manutenção (PMOC) exigido pela Vigilância Sanitária", "Manutenção e instalação antes da abertura ou após o fechamento", "Limpeza e higienização com produtos seguros para ambientes alimentícios", "Atendimento emergencial com prioridade para restaurantes em operação", "Manutenção preventiva mensal ou trimestral conforme o volume de uso"]} faq={[["Restaurantes são obrigados a ter contrato de manutenção do ar condicionado?", "Sim. Restaurantes com sistema de ar condicionado são fiscalizados pela Vigilância Sanitária, que exige manutenção regular documentada. O contrato de manutenção (PMOC) é a forma legal de comprovar que o ar está limpo e o equipamento em dia."], ["Com que frequência fazer limpeza do ar condicionado de restaurante?", "Recomendamos limpeza completa a cada 3 meses no mínimo. Em cozinhas com frituras, a gordura contamina os filtros muito rápido — nesses casos, o ideal é mensal. Filtro sujo joga gordura e bactérias no ambiente onde seus clientes comem."], ["Vocês fazem a manutenção sem fechar o restaurante?", "Sim. Instalamos e fazemos manutenção antes da abertura, após o fechamento ou em dias de folga. O restaurante não precisa parar."], ["E se o ar condicionado pifar no fim de semana?", "Temos atendimento de emergência prioritário para restaurantes. Respondemos em até 2 horas e tentamos resolver no mesmo dia — sabemos que fim de semana é o pico do movimento."]]} vizinhos="Pinheiros · Vila Madalena · Itaim Bibi · Jardins · Moema · Brooklin · Vila Olímpia" navigate={navigate} />;
            if (p === '/ar-condicionado-hotel-sp') return <SegmentoView slug="hotel" title="Hotel" tag="HOTELARIA" headline="Ar Condicionado para Hotéis em São Paulo — Instalação e Manutenção" desc="Instalação e manutenção de ar condicionado para hotéis, apart-hotéis e hostels em São Paulo e ABC. Manutenção silenciosa sem incomodar hóspedes, contrato de manutenção (PMOC) e atendimento emergencial." dor="Uma avaliação negativa no Booking por causa de ar condicionado com defeito custa muito mais do que um contrato de manutenção. Ar barulhento ou quente no quarto é o caminho mais rápido para uma estrela a menos." servicos={["Instalação de ar condicionado em quartos, suítes e áreas comuns", "Contrato de manutenção preventiva (PMOC) exigido pela Vigilância Sanitária", "Manutenção silenciosa e discreta sem incomodar hóspedes", "Atendimento emergencial 24 horas para hotéis em operação", "Priorização de quartos vagos para manutenção — sem desalojar hóspede", "Relatórios técnicos para gestão e Vigilância Sanitária"]} faq={[["Hotéis são obrigados a ter contrato de manutenção do ar condicionado?", "Sim. Hotéis com ar condicionado central ou capacidade acima de 60.000 BTUs são obrigados pela Lei 13.589/18 a ter um PMOC. A Vigilância Sanitária fiscaliza — e a multa pode comprometer a licença de funcionamento."], ["Como funciona a manutenção sem atrapalhar os hóspedes?", "Planejamos as visitas para o período de menor ocupação e sempre priorizamos quartos vagos. Nossos técnicos trabalham de forma discreta, uniformizados e identificados. Para emergências, temos protocolo de atendimento que minimiza qualquer impacto."], ["E se o ar condicionado de um quarto pifar com hóspede dentro?", "Temos atendimento emergencial disponível. Respondemos em até 2 horas e tentamos resolver no mesmo dia. Sabemos que quarto parado é prejuízo direto."], ["Atendem apart-hotéis e hostels também?", "Sim. Atendemos qualquer tipo de hospedagem em São Paulo e ABC. O contrato é adaptado ao tamanho e tipo de estabelecimento."]]} vizinhos="Jardins · Itaim Bibi · Vila Mariana · Centro · Higienópolis · Brooklin · Pinheiros" navigate={navigate} />;
            if (p === '/ar-condicionado-pousada-sp') return <SegmentoView slug="pousada" title="Pousada" tag="HOTELARIA" headline="Ar Condicionado para Pousadas em São Paulo e ABC" desc="Instalação e manutenção de ar condicionado para pousadas em São Paulo e ABC. Equipamento silencioso nos quartos, manutenção preventiva e atendimento rápido quando precisar." dor="Hóspede sem ar condicionado funcionando cancela a reserva e deixa avaliação negativa. Equipamento parado no fim de semana — que é quando mais movimento tem — é o pior momento para chamar técnico." servicos={["Instalação de ar condicionado silencioso em quartos e áreas comuns", "Manutenção preventiva com contrato — mensal, trimestral ou semestral", "Atendimento rápido para emergências, inclusive fins de semana", "Instalação e manutenção em todas as marcas e modelos", "Limpeza e higienização dos equipamentos", "Contrato de manutenção (PMOC) para pousadas obrigadas pela lei"]} faq={[["Pousadas precisam de contrato de manutenção do ar condicionado?", "Pousadas com capacidade de ar condicionado acima de 60.000 BTUs são obrigadas pela Lei 13.589/18. Mesmo abaixo desse limite, a Vigilância Sanitária pode exigir manutenção documentada. Um contrato preventivo também evita quebras no pior momento."], ["Qual o melhor ar condicionado para quarto de pousada?", "O split inverter hi-wall é o mais usado — silencioso, econômico e de fácil instalação. Para quartos maiores ou mais premium, o cassete de teto distribui o ar de forma mais uniforme e discreta. Fazemos o projeto gratuito para cada espaço."], ["E se quebrar no fim de semana cheio de reservas?", "Temos atendimento emergencial e respondemos rápido — sabemos que fim de semana é o pico. Tentamos resolver no mesmo dia para não deixar o quarto parado."], ["Atendem pousadas no ABC Paulista?", "Sim. Atendemos pousadas em toda a região do ABC: Santo André, São Bernardo do Campo, São Caetano do Sul, Diadema e Mauá."]]} vizinhos="Santo André · São Bernardo · São Caetano · Diadema · Mauá · Vila Mariana · Moema" navigate={navigate} />;
            if (p === '/ar-condicionado-academia-sp') return <SegmentoView slug="academia" title="Academia" tag="FITNESS" headline="Ar Condicionado para Academias em São Paulo — Instalação e Manutenção" desc="Instalação e manutenção de ar condicionado para academias, estúdios de pilates e crossfit em São Paulo e ABC. Projeto correto para o volume de pessoas, manutenção frequente e contrato de manutenção (PMOC)." dor="Academia quente cancela matrícula. Se o ar não dá conta do calor das aulas, o aluno reclama, posta e vai embora. E aparelho subdimensionado consome mais energia e quebra mais cedo." servicos={["Projeto gratuito com cálculo correto de BTUs para o volume de alunos", "Instalação de ar condicionado de alta capacidade para salas de musculação e aulas", "Contrato de manutenção preventiva (PMOC) para academias obrigadas pela lei", "Limpeza frequente dos filtros — a umidade do suor contamina rápido", "Manutenção a cada 2 meses para ambientes com alto fluxo de pessoas", "Atendimento emergencial para não deixar a academia sem ar"]} faq={[["Qual potência de ar condicionado para academia?", "O cálculo para academia é diferente do residencial — pessoa em exercício gera muito mais calor que em repouso. Fazemos o projeto gratuitamente, considerando número de alunos por sala, pé-direito e exposição solar. Ar subdimensionado não refresca e ainda quebra mais cedo."], ["Com que frequência fazer manutenção em academia?", "Recomendamos a cada 2 meses no mínimo. O suor e a umidade do ambiente contaminam os filtros muito mais rápido do que em ambientes normais. Filtro sujo reduz o resfriamento e pode espalhar fungos no ar."], ["Academia é obrigada a ter contrato de manutenção do ar condicionado?", "Academias com capacidade de ar condicionado acima de 60.000 BTUs são obrigadas pela Lei 13.589/18. A maioria das academias de médio e grande porte se enquadra nessa faixa. Cuidamos de toda a documentação."], ["Atendem estúdios de pilates e crossfit também?", "Sim. Atendemos qualquer tipo de espaço fitness — academia, estúdio de pilates, crossfit, musculação e boxe. O projeto é adaptado para cada tipo de atividade e volume de pessoas."]]} vizinhos="Vila Mariana · Moema · Brooklin · Pinheiros · Itaim Bibi · Jardins · Santo André" navigate={navigate} />;
            if (p === '/ar-condicionado-escola-sp') return <SegmentoView slug="escola" title="Escola" tag="EDUCAÇÃO" headline="Ar Condicionado para Escolas e Creches em São Paulo" desc="Instalação e manutenção de ar condicionado para escolas, creches e universidades em São Paulo e ABC. Ar limpo e seguro para alunos e professores, contrato de manutenção (PMOC) e instalação nas férias escolares." dor="Sala de aula quente reduz concentração e rendimento dos alunos. Ar condicionado sem limpeza acumula fungos e ácaros — prejudicando crianças com rinite e asma. E escola sem PMOC pode ser interditada pela Vigilância Sanitária." servicos={["Instalação de ar condicionado em salas de aula, creches e áreas comuns", "Contrato de manutenção (PMOC) para instituições de ensino obrigadas pela lei", "Limpeza e higienização com produtos seguros para crianças e bebês", "Manutenção preventiva programada nas férias de janeiro e julho", "Documentação completa para Vigilância Sanitária e Secretaria de Educação", "Atendimento em escolas particulares, públicas, creches e universidades"]} faq={[["Escolas são obrigadas a ter contrato de manutenção do ar condicionado?", "Sim. Instituições de ensino com ar condicionado acima de 60.000 BTUs são obrigadas pela Lei 13.589/18 a ter um PMOC — Plano de Manutenção, Operação e Controle. O descumprimento pode resultar em interdição pela Vigilância Sanitária."], ["Quando é o melhor momento para fazer manutenção em escola?", "Programamos a manutenção nas férias de janeiro e julho para não tirar nenhum aluno de sala. Assim o aparelho chega ao período mais quente (dezembro e março) revisado e funcionando."], ["Ar condicionado sem limpeza pode prejudicar crianças?", "Sim. Sem limpeza regular, o aparelho acumula fungos, ácaros e bactérias — e joga tudo no ar da sala de aula. Crianças com rinite, asma e alergias são as mais afetadas. Com higienização regular, o ar condicionado melhora a qualidade do ar em vez de piorar."], ["Vocês atendem creches e escolas de educação infantil?", "Sim. Usamos apenas produtos de limpeza certificados e seguros para ambientes com bebês e crianças pequenas. O processo é adaptado para cada tipo de instituição."]]} vizinhos="Vila Mariana · Moema · Brooklin · Santo André · São Bernardo · São Caetano · Diadema" navigate={navigate} />;
            if (p === '/instalacao-ar-condicionado-sp') return <SegmentoView slug="instalacao-ar-condicionado-sp" title="Instalação de Ar Condicionado em SP" tag="INSTALAÇÃO" headline="Instalação de Ar Condicionado em São Paulo" desc="Serviço completo de instalação de ar condicionado em São Paulo e ABC. Split, multi-split, VRF e cassete. Técnicos certificados, obra limpa e garantia por escrito." dor="Instalação mal feita gera vazamento de gás, infiltração e danos à estrutura. Escolha quem tem técnico certificado e garante por escrito." servicos={["Instalação de split hi-wall residencial e comercial", "Instalação de multi-split para múltiplos ambientes", "Infraestrutura elétrica e hidráulica completa", "Obra limpa sem quebradeira", "Garantia de 1 ano na mão de obra", "Teste de funcionamento antes de entregar"]} faq={[["Quanto custa instalar ar condicionado em SP?", "Uma instalação residencial padrão em SP começa a partir de R$ 350. O valor varia conforme a complexidade da infraestrutura e o tipo de equipamento. Visita técnica gratuita e orçamento no mesmo dia."], ["Quanto tempo leva a instalação?", "Uma instalação de split simples leva em média 3 a 5 horas. Multi-split pode levar 1 a 2 dias dependendo do número de ambientes."], ["A instalação inclui infraestrutura elétrica?", "Sim. Realizamos toda a infraestrutura necessária: tubulação de cobre, dreno, suporte e ponto elétrico. Tudo documentado no orçamento antes de começar."]  ]} vizinhos="Vila Mariana · Moema · Pinheiros · Itaim Bibi · Santana · Tatuapé · SP e ABC" navigate={navigate} />;
            if (p === '/manutencao-ar-condicionado-sp') return <SegmentoView slug="manutencao-ar-condicionado-sp" title="Manutenção de Ar Condicionado em SP" tag="MANUTENÇÃO" headline="Manutenção de Ar Condicionado em São Paulo" desc="Manutenção preventiva e corretiva de ar condicionado em São Paulo e ABC. Todas as marcas, peças originais e garantia por escrito." dor="Ar condicionado sem manutenção consome até 30% mais energia e quebra antes do tempo. Uma visita preventiva evita o custo de um conserto." servicos={["Manutenção preventiva com checklist completo", "Manutenção corretiva e diagnóstico de defeitos", "Limpeza de filtros, serpentina e dreno", "Verificação de gás refrigerante", "Contratos mensais, trimestrais ou anuais", "Relatório técnico após cada visita"]} faq={[["Com que frequência fazer manutenção de ar condicionado?", "Para uso residencial, recomendamos a cada 6 meses. Para uso comercial ou intenso, a cada 3 meses. Ambientes com muita poeira ou cozinhas podem precisar de manutenção mensal."], ["Quanto custa a manutenção de ar condicionado em SP?", "A manutenção preventiva começa a partir de R$ 120 por aparelho. Contratos mensais têm valor reduzido. Diagnóstico gratuito na primeira visita."], ["A manutenção é feita em todas as marcas?", "Sim. Atendemos todas as marcas: LG, Samsung, Daikin, Midea, Fujitsu, Carrier, Elgin, Gree e outras."]  ]} vizinhos="Vila Mariana · Moema · Pinheiros · Itaim Bibi · Santana · Tatuapé · SP e ABC" navigate={navigate} />;
            if (p === '/tecnico-ar-condicionado-sp') return <SegmentoView slug="tecnico-ar-condicionado-sp" title="Técnico de Ar Condicionado em SP" tag="TÉCNICO" headline="Técnico de Ar Condicionado em São Paulo" desc="Técnicos certificados de ar condicionado em São Paulo e ABC. Instalação, manutenção e conserto com garantia por escrito e atendimento em até 2 horas." dor="Técnico sem certificação pode anular a garantia do fabricante e causar danos ao equipamento. Exija credencial e garantia por escrito." servicos={["Técnicos com certificação de fabricante", "Atendimento em até 2 horas em SP e ABC", "Identificados, uniformizados e com histórico de avaliações", "Garantia por escrito em todo serviço", "Diagnóstico preciso com equipamentos profissionais", "Peças originais com nota fiscal"]} faq={[["Como escolher um técnico de ar condicionado confiável em SP?", "Verifique se o técnico tem certificação do fabricante, se emite garantia por escrito e se tem avaliações no Google. Desconfie de preços muito abaixo do mercado — geralmente indica uso de peças genéricas ou mão de obra não qualificada."], ["Quanto cobra um técnico de ar condicionado em SP?", "A visita técnica da New Clima é gratuita. O valor do serviço é orçado no local após o diagnóstico. Manutenção preventiva a partir de R$ 120, instalação a partir de R$ 350."], ["O técnico vai até meu apartamento em SP?", "Sim. Atendemos apartamentos e condomínios em toda São Paulo e ABC. Respeitamos as normas de acesso do condomínio e trabalhamos com proteção de piso e móveis."]  ]} vizinhos="Vila Mariana · Moema · Pinheiros · Itaim Bibi · Santana · Tatuapé · SP e ABC" navigate={navigate} />;
            if (p === '/conserto-ar-condicionado-sp') return <SegmentoView slug="conserto-ar-condicionado-sp" title="Conserto de Ar Condicionado em SP" tag="CONSERTO" headline="Conserto de Ar Condicionado em São Paulo" desc="Conserto de ar condicionado em São Paulo e ABC. Diagnóstico preciso, peças originais e garantia de 90 dias. Atendimento em até 2 horas." dor="Ar condicionado parado no verão é urgência. Diagnóstico rápido e conserto no mesmo dia na maioria dos casos." servicos={["Diagnóstico gratuito na visita técnica", "Conserto de todas as marcas e modelos", "Recarga de gás refrigerante", "Troca de compressor, capacitor e placa", "Conserto de vazamento e dreno entupido", "Garantia de 90 dias no serviço"]} faq={[["Qual o prazo para conserto de ar condicionado em SP?", "Na maioria dos casos consertamos no mesmo dia da visita. Para peças especiais, o prazo é de 1 a 3 dias úteis. Respondemos em até 2 horas após o contato."], ["Vale a pena consertar ou comprar um novo?", "Depende do defeito e da idade do aparelho. Em geral, se o conserto custar mais de 50% do valor de um aparelho novo, vale mais a pena trocar. Fazemos essa avaliação gratuitamente na visita."], ["Vocês consertam todas as marcas?", "Sim. Consertamos LG, Samsung, Daikin, Midea, Fujitsu, Carrier, Elgin, Gree, Springer e outras marcas."]  ]} vizinhos="Vila Mariana · Moema · Pinheiros · Itaim Bibi · Santana · Tatuapé · SP e ABC" navigate={navigate} />;
            if (p === '/empresa-ar-condicionado-sp') return <SegmentoView slug="empresa-ar-condicionado-sp" title="Empresa de Ar Condicionado em SP" tag="EMPRESA" headline="Empresa de Ar Condicionado em São Paulo" desc="New Clima — empresa especializada em ar condicionado em São Paulo e ABC desde 2018. Instalação, manutenção, higienização e PMOC com equipe própria e garantia por escrito." dor="Contratar empresa sem equipe própria ou sem histórico é risco. Peça CNPJ, avaliações no Google e garantia documentada antes de fechar." servicos={["Empresa com CNPJ e equipe técnica própria", "Desde 2018 em SP e ABC", "4.9 estrelas no Google com 24 avaliações", "Contratos para residências e empresas", "PMOC conforme Lei 13.589/18", "Garantia por escrito em todo serviço"]} faq={[["A New Clima é uma empresa registrada?", "Sim. Somos uma empresa com CNPJ, equipe técnica própria e atuando em São Paulo e ABC desde 2018. Emitimos nota fiscal e garantia por escrito em todo serviço."], ["Atendem tanto residencial quanto comercial?", "Sim. Atendemos apartamentos, casas, escritórios, condomínios, clínicas, restaurantes, hotéis e indústrias em SP e ABC."], ["Como solicitar orçamento?", "Pelo WhatsApp (11) 96346-2516. Respondemos em até 2 horas e agendamos a visita técnica gratuita conforme sua disponibilidade."]  ]} vizinhos="Vila Mariana · Moema · Pinheiros · Itaim Bibi · Santana · Tatuapé · SP e ABC" navigate={navigate} />;
            if (p === '/ar-condicionado-apartamento-sp') return <SegmentoView slug="apartamento" title="Apartamento" tag="RESIDENCIAL" headline="Ar Condicionado para Apartamento em São Paulo" desc="Instalação de ar condicionado em apartamentos em São Paulo e ABC. Obra limpa, respeito às normas do condomínio e garantia por escrito." dor="Instalação errada em apartamento pode violar o regimento do condomínio e causar infiltrações nos vizinhos. Exija técnico com experiência em edifícios." servicos={["Instalação discreta com infraestrutura embutida", "Obra limpa sem quebradeira ou sujeira", "Respeito às normas de fachada e regimento interno", "Drenagem correta para evitar infiltração nos vizinhos", "Split e multi-split para todos os cômodos", "Garantia de 1 ano na mão de obra"]} faq={[["Preciso de autorização do condomínio para instalar ar condicionado?", "Depende do regimento interno do condomínio. Para split hi-wall na varanda técnica, geralmente não precisa. Para instalação na fachada ou com furo externo, é necessário aprovação. Nossos técnicos conhecem as normas e orientam sobre o melhor caminho."], ["Como é feita a instalação em apartamento sem sujeira?", "Usamos o método Obra Limpa: proteção de pisos e móveis, aspiração contínua durante a perfuração e limpeza completa ao final. O apartamento fica exatamente como estava — só com o ar condicionado instalado."], ["Qual o melhor split para apartamento em SP?", "Para quartos, split hi-wall inverter de 9.000 a 12.000 BTUs é o ideal. Para salas maiores, 18.000 a 24.000 BTUs. Para múltiplos cômodos, o multi-split é mais elegante e econômico — uma única condensadora externa para várias evaporadoras."]  ]} vizinhos="Vila Mariana · Moema · Pinheiros · Itaim Bibi · Jardins · Higienópolis · Brooklin" navigate={navigate} />;
            if (p === '/ar-condicionado-residencial-sp') return <SegmentoView slug="residencial" title="Residencial" tag="RESIDENCIAL" headline="Ar Condicionado Residencial em São Paulo" desc="Soluções completas de ar condicionado residencial em São Paulo e ABC. Instalação, manutenção e higienização para casas e apartamentos." dor="O ar condicionado errado para o ambiente gasta mais energia e não refresca direito. Dimensionamento correto de BTUs é fundamental." servicos={["Cálculo de BTUs correto para cada ambiente", "Instalação de split, multi-split e VRF residencial", "Manutenção preventiva semestral", "Higienização profunda com bactericida", "Contratos de manutenção para toda a residência", "Atendimento em SP e ABC com visita gratuita"]} faq={[["Quantos BTUs preciso para minha residência?", "Cada ambiente tem um cálculo específico baseado em área, pé-direito, número de pessoas e exposição ao sol. Em geral: 9.000 BTUs para quartos de até 20m², 12.000 BTUs para quartos maiores e salas de até 25m², 18.000 a 24.000 BTUs para salas grandes. Fazemos o cálculo gratuitamente na visita técnica."], ["Qual a diferença entre split residencial e comercial?", "O split residencial tem menor potência, é mais silencioso e tem design mais discreto. O comercial suporta uso mais intenso e tem maior capacidade. Para residências, o inverter residencial é sempre a melhor escolha — mais econômico e silencioso."], ["Com que frequência fazer manutenção em residência?", "Para uso residencial normal, recomendamos manutenção a cada 6 meses. Em residências com animais de estimação ou muita poeira, a cada 3 a 4 meses. A limpeza dos filtros pode ser feita mensalmente pelo próprio morador."]  ]} vizinhos="Vila Mariana · Moema · Pinheiros · Perdizes · Santana · Tatuapé · SP e ABC" navigate={navigate} />;
            if (p === '/ar-condicionado-casa-sp') return <SegmentoView slug="casa" title="Casa" tag="RESIDENCIAL" headline="Ar Condicionado para Casa em São Paulo" desc="Instalação de ar condicionado em casas em São Paulo e ABC. Do quarto à sala, projeto completo com multi-split e VRF para toda a residência." dor="Casa grande com muitos cômodos precisa de projeto bem dimensionado. Instalação errada gera consumo alto e conforto insatisfatório." servicos={["Projeto completo para toda a casa", "Multi-split para múltiplos cômodos com uma condensadora", "VRF para casas de alto padrão", "Infraestrutura elétrica completa", "Instalação em casas em obras e reformas", "Garantia e manutenção pós-instalação"]} faq={[["Qual o melhor sistema para climatizar toda a casa?", "Para casas com 3 a 5 cômodos, o multi-split é a solução mais elegante: uma condensadora externa e evaporadoras em cada ambiente. Para casas maiores ou de alto padrão, o sistema VRF oferece controle individual de temperatura em cada cômodo e máxima eficiência."], ["É possível instalar ar condicionado em casa já pronta?", "Sim. Em casas já construídas, fazemos a instalação com tubulação de cobre aparente ou embutida, dependendo da preferência. O método Obra Limpa garante a instalação sem grandes transtornos."], ["Quanto custa climatizar uma casa completa em SP?", "Depende do número de cômodos e do sistema escolhido. Um multi-split para 3 ambientes com equipamentos e instalação começa a partir de R$ 8.000. Fazemos projeto e orçamento gratuito: (11) 96346-2516."]  ]} vizinhos="Morumbi · Brooklin · Campo Belo · Santo André · São Bernardo · São Caetano" navigate={navigate} />;
            if (p === '/instalacao-ar-condicionado-condominio-sp') return <SegmentoView slug="condominio-inst" title="Condomínio" tag="RESIDENCIAL" headline="Instalação de Ar Condicionado em Condomínio em SP" desc="Especialistas em instalação de ar condicionado em condomínios de São Paulo e ABC. Respeitamos o regimento, protegemos a fachada e garantimos vizinhança tranquila." dor="Instalação incorreta em condomínio pode gerar multa, acionamento do síndico e até obrigação de desfazer a obra. Escolha quem conhece as normas." servicos={["Conhecimento das normas ABNT para instalação em edifícios", "Instalação na varanda técnica sem danos à fachada", "Drenagem correta para não molhar vizinhos", "Proteção de áreas comuns durante a obra", "Documentação para aprovação do condomínio se necessário", "Atendimento em apartamentos e áreas comuns"]} faq={[["Posso instalar ar condicionado sem autorização do condomínio em SP?", "Para instalação padrão na varanda técnica com tubulação pelo shaft, geralmente não é necessária autorização prévia. Para qualquer alteração na fachada ou estrutura, a aprovação é obrigatória por lei. Nossos técnicos orientam sobre o processo correto."], ["O ar condicionado pode cair do edifício?", "Com instalação correta e suportes adequados, o risco é praticamente zero. Usamos suportes galvanizados de alta resistência e seguimos todas as normas de fixação. A condensadora deve ser instalada em área técnica ou varanda, nunca em local que ofereça risco."], ["Vocês atendem para instalação em condomínios fechados?", "Sim. Atendemos condomínios em SP e ABC. Nossos técnicos são identificados e uniformizados, facilitando o acesso pela portaria. Trabalhamos com proteção de pisos e elevadores nas áreas comuns."]  ]} vizinhos="Vila Mariana · Moema · Higienópolis · Jardins · Itaim Bibi · Brooklin · Pinheiros" navigate={navigate} />;
            if (p === '/assistencia-tecnica-ar-condicionado-sp') return <SegmentoView slug="assistencia-tecnica-ar-condicionado-sp" title="Assistência Técnica de Ar Condicionado em SP" tag="ASSISTÊNCIA TÉCNICA" headline="Assistência Técnica de Ar Condicionado em São Paulo" desc="Assistência técnica especializada em ar condicionado em São Paulo e ABC. Conserto, manutenção e instalação com técnicos certificados e garantia por escrito." dor="Assistência técnica não autorizada pode anular a garantia do fabricante. Verifique sempre as credenciais antes de contratar." servicos={["Assistência técnica para todas as marcas", "Conserto de compressor, placa e capacitor", "Recarga de gás refrigerante R410A e R32", "Manutenção preventiva e corretiva", "Instalação e reinstalação de equipamentos", "Atendimento residencial e comercial em SP e ABC"]} faq={[["A New Clima é assistência técnica autorizada?", "Somos uma empresa independente especializada em ar condicionado, atendendo todas as marcas com técnicos certificados. Para garantia de fábrica específica, consulte o fabricante."], ["Qual o prazo de atendimento da assistência técnica?", "Respondemos em até 2 horas e agendamos a visita conforme sua disponibilidade. Para urgências, tentamos atender no mesmo dia."], ["A assistência técnica atende fins de semana?", "Atendemos de segunda a sexta das 8h às 18h e sábados das 8h às 13h. Para emergências, nosso WhatsApp fica disponível fora do horário comercial."]  ]} vizinhos="Vila Mariana · Moema · Pinheiros · Itaim Bibi · Santana · Tatuapé · SP e ABC" navigate={navigate} />;
            if (p === '/ar-condicionado-escola-sp') return <SegmentoView slug="escola" title="Escola" tag="EDUCAÇÃO" headline="Ar Condicionado para Escolas em São Paulo" desc="Instalação e manutenção de ar condicionado para escolas, creches e universidades em SP. PMOC obrigatório e qualidade do ar para alunos e professores." dor="Sala de aula quente reduz concentração e rendimento. PMOC irregular pode resultar em interdição pela Vigilância Sanitária." servicos={["Instalação em salas de aula e áreas comuns", "Contrato PMOC para instituições de ensino", "Manutenção preventiva nas férias escolares", "Higienização com produtos seguros para crianças"]} faq={[["Escolas são obrigadas a ter PMOC?", "Sim. Instituições de ensino com sistema de ar condicionado acima de 60.000 BTUs são obrigadas pela Lei 13.589/18. O descumprimento pode resultar em interdição."], ["Qual o melhor horário para manutenção em escola?", "Realizamos a manutenção preferencialmente durante as férias escolares (janeiro e julho) para não impactar as aulas."], ["O ar condicionado pode piorar alergias das crianças?", "Um ar condicionado sem manutenção acumula fungos e ácaros. Com higienização regular, o ar condicionado melhora a qualidade do ar — especialmente em SP, com alto nível de poluição."]]} vizinhos="Vila Mariana · Moema · Brooklin · Santo André · São Bernardo" navigate={navigate} />;
            if (p === '/ar-condicionado-sao-paulo') return <SaoPauloRegion navigate={navigate} />;
            if (p === '/ar-condicionado-santo-andre') return <SantoAndreRegion navigate={navigate} />;
            if (p === '/ar-condicionado-sao-bernardo-do-campo') return <SaoBernardoRegion navigate={navigate} />;
            if (p === '/ar-condicionado-sao-caetano-do-sul') return <SaoCaetanoRegion navigate={navigate} />;
            if (p === '/ar-condicionado-diadema') return <DiademaMauaRegion regionName="Diadema" navigate={navigate} />;
            if (p === '/ar-condicionado-maua') return <DiademaMauaRegion regionName="Mauá" navigate={navigate} />;

            if (p === '/manutencao-ar-condicionado-santo-andre') return <SegmentoView slug="manutencao-santo-andre" title="Santo André" tag="MANUTENÇÃO" headline="Manutenção de Ar Condicionado em Santo André" desc="Manutenção preventiva e corretiva de ar condicionado em Santo André. Todas as marcas, peças originais e garantia por escrito. Respondemos em até 2 horas." dor="Ar condicionado sem manutenção consome até 30% mais energia e quebra antes do tempo. Em Santo André, a New Clima atende em até 2 horas — sem deixar você no calor." servicos={["Manutenção preventiva com checklist completo em Santo André", "Manutenção corretiva e diagnóstico de defeitos em Santo André", "Limpeza de filtros, serpentina e dreno", "Verificação de nível de gás refrigerante", "Contratos mensais, trimestrais ou anuais para Santo André", "Relatório técnico após cada visita"]} faq={[["Com que frequência fazer manutenção de ar condicionado em Santo André?", "Para uso residencial em Santo André, recomendamos a cada 6 meses. Para escritórios e comércios, a cada 3 meses. Sem manutenção, o aparelho gasta mais energia e quebra antes do tempo."], ["Quanto custa a manutenção de ar condicionado em Santo André?", "A manutenção preventiva começa a partir de R$ 120 por aparelho em Santo André. Contratos têm valor reduzido. Diagnóstico gratuito na primeira visita."], ["A New Clima faz manutenção de todas as marcas em Santo André?", "Sim. Atendemos LG, Samsung, Daikin, Midea, Fujitsu, Carrier, Elgin, Gree e outras marcas em Santo André e em toda a região do ABC Paulista."]]} vizinhos="Santo André · Santo André · São Bernardo · São Caetano · Diadema · Mauá" navigate={navigate} />;
            if (p === '/limpeza-ar-condicionado-santo-andre') return <SegmentoView slug="limpeza-santo-andre" title="Santo André" tag="LIMPEZA" headline="Limpeza de Ar Condicionado em Santo André" desc="Limpeza profunda (higienização) de ar condicionado em Santo André. Remove fungos, ácaros, bactérias e mau cheiro. Produto bactericida e garantia por escrito." dor="Ar condicionado sem limpeza acumula fungos e ácaros e joga tudo no ar que você respira. Em Santo André, o clima úmido acelera esse processo — recomendamos limpeza a cada 6 meses." servicos={["Limpeza profunda do evaporador e serpentina em Santo André", "Desobstrução do dreno — elimina gotejamento e mau cheiro", "Higienização com bactericida certificado", "Limpeza dos filtros e turbina do aparelho", "Limpeza e higienização de todas as marcas em Santo André", "Serviço sem montar e desmontar a instalação — mais rápido e seguro"]} faq={[["Com que frequência fazer limpeza de ar condicionado em Santo André?", "Recomendamos limpeza completa a cada 6 meses para uso residencial em Santo André. Para escritórios, restaurantes e clínicas, a cada 3 meses. Sem limpeza, o aparelho espalha fungos e ácaros no ar."], ["A limpeza resolve o mau cheiro do ar condicionado?", "Sim. O mau cheiro é causado por fungos e bactérias acumulados na serpentina e no dreno. A limpeza profunda com bactericida elimina a causa — não apenas mascara o cheiro."], ["Quanto custa a limpeza de ar condicionado em Santo André?", "A limpeza de um aparelho split em Santo André começa a partir de R$ 120. Para contratos com mais de um aparelho, temos valor especial. Orçamento gratuito pelo WhatsApp."]]} vizinhos="Santo André · Santo André · São Bernardo · São Caetano · Diadema · Mauá" navigate={navigate} />;
            if (p === '/pmoc-santo-andre') return <SegmentoView slug="pmoc-santo-andre" title="Santo André" tag="PMOC" headline="PMOC em Santo André — Contrato de Manutenção Obrigatório" desc="Elaboração e execução do PMOC (Plano de Manutenção, Operação e Controle) em Santo André. Obrigatório pela Lei 13.589/18 para empresas, condomínios, clínicas e escolas. Documentação completa e ART inclusa." dor="Empresa em Santo André sem PMOC pode ser autuada pela Vigilância Sanitária com multa de R$ 2.000 a R$ 1,5 milhão. O gestor responde pessoalmente — e a New Clima resolve tudo com documentação completa." servicos={["Elaboração do PMOC conforme a Lei 13.589/18 para Santo André", "Execução das manutenções preventivas com registro técnico", "Relatório técnico mensal ou trimestral para a Vigilância Sanitária", "ART (Anotação de Responsabilidade Técnica) inclusa no contrato", "Atendimento para empresas, condomínios, clínicas e escolas em Santo André", "Renovação e atualização de PMOC vencido ou irregular"]} faq={[["Quem é obrigado a ter PMOC em Santo André?", "Qualquer estabelecimento em Santo André com sistema de ar condicionado acima de 60.000 BTUs — empresas, condomínios, hospitais, clínicas, escolas, restaurantes e shoppings. A fiscalização é feita pela Vigilância Sanitária."], ["Quanto custa o PMOC em Santo André?", "O valor do PMOC em Santo André varia conforme o número de equipamentos e a frequência das visitas. Fazemos o levantamento gratuito e entregamos proposta no mesmo dia. Valores a partir de R$ 297/mês."], ["O que está incluído no contrato de PMOC em Santo André?", "Incluímos: elaboração do plano, execução das manutenções preventivas, relatório técnico após cada visita, ART do responsável técnico e toda a documentação exigida pela Vigilância Sanitária de Santo André."]]} vizinhos="Santo André · Santo André · São Bernardo · São Caetano · Diadema · Mauá · São Paulo" navigate={navigate} />;
            if (p === '/manutencao-ar-condicionado-sao-bernardo-do-campo') return <SegmentoView slug="manutencao-sao-bernardo" title="São Bernardo do Campo" tag="MANUTENÇÃO" headline="Manutenção de Ar Condicionado em São Bernardo do Campo" desc="Manutenção preventiva e corretiva de ar condicionado em São Bernardo do Campo. Todas as marcas, peças originais e garantia por escrito. Respondemos em até 2 horas." dor="Ar condicionado sem manutenção consome até 30% mais energia e quebra antes do tempo. Em São Bernardo do Campo, a New Clima atende em até 2 horas — sem deixar você no calor." servicos={["Manutenção preventiva com checklist completo em São Bernardo do Campo", "Manutenção corretiva e diagnóstico de defeitos em São Bernardo do Campo", "Limpeza de filtros, serpentina e dreno", "Verificação de nível de gás refrigerante", "Contratos mensais, trimestrais ou anuais para São Bernardo do Campo", "Relatório técnico após cada visita"]} faq={[["Com que frequência fazer manutenção de ar condicionado em São Bernardo do Campo?", "Para uso residencial em São Bernardo do Campo, recomendamos a cada 6 meses. Para escritórios e comércios, a cada 3 meses. Sem manutenção, o aparelho gasta mais energia e quebra antes do tempo."], ["Quanto custa a manutenção de ar condicionado em São Bernardo do Campo?", "A manutenção preventiva começa a partir de R$ 120 por aparelho em São Bernardo do Campo. Contratos têm valor reduzido. Diagnóstico gratuito na primeira visita."], ["A New Clima faz manutenção de todas as marcas em São Bernardo do Campo?", "Sim. Atendemos LG, Samsung, Daikin, Midea, Fujitsu, Carrier, Elgin, Gree e outras marcas em São Bernardo do Campo e em toda a região do ABC Paulista."]]} vizinhos="São Bernardo do Campo · Santo André · São Bernardo · São Caetano · Diadema · Mauá" navigate={navigate} />;
            if (p === '/limpeza-ar-condicionado-sao-bernardo-do-campo') return <SegmentoView slug="limpeza-sao-bernardo" title="São Bernardo do Campo" tag="LIMPEZA" headline="Limpeza de Ar Condicionado em São Bernardo do Campo" desc="Limpeza profunda (higienização) de ar condicionado em São Bernardo do Campo. Remove fungos, ácaros, bactérias e mau cheiro. Produto bactericida e garantia por escrito." dor="Ar condicionado sem limpeza acumula fungos e ácaros e joga tudo no ar que você respira. Em São Bernardo do Campo, o clima úmido acelera esse processo — recomendamos limpeza a cada 6 meses." servicos={["Limpeza profunda do evaporador e serpentina em São Bernardo do Campo", "Desobstrução do dreno — elimina gotejamento e mau cheiro", "Higienização com bactericida certificado", "Limpeza dos filtros e turbina do aparelho", "Limpeza e higienização de todas as marcas em São Bernardo do Campo", "Serviço sem montar e desmontar a instalação — mais rápido e seguro"]} faq={[["Com que frequência fazer limpeza de ar condicionado em São Bernardo do Campo?", "Recomendamos limpeza completa a cada 6 meses para uso residencial em São Bernardo do Campo. Para escritórios, restaurantes e clínicas, a cada 3 meses. Sem limpeza, o aparelho espalha fungos e ácaros no ar."], ["A limpeza resolve o mau cheiro do ar condicionado?", "Sim. O mau cheiro é causado por fungos e bactérias acumulados na serpentina e no dreno. A limpeza profunda com bactericida elimina a causa — não apenas mascara o cheiro."], ["Quanto custa a limpeza de ar condicionado em São Bernardo do Campo?", "A limpeza de um aparelho split em São Bernardo do Campo começa a partir de R$ 120. Para contratos com mais de um aparelho, temos valor especial. Orçamento gratuito pelo WhatsApp."]]} vizinhos="São Bernardo do Campo · Santo André · São Bernardo · São Caetano · Diadema · Mauá" navigate={navigate} />;
            if (p === '/pmoc-sao-bernardo-do-campo') return <SegmentoView slug="pmoc-sao-bernardo" title="São Bernardo do Campo" tag="PMOC" headline="PMOC em São Bernardo do Campo — Contrato de Manutenção Obrigatório" desc="Elaboração e execução do PMOC (Plano de Manutenção, Operação e Controle) em São Bernardo do Campo. Obrigatório pela Lei 13.589/18 para empresas, condomínios, clínicas e escolas. Documentação completa e ART inclusa." dor="Empresa em São Bernardo do Campo sem PMOC pode ser autuada pela Vigilância Sanitária com multa de R$ 2.000 a R$ 1,5 milhão. O gestor responde pessoalmente — e a New Clima resolve tudo com documentação completa." servicos={["Elaboração do PMOC conforme a Lei 13.589/18 para São Bernardo do Campo", "Execução das manutenções preventivas com registro técnico", "Relatório técnico mensal ou trimestral para a Vigilância Sanitária", "ART (Anotação de Responsabilidade Técnica) inclusa no contrato", "Atendimento para empresas, condomínios, clínicas e escolas em São Bernardo do Campo", "Renovação e atualização de PMOC vencido ou irregular"]} faq={[["Quem é obrigado a ter PMOC em São Bernardo do Campo?", "Qualquer estabelecimento em São Bernardo do Campo com sistema de ar condicionado acima de 60.000 BTUs — empresas, condomínios, hospitais, clínicas, escolas, restaurantes e shoppings. A fiscalização é feita pela Vigilância Sanitária."], ["Quanto custa o PMOC em São Bernardo do Campo?", "O valor do PMOC em São Bernardo do Campo varia conforme o número de equipamentos e a frequência das visitas. Fazemos o levantamento gratuito e entregamos proposta no mesmo dia. Valores a partir de R$ 297/mês."], ["O que está incluído no contrato de PMOC em São Bernardo do Campo?", "Incluímos: elaboração do plano, execução das manutenções preventivas, relatório técnico após cada visita, ART do responsável técnico e toda a documentação exigida pela Vigilância Sanitária de São Bernardo do Campo."]]} vizinhos="São Bernardo do Campo · Santo André · São Bernardo · São Caetano · Diadema · Mauá · São Paulo" navigate={navigate} />;
            if (p === '/manutencao-ar-condicionado-sao-caetano-do-sul') return <SegmentoView slug="manutencao-sao-caetano" title="São Caetano do Sul" tag="MANUTENÇÃO" headline="Manutenção de Ar Condicionado em São Caetano do Sul" desc="Manutenção preventiva e corretiva de ar condicionado em São Caetano do Sul. Todas as marcas, peças originais e garantia por escrito. Respondemos em até 2 horas." dor="Ar condicionado sem manutenção consome até 30% mais energia e quebra antes do tempo. Em São Caetano do Sul, a New Clima atende em até 2 horas — sem deixar você no calor." servicos={["Manutenção preventiva com checklist completo em São Caetano do Sul", "Manutenção corretiva e diagnóstico de defeitos em São Caetano do Sul", "Limpeza de filtros, serpentina e dreno", "Verificação de nível de gás refrigerante", "Contratos mensais, trimestrais ou anuais para São Caetano do Sul", "Relatório técnico após cada visita"]} faq={[["Com que frequência fazer manutenção de ar condicionado em São Caetano do Sul?", "Para uso residencial em São Caetano do Sul, recomendamos a cada 6 meses. Para escritórios e comércios, a cada 3 meses. Sem manutenção, o aparelho gasta mais energia e quebra antes do tempo."], ["Quanto custa a manutenção de ar condicionado em São Caetano do Sul?", "A manutenção preventiva começa a partir de R$ 120 por aparelho em São Caetano do Sul. Contratos têm valor reduzido. Diagnóstico gratuito na primeira visita."], ["A New Clima faz manutenção de todas as marcas em São Caetano do Sul?", "Sim. Atendemos LG, Samsung, Daikin, Midea, Fujitsu, Carrier, Elgin, Gree e outras marcas em São Caetano do Sul e em toda a região do ABC Paulista."]]} vizinhos="São Caetano do Sul · Santo André · São Bernardo · São Caetano · Diadema · Mauá" navigate={navigate} />;
            if (p === '/limpeza-ar-condicionado-sao-caetano-do-sul') return <SegmentoView slug="limpeza-sao-caetano" title="São Caetano do Sul" tag="LIMPEZA" headline="Limpeza de Ar Condicionado em São Caetano do Sul" desc="Limpeza profunda (higienização) de ar condicionado em São Caetano do Sul. Remove fungos, ácaros, bactérias e mau cheiro. Produto bactericida e garantia por escrito." dor="Ar condicionado sem limpeza acumula fungos e ácaros e joga tudo no ar que você respira. Em São Caetano do Sul, o clima úmido acelera esse processo — recomendamos limpeza a cada 6 meses." servicos={["Limpeza profunda do evaporador e serpentina em São Caetano do Sul", "Desobstrução do dreno — elimina gotejamento e mau cheiro", "Higienização com bactericida certificado", "Limpeza dos filtros e turbina do aparelho", "Limpeza e higienização de todas as marcas em São Caetano do Sul", "Serviço sem montar e desmontar a instalação — mais rápido e seguro"]} faq={[["Com que frequência fazer limpeza de ar condicionado em São Caetano do Sul?", "Recomendamos limpeza completa a cada 6 meses para uso residencial em São Caetano do Sul. Para escritórios, restaurantes e clínicas, a cada 3 meses. Sem limpeza, o aparelho espalha fungos e ácaros no ar."], ["A limpeza resolve o mau cheiro do ar condicionado?", "Sim. O mau cheiro é causado por fungos e bactérias acumulados na serpentina e no dreno. A limpeza profunda com bactericida elimina a causa — não apenas mascara o cheiro."], ["Quanto custa a limpeza de ar condicionado em São Caetano do Sul?", "A limpeza de um aparelho split em São Caetano do Sul começa a partir de R$ 120. Para contratos com mais de um aparelho, temos valor especial. Orçamento gratuito pelo WhatsApp."]]} vizinhos="São Caetano do Sul · Santo André · São Bernardo · São Caetano · Diadema · Mauá" navigate={navigate} />;
            if (p === '/pmoc-sao-caetano-do-sul') return <SegmentoView slug="pmoc-sao-caetano" title="São Caetano do Sul" tag="PMOC" headline="PMOC em São Caetano do Sul — Contrato de Manutenção Obrigatório" desc="Elaboração e execução do PMOC (Plano de Manutenção, Operação e Controle) em São Caetano do Sul. Obrigatório pela Lei 13.589/18 para empresas, condomínios, clínicas e escolas. Documentação completa e ART inclusa." dor="Empresa em São Caetano do Sul sem PMOC pode ser autuada pela Vigilância Sanitária com multa de R$ 2.000 a R$ 1,5 milhão. O gestor responde pessoalmente — e a New Clima resolve tudo com documentação completa." servicos={["Elaboração do PMOC conforme a Lei 13.589/18 para São Caetano do Sul", "Execução das manutenções preventivas com registro técnico", "Relatório técnico mensal ou trimestral para a Vigilância Sanitária", "ART (Anotação de Responsabilidade Técnica) inclusa no contrato", "Atendimento para empresas, condomínios, clínicas e escolas em São Caetano do Sul", "Renovação e atualização de PMOC vencido ou irregular"]} faq={[["Quem é obrigado a ter PMOC em São Caetano do Sul?", "Qualquer estabelecimento em São Caetano do Sul com sistema de ar condicionado acima de 60.000 BTUs — empresas, condomínios, hospitais, clínicas, escolas, restaurantes e shoppings. A fiscalização é feita pela Vigilância Sanitária."], ["Quanto custa o PMOC em São Caetano do Sul?", "O valor do PMOC em São Caetano do Sul varia conforme o número de equipamentos e a frequência das visitas. Fazemos o levantamento gratuito e entregamos proposta no mesmo dia. Valores a partir de R$ 297/mês."], ["O que está incluído no contrato de PMOC em São Caetano do Sul?", "Incluímos: elaboração do plano, execução das manutenções preventivas, relatório técnico após cada visita, ART do responsável técnico e toda a documentação exigida pela Vigilância Sanitária de São Caetano do Sul."]]} vizinhos="São Caetano do Sul · Santo André · São Bernardo · São Caetano · Diadema · Mauá · São Paulo" navigate={navigate} />;
            if (p === '/manutencao-ar-condicionado-diadema') return <SegmentoView slug="manutencao-diadema" title="Diadema" tag="MANUTENÇÃO" headline="Manutenção de Ar Condicionado em Diadema" desc="Manutenção preventiva e corretiva de ar condicionado em Diadema. Todas as marcas, peças originais e garantia por escrito. Respondemos em até 2 horas." dor="Ar condicionado sem manutenção consome até 30% mais energia e quebra antes do tempo. Em Diadema, a New Clima atende em até 2 horas — sem deixar você no calor." servicos={["Manutenção preventiva com checklist completo em Diadema", "Manutenção corretiva e diagnóstico de defeitos em Diadema", "Limpeza de filtros, serpentina e dreno", "Verificação de nível de gás refrigerante", "Contratos mensais, trimestrais ou anuais para Diadema", "Relatório técnico após cada visita"]} faq={[["Com que frequência fazer manutenção de ar condicionado em Diadema?", "Para uso residencial em Diadema, recomendamos a cada 6 meses. Para escritórios e comércios, a cada 3 meses. Sem manutenção, o aparelho gasta mais energia e quebra antes do tempo."], ["Quanto custa a manutenção de ar condicionado em Diadema?", "A manutenção preventiva começa a partir de R$ 120 por aparelho em Diadema. Contratos têm valor reduzido. Diagnóstico gratuito na primeira visita."], ["A New Clima faz manutenção de todas as marcas em Diadema?", "Sim. Atendemos LG, Samsung, Daikin, Midea, Fujitsu, Carrier, Elgin, Gree e outras marcas em Diadema e em toda a região do ABC Paulista."]]} vizinhos="Diadema · Santo André · São Bernardo · São Caetano · Diadema · Mauá" navigate={navigate} />;
            if (p === '/limpeza-ar-condicionado-diadema') return <SegmentoView slug="limpeza-diadema" title="Diadema" tag="LIMPEZA" headline="Limpeza de Ar Condicionado em Diadema" desc="Limpeza profunda (higienização) de ar condicionado em Diadema. Remove fungos, ácaros, bactérias e mau cheiro. Produto bactericida e garantia por escrito." dor="Ar condicionado sem limpeza acumula fungos e ácaros e joga tudo no ar que você respira. Em Diadema, o clima úmido acelera esse processo — recomendamos limpeza a cada 6 meses." servicos={["Limpeza profunda do evaporador e serpentina em Diadema", "Desobstrução do dreno — elimina gotejamento e mau cheiro", "Higienização com bactericida certificado", "Limpeza dos filtros e turbina do aparelho", "Limpeza e higienização de todas as marcas em Diadema", "Serviço sem montar e desmontar a instalação — mais rápido e seguro"]} faq={[["Com que frequência fazer limpeza de ar condicionado em Diadema?", "Recomendamos limpeza completa a cada 6 meses para uso residencial em Diadema. Para escritórios, restaurantes e clínicas, a cada 3 meses. Sem limpeza, o aparelho espalha fungos e ácaros no ar."], ["A limpeza resolve o mau cheiro do ar condicionado?", "Sim. O mau cheiro é causado por fungos e bactérias acumulados na serpentina e no dreno. A limpeza profunda com bactericida elimina a causa — não apenas mascara o cheiro."], ["Quanto custa a limpeza de ar condicionado em Diadema?", "A limpeza de um aparelho split em Diadema começa a partir de R$ 120. Para contratos com mais de um aparelho, temos valor especial. Orçamento gratuito pelo WhatsApp."]]} vizinhos="Diadema · Santo André · São Bernardo · São Caetano · Diadema · Mauá" navigate={navigate} />;
            if (p === '/pmoc-diadema') return <SegmentoView slug="pmoc-diadema" title="Diadema" tag="PMOC" headline="PMOC em Diadema — Contrato de Manutenção Obrigatório" desc="Elaboração e execução do PMOC (Plano de Manutenção, Operação e Controle) em Diadema. Obrigatório pela Lei 13.589/18 para empresas, condomínios, clínicas e escolas. Documentação completa e ART inclusa." dor="Empresa em Diadema sem PMOC pode ser autuada pela Vigilância Sanitária com multa de R$ 2.000 a R$ 1,5 milhão. O gestor responde pessoalmente — e a New Clima resolve tudo com documentação completa." servicos={["Elaboração do PMOC conforme a Lei 13.589/18 para Diadema", "Execução das manutenções preventivas com registro técnico", "Relatório técnico mensal ou trimestral para a Vigilância Sanitária", "ART (Anotação de Responsabilidade Técnica) inclusa no contrato", "Atendimento para empresas, condomínios, clínicas e escolas em Diadema", "Renovação e atualização de PMOC vencido ou irregular"]} faq={[["Quem é obrigado a ter PMOC em Diadema?", "Qualquer estabelecimento em Diadema com sistema de ar condicionado acima de 60.000 BTUs — empresas, condomínios, hospitais, clínicas, escolas, restaurantes e shoppings. A fiscalização é feita pela Vigilância Sanitária."], ["Quanto custa o PMOC em Diadema?", "O valor do PMOC em Diadema varia conforme o número de equipamentos e a frequência das visitas. Fazemos o levantamento gratuito e entregamos proposta no mesmo dia. Valores a partir de R$ 297/mês."], ["O que está incluído no contrato de PMOC em Diadema?", "Incluímos: elaboração do plano, execução das manutenções preventivas, relatório técnico após cada visita, ART do responsável técnico e toda a documentação exigida pela Vigilância Sanitária de Diadema."]]} vizinhos="Diadema · Santo André · São Bernardo · São Caetano · Diadema · Mauá · São Paulo" navigate={navigate} />;
            if (p === '/manutencao-ar-condicionado-maua') return <SegmentoView slug="manutencao-maua" title="Mauá" tag="MANUTENÇÃO" headline="Manutenção de Ar Condicionado em Mauá" desc="Manutenção preventiva e corretiva de ar condicionado em Mauá. Todas as marcas, peças originais e garantia por escrito. Respondemos em até 2 horas." dor="Ar condicionado sem manutenção consome até 30% mais energia e quebra antes do tempo. Em Mauá, a New Clima atende em até 2 horas — sem deixar você no calor." servicos={["Manutenção preventiva com checklist completo em Mauá", "Manutenção corretiva e diagnóstico de defeitos em Mauá", "Limpeza de filtros, serpentina e dreno", "Verificação de nível de gás refrigerante", "Contratos mensais, trimestrais ou anuais para Mauá", "Relatório técnico após cada visita"]} faq={[["Com que frequência fazer manutenção de ar condicionado em Mauá?", "Para uso residencial em Mauá, recomendamos a cada 6 meses. Para escritórios e comércios, a cada 3 meses. Sem manutenção, o aparelho gasta mais energia e quebra antes do tempo."], ["Quanto custa a manutenção de ar condicionado em Mauá?", "A manutenção preventiva começa a partir de R$ 120 por aparelho em Mauá. Contratos têm valor reduzido. Diagnóstico gratuito na primeira visita."], ["A New Clima faz manutenção de todas as marcas em Mauá?", "Sim. Atendemos LG, Samsung, Daikin, Midea, Fujitsu, Carrier, Elgin, Gree e outras marcas em Mauá e em toda a região do ABC Paulista."]]} vizinhos="Mauá · Santo André · São Bernardo · São Caetano · Diadema · Mauá" navigate={navigate} />;
            if (p === '/limpeza-ar-condicionado-maua') return <SegmentoView slug="limpeza-maua" title="Mauá" tag="LIMPEZA" headline="Limpeza de Ar Condicionado em Mauá" desc="Limpeza profunda (higienização) de ar condicionado em Mauá. Remove fungos, ácaros, bactérias e mau cheiro. Produto bactericida e garantia por escrito." dor="Ar condicionado sem limpeza acumula fungos e ácaros e joga tudo no ar que você respira. Em Mauá, o clima úmido acelera esse processo — recomendamos limpeza a cada 6 meses." servicos={["Limpeza profunda do evaporador e serpentina em Mauá", "Desobstrução do dreno — elimina gotejamento e mau cheiro", "Higienização com bactericida certificado", "Limpeza dos filtros e turbina do aparelho", "Limpeza e higienização de todas as marcas em Mauá", "Serviço sem montar e desmontar a instalação — mais rápido e seguro"]} faq={[["Com que frequência fazer limpeza de ar condicionado em Mauá?", "Recomendamos limpeza completa a cada 6 meses para uso residencial em Mauá. Para escritórios, restaurantes e clínicas, a cada 3 meses. Sem limpeza, o aparelho espalha fungos e ácaros no ar."], ["A limpeza resolve o mau cheiro do ar condicionado?", "Sim. O mau cheiro é causado por fungos e bactérias acumulados na serpentina e no dreno. A limpeza profunda com bactericida elimina a causa — não apenas mascara o cheiro."], ["Quanto custa a limpeza de ar condicionado em Mauá?", "A limpeza de um aparelho split em Mauá começa a partir de R$ 120. Para contratos com mais de um aparelho, temos valor especial. Orçamento gratuito pelo WhatsApp."]]} vizinhos="Mauá · Santo André · São Bernardo · São Caetano · Diadema · Mauá" navigate={navigate} />;
            if (p === '/pmoc-maua') return <SegmentoView slug="pmoc-maua" title="Mauá" tag="PMOC" headline="PMOC em Mauá — Contrato de Manutenção Obrigatório" desc="Elaboração e execução do PMOC (Plano de Manutenção, Operação e Controle) em Mauá. Obrigatório pela Lei 13.589/18 para empresas, condomínios, clínicas e escolas. Documentação completa e ART inclusa." dor="Empresa em Mauá sem PMOC pode ser autuada pela Vigilância Sanitária com multa de R$ 2.000 a R$ 1,5 milhão. O gestor responde pessoalmente — e a New Clima resolve tudo com documentação completa." servicos={["Elaboração do PMOC conforme a Lei 13.589/18 para Mauá", "Execução das manutenções preventivas com registro técnico", "Relatório técnico mensal ou trimestral para a Vigilância Sanitária", "ART (Anotação de Responsabilidade Técnica) inclusa no contrato", "Atendimento para empresas, condomínios, clínicas e escolas em Mauá", "Renovação e atualização de PMOC vencido ou irregular"]} faq={[["Quem é obrigado a ter PMOC em Mauá?", "Qualquer estabelecimento em Mauá com sistema de ar condicionado acima de 60.000 BTUs — empresas, condomínios, hospitais, clínicas, escolas, restaurantes e shoppings. A fiscalização é feita pela Vigilância Sanitária."], ["Quanto custa o PMOC em Mauá?", "O valor do PMOC em Mauá varia conforme o número de equipamentos e a frequência das visitas. Fazemos o levantamento gratuito e entregamos proposta no mesmo dia. Valores a partir de R$ 297/mês."], ["O que está incluído no contrato de PMOC em Mauá?", "Incluímos: elaboração do plano, execução das manutenções preventivas, relatório técnico após cada visita, ART do responsável técnico e toda a documentação exigida pela Vigilância Sanitária de Mauá."]]} vizinhos="Mauá · Santo André · São Bernardo · São Caetano · Diadema · Mauá · São Paulo" navigate={navigate} />;

            if (p === '/ar-condicionado-farmacia-sao-paulo') return <SegmentoView slug="seg-farmacia" title="Farmácia" tag="SAÚDE" headline="Ar Condicionado para Farmácias em São Paulo" desc="Instalação e manutenção de ar condicionado para farmácias em São Paulo e ABC. Temperatura controlada para medicamentos, PMOC conforme a ANVISA e atendimento sem fechar a loja." dor="Farmácia com temperatura acima de 25°C danifica medicamentos e pode gerar interdição pela ANVISA. O PMOC é exigido por lei — e a multa sai caro." servicos={["Instalação de ar condicionado com controle preciso de temperatura para farmácias", "Contrato de manutenção (PMOC) conforme normas da ANVISA", "Manutenção fora do horário de atendimento ao público", "Limpeza e higienização com produtos certificados", "Atendimento emergencial para farmácias em operação", "Documentação completa para Vigilância Sanitária"]} faq={[["Farmácias são obrigadas a ter contrato de manutenção do ar condicionado?", "Sim. Farmácias com sistema de ar condicionado são fiscalizadas pela ANVISA e Vigilância Sanitária, que exigem temperatura controlada e manutenção documentada (PMOC). A falta de manutenção pode resultar em interdição e perda de alvará."], ["Qual temperatura o ar condicionado deve manter em farmácias?", "A maioria dos medicamentos exige temperatura entre 15°C e 25°C. Produtos termolábeis podem precisar de temperatura ainda mais controlada. Instalamos sistemas com controle preciso conforme as normas da ANVISA."], ["A manutenção pode ser feita sem fechar a farmácia?", "Sim. Realizamos manutenção antes da abertura, após o fechamento ou em horário de menor movimento. A farmácia não precisa interromper o atendimento."]]} vizinhos="Vila Mariana · Moema · Pinheiros · Santana · Tatuapé · Santo André · São Bernardo" navigate={navigate} />;
            if (p === '/ar-condicionado-consultorio-odontologico-sao-paulo') return <SegmentoView slug="seg-odonto" title="Consultório Odontológico" tag="SAÚDE" headline="Ar Condicionado para Consultórios Odontológicos em São Paulo" desc="Instalação e manutenção de ar condicionado para consultórios odontológicos em São Paulo e ABC. Ar limpo, silencioso e temperatura controlada — PMOC conforme a Vigilância Sanitária." dor="Consultório odontológico sem ar condicionado adequado afasta paciente e pode ser autuado pela Vigilância Sanitária. PMOC irregular é multa na certa." servicos={["Instalação de ar condicionado silencioso para salas de atendimento", "Contrato de manutenção (PMOC) para consultórios obrigados pela lei", "Limpeza com bactericida — essencial para ambientes odontológicos", "Instalação fora do horário de consultas", "Filtros de alta eficiência para qualidade do ar", "Documentação completa para Vigilância Sanitária e CRO"]} faq={[["Consultório odontológico precisa de PMOC?", "Sim. Estabelecimentos de saúde com ar condicionado acima de 60.000 BTUs são obrigados pela Lei 13.589/18. Mesmo abaixo desse limite, a Vigilância Sanitária pode exigir manutenção documentada durante vistorias."], ["Qual o melhor ar condicionado para consultório odontológico?", "Recomendamos splits inverter de baixo ruído — menos de 26dB — para não atrapalhar o atendimento. O aparelho precisa manter temperatura estável sem criar correntes de ar diretas na área de trabalho do dentista."], ["Com que frequência fazer manutenção em consultório odontológico?", "Recomendamos a cada 3 meses para consultórios com alto volume de atendimentos. A limpeza profunda remove bactérias e garante o ar limpo exigido para ambientes de saúde."]]} vizinhos="Vila Mariana · Moema · Pinheiros · Higienópolis · Brooklin · Santo André · São Caetano" navigate={navigate} />;
            if (p === '/ar-condicionado-salao-beleza-sao-paulo') return <SegmentoView slug="seg-salao" title="Salão de Beleza" tag="BELEZA" headline="Ar Condicionado para Salões de Beleza e Barbearias em São Paulo" desc="Instalação e manutenção de ar condicionado para salões de beleza, barbearias e institutos de beleza em São Paulo e ABC. Ambiente fresco para clientes e profissionais, sem interromper o atendimento." dor="Salão quente afasta cliente e cansa profissional. Com químicas, tinturas e secadores ligados, o ambiente esquenta muito mais rápido — e o ar condicionado subdimensionado não dá conta." servicos={["Projeto correto de BTUs considerando calor de secadores e químicas", "Instalação de ar condicionado para salões de beleza em São Paulo", "Manutenção preventiva para manter o ambiente sempre fresco", "Limpeza frequente — fumaça de química contamina os filtros rapidamente", "Instalação e manutenção fora do horário de atendimento", "Atendimento emergencial para salões em operação"]} faq={[["Qual potência de ar condicionado para salão de beleza?", "Salões têm carga térmica alta por causa de secadores, chapinhas e produtos químicos. O cálculo padrão de BTUs por m² não é suficiente — fazemos um projeto específico considerando todos esses fatores gratuitamente."], ["Com que frequência limpar o ar condicionado de salão?", "Recomendamos limpeza a cada 2 a 3 meses. A fumaça de tinturas e produtos químicos contamina os filtros muito mais rápido que ambientes comuns. Filtro sujo reduz o resfriamento e pode espalhar odores."], ["Vocês instalam sem fechar o salão?", "Sim. Instalamos antes da abertura ou após o fechamento. Para manutenção rápida, podemos atender entre um cliente e outro se o espaço permitir."]]} vizinhos="Vila Mariana · Moema · Pinheiros · Tatuapé · Santana · Santo André · São Bernardo" navigate={navigate} />;
            if (p === '/ar-condicionado-supermercado-sao-paulo') return <SegmentoView slug="seg-supermercado" title="Supermercado" tag="VAREJO" headline="Ar Condicionado para Supermercados em São Paulo" desc="Instalação e manutenção de ar condicionado para supermercados, mercados e mercearias em São Paulo e ABC. Ambiente fresco para clientes e funcionários, contrato de manutenção e atendimento emergencial." dor="Supermercado quente perde cliente na entrada. Além do conforto, a Vigilância Sanitária exige temperatura controlada em áreas de alimentos — e o PMOC é a prova de que você está em dia." servicos={["Instalação de sistemas de alta capacidade para grandes áreas de venda", "Contrato de manutenção (PMOC) para supermercados obrigados pela lei", "Manutenção fora do horário de funcionamento", "Atendimento emergencial — supermercado não pode ficar sem ar", "Projeto técnico com cálculo correto para grandes volumes de pessoas", "Documentação para Vigilância Sanitária"]} faq={[["Supermercados precisam de PMOC?", "Supermercados com capacidade de ar condicionado acima de 60.000 BTUs são obrigados pela Lei 13.589/18. A maioria dos supermercados se enquadra nessa faixa. A Vigilância Sanitária fiscaliza — especialmente em áreas de manipulação de alimentos."], ["Quanto custa instalar ar condicionado em supermercado?", "O valor depende da metragem, pé-direito e sistema escolhido. Para supermercados médios, sistemas cassete de teto ou dutado são os mais indicados. Fazemos o projeto e orçamento gratuitamente."], ["E se o ar condicionado pifar durante o horário de pico?", "Temos atendimento emergencial com prioridade para estabelecimentos comerciais em operação. Respondemos em até 2 horas e tentamos resolver no mesmo dia."]]} vizinhos="Vila Mariana · Moema · Santana · Tatuapé · Santo André · São Bernardo · Diadema" navigate={navigate} />;
            if (p === '/ar-condicionado-data-center-sao-paulo') return <SegmentoView slug="seg-datacenter" title="Data Center" tag="TECNOLOGIA" headline="Ar Condicionado para Data Centers e Salas de Servidor em São Paulo" desc="Instalação e manutenção de ar condicionado para data centers, salas de servidores e CPDs em São Paulo e ABC. Temperatura controlada 24h, sistemas redundantes e atendimento emergencial." dor="Servidor superaquecido para, queima e leva dados junto. Sala de servidor sem temperatura controlada entre 18°C e 22°C é risco de perda total. Sem redundância, qualquer falha do ar condicionado é uma crise." servicos={["Instalação de ar condicionado de precisão para data centers e CPDs", "Sistemas redundantes — se um falha, o outro assume automaticamente", "Controle preciso de temperatura e umidade para ambientes críticos", "Manutenção preventiva mensal para ambientes críticos", "Atendimento emergencial prioritário para servidores em operação", "Projeto técnico específico para salas de servidor"]} faq={[["Qual temperatura ideal para sala de servidor?", "A ASHRAE recomenda entre 18°C e 27°C para entrada de ar nos equipamentos. O ideal para a maioria dos servidores é entre 18°C e 22°C. Instalamos sistemas com controle fino de temperatura e umidade."], ["Preciso de redundância no ar condicionado da sala de servidor?", "Sim. Para ambientes críticos, recomendamos sempre redundância — dois sistemas independentes onde, se um falhar, o outro assume automaticamente. O custo de um segundo sistema é muito menor que o prejuízo de uma parada."], ["Qual o prazo de atendimento emergencial para data center?", "Temos protocolo prioritário para ambientes críticos. Respondemos em até 1 hora e mobilizamos equipe imediatamente. Cada minuto com servidor superaquecido é risco real."]]} vizinhos="Itaim Bibi · Pinheiros · Vila Olímpia · Brooklin · Faria Lima · Santo André · São Bernardo" navigate={navigate} />;
            if (p === '/ar-condicionado-coworking-sao-paulo') return <SegmentoView slug="seg-coworking" title="Coworking" tag="COMERCIAL" headline="Ar Condicionado para Coworkings em São Paulo" desc="Instalação e manutenção de ar condicionado para coworkings, espaços compartilhados e escritórios flexíveis em São Paulo e ABC. Silencioso, eficiente e com contrato de manutenção." dor="Coworking quente ou barulhento perde cliente para o concorrente. Quem paga por uma mesa ou sala privativa espera conforto — e ar condicionado com defeito é avaliação negativa garantida." servicos={["Instalação de ar condicionado silencioso para áreas de coworking", "Controle de temperatura por sala ou zona para conforto personalizado", "Contrato de manutenção preventiva para coworkings", "Instalação e manutenção fora do horário de funcionamento", "PMOC para coworkings em prédios obrigados pela lei", "Atendimento rápido para espaços com alta ocupação"]} faq={[["Qual o melhor sistema de ar condicionado para coworking?", "Para coworkings com múltiplas salas, o sistema VRF ou multi-split permite controle individual de temperatura por ambiente. Para espaços abertos, cassetes de teto distribuem o ar uniformemente. Fazemos o projeto gratuitamente."], ["Com que frequência fazer manutenção em coworking?", "Recomendamos manutenção trimestral para coworkings com alta ocupação diária. O alto fluxo de pessoas gera mais calor e contamina os filtros mais rápido que ambientes convencionais."], ["Coworking precisa de PMOC?", "Coworkings em prédios comerciais com capacidade acima de 60.000 BTUs são obrigados pela Lei 13.589/18. A maioria dos espaços em São Paulo se enquadra nessa faixa."]]} vizinhos="Itaim Bibi · Pinheiros · Jardins · Vila Olímpia · Brooklin · Faria Lima · Higienópolis" navigate={navigate} />;
            if (p === '/ar-condicionado-igreja-sao-paulo') return <SegmentoView slug="seg-igreja" title="Igreja e Templo" tag="RELIGIOSO" headline="Ar Condicionado para Igrejas e Templos em São Paulo" desc="Instalação e manutenção de ar condicionado para igrejas, templos e centros religiosos em São Paulo e ABC. Sistemas silenciosos para não atrapalhar os cultos e instalação em pé-direito alto." dor="Igreja lotada no verão de São Paulo sem ar condicionado afasta fiéis. O calor em ambientes com muitas pessoas e pé-direito alto é um desafio técnico — e o aparelho errado não refresca ou faz barulho durante o culto." servicos={["Projeto específico para igrejas com pé-direito alto e grande volume de pessoas", "Sistemas silenciosos que não interferem nos cultos e pregações", "Instalação em igrejas residenciais, médias e grandes templos", "Manutenção preventiva programada para não atrapalhar a programação religiosa", "Todas as marcas e modelos instalados e mantidos em São Paulo e ABC", "Atendimento em São Paulo e todo o ABC Paulista"]} faq={[["Qual ar condicionado é ideal para igrejas com pé-direito alto?", "Igrejas com pé-direito acima de 4 metros precisam de sistemas específicos — cassete de teto, piso-teto ou dutado são os mais indicados. O cálculo de BTUs é diferente do residencial. Fazemos o projeto gratuitamente."], ["O ar condicionado vai fazer barulho durante o culto?", "Selecionamos equipamentos com baixo nível de ruído — abaixo de 30dB para igrejas menores e sistemas dutados para grandes templos, onde o equipamento fica fora do salão principal. Silêncio garantido durante os cultos."], ["Vocês atendem igrejas de todos os tamanhos?", "Sim. Atendemos desde igrejas residenciais convertidas até grandes templos com capacidade para milhares de pessoas. O projeto é adaptado para cada espaço e denominação."]]} vizinhos="São Paulo · Santo André · São Bernardo · São Caetano · Diadema · Mauá · ABC Paulista" navigate={navigate} />;
            if (p === '/ar-condicionado-laboratorio-sao-paulo') return <SegmentoView slug="seg-laboratorio" title="Laboratório" tag="SAÚDE" headline="Ar Condicionado para Laboratórios em São Paulo" desc="Instalação e manutenção de ar condicionado para laboratórios de análises clínicas, pesquisa e estética em São Paulo e ABC. Temperatura e umidade controladas, PMOC conforme ANVISA e documentação completa." dor="Laboratório sem temperatura controlada compromete resultados de exames e amostras. A ANVISA fiscaliza rigorosamente — e a interdição por irregularidade no ar condicionado é mais comum do que parece." servicos={["Instalação de ar condicionado com controle preciso de temperatura e umidade", "Contrato de manutenção (PMOC) para laboratórios conforme normas da ANVISA", "Filtros de alta eficiência para ambientes que exigem ar limpo", "Limpeza e higienização com bactericida certificado", "Documentação completa para ANVISA e Vigilância Sanitária", "Atendimento emergencial para laboratórios em operação"]} faq={[["Laboratórios são obrigados a ter PMOC?", "Sim. Laboratórios de análises clínicas são estabelecimentos de saúde sujeitos à fiscalização da ANVISA e Vigilância Sanitária. O PMOC é exigido para comprovar manutenção regular e garantir a qualidade do ar nos ambientes de coleta e análise."], ["Que tipo de filtro usar no ar condicionado de laboratório?", "Dependendo do tipo de laboratório, recomendamos filtros de alta eficiência para garantir a qualidade do ar nos ambientes de análise. O projeto é feito conforme as normas aplicáveis ao tipo de laboratório."], ["Quanto custa manutenção de ar condicionado para laboratório?", "O valor depende do número de equipamentos e da frequência de visitas. Para laboratórios, recomendamos manutenção trimestral ou bimensal. Fazemos o levantamento e orçamento gratuitamente."]]} vizinhos="Vila Mariana · Moema · Higienópolis · Pinheiros · Santo André · São Caetano · São Bernardo" navigate={navigate} />;
            if (p === '/ar-condicionado-pet-shop-sao-paulo') return <SegmentoView slug="seg-petshop" title="Pet Shop" tag="PET" headline="Ar Condicionado para Pet Shops e Clínicas Veterinárias em São Paulo" desc="Instalação e manutenção de ar condicionado para pet shops, clínicas veterinárias e banho e tosa em São Paulo e ABC. Temperatura controlada para animais, ar limpo e manutenção frequente." dor="Animal com calor fica estressado e pode passar mal. Pet shop ou clínica quente perde cliente — e tutor que vê o pet sofrendo não volta. Temperatura ideal entre 18°C e 24°C é essencial para o bem-estar animal." servicos={["Instalação de ar condicionado com temperatura ideal para animais", "Limpeza frequente — pelo e dander de animais contaminam filtros rapidamente", "Controle de odores com higienização com bactericida", "Contrato de manutenção para pet shops e clínicas veterinárias", "Instalação silenciosa para não estressar os animais", "Atendimento em São Paulo e ABC Paulista"]} faq={[["Qual temperatura ideal para pet shop e clínica veterinária?", "Para o conforto e saúde dos animais, recomendamos manter entre 18°C e 24°C. Temperatura muito baixa pode causar hipotermia em animais pequenos ou recém-banhados — o controle preciso é fundamental."], ["Com que frequência limpar o ar condicionado de pet shop?", "Recomendamos limpeza mensal ou bimensal. Pelo e dander de animais obstruem os filtros muito mais rápido que ambientes comuns. Filtro sujo reduz o resfriamento e pode causar mau cheiro no ambiente."], ["O ruído do ar condicionado pode estressar os animais?", "Sim. Selecionamos equipamentos de baixo ruído para ambientes com animais — especialmente para salas de recuperação e internação em clínicas veterinárias."]]} vizinhos="Vila Mariana · Moema · Pinheiros · Santana · Tatuapé · Santo André · São Bernardo" navigate={navigate} />;
            if (p === '/ar-condicionado-clinica-estetica-sao-paulo') return <SegmentoView slug="seg-estetica" title="Clínica de Estética" tag="ESTÉTICA" headline="Ar Condicionado para Clínicas de Estética em São Paulo" desc="Instalação e manutenção de ar condicionado para clínicas de estética, dermatologia e bem-estar em São Paulo e ABC. Ambiente climatizado, silencioso e PMOC conforme a Vigilância Sanitária." dor="Clínica de estética quente afasta cliente premium. Quem paga por procedimentos estéticos espera um ambiente impecável — e ar condicionado com defeito ou barulhento é incompatível com a experiência que você vende." servicos={["Instalação de ar condicionado silencioso para salas de procedimento estético", "Controle preciso de temperatura para conforto durante os tratamentos", "Contrato de manutenção (PMOC) para clínicas obrigadas pela Vigilância Sanitária", "Limpeza com bactericida para ambientes de saúde e estética", "Instalação discreta para manter a identidade visual da clínica", "Atendimento fora do horário de atendimento aos clientes"]} faq={[["Clínica de estética precisa de PMOC?", "Clínicas de estética são fiscalizadas pela Vigilância Sanitária, que pode exigir manutenção documentada do ar condicionado. Estabelecimentos com capacidade acima de 60.000 BTUs são obrigados pela Lei 13.589/18."], ["Qual ar condicionado é mais adequado para sala de procedimento estético?", "Recomendamos splits inverter de baixo ruído ou cassete de teto com direcionamento suave de ar. O equipamento precisa manter temperatura estável sem criar correntes de ar diretas sobre o cliente durante os procedimentos."], ["A instalação vai comprometer a decoração da clínica?", "Trabalhamos com instalação discreta, passagem de tubulação embutida e posicionamento estratégico dos equipamentos para não comprometer a estética do ambiente."]]} vizinhos="Vila Mariana · Moema · Jardins · Itaim Bibi · Higienópolis · Pinheiros · Brooklin" navigate={navigate} />;
            if (p === '/ar-condicionado-loja-varejo-sao-paulo') return <SegmentoView slug="seg-loja" title="Loja e Varejo" tag="VAREJO" headline="Ar Condicionado para Lojas e Varejo em São Paulo" desc="Instalação e manutenção de ar condicionado para lojas de roupas, calçados, eletrônicos e varejo em geral em São Paulo e ABC. Ambiente fresco que convida o cliente a entrar e ficar mais tempo." dor="Loja quente perde venda. Pesquisas mostram que cliente em ambiente confortável fica mais tempo e gasta mais. Ar condicionado quebrado em dia de calor pode fechar as portas mais cedo." servicos={["Instalação de ar condicionado para lojas de varejo em São Paulo", "Sistemas silenciosos que não atrapalham o atendimento ao cliente", "Manutenção preventiva para nunca ficar sem ar na hora do pico", "Instalação fora do horário comercial para não fechar a loja", "Atendimento emergencial para lojas em operação", "Contrato de manutenção para redes de varejo em São Paulo"]} faq={[["Qual ar condicionado é melhor para loja de varejo?", "Depende do tamanho e layout. Para lojas pequenas, split hi-wall inverter. Para lojas maiores com pé-direito alto, cassete de teto distribui o ar uniformemente sem criar zonas frias. Fazemos o projeto gratuitamente."], ["Com que frequência fazer manutenção em loja?", "Recomendamos manutenção semestral para lojas com uso normal. Em shoppings ou áreas com ar-condicionado central, pode ser necessário seguir o cronograma do condomínio comercial."], ["Vocês atendem redes com várias lojas em São Paulo?", "Sim. Temos contratos para redes com múltiplas unidades em São Paulo e ABC. Um único contrato para todas as lojas com cronograma de manutenção coordenado."]]} vizinhos="Pinheiros · Jardins · Itaim Bibi · Tatuapé · Santana · Brooklin · Santo André" navigate={navigate} />;
            if (p === '/ar-condicionado-banco-financeira-sao-paulo') return <SegmentoView slug="seg-banco" title="Banco e Financeira" tag="FINANCEIRO" headline="Ar Condicionado para Bancos e Financeiras em São Paulo" desc="Instalação e manutenção de ar condicionado para agências bancárias, financeiras e cooperativas de crédito em São Paulo e ABC. PMOC obrigatório, manutenção contratada e atendimento emergencial." dor="Agência bancária sem ar condicionado gera fila estressante e reclamação. PMOC irregular em banco pode resultar em notificação do Banco Central e Vigilância Sanitária." servicos={["Contrato de manutenção (PMOC) para agências bancárias obrigadas por lei", "Manutenção preventiva com relatório técnico para auditoria interna", "Instalação e substituição de equipamentos em agências", "Atendimento emergencial para agências em operação", "Manutenção fora do horário de atendimento ao público", "Documentação completa para Vigilância Sanitária"]} faq={[["Bancos são obrigados a ter PMOC?", "Sim. Agências bancárias com sistema de ar condicionado acima de 60.000 BTUs são obrigadas pela Lei 13.589/18. A maioria das agências se enquadra nessa faixa. Além da Vigilância Sanitária, auditorias internas frequentemente exigem o PMOC em dia."], ["Vocês atendem redes de agências em São Paulo?", "Sim. Temos contratos para redes bancárias com múltiplas agências em São Paulo e ABC. Coordenamos o cronograma de manutenção para mínimo de impacto operacional."], ["A manutenção pode ser feita fora do horário bancário?", "Sim. Realizamos a manutenção antes da abertura ou após o fechamento da agência. Para emergências, temos protocolo de atendimento durante o expediente com mínima interrupção."]]} vizinhos="Centro · Paulista · Itaim Bibi · Pinheiros · Santana · Santo André · São Bernardo" navigate={navigate} />;
            if (p === '/ar-condicionado-padaria-sao-paulo') return <SegmentoView slug="seg-padaria" title="Padaria e Confeitaria" tag="ALIMENTAÇÃO" headline="Ar Condicionado para Padarias e Confeitarias em São Paulo" desc="Instalação e manutenção de ar condicionado para padarias, confeitarias e cafeterias em São Paulo e ABC. Ambiente fresco para clientes e funcionários, limpeza frequente e manutenção sem fechar a padaria." dor="Padaria quente afasta cliente e cansa padeiro. O calor dos fornos eleva muito a temperatura — e o ar condicionado subdimensionado não consegue compensar. Resultado: ambiente abafado, produto que não vende." servicos={["Projeto com cálculo correto de BTUs considerando o calor dos fornos", "Instalação de ar condicionado para a área de atendimento e produção", "Limpeza frequente — vapor e gordura contaminam filtros rapidamente", "Contrato de manutenção (PMOC) para padarias com mais de 60.000 BTUs", "Manutenção fora do horário de funcionamento", "Atendimento emergencial para padarias em operação"]} faq={[["Qual potência de ar condicionado para padaria?", "Padarias têm carga térmica muito alta por causa dos fornos e da produção. O cálculo é diferente do convencional — fazemos o projeto gratuitamente, considerando a área de atendimento e a área de produção separadamente."], ["Com que frequência limpar o ar condicionado de padaria?", "Recomendamos limpeza mensal ou bimensal. O vapor de pão, gordura e umidade da produção contaminam os filtros muito mais rápido. Filtro entupido em padaria reduz o resfriamento e pode criar mau cheiro."], ["O ar condicionado pode funcionar perto dos fornos?", "As evaporadoras ficam na área de atendimento — longe dos fornos. A condensadora é instalada em área externa. O projeto leva em conta a separação entre a área de produção e a área de atendimento ao cliente."]]} vizinhos="Vila Mariana · Moema · Pinheiros · Santana · Tatuapé · Santo André · São Bernardo" navigate={navigate} />;
            if (p === '/ar-condicionado-concessionaria-sao-paulo') return <SegmentoView slug="seg-concessionaria" title="Concessionária" tag="AUTOMOTIVO" headline="Ar Condicionado para Concessionárias de Veículos em São Paulo" desc="Instalação e manutenção de ar condicionado para concessionárias de carros, motos e caminhões em São Paulo e ABC. Showroom climatizado, área administrativa confortável e contrato de manutenção." dor="Showroom quente afasta comprador. Cliente que vai comprar um carro quer um ambiente agradável para negociar — e showroom abafado prejudica a experiência de venda e a decisão de compra." servicos={["Instalação de ar condicionado para showroom de concessionária", "Climatização da área administrativa e de atendimento ao cliente", "Contrato de manutenção preventiva para concessionárias", "Instalação fora do horário de atendimento", "Sistemas de alta capacidade para grandes salões de exposição", "Atendimento em São Paulo e ABC Paulista"]} faq={[["Qual sistema de ar condicionado para showroom grande?", "Para showrooms com mais de 200m², recomendamos sistemas cassete de teto ou dutado — distribuem o ar uniformemente sem criar zonas frias ou quentes. O projeto leva em conta pé-direito, número de veículos expostos e fluxo de clientes."], ["O ar condicionado suporta o calor dos veículos no showroom?", "Sim, desde que o projeto seja feito corretamente. Veículos emitem calor e o dimensionamento precisa levar isso em conta. Fazemos o projeto gratuito com cálculo de carga térmica específico para concessionárias."], ["Vocês atendem a área administrativa também?", "Sim. Instalamos e mantemos ar condicionado na área administrativa, de vendas e de atendimento. Para a oficina mecânica, trabalhamos com sistemas de ventilação e climatização adequados ao ambiente."]]} vizinhos="Santo André · São Bernardo · São Caetano · Diadema · Mauá · Tatuapé · Santana" navigate={navigate} />;
            if (p === '/ar-condicionado-escritorio-advocacia-sao-paulo') return <SegmentoView slug="seg-advocacia" title="Escritório de Advocacia" tag="JURÍDICO" headline="Ar Condicionado para Escritórios de Advocacia em São Paulo" desc="Instalação e manutenção de ar condicionado para escritórios de advocacia, contabilidade e consultoria em São Paulo e ABC. Silencioso, temperatura ideal para produtividade e PMOC quando exigido." dor="Escritório de advocacia com ar condicionado barulhento prejudica a concentração e a imagem do escritório. Ambiente inadequado afeta produtividade e pode custar clientes importantes." servicos={["Instalação de ar condicionado silencioso para salas de reunião e atendimento", "Controle de temperatura por sala para conforto de advogados e clientes", "Contrato de manutenção preventiva para escritórios em prédios comerciais", "PMOC para prédios obrigados pela Lei 13.589/18", "Instalação e manutenção fora do horário de expediente", "Atendimento em São Paulo e ABC Paulista"]} faq={[["Escritório de advocacia precisa de PMOC?", "Escritórios em prédios comerciais com capacidade de ar condicionado acima de 60.000 BTUs são obrigados pela Lei 13.589/18. A maioria dos prédios comerciais em São Paulo se enquadra nessa faixa — e o contrato de manutenção do escritório pode ser exigido pelo condomínio comercial."], ["Qual ar condicionado é ideal para sala de reunião?", "Para salas de reunião, recomendamos splits inverter de baixo ruído ou cassete de teto com controle individual. O silêncio durante reuniões é fundamental — selecionamos equipamentos abaixo de 26dB."], ["A manutenção pode ser feita sem atrapalhar o expediente?", "Sim. Realizamos manutenção antes do início do expediente, no horário de almoço ou após o fechamento. Para emergências, temos atendimento durante o horário comercial com mínima interrupção."]]} vizinhos="Itaim Bibi · Pinheiros · Jardins · Paulista · Higienópolis · Centro · Brooklin" navigate={navigate} />;
            if (p === '/ar-condicionado-consultorio-psicologia-sao-paulo') return <SegmentoView slug="seg-psicologia" title="Consultório de Psicologia" tag="SAÚDE" headline="Ar Condicionado para Consultórios de Psicologia em São Paulo" desc="Instalação e manutenção de ar condicionado para consultórios de psicologia, psiquiatria e terapia em São Paulo e ABC. Silencioso, discreto e com temperatura que favorece o conforto do paciente durante a sessão." dor="Ar condicionado barulhento em consultório de psicologia quebra o sigilo e prejudica a sessão. Temperatura inadequada deixa o paciente desconfortável — e ambiente ruim afeta o vínculo terapêutico." servicos={["Instalação de ar condicionado ultrasilencioso para consultórios de psicologia", "Equipamentos que não interferem na privacidade da sessão", "Controle preciso de temperatura para conforto do paciente", "Contrato de manutenção preventiva para consultórios", "Instalação discreta sem comprometer a privacidade e a acústica", "Atendimento fora do horário de consultas"]} faq={[["Qual nível de ruído é aceitável para consultório de psicologia?", "Recomendamos equipamentos com menos de 20dB para consultórios de psicologia e terapia. Alguns modelos split inverter chegam a 19dB — praticamente imperceptível durante a sessão."], ["O ar condicionado pode comprometer o sigilo da sessão?", "Um equipamento bem instalado e silencioso não interfere no sigilo. O ruído suave e constante pode até ajudar a isolar o som da sessão de ambientes externos. O importante é que não crie barulho intermitente que distraia."], ["Qual temperatura manter no consultório?", "Entre 22°C e 24°C é o ideal para a maioria dos pacientes — confortável sem ser frio demais. O paciente precisa se sentir à vontade para falar, e a temperatura do ambiente contribui para isso."]]} vizinhos="Vila Mariana · Moema · Pinheiros · Higienópolis · Jardins · Itaim Bibi · Brooklin" navigate={navigate} />;
            if (p === '/ar-condicionado-clinica-fisioterapia-sao-paulo') return <SegmentoView slug="seg-fisioterapia" title="Clínica de Fisioterapia" tag="SAÚDE" headline="Ar Condicionado para Clínicas de Fisioterapia em São Paulo" desc="Instalação e manutenção de ar condicionado para clínicas de fisioterapia, pilates clínico e reabilitação em São Paulo e ABC. Temperatura ideal para tratamento, PMOC e ar limpo para pacientes." dor="Clínica de fisioterapia quente prejudica o tratamento e o conforto do paciente. Além do desconforto, a Vigilância Sanitária fiscaliza clínicas de saúde — e PMOC irregular é autuação na certa." servicos={["Instalação de ar condicionado para salas de fisioterapia e pilates clínico", "Temperatura controlada entre 22°C e 26°C para tratamentos", "Contrato de manutenção (PMOC) para clínicas de saúde obrigadas por lei", "Limpeza com bactericida para ambientes de tratamento", "Instalação fora do horário de atendimento aos pacientes", "Documentação para Vigilância Sanitária"]} faq={[["Clínica de fisioterapia precisa de PMOC?", "Sim. Clínicas de fisioterapia são estabelecimentos de saúde sujeitos à fiscalização da Vigilância Sanitária. Com capacidade acima de 60.000 BTUs, o PMOC é obrigatório pela Lei 13.589/18."], ["Qual temperatura ideal para sala de fisioterapia?", "Para a maioria dos tratamentos, entre 22°C e 26°C é ideal — confortável para o paciente durante os exercícios sem ser frio demais para quem está em repouso ou com exposição de membros."], ["Com que frequência fazer manutenção em clínica de fisioterapia?", "Recomendamos manutenção trimestral para clínicas com alto volume de pacientes. O exercício físico gera mais calor e umidade — o que contamina os filtros mais rápido que ambientes de repouso."]]} vizinhos="Vila Mariana · Moema · Pinheiros · Brooklin · Higienópolis · Santo André · São Caetano" navigate={navigate} />;
            if (p === '/ar-condicionado-creche-sao-paulo') return <SegmentoView slug="seg-creche" title="Creche e Berçário" tag="EDUCAÇÃO" headline="Ar Condicionado para Creches e Berçários em São Paulo" desc="Instalação e manutenção de ar condicionado para creches, berçários e educação infantil em São Paulo e ABC. Produtos seguros para bebês, temperatura controlada e PMOC conforme a Vigilância Sanitária." dor="Bebê com calor chora, fica agitado e fica doente com mais facilidade. Creche sem temperatura controlada pode ser interditada pela Vigilância Sanitária — e pai que vê o filho com calor não renova a matrícula." servicos={["Instalação de ar condicionado com temperatura ideal para bebês e crianças", "Produtos de limpeza 100% seguros para ambientes com bebês", "Contrato de manutenção (PMOC) para creches obrigadas pela lei", "Instalação e manutenção nas férias escolares para não afetar as turmas", "Filtros de alta eficiência para qualidade do ar em ambiente infantil", "Documentação para Vigilância Sanitária e Secretaria de Educação"]} faq={[["Qual temperatura ideal para berçário e creche?", "Para bebês, a temperatura ideal é entre 23°C e 26°C — confortável sem ser frio demais para recém-nascidos e bebês pequenos. O controle preciso é mais importante em creches do que em qualquer outro ambiente."], ["Os produtos de limpeza são seguros para bebês?", "Sim. Usamos apenas produtos bactericidas certificados e seguros para ambientes com crianças pequenas e bebês. O processo de higienização é adaptado para ambientes de educação infantil."], ["Creches são obrigadas a ter PMOC?", "Sim. Creches com capacidade de ar condicionado acima de 60.000 BTUs são obrigadas pela Lei 13.589/18. Além disso, a Vigilância Sanitária e a Secretaria de Educação podem exigir manutenção documentada durante vistorias."]]} vizinhos="Vila Mariana · Moema · Pinheiros · Santana · Brooklin · Santo André · São Bernardo" navigate={navigate} />;
            if (p === '/ar-condicionado-bar-pub-sao-paulo') return <SegmentoView slug="seg-bar" title="Bar e Pub" tag="ENTRETENIMENTO" headline="Ar Condicionado para Bares e Pubs em São Paulo" desc="Instalação e manutenção de ar condicionado para bares, pubs e casas noturnas em São Paulo e ABC. Ambiente fresco para a clientela, manutenção fora do horário de funcionamento e atendimento emergencial." dor="Bar quente no verão de São Paulo perde cliente para o concorrente da esquina. Com muita gente e bebida, a temperatura sobe muito — e o ar condicionado subdimensionado não consegue refrescar." servicos={["Projeto com cálculo correto de BTUs para ambientes com alta ocupação noturna", "Instalação de ar condicionado para bares, pubs e casas noturnas", "Manutenção antes da abertura ou após o fechamento do estabelecimento", "Limpeza frequente — fumaça e umidade contaminam filtros rapidamente", "Atendimento emergencial para não perder a noite de movimento", "Contrato de manutenção (PMOC) para bares com mais de 60.000 BTUs"]} faq={[["Qual potência de ar condicionado para bar?", "Bares com alta ocupação precisam de muito mais BTUs do que o cálculo convencional indica. Pessoas em pé geram muito mais calor que pessoas sentadas. Fazemos o cálculo específico gratuitamente."], ["A manutenção pode ser feita sem fechar o bar?", "Sim. Realizamos manutenção antes da abertura — geralmente entre 10h e 16h — para que o bar esteja funcionando perfeitamente quando abrir. Para emergências, temos atendimento mesmo durante o funcionamento."], ["Com que frequência fazer manutenção em bar?", "Recomendamos manutenção mensal ou bimensal. Fumaça, umidade e o alto fluxo de pessoas deterioram os filtros muito mais rápido que em outros ambientes. Manutenção em dia garante o ambiente fresco nas noites mais quentes."]]} vizinhos="Pinheiros · Vila Madalena · Itaim Bibi · Brooklin · Vila Olímpia · Jardins · Moema" navigate={navigate} />;
            if (p === '/servicos') return <ServicosView navigate={navigate} />;
            if (p === '/instalacao-ar-condicionado-split-sp') return <SegmentoView slug="inst-split" title="Instalação Split SP" tag="INSTALAÇÃO" headline="Instalação de Ar Condicionado Split em São Paulo" desc="Instalação de ar condicionado split em São Paulo e ABC. Residencial e comercial, todas as marcas, obra limpa e garantia de 1 ano por escrito. Visita técnica gratuita." dor="Instalação errada de split causa vazamento de gás, gotejamento e curto-circuito. Técnico sem certificação pode anular a garantia do fabricante — e o problema aparece meses depois." servicos={["Instalação de split hi-wall em apartamentos e casas em São Paulo", "Instalação com infraestrutura elétrica e hidráulica completa", "Obra limpa — proteção de pisos e móveis, aspiração durante perfurações", "Instalação respeitando normas de condomínio e fachada", "Teste de funcionamento completo antes de finalizar", "Garantia de 1 ano na instalação por escrito"]} faq={[["Quanto custa instalar um split em São Paulo?", "A instalação de split residencial padrão em SP começa a partir de R$ 350. O valor varia conforme a complexidade da infraestrutura e a distância entre as unidades. Visita técnica gratuita e orçamento no mesmo dia."], ["Quanto tempo leva a instalação de um split?", "Uma instalação padrão leva entre 3 e 5 horas. Para multi-split com vários ambientes, pode levar 1 a 2 dias. O cronograma é informado no orçamento antes de começar."], ["A instalação inclui a infraestrutura elétrica?", "Sim. Realizamos toda a infraestrutura: tubulação de cobre, dreno, suporte da condensadora e ponto elétrico. Tudo documentado no orçamento."]]} vizinhos="São Paulo · Santo André · São Bernardo · São Caetano · Diadema · Mauá" navigate={navigate} />;
            if (p === '/instalacao-ar-condicionado-cassete-sp') return <SegmentoView slug="inst-cassete" title="Instalação Cassete SP" tag="INSTALAÇÃO" headline="Instalação de Ar Condicionado Cassete em São Paulo" desc="Instalação de ar condicionado cassete (teto) em São Paulo e ABC. Ideal para escritórios, lojas e ambientes comerciais que precisam distribuir o ar uniformemente sem ocupar parede." dor="Cassete instalado errado gera dreno entupido, infiltração no forro e distribuição de ar inadequada. É um equipamento que exige técnico experiente com esse tipo de sistema." servicos={["Instalação de cassete de 4 vias para distribuição uniforme do ar", "Instalação em forro de gesso, PVC e laje — todos os tipos de teto", "Projeto de posicionamento correto para o ambiente", "Infraestrutura de dreno e elétrica completa", "Instalação em escritórios, lojas, clínicas e restaurantes", "Garantia de 1 ano na instalação por escrito"]} faq={[["Qual a diferença entre cassete e split hi-wall?", "O cassete é instalado no teto e distribui o ar em 4 direções — ideal para ambientes abertos como escritórios e lojas. O split hi-wall é fixado na parede e direciona o ar em uma direção. Para espaços comerciais, o cassete é mais elegante e distribui melhor."], ["O cassete pode ser instalado em qualquer tipo de forro?", "Sim. Instalamos em forro de gesso, PVC, madeira e diretamente na laje. O tipo de forro influencia o método de fixação e o acabamento. Avaliamos na visita técnica."], ["Quanto custa instalar cassete em São Paulo?", "A instalação de cassete começa a partir de R$ 600, dependendo da altura do teto e da complexidade da infraestrutura. Orçamento gratuito na visita técnica."]]} vizinhos="São Paulo · Santo André · São Bernardo · São Caetano · Diadema · Mauá" navigate={navigate} />;
            if (p === '/instalacao-ar-condicionado-piso-teto-sp') return <SegmentoView slug="inst-piso-teto" title="Instalação Piso-Teto SP" tag="INSTALAÇÃO" headline="Instalação de Ar Condicionado Piso-Teto em São Paulo" desc="Instalação de ar condicionado piso-teto em São Paulo e ABC. Versátil, pode ser instalado tanto no piso quanto no teto — ideal para ambientes com pé-direito alto e restrições de parede." dor="Piso-teto instalado na posição errada perde muito da eficiência. O posicionamento e a inclinação do equipamento fazem toda a diferença no conforto e no consumo de energia." servicos={["Instalação de piso-teto em posição vertical (parede) ou horizontal (teto)", "Projeto com posicionamento correto para maximizar a distribuição do ar", "Instalação em salas de alta pé-direito, igrejas e ambientes especiais", "Infraestrutura elétrica e hidráulica completa", "Todas as marcas: LG, Samsung, Daikin, Midea, Fujitsu", "Garantia de 1 ano na instalação por escrito"]} faq={[["Qual a diferença entre piso-teto e split comum?", "O piso-teto é um equipamento maior, com maior capacidade, que pode ser instalado tanto no piso quanto no teto. É ideal para ambientes com pé-direito alto, salas grandes e locais onde a parede não é adequada para o split convencional."], ["Piso-teto é mais caro que split hi-wall?", "O equipamento em si é mais caro, e a instalação também — exige mais infraestrutura e o posicionamento é mais complexo. Mas para ambientes grandes ou com pé-direito alto, é a solução mais eficiente. Fazemos o projeto gratuito."], ["Em que ambientes o piso-teto é mais recomendado?", "Lojas, igrejas, salões de festa, academias, salas com pé-direito acima de 3 metros e ambientes onde a parede não está disponível para o split convencional."]]} vizinhos="São Paulo · Santo André · São Bernardo · São Caetano · Diadema · Mauá" navigate={navigate} />;
            if (p === '/instalacao-multi-split-sp') return <SegmentoView slug="inst-multi-split" title="Instalação Multi Split SP" tag="INSTALAÇÃO" headline="Instalação de Multi Split em São Paulo — Vários Cômodos, Uma Condensadora" desc="Instalação de multi split em São Paulo e ABC. Um sistema que climatiza vários cômodos ao mesmo tempo com uma única condensadora externa — mais elegante e econômico que vários splits." dor="Multi split instalado errado tem queda de desempenho em todos os cômodos quando acionados juntos. O dimensionamento correto da condensadora é fundamental para o sistema funcionar bem." servicos={["Instalação de multi split para 2, 3, 4 ou mais cômodos", "Dimensionamento correto da condensadora para o número de ambientes", "Uma única condensadora externa — menos furos na fachada", "Instalação em apartamentos, casas e escritórios em São Paulo", "Controle individual de temperatura por cômodo", "Garantia de 1 ano na instalação por escrito"]} faq={[["Multi split vale mais a pena que vários splits separados?", "Sim, em geral. Com multi split, você tem uma única condensadora externa (menos barulho, menos furos na fachada), instalação mais organizada e controle individual por cômodo. O investimento inicial é maior, mas a solução é mais elegante e eficiente."], ["Quantos cômodos um multi split pode atender?", "Depende da capacidade da condensadora. Existem sistemas para 2, 3, 4, 5 ou mais ambientes. O importante é que a condensadora seja corretamente dimensionada para a soma das evaporadoras. Fazemos o projeto gratuitamente."], ["Multi split funciona se ligar todos os cômodos ao mesmo tempo?", "Sim, desde que o sistema seja corretamente dimensionado. Se a condensadora for subdimensionada, o desempenho cai quando todos os ambientes estão ligados. Por isso o projeto é tão importante."]]} vizinhos="São Paulo · Santo André · São Bernardo · São Caetano · Diadema · Mauá" navigate={navigate} />;
            if (p === '/instalacao-ar-condicionado-inverter-sp') return <SegmentoView slug="inst-inverter" title="Instalação Inverter SP" tag="INSTALAÇÃO" headline="Instalação de Ar Condicionado Inverter em São Paulo" desc="Instalação de ar condicionado inverter em São Paulo e ABC. A tecnologia mais econômica do mercado — até 60% de economia em energia. Instalação correta para garantir toda a eficiência do equipamento." dor="Inverter instalado errado perde grande parte da eficiência energética. Infraestrutura elétrica inadequada e posicionamento errado da condensadora são os erros mais comuns que comprometem o equipamento." servicos={["Instalação de split inverter residencial e comercial em São Paulo", "Infraestrutura elétrica adequada para maximizar a eficiência do inverter", "Posicionamento correto da condensadora para ventilação adequada", "Instalação em apartamentos, casas, escritórios e comércios", "Todas as marcas: LG, Samsung, Daikin, Midea, Fujitsu, Carrier", "Garantia de 1 ano na instalação — e garantia de fábrica mantida"]} faq={[["Por que a instalação do inverter precisa ser feita por técnico certificado?", "O inverter tem circuitos eletrônicos mais sofisticados que o convencional. Uma instalação errada pode danificar a placa eletrônica, anular a garantia de fábrica e desperdiçar toda a eficiência do equipamento."], ["Quanto tempo leva para o inverter pagar o investimento extra?", "Com uso diário em São Paulo, o inverter geralmente se paga em 12 a 18 meses em economia de energia comparado ao convencional. Quanto mais horas de uso por dia, mais rápido o retorno."], ["Vocês instalam inverter de qualquer marca?", "Sim. Instalamos LG, Samsung, Daikin, Midea, Fujitsu, Carrier, Elgin, Gree e outras marcas. A instalação não anula a garantia de fábrica e inclui 1 ano de garantia na mão de obra."]]} vizinhos="São Paulo · Santo André · São Bernardo · São Caetano · Diadema · Mauá" navigate={navigate} />;
            if (p === '/ar-condicionado-nao-gela-sp') return <SegmentoView slug="prob-nao-gela" title="Ar Condicionado Não Gela" tag="CONSERTO" headline="Ar Condicionado Não Gela em São Paulo? Resolvemos Hoje" desc="Ar condicionado ligado mas não resfria em São Paulo? Diagnóstico rápido, conserto no mesmo dia na maioria dos casos e garantia de 90 dias. Atendemos SP e ABC em até 2 horas." dor="Ar condicionado que não gela no verão de São Paulo é urgência. As causas mais comuns — falta de gás, filtro sujo ou compressor com defeito — pioram se deixadas sem diagnóstico." servicos={["Diagnóstico gratuito da causa do problema na visita técnica", "Recarga de gás refrigerante R410A e R32", "Limpeza profunda de filtros e serpentina", "Verificação e reparo do compressor", "Conserto de vazamento de gás", "Garantia de 90 dias no serviço realizado"]} faq={[["Por que o ar condicionado liga mas não gela?", "As causas mais comuns são: falta de gás refrigerante (vazamento), filtro muito sujo bloqueando o fluxo de ar, compressor com defeito ou placa eletrônica com problema. O diagnóstico correto na visita técnica identifica a causa exata."], ["É caro consertar ar condicionado que não gela?", "Depende da causa. Limpeza de filtro é barato. Recarga de gás custa em média R$ 150 a R$ 300. Troca de compressor é mais cara — entre R$ 500 e R$ 1.500. Fazemos o diagnóstico gratuito e você decide se quer consertar."], ["Quanto tempo leva para resolver?", "Na maioria dos casos resolvemos na mesma visita. Para peças especiais, o prazo é de 1 a 3 dias úteis. Respondemos em até 2 horas após o contato."]]} vizinhos="São Paulo · Santo André · São Bernardo · São Caetano · Diadema · Mauá" navigate={navigate} />;
            if (p === '/ar-condicionado-vazando-agua-sp') return <SegmentoView slug="prob-vazando" title="Ar Condicionado Vazando Água" tag="CONSERTO" headline="Ar Condicionado Vazando Água em São Paulo? Resolvemos Rápido" desc="Ar condicionado pingando ou vazando água em São Paulo? Atendemos em até 2 horas. As causas mais comuns têm solução simples — dreno entupido, inclinação errada ou serpentina suja." dor="Ar condicionado vazando água pode causar infiltração no forro, danos ao piso e mofo na parede. Quanto mais tempo demorar para resolver, maior o estrago e o custo do reparo." servicos={["Desobstrução do dreno — causa número 1 de gotejamento", "Correção da inclinação e fixação do equipamento", "Limpeza da serpentina evaporadora", "Reparo de vazamento na bandeja de dreno", "Verificação e reparo completo do sistema", "Garantia de 90 dias no serviço realizado"]} faq={[["Por que o ar condicionado está pingando água?", "A causa mais comum é o dreno entupido — a água de condensação não escoa e transborda pelo aparelho. Outras causas: serpentina suja que congela e descongela, inclinação errada do aparelho ou bandeja de dreno com defeito."], ["Ar condicionado vazando pode estragar o forro?", "Sim. Se não resolvido rapidamente, a água pode infiltrar no forro de gesso ou PVC e causar danos maiores — inclusive mofo e comprometimento estrutural. Por isso recomendamos atendimento rápido."], ["Quanto custa consertar vazamento de água no ar condicionado?", "A desobstrução de dreno — causa mais comum — começa a partir de R$ 80 e é feita na mesma visita. Para casos mais complexos, o diagnóstico gratuito identifica o custo exato."]]} vizinhos="São Paulo · Santo André · São Bernardo · São Caetano · Diadema · Mauá" navigate={navigate} />;
            if (p === '/recarga-gas-ar-condicionado-sp') return <SegmentoView slug="prob-gas" title="Recarga de Gás SP" tag="CONSERTO" headline="Recarga de Gás de Ar Condicionado em São Paulo" desc="Recarga de gás de ar condicionado em São Paulo e ABC. Gás R410A e R32, técnicos certificados e verificação do vazamento antes de recarregar. Sem recarga por recarga — resolvemos a causa." dor="Recarregar gás sem consertar o vazamento é jogar dinheiro fora. Em meses o gás acaba de novo e você paga outra recarga. O correto é identificar e consertar o ponto de vazamento antes de recarregar." servicos={["Verificação de vazamento antes da recarga de gás", "Recarga de gás R410A e R32 com equipamento certificado", "Identificação e reparo do ponto de vazamento", "Verificação da pressão após a recarga", "Técnicos com certificação para manuseio de gases refrigerantes", "Garantia de 90 dias no serviço realizado"]} faq={[["Como saber se o ar condicionado precisa de recarga de gás?", "Os principais sinais são: ar condicionado que não gela, tubulação da condensadora gelando, aparelho que trava ou desliga sozinho. O diagnóstico correto identifica se é falta de gás ou outro problema."], ["Quanto custa a recarga de gás de ar condicionado em SP?", "A recarga de gás começa a partir de R$ 150 em São Paulo, variando conforme o tipo de gás (R410A ou R32) e a quantidade necessária. A visita técnica é gratuita e o diagnóstico é feito antes de qualquer serviço."], ["Precisa identificar o vazamento antes de recarregar?", "Sempre. Recarregar sem localizar o vazamento significa que o gás vai escapar novamente em semanas ou meses. Identificamos e corrigimos o ponto de vazamento para a recarga durar."]]} vizinhos="São Paulo · Santo André · São Bernardo · São Caetano · Diadema · Mauá" navigate={navigate} />;
            if (p === '/ar-condicionado-com-mau-cheiro-sp') return <SegmentoView slug="prob-mau-cheiro" title="Ar Condicionado com Mau Cheiro" tag="LIMPEZA" headline="Ar Condicionado com Mau Cheiro em São Paulo? Limpeza Profunda Resolve" desc="Ar condicionado com cheiro ruim, mofo ou odor de queimado em São Paulo? Limpeza profunda com bactericida elimina a causa — não só mascara o cheiro. Atendemos SP e ABC." dor="Ar condicionado com mau cheiro indica acúmulo de fungos e bactérias na serpentina e no dreno. Você está respirando esse ar contaminado — e perfume e desinfetante só disfarçam por pouco tempo." servicos={["Limpeza profunda da serpentina evaporadora — onde os fungos se acumulam", "Desobstrução e limpeza do dreno — causa de cheiro de mofo", "Higienização com bactericida certificado que elimina fungos e bactérias", "Limpeza da turbina e dos filtros", "Verificação de cheiro de queimado — pode ser problema elétrico", "Garantia de eliminação do odor ou novo atendimento gratuito"]} faq={[["Por que o ar condicionado está com cheiro de mofo?", "O cheiro de mofo vem de fungos que crescem na serpentina úmida e no dreno entupido. É o problema mais comum — e tem solução com limpeza profunda e bactericida. Sem tratamento, piora com o tempo."], ["Cheiro de queimado no ar condicionado é perigoso?", "Cheiro de queimado pode indicar problema elétrico — resistência, motor ou placa com defeito. Nesse caso, desligue o equipamento e chame um técnico. Não é problema de limpeza, é de conserto."], ["A limpeza resolve o mau cheiro definitivamente?", "A limpeza profunda com bactericida elimina os fungos e bactérias — a causa do cheiro. Com manutenção semestral, o problema não volta. Uma limpeza simples de filtro não resolve — precisa da higienização completa."]]} vizinhos="São Paulo · Santo André · São Bernardo · São Caetano · Diadema · Mauá" navigate={navigate} />;
            if (p === '/ar-condicionado-fazendo-barulho-sp') return <SegmentoView slug="prob-barulho" title="Ar Condicionado Fazendo Barulho" tag="CONSERTO" headline="Ar Condicionado Fazendo Barulho em São Paulo? Diagnóstico Rápido" desc="Ar condicionado barulhento em São Paulo? Ruído de vibração, chiado, rangido ou barulho de água indicam problemas diferentes. Diagnóstico gratuito e conserto com garantia de 90 dias." dor="Ar condicionado barulhento prejudica o sono, a concentração e pode ser sinal de algo mais sério. Quanto mais tempo com barulho, maior a chance de dano no compressor ou nos rolamentos." servicos={["Diagnóstico gratuito do tipo e causa do barulho", "Fixação de suporte e parafusos soltos que causam vibração", "Limpeza da turbina com desequilíbrio por acúmulo de sujeira", "Troca de rolamentos desgastados do motor", "Desobstrução do dreno que causa barulho de água", "Garantia de 90 dias no serviço realizado"]} faq={[["Por que o ar condicionado está fazendo barulho?", "Depende do tipo de barulho: vibração geralmente é suporte solto ou parafuso frouxo; chiado pode ser falta de gás ou válvula; barulho de água é dreno entupido; rangido é rolamento desgastado. O diagnóstico na visita identifica a causa exata."], ["Barulho no ar condicionado pode causar dano maior?", "Sim. Rolamento desgastado que não é trocado pode travar o motor. Vibração constante afrouxar peças. Dreno entupido causa vazamento. Por isso é importante não ignorar o barulho."], ["Quanto custa resolver barulho no ar condicionado?", "Depende da causa. Fixar suporte solto é rápido e barato. Trocar rolamento custa em média R$ 80 a R$ 200. O diagnóstico é gratuito e o orçamento é dado antes de qualquer serviço."]]} vizinhos="São Paulo · Santo André · São Bernardo · São Caetano · Diadema · Mauá" navigate={navigate} />;
            if (p === '/ar-condicionado-desligando-sozinho-sp') return <SegmentoView slug="prob-desliga" title="Ar Condicionado Desligando Sozinho" tag="CONSERTO" headline="Ar Condicionado Desligando Sozinho em São Paulo? Resolvemos" desc="Ar condicionado que desliga sozinho em São Paulo? Pode ser proteção ativada por falta de gás, filtro sujo, problema elétrico ou placa com defeito. Diagnóstico rápido e conserto com garantia." dor="Ar condicionado que desliga sozinho está tentando se proteger de algum problema. Continuar usando sem diagnóstico pode transformar um conserto simples em troca de compressor." servicos={["Diagnóstico gratuito da causa do desligamento automático", "Verificação e recarga de gás refrigerante", "Limpeza de filtros e serpentina entupidos", "Verificação elétrica — tensão, disjuntor e fiação", "Reparo ou substituição de placa eletrônica com defeito", "Garantia de 90 dias no serviço realizado"]} faq={[["Por que o ar condicionado fica desligando sozinho?", "As causas mais comuns: timer ativado sem querer, falta de gás que aciona a proteção do compressor, filtro muito sujo que causa superaquecimento, problema elétrico ou placa com defeito. O diagnóstico identifica a causa."], ["É perigoso continuar usando o ar que desliga sozinho?", "Depende da causa. Se for proteção ativada por superaquecimento ou falta de gás, continuar forçando o compressor pode danificá-lo permanentemente. Recomendamos diagnóstico antes de continuar usando."], ["Quanto tempo leva para resolver?", "Causas simples como filtro sujo ou timer são resolvidas na visita. Para gás ou placa, pode levar 1 a 3 dias. Diagnóstico gratuito e orçamento antes de qualquer serviço."]]} vizinhos="São Paulo · Santo André · São Bernardo · São Caetano · Diadema · Mauá" navigate={navigate} />;
            if (p === '/limpeza-ar-condicionado-sp') return <SegmentoView slug="serv-limpeza-sp" title="Limpeza de Ar Condicionado SP" tag="LIMPEZA" headline="Limpeza de Ar Condicionado em São Paulo — Profunda e com Garantia" desc="Limpeza profunda de ar condicionado em São Paulo e ABC. Remove fungos, ácaros, bactérias e mau cheiro. Produto bactericida, ar mais limpo e equipamento que dura mais. Visita gratuita." dor="Ar condicionado sem limpeza regular acumula fungos e ácaros e distribui no ar que você respira. Em São Paulo, com a qualidade do ar já comprometida pela poluição, um aparelho sujo piora tudo." servicos={["Limpeza profunda do evaporador e serpentina", "Desobstrução e limpeza do dreno", "Higienização com bactericida certificado", "Limpeza da turbina e dos filtros", "Limpeza em todas as marcas e modelos", "Resultado imediato — ar mais limpo na hora"]} faq={[["Qual a diferença entre limpeza simples e limpeza profunda?", "A limpeza simples só limpa os filtros — dura 15 minutos e o cliente pode fazer em casa. A limpeza profunda (higienização) limpa a serpentina, a turbina e o dreno com bactericida — remove fungos e bactérias que a limpeza simples não alcança."], ["Com que frequência fazer limpeza de ar condicionado em SP?", "Para uso residencial, recomendamos a cada 6 meses. Para escritórios e locais com alta ocupação, a cada 3 meses. Em São Paulo, a poluição e a umidade aceleram o acúmulo de sujeira nos aparelhos."], ["Quanto custa a limpeza de ar condicionado em São Paulo?", "A limpeza profunda de um split em SP começa a partir de R$ 120 por aparelho. Para contratos com mais de um aparelho, temos valor especial. Orçamento gratuito pelo WhatsApp."]]} vizinhos="São Paulo · Santo André · São Bernardo · São Caetano · Diadema · Mauá" navigate={navigate} />;
            if (p === '/higienizacao-ar-condicionado-sp') return <SegmentoView slug="serv-higienizacao-sp" title="Higienização de Ar Condicionado SP" tag="LIMPEZA" headline="Higienização de Ar Condicionado em São Paulo — Bactericida e Garantia" desc="Higienização profissional de ar condicionado em São Paulo e ABC. Bactericida certificado, limpeza completa da serpentina, dreno e turbina. Ar limpo, sem fungos e sem mau cheiro." dor="Higienização feita por quem não tem o produto certo não elimina os fungos — só move a sujeira de lugar. Bactericida sem registro na ANVISA pode piorar a qualidade do ar em vez de melhorar." servicos={["Higienização completa com bactericida de registro na ANVISA", "Limpeza da serpentina evaporadora onde os fungos se concentram", "Desobstrução e higienização do dreno", "Limpeza da turbina e dos filtros com produto específico", "Higienização em todas as marcas e modelos em São Paulo", "Laudo de higienização disponível para empresas que precisam de documentação"]} faq={[["Higienização e limpeza são a mesma coisa?", "Não. A limpeza remove sujeira visível. A higienização vai além — usa bactericida para eliminar fungos, bactérias e ácaros que não são visíveis a olho nu. Para quem tem alergia ou o aparelho está com mau cheiro, a higienização é o procedimento correto."], ["O bactericida é seguro para crianças e animais?", "Usamos bactericidas com registro na ANVISA, seguros para uso doméstico após secagem (geralmente 30 minutos). Para bebês, pets e alérgicos, informamos o produto usado para que você possa verificar a segurança."], ["Com que frequência fazer higienização em São Paulo?", "Para uso residencial, a cada 6 meses. Para ambientes com crianças pequenas, idosos ou pessoas com alergias, recomendamos a cada 3 a 4 meses. São Paulo tem alta umidade e poluição — fatores que aceleram o crescimento de fungos."]]} vizinhos="São Paulo · Santo André · São Bernardo · São Caetano · Diadema · Mauá" navigate={navigate} />;
            if (p === '/pmoc-sao-paulo') return <SegmentoView slug="serv-pmoc-sp" title="PMOC São Paulo" tag="PMOC" headline="PMOC em São Paulo — Contrato de Manutenção Obrigatório para Empresas" desc="Elaboração e execução do PMOC (Plano de Manutenção, Operação e Controle) em São Paulo. Obrigatório pela Lei 13.589/18 para empresas, condomínios, clínicas e escolas com mais de 60.000 BTUs." dor="Empresa em São Paulo sem PMOC pode ser autuada pela Vigilância Sanitária com multa de R$ 2.000 a R$ 1,5 milhão. A fiscalização está ativa — e a regularização depois da autuação é mais cara e complicada." servicos={["Elaboração do PMOC conforme a Lei 13.589/18 para empresas em SP", "Execução das manutenções preventivas com registro técnico", "Relatório técnico mensal ou trimestral para a Vigilância Sanitária", "ART (Anotação de Responsabilidade Técnica) inclusa", "Atendimento para empresas, condomínios, clínicas e escolas em São Paulo", "Renovação e regularização de PMOC vencido ou irregular"]} faq={[["Quem é obrigado a ter PMOC em São Paulo?", "Qualquer estabelecimento em São Paulo com sistema de ar condicionado acima de 60.000 BTUs — empresas, condomínios comerciais, hospitais, clínicas, escolas, restaurantes e shoppings. A fiscalização é feita pela Vigilância Sanitária de São Paulo."], ["Quanto custa o PMOC em São Paulo?", "O valor varia conforme o número de equipamentos e a frequência das visitas. Fazemos o levantamento gratuito e entregamos proposta no mesmo dia. Valores a partir de R$ 297/mês para pequenas empresas."], ["O que está incluído no PMOC?", "Incluímos: elaboração do plano, execução das manutenções preventivas, relatório técnico após cada visita, ART do responsável técnico e documentação exigida pela Vigilância Sanitária de São Paulo."]]} vizinhos="São Paulo · Santo André · São Bernardo · São Caetano · Diadema · Mauá" navigate={navigate} />;
            if (p === '/contrato-manutencao-ar-condicionado-sp') return <SegmentoView slug="serv-contrato-sp" title="Contrato de Manutenção SP" tag="CONTRATO" headline="Contrato de Manutenção de Ar Condicionado em São Paulo" desc="Contratos de manutenção de ar condicionado para residências e empresas em São Paulo e ABC. Mensal, trimestral ou semestral — você escolhe a frequência e a New Clima cuida de tudo." dor="Chamar técnico só quando quebra sempre sai mais caro do que manutenção preventiva. Uma revisão semestral de R$ 120 evita conserto de compressor de R$ 1.500 — e ainda mantém o aparelho econômico." servicos={["Contratos mensais, trimestrais ou semestrais conforme a necessidade", "Manutenção preventiva com checklist completo a cada visita", "Limpeza de filtros, serpentina e dreno incluída", "Verificação de gás refrigerante e componentes elétricos", "Relatório técnico após cada visita", "Desconto em consertos para clientes com contrato ativo"]} faq={[["Qual a diferença entre contrato mensal e trimestral?", "O contrato mensal é ideal para locais com alta ocupação — restaurantes, academias, clínicas. O trimestral atende bem escritórios e estabelecimentos comerciais. O semestral é suficiente para uso residencial normal. Recomendamos a frequência correta na visita técnica."], ["O contrato inclui peças?", "O contrato cobre mão de obra e visitas preventivas. Peças com desgaste natural (filtros, capacitores) têm desconto para clientes com contrato. Em caso de defeito de fabricação, acionamos a garantia do fabricante."], ["Posso cancelar o contrato quando quiser?", "Sim. Nossos contratos são flexíveis — com aviso prévio de 30 dias. Não exigimos fidelidade mínima. O objetivo é que você veja valor no serviço e queira continuar."]]} vizinhos="São Paulo · Santo André · São Bernardo · São Caetano · Diadema · Mauá" navigate={navigate} />;
            if (p === '/instalacao-ar-condicionado-lg-sao-paulo') return <SegmentoView slug="marca-lg" title="LG" tag="MARCA" headline="Instalação de Ar Condicionado LG em São Paulo" desc="Instalação e manutenção de ar condicionado LG em São Paulo e ABC. Técnicos treinados nos equipamentos LG — splits inverter, multi-splits e sistemas cassete. Garantia de 1 ano e visita técnica gratuita." dor="Instalação errada de ar condicionado LG anula a garantia do fabricante. Exija técnico com experiência no equipamento e garantia documentada por escrito." servicos={["Instalação de ar condicionado LG residencial e comercial em São Paulo", "Manutenção preventiva e corretiva de ar condicionado LG", "Limpeza e higienização de equipamentos LG", "Recarga de gás e diagnóstico de defeitos em ar condicionado LG", "Instalação que mantém a garantia de fábrica LG", "Atendimento em São Paulo e ABC — visita técnica gratuita"]} faq={[["A instalação cancela a garantia de fábrica do ar condicionado LG?", "Não, desde que a instalação seja feita por técnico qualificado. A New Clima realiza instalações técnicas certificadas que mantêm a garantia de fábrica LG intacta."], ["Vocês têm peças originais LG para manutenção?", "Trabalhamos com peças originais e compatíveis certificadas para ar condicionado LG. Todo serviço inclui garantia de 90 dias nas peças e mão de obra."], ["Quanto custa instalar ar condicionado LG em São Paulo?", "A instalação de ar condicionado LG em SP começa a partir de R$ 350 para modelos residenciais. Visita técnica gratuita e orçamento no mesmo dia sem compromisso."]]} vizinhos="São Paulo · Santo André · São Bernardo · São Caetano · Diadema · Mauá" navigate={navigate} />;
            if (p === '/instalacao-ar-condicionado-samsung-sao-paulo') return <SegmentoView slug="marca-samsung" title="Samsung" tag="MARCA" headline="Instalação de Ar Condicionado Samsung em São Paulo" desc="Instalação e manutenção de ar condicionado Samsung em São Paulo e ABC. Técnicos treinados nos equipamentos Samsung — splits inverter, Wind-Free e sistemas comerciais. Garantia de 1 ano e visita técnica gratuita." dor="Instalação errada de ar condicionado Samsung anula a garantia do fabricante. Exija técnico com experiência no equipamento e garantia documentada por escrito." servicos={["Instalação de ar condicionado Samsung residencial e comercial em São Paulo", "Manutenção preventiva e corretiva de ar condicionado Samsung", "Limpeza e higienização de equipamentos Samsung", "Recarga de gás e diagnóstico de defeitos em ar condicionado Samsung", "Instalação que mantém a garantia de fábrica Samsung", "Atendimento em São Paulo e ABC — visita técnica gratuita"]} faq={[["A instalação cancela a garantia de fábrica do ar condicionado Samsung?", "Não, desde que a instalação seja feita por técnico qualificado. A New Clima realiza instalações técnicas certificadas que mantêm a garantia de fábrica Samsung intacta."], ["Vocês têm peças originais Samsung para manutenção?", "Trabalhamos com peças originais e compatíveis certificadas para ar condicionado Samsung. Todo serviço inclui garantia de 90 dias nas peças e mão de obra."], ["Quanto custa instalar ar condicionado Samsung em São Paulo?", "A instalação de ar condicionado Samsung em SP começa a partir de R$ 350 para modelos residenciais. Visita técnica gratuita e orçamento no mesmo dia sem compromisso."]]} vizinhos="São Paulo · Santo André · São Bernardo · São Caetano · Diadema · Mauá" navigate={navigate} />;
            if (p === '/instalacao-ar-condicionado-daikin-sao-paulo') return <SegmentoView slug="marca-daikin" title="Daikin" tag="MARCA" headline="Instalação de Ar Condicionado Daikin em São Paulo" desc="Instalação e manutenção de ar condicionado Daikin em São Paulo e ABC. Técnicos treinados nos equipamentos Daikin — splits inverter, VRF e sistemas de precisão. Garantia de 1 ano e visita técnica gratuita." dor="Instalação errada de ar condicionado Daikin anula a garantia do fabricante. Exija técnico com experiência no equipamento e garantia documentada por escrito." servicos={["Instalação de ar condicionado Daikin residencial e comercial em São Paulo", "Manutenção preventiva e corretiva de ar condicionado Daikin", "Limpeza e higienização de equipamentos Daikin", "Recarga de gás e diagnóstico de defeitos em ar condicionado Daikin", "Instalação que mantém a garantia de fábrica Daikin", "Atendimento em São Paulo e ABC — visita técnica gratuita"]} faq={[["A instalação cancela a garantia de fábrica do ar condicionado Daikin?", "Não, desde que a instalação seja feita por técnico qualificado. A New Clima realiza instalações técnicas certificadas que mantêm a garantia de fábrica Daikin intacta."], ["Vocês têm peças originais Daikin para manutenção?", "Trabalhamos com peças originais e compatíveis certificadas para ar condicionado Daikin. Todo serviço inclui garantia de 90 dias nas peças e mão de obra."], ["Quanto custa instalar ar condicionado Daikin em São Paulo?", "A instalação de ar condicionado Daikin em SP começa a partir de R$ 350 para modelos residenciais. Visita técnica gratuita e orçamento no mesmo dia sem compromisso."]]} vizinhos="São Paulo · Santo André · São Bernardo · São Caetano · Diadema · Mauá" navigate={navigate} />;
            if (p === '/instalacao-ar-condicionado-midea-sao-paulo') return <SegmentoView slug="marca-midea" title="Midea" tag="MARCA" headline="Instalação de Ar Condicionado Midea em São Paulo" desc="Instalação e manutenção de ar condicionado Midea em São Paulo e ABC. Técnicos treinados nos equipamentos Midea — splits inverter e sistemas residenciais e comerciais. Garantia de 1 ano e visita técnica gratuita." dor="Instalação errada de ar condicionado Midea anula a garantia do fabricante. Exija técnico com experiência no equipamento e garantia documentada por escrito." servicos={["Instalação de ar condicionado Midea residencial e comercial em São Paulo", "Manutenção preventiva e corretiva de ar condicionado Midea", "Limpeza e higienização de equipamentos Midea", "Recarga de gás e diagnóstico de defeitos em ar condicionado Midea", "Instalação que mantém a garantia de fábrica Midea", "Atendimento em São Paulo e ABC — visita técnica gratuita"]} faq={[["A instalação cancela a garantia de fábrica do ar condicionado Midea?", "Não, desde que a instalação seja feita por técnico qualificado. A New Clima realiza instalações técnicas certificadas que mantêm a garantia de fábrica Midea intacta."], ["Vocês têm peças originais Midea para manutenção?", "Trabalhamos com peças originais e compatíveis certificadas para ar condicionado Midea. Todo serviço inclui garantia de 90 dias nas peças e mão de obra."], ["Quanto custa instalar ar condicionado Midea em São Paulo?", "A instalação de ar condicionado Midea em SP começa a partir de R$ 350 para modelos residenciais. Visita técnica gratuita e orçamento no mesmo dia sem compromisso."]]} vizinhos="São Paulo · Santo André · São Bernardo · São Caetano · Diadema · Mauá" navigate={navigate} />;
            if (p === '/instalacao-ar-condicionado-fujitsu-sao-paulo') return <SegmentoView slug="marca-fujitsu" title="Fujitsu" tag="MARCA" headline="Instalação de Ar Condicionado Fujitsu em São Paulo" desc="Instalação e manutenção de ar condicionado Fujitsu em São Paulo e ABC. Técnicos treinados nos equipamentos Fujitsu — splits inverter, cassetes e sistemas VRF. Garantia de 1 ano e visita técnica gratuita." dor="Instalação errada de ar condicionado Fujitsu anula a garantia do fabricante. Exija técnico com experiência no equipamento e garantia documentada por escrito." servicos={["Instalação de ar condicionado Fujitsu residencial e comercial em São Paulo", "Manutenção preventiva e corretiva de ar condicionado Fujitsu", "Limpeza e higienização de equipamentos Fujitsu", "Recarga de gás e diagnóstico de defeitos em ar condicionado Fujitsu", "Instalação que mantém a garantia de fábrica Fujitsu", "Atendimento em São Paulo e ABC — visita técnica gratuita"]} faq={[["A instalação cancela a garantia de fábrica do ar condicionado Fujitsu?", "Não, desde que a instalação seja feita por técnico qualificado. A New Clima realiza instalações técnicas certificadas que mantêm a garantia de fábrica Fujitsu intacta."], ["Vocês têm peças originais Fujitsu para manutenção?", "Trabalhamos com peças originais e compatíveis certificadas para ar condicionado Fujitsu. Todo serviço inclui garantia de 90 dias nas peças e mão de obra."], ["Quanto custa instalar ar condicionado Fujitsu em São Paulo?", "A instalação de ar condicionado Fujitsu em SP começa a partir de R$ 350 para modelos residenciais. Visita técnica gratuita e orçamento no mesmo dia sem compromisso."]]} vizinhos="São Paulo · Santo André · São Bernardo · São Caetano · Diadema · Mauá" navigate={navigate} />;
            if (p === '/instalacao-ar-condicionado-carrier-sao-paulo') return <SegmentoView slug="marca-carrier" title="Carrier" tag="MARCA" headline="Instalação de Ar Condicionado Carrier em São Paulo" desc="Instalação e manutenção de ar condicionado Carrier em São Paulo e ABC. Técnicos treinados nos equipamentos Carrier — splits, cassetes, dutados e sistemas VRF. Garantia de 1 ano e visita técnica gratuita." dor="Instalação errada de ar condicionado Carrier anula a garantia do fabricante. Exija técnico com experiência no equipamento e garantia documentada por escrito." servicos={["Instalação de ar condicionado Carrier residencial e comercial em São Paulo", "Manutenção preventiva e corretiva de ar condicionado Carrier", "Limpeza e higienização de equipamentos Carrier", "Recarga de gás e diagnóstico de defeitos em ar condicionado Carrier", "Instalação que mantém a garantia de fábrica Carrier", "Atendimento em São Paulo e ABC — visita técnica gratuita"]} faq={[["A instalação cancela a garantia de fábrica do ar condicionado Carrier?", "Não, desde que a instalação seja feita por técnico qualificado. A New Clima realiza instalações técnicas certificadas que mantêm a garantia de fábrica Carrier intacta."], ["Vocês têm peças originais Carrier para manutenção?", "Trabalhamos com peças originais e compatíveis certificadas para ar condicionado Carrier. Todo serviço inclui garantia de 90 dias nas peças e mão de obra."], ["Quanto custa instalar ar condicionado Carrier em São Paulo?", "A instalação de ar condicionado Carrier em SP começa a partir de R$ 350 para modelos residenciais. Visita técnica gratuita e orçamento no mesmo dia sem compromisso."]]} vizinhos="São Paulo · Santo André · São Bernardo · São Caetano · Diadema · Mauá" navigate={navigate} />;
            if (p === '/instalacao-ar-condicionado-elgin-sao-paulo') return <SegmentoView slug="marca-elgin" title="Elgin" tag="MARCA" headline="Instalação de Ar Condicionado Elgin em São Paulo" desc="Instalação e manutenção de ar condicionado Elgin em São Paulo e ABC. Técnicos treinados nos equipamentos Elgin — splits inverter residenciais e comerciais. Garantia de 1 ano e visita técnica gratuita." dor="Instalação errada de ar condicionado Elgin anula a garantia do fabricante. Exija técnico com experiência no equipamento e garantia documentada por escrito." servicos={["Instalação de ar condicionado Elgin residencial e comercial em São Paulo", "Manutenção preventiva e corretiva de ar condicionado Elgin", "Limpeza e higienização de equipamentos Elgin", "Recarga de gás e diagnóstico de defeitos em ar condicionado Elgin", "Instalação que mantém a garantia de fábrica Elgin", "Atendimento em São Paulo e ABC — visita técnica gratuita"]} faq={[["A instalação cancela a garantia de fábrica do ar condicionado Elgin?", "Não, desde que a instalação seja feita por técnico qualificado. A New Clima realiza instalações técnicas certificadas que mantêm a garantia de fábrica Elgin intacta."], ["Vocês têm peças originais Elgin para manutenção?", "Trabalhamos com peças originais e compatíveis certificadas para ar condicionado Elgin. Todo serviço inclui garantia de 90 dias nas peças e mão de obra."], ["Quanto custa instalar ar condicionado Elgin em São Paulo?", "A instalação de ar condicionado Elgin em SP começa a partir de R$ 350 para modelos residenciais. Visita técnica gratuita e orçamento no mesmo dia sem compromisso."]]} vizinhos="São Paulo · Santo André · São Bernardo · São Caetano · Diadema · Mauá" navigate={navigate} />;
            if (p === '/instalacao-ar-condicionado-gree-sao-paulo') return <SegmentoView slug="marca-gree" title="Gree" tag="MARCA" headline="Instalação de Ar Condicionado Gree em São Paulo" desc="Instalação e manutenção de ar condicionado Gree em São Paulo e ABC. Técnicos treinados nos equipamentos Gree — splits inverter e sistemas de climatização. Garantia de 1 ano e visita técnica gratuita." dor="Instalação errada de ar condicionado Gree anula a garantia do fabricante. Exija técnico com experiência no equipamento e garantia documentada por escrito." servicos={["Instalação de ar condicionado Gree residencial e comercial em São Paulo", "Manutenção preventiva e corretiva de ar condicionado Gree", "Limpeza e higienização de equipamentos Gree", "Recarga de gás e diagnóstico de defeitos em ar condicionado Gree", "Instalação que mantém a garantia de fábrica Gree", "Atendimento em São Paulo e ABC — visita técnica gratuita"]} faq={[["A instalação cancela a garantia de fábrica do ar condicionado Gree?", "Não, desde que a instalação seja feita por técnico qualificado. A New Clima realiza instalações técnicas certificadas que mantêm a garantia de fábrica Gree intacta."], ["Vocês têm peças originais Gree para manutenção?", "Trabalhamos com peças originais e compatíveis certificadas para ar condicionado Gree. Todo serviço inclui garantia de 90 dias nas peças e mão de obra."], ["Quanto custa instalar ar condicionado Gree em São Paulo?", "A instalação de ar condicionado Gree em SP começa a partir de R$ 350 para modelos residenciais. Visita técnica gratuita e orçamento no mesmo dia sem compromisso."]]} vizinhos="São Paulo · Santo André · São Bernardo · São Caetano · Diadema · Mauá" navigate={navigate} />;
            if (p === '/instalacao-ar-condicionado-springer-carrier-sao-paulo') return <SegmentoView slug="marca-springer" title="Springer Carrier" tag="MARCA" headline="Instalação de Ar Condicionado Springer Carrier em São Paulo" desc="Instalação e manutenção de ar condicionado Springer Carrier em São Paulo e ABC. Técnicos treinados nos equipamentos Springer Carrier — splits e sistemas residenciais. Garantia de 1 ano e visita técnica gratuita." dor="Instalação errada de ar condicionado Springer Carrier anula a garantia do fabricante. Exija técnico com experiência no equipamento e garantia documentada por escrito." servicos={["Instalação de ar condicionado Springer Carrier residencial e comercial em São Paulo", "Manutenção preventiva e corretiva de ar condicionado Springer Carrier", "Limpeza e higienização de equipamentos Springer Carrier", "Recarga de gás e diagnóstico de defeitos em ar condicionado Springer Carrier", "Instalação que mantém a garantia de fábrica Springer Carrier", "Atendimento em São Paulo e ABC — visita técnica gratuita"]} faq={[["A instalação cancela a garantia de fábrica do ar condicionado Springer Carrier?", "Não, desde que a instalação seja feita por técnico qualificado. A New Clima realiza instalações técnicas certificadas que mantêm a garantia de fábrica Springer Carrier intacta."], ["Vocês têm peças originais Springer Carrier para manutenção?", "Trabalhamos com peças originais e compatíveis certificadas para ar condicionado Springer Carrier. Todo serviço inclui garantia de 90 dias nas peças e mão de obra."], ["Quanto custa instalar ar condicionado Springer Carrier em São Paulo?", "A instalação de ar condicionado Springer Carrier em SP começa a partir de R$ 350 para modelos residenciais. Visita técnica gratuita e orçamento no mesmo dia sem compromisso."]]} vizinhos="São Paulo · Santo André · São Bernardo · São Caetano · Diadema · Mauá" navigate={navigate} />;
            if (p === '/instalacao-ar-condicionado-komeco-sao-paulo') return <SegmentoView slug="marca-komeco" title="Komeco" tag="MARCA" headline="Instalação de Ar Condicionado Komeco em São Paulo" desc="Instalação e manutenção de ar condicionado Komeco em São Paulo e ABC. Técnicos treinados nos equipamentos Komeco — splits inverter e sistemas de climatização. Garantia de 1 ano e visita técnica gratuita." dor="Instalação errada de ar condicionado Komeco anula a garantia do fabricante. Exija técnico com experiência no equipamento e garantia documentada por escrito." servicos={["Instalação de ar condicionado Komeco residencial e comercial em São Paulo", "Manutenção preventiva e corretiva de ar condicionado Komeco", "Limpeza e higienização de equipamentos Komeco", "Recarga de gás e diagnóstico de defeitos em ar condicionado Komeco", "Instalação que mantém a garantia de fábrica Komeco", "Atendimento em São Paulo e ABC — visita técnica gratuita"]} faq={[["A instalação cancela a garantia de fábrica do ar condicionado Komeco?", "Não, desde que a instalação seja feita por técnico qualificado. A New Clima realiza instalações técnicas certificadas que mantêm a garantia de fábrica Komeco intacta."], ["Vocês têm peças originais Komeco para manutenção?", "Trabalhamos com peças originais e compatíveis certificadas para ar condicionado Komeco. Todo serviço inclui garantia de 90 dias nas peças e mão de obra."], ["Quanto custa instalar ar condicionado Komeco em São Paulo?", "A instalação de ar condicionado Komeco em SP começa a partir de R$ 350 para modelos residenciais. Visita técnica gratuita e orçamento no mesmo dia sem compromisso."]]} vizinhos="São Paulo · Santo André · São Bernardo · São Caetano · Diadema · Mauá" navigate={navigate} />;
            if (p === '/instalacao-ar-condicionado-philco-sao-paulo') return <SegmentoView slug="marca-philco" title="Philco" tag="MARCA" headline="Instalação de Ar Condicionado Philco em São Paulo" desc="Instalação e manutenção de ar condicionado Philco em São Paulo e ABC. Técnicos treinados nos equipamentos Philco — splits e sistemas residenciais. Garantia de 1 ano e visita técnica gratuita." dor="Instalação errada de ar condicionado Philco anula a garantia do fabricante. Exija técnico com experiência no equipamento e garantia documentada por escrito." servicos={["Instalação de ar condicionado Philco residencial e comercial em São Paulo", "Manutenção preventiva e corretiva de ar condicionado Philco", "Limpeza e higienização de equipamentos Philco", "Recarga de gás e diagnóstico de defeitos em ar condicionado Philco", "Instalação que mantém a garantia de fábrica Philco", "Atendimento em São Paulo e ABC — visita técnica gratuita"]} faq={[["A instalação cancela a garantia de fábrica do ar condicionado Philco?", "Não, desde que a instalação seja feita por técnico qualificado. A New Clima realiza instalações técnicas certificadas que mantêm a garantia de fábrica Philco intacta."], ["Vocês têm peças originais Philco para manutenção?", "Trabalhamos com peças originais e compatíveis certificadas para ar condicionado Philco. Todo serviço inclui garantia de 90 dias nas peças e mão de obra."], ["Quanto custa instalar ar condicionado Philco em São Paulo?", "A instalação de ar condicionado Philco em SP começa a partir de R$ 350 para modelos residenciais. Visita técnica gratuita e orçamento no mesmo dia sem compromisso."]]} vizinhos="São Paulo · Santo André · São Bernardo · São Caetano · Diadema · Mauá" navigate={navigate} />;
            if (p === '/instalacao-ar-condicionado-electrolux-sao-paulo') return <SegmentoView slug="marca-electrolux" title="Electrolux" tag="MARCA" headline="Instalação de Ar Condicionado Electrolux em São Paulo" desc="Instalação e manutenção de ar condicionado Electrolux em São Paulo e ABC. Técnicos treinados nos equipamentos Electrolux — splits inverter residenciais. Garantia de 1 ano e visita técnica gratuita." dor="Instalação errada de ar condicionado Electrolux anula a garantia do fabricante. Exija técnico com experiência no equipamento e garantia documentada por escrito." servicos={["Instalação de ar condicionado Electrolux residencial e comercial em São Paulo", "Manutenção preventiva e corretiva de ar condicionado Electrolux", "Limpeza e higienização de equipamentos Electrolux", "Recarga de gás e diagnóstico de defeitos em ar condicionado Electrolux", "Instalação que mantém a garantia de fábrica Electrolux", "Atendimento em São Paulo e ABC — visita técnica gratuita"]} faq={[["A instalação cancela a garantia de fábrica do ar condicionado Electrolux?", "Não, desde que a instalação seja feita por técnico qualificado. A New Clima realiza instalações técnicas certificadas que mantêm a garantia de fábrica Electrolux intacta."], ["Vocês têm peças originais Electrolux para manutenção?", "Trabalhamos com peças originais e compatíveis certificadas para ar condicionado Electrolux. Todo serviço inclui garantia de 90 dias nas peças e mão de obra."], ["Quanto custa instalar ar condicionado Electrolux em São Paulo?", "A instalação de ar condicionado Electrolux em SP começa a partir de R$ 350 para modelos residenciais. Visita técnica gratuita e orçamento no mesmo dia sem compromisso."]]} vizinhos="São Paulo · Santo André · São Bernardo · São Caetano · Diadema · Mauá" navigate={navigate} />;
            if (p === '/instalacao-ar-condicionado-trane-sao-paulo') return <SegmentoView slug="marca-trane" title="Trane" tag="MARCA" headline="Instalação de Ar Condicionado Trane em São Paulo" desc="Instalação e manutenção de ar condicionado Trane em São Paulo e ABC. Técnicos treinados nos equipamentos Trane — sistemas VRF, chillers e climatização industrial. Garantia de 1 ano e visita técnica gratuita." dor="Instalação errada de ar condicionado Trane anula a garantia do fabricante. Exija técnico com experiência no equipamento e garantia documentada por escrito." servicos={["Instalação de ar condicionado Trane residencial e comercial em São Paulo", "Manutenção preventiva e corretiva de ar condicionado Trane", "Limpeza e higienização de equipamentos Trane", "Recarga de gás e diagnóstico de defeitos em ar condicionado Trane", "Instalação que mantém a garantia de fábrica Trane", "Atendimento em São Paulo e ABC — visita técnica gratuita"]} faq={[["A instalação cancela a garantia de fábrica do ar condicionado Trane?", "Não, desde que a instalação seja feita por técnico qualificado. A New Clima realiza instalações técnicas certificadas que mantêm a garantia de fábrica Trane intacta."], ["Vocês têm peças originais Trane para manutenção?", "Trabalhamos com peças originais e compatíveis certificadas para ar condicionado Trane. Todo serviço inclui garantia de 90 dias nas peças e mão de obra."], ["Quanto custa instalar ar condicionado Trane em São Paulo?", "A instalação de ar condicionado Trane em SP começa a partir de R$ 350 para modelos residenciais. Visita técnica gratuita e orçamento no mesmo dia sem compromisso."]]} vizinhos="São Paulo · Santo André · São Bernardo · São Caetano · Diadema · Mauá" navigate={navigate} />;
            if (p === '/instalacao-ar-condicionado-york-sao-paulo') return <SegmentoView slug="marca-york" title="York" tag="MARCA" headline="Instalação de Ar Condicionado York em São Paulo" desc="Instalação e manutenção de ar condicionado York em São Paulo e ABC. Técnicos treinados nos equipamentos York — splits, dutados e sistemas VRF. Garantia de 1 ano e visita técnica gratuita." dor="Instalação errada de ar condicionado York anula a garantia do fabricante. Exija técnico com experiência no equipamento e garantia documentada por escrito." servicos={["Instalação de ar condicionado York residencial e comercial em São Paulo", "Manutenção preventiva e corretiva de ar condicionado York", "Limpeza e higienização de equipamentos York", "Recarga de gás e diagnóstico de defeitos em ar condicionado York", "Instalação que mantém a garantia de fábrica York", "Atendimento em São Paulo e ABC — visita técnica gratuita"]} faq={[["A instalação cancela a garantia de fábrica do ar condicionado York?", "Não, desde que a instalação seja feita por técnico qualificado. A New Clima realiza instalações técnicas certificadas que mantêm a garantia de fábrica York intacta."], ["Vocês têm peças originais York para manutenção?", "Trabalhamos com peças originais e compatíveis certificadas para ar condicionado York. Todo serviço inclui garantia de 90 dias nas peças e mão de obra."], ["Quanto custa instalar ar condicionado York em São Paulo?", "A instalação de ar condicionado York em SP começa a partir de R$ 350 para modelos residenciais. Visita técnica gratuita e orçamento no mesmo dia sem compromisso."]]} vizinhos="São Paulo · Santo André · São Bernardo · São Caetano · Diadema · Mauá" navigate={navigate} />;
            if (p === '/instalacao-ar-condicionado-hitachi-sao-paulo') return <SegmentoView slug="marca-hitachi" title="Hitachi" tag="MARCA" headline="Instalação de Ar Condicionado Hitachi em São Paulo" desc="Instalação e manutenção de ar condicionado Hitachi em São Paulo e ABC. Técnicos treinados nos equipamentos Hitachi — splits inverter e sistemas comerciais. Garantia de 1 ano e visita técnica gratuita." dor="Instalação errada de ar condicionado Hitachi anula a garantia do fabricante. Exija técnico com experiência no equipamento e garantia documentada por escrito." servicos={["Instalação de ar condicionado Hitachi residencial e comercial em São Paulo", "Manutenção preventiva e corretiva de ar condicionado Hitachi", "Limpeza e higienização de equipamentos Hitachi", "Recarga de gás e diagnóstico de defeitos em ar condicionado Hitachi", "Instalação que mantém a garantia de fábrica Hitachi", "Atendimento em São Paulo e ABC — visita técnica gratuita"]} faq={[["A instalação cancela a garantia de fábrica do ar condicionado Hitachi?", "Não, desde que a instalação seja feita por técnico qualificado. A New Clima realiza instalações técnicas certificadas que mantêm a garantia de fábrica Hitachi intacta."], ["Vocês têm peças originais Hitachi para manutenção?", "Trabalhamos com peças originais e compatíveis certificadas para ar condicionado Hitachi. Todo serviço inclui garantia de 90 dias nas peças e mão de obra."], ["Quanto custa instalar ar condicionado Hitachi em São Paulo?", "A instalação de ar condicionado Hitachi em SP começa a partir de R$ 350 para modelos residenciais. Visita técnica gratuita e orçamento no mesmo dia sem compromisso."]]} vizinhos="São Paulo · Santo André · São Bernardo · São Caetano · Diadema · Mauá" navigate={navigate} />;
            if (p === '/instalacao-ar-condicionado-panasonic-sao-paulo') return <SegmentoView slug="marca-panasonic" title="Panasonic" tag="MARCA" headline="Instalação de Ar Condicionado Panasonic em São Paulo" desc="Instalação e manutenção de ar condicionado Panasonic em São Paulo e ABC. Técnicos treinados nos equipamentos Panasonic — splits inverter residenciais e comerciais. Garantia de 1 ano e visita técnica gratuita." dor="Instalação errada de ar condicionado Panasonic anula a garantia do fabricante. Exija técnico com experiência no equipamento e garantia documentada por escrito." servicos={["Instalação de ar condicionado Panasonic residencial e comercial em São Paulo", "Manutenção preventiva e corretiva de ar condicionado Panasonic", "Limpeza e higienização de equipamentos Panasonic", "Recarga de gás e diagnóstico de defeitos em ar condicionado Panasonic", "Instalação que mantém a garantia de fábrica Panasonic", "Atendimento em São Paulo e ABC — visita técnica gratuita"]} faq={[["A instalação cancela a garantia de fábrica do ar condicionado Panasonic?", "Não, desde que a instalação seja feita por técnico qualificado. A New Clima realiza instalações técnicas certificadas que mantêm a garantia de fábrica Panasonic intacta."], ["Vocês têm peças originais Panasonic para manutenção?", "Trabalhamos com peças originais e compatíveis certificadas para ar condicionado Panasonic. Todo serviço inclui garantia de 90 dias nas peças e mão de obra."], ["Quanto custa instalar ar condicionado Panasonic em São Paulo?", "A instalação de ar condicionado Panasonic em SP começa a partir de R$ 350 para modelos residenciais. Visita técnica gratuita e orçamento no mesmo dia sem compromisso."]]} vizinhos="São Paulo · Santo André · São Bernardo · São Caetano · Diadema · Mauá" navigate={navigate} />;
            if (p === '/instalacao-ar-condicionado-bosch-sao-paulo') return <SegmentoView slug="marca-bosch" title="Bosch" tag="MARCA" headline="Instalação de Ar Condicionado Bosch em São Paulo" desc="Instalação e manutenção de ar condicionado Bosch em São Paulo e ABC. Técnicos treinados nos equipamentos Bosch — splits inverter e sistemas de climatização. Garantia de 1 ano e visita técnica gratuita." dor="Instalação errada de ar condicionado Bosch anula a garantia do fabricante. Exija técnico com experiência no equipamento e garantia documentada por escrito." servicos={["Instalação de ar condicionado Bosch residencial e comercial em São Paulo", "Manutenção preventiva e corretiva de ar condicionado Bosch", "Limpeza e higienização de equipamentos Bosch", "Recarga de gás e diagnóstico de defeitos em ar condicionado Bosch", "Instalação que mantém a garantia de fábrica Bosch", "Atendimento em São Paulo e ABC — visita técnica gratuita"]} faq={[["A instalação cancela a garantia de fábrica do ar condicionado Bosch?", "Não, desde que a instalação seja feita por técnico qualificado. A New Clima realiza instalações técnicas certificadas que mantêm a garantia de fábrica Bosch intacta."], ["Vocês têm peças originais Bosch para manutenção?", "Trabalhamos com peças originais e compatíveis certificadas para ar condicionado Bosch. Todo serviço inclui garantia de 90 dias nas peças e mão de obra."], ["Quanto custa instalar ar condicionado Bosch em São Paulo?", "A instalação de ar condicionado Bosch em SP começa a partir de R$ 350 para modelos residenciais. Visita técnica gratuita e orçamento no mesmo dia sem compromisso."]]} vizinhos="São Paulo · Santo André · São Bernardo · São Caetano · Diadema · Mauá" navigate={navigate} />;
            if (p === '/instalacao-ar-condicionado-tcl-sao-paulo') return <SegmentoView slug="marca-tcl" title="TCL" tag="MARCA" headline="Instalação de Ar Condicionado TCL em São Paulo" desc="Instalação e manutenção de ar condicionado TCL em São Paulo e ABC. Técnicos treinados nos equipamentos TCL — splits inverter residenciais e comerciais. Garantia de 1 ano e visita técnica gratuita." dor="Instalação errada de ar condicionado TCL anula a garantia do fabricante. Exija técnico com experiência no equipamento e garantia documentada por escrito." servicos={["Instalação de ar condicionado TCL residencial e comercial em São Paulo", "Manutenção preventiva e corretiva de ar condicionado TCL", "Limpeza e higienização de equipamentos TCL", "Recarga de gás e diagnóstico de defeitos em ar condicionado TCL", "Instalação que mantém a garantia de fábrica TCL", "Atendimento em São Paulo e ABC — visita técnica gratuita"]} faq={[["A instalação cancela a garantia de fábrica do ar condicionado TCL?", "Não, desde que a instalação seja feita por técnico qualificado. A New Clima realiza instalações técnicas certificadas que mantêm a garantia de fábrica TCL intacta."], ["Vocês têm peças originais TCL para manutenção?", "Trabalhamos com peças originais e compatíveis certificadas para ar condicionado TCL. Todo serviço inclui garantia de 90 dias nas peças e mão de obra."], ["Quanto custa instalar ar condicionado TCL em São Paulo?", "A instalação de ar condicionado TCL em SP começa a partir de R$ 350 para modelos residenciais. Visita técnica gratuita e orçamento no mesmo dia sem compromisso."]]} vizinhos="São Paulo · Santo André · São Bernardo · São Caetano · Diadema · Mauá" navigate={navigate} />;
            if (p === '/instalacao-ar-condicionado-agratto-sao-paulo') return <SegmentoView slug="marca-agratto" title="Agratto" tag="MARCA" headline="Instalação de Ar Condicionado Agratto em São Paulo" desc="Instalação e manutenção de ar condicionado Agratto em São Paulo e ABC. Técnicos treinados nos equipamentos Agratto — splits inverter e sistemas de climatização. Garantia de 1 ano e visita técnica gratuita." dor="Instalação errada de ar condicionado Agratto anula a garantia do fabricante. Exija técnico com experiência no equipamento e garantia documentada por escrito." servicos={["Instalação de ar condicionado Agratto residencial e comercial em São Paulo", "Manutenção preventiva e corretiva de ar condicionado Agratto", "Limpeza e higienização de equipamentos Agratto", "Recarga de gás e diagnóstico de defeitos em ar condicionado Agratto", "Instalação que mantém a garantia de fábrica Agratto", "Atendimento em São Paulo e ABC — visita técnica gratuita"]} faq={[["A instalação cancela a garantia de fábrica do ar condicionado Agratto?", "Não, desde que a instalação seja feita por técnico qualificado. A New Clima realiza instalações técnicas certificadas que mantêm a garantia de fábrica Agratto intacta."], ["Vocês têm peças originais Agratto para manutenção?", "Trabalhamos com peças originais e compatíveis certificadas para ar condicionado Agratto. Todo serviço inclui garantia de 90 dias nas peças e mão de obra."], ["Quanto custa instalar ar condicionado Agratto em São Paulo?", "A instalação de ar condicionado Agratto em SP começa a partir de R$ 350 para modelos residenciais. Visita técnica gratuita e orçamento no mesmo dia sem compromisso."]]} vizinhos="São Paulo · Santo André · São Bernardo · São Caetano · Diadema · Mauá" navigate={navigate} />;
            if (p === '/instalacao-ar-condicionado-consul-sao-paulo') return <SegmentoView slug="marca-consul" title="Consul" tag="MARCA" headline="Instalação de Ar Condicionado Consul em São Paulo" desc="Instalação e manutenção de ar condicionado Consul em São Paulo e ABC. Técnicos treinados nos equipamentos Consul — splits inverter residenciais. Garantia de 1 ano e visita técnica gratuita." dor="Instalação errada de ar condicionado Consul anula a garantia do fabricante. Exija técnico com experiência no equipamento e garantia documentada por escrito." servicos={["Instalação de ar condicionado Consul residencial e comercial em São Paulo", "Manutenção preventiva e corretiva de ar condicionado Consul", "Limpeza e higienização de equipamentos Consul", "Recarga de gás e diagnóstico de defeitos em ar condicionado Consul", "Instalação que mantém a garantia de fábrica Consul", "Atendimento em São Paulo e ABC — visita técnica gratuita"]} faq={[["A instalação cancela a garantia de fábrica do ar condicionado Consul?", "Não, desde que a instalação seja feita por técnico qualificado. A New Clima realiza instalações técnicas certificadas que mantêm a garantia de fábrica Consul intacta."], ["Vocês têm peças originais Consul para manutenção?", "Trabalhamos com peças originais e compatíveis certificadas para ar condicionado Consul. Todo serviço inclui garantia de 90 dias nas peças e mão de obra."], ["Quanto custa instalar ar condicionado Consul em São Paulo?", "A instalação de ar condicionado Consul em SP começa a partir de R$ 350 para modelos residenciais. Visita técnica gratuita e orçamento no mesmo dia sem compromisso."]]} vizinhos="São Paulo · Santo André · São Bernardo · São Caetano · Diadema · Mauá" navigate={navigate} />;
            if (p === '/instalacao-ar-condicionado-jardim-paulista') return <BairroView bairro="Jardim Paulista" slug="jardim-paulista" zona="Zona Sul" vizinhos={["Jardins", "Itaim Bibi", "Pinheiros", "Cerqueira César"]} navigate={navigate} />;
            if (p === '/instalacao-ar-condicionado-jardim-europa') return <BairroView bairro="Jardim Europa" slug="jardim-europa" zona="Zona Sul" vizinhos={["Jardins", "Itaim Bibi", "Jardim Paulista", "Pinheiros"]} navigate={navigate} />;
            if (p === '/instalacao-ar-condicionado-vila-andrade') return <BairroView bairro="Vila Andrade" slug="vila-andrade" zona="Zona Sul" vizinhos={["Morumbi", "Campo Limpo", "Santo Amaro", "Brooklin"]} navigate={navigate} />;
            if (p === '/instalacao-ar-condicionado-campo-limpo') return <BairroView bairro="Campo Limpo" slug="campo-limpo" zona="Zona Sul" vizinhos={["Vila Andrade", "Santo Amaro", "Campo Grande", "Capão Redondo"]} navigate={navigate} />;
            if (p === '/instalacao-ar-condicionado-interlagos') return <BairroView bairro="Interlagos" slug="interlagos" zona="Zona Sul" vizinhos={["Campo Grande", "Santo Amaro", "Jurubatuba", "Socorro"]} navigate={navigate} />;
            if (p === '/instalacao-ar-condicionado-cerqueira-cesar') return <BairroView bairro="Cerqueira César" slug="cerqueira-cesar" zona="Zona Oeste" vizinhos={["Jardins", "Higienópolis", "Pinheiros", "Consolação"]} navigate={navigate} />;
            if (p === '/instalacao-ar-condicionado-pacaembu') return <BairroView bairro="Pacaembu" slug="pacaembu" zona="Zona Oeste" vizinhos={["Perdizes", "Higienópolis", "Santa Cecília", "Sumaré"]} navigate={navigate} />;
            if (p === '/instalacao-ar-condicionado-sumare') return <BairroView bairro="Sumaré" slug="sumare" zona="Zona Oeste" vizinhos={["Perdizes", "Vila Madalena", "Pacaembu", "Água Branca"]} navigate={navigate} />;
            if (p === '/instalacao-ar-condicionado-vila-leopoldina') return <BairroView bairro="Vila Leopoldina" slug="vila-leopoldina" zona="Zona Oeste" vizinhos={["Lapa", "Água Branca", "Jaguaré", "Barra Funda"]} navigate={navigate} />;
            if (p === '/instalacao-ar-condicionado-barra-funda') return <BairroView bairro="Barra Funda" slug="barra-funda" zona="Zona Oeste" vizinhos={["Pompéia", "Lapa", "Santa Cecília", "Água Branca"]} navigate={navigate} />;
            if (p === '/instalacao-ar-condicionado-alto-de-pinheiros') return <BairroView bairro="Alto de Pinheiros" slug="alto-de-pinheiros" zona="Zona Oeste" vizinhos={["Pinheiros", "Vila Madalena", "Butantã", "Lapa"]} navigate={navigate} />;
            if (p === '/instalacao-ar-condicionado-consolacao') return <BairroView bairro="Consolação" slug="consolacao" zona="Zona Oeste" vizinhos={["Higienópolis", "Cerqueira César", "Bela Vista", "Santa Cecília"]} navigate={navigate} />;
            if (p === '/instalacao-ar-condicionado-vila-guilherme') return <BairroView bairro="Vila Guilherme" slug="vila-guilherme" zona="Zona Norte" vizinhos={["Santana", "Vila Maria", "Casa Verde", "Carandiru"]} navigate={navigate} />;
            if (p === '/instalacao-ar-condicionado-vila-maria') return <BairroView bairro="Vila Maria" slug="vila-maria" zona="Zona Norte" vizinhos={["Santana", "Vila Guilherme", "Tucuruvi", "Casa Verde"]} navigate={navigate} />;
            if (p === '/instalacao-ar-condicionado-casa-verde') return <BairroView bairro="Casa Verde" slug="casa-verde" zona="Zona Norte" vizinhos={["Santana", "Vila Guilherme", "Limão", "Freguesia do Ó"]} navigate={navigate} />;
            if (p === '/instalacao-ar-condicionado-mandaqui') return <BairroView bairro="Mandaqui" slug="mandaqui" zona="Zona Norte" vizinhos={["Santana", "Tucuruvi", "Tremembé", "Jaçanã"]} navigate={navigate} />;
            if (p === '/instalacao-ar-condicionado-tremembe') return <BairroView bairro="Tremembé" slug="tremembe" zona="Zona Norte" vizinhos={["Tucuruvi", "Mandaqui", "Jaçanã", "Santana"]} navigate={navigate} />;
            if (p === '/instalacao-ar-condicionado-freguesia-do-o') return <BairroView bairro="Freguesia do Ó" slug="freguesia-do-o" zona="Zona Norte" vizinhos={["Casa Verde", "Limão", "Brasilândia", "Cachoeirinha"]} navigate={navigate} />;
            if (p === '/instalacao-ar-condicionado-limao') return <BairroView bairro="Limão" slug="limao" zona="Zona Norte" vizinhos={["Casa Verde", "Freguesia do Ó", "Cachoeirinha", "Santana"]} navigate={navigate} />;
            if (p === '/instalacao-ar-condicionado-belem') return <BairroView bairro="Belém" slug="belem" zona="Zona Leste" vizinhos={["Mooca", "Brás", "Água Rasa", "Tatuapé"]} navigate={navigate} />;
            if (p === '/instalacao-ar-condicionado-bras') return <BairroView bairro="Brás" slug="bras" zona="Zona Leste" vizinhos={["Belém", "Mooca", "Pari", "Cambuci"]} navigate={navigate} />;
            if (p === '/instalacao-ar-condicionado-carrao') return <BairroView bairro="Carrão" slug="carrao" zona="Zona Leste" vizinhos={["Tatuapé", "Anália Franco", "Vila Formosa", "Água Rasa"]} navigate={navigate} />;
            if (p === '/instalacao-ar-condicionado-vila-formosa') return <BairroView bairro="Vila Formosa" slug="vila-formosa" zona="Zona Leste" vizinhos={["Carrão", "Tatuapé", "Penha", "Aricanduva"]} navigate={navigate} />;
            if (p === '/instalacao-ar-condicionado-sapopemba') return <BairroView bairro="Sapopemba" slug="sapopemba" zona="Zona Leste" vizinhos={["Vila Prudente", "São Mateus", "Itaquera", "Ermelino Matarazzo"]} navigate={navigate} />;
            if (p === '/instalacao-ar-condicionado-penha-de-franca') return <BairroView bairro="Penha de França" slug="penha-de-franca" zona="Zona Leste" vizinhos={["Penha", "Tatuapé", "Aricanduva", "Ermelino Matarazzo"]} navigate={navigate} />;
            if (p === '/instalacao-ar-condicionado-jardim-analia') return <BairroView bairro="Jardim Anália" slug="jardim-analia" zona="Zona Leste" vizinhos={["Anália Franco", "Tatuapé", "Carrão", "Parque São Jorge"]} navigate={navigate} />;
            if (p === '/instalacao-ar-condicionado-aricanduva') return <BairroView bairro="Aricanduva" slug="aricanduva" zona="Zona Leste" vizinhos={["Penha", "Tatuapé", "Vila Formosa", "Carrão"]} navigate={navigate} />;
            if (p === '/instalacao-ar-condicionado-republica') return <BairroView bairro="República" slug="republica" zona="Região Central" vizinhos={["Centro", "Consolação", "Bela Vista", "Santa Cecília"]} navigate={navigate} />;
            if (p === '/instalacao-ar-condicionado-santa-cecilia') return <BairroView bairro="Santa Cecília" slug="santa-cecilia" zona="Região Central" vizinhos={["Higienópolis", "Consolação", "República", "Bom Retiro"]} navigate={navigate} />;
            if (p === '/instalacao-ar-condicionado-bom-retiro') return <BairroView bairro="Bom Retiro" slug="bom-retiro" zona="Região Central" vizinhos={["Santa Cecília", "Brás", "Pari", "República"]} navigate={navigate} />;
            if (p === '/ar-condicionado-zona-sul-sp') return <ZonaView zona="Zona Sul" bairros={["Vila Mariana", "Moema", "Brooklin", "Campo Belo", "Itaim Bibi", "Santo Amaro", "Jabaquara", "Saúde", "Ipiranga", "Cursino", "Campo Grande", "Morumbi", "Vila Andrade", "Vila Olímpia", "Paraíso", "Aclimação", "Mirandópolis", "Planalto Paulista", "Vila Clementino", "Chácara Klabin", "Cambuci", "Interlagos", "Campo Limpo", "Jardim Paulista", "Jardim Europa"]} navigate={navigate} />;
            if (p === '/ar-condicionado-zona-norte-sp') return <ZonaView zona="Zona Norte" bairros={["Santana", "Tucuruvi", "Vila Guilherme", "Vila Maria", "Casa Verde", "Mandaqui", "Tremembé", "Jaçanã", "Freguesia do Ó", "Limão", "Brasilândia", "Cachoeirinha", "Imirim", "Bom Retiro"]} navigate={navigate} />;
            if (p === '/ar-condicionado-zona-leste-sp') return <ZonaView zona="Zona Leste" bairros={["Tatuapé", "Anália Franco", "Mooca", "Vila Prudente", "Penha", "Carrão", "Água Rasa", "Belém", "Brás", "Vila Formosa", "Sapopemba", "Penha de França", "Jardim Anália", "Aricanduva", "Parque São Jorge", "Itaquera", "São Mateus"]} navigate={navigate} />;
            if (p === '/ar-condicionado-zona-oeste-sp') return <ZonaView zona="Zona Oeste" bairros={["Pinheiros", "Vila Madalena", "Perdizes", "Lapa", "Pompéia", "Butantã", "Cerqueira César", "Pacaembu", "Sumaré", "Vila Leopoldina", "Barra Funda", "Alto de Pinheiros", "Consolação", "Higienópolis", "Jardins", "Água Branca", "Jaguaré"]} navigate={navigate} />;
            if (p === '/ar-condicionado-zona-central-sp') return <ZonaView zona="Região Central" bairros={["Bela Vista", "Liberdade", "República", "Santa Cecília", "Bom Retiro", "Cambuci", "Consolação", "Brás", "Pari", "Sé", "Centro", "Glicério", "Luz"]} navigate={navigate} />;
            if (p === '/manutencao-chiller-sao-paulo') return <SegmentoView slug="manutencao-chiller" title="Chiller" tag="CHILLER" headline="Manutenção de Chiller em São Paulo" desc="Manutenção preventiva e corretiva de chiller em São Paulo e ABC. Todas as marcas — Carrier, Trane, Daikin, York, Hitachi. Técnicos especializados, PMOC e atendimento emergencial." dor="Chiller parado em hospital, shopping ou indústria é crise imediata. Sem manutenção preventiva programada, a falha aparece no pior momento — e o custo de uma parada não planejada é muito maior que qualquer contrato de manutenção." servicos={["Manutenção preventiva de chiller com checklist completo", "Manutenção corretiva e diagnóstico de falhas em chiller", "Limpeza de condensadores, evaporadores e torres de resfriamento", "Verificação de compressores, bombas e válvulas de controle", "PMOC para instalações com chiller obrigadas pela Lei 13.589/18", "Atendimento emergencial em São Paulo e ABC"]} faq={[["Com que frequência fazer manutenção de chiller?", "Para chillers em operação contínua, recomendamos manutenção mensal com checklist completo. Chillers em uso sazonal devem ser revisados antes e depois do período de uso. O PMOC define a frequência mínima exigida por lei."], ["Quais marcas de chiller a New Clima atende?", "Atendemos todas as marcas: Carrier, Trane, Daikin, York, Hitachi, McQuay, Smardt e outras. Nossos técnicos têm experiência com chillers de parafuso, centrífugo e scroll."], ["Chiller precisa de PMOC?", "Sim. Instalações com chiller geralmente superam 60.000 BTUs — limite que torna o PMOC obrigatório pela Lei 13.589/18. Elaboramos o plano, executamos as manutenções e entregamos toda a documentação para a Vigilância Sanitária."]]} vizinhos="São Paulo · Santo André · São Bernardo · São Caetano · Diadema · Mauá" navigate={navigate} />;
            if (p === '/manutencao-fan-coil-sao-paulo') return <SegmentoView slug="manutencao-fan-coil" title="Fan Coil" tag="FAN COIL" headline="Manutenção e Limpeza de Fan Coil em São Paulo" desc="Manutenção preventiva, corretiva e higienização de fan coil em São Paulo e ABC. Limpeza de serpentinas, bandejas e filtros. PMOC e contrato de manutenção para sistemas de água gelada." dor="Fan coil sujo contamina o ar de todo o andar com fungos e bactérias — especialmente em hospitais e hotéis. A Vigilância Sanitária fiscaliza e exige manutenção documentada. Sem PMOC, a multa pode chegar a R$ 1,5 milhão." servicos={["Limpeza e higienização de serpentinas de fan coil", "Limpeza de bandejas coletoras de condensado", "Substituição de filtros e correias", "Verificação de rolamentos, motores e válvulas de controle", "PMOC para sistemas de fan coil em prédios comerciais", "Contrato de manutenção mensal ou trimestral em SP e ABC"]} faq={[["Com que frequência fazer manutenção de fan coil?", "A frequência depende do ambiente. Em hospitais e hotéis, recomendamos manutenção mensal. Em escritórios e prédios comerciais, trimestral. O PMOC define a frequência mínima exigida por lei para cada tipo de estabelecimento."], ["A higienização de fan coil é diferente do split?", "Sim. O fan coil faz parte de um sistema de água gelada — a limpeza envolve serpentinas de água, bandejas e filtros específicos. O processo é diferente da higienização de split convencional e exige técnico experiente no sistema."], ["Vocês atendem sistemas com vários fan coils?", "Sim. Atendemos desde prédios com poucos fan coils até edifícios corporativos com dezenas de unidades. O contrato de manutenção é adaptado ao número de equipamentos e à frequência necessária."]]} vizinhos="São Paulo · Santo André · São Bernardo · São Caetano · Diadema · Mauá" navigate={navigate} />;
            if (p === '/manutencao-self-contained-sao-paulo') return <SegmentoView slug="manutencao-self-contained" title="Self Contained" tag="SELF CONTAINED" headline="Manutenção de Ar Condicionado Self Contained em São Paulo" desc="Manutenção preventiva e corretiva de ar condicionado self contained em São Paulo e ABC. Equipamentos de grande porte para data centers, shoppings e hospitais. PMOC e atendimento emergencial." dor="Self contained sem manutenção em data center ou sala de servidores é risco de parada total. Equipamento de grande porte exige técnico especializado — manutenção inadequada compromete toda a operação." servicos={["Manutenção preventiva de self contained com checklist técnico", "Limpeza de condensadores e serpentinas evaporadoras", "Verificação de compressores, capacitores e sistemas elétricos", "Manutenção de self contained para data centers e CPDs", "PMOC para instalações com self contained obrigadas por lei", "Atendimento emergencial 24h para ambientes críticos"]} faq={[["O que é ar condicionado self contained?", "Self contained é um sistema de ar condicionado de grande capacidade que reúne todos os componentes em uma única unidade compacta — condensador, evaporador e compressor. É muito usado em data centers, salas de servidores, shoppings e ambientes que precisam de alta capacidade de resfriamento."], ["Com que frequência fazer manutenção de self contained?", "Para ambientes críticos como data centers, recomendamos manutenção mensal. Para uso comercial regular, trimestral. Quanto maior a criticidade do ambiente, maior a frequência recomendada."], ["Vocês atendem self contained de todas as marcas?", "Sim. Atendemos Carrier, Trane, Liebert, Emerson, Daikin e outras marcas de self contained em São Paulo e ABC."]]} vizinhos="São Paulo · Santo André · São Bernardo · São Caetano · Diadema · Mauá" navigate={navigate} />;
            if (p === '/limpeza-fan-coil-sao-paulo') return <SegmentoView slug="limpeza-fan-coil" title="Limpeza Fan Coil" tag="HIGIENIZAÇÃO" headline="Limpeza e Higienização de Fan Coil em São Paulo" desc="Limpeza profunda e higienização de fan coil em São Paulo e ABC. Remove fungos, bactérias e sujeira acumulada em serpentinas, bandejas e filtros. Laudo de higienização incluído." dor="Fan coil sujo é o caminho mais rápido para a Vigilância Sanitária autuar seu estabelecimento. Fungos nas serpentinas e bandejas contaminadas são os problemas mais comuns — e os mais difíceis de perceber sem inspeção técnica." servicos={["Higienização profunda de serpentinas de fan coil com bactericida", "Limpeza e desinfecção de bandejas coletoras de condensado", "Substituição e limpeza de filtros de ar", "Higienização de dutos e difusores conectados ao fan coil", "Laudo de higienização para Vigilância Sanitária", "Contrato de higienização periódica para prédios e hotéis em SP"]} faq={[["Por que a limpeza de fan coil é diferente do split?", "O fan coil opera com água gelada e tem serpentinas, bandejas e filtros específicos que acumulam sujeira de forma diferente do split. A limpeza exige produtos e técnicas específicas para esse tipo de sistema — não é o mesmo processo."], ["A higienização inclui laudo para a Vigilância Sanitária?", "Sim. Entregamos laudo de higienização com descrição do serviço executado, produtos utilizados e data da realização. O documento é aceito pela Vigilância Sanitária como comprovação de manutenção."], ["Com que frequência higienizar fan coil?", "Em hotéis e hospitais, a cada 3 meses no mínimo. Em escritórios e prédios comerciais, semestralmente. Em ambientes com alta circulação de pessoas ou poluição, com maior frequência. O PMOC define a periodicidade exigida."]]} vizinhos="São Paulo · Santo André · São Bernardo · São Caetano · Diadema · Mauá" navigate={navigate} />;
            if (p === '/central-agua-gelada-sao-paulo') return <SegmentoView slug="central-agua-gelada" title="Central de Água Gelada" tag="ÁGUA GELADA" headline="Central de Água Gelada em São Paulo — Instalação e Manutenção" desc="Instalação, manutenção e PMOC de sistemas de central de água gelada (CAG) em São Paulo e ABC. Chiller, fan coil, torres de resfriamento e bombas. Técnicos especializados em grandes sistemas." dor="Sistema de água gelada parado em shopping, hospital ou edifício corporativo gera prejuízo imediato. Sem contrato de manutenção preventiva, a falha pode comprometer todo o sistema de climatização do prédio." servicos={["Manutenção preventiva completa de central de água gelada", "Instalação e comissionamento de novos sistemas CAG", "Manutenção de chillers, fan coils e torres de resfriamento", "Verificação de bombas, válvulas e sistemas de controle", "PMOC para sistemas CAG em prédios obrigados pela lei", "Retrofit e modernização de sistemas de água gelada existentes"]} faq={[["O que é uma central de água gelada?", "A central de água gelada (CAG) é um sistema centralizado de climatização que usa um chiller para resfriar água, que é distribuída por toda a edificação para fan coils em cada ambiente. É o sistema mais comum em hospitais, shoppings, hotéis e grandes edifícios corporativos."], ["Qual a periodicidade de manutenção de uma CAG?", "Para sistemas em operação contínua, recomendamos manutenção mensal dos principais componentes e revisão geral semestral. O PMOC define a frequência mínima exigida por lei para cada componente do sistema."], ["Vocês fazem projeto e instalação de central de água gelada?", "Sim. Fazemos desde o projeto técnico até a instalação completa e comissionamento do sistema. Também atendemos modernização e retrofit de sistemas existentes em São Paulo e ABC."]]} vizinhos="São Paulo · Santo André · São Bernardo · São Caetano · Diadema · Mauá" navigate={navigate} />;
            if (p === '/ar-condicionado-aquecimento-sp') return <SegmentoView slug="aquecimento-sp" title="Aquecimento" tag="AQUECIMENTO" headline="Ar Condicionado para Aquecimento em São Paulo — Modo Quente no Inverno" desc="Sabia que o seu ar condicionado split também aquece? Em São Paulo, o modo quente do inverter é a forma mais econômica de aquecer ambientes no inverno. Instalação e manutenção em SP e ABC." dor="A maioria das pessoas não sabe que o split inverter aquece tão bem quanto resfria — e gasta até 3x menos que aquecedor elétrico. No inverno de São Paulo, o ar condicionado em modo quente é a solução mais eficiente." servicos={["Instalação de ar condicionado inverter com função quente e frio em SP", "Verificação e ativação do modo aquecimento em aparelhos existentes", "Manutenção preventiva antes do inverno para garantir o modo quente", "Instalação em apartamentos, casas e escritórios em São Paulo", "Todas as marcas com função quente/frio: LG, Samsung, Daikin, Midea", "Visita técnica gratuita e orçamento no mesmo dia"]} faq={[["O ar condicionado split aquece o ambiente?", "Sim. A maioria dos splits inverter modernos tem função quente e frio — chamada de "bomba de calor". No modo aquecimento, o aparelho inverte o ciclo de refrigeração e aquece o ambiente de forma muito eficiente. Verifique se o seu modelo tem essa função no controle remoto."], ["É econômico usar o ar condicionado para aquecer?", "Muito mais do que aquecedor elétrico. Um split inverter em modo aquecimento consome até 3x menos energia que um aquecedor de resistência para o mesmo efeito. Para cada 1 kWh consumido, o inverter gera até 3,5 kWh de calor."], ["O ar condicionado aquece bem no inverno de São Paulo?", "Sim. O inverno de São Paulo raramente passa de 5 horas abaixo de 10°C — temperatura em que os splits modernos ainda funcionam com boa eficiência. Para a maioria dos dias de inverno paulistano, o modo quente do inverter é mais que suficiente."], ["Meu ar condicionado não tem modo quente. O que fazer?", "Alguns modelos mais antigos ou básicos só resfriam. Se quiser adicionar a função de aquecimento, a única opção é trocar o equipamento por um modelo inverter quente/frio. Fazemos o orçamento gratuitamente — e a instalação aproveita a infraestrutura existente."]]} vizinhos="São Paulo · Santo André · São Bernardo · São Caetano · Diadema · Mauá" navigate={navigate} />;
            if (p === '/manutencao-preventiva-antes-do-verao-sp') return <SegmentoView slug="manutencao-preventiva-verao" title="Manutenção Antes do Verão" tag="PREVENTIVA" headline="Manutenção de Ar Condicionado Antes do Verão em São Paulo" desc="Revise seu ar condicionado agora e chegue ao verão sem susto. Manutenção preventiva completa em SP e ABC — checklist, limpeza, verificação de gás e garantia de funcionamento para o calor." dor="Em dezembro, quando o calor bater, os técnicos de ar condicionado ficam com agenda lotada por semanas. Quem não revisa no inverno espera na fila no verão — ou paga mais caro pelo atendimento emergencial." servicos={["Revisão completa antes do verão — checklist de 15 pontos", "Limpeza profunda de filtros, serpentina e dreno", "Verificação de nível de gás refrigerante", "Teste de componentes elétricos e eletrônicos", "Verificação de ruídos, vibrações e vazamentos", "Garantia de funcionamento — se der problema no verão, voltamos sem custo"]} faq={[["Por que fazer manutenção de ar condicionado no inverno?", "Porque é quando o aparelho está parado e os técnicos têm agenda disponível. Fazer a manutenção agora garante que o ar esteja funcionando perfeitamente quando o calor chegar — sem fila de espera e sem custo de emergência."], ["O ar condicionado que ficou parado no inverno precisa de revisão?", "Sim. Aparelhos parados por meses acumulam fungos nos filtros e na serpentina, o dreno pode entupir e os componentes elétricos precisam de verificação. Uma revisão antes de religar evita surpresas desagradáveis no primeiro dia de calor."], ["Quanto custa a revisão pré-verão em SP?", "A revisão preventiva começa a partir de R$ 120 por aparelho. Para contratos com mais de um aparelho, temos valor especial. Visita técnica gratuita e agendamento conforme sua disponibilidade."]]} vizinhos="São Paulo · Santo André · São Bernardo · São Caetano · Diadema · Mauá" navigate={navigate} />;
            return <HomeView navigate={navigate} />;
          })()}
        </main>

        {/* Footer */}
        <footer className="bg-[#0b1120] text-white pt-16 pb-6">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

              {/* Col 1 — Logo + Descrição + Redes */}
              <div className="space-y-6">
                <img
                  src="/images/logo-rodape.png"
                  alt="New Clima Ar Condicionado — Instalação e Manutenção de Ar Condicionado em SP"
                  className="h-28 w-auto invert"
                />
                <p className="text-blue-100/60 text-sm leading-relaxed">
                  Especialista em instalação, manutenção, higienização e PMOC de ar condicionado em São Paulo e ABC Paulista. Atendimento residencial, comercial e industrial.
                </p>
                <div className="flex gap-3">
                  <a href="https://www.instagram.com/newclimaar" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                    <Instagram size={16} />
                  </a>
                  <a href="https://www.facebook.com/newclimaar" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                    <Facebook size={16} />
                  </a>
                  <a href="https://www.linkedin.com/company/newclimaar" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                    <Linkedin size={16} />
                  </a>
                </div>
              </div>

              {/* Col 2 — Contato */}
              <div>
                <h4 className="font-bold text-white mb-6">Contato</h4>
                <ul className="space-y-4 text-sm">
                  <li className="flex items-center gap-3 text-blue-100/70">
                    <Phone size={15} className="text-primary-light shrink-0" />
                    <a href="tel:+5511963462516" className="hover:text-white transition-colors">(11) 96346-2516</a>
                  </li>
                  <li className="flex items-center gap-3 text-blue-100/70">
                    <div className="shrink-0 text-primary-light"><WhatsAppIcon size={15} /></div>
                    <a href="https://wa.me/5511963462516" rel="noopener noreferrer" className="hover:text-white transition-colors">WhatsApp — resposta em até 2h</a>
                  </li>
                  <li className="flex items-center gap-3 text-blue-100/70">
                    <MessageSquare size={15} className="text-primary-light shrink-0" />
                    <a href="mailto:contato@newclimaar.com.br" className="hover:text-white transition-colors">contato@newclimaar.com.br</a>
                  </li>
                  <li className="flex items-start gap-3 text-blue-100/70">
                    <MapPin size={15} className="text-primary-light shrink-0 mt-0.5" />
                    <span>R. Santa Cruz, 2187 — Vila Mariana, São Paulo / SP</span>
                  </li>
                  <li className="flex items-center gap-3 text-blue-100/70">
                    <Clock size={15} className="text-primary-light shrink-0" />
                    <span>Seg–Sex 8h–18h · Sáb 8h–13h</span>
                  </li>
                </ul>
              </div>

              {/* Col 3 — Institucional */}
              <div>
                <h4 className="font-bold text-white mb-6">Institucional</h4>
                <ul className="space-y-3 text-sm text-blue-100/60">
                  <li><button onClick={() => navigate('home')} className="hover:text-white transition-colors">Início</button></li>
                  <li><button onClick={() => navigate('sobre')} className="hover:text-white transition-colors">Quem Somos</button></li>
                  <li><button onClick={() => navigate('blog')} className="hover:text-white transition-colors">Blog</button></li>
                  <li><button onClick={() => navigate('contato')} className="hover:text-white transition-colors">Contato</button></li>
                  <li><button onClick={() => navigate('mapa-site')} className="hover:text-white transition-colors">Mapa do Site</button></li>
                  <li>
                    <a
                      href="https://maps.app.goo.gl/kHeynjnXoG943iG3A"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors flex items-center gap-1"
                    >
                      Avaliações no Google <ExternalLink size={11} />
                    </a>
                  </li>
                </ul>
              </div>

              {/* Col 4 — Mapa */}
              <div>
                <h4 className="font-bold text-white mb-6">Localização</h4>
                <div className="rounded-2xl overflow-hidden border border-white/10">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.9!2d-46.6378!3d-23.5893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a2b2ed7f3a1%3A0x53986ad429ea0b1b!2sR.%20Santa%20Cruz%2C%202187%20-%20Vila%20Mariana%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1683900000000!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="180"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="New Clima Ar Condicionado — Vila Mariana, São Paulo"
                  />
                </div>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-blue-100/40">
              <p>© 2026 New Clima Ar Condicionado. Todos os direitos reservados.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
                <button onClick={() => navigate('mapa-site')} className="hover:text-white transition-colors">Mapa do Site</button>
              </div>
            </div>
          </div>
        </footer>
        {/* WhatsApp Float */}
        <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-3 pointer-events-none">
              <div

            className="bg-white px-4 py-2 rounded-full shadow-xl border border-slate-100 text-sm font-bold text-slate-700 pointer-events-auto"
          >
            Orçamento grátis — resposta em 2h
          </div>
          <div className="relative pointer-events-auto">
            <div className="absolute inset-0 bg-success rounded-full animate-ping opacity-25"></div>
            <a 
              href="https://wa.me/5511963462516" 
              rel="noopener noreferrer"
              aria-label="Falar com especialista"
              className="relative w-16 h-16 bg-success text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
            >
              <WhatsAppIcon size={32} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

// --- Views ---

// --- Regions Tabs Component ---
function RegionsTabs({ navigate }: { navigate: (p: string) => void }) {
  const [activeTab, setActiveTab] = React.useState(0)

  const tabs = [
    {
      label: 'Zona Sul',
      page: 'sao-paulo',
      bairros: [
        'Vila Mariana', 'Moema', 'Saúde', 'Ipiranga', 'Jabaquara', 'Santo Amaro',
        'Campo Belo', 'Campo Grande', 'Brooklin', 'Cursino', 'Mirandópolis',
        'Planalto Paulista', 'Aclimação', 'Vila Clementino', 'Chácara Klabin',
        'Paraíso', 'Vila Olímpia', 'Itaim Bibi', 'Morumbi', 'Vila Andrade',
        'Jardim Paulista', 'Jardim Europa', 'Campo Limpo', 'Interlagos', 'Cambuci',
      ],
    },
    {
      label: 'Zona Oeste',
      page: 'sao-paulo',
      bairros: [
        'Pinheiros', 'Vila Madalena', 'Perdizes', 'Lapa', 'Pompéia', 'Água Branca',
        'Alto de Pinheiros', 'Butantã', 'Vila Leopoldina', 'Jardins',
        'Cerqueira César', 'Consolação', 'Santa Cecília', 'Higienópolis',
        'Pacaembu', 'Sumaré', 'Barra Funda',
      ],
    },
    {
      label: 'Zona Norte',
      page: 'sao-paulo',
      bairros: [
        'Santana', 'Tucuruvi', 'Vila Guilherme', 'Vila Maria', 'Casa Verde',
        'Mandaqui', 'Tremembé', 'Jaçanã', 'Vila Medeiros', 'Freguesia do Ó',
        'Brasilândia', 'Limão', 'Bom Retiro', 'Pari', 'Santa Efigênia',
        'Cachoeirinha', 'Imirim',
      ],
    },
    {
      label: 'Zona Leste',
      page: 'sao-paulo',
      bairros: [
        'Tatuapé', 'Anália Franco', 'Mooca', 'Vila Prudente', 'Penha',
        'Aricanduva', 'Carrão', 'Água Rasa', 'Belém', 'Brás',
        'Jardim Anália', 'Parque São Jorge', 'Vila Formosa', 'Sapopemba',
        'São Mateus', 'Itaquera', 'Guaianases', 'Penha de França',
      ],
    },
    {
      label: 'Região Central',
      page: 'sao-paulo',
      bairros: [
        'Centro', 'República', 'Sé', 'Liberdade', 'Bela Vista', 'Cambuci',
        'Consolação', 'Santa Cecília', 'Vila Buarque', 'Luz', 'Glicério',
        'Santa Efigênia', 'Bom Retiro', 'Pari', 'Brás',
      ],
    },
    {
      label: 'Santo André',
      page: 'santo-andre',
      bairros: [
        'Centro', 'Bairro Jardim', 'Campestre', 'Vila Assunção', 'Vila Gilda',
        'Vila Bastos', 'Utinga', 'Santa Teresinha', 'Parque das Nações',
        'Vila Pires', 'Jardim Bela Vista', 'Vila Alzira', 'Paraíso',
        'Vila Humaitá', 'Jardim', 'Bangú', 'Vila Luzita',
      ],
    },
    {
      label: 'São Bernardo',
      page: 'sao-bernardo',
      bairros: [
        'Centro', 'Rudge Ramos', 'Jardim do Mar', 'Assunção', 'Nova Petrópolis',
        'Baeta Neves', 'Planalto', 'Demarchi', 'Alves Dias', 'Anchieta',
        'Paulicéia', 'Cooperativa', 'Vila Euclides', 'Ferrazópolis',
        'Jardim Olavo', 'Independência', 'Vila São Pedro',
      ],
    },
    {
      label: 'São Caetano',
      page: 'sao-caetano',
      bairros: [
        'Centro', 'Santa Paula', 'Barcelona', 'Santo Antônio', 'Olímpico',
        'Boa Vista', 'Cerâmica', 'Fundação', 'Nova Gerty', 'Jardim São Caetano',
        'Oswaldo Cruz', 'Prosperidade', 'São José', 'Mauá',
      ],
    },
    {
      label: 'Diadema',
      page: 'diadema',
      bairros: [
        'Centro', 'Serraria', 'Taboão', 'Piraporinha', 'Canhema', 'Conceição',
        'Eldorado', 'Campanário', 'Inamar', 'Vila Nogueira', 'Casa Grande',
        'Bairro Casa Grande', 'Jardim Canhema', 'Vila Mota',
      ],
    },
    {
      label: 'Mauá',
      page: 'maua',
      bairros: [
        'Centro', 'Jardim Zaíra', 'Parque São Vicente', 'Vila Assis', 'Guapituba',
        'Vila Vitória', 'Jardim Oratório', 'Capuava', 'Vila Cardoso',
        'Jardim Miranda', 'Matriz', 'Vila Magini', 'Parque das Américas',
      ],
    },
  ]

  const active = tabs[activeTab]

  return (
    <div>
      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-8 border-b border-slate-200 pb-0">
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActiveTab(i)}
            className={`px-4 py-3 text-sm font-bold transition-all border-b-2 -mb-px ${
              activeTab === i
                ? 'border-primary-light text-primary-light'
                : 'border-transparent text-slate-400 hover:text-slate-600'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Bairros Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mb-6">
        {active.bairros.map((bairro, i) => (
          <div key={i} className="flex items-center gap-2 text-sm text-slate-600 font-medium">
            <MapPin size={13} className="text-primary-light shrink-0" />
            {bairro}
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <p className="text-slate-400 text-sm">{active.bairros.length} localidades cobertas em {active.label}.</p>
        <button
          onClick={() => navigate(active.page)}
          className="text-primary-light font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all"
        >
          Ver página completa <ArrowRight size={14} />
        </button>
      </div>
    </div>
  )
}


function HomeView({ navigate }: { navigate: (p: string) => void }) {
  return (
    <>
            {/* Hero Section */}
      <section className="relative bg-primary overflow-hidden pt-16 pb-24">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-white/20 rounded-full blur-[80px] -translate-y-1/3 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4" />
          <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-white/5 rounded-full blur-[60px] -translate-x-1/2 -translate-y-1/2" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div
            >
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-white text-sm font-semibold mb-8">
                <Zap size={14} className="text-yellow-400" />
                Resposta em até 2 horas · SP e ABC
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-[1.1] mb-6">
                Ar Condicionado em São Paulo e ABC — Instalação, Manutenção e Limpeza <span className="text-blue-400">com Garantia</span>
              </h1>
              <div className="flex flex-col gap-3 mb-10 max-w-md">
                {[
                  `Instalação com obra limpa e garantia de 1 ano por escrito`,
                  `Manutenção, limpeza e conserto de todas as marcas`,
                  `Visita técnica gratuita — orçamento no mesmo dia`,
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-success shrink-0" />
                    <span className="text-blue-100/90 text-base">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-0 mb-10 bg-white/5 border border-white/10 rounded-2xl overflow-hidden w-fit">
                {[
                  { number: "2018", label: "Em SP e ABC" },
                  { number: "500+", label: "Equipamentos" },
                  { number: "4.9★", label: "Google" },
                  { number: "100%", label: "Com garantia" },
                ].map((stat, i) => (
                  <div key={i} className={`px-5 py-4 text-center ${i < 3 ? 'border-r border-white/10' : ''}`}>
                    <div className="text-xl font-extrabold text-white">{stat.number}</div>
                    <div className="text-[11px] text-blue-100/50 font-medium mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <WhatsAppButton className="h-14 px-8 text-lg" text="Quero Solicitar Orçamento" />
                <a
                  href="https://maps.app.goo.gl/kHeynjnXoG943iG3A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-14 px-8 rounded-xl border-2 border-white/20 text-white font-bold hover:bg-white/10 transition-all inline-flex items-center gap-2"
                >
                  <Star size={16} className="text-yellow-400" fill="currentColor" />
                  Ver avaliações no Google
                </a>
              </div>
              <p className="text-blue-100/50 text-sm mt-4">⚡ Resposta em até 2 horas · Visita gratuita · Orçamento no mesmo dia</p>
            </div>

              <div
              className="hidden lg:block relative"
            >
              <div className="relative z-10 bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-primary">Receba uma Proposta</h3>
                  <p className="text-sm text-slate-500">Preencha os dados e entraremos em contato.</p>
                </div>
                {(() => {
                  const [nome, setNome] = React.useState('');
                  const [telefone, setTelefone] = React.useState('');
                  const [servico, setServico] = React.useState('Instalação Residencial');

                  const handleSubmit = (e: React.FormEvent) => {
                    e.preventDefault();
                    const msg = encodeURIComponent(
                      `Olá! Me chamo *${nome}* e gostaria de um orçamento.\n\n` +
                      `📱 *Telefone:* ${telefone}\n` +
                      `🔧 *Serviço:* ${servico}\n\n` +
                      `Aguardo o contato. Obrigado!`
                    );
                    window.open(`https://wa.me/5511963462516?text=${msg}`, '_blank');
                  };

                  return (
                    <form className="space-y-4" onSubmit={handleSubmit}>
                      <div className="space-y-2">
                        <label htmlFor="hero-name" className="text-xs font-bold text-slate-400 uppercase tracking-wider">Nome Completo</label>
                        <input
                          id="hero-name"
                          type="text"
                          placeholder="Seu nome"
                          value={nome}
                          onChange={e => setNome(e.target.value)}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary-light"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="hero-phone" className="text-xs font-bold text-slate-400 uppercase tracking-wider">WhatsApp / Telefone</label>
                        <input
                          id="hero-phone"
                          type="tel"
                          placeholder="(11) 99999-9999"
                          value={telefone}
                          onChange={e => setTelefone(e.target.value)}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary-light"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="hero-service" className="text-xs font-bold text-slate-400 uppercase tracking-wider">Serviço Desejado</label>
                        <select
                          id="hero-service"
                          value={servico}
                          onChange={e => setServico(e.target.value)}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary-light"
                        >
                          <option>Instalação Residencial</option>
                          <option>Instalação Comercial / VRF</option>
                          <option>Manutenção Preventiva / PMOC</option>
                          <option>Manutenção Corretiva / Reparo</option>
                          <option>Limpeza e Higienização</option>
                        </select>
                      </div>
                      <button type="submit" className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-primary-light transition-colors shadow-lg shadow-primary/20 flex items-center justify-center gap-2">
                        Solicitar Orçamento <ArrowRight size={18} />
                      </button>
                    </form>
                  );
                })()}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Brands Section */}
      <section className="bg-white py-8 border-b border-slate-100 relative z-20 overflow-hidden">
        <style>{`
          @keyframes scroll-brands {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .brands-track {
            animation: scroll-brands 20s linear infinite;
          }
          .brands-track:hover {
            animation-play-state: paused;
          }
        `}</style>
        <div className="overflow-hidden">
          <div className="brands-track flex items-center gap-16 whitespace-nowrap w-max">
            {[
              { name: "Samsung", url: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Samsung_logo_blue.png", h: "h-7" },
              { name: "LG", url: "https://upload.wikimedia.org/wikipedia/commons/8/8d/LG_logo_%282014%29.svg", h: "h-7" },
              { name: "Daikin", url: "https://upload.wikimedia.org/wikipedia/commons/0/05/DAIKIN_logo.svg", h: "h-6" },
              { name: "Fujitsu", url: "https://upload.wikimedia.org/wikipedia/commons/5/53/Fujitsu-Logo.svg", h: "h-8" },
              { name: "Carrier", url: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Logo_of_the_Carrier_Corporation.svg", h: "h-6" },
              { name: "Midea", url: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Midea.svg", h: "h-6" },
              { name: "Elgin", url: "https://www.maquinadecartao.com/img/1/elgin-logo-fabricante-de-maquininha-de-cartao-david-tech.webp", h: "h-7" },
              { name: "Gree", url: "https://upload.wikimedia.org/wikipedia/commons/0/01/Gree_electric_appliances_logo.svg", h: "h-6" },
              { name: "Samsung2", url: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Samsung_logo_blue.png", h: "h-7" },
              { name: "LG2", url: "https://upload.wikimedia.org/wikipedia/commons/8/8d/LG_logo_%282014%29.svg", h: "h-7" },
              { name: "Daikin2", url: "https://upload.wikimedia.org/wikipedia/commons/0/05/DAIKIN_logo.svg", h: "h-6" },
              { name: "Fujitsu2", url: "https://upload.wikimedia.org/wikipedia/commons/5/53/Fujitsu-Logo.svg", h: "h-8" },
              { name: "Carrier2", url: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Logo_of_the_Carrier_Corporation.svg", h: "h-6" },
              { name: "Midea2", url: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Midea.svg", h: "h-6" },
              { name: "Elgin2", url: "https://www.maquinadecartao.com/img/1/elgin-logo-fabricante-de-maquininha-de-cartao-david-tech.webp", h: "h-7" },
              { name: "Gree2", url: "https://upload.wikimedia.org/wikipedia/commons/0/01/Gree_electric_appliances_logo.svg", h: "h-6" },
            ].map((brand) => (
              <img
                key={brand.name}
                src={brand.url}
                alt={brand.name.replace(/\d+$/, '')}
                className={`${brand.h} w-auto object-contain opacity-80 hover:opacity-100 transition-opacity`}
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Propósito */}
      <section className="py-14 bg-primary text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="text-blue-100/60 text-xs font-bold uppercase tracking-widest mb-4">Nosso Propósito</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mb-4 tracking-tight">
            "Ar condicionado bem instalado não deveria ser <span className="text-blue-300">difícil de contratar</span> nem caro de manter."
          </h2>
          <p className="text-blue-100/70 text-lg">
            A New Clima faz a instalação ou manutenção com valor fechado antes de começar, técnico identificado e garantia por escrito ao final. Sem surpresa, sem sumiço depois.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block bg-ice text-primary-light text-[11px] font-bold tracking-[0.15em] uppercase px-4 py-1.5 rounded-full mb-5">Nossos Serviços</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">Instalação, manutenção e limpeza de ar condicionado em SP e ABC</h2>
            <p className="text-slate-500 text-lg">Do aparelho do quarto ao sistema de vários ambientes para empresa — instalação, conserto, limpeza e contrato de manutenção. Tudo em um só lugar.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                tag: "INSTALAÇÃO",
                title: "Instalação de Ar Condicionado em São Paulo",
                desc: "Split, multi-split, VRF e cassete em São Paulo e ABC. Projeto dimensionado, instalação limpa e teste de funcionamento antes de entregar.",
                img: "/images/instalacao.png",
                page: 'split-multisplit',
              },
              {
                tag: "MANUTENÇÃO",
                title: "Manutenção Preventiva e Corretiva em São Paulo",
                desc: "Planos mensais, trimestrais ou sob demanda em São Paulo e ABC. Atuamos antes do defeito aparecer — evita parada e conta de luz inflada.",
                img: "/images/limpeza.png",
                page: 'manutencao-preventiva',
              },
              {
                tag: "LIMPEZA",
                title: "Limpeza de Ar Condicionado em São Paulo",
                desc: "Remove fungos, bactérias e poeira acumulados no aparelho em São Paulo e ABC. Ar mais limpo para respirar, menos cheiro ruim e equipamento que dura mais.",
                img: "/images/higienizacao.png",
                page: 'limpeza',
              },
              {
                tag: "MANUTENÇÃO EMPRESARIAL",
                title: "Contrato de Manutenção para Empresas (PMOC)",
                desc: "Obrigatório por lei para prédios, hospitais e shoppings com mais de 60.000 BTUs. Cuidamos de tudo: visitas, registros e documentação conforme a Lei 13.589/18.",
                img: "/images/pmoc.png",
                page: 'manutencao-preventiva',
              },
              {
                tag: "MULTI AMBIENTES",
                title: "Ar Condicionado para Vários Ambientes (VRF)",
                desc: "Ideal para empresas, edifícios e casas grandes que precisam climatizar vários cômodos ao mesmo tempo, com economia de energia e controle individual.",
                img: "/images/vrf.png",
                page: 'vrf-mini-vrf',
              },
              {
                tag: "COMERCIAL",
                title: "Ar Condicionado Comercial em São Paulo e ABC",
                desc: "Cassete, Piso-Teto e Dutado para lojas, escritórios e restaurantes em São Paulo e ABC. Projeto técnico e execução completos.",
                img: "/images/comercial.png",
                page: 'sistemas-comerciais',
              },
            ].map((s, i) => (
              <div
                key={i}
                onClick={() => navigate(s.page)}
                className="group cursor-pointer bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <span className={`absolute top-4 left-4 text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full ${
                    s.tag === 'INSTALAÇÃO' ? 'bg-blue-600 text-white' :
                    s.tag === 'MANUTENÇÃO' ? 'bg-emerald-600 text-white' :
                    s.tag === 'HIGIENIZAÇÃO' ? 'bg-cyan-600 text-white' :
                    s.tag === 'PMOC' ? 'bg-amber-500 text-white' :
                    s.tag === 'SISTEMAS VRF' ? 'bg-violet-600 text-white' :
                    s.tag === 'COMERCIAL' ? 'bg-slate-700 text-white' :
                    'bg-white/90 text-primary'
                  }`}>
                    {s.tag}
                  </span>
                </div>
                <div className="p-6 pt-5">
                  <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-primary-light transition-colors leading-snug">{s.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-5">{s.desc}</p>
                  <div className="flex items-center gap-2 text-primary-light font-semibold text-sm group-hover:gap-3 transition-all">
                    Saiba mais <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Segments Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="mb-14">
            <span className="text-primary-light text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Segmentos Atendidos</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight">Ar condicionado para casa, empresa ou indústria</h2>
            <p className="text-slate-500 text-lg mt-3 max-w-xl">Para casa, escritório, loja ou galpão — cada ambiente tem uma necessidade diferente. A New Clima tem a solução certa para cada um.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Wind size={28} />,
                title: "Residencial",
                desc: "Instalamos e cuidamos do ar condicionado em apartamentos, casas e condomínios em São Paulo e ABC. Obra limpa, sem sujeira, com garantia de 1 ano por escrito.",
                page: 'split-multisplit',
              },
              {
                icon: <Settings size={28} />,
                title: "Empresas e Comércios",
                desc: "Instalação e manutenção de ar condicionado para escritórios, clínicas, lojas e restaurantes. Sem barulho, sem parar a operação e com contrato de manutenção (PMOC).",
                page: 'sistemas-comerciais',
              },
              {
                icon: <Zap size={28} />,
                title: "Industrial",
                desc: "Galpões, fábricas e data centers. Sistemas dimensionados para funcionar 24h por dia, com manutenção preventiva que evita paradas inesperadas na produção.",
                page: 'vrf-mini-vrf',
              },
              {
                icon: <ShieldCheck size={28} />,
                title: "Contrato de Manutenção (PMOC)",
                desc: "Para empresas obrigadas pela Lei 13.589/18. Assumimos toda a manutenção, documentação e responsabilidade técnica — você fica em dia com a Vigilância Sanitária.",
                page: 'manutencao-preventiva',
              },
            ].map((seg, i) => (
              <div
                key={i}
                onClick={() => navigate(seg.page)}
                className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-primary hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary-light mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {seg.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-primary mb-3 leading-snug">{seg.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">{seg.desc}</p>
                <div className="flex items-center gap-2 text-primary-light font-semibold text-sm group-hover:gap-3 transition-all">
                  Ver serviços <ArrowRight size={14} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-ice px-4 py-1.5 rounded-full text-primary-light text-sm font-bold mb-6 uppercase tracking-widest">
              Como Funciona
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-primary mb-6">
              Sua instalação sem estresse e com <span className="text-primary-light">zero surpresas</span>
            </h2>
            <p className="text-slate-500 text-lg">
              Um processo técnico claro e previsível, do primeiro contato à entrega das chaves.
            </p>
          </div>

          <div className="relative">
            {/* Connection Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 relative z-10">
              {[
                {
                  step: "01",
                  icon: <MessageSquare />,
                  title: "Mande uma mensagem",
                  desc: "Descreva o ambiente, mande uma foto ou a planta baixa se tiver. Nossa equipe técnica retorna em até 2 horas em dias úteis."
                },
                {
                  step: "02",
                  icon: <Ruler />,
                  title: "Visita técnica gratuita",
                  desc: "Um técnico vai até você, avalia o ambiente e confere tudo que precisa ser feito. Sem custo e sem compromisso."
                },
                {
                  step: "03",
                  icon: <HardHat />,
                  title: "Orçamento fechado, sem surpresa",
                  desc: "Você recebe o valor total por escrito antes de qualquer serviço. Sem taxa extra no meio do caminho."
                },
                {
                  step: "04",
                  icon: <Paintbrush />,
                  title: "Executamos com cuidado",
                  desc: "Equipe própria, ferramental adequado e proteção do ambiente. Obra limpa, sem quebradeira."
                },
                {
                  step: "05",
                  icon: <HeartHandshake />,
                  title: "Testamos tudo antes de ir embora",
                  desc: "Ligamos o aparelho, conferimos o funcionamento e entregamos a garantia de 1 ano por escrito. Só encerramos quando você aprovar."
                }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center group">
                  <div className="relative mb-8">
                    <div className="w-20 h-20 bg-white border-2 border-slate-100 rounded-full flex items-center justify-center text-primary-light group-hover:border-primary-light group-hover:bg-primary-light group-hover:text-white transition-all duration-500 shadow-xl shadow-slate-200/50">
                      {React.cloneElement(item.icon as React.ReactElement, { size: 32 })}
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white text-xs font-bold rounded-full flex items-center justify-center border-4 border-white">
                      {item.step}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-3 group-hover:text-primary-light transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-20 text-center">
            <WhatsAppButton text="Quero agendar uma visita técnica" className="shadow-xl shadow-success/20" />
          </div>
        </div>
        
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-ice rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 translate-x-1/3 translate-y-1/3" />
      </section>

      {/* Why Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <img 
                src="https://lh3.googleusercontent.com/6heGd7th8Pj-lMMTr-rWhQgDXIHEtDgkUzYkEakZwnOvYabXG6ykwi_RHfm8RpDcoNoWHvGRKRz8Yf2l7A=s360-w360-h360" 
                alt="Técnico New Clima realizando instalação de ar condicionado em São Paulo" 
                loading="lazy"
                className="rounded-3xl shadow-2xl w-full h-[600px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -right-10 bg-primary p-8 rounded-3xl shadow-2xl hidden md:block">
                <div className="flex items-center gap-4 text-white">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white">
                    <Star fill="currentColor" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">Nota 4.9/5</div>
                    <div className="text-sm opacity-70">Avaliações no Google</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <SectionHeading 
                tag="Diferenciais"
                title="Por que escolher a New Clima Ar?"
                subtitle="Técnicos treinados, materiais de qualidade e garantia real. Veja por que nossos clientes voltam — e indicam."
              />
              
              <div className="space-y-8">
                <FeatureItem 
                  title="Técnicos com Certificação"
                  desc="Nossa equipe é treinada diretamente pelos fabricantes LG, Samsung, Daikin e Fujitsu — e possui as certificações de segurança NR-10 e NR-35."
                />
                <FeatureItem 
                  title="Garantia por Escrito"
                  desc="Você recebe certificado de garantia e nota fiscal em todo serviço. 1 ano na instalação e 90 dias no conserto. Sem letra miúda."
                />
                <FeatureItem 
                  title="Materiais que Duram"
                  desc="Usamos tubulação de cobre puro, isolamento térmico de qualidade e suportes galvanizados. Isso evita vazamento de gás e mantém o aparelho rendendo por mais tempo."
                />
                <FeatureItem 
                  title="Atendemos Depois Também"
                  desc="Não sumimos após o serviço. Temos base em São Paulo e ABC, respondemos em até 2 horas e guardamos o histórico do seu equipamento para futuras manutenções."
                />
              </div>

              <div className="mt-12">
                <WhatsAppButton text="Falar com um Técnico Agora" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regions Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <span className="text-primary-light text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Onde Atendemos</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary mb-3 tracking-tight">Climatização em São Paulo e ABC Paulista</h2>
            <p className="text-slate-500 text-lg max-w-2xl">Cobertura completa em São Paulo capital (por zona) e em todas as cidades do ABC Paulista. Visita gratuita para qualquer bairro da lista.</p>
          </div>

          <RegionsTabs navigate={navigate} />
        </div>
      </section>

      {/* Google Reviews Section */}
      <section id="depoimentos" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            centered
            tag="Depoimentos"
            title="O que dizem os clientes sobre nossos serviços de climatização"
          />

          {/* Google Rating Summary Bar */}
          <div className="max-w-xl mx-auto mb-10">
            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-xl shadow-slate-200/50 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white border border-slate-100 rounded-lg flex items-center justify-center shadow-sm">
                  <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c3.11 0 5.71-1.03 7.62-2.81l-3.57-2.77c-1.04.7-2.38 1.11-4.05 1.11-3.11 0-5.75-2.1-6.7-4.93H1.7v2.87C3.61 20.29 7.56 23 12 23z" fill="#34A853"/>
                    <path d="M5.3 13.6c-.24-.7-.38-1.45-.38-2.25s.14-1.55.38-2.25V6.23H1.7C.62 8.39 0 10.81 0 13.37c0 2.56.62 4.98 1.7 7.14l3.6-2.91z" fill="#FBBC05"/>
                    <path d="M12 4.75c1.69 0 3.21.58 4.41 1.71l3.3-3.3C17.71 1.03 15.11 0 12 0 7.56 0 3.61 2.71 1.7 6.23l3.6 2.87c.95-2.83 3.59-4.93 6.7-4.93z" fill="#EA4335"/>
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">Avaliações no Google</div>
                  <div className="text-sm font-extrabold text-primary">Google Meu Negócio</div>
                </div>
              </div>
              
              <div className="flex items-center gap-6 border-l border-slate-100 pl-6 hidden md:flex">
                <div>
                  <div className="text-4xl font-black text-primary">4.9</div>
                  <div className="text-xs text-slate-400 font-bold">24 avaliações</div>
                </div>
                <div>
                  <div className="flex gap-0.5 text-accent mb-1">
                    {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                </div>
                <a 
                  href="https://maps.app.goo.gl/kHeynjnXoG943iG3A" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Ver todas as avaliações no Google"
                  className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center text-slate-300 hover:text-primary hover:border-primary transition-all"
                >
                  <ExternalLink size={16} />
                </a>
              </div>

              {/* Mobile Rating */}
              <div className="flex items-center gap-4 md:hidden w-full pt-4 border-t border-slate-50">
                <div className="text-3xl font-black text-primary">4.9</div>
                <div className="flex-1">
                  <div className="flex gap-0.5 text-accent mb-0.5">
                    {[1,2,3,4,5].map(i => <Star key={i} size={12} fill="currentColor" />)}
                  </div>
                </div>
                <ExternalLink size={16} className="text-slate-300" />
              </div>
            </div>
          </div>

          {/* Scrollable Container Container */}
          <div className="relative group">
            {/* Scroll Buttons */}
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 hidden xl:block">
              <button 
                onClick={() => {
                  const container = document.getElementById('testimonials-container');
                  if (container) container.scrollBy({ left: -400, behavior: 'smooth' });
                }}
                className="w-12 h-12 rounded-full bg-white shadow-xl border border-slate-100 flex items-center justify-center text-primary hover:bg-slate-50 transition-all"
                aria-label="Anterior"
              >
                <ChevronLeft size={24} />
              </button>
            </div>
            
            <div className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 hidden xl:block">
              <button 
                onClick={() => {
                  const container = document.getElementById('testimonials-container');
                  if (container) container.scrollBy({ left: 400, behavior: 'smooth' });
                }}
                className="w-12 h-12 rounded-full bg-white shadow-xl border border-slate-100 flex items-center justify-center text-primary hover:bg-slate-50 transition-all"
                aria-label="Próximo"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            <div 
              id="testimonials-container"
              className="flex gap-6 overflow-x-auto pb-8 hide-scrollbar snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0 scroll-smooth"
            >
              <div className="flex-none w-[85vw] md:w-[400px] snap-center">
                <GoogleReviewCard 
                  name="Samuel Carvalho"
                  service="Instalação + Manutenção — Vila Mariana"
                  content="Contratei o profissional José Erivaldo para serviços de instalação, manutenção preventiva, conserto e limpeza do meu ar-condicionado. O trabalho foi muito ótimo! Ele é pontual, atencioso, caprichoso e explica tudo o que está fazendo. O ambiente ficou limpo e o ar-condicionado funcionando perfeitamente. Recomendo muito e com certeza voltarei a contratar!"
                />
              </div>
              <div className="flex-none w-[85vw] md:w-[400px] snap-center">
                <GoogleReviewCard 
                  name="Victor Peres"
                  service="Instalação Multi Split — Moema"
                  content="Contratei esta empresa para instalação de 3 Ar Condicionado na minha residência. O Sr. Erivaldo é um ótimo profissional e atencioso, me explicou como seria feito todo serviço. Muito obrigado!"
                />
              </div>
              <div className="flex-none w-[85vw] md:w-[400px] snap-center">
                <GoogleReviewCard 
                  name="Melcia Beleza"
                  service="Manutenção Corretiva — Santo André"
                  content="A empresa tem um excelente atendimento, são atenciosos e o técnico responsável Erivaldo consertou o problema do meu equipamento. Indico muito essa empresa!"
                />
              </div>
              <div className="flex-none w-[85vw] md:w-[400px] snap-center">
                <GoogleReviewCard 
                  name="Rosemeire Fonseca"
                  service="Manutenção Preventiva — Pinheiros"
                  content="Indico muito a empresa New Clima. Ótimo trabalho, técnico muito atencioso."
                />
              </div>
              <div className="flex-none w-[85vw] md:w-[400px] snap-center">
                <GoogleReviewCard 
                  name="Matheus Santos"
                  service="Instalação + Limpeza — Brooklin"
                  content="Empresa com muita experiência e trabalho de qualidade. Os melhores profissionais que já trabalhei."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <SectionHeading 
            centered
            tag="Perguntas Frequentes"
            title="Dúvidas sobre ar condicionado em São Paulo?"
            subtitle="Respondemos as perguntas mais comuns sobre instalação, limpeza, conserto e contratos de manutenção."
          />
          
          <div className="space-y-4">
            <FaqItem 
              question="Quanto custa instalar ar condicionado em São Paulo?"
              answer="O custo de instalação varia conforme a capacidade em BTUs, complexidade da infraestrutura elétrica e hidráulica e distância entre as unidades interna e externa. Uma instalação residencial padrão em SP começa a partir de R$ 350. A visita técnica é gratuita e o orçamento é entregue no mesmo dia, com escopo e valor fechado por escrito."
            />
            <FaqItem 
              question="Quanto tempo leva para instalar um ar condicionado?"
              answer="Uma instalação padrão de split hi-wall leva em média de 3 a 5 horas, dependendo da complexidade da infraestrutura e distância entre as unidades."
            />
            <FaqItem 
              question="Qual a garantia dos serviços?"
              answer="1 ano de garantia na instalação e 90 dias no conserto de ar condicionado. Tudo documentado com certificado de garantia e nota fiscal. Usamos materiais de qualidade para que o serviço dure de verdade."
            />
            <FaqItem 
              question="Vocês atendem em apartamentos?"
              answer="Sim, somos especialistas em instalações em apartamentos, respeitando normas de condomínio, fachadas e varandas técnicas."
            />
            <FaqItem 
              question="Vale a pena pagar mais pelo Inverter?"
              answer="Sim. O ar condicionado Inverter economiza até 60% de energia em comparação com o convencional — porque ele ajusta a potência em vez de ficar ligando e desligando. Para uso diário em SP, o valor a mais se paga em menos de 18 meses de conta de luz."
            />
            <FaqItem 
              question="Com que frequência fazer a limpeza do ar condicionado?"
              answer="Para uso em casa, recomendamos limpeza completa (higienização) a cada 6 meses. Em escritórios, clínicas ou locais com muito uso, a cada 3 meses. Sem limpeza regular, o aparelho acumula fungos, ácaros e bactérias — e passa tudo isso para o ar que você respira."
            />
            <FaqItem 
              question="Vocês instalam aparelhos que comprei em outra loja?"
              answer="Sim. Instalamos qualquer marca — LG, Samsung, Daikin, Midea, Fujitsu, Carrier, Elgin e Gree. A instalação não cancela a garantia de fábrica do aparelho, e você ainda recebe 1 ano de garantia na nossa mão de obra."
            />
            <FaqItem 
              question="Como saber a potência (BTUs) correta para meu ambiente?"
              answer="O cálculo leva em conta a metragem, incidência de sol, número de pessoas e eletrônicos no local. Em média, usamos 600 a 800 BTUs por m². Nossos técnicos realizam esse cálculo exato para você."
            />
            <FaqItem 
              question="Quais as formas de pagamento?"
              answer="Aceitamos PIX, Cartão de Crédito (até 10x), Débito e faturamento para empresas (sob consulta)."
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-primary relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Precisa instalar, consertar ou limpar seu ar condicionado em SP?
          </h2>
          <p className="text-blue-100/70 text-lg mb-3 max-w-2xl mx-auto">
            Manda uma mensagem no WhatsApp com o que precisa — pode ser foto, medida do cômodo ou só a dúvida. Respondemos em até 2 horas e agendamos a visita gratuita.
          </p>
          <p className="text-blue-100/50 text-sm mb-12">Visita gratuita · Orçamento no mesmo dia · Garantia por escrito</p>
          <p className="text-blue-100/70 text-lg mb-12 max-w-2xl mx-auto hidden">
            Fale agora com um de nossos especialistas e receba um orçamento personalizado para seu projeto.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://wa.me/5511963462516"
              rel="noopener noreferrer"
              className="h-16 px-10 rounded-xl bg-success text-white font-bold flex items-center justify-center hover:bg-success/90 transition-all shadow-xl shadow-success/20"
            >
              Solicitar Orçamento Grátis
            </a>
            <a 
              href="tel:+5511963462516"
              className="h-16 px-10 rounded-xl border-2 border-white/20 text-white font-bold flex items-center justify-center hover:bg-white/10 transition-all"
            >
              Ligar: (11) 96346-2516
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

// --- Helper Components ---

function ServiceCard({ icon, title, desc, category, onClick }: { icon: React.ReactNode, title: string, desc: string, category: string, onClick: () => void }) {
  return (
    <div 
      onClick={onClick}
      className="bg-[#0f172a] p-8 rounded-3xl border border-white/5 hover:border-primary-light/40 hover:bg-[#1e293b] transition-all cursor-pointer group relative overflow-hidden shadow-lg shadow-black/20"
    >
      <div className="flex justify-between items-start mb-8">
        <div className="w-12 h-12 bg-primary/20 border border-primary/30 rounded-xl flex items-center justify-center text-primary-light group-hover:scale-110 transition-transform shadow-inner shadow-white/5">
          {React.cloneElement(icon as React.ReactElement, { size: 24 })}
        </div>
        <span className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.2em]">
          {category}
        </span>
      </div>
      
      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
        {title}
      </h3>
      
      <p className="text-blue-100/70 text-sm leading-relaxed mb-8 min-h-[3rem]">
        {desc}
      </p>
      
      <div className="flex items-center gap-2 text-primary-light font-bold text-xs uppercase tracking-widest group-hover:gap-3 transition-all border-t border-white/5 pt-6">
        SAIBA MAIS <ArrowRight size={14} />
      </div>
    </div>
  );
}

function FeatureItem({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="flex gap-4">
      <div className="w-6 h-6 bg-success/10 rounded-full flex items-center justify-center text-success shrink-0 mt-1">
        <CheckCircle2 size={16} />
      </div>
      <div>
        <h4 className="font-bold text-primary mb-1">{title}</h4>
        <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function GoogleReviewCard({ name, service, content }: { name: string, service: string, content: string }) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-sm">
            {name.charAt(0)}
          </div>
          <div>
            <div className="font-bold text-primary text-sm">{name}</div>
            <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{service}</div>
          </div>
        </div>
        <div className="flex gap-0.5 text-accent">
          {[1,2,3,4,5].map(i => <Star key={i} size={10} fill="currentColor" />)}
        </div>
      </div>
      <p className="text-slate-600 text-sm leading-relaxed line-clamp-4 flex-grow">"{content}"</p>
    </div>
  );
}

function FaqItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-slate-50 transition-colors"
      >
        <span className="font-bold text-primary">{question}</span>
        <ChevronDown size={20} className={`text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-6 pb-5 text-slate-500 text-sm leading-relaxed border-t border-slate-50 pt-4">
            {answer}
          </div>
        </div>
      </div>
  );
}

// --- Placeholder Views (To be expanded) ---

function ServiceDetailView({ service, navigate }: { service: string, navigate: (p: string) => void }) {
  return (
    <div className="pt-10">
      {service === 'split' && <SplitMultiSplit />}
      {service === 'comercial' && <SistemasComerciais />}
      {service === 'vrf' && <VRFMiniVRF />}
      {service === 'preventiva' && <ManutencaoPreventiva />}
      {service === 'corretiva' && <ManutencaoCorretiva />}
      {service === 'limpeza' && <LimpezaHigienizacao />}
      <div className="container mx-auto px-4 pb-20">
        <button onClick={() => navigate('home')} className="text-primary-light font-bold flex items-center gap-2 hover:gap-3 transition-all">
          <ArrowRight size={16} className="rotate-180" /> Voltar para Home
        </button>
      </div>
    </div>
  );
}

function BlogView({ navigate, postId }: { navigate: (p: string) => void, postId?: string }) {
  const BackButton = () => (
    <button onClick={() => navigate('blog')} className="mb-20 text-primary-light font-bold flex items-center gap-2 hover:gap-3 transition-all">
      <ArrowRight size={16} className="rotate-180" /> Voltar para Blog
    </button>
  );

  if (postId === 'inverter') return <div className="container mx-auto px-4"><BlogInverter /><BackButton /></div>;
  if (postId === 'apartamento') return <div className="container mx-auto px-4"><BlogApartamento /><BackButton /></div>;
  if (postId === 'btus') return <div className="container mx-auto px-4"><BlogBTUs /><BackButton /></div>;
  if (postId === 'pmoc') return <div className="container mx-auto px-4"><BlogPMOC /><BackButton /></div>;
  if (postId === 'round-cassette') return <div className="container mx-auto px-4"><BlogRoundCassette /><BackButton /></div>;
  if (postId === 'obra-limpa') return <div className="container mx-auto px-4"><BlogObraLimpa /><BackButton /></div>;
  if (postId === 'quarto') return <div className="container mx-auto px-4"><BlogQuarto /><BackButton /></div>;
  if (postId === 'convencional-inverter') return <div className="container mx-auto px-4"><BlogConvencionalInverter /><BackButton /></div>;
  if (postId === 'empresas') return <div className="container mx-auto px-4"><BlogEmpresas /><BackButton /></div>;
  if (postId === 'pmoc-obrigatorio') return <div className="container mx-auto px-4"><BlogPMOCObrigatorio /><BackButton /></div>;
  if (postId === 'multa-pmoc') return <div className="container mx-auto px-4"><BlogMultaPMOC /><BackButton /></div>;
  if (postId === 'pmoc-condominio') return <div className="container mx-auto px-4"><BlogPMOCCondominio /><BackButton /></div>;
  if (postId === 'custo-pmoc') return <div className="container mx-auto px-4"><BlogCustoPMOC /><BackButton /></div>;
  if (postId === 'custo-instalacao') return <div className="container mx-auto px-4"><BlogCustoInstalacao /><BackButton /></div>;
  if (postId === 'qual-ac') return <div className="container mx-auto px-4"><BlogQualAC /><BackButton /></div>;
  if (postId === 'split-multi-split') return <div className="container mx-auto px-4"><BlogSplitMultiSplitApartamento /><BackButton /></div>;
  if (postId === 'manutencao-consequencias') return <div className="container mx-auto px-4"><BlogManutencaoConsequencias /><BackButton /></div>;

  return (
    <div className="py-16 container mx-auto px-4">
      
      <SectionHeading 
        tag="Nosso Blog"
        title="Dicas e Especialista em Climatização"
        subtitle="Conteúdo técnico para ajudar você a escolher e manter seu ar condicionado com inteligência."
        asH1
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <BlogCard 
          title="PMOC Obrigatório: O Que É e Quem Precisa Ter em SP"
          desc="Lei 13.589/2018 exige PMOC para empresas com mais de 60.000 BTUs. Multas chegam a R$ 1,5 milhão."
          image="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800"
          onClick={() => navigate('blog-pmoc-obrigatorio')}
        />
        <BlogCard 
          title="Multa por Não Ter PMOC: R$ 2.000 a R$ 1,5 Milhão"
          desc="Como funciona a fiscalização da Vigilância Sanitária em SP e como regularizar antes de ser autuado."
          image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800"
          onClick={() => navigate('blog-multa-pmoc')}
        />
        <BlogCard 
          title="PMOC para Condomínios em SP: Guia para Síndicos"
          desc="Responsabilidades do síndico, quais condomínios são obrigados e passo a passo para regularizar."
          image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
          onClick={() => navigate('blog-pmoc-condominio')}
        />
        <BlogCard 
          title="Quanto Custa o PMOC em São Paulo em 2026?"
          desc="Tabela de preços por porte de empresa, o que está incluso e cálculo de ROI do contrato."
          image="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800"
          onClick={() => navigate('blog-custo-pmoc')}
        />
        <BlogCard 
          title="Quanto Custa Instalar Ar Condicionado em SP em 2026?"
          desc="Tabela completa de preços por tipo de sistema, o que está incluso e o que encarece a instalação."
          image="https://images.unsplash.com/photo-1621905252507-b353174ad739?auto=format&fit=crop&q=80&w=800"
          onClick={() => navigate('blog-custo-instalacao')}
        />
        <BlogCard 
          title="Qual Ar Condicionado Comprar em 2026?"
          desc="Guia completo: Inverter vs Convencional, melhores marcas para SP e como calcular BTUs."
          image="https://images.unsplash.com/photo-1563228911-37d40078021a?auto=format&fit=crop&q=80&w=800"
          onClick={() => navigate('blog-qual-ac')}
        />
        <BlogCard 
          title="Split ou Multi Split para Apartamento em SP?"
          desc="Quando escolher cada sistema, diferenças de custo e qual é mais econômico no longo prazo."
          image="https://images.unsplash.com/photo-1513584684374-8bdb7489feef?auto=format&fit=crop&q=80&w=800"
          onClick={() => navigate('blog-split-multi-split')}
        />
        <BlogCard 
          title="O Que Acontece Sem Manutenção no Ar Condicionado?"
          desc="Do aumento na conta de luz à morte prematura do compressor — o que esperar mês a mês."
          image="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800"
          onClick={() => navigate('blog-manutencao-consequencias')}
        />
        <BlogCard 
          title="Ar Condicionado Inverter"
          desc="Entenda por que a tecnologia inverter é a melhor escolha para economia."
          image="https://images.unsplash.com/photo-1596752763335-513470717c18?auto=format&fit=crop&q=80&w=800"
          onClick={() => navigate('blog-inverter')}
        />
        <BlogCard 
          title="Instalação em Apartamento"
          desc="O que você precisa saber antes de instalar ar condicionado em condomínios."
          image="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=800"
          onClick={() => navigate('blog-apartamento')}
        />
        <BlogCard 
          title="Cálculo de BTUs"
          desc="Aprenda a calcular a potência ideal para cada tipo de ambiente."
          image="https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&q=80&w=800"
          onClick={() => navigate('blog-btus')}
        />
        <BlogCard 
          title="PMOC: Tudo que você precisa saber"
          desc="Guia básico sobre o Plano de Manutenção, Operação e Controle."
          image="https://images.unsplash.com/photo-1504917595217-d4dc5f6b276d?auto=format&fit=crop&q=80&w=800"
          onClick={() => navigate('blog-pmoc')}
        />
        <BlogCard 
          title="LG Round Cassette"
          desc="Conheça o design e a eficiência do cassete circular 360° da LG."
          image="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
          onClick={() => navigate('blog-round-cassette')}
        />
        <BlogCard 
          title="Instalação Obra Limpa"
          desc="Saiba como é possível instalar seu ar sem sujeira e quebra-quebra."
          image="https://images.unsplash.com/photo-1527359443443-84a48abc7dfd?auto=format&fit=crop&q=80&w=800"
          onClick={() => navigate('blog-obra-limpa')}
        />
        <BlogCard 
          title="Ar no Quarto"
          desc="Dicas para posicionar o aparelho e ter noites de sono perfeitas."
          image="https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&q=80&w=800"
          onClick={() => navigate('blog-quarto')}
        />
        <BlogCard 
          title="Convencional vs Inverter"
          desc="Qual a melhor escolha para sua realidade e seu bolso?"
          image="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800"
          onClick={() => navigate('blog-convencional-inverter')}
        />
        <BlogCard 
          title="Sistemas VRF"
          desc="A solução definitiva para grandes residências e empresas."
          image="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=800"
          onClick={() => navigate('blog-empresas')}
        />
        <BlogCard
          title="Ar Condicionado Faz Mal à Saúde?"
          desc="Saiba quando o ar condicionado prejudica a saúde e como evitar com manutenção regular em SP."
          image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800"
          onClick={() => navigate('blog-saude')}
        />
        <BlogCard
          title="Dormir com Ar Condicionado Faz Mal?"
          desc="Temperatura certa e aparelho limpo fazem toda a diferença. Veja as melhores práticas para SP."
          image="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=800"
          onClick={() => navigate('blog-dormir')}
        />
        <BlogCard
          title="Gasta Mais de Dia ou à Noite?"
          desc="Descubra quando o ar condicionado consome mais energia em SP e como economizar na conta de luz."
          image="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800"
          onClick={() => navigate('blog-consumo')}
        />
        <BlogCard
          title="Quanto Gasta um Inverter por Mês?"
          desc="Tabela completa de consumo por BTUs e horas de uso. Calcule o gasto real do seu aparelho em SP."
          image="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800"
          onClick={() => navigate('blog-quanto-gasta')}
        />
        <BlogCard
          title="Mau Cheiro no Ar Condicionado"
          desc="Causas do mau cheiro e como eliminar de vez com higienização profissional em São Paulo."
          image="https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&q=80&w=800"
          onClick={() => navigate('blog-mau-cheiro')}
        />
        <BlogCard
          title="Ar Condicionado Desliga Sozinho"
          desc="7 causas para o desligamento automático e como resolver. Atendimento em SP e ABC."
          image="https://images.unsplash.com/photo-1621905252507-b353174ad739?auto=format&fit=crop&q=80&w=800"
          onClick={() => navigate('blog-desliga-sozinho')}
        />
        <BlogCard
          title="Qual a Vida Útil do Ar Condicionado?"
          desc="Um split bem mantido dura até 15 anos. Saiba o que reduz a vida útil e como prolongar."
          image="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800"
          onClick={() => navigate('blog-vida-util')}
        />
        <BlogCard
          title="Temperatura Ideal do Ar Condicionado"
          desc="Entre 23°C e 25°C é o ideal para conforto e economia em São Paulo. Saiba o impacto na conta de luz."
          image="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800"
          onClick={() => navigate('blog-temperatura')}
        />
        <BlogCard
          title="Função Dry: Para que Serve?"
          desc="O modo Dry desumidifica o ar sem resfriar demais. Ideal para dias úmidos e chuvosos em SP."
          image="https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?auto=format&fit=crop&q=80&w=800"
          onClick={() => navigate('blog-funcao-dry')}
        />
        <BlogCard
          title="Gás R32 e R410A: Qual a Diferença?"
          desc="Entenda a diferença entre os gases refrigerantes e por que nunca devem ser misturados."
          image="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800"
          onClick={() => navigate('blog-gas')}
        />
      </div>
    </div>
  );
}

function BlogCard({ title, desc, image, onClick }: { title: string, desc: string, image?: string, onClick: () => void }) {
  return (
    <div onClick={onClick} className="bg-white border border-slate-200 rounded-3xl p-8 hover:shadow-xl transition-all cursor-pointer group">
      <div className="w-full h-48 bg-slate-100 rounded-2xl mb-6 overflow-hidden">
        <img 
          src={image || `https://picsum.photos/seed/${title}/600/400`} 
          alt={`${title} — New Clima Ar Condicionado SP`} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform" 
          referrerPolicy="no-referrer" 
          loading="lazy" 
        />
      </div>
      <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
      <p className="text-slate-500 text-sm mb-6">{desc}</p>
      <div className="text-primary-light font-bold text-sm flex items-center gap-2">Ler Artigo <ArrowRight size={16} /></div>
    </div>
  );
}

function AboutView({ navigate }: { navigate: (p: string) => void }) {
  return (
    <div className="py-16 container mx-auto px-4">
      
      
      <SectionHeading 
        tag="Nossa História"
        title="New Clima Ar Condicionado: Referência em Climatização em SP e ABC"
        subtitle="Especialistas em climatização com foco em eficiência, saúde e conforto térmico para residências e empresas."
        asH1
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
        <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-6">
          <p className="text-lg">
            A <strong>New Clima Ar Condicionado</strong> nasceu da necessidade de oferecer um serviço de <strong>climatização especializado</strong> diferenciado em São Paulo e na região do ABC Paulista. Desde 2018, são 7 anos consolidando nossa marca como sinônimo de confiança em instalação de ar condicionado em SP e ABC Paulista.
          </p>
          <p>
            Nossa atuação abrange desde a climatização residencial de alto padrão até complexos sistemas industriais e comerciais. Somos especialistas em marcas líderes como Daikin, Fujitsu, LG, Samsung e Carrier, garantindo que cada projeto de <strong>ar condicionado no ABC e São Paulo</strong> seja executado com perfeição técnica e estética.
          </p>
          <p>
            Acreditamos que a qualidade do ar é fundamental para a saúde e produtividade. Por isso, investimos constantemente em tecnologias de <strong>limpeza e higienização profunda</strong>, além de sermos autoridade na implementação de <strong>PMOC (Plano de Manutenção, Operação e Controle)</strong>, garantindo que sua empresa esteja em conformidade com as normas da ANVISA.
          </p>
          <div className="bg-ice p-8 rounded-3xl border border-primary-light/10">
            <h4 className="text-primary font-bold mb-2">Nossa Missão</h4>
            <p className="text-sm italic">"Proporcionar ambientes saudáveis e confortáveis através de soluções de climatização inteligentes, sustentáveis e com o mais alto rigor técnico."</p>
          </div>
        </div>
        <div className="relative">
          <img src="https://lh3.googleusercontent.com/iQKQFvKF5SWFsxmrm5b60daSTbTDLx4TiQGsh2R-UnoejbPz0gCFAuwhvwAd1QUAKN0Bqwy-m28h8Z2ITQ=s360-w360-h360" alt="New Clima Ar Condicionado — empresa de ar condicionado em São Paulo e ABC desde 2018" className="rounded-3xl shadow-2xl w-full h-auto object-cover" referrerPolicy="no-referrer" loading="lazy" />
          <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary-light/10 rounded-full flex items-center justify-center text-primary-light">
                <ShieldCheck size={28} />
              </div>
              <div>
                <div className="text-primary font-bold text-xl">Garantia Total</div>
                <div className="text-slate-400 text-xs font-bold uppercase tracking-widest">Em todos os serviços</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SectionHeading 
        centered
        tag="Diferenciais"
        title="Por que escolher a New Clima Ar?"
        subtitle="Trabalhamos para ser a sua primeira escolha em ar condicionado em São Paulo e ABC."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {[
          { title: "Equipe Própria", desc: "Projetos acompanhados por técnicos especialistas em climatização.", icon: <HardHat /> },
          { title: "Técnicos Certificados", desc: "Nossa equipe passa por treinamentos constantes nos principais fabricantes.", icon: <CheckCircle2 /> },
          { title: "Obra Limpa", desc: "Utilizamos ferramentas de aspiração e proteção para garantir sua casa impecável.", icon: <Paintbrush /> },
          { title: "Atendimento Rápido", desc: "Logística estratégica para atender SP e ABC com agilidade e pontualidade.", icon: <Clock /> }
        ].map((item, i) => (
          <div key={i} className="bg-white border border-slate-100 p-8 rounded-3xl hover:shadow-xl hover:shadow-primary/5 transition-all group">
            <div className="w-14 h-14 bg-ice rounded-2xl flex items-center justify-center text-primary-light mb-6 group-hover:scale-110 transition-transform">
              {React.cloneElement(item.icon as React.ReactElement, { size: 28 })}
            </div>
            <h4 className="text-xl font-bold text-primary mb-3">{item.title}</h4>
            <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-br from-primary to-primary-dark rounded-[2.5rem] p-12 text-center text-white shadow-2xl shadow-primary/20">
        <h3 className="text-3xl md:text-4xl font-bold mb-6">Pronto para climatizar seu ambiente com quem entende?</h3>
        <p className="text-blue-100/70 mb-10 max-w-2xl mx-auto text-lg">Seja para instalação residencial ou manutenção corporativa em SP e ABC, a New Clima Ar é sua parceira de confiança.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <WhatsAppButton text="Falar com um Especialista" className="bg-white !text-primary hover:bg-blue-50" />
          <button 
            onClick={() => navigate('contato')}
            className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-all border border-white/20"
          >
            Ver Canais de Contato
          </button>
        </div>
      </div>
    </div>
  );
}


function ContactView() {
  return (
    <div className="py-16 container mx-auto px-4">
      
      <SectionHeading 
        tag="Contato"
        title="Fale com Nossos Especialistas em Climatização"
        subtitle="Estamos prontos para atender seu chamado em São Paulo e no ABC Paulista."
        asH1
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-slate-50 p-8 rounded-3xl">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Nome Completo</label>
                <input type="text" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3" placeholder="Seu nome" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">WhatsApp</label>
                <input type="tel" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3" placeholder="(11) 99999-9999" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Serviço Desejado</label>
              <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3">
                <option>Instalação de Ar Condicionado</option>
                <option>Manutenção / Conserto</option>
                <option>Limpeza e Higienização</option>
                <option>PMOC / Corporativo</option>
                <option>Outros</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Mensagem</label>
              <textarea className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 h-32" placeholder="Descreva sua necessidade..."></textarea>
            </div>
            <button className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-primary-light transition-colors">Enviar Mensagem</button>
          </form>
        </div>
        <div className="space-y-8">
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-ice rounded-2xl flex items-center justify-center text-primary-light shrink-0">
              <Phone size={24} />
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">Telefone / WhatsApp</h4>
              <p className="text-slate-500">(11) 96346-2516</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-ice rounded-2xl flex items-center justify-center text-primary-light shrink-0">
              <MessageSquare size={24} />
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">E-mail</h4>
              <a href="mailto:contato@newclimaar.com.br" className="text-slate-500 hover:text-primary-light transition-colors">contato@newclimaar.com.br</a>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-ice rounded-2xl flex items-center justify-center text-primary-light shrink-0">
              <MapPin size={24} />
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">Endereço Técnico</h4>
              <p className="text-slate-500">R. Santa Cruz, 2187 - Vila Mariana, São Paulo - SP</p>
              <p className="text-xs text-slate-400 mt-1">Atendemos toda a Capital e Grande ABC.</p>
            </div>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <h4 className="font-bold text-primary mb-2">Horário de Atendimento</h4>
            <p className="text-sm text-slate-500">Segunda a Sexta: 08h às 18h</p>
            <p className="text-sm text-slate-500">Sábado: 08h às 13h</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function RegionView({ region, navigate }: { region: string, navigate: (p: string) => void }) {
  return (
    <div>
      {region === 'sao-paulo' && <SaoPauloRegion navigate={navigate} />}
      {region === 'santo-andre' && <SantoAndreRegion navigate={navigate} />}
      {region === 'sao-bernardo' && <SaoBernardoRegion navigate={navigate} />}
      {region === 'sao-caetano' && <SaoCaetanoRegion navigate={navigate} />}
      {region === 'diadema' && <DiademaMauaRegion regionName="Diadema" navigate={navigate} />}
      {region === 'maua' && <DiademaMauaRegion regionName="Mauá" navigate={navigate} />}
      <div className="container mx-auto px-4 pb-20">
        <button onClick={() => navigate('home')} className="text-primary-light font-bold flex items-center gap-2">
          <ArrowRight size={16} className="rotate-180" /> Voltar para Home
        </button>
      </div>
    </div>
  );
}


// --- Bairro View ---

// --- Segmento View ---

// --- Segmento View ---

function SegmentoView({ slug, title, tag, headline, desc, dor, servicos, faq, vizinhos, navigate }: {
  slug: string
  title: string
  tag: string
  headline: string
  desc: string
  dor: string
  servicos: string[]
  faq: [string, string][]
  vizinhos: string
  navigate: (p: string) => void
}) {
  return (
    <div className="pt-10 pb-20">
      {/* Hero */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-blue-100/50 text-sm mb-4">
            <button onClick={() => navigate('home')} className="hover:text-white transition-colors">Início</button>
            <span>/</span>
            <button onClick={() => navigate('split-multisplit')} className="hover:text-white transition-colors">Serviços</button>
            <span>/</span>
            <span className="text-white font-medium">{title}</span>
          </div>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-3 py-1 rounded-full text-white text-xs font-bold uppercase tracking-widest mb-6">
              {tag}
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-6">{headline}</h1>
            <p className="text-lg text-blue-100/80 mb-8 max-w-2xl">{desc}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/5511963462516"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-success text-white font-bold py-4 px-8 rounded-xl hover:-translate-y-0.5 transition-all shadow-lg"
              >
                <MessageSquare size={20} />
                Solicitar Orçamento Grátis
              </a>
              <a
                href="tel:+5511963462516"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/20 text-white font-bold py-4 px-8 rounded-xl hover:bg-white/10 transition-all"
              >
                <Phone size={20} />
                (11) 96346-2516
              </a>
            </div>
            <p className="text-blue-100/50 text-sm mt-4">⚡ Resposta em até 2 horas · Visita técnica gratuita · Atendemos SP e ABC</p>
          </div>
        </div>
      </section>

      {/* Problema */}
      <section className="py-12 bg-amber-50 border-y border-amber-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-amber-400 rounded-xl flex items-center justify-center shrink-0">
              <AlertTriangle size={20} className="text-white" />
            </div>
            <div>
              <h2 className="font-bold text-amber-900 mb-1">O risco de não regularizar</h2>
              <p className="text-amber-800 leading-relaxed">{dor}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-primary mb-8">
            O que a New Clima oferece para {title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {servicos.map((s, i) => (
              <div key={i} className="flex items-start gap-3 p-5 bg-slate-50 rounded-2xl border border-slate-100">
                <CheckCircle2 size={20} className="text-success shrink-0 mt-0.5" />
                <span className="text-slate-700 font-medium text-sm">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl font-extrabold text-primary mb-8 text-center">Por que escolher a New Clima?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <ShieldCheck size={24} />, title: 'Garantia por Escrito', desc: 'Todo serviço com garantia documentada. Sem letra miúda.' },
              { icon: <Clock size={24} />, title: 'Atendimento Rápido', desc: 'Respondemos em até 2 horas e agendamos conforme sua necessidade.' },
              { icon: <CheckCircle2 size={24} />, title: 'PMOC Regularizado', desc: 'Documentação completa conforme a Lei 13.589/18. Sem risco de multa.' },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 text-center">
                <div className="w-12 h-12 bg-ice rounded-xl flex items-center justify-center text-primary-light mx-auto mb-4">{item.icon}</div>
                <h3 className="font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-extrabold text-primary mb-8">Perguntas Frequentes</h2>
          <div className="space-y-4">
            {faq.map((item, i) => (
              <FaqItem key={i} question={item[0]} answer={item[1]} />
            ))}
          </div>
        </div>
      </section>

      {/* Regiões */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-xl font-bold text-primary mb-4">Regiões atendidas em SP e ABC</h2>
          <p className="text-slate-500 text-sm mb-2">{vizinhos}</p>
          <button onClick={() => navigate('sao-paulo')} className="text-primary-light font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all mt-2">
            Ver todas as regiões <ArrowRight size={13} />
          </button>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-extrabold text-white mb-4">Solicite um orçamento para {title}</h2>
          <p className="text-blue-100/70 mb-8">Visita técnica gratuita · Orçamento no mesmo dia · Garantia por escrito</p>
          <a
            href="https://wa.me/5511963462516"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-success text-white font-bold py-4 px-10 rounded-xl shadow-xl hover:-translate-y-0.5 transition-all"
          >
            <MessageSquare size={20} />
            Falar no WhatsApp Agora
          </a>
        </div>
      </section>
    </div>
  )
}

function BairroView({ bairro, slug, zona, vizinhos, navigate }: {
  bairro: string
  slug: string
  zona: string
  vizinhos: string[]
  navigate: (p: string) => void
}) {
  const servicos = [
    { tag: 'INSTALAÇÃO', title: `Instalação de Ar Condicionado em ${bairro}`, desc: `Split, multi-split e sistemas para vários cômodos em ${bairro}. Obra limpa, sem quebradeira e com garantia de 1 ano por escrito.`, page: 'split-multisplit' },
    { tag: 'MANUTENÇÃO', title: `Manutenção de Ar Condicionado em ${bairro}`, desc: `Manutenção preventiva e corretiva em ${bairro}. Atendemos todas as marcas com peças originais e garantia de 90 dias.`, page: 'manutencao-preventiva' },
    { tag: 'LIMPEZA', title: `Limpeza de Ar Condicionado em ${bairro}`, desc: `Limpeza profunda que elimina fungos, ácaros e mau cheiro em ${bairro}. Produto bactericida, ar mais limpo e aparelho que dura mais.`, page: 'limpeza' },
    { tag: 'CONSERTO', title: `Conserto de Ar Condicionado em ${bairro}`, desc: `Ar condicionado parou de funcionar em ${bairro}? Diagnóstico rápido, conserto no mesmo dia na maioria dos casos e garantia de 90 dias.`, page: 'manutencao-corretiva' },
    { tag: 'CONTRATO', title: `Contrato de Manutenção para Empresas em ${bairro}`, desc: `Contrato de manutenção (PMOC) para empresas, condomínios e clínicas em ${bairro}. Documentação completa conforme a Lei 13.589/18.`, page: 'manutencao-preventiva' },
    { tag: 'APARTAMENTO', title: `Ar Condicionado em Apartamento em ${bairro}`, desc: `Instalamos em apartamentos e condomínios em ${bairro} respeitando as normas do regimento. Obra limpa, sem sujeira, aprovado pelo síndico.`, page: 'res-apartamento' },
  ]

  return (
    <div className="pt-10 pb-20">
      {/* Hero */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-blue-100/50 text-sm mb-4">
            <button onClick={() => navigate('home')} className="hover:text-white transition-colors">Início</button>
            <span>/</span>
            <button onClick={() => navigate('sao-paulo')} className="hover:text-white transition-colors">São Paulo</button>
            <span>/</span>
            <span className="text-white font-medium">{bairro}</span>
          </div>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-3 py-1 rounded-full text-white text-xs font-bold uppercase tracking-widest mb-6">
              <MapPin size={12} /> {zona} — São Paulo
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-6">
              Ar Condicionado em {bairro} — Instalação, Manutenção, Limpeza e Conserto
            </h1>
            <div className="flex flex-col gap-2 mb-8 max-w-xl">
              {[
                `Instalação com obra limpa e garantia de 1 ano em ${bairro}`,
                `Manutenção, limpeza e conserto de todas as marcas`,
                `Visita técnica gratuita — orçamento no mesmo dia`,
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-success shrink-0" />
                  <span className="text-blue-100/80 text-base">{item}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/5511963462516"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-success text-white font-bold py-4 px-8 rounded-xl transition-all hover:-translate-y-0.5 shadow-lg"
              >
                <MessageSquare size={20} />
                Orçamento Grátis em {bairro}
              </a>
              <a
                href="tel:+5511963462516"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/20 text-white font-bold py-4 px-8 rounded-xl hover:bg-white/10 transition-all"
              >
                <Phone size={20} />
                (11) 96346-2516
              </a>
            </div>
            <p className="text-blue-100/50 text-sm mt-4">⚡ Resposta em até 2 horas · Visita gratuita · Orçamento no mesmo dia</p>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-3 tracking-tight">Serviços de Ar Condicionado em {bairro}</h2>
            <p className="text-slate-500 text-lg">Para apartamentos, casas e empresas em {bairro} — instalação, manutenção, limpeza e conserto.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {servicos.map((s, i) => (
              <div
                key={i}
                onClick={() => navigate(s.page)}
                className="p-6 bg-white rounded-2xl border border-slate-100 hover:border-primary hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
              >
                <span className={`inline-block text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4 ${
                  s.tag === 'INSTALAÇÃO' ? 'bg-blue-100 text-blue-700' :
                  s.tag === 'MANUTENÇÃO' ? 'bg-emerald-100 text-emerald-700' :
                  s.tag === 'LIMPEZA' ? 'bg-cyan-100 text-cyan-700' :
                  s.tag === 'CONSERTO' ? 'bg-orange-100 text-orange-700' :
                  s.tag === 'CONTRATO' ? 'bg-amber-100 text-amber-700' :
                  'bg-violet-100 text-violet-700'
                }`}>{s.tag}</span>
                <h3 className="text-base font-bold text-primary mb-2 group-hover:text-primary-light transition-colors leading-snug">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{s.desc}</p>
                <div className="flex items-center gap-2 text-primary-light font-semibold text-sm group-hover:gap-3 transition-all">
                  Saiba mais <ArrowRight size={13} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por que New Clima */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-primary mb-3 text-center tracking-tight">
            Por que contratar a New Clima em {bairro}?
          </h2>
          <p className="text-slate-500 text-center mb-8">Empresa de ar condicionado com equipe própria, atuando em {bairro} desde 2018.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: <ShieldCheck size={24} />, title: 'Garantia por Escrito', desc: `Todo serviço em ${bairro} com certificado de garantia e nota fiscal. Sem letra miúda.` },
              { icon: <Clock size={24} />, title: 'Resposta em até 2h', desc: `Atendemos ${bairro} em até 2 horas. Para emergências, tentamos ir no mesmo dia.` },
              { icon: <CheckCircle2 size={24} />, title: 'Obra Limpa', desc: `Instalação em apartamentos e casas em ${bairro} sem sujeira, sem quebradeira e sem surpresa no final.` },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 text-center">
                <div className="w-12 h-12 bg-ice rounded-xl flex items-center justify-center text-primary-light mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* FAQ local */}
          <h2 className="text-2xl font-extrabold text-primary mb-2">Perguntas frequentes sobre ar condicionado em {bairro}</h2>
          <p className="text-slate-500 text-sm mb-6">Instalação, limpeza, conserto e manutenção — respondemos as dúvidas mais comuns.</p>
          <div className="space-y-4">
            {[
              {
                q: `Quanto custa instalar ar condicionado em ${bairro}?`,
                a: `A instalação residencial padrão em ${bairro} começa a partir de R$ 350. O valor varia conforme o tipo de equipamento e a complexidade da infraestrutura. A visita técnica é gratuita e o orçamento é entregue no mesmo dia, sem compromisso.`
              },
              {
                q: `Vocês instalam ar condicionado em apartamento em ${bairro}?`,
                a: `Sim. Somos especialistas em instalação em apartamentos e condomínios em ${bairro}. Respeitamos as normas de fachada, varanda técnica e o regimento interno. Obra limpa, sem sujeira e sem quebradeira.`
              },
              {
                q: `Fazem limpeza de ar condicionado em ${bairro}?`,
                a: `Sim. Realizamos limpeza profunda (higienização) de todas as marcas em ${bairro}. O processo remove fungos, ácaros e bactérias — ideal para quem tem alergia ou o aparelho está com mau cheiro.`
              },
              {
                q: `Consertam ar condicionado em ${bairro}?`,
                a: `Sim. Diagnosticamos e consertamos qualquer defeito — compressor, placa, capacitor, dreno entupido, falta de gás. Atendemos em ${bairro} em até 2 horas e resolvemos na maioria dos casos no mesmo dia.`
              },
              {
                q: `Com que frequência fazer manutenção em ${bairro}?`,
                a: `Para uso residencial, recomendamos manutenção a cada 6 meses. Para escritórios e comércios em ${bairro}, a cada 3 meses. Sem manutenção, o aparelho gasta mais energia, estraga antes do tempo e piora a qualidade do ar.`
              },
              {
                q: `Qual o prazo de atendimento em ${bairro}?`,
                a: `Respondemos em até 2 horas pelo WhatsApp e agendamos a visita conforme sua disponibilidade. Para urgências em ${bairro}, tentamos atender no mesmo dia.`
              },
            ].map((item, i) => (
              <FaqItem key={i} question={item.q} answer={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Bairros vizinhos */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-bold text-primary mb-3">Também atendemos bairros próximos a {bairro}</h2>
          <p className="text-slate-500 text-sm mb-6">Instalação, manutenção e limpeza de ar condicionado nos bairros vizinhos.</p>
          <div className="flex flex-wrap gap-3">
            {vizinhos.map((v, i) => (
              <div key={i} className="flex items-center gap-2 bg-ice px-4 py-2 rounded-full text-sm font-semibold text-primary-light">
                <MapPin size={12} /> {v}
              </div>
            ))}
            <button
              onClick={() => navigate('sao-paulo')}
              className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-sm font-semibold text-primary hover:bg-primary/20 transition-colors"
            >
              Ver todas as regiões <ArrowRight size={12} />
            </button>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Instalação, manutenção ou limpeza de ar condicionado em {bairro}?
          </h2>
          <p className="text-blue-100/70 mb-2">Manda uma mensagem — respondemos em até 2 horas e agendamos a visita gratuita.</p>
          <p className="text-blue-100/40 text-sm mb-8">Visita gratuita · Orçamento no mesmo dia · Garantia por escrito</p>
          <a
            href="https://wa.me/5511963462516"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-success text-white font-bold py-4 px-10 rounded-xl shadow-xl hover:-translate-y-0.5 transition-all"
          >
            <MessageSquare size={20} />
            Falar no WhatsApp — {bairro}
          </a>
        </div>
      </section>
    </div>
  )
}

function ServicosView({ navigate }: { navigate: (p: string) => void }) {
  const servicos = [
    {
      num: '01',
      icon: <Ruler size={28} />,
      title: 'Instalação de Ar Condicionado',
      subtitle: 'Split, multi-split, cassete e piso-teto instalados com obra limpa e garantia de 1 ano',
      img: '/images/instalacao.png',
      desc: 'Instalamos ar condicionado residencial e comercial em São Paulo e ABC. Fazemos toda a infraestrutura necessária — tubulação de cobre, dreno, ponto elétrico e suporte — com obra limpa, sem quebradeira e sem sujeira. O equipamento é testado na sua frente antes de finalizar. Atendemos split hi-wall, multi-split, cassete de teto, piso-teto e sistemas VRF.',
      quando: ['Equipamento novo comprado em loja ou online', 'Primeiro ar condicionado do apartamento ou casa', 'Instalação em obra ou reforma', 'Troca de equipamento antigo por novo', 'Multi-split para climatizar vários cômodos'],
      page: 'split-multisplit',
    },
    {
      num: '02',
      icon: <ShieldCheck size={28} />,
      title: 'Manutenção Preventiva de Ar Condicionado',
      subtitle: 'Checklist completo, limpeza interna e verificação de gás — antes do problema aparecer',
      img: '/images/limpeza.png',
      desc: 'A manutenção preventiva mantém o ar condicionado funcionando com eficiência máxima e evita quebras inesperadas. Realizamos limpeza de filtros, serpentina e dreno, verificação de nível de gás, teste dos componentes elétricos e medição de temperatura. Entregamos relatório técnico após cada visita. Oferecemos contratos mensais, trimestrais ou semestrais conforme a necessidade.',
      quando: ['Residência com uso diário — manutenção semestral', 'Escritório, loja ou clínica — manutenção trimestral', 'Restaurante, academia ou local de alta ocupação — manutenção bimensal', 'Empresa com PMOC obrigatório pela Lei 13.589/18', 'Equipamento que nunca passou por manutenção'],
      page: 'manutencao-preventiva',
    },
    {
      num: '03',
      icon: <Settings size={28} />,
      title: 'Manutenção Corretiva e Conserto',
      subtitle: 'Ar condicionado com defeito? Diagnóstico gratuito e conserto no mesmo dia na maioria dos casos',
      img: '/images/manutencao-corretiva.png',
      desc: 'Atendemos todas as falhas de ar condicionado: não gela, não liga, vaza água, faz barulho, desliga sozinho, congela, tem cheiro ruim ou erro no display. O técnico identifica a causa, apresenta o orçamento e executa o reparo com peça original. Garantia de 90 dias no serviço. Respondemos em até 2 horas em São Paulo e ABC.',
      quando: ['Ar condicionado que não gela ou resfria mal', 'Vazamento de água dentro do ambiente', 'Barulho ou vibração incomum', 'Aparelho que desliga sozinho ou trava', 'Erro no display ou controle remoto sem resposta'],
      page: 'manutencao-corretiva',
    },
    {
      num: '04',
      icon: <Droplets size={28} />,
      title: 'Limpeza e Higienização de Ar Condicionado',
      subtitle: 'Bactericida certificado que elimina fungos, ácaros e mau cheiro — ar limpo de verdade',
      img: '/images/higienizacao.png',
      desc: 'A limpeza profunda (higienização) vai além da troca de filtro. Limpamos a serpentina evaporadora, a turbina e o dreno com bactericida de registro na ANVISA — eliminando fungos, ácaros e bactérias invisíveis que o filtro não retém. Indicada para quem tem alergia, asma, crianças pequenas ou aparelho com mau cheiro. O resultado é imediato: ar mais limpo logo na primeira hora.',
      quando: ['Ar condicionado com cheiro de mofo ou queimado', 'Moradores com alergia, rinite ou asma', 'Crianças pequenas ou idosos no ambiente', 'Aparelho que não passou por limpeza há mais de 6 meses', 'Ambiente com muita poluição ou poeira'],
      page: 'limpeza',
    },
    {
      num: '05',
      icon: <HelpCircle size={28} />,
      title: 'PMOC — Contrato de Manutenção Obrigatório',
      subtitle: 'Plano de Manutenção, Operação e Controle conforme a Lei 13.589/18 para empresas em SP e ABC',
      img: '/images/pmoc.png',
      desc: 'O PMOC é obrigatório para qualquer estabelecimento com sistema de ar condicionado acima de 60.000 BTUs — empresas, condomínios, clínicas, escolas, restaurantes e shoppings. Elaboramos o plano conforme a norma, executamos todas as manutenções preventivas, emitimos relatório técnico após cada visita e fornecemos ART. Documentação completa para a Vigilância Sanitária, sem risco de autuação.',
      quando: ['Empresa, condomínio ou clínica com AC acima de 60.000 BTUs', 'Estabelecimento fiscalizado pela Vigilância Sanitária', 'PMOC vencido ou irregular que precisa ser regularizado', 'Novo estabelecimento que precisa elaborar o plano', 'Prédio comercial que exige documentação para auditoria'],
      page: 'manutencao-preventiva',
    },
    {
      num: '06',
      icon: <Thermometer size={28} />,
      title: 'Sistemas VRF e Mini VRF',
      subtitle: 'Climatização de múltiplos ambientes com controle individual e eficiência energética máxima',
      img: '/images/vrf.png',
      desc: 'O sistema VRF (Variable Refrigerant Flow) é a solução para empresas, edifícios e residências de alto padrão que precisam climatizar vários ambientes ao mesmo tempo, com controle individual de temperatura por cômodo. Uma única condensadora externa atende múltiplas evaporadoras com altíssima eficiência energética. Fazemos projeto, instalação e manutenção de sistemas VRF e Mini VRF de todas as marcas.',
      quando: ['Empresa ou escritório com vários ambientes para climatizar', 'Edifício corporativo ou hotel com necessidade de controle individual', 'Residência de alto padrão que quer um sistema integrado e elegante', 'Retrofit de sistema antigo por solução mais eficiente', 'Projeto novo que exige máxima eficiência energética'],
      page: 'vrf-mini-vrf',
    },
    {
      num: '07',
      icon: <Zap size={28} />,
      title: 'Chillers, Self-Contained e Fan Coils',
      subtitle: 'Manutenção e instalação de sistemas centrais de climatização para grandes edificações',
      img: '/images/chiller.png',
      desc: 'Para grandes edificações — shoppings, hospitais, hotéis, indústrias e edifícios corporativos — os sistemas centrais de climatização (Chiller, Self-Contained e Fan Coil) exigem manutenção especializada. Realizamos manutenção preventiva e corretiva, limpeza de torres de resfriamento, verificação de compressores e bombas, e elaboramos o PMOC conforme as normas aplicáveis. Equipe técnica com experiência em sistemas de grande porte.',
      quando: ['Shopping, hospital ou hotel com sistema central de climatização', 'Indústria ou galpão com Chiller ou Self-Contained', 'Manutenção preventiva de torre de resfriamento', 'Retrofit ou modernização de sistema central existente', 'PMOC para grandes edificações com sistema central'],
      page: 'sistemas-comerciais',
    },
  ]

  return (
    <div className="pt-10 pb-20">
      {/* Hero */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-blue-100/50 text-sm mb-4">
            <button onClick={() => navigate('home')} className="hover:text-white transition-colors">Início</button>
            <span>/</span>
            <span className="text-white font-medium">Serviços</span>
          </div>
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-4">
              Serviços de Ar Condicionado em São Paulo e ABC
            </h1>
            <p className="text-lg text-blue-100/80 mb-8 max-w-2xl">
              Da instalação ao contrato de manutenção — a New Clima resolve qualquer demanda de ar condicionado em SP e ABC. Escolha o serviço que precisa e fale com um técnico agora.
            </p>
            <a
              href="https://wa.me/5511963462516"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-success text-white font-bold py-4 px-8 rounded-xl hover:-translate-y-0.5 transition-all shadow-lg"
            >
              <MessageSquare size={20} />
              Pedir Orçamento no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Lista de serviços */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="space-y-0">
            {servicos.map((s, i) => (
              <div
                key={i}
                className={`grid grid-cols-1 lg:grid-cols-5 gap-10 items-center ${i > 0 ? 'border-t border-slate-100' : ''}`}
              >
                {/* Conteúdo */}
                <div className={`lg:col-span-3 py-14 ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary-light shrink-0">
                      {s.icon}
                    </div>
                    <div>
                      <span className="text-primary-light text-xs font-bold tracking-[0.2em] uppercase">{s.num}</span>
                      <h2 className="text-2xl md:text-3xl font-extrabold text-primary leading-tight tracking-tight">{s.title}</h2>
                      <p className="text-slate-500 text-sm mt-1 leading-relaxed">{s.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-slate-600 leading-relaxed mb-8 text-sm md:text-base">{s.desc}</p>

                  {/* Quando chamar */}
                  <div className="bg-slate-50 rounded-2xl p-5 mb-8 border border-slate-100">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Quando chamar a New Clima</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {s.quando.map((q, qi) => (
                        <div key={qi} className="flex items-start gap-2">
                          <CheckCircle2 size={14} className="text-success shrink-0 mt-0.5" />
                          <span className="text-slate-600 text-sm">{q}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => navigate(s.page)}
                      className="flex items-center gap-2 text-primary-light font-bold text-sm hover:gap-3 transition-all"
                    >
                      Saiba mais <ArrowRight size={14} />
                    </button>
                    <a
                      href="https://wa.me/5511963462516"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-slate-500 font-semibold text-sm hover:text-success transition-colors"
                    >
                      <MessageSquare size={14} />
                      Falar no WhatsApp
                    </a>
                  </div>
                </div>

                {/* Imagem */}
                <div className={`hidden lg:block lg:col-span-2 relative ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <div className="rounded-2xl overflow-hidden shadow-lg" style={{height: "380px"}}>
                    <img
                      src={s.img}
                      alt={s.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      style={{height: "380px"}}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-primary rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-extrabold text-white mb-3">Ainda em dúvida sobre qual serviço você precisa?</h2>
            <p className="text-blue-100/70 mb-8 max-w-xl mx-auto">Mande uma mensagem descrevendo o problema — um técnico da New Clima analisa e indica o caminho. Resposta no mesmo dia, sem custo.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://wa.me/5511963462516"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-success text-white font-bold py-4 px-8 rounded-xl shadow-xl hover:-translate-y-0.5 transition-all"
              >
                <MessageSquare size={20} />
                Falar no WhatsApp
              </a>
              <a
                href="tel:+5511963462516"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/20 text-white font-bold py-4 px-8 rounded-xl hover:bg-white/10 transition-all"
              >
                <Phone size={20} />
                (11) 96346-2516
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function ZonaView({ zona, bairros, navigate }: {
  zona: string
  bairros: string[]
  navigate: (p: string) => void
}) {
  const bairroPageMap: Record<string, string> = {
    'Vila Mariana': 'bairro-vila-mariana', 'Moema': 'bairro-moema', 'Brooklin': 'bairro-brooklin',
    'Campo Belo': 'bairro-campo-belo', 'Itaim Bibi': 'bairro-itaim-bibi', 'Santo Amaro': 'bairro-santo-amaro',
    'Jabaquara': 'bairro-jabaquara', 'Saúde': 'bairro-saude', 'Ipiranga': 'bairro-ipiranga',
    'Cursino': 'bairro-cursino', 'Campo Grande': 'bairro-campo-grande', 'Morumbi': 'bairro-morumbi',
    'Vila Andrade': 'bairro-vila-andrade', 'Vila Olímpia': 'bairro-vila-olimpia', 'Paraíso': 'bairro-paraiso',
    'Aclimação': 'bairro-aclimacao', 'Mirandópolis': 'bairro-mirandopolis', 'Planalto Paulista': 'bairro-planalto-paulista',
    'Vila Clementino': 'bairro-vila-clementino', 'Chácara Klabin': 'bairro-chacara-klabin', 'Cambuci': 'bairro-cambuci',
    'Interlagos': 'bairro-interlagos', 'Campo Limpo': 'bairro-campo-limpo', 'Jardim Paulista': 'bairro-jardim-paulista',
    'Jardim Europa': 'bairro-jardim-europa', 'Santana': 'bairro-santana', 'Tucuruvi': 'bairro-tucuruvi',
    'Vila Guilherme': 'bairro-vila-guilherme', 'Vila Maria': 'bairro-vila-maria', 'Casa Verde': 'bairro-casa-verde',
    'Mandaqui': 'bairro-mandaqui', 'Tremembé': 'bairro-tremembe', 'Freguesia do Ó': 'bairro-freguesia-do-o',
    'Limão': 'bairro-limao', 'Tatuapé': 'bairro-tatuape', 'Anália Franco': 'bairro-analia-franco',
    'Mooca': 'bairro-mooca', 'Vila Prudente': 'bairro-vila-prudente', 'Penha': 'bairro-penha',
    'Carrão': 'bairro-carrao', 'Água Rasa': 'bairro-agua-rasa', 'Belém': 'bairro-belem',
    'Brás': 'bairro-bras', 'Vila Formosa': 'bairro-vila-formosa', 'Sapopemba': 'bairro-sapopemba',
    'Penha de França': 'bairro-penha-de-franca', 'Jardim Anália': 'bairro-jardim-analia', 'Aricanduva': 'bairro-aricanduva',
    'Pinheiros': 'bairro-pinheiros', 'Vila Madalena': 'bairro-vila-madalena', 'Perdizes': 'bairro-perdizes',
    'Lapa': 'bairro-lapa', 'Pompéia': 'bairro-pompeia', 'Butantã': 'bairro-butanta',
    'Cerqueira César': 'bairro-cerqueira-cesar', 'Pacaembu': 'bairro-pacaembu', 'Sumaré': 'bairro-sumare',
    'Vila Leopoldina': 'bairro-vila-leopoldina', 'Barra Funda': 'bairro-barra-funda', 'Alto de Pinheiros': 'bairro-alto-de-pinheiros',
    'Consolação': 'bairro-consolacao', 'Higienópolis': 'bairro-higienopolis', 'Jardins': 'bairro-jardins',
    'Bela Vista': 'bairro-bela-vista', 'Liberdade': 'bairro-liberdade', 'República': 'bairro-republica',
    'Santa Cecília': 'bairro-santa-cecilia', 'Bom Retiro': 'bairro-bom-retiro',
  }

  return (
    <div className="pt-10 pb-20">
      {/* Hero */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-blue-100/50 text-sm mb-4">
            <button onClick={() => navigate('home')} className="hover:text-white">Início</button>
            <span>/</span>
            <button onClick={() => navigate('sao-paulo')} className="hover:text-white">São Paulo</button>
            <span>/</span>
            <span className="text-white font-medium">{zona}</span>
          </div>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-3 py-1 rounded-full text-white text-xs font-bold uppercase tracking-widest mb-6">
              <MapPin size={12} /> São Paulo — {zona}
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-6">
              Ar Condicionado na {zona} de São Paulo — Instalação, Manutenção e Limpeza
            </h1>
            <p className="text-lg text-blue-100/80 mb-8 max-w-2xl">
              A New Clima atende todos os bairros da {zona} de SP com instalação, manutenção, limpeza e conserto de ar condicionado. Técnicos certificados, visita gratuita e garantia por escrito.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/5511963462516" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-success text-white font-bold py-4 px-8 rounded-xl hover:-translate-y-0.5 transition-all shadow-lg">
                <MessageSquare size={20} />
                Orçamento Grátis — {zona}
              </a>
              <a href="tel:+5511963462516" className="inline-flex items-center justify-center gap-2 border-2 border-white/20 text-white font-bold py-4 px-8 rounded-xl hover:bg-white/10 transition-all">
                <Phone size={20} />
                (11) 96346-2516
              </a>
            </div>
            <p className="text-blue-100/50 text-sm mt-4">⚡ Resposta em até 2 horas · Visita gratuita · Orçamento no mesmo dia</p>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-primary mb-3 tracking-tight">Serviços de Ar Condicionado na {zona}</h2>
            <p className="text-slate-500 text-lg">Instalação, manutenção, limpeza e conserto em todos os bairros da {zona}.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { tag: 'INSTALAÇÃO', title: `Instalação na ${zona}`, desc: 'Split, multi-split, cassete e VRF. Obra limpa e garantia de 1 ano.', page: 'split-multisplit' },
              { tag: 'MANUTENÇÃO', title: `Manutenção na ${zona}`, desc: 'Preventiva e corretiva. Todas as marcas, peças originais.', page: 'manutencao-preventiva' },
              { tag: 'LIMPEZA', title: `Limpeza na ${zona}`, desc: 'Higienização profunda com bactericida. Elimina fungos e mau cheiro.', page: 'limpeza' },
              { tag: 'CONSERTO', title: `Conserto na ${zona}`, desc: 'Diagnóstico rápido e conserto no mesmo dia na maioria dos casos.', page: 'manutencao-corretiva' },
            ].map((s, i) => (
              <div key={i} onClick={() => navigate(s.page)} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-primary hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer group">
                <span className={`inline-block text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4 ${
                  s.tag === 'INSTALAÇÃO' ? 'bg-blue-100 text-blue-700' :
                  s.tag === 'MANUTENÇÃO' ? 'bg-emerald-100 text-emerald-700' :
                  s.tag === 'LIMPEZA' ? 'bg-cyan-100 text-cyan-700' :
                  'bg-orange-100 text-orange-700'
                }`}>{s.tag}</span>
                <h3 className="text-base font-bold text-primary mb-2 group-hover:text-primary-light">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{s.desc}</p>
                <div className="flex items-center gap-2 text-primary-light font-semibold text-sm group-hover:gap-3 transition-all">
                  Saiba mais <ArrowRight size={13} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bairros */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-primary mb-3 tracking-tight">
            Bairros da {zona} que a New Clima atende
          </h2>
          <p className="text-slate-500 mb-8">Clique no bairro para ver informações específicas sobre instalação e manutenção de ar condicionado.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {bairros.map((bairro, i) => {
              const page = bairroPageMap[bairro]
              return page ? (
                <button
                  key={i}
                  onClick={() => navigate(page)}
                  className="flex items-center gap-2 bg-white px-4 py-3 rounded-xl border border-slate-200 hover:border-primary hover:shadow-md transition-all text-sm font-semibold text-primary-light text-left group"
                >
                  <MapPin size={13} className="shrink-0" />
                  {bairro}
                </button>
              ) : (
                <div key={i} className="flex items-center gap-2 bg-white px-4 py-3 rounded-xl border border-slate-100 text-sm font-semibold text-slate-500">
                  <MapPin size={13} className="shrink-0" />
                  {bairro}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-extrabold text-primary mb-2">Perguntas frequentes — Ar Condicionado na {zona}</h2>
          <p className="text-slate-500 text-sm mb-8">Instalação, manutenção e limpeza nos bairros da {zona} de São Paulo.</p>
          <div className="space-y-4">
            {[
              { q: `Quanto custa instalar ar condicionado na ${zona} de SP?`, a: `A instalação residencial padrão na ${zona} começa a partir de R$ 350. O valor varia conforme o tipo de equipamento e a complexidade da infraestrutura. Visita técnica gratuita e orçamento no mesmo dia.` },
              { q: `Vocês atendem todos os bairros da ${zona}?`, a: `Sim. A New Clima atende todos os bairros da ${zona} de São Paulo com instalação, manutenção, limpeza e conserto de ar condicionado. Respondemos em até 2 horas e agendamos a visita conforme sua disponibilidade.` },
              { q: `Fazem manutenção de ar condicionado na ${zona}?`, a: `Sim. Realizamos manutenção preventiva e corretiva de todas as marcas na ${zona}. Atendemos residências, apartamentos, escritórios e empresas. Contratos mensais, trimestrais ou semestrais disponíveis.` },
            ].map((item, i) => (
              <FaqItem key={i} question={item.q} answer={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-extrabold text-white mb-4">Precisa de ar condicionado na {zona}?</h2>
          <p className="text-blue-100/70 mb-8">Visita gratuita · Orçamento no mesmo dia · Garantia por escrito</p>
          <a href="https://wa.me/5511963462516" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-success text-white font-bold py-4 px-10 rounded-xl shadow-xl hover:-translate-y-0.5 transition-all">
            <MessageSquare size={20} />
            Falar no WhatsApp Agora
          </a>
        </div>
      </section>
    </div>
  )
}

function SitemapView({ navigate }: { navigate: (p: string) => void }) {
  const serviceLinks = [
    { label: 'Instalação de Ar Condicionado Split e Multi Split', page: 'split-multisplit' },
    { label: 'Ar Condicionado Cassete e Piso-Teto para Empresas', page: 'sistemas-comerciais' },
    { label: 'Sistemas VRF e Mini VRF', page: 'vrf-mini-vrf' },
    { label: 'Manutenção Preventiva e PMOC', page: 'manutencao-preventiva' },
    { label: 'Conserto e Manutenção Corretiva de Ar Condicionado', page: 'manutencao-corretiva' },
    { label: 'Limpeza e Higienização de Ar Condicionado', page: 'limpeza' },
  ]

  const segmentLinks = [
    { label: 'Ar Condicionado Residencial — Apartamentos e Casas', page: 'split-multisplit' },
    { label: 'Ar Condicionado Comercial — Lojas, Escritórios e Restaurantes', page: 'sistemas-comerciais' },
    { label: 'Ar Condicionado Industrial — Galpões e Indústrias', page: 'vrf-mini-vrf' },
    { label: 'PMOC para Empresas — Conformidade com a Lei 13.589/18', page: 'manutencao-preventiva' },
  ]

  const bairroLinks = [
    { label: 'Instalação de Ar Condicionado em Moema', page: 'bairro-moema' },
    { label: 'Instalação de Ar Condicionado em Vila Mariana', page: 'bairro-vila-mariana' },
    { label: 'Instalação de Ar Condicionado em Pinheiros', page: 'bairro-pinheiros' },
    { label: 'Instalação de Ar Condicionado no Itaim Bibi', page: 'bairro-itaim-bibi' },
    { label: 'Instalação de Ar Condicionado nos Jardins', page: 'bairro-jardins' },
    { label: 'Instalação de Ar Condicionado no Tatuapé', page: 'bairro-tatuape' },
    { label: 'Instalação de Ar Condicionado em Santana', page: 'bairro-santana' },
    { label: 'Instalação de Ar Condicionado no Brooklin', page: 'bairro-brooklin' },
    { label: 'Instalação de Ar Condicionado em Perdizes', page: 'bairro-perdizes' },
    { label: 'Instalação de Ar Condicionado no Morumbi', page: 'bairro-morumbi' },
    { label: 'Instalação de Ar Condicionado na Mooca', page: 'bairro-mooca' },
    { label: 'Instalação de Ar Condicionado no Anália Franco', page: 'bairro-analia-franco' },
    { label: 'Instalação de Ar Condicionado em Vila Madalena', page: 'bairro-vila-madalena' },
    { label: 'Instalação de Ar Condicionado em Campo Belo', page: 'bairro-campo-belo' },
    { label: 'Instalação de Ar Condicionado na Saúde', page: 'bairro-saude' },
    { label: 'Instalação de Ar Condicionado em Higienópolis', page: 'bairro-higienopolis' },
    { label: 'Instalação de Ar Condicionado na Lapa', page: 'bairro-lapa' },
    { label: 'Instalação de Ar Condicionado em Santo Amaro', page: 'bairro-santo-amaro' },
    { label: 'Instalação de Ar Condicionado no Tucuruvi', page: 'bairro-tucuruvi' },
    { label: 'Instalação de Ar Condicionado no Ipiranga', page: 'bairro-ipiranga' },
    { label: 'Instalação de Ar Condicionado em Vila Prudente', page: 'bairro-vila-prudente' },
    { label: 'Instalação de Ar Condicionado em Jabaquara', page: 'bairro-jabaquara' },
    { label: 'Instalação de Ar Condicionado em Campo Grande', page: 'bairro-campo-grande' },
    { label: 'Instalação de Ar Condicionado em Penha', page: 'bairro-penha' },
    { label: 'Instalação de Ar Condicionado em Cursino', page: 'bairro-cursino' },
    { label: 'Instalação de Ar Condicionado em Água Rasa', page: 'bairro-agua-rasa' },
    { label: 'Instalação de Ar Condicionado em Bela Vista', page: 'bairro-bela-vista' },
    { label: 'Instalação de Ar Condicionado em Butantã', page: 'bairro-butanta' },
    { label: 'Instalação de Ar Condicionado em Vila Olímpia', page: 'bairro-vila-olimpia' },
    { label: 'Instalação de Ar Condicionado em Pompéia', page: 'bairro-pompeia' },
    { label: 'Instalação de Ar Condicionado em Paraíso', page: 'bairro-paraiso' },
    { label: 'Instalação de Ar Condicionado em Aclimação', page: 'bairro-aclimacao' },
    { label: 'Instalação de Ar Condicionado em Mirandópolis', page: 'bairro-mirandopolis' },
    { label: 'Instalação de Ar Condicionado em Planalto Paulista', page: 'bairro-planalto-paulista' },
    { label: 'Instalação de Ar Condicionado em Vila Clementino', page: 'bairro-vila-clementino' },
    { label: 'Instalação de Ar Condicionado em Chácara Klabin', page: 'bairro-chacara-klabin' },
    { label: 'Instalação de Ar Condicionado em Cambuci', page: 'bairro-cambuci' },
    { label: 'Instalação de Ar Condicionado em Liberdade', page: 'bairro-liberdade' },
  ]

  const regionLinks = [
    { label: 'Ar Condicionado em São Paulo (Capital)', page: 'sao-paulo' },
    { label: 'Ar Condicionado em Santo André', page: 'santo-andre' },
    { label: 'Ar Condicionado em São Bernardo do Campo', page: 'sao-bernardo' },
    { label: 'Ar Condicionado em São Caetano do Sul', page: 'sao-caetano' },
    { label: 'Ar Condicionado em Diadema', page: 'diadema' },
    { label: 'Ar Condicionado em Mauá', page: 'maua' },
  ]

  const blogLinks = [
    { label: 'PMOC: O Que É e Por Que Sua Empresa É Obrigada a Ter', page: 'blog-pmoc-obrigatorio' },
    { label: 'Multa por Não Ter PMOC em SP: R$ 2.000 a R$ 1,5 Milhão', page: 'blog-multa-pmoc' },
    { label: 'PMOC para Condomínios em SP: Guia para Síndicos', page: 'blog-pmoc-condominio' },
    { label: 'Quanto Custa o PMOC em São Paulo?', page: 'blog-custo-pmoc' },
    { label: 'Quanto Custa Instalar Ar Condicionado em SP em 2026?', page: 'blog-custo-instalacao' },
    { label: 'Qual Ar Condicionado Comprar em 2026?', page: 'blog-qual-ac' },
    { label: 'Split ou Multi Split para Apartamento em SP?', page: 'blog-split-multi-split' },
    { label: 'O Que Acontece Sem Manutenção no Ar Condicionado?', page: 'blog-manutencao-consequencias' },
    { label: 'Ar Condicionado Inverter: Vale a Pena?', page: 'blog-inverter' },
    { label: 'Instalação em Apartamento em SP: Guia Completo', page: 'blog-apartamento' },
    { label: 'Como Calcular os BTUs Ideais para Seu Ambiente', page: 'blog-btus' },
    { label: 'PMOC Obrigatório: O Que Sua Empresa Precisa Saber', page: 'blog-pmoc' },
    { label: 'LG Round Cassette: Climatização 360°', page: 'blog-round-cassette' },
    { label: 'Obra Limpa: Instalação Sem Quebra-Quebra', page: 'blog-obra-limpa' },
    { label: 'Como Instalar Ar Condicionado no Quarto', page: 'blog-quarto' },
    { label: 'Split Convencional vs Inverter: Qual Escolher?', page: 'blog-convencional-inverter' },
    { label: 'Ar Condicionado para Empresas: Do Split ao VRF', page: 'blog-empresas' },
  ]

  const areas = [
    {
      zona: 'Zona Sul',
      bairros: 'Vila Mariana · Moema · Saúde · Ipiranga · Jabaquara · Santo Amaro · Campo Belo · Brooklin · Cursino · Mirandópolis · Paraíso · Vila Olímpia · Itaim Bibi · Morumbi · Vila Andrade · Jardim Europa · Jardim América · Jardim Paulista · Jardins · Ibirapuera',
    },
    {
      zona: 'Zona Oeste',
      bairros: 'Pinheiros · Vila Madalena · Perdizes · Lapa · Pompéia · Água Branca · Alto de Pinheiros · Butantã · Vila Leopoldina · Cerqueira César · Consolação · Santa Cecília · Higienópolis · Pacaembu · Sumaré · Barra Funda · Jaguaré',
    },
    {
      zona: 'Zona Norte',
      bairros: 'Santana · Tucuruvi · Vila Guilherme · Vila Maria · Casa Verde · Mandaqui · Tremembé · Jaçanã · Vila Medeiros · Freguesia do Ó · Brasilândia · Limão · Bom Retiro · Pari · Santa Efigênia · Cachoeirinha · Imirim',
    },
    {
      zona: 'Zona Leste',
      bairros: 'Tatuapé · Anália Franco · Mooca · Vila Prudente · Penha · Aricanduva · Carrão · Água Rasa · Belém · Brás · Jardim Anália · Parque São Jorge · Vila Formosa · Sapopemba · São Mateus · Itaquera · Guaianases · Vila Carrão · Vila Matilde',
    },
    {
      zona: 'Região Central',
      bairros: 'Centro · República · Sé · Liberdade · Bela Vista · Cambuci · Consolação · Santa Cecília · Vila Buarque · Luz · Glicério · Santa Efigênia · Bom Retiro · Pari · Brás',
    },
    {
      zona: 'ABC Paulista',
      bairros: 'Santo André · São Bernardo do Campo · São Caetano do Sul · Diadema · Mauá · Ribeirão Pires · Rio Grande da Serra · Rudge Ramos · Campestre · Vila Assunção · Nova Petrópolis · Assunção · Santa Paula · Barcelona · Olímpico · Serraria · Taboão · Utinga',
    },
  ]

  const LinkList = ({ links }: { links: { label: string, page: string }[] }) => (
    <ul className="space-y-2">
      {links.map((link, i) => (
        <li key={i}>
          <button
            onClick={() => navigate(link.page)}
            className="flex items-start gap-2 text-slate-600 hover:text-primary-light text-sm font-medium transition-colors group text-left"
          >
            <ArrowRight size={12} className="text-primary-light shrink-0 mt-1 group-hover:translate-x-1 transition-transform" />
            {link.label}
          </button>
        </li>
      ))}
    </ul>
  )

  return (
    <div className="py-16 container mx-auto px-4 max-w-5xl">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-slate-400 mb-8">
        <button onClick={() => navigate('home')} className="hover:text-primary-light transition-colors">Início</button>
        <span>/</span>
        <span className="text-slate-600 font-medium">Mapa do Site</span>
      </div>

      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-extrabold text-primary mb-3">Mapa do Site — New Clima Ar Condicionado</h1>
        <p className="text-slate-500 text-lg">Todas as páginas organizadas em um só lugar.</p>
      </div>

      {/* Páginas principais */}
      <div className="mb-12">
        <h2 className="text-lg font-bold text-primary mb-4 pb-2 border-b border-slate-100">Páginas Principais</h2>
        <ul className="flex flex-wrap gap-x-8 gap-y-2">
          {[
            { label: 'Início', page: 'home' },
            { label: 'Serviços', page: 'servicos' },
            { label: 'Quem Somos', page: 'sobre' },
            { label: 'Blog', page: 'blog' },
            { label: 'Contato', page: 'contato' },
          ].map((link, i) => (
            <li key={i}>
              <button onClick={() => navigate(link.page)} className="flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-primary-light transition-colors group">
                <ArrowRight size={12} className="text-primary-light group-hover:translate-x-1 transition-transform" />
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Grid principal */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
        <div>
          <h2 className="text-lg font-bold text-primary mb-4 pb-2 border-b border-slate-100">Serviços</h2>
          <LinkList links={serviceLinks} />
        </div>
        <div>
          <h2 className="text-lg font-bold text-primary mb-4 pb-2 border-b border-slate-100">Segmentos Atendidos</h2>
          <LinkList links={segmentLinks} />
        </div>
        <div>
          <h2 className="text-lg font-bold text-primary mb-4 pb-2 border-b border-slate-100">Páginas por Segmento</h2>
          <LinkList links={[
            { label: 'Ar Condicionado para Clínicas Médicas', page: 'segmento-clinica' },
            { label: 'Ar Condicionado para Escritórios', page: 'segmento-escritorio' },
            { label: 'Ar Condicionado para Condomínios', page: 'segmento-condominio' },
            { label: 'Ar Condicionado para Restaurantes', page: 'segmento-restaurante' },
            { label: 'Ar Condicionado para Hotéis', page: 'segmento-hotel' },
            { label: 'Ar Condicionado para Pousadas', page: 'segmento-pousada' },
            { label: 'Ar Condicionado para Academias', page: 'segmento-academia' },
            { label: 'Ar Condicionado para Escolas', page: 'segmento-escola' },
          ]} />
        </div>
        <div>
          <h2 className="text-lg font-bold text-primary mb-4 pb-2 border-b border-slate-100">Segmentos por Perfil de Cliente</h2>
          <LinkList links={[
            { label: 'Ar Condicionado para Farmácias em São Paulo', page: 'seg-farmacia' },
            { label: 'Ar Condicionado para Consultórios Odontológicos', page: 'seg-odonto' },
            { label: 'Ar Condicionado para Salões de Beleza', page: 'seg-salao' },
            { label: 'Ar Condicionado para Supermercados', page: 'seg-supermercado' },
            { label: 'Ar Condicionado para Data Centers', page: 'seg-datacenter' },
            { label: 'Ar Condicionado para Coworkings', page: 'seg-coworking' },
            { label: 'Ar Condicionado para Igrejas e Templos', page: 'seg-igreja' },
            { label: 'Ar Condicionado para Laboratórios', page: 'seg-laboratorio' },
            { label: 'Ar Condicionado para Pet Shops e Clínicas Veterinárias', page: 'seg-petshop' },
            { label: 'Ar Condicionado para Clínicas de Estética', page: 'seg-estetica' },
            { label: 'Ar Condicionado para Lojas e Varejo', page: 'seg-loja' },
            { label: 'Ar Condicionado para Bancos e Financeiras', page: 'seg-banco' },
            { label: 'Ar Condicionado para Padarias e Confeitarias', page: 'seg-padaria' },
            { label: 'Ar Condicionado para Concessionárias', page: 'seg-concessionaria' },
            { label: 'Ar Condicionado para Escritórios de Advocacia', page: 'seg-advocacia' },
            { label: 'Ar Condicionado para Consultórios de Psicologia', page: 'seg-psicologia' },
            { label: 'Ar Condicionado para Clínicas de Fisioterapia', page: 'seg-fisioterapia' },
            { label: 'Ar Condicionado para Creches e Berçários', page: 'seg-creche' },
            { label: 'Ar Condicionado para Bares e Pubs', page: 'seg-bar' },
          ]} />
        </div>
        <div>
          <h2 className="text-lg font-bold text-primary mb-4 pb-2 border-b border-slate-100">Regiões Atendidas</h2>
          <LinkList links={regionLinks} />
        </div>
        <div>
          <h2 className="text-lg font-bold text-primary mb-4 pb-2 border-b border-slate-100">Manutenção por Cidade — ABC</h2>
          <LinkList links={[
            { label: 'Manutenção de Ar Condicionado em Santo André', page: 'manutencao-santo-andre' },
            { label: 'Manutenção de Ar Condicionado em São Bernardo do Campo', page: 'manutencao-sao-bernardo' },
            { label: 'Manutenção de Ar Condicionado em São Caetano do Sul', page: 'manutencao-sao-caetano' },
            { label: 'Manutenção de Ar Condicionado em Diadema', page: 'manutencao-diadema' },
            { label: 'Manutenção de Ar Condicionado em Mauá', page: 'manutencao-maua' },
          ]} />
        </div>
        <div>
          <h2 className="text-lg font-bold text-primary mb-4 pb-2 border-b border-slate-100">Limpeza por Cidade — ABC</h2>
          <LinkList links={[
            { label: 'Limpeza de Ar Condicionado em Santo André', page: 'limpeza-santo-andre' },
            { label: 'Limpeza de Ar Condicionado em São Bernardo do Campo', page: 'limpeza-sao-bernardo' },
            { label: 'Limpeza de Ar Condicionado em São Caetano do Sul', page: 'limpeza-sao-caetano' },
            { label: 'Limpeza de Ar Condicionado em Diadema', page: 'limpeza-diadema' },
            { label: 'Limpeza de Ar Condicionado em Mauá', page: 'limpeza-maua' },
          ]} />
        </div>
        <div>
          <h2 className="text-lg font-bold text-primary mb-4 pb-2 border-b border-slate-100">PMOC por Cidade — ABC Paulista</h2>
          <LinkList links={[
            { label: 'PMOC em Santo André — Contrato de Manutenção', page: 'pmoc-santo-andre' },
            { label: 'PMOC em São Bernardo do Campo', page: 'pmoc-sao-bernardo' },
            { label: 'PMOC em São Caetano do Sul', page: 'pmoc-sao-caetano' },
            { label: 'PMOC em Diadema', page: 'pmoc-diadema' },
            { label: 'PMOC em Mauá', page: 'pmoc-maua' },
          ]} />
        </div>
        <div>
          <h2 className="text-lg font-bold text-primary mb-4 pb-2 border-b border-slate-100">Instalação por Tipo de Equipamento</h2>
          <LinkList links={[
            { label: 'Instalação de Ar Condicionado Split em São Paulo', page: 'inst-split' },
            { label: 'Instalação de Ar Condicionado Cassete em São Paulo', page: 'inst-cassete' },
            { label: 'Instalação de Ar Condicionado Piso-Teto em São Paulo', page: 'inst-piso-teto' },
            { label: 'Instalação de Multi Split em São Paulo', page: 'inst-multi-split' },
            { label: 'Instalação de Ar Condicionado Inverter em São Paulo', page: 'inst-inverter' },
          ]} />
        </div>
        <div>
          <h2 className="text-lg font-bold text-primary mb-4 pb-2 border-b border-slate-100">Problemas Comuns — Conserto Rápido</h2>
          <LinkList links={[
            { label: 'Ar Condicionado Não Gela em São Paulo', page: 'prob-nao-gela' },
            { label: 'Ar Condicionado Vazando Água em São Paulo', page: 'prob-vazando' },
            { label: 'Recarga de Gás de Ar Condicionado em SP', page: 'prob-gas' },
            { label: 'Ar Condicionado com Mau Cheiro em São Paulo', page: 'prob-mau-cheiro' },
            { label: 'Ar Condicionado Fazendo Barulho em São Paulo', page: 'prob-barulho' },
            { label: 'Ar Condicionado Desligando Sozinho em São Paulo', page: 'prob-desliga' },
          ]} />
        </div>
        <div>
          <h2 className="text-lg font-bold text-primary mb-4 pb-2 border-b border-slate-100">Limpeza, PMOC e Contratos</h2>
          <LinkList links={[
            { label: 'Limpeza de Ar Condicionado em São Paulo', page: 'serv-limpeza-sp' },
            { label: 'Higienização de Ar Condicionado em São Paulo', page: 'serv-higienizacao-sp' },
            { label: 'PMOC em São Paulo — Contrato Obrigatório', page: 'serv-pmoc-sp' },
            { label: 'Contrato de Manutenção de Ar Condicionado em SP', page: 'serv-contrato-sp' },
          ]} />
        </div>
        <div>
          <h2 className="text-lg font-bold text-primary mb-4 pb-2 border-b border-slate-100">Equipamentos Grandes e Sistemas Centrais</h2>
          <LinkList links={[
            { label: 'Manutenção de Chiller em São Paulo', page: 'manutencao-chiller' },
            { label: 'Manutenção e Limpeza de Fan Coil em São Paulo', page: 'manutencao-fan-coil' },
            { label: 'Manutenção de Self Contained em São Paulo', page: 'manutencao-self-contained' },
            { label: 'Limpeza e Higienização de Fan Coil em São Paulo', page: 'limpeza-fan-coil' },
            { label: 'Central de Água Gelada em São Paulo', page: 'central-agua-gelada' },
          ]} />
        </div>
        <div>
          <h2 className="text-lg font-bold text-primary mb-4 pb-2 border-b border-slate-100">Sazonais e Oportunidades</h2>
          <LinkList links={[
            { label: 'Ar Condicionado para Aquecimento em São Paulo', page: 'aquecimento-sp' },
            { label: 'Manutenção Preventiva Antes do Verão em SP', page: 'manutencao-preventiva-verao' },
          ]} />
        </div>
        <div>
          <h2 className="text-lg font-bold text-primary mb-4 pb-2 border-b border-slate-100">Regiões por Zona</h2>
          <LinkList links={[
            { label: 'Ar Condicionado na Zona Sul de São Paulo', page: 'zona-sul' },
            { label: 'Ar Condicionado na Zona Norte de São Paulo', page: 'zona-norte' },
            { label: 'Ar Condicionado na Zona Leste de São Paulo', page: 'zona-leste' },
            { label: 'Ar Condicionado na Zona Oeste de São Paulo', page: 'zona-oeste' },
            { label: 'Ar Condicionado na Região Central de São Paulo', page: 'zona-central' },
          ]} />
        </div>
        <div>
          <h2 className="text-lg font-bold text-primary mb-4 pb-2 border-b border-slate-100">Instalação por Marca</h2>
          <LinkList links={[
            { label: 'Instalação de Ar Condicionado LG em São Paulo', page: 'marca-lg' },
            { label: 'Instalação de Ar Condicionado Samsung em São Paulo', page: 'marca-samsung' },
            { label: 'Instalação de Ar Condicionado Daikin em São Paulo', page: 'marca-daikin' },
            { label: 'Instalação de Ar Condicionado Midea em São Paulo', page: 'marca-midea' },
            { label: 'Instalação de Ar Condicionado Fujitsu em São Paulo', page: 'marca-fujitsu' },
            { label: 'Instalação de Ar Condicionado Carrier em São Paulo', page: 'marca-carrier' },
            { label: 'Instalação de Ar Condicionado Elgin em São Paulo', page: 'marca-elgin' },
            { label: 'Instalação de Ar Condicionado Gree em São Paulo', page: 'marca-gree' },
            { label: 'Instalação de Ar Condicionado Springer Carrier em SP', page: 'marca-springer' },
            { label: 'Instalação de Ar Condicionado Komeco em São Paulo', page: 'marca-komeco' },
            { label: 'Instalação de Ar Condicionado Philco em São Paulo', page: 'marca-philco' },
            { label: 'Instalação de Ar Condicionado Electrolux em São Paulo', page: 'marca-electrolux' },
            { label: 'Instalação de Ar Condicionado Trane em São Paulo', page: 'marca-trane' },
            { label: 'Instalação de Ar Condicionado York em São Paulo', page: 'marca-york' },
            { label: 'Instalação de Ar Condicionado Hitachi em São Paulo', page: 'marca-hitachi' },
            { label: 'Instalação de Ar Condicionado Panasonic em São Paulo', page: 'marca-panasonic' },
            { label: 'Instalação de Ar Condicionado Bosch em São Paulo', page: 'marca-bosch' },
            { label: 'Instalação de Ar Condicionado TCL em São Paulo', page: 'marca-tcl' },
            { label: 'Instalação de Ar Condicionado Agratto em São Paulo', page: 'marca-agratto' },
            { label: 'Instalação de Ar Condicionado Consul em São Paulo', page: 'marca-consul' },
          ]} />
        </div>
        <div>
          <h2 className="text-lg font-bold text-primary mb-4 pb-2 border-b border-slate-100">Páginas por Bairro</h2>
          <LinkList links={bairroLinks} />
        </div>
        <div>
          <h2 className="text-lg font-bold text-primary mb-4 pb-2 border-b border-slate-100">Blog — Guias e Legislação</h2>
          <LinkList links={blogLinks} />
        </div>
      </div>

      {/* Áreas de atendimento */}
      <div className="mb-12">
        <h2 className="text-lg font-bold text-primary mb-6 pb-2 border-b border-slate-100">Áreas de Atendimento</h2>
        <div className="space-y-6">
          {areas.map((area, i) => (
            <div key={i}>
              <h3 className="text-sm font-bold text-primary-light uppercase tracking-widest mb-2">{area.zona}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{area.bairros}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Sitemap XML */}
      <div className="pt-8 border-t border-slate-100">
        <p className="text-slate-400 text-sm">
          Também disponível:{' '}
          <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="text-primary-light hover:underline font-medium">
            sitemap.xml
          </a>{' '}
          (para buscadores).
        </p>
      </div>
    </div>
  )
}
