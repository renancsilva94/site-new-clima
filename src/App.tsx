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


import { useRouter, usePathname } from 'next/navigation';

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
  BlogManutencaoConsequencias
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
type PageId = 'home' | 'mapa-site' | 'split-multisplit' | 'bairro-moema' | 'bairro-vila-mariana' | 'bairro-pinheiros' | 'bairro-itaim-bibi' | 'bairro-jardins' | 'bairro-tatuape' | 'bairro-santana' | 'bairro-brooklin' | 'bairro-perdizes' | 'bairro-morumbi' | 'bairro-mooca' | 'bairro-analia-franco' | 'bairro-vila-madalena' | 'bairro-campo-belo' | 'bairro-saude' | 'bairro-higienopolis' | 'bairro-lapa' | 'bairro-santo-amaro' | 'bairro-tucuruvi' | 'bairro-ipiranga' | 'bairro-vila-prudente' | 'bairro-jabaquara' | 'bairro-campo-grande' | 'bairro-penha' | 'bairro-cursino' | 'bairro-agua-rasa' | 'bairro-bela-vista' | 'bairro-butanta' | 'bairro-vila-olimpia' | 'bairro-pompeia' | 'bairro-paraiso' | 'bairro-aclimacao' | 'bairro-mirandopolis' | 'bairro-planalto-paulista' | 'bairro-vila-clementino' | 'bairro-chacara-klabin' | 'bairro-cambuci' | 'bairro-liberdade' | 'segmento-clinica' | 'segmento-escritorio' | 'segmento-condominio' | 'segmento-restaurante' | 'segmento-hotel' | 'segmento-pousada' | 'segmento-academia' | 'segmento-escola' | 'sem-instalacao' | 'sem-manutencao' | 'sem-tecnico' | 'sem-conserto' | 'sem-empresa' | 'sem-assistencia' | 'sistemas-comerciais' | 'vrf-mini-vrf' | 'manutencao-preventiva' | 'manutencao-corretiva' | 'limpeza' | 'blog' | 'sobre' | 'contato' | 'sao-paulo' | 'santo-andre' | 'sao-bernardo' | 'sao-caetano' | 'diadema' | 'maua' | 'blog-inverter' | 'blog-apartamento' | 'blog-btus' | 'blog-pmoc' | 'blog-round-cassette' | 'blog-obra-limpa' | 'blog-quarto' | 'blog-convencional-inverter' | 'blog-empresas' | 'blog-pmoc-obrigatorio' | 'blog-multa-pmoc' | 'blog-pmoc-condominio' | 'blog-custo-pmoc' | 'blog-custo-instalacao' | 'blog-qual-ac' | 'blog-split-multi-split' | 'blog-manutencao-consequencias';

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
  <div className={`mb-12 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'}`}>
    {tag && (
      <span className="inline-block bg-ice text-primary-light text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4">
        {tag}
      </span>
    )}
    {asH1 ? (
      <h1 className="text-3xl md:text-4xl font-extrabold text-primary mb-4 leading-tight">{title}</h1>
    ) : (
      <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4 leading-tight">{title}</h2>
    )}
    {subtitle && (
      <p className="text-lg text-slate-600 leading-relaxed">
        {subtitle}
      </p>
    )}
  </div>
);

export default function App() {
  const router = useRouter();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  const navigate = (page: PageId) => {
    const routes: Record<PageId, string> = {
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
    }
    const path = routes[page] || '/'
    router.push(path)
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <SchemaOrg />
      <div className="min-h-screen font-sans text-slate-900 bg-white selection:bg-primary/10 selection:text-primary">
        

        {/* Topbar */}
        <div className="hidden md:block bg-primary text-white py-2 text-sm border-b border-white/10">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <div className="flex gap-6">
              <a href="tel:+5511963462516" className="flex items-center gap-2 hover:text-blue-200 transition-colors">
                <Phone size={14} /> (11) 96346-2516
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
                alt="New Clima Ar" 
                className="h-24 md:h-28 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </div>

            <nav className="hidden lg:flex items-center gap-1">
              <button onClick={() => navigate('home')} className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-primary-light transition-colors">Início</button>
              <div className="relative group">
                <button className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-primary-light flex items-center gap-1">
                  Serviços <ChevronDown size={14} />
                </button>
                <div className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-xl border border-slate-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all translate-y-2 group-hover:translate-y-0">
                  <button onClick={() => navigate('split-multisplit')} className="w-full text-left px-4 py-2 text-sm hover:bg-ice hover:text-primary-light transition-colors">Instalação de Ar Condicionado Split</button>
                  <button onClick={() => navigate('sistemas-comerciais')} className="w-full text-left px-4 py-2 text-sm hover:bg-ice hover:text-primary-light transition-colors">Sistemas Cassete e Piso-Teto</button>
                  <button onClick={() => navigate('vrf-mini-vrf')} className="w-full text-left px-4 py-2 text-sm hover:bg-ice hover:text-primary-light transition-colors">Sistemas VRF e Mini VRF</button>
                  <button onClick={() => navigate('manutencao-preventiva')} className="w-full text-left px-4 py-2 text-sm hover:bg-ice hover:text-primary-light transition-colors">Manutenção Preventiva e PMOC</button>
                  <button onClick={() => navigate('manutencao-corretiva')} className="w-full text-left px-4 py-2 text-sm hover:bg-ice hover:text-primary-light transition-colors">Conserto de Ar Condicionado</button>
                  <button onClick={() => navigate('limpeza')} className="w-full text-left px-4 py-2 text-sm hover:bg-ice hover:text-primary-light transition-colors">Limpeza de Ar Condicionado SP</button>
                </div>
              </div>
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
                  <hr className="border-slate-100" />
                  <div className="font-bold text-xs text-slate-400 uppercase tracking-widest mb-1">Serviços</div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <button onClick={() => navigate('split-multisplit')} className="text-left text-sm py-2 text-slate-600 border-b border-slate-50">Instalação de Ar Condicionado Split</button>
                    <button onClick={() => navigate('sistemas-comerciais')} className="text-left text-sm py-2 text-slate-600 border-b border-slate-50">Sistemas Cassete e Piso-Teto</button>
                    <button onClick={() => navigate('vrf-mini-vrf')} className="text-left text-sm py-2 text-slate-600 border-b border-slate-50">Sistemas VRF e Mini VRF</button>
                    <button onClick={() => navigate('manutencao-preventiva')} className="text-left text-sm py-2 text-slate-600 border-b border-slate-50">Manutenção Preventiva e PMOC</button>
                    <button onClick={() => navigate('manutencao-corretiva')} className="text-left text-sm py-2 text-slate-600 border-b border-slate-50">Conserto de Ar Condicionado</button>
                    <button onClick={() => navigate('limpeza')} className="text-left text-sm py-2 text-slate-600">Limpeza de Ar Condicionado SP</button>
                  </div>
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
            if (p === '/ar-condicionado-clinica-medica-sp') return <SegmentoView slug="clinica-medica" title="Clínica Médica" tag="SAÚDE" headline="Ar Condicionado para Clínicas Médicas em São Paulo" desc="Temperatura controlada, PMOC obrigatório e qualidade do ar certificada para clínicas, consultórios e laboratórios em SP e ABC." dor="PMOC não regularizado gera multas de até R$ 1,5 milhão. Qualquer estabelecimento de saúde acima de 60.000 BTUs é obrigado pela Lei 13.589/18." servicos={["Instalação de sistemas silenciosos para salas de consulta", "Contrato PMOC conforme Lei 13.589/18", "Manutenção preventiva trimestral", "Higienização com bactericida certificado"]} faq={[["Clínicas são obrigadas a ter PMOC?", "Sim. Qualquer estabelecimento de saúde com sistema de ar condicionado acima de 60.000 BTUs é obrigado pela Lei 13.589/18. A multa pode chegar a R$ 1,5 milhão."], ["Qual sistema ideal para sala de consulta?", "Recomendamos splits inverter de baixo ruído (abaixo de 26dB). Para centros cirúrgicos, sistemas com filtragem HEPA são exigidos pelas normas da ANVISA."], ["Com que frequência fazer manutenção em clínica?", "O mínimo exigido pelo PMOC é trimestral. Recomendamos bimensal para ambientes de alta ocupação como pronto-socorros."]]} vizinhos="Vila Mariana · Moema · Itaim Bibi · Pinheiros · Jardins" navigate={navigate} />;
            if (p === '/ar-condicionado-escritorio-sao-paulo') return <SegmentoView slug="escritorio" title="Escritório" tag="COMERCIAL" headline="Ar Condicionado para Escritórios em São Paulo" desc="Sistemas de climatização para escritórios, coworkings e espaços corporativos em SP. Sem barulho, sem parada e com contrato de manutenção." dor="Ar condicionado barulhento ou com defeito no meio do expediente custa produtividade e prejudica a imagem da empresa." servicos={["Instalação de sistemas silenciosos tipo cassete e piso-teto", "Contrato de manutenção mensal ou trimestral", "PMOC para prédios comerciais", "Atendimento emergencial em até 4 horas"]} faq={[["Qual sistema é melhor para escritório?", "Para salas pequenas, split hi-wall inverter é suficiente. Para escritórios maiores, o cassete de 4 vias distribui o ar uniformemente. Para andares inteiros, VRF ou dutado são as melhores opções."], ["A instalação pode ser feita fora do horário comercial?", "Sim. Planejamos a instalação para finais de semana ou horário noturno, minimizando qualquer interrupção das atividades."], ["Escritórios precisam de PMOC?", "Prédios comerciais com mais de 60.000 BTUs são obrigados pela Lei 13.589/18. A maioria dos andares corporativos se enquadra nessa faixa."]]} vizinhos="Itaim Bibi · Pinheiros · Jardins · Faria Lima · Vila Olímpia" navigate={navigate} />;
            if (p === '/ar-condicionado-condominio-sp') return <SegmentoView slug="condominio" title="Condomínio" tag="CONDOMÍNIO" headline="Ar Condicionado para Condomínios em São Paulo" desc="Instalação, manutenção e PMOC para condomínios residenciais e comerciais em SP e ABC. Contratos flexíveis para síndicos e administradoras." dor="Síndicos respondem pessoalmente por irregularidades no PMOC. Sem contrato, a multa sai do bolso da administração." servicos={["Contrato PMOC para áreas comuns", "Instalação em unidades residenciais e comerciais", "Manutenção preventiva das áreas comuns", "Relatórios técnicos para assembleias"]} faq={[["Condomínios precisam de PMOC?", "Sim. Condomínios com sistema central ou capacidade acima de 60.000 BTUs nas áreas comuns são obrigados a manter PMOC ativo. O síndico responde legalmente pelo cumprimento."], ["Como funciona o contrato para condomínio?", "Fazemos um levantamento de todos os equipamentos, elaboramos o PMOC conforme a norma e entregamos relatório técnico após cada visita."], ["A New Clima atende unidades individuais também?", "Sim. Além do contrato de áreas comuns, atendemos moradores individualmente para instalação e manutenção nas unidades."]]} vizinhos="Vila Mariana · Moema · Brooklin · Pinheiros · Jardins" navigate={navigate} />;
            if (p === '/ar-condicionado-restaurante-sp') return <SegmentoView slug="restaurante" title="Restaurante" tag="ALIMENTAÇÃO" headline="Ar Condicionado para Restaurantes em São Paulo" desc="Sistemas de climatização para restaurantes, bares e lanchonetes em SP. Exigência da Vigilância Sanitária cumprida com PMOC e manutenção regular." dor="Restaurante quente perde cliente. Ar condicionado parado no horário de pico é prejuízo direto no caixa." servicos={["Instalação de sistemas para ambientes com alta ocupação", "PMOC para atender a Vigilância Sanitária", "Manutenção emergencial com prioridade", "Higienização com produtos seguros para alimentos"]} faq={[["Restaurantes precisam de PMOC?", "Sim. Restaurantes com sistema de ar condicionado são fiscalizados pela Vigilância Sanitária, que exige manutenção regular documentada. O PMOC é a forma legal de comprovar essa manutenção."], ["Com que frequência higienizar o ar condicionado de restaurante?", "Recomendamos higienização a cada 3 meses no mínimo — especialmente em cozinhas, onde a gordura contamina os filtros rapidamente."], ["O serviço pode ser feito fora do horário de funcionamento?", "Sim. Realizamos manutenção e instalação no horário que melhor atende o restaurante — antes da abertura ou após o fechamento."]]} vizinhos="Pinheiros · Vila Madalena · Itaim Bibi · Jardins · Moema" navigate={navigate} />;
            if (p === '/ar-condicionado-hotel-sp') return <SegmentoView slug="hotel" title="Hotel" tag="HOTELARIA" headline="Ar Condicionado para Hotéis em São Paulo" desc="Sistemas de climatização para hotéis, apart-hotéis e hostels em SP. PMOC obrigatório, manutenção silenciosa e atendimento 24h." dor="Ar condicionado com defeito no quarto gera reclamação, avaliação negativa no Booking e perda de hóspede." servicos={["Instalação de sistemas para quartos e áreas comuns", "Contrato PMOC e manutenção preventiva", "Atendimento emergencial 24 horas", "Manutenção silenciosa sem incomodar hóspedes"]} faq={[["Hotéis são obrigados a ter PMOC?", "Sim. Hotéis com sistema de ar condicionado central ou capacidade acima de 60.000 BTUs são obrigados pela Lei 13.589/18. A Vigilância Sanitária fiscaliza."], ["Como funciona a manutenção sem incomodar hóspedes?", "Planejamos as visitas para o período de menor ocupação e priorizamos quartos vagos. Para emergências, temos protocolo de atendimento silencioso."], ["Atendem apart-hotéis e hostels também?", "Sim. Atendemos qualquer tipo de hospedagem em SP e ABC. O contrato é adaptado ao tamanho e necessidade do estabelecimento."]]} vizinhos="Jardins · Itaim Bibi · Vila Mariana · Centro · Higienópolis" navigate={navigate} />;
            if (p === '/ar-condicionado-pousada-sp') return <SegmentoView slug="pousada" title="Pousada" tag="HOTELARIA" headline="Ar Condicionado para Pousadas em SP e ABC" desc="Instalação e manutenção de ar condicionado para pousadas em São Paulo e ABC. Conforto para hóspedes e manutenção sem burocracia." dor="Pousada sem ar condicionado perde reserva. Equipamento parado no fim de semana é o pior momento para dar problema." servicos={["Instalação em quartos e áreas comuns", "Manutenção preventiva sob contrato", "Atendimento rápido para emergências", "Todas as marcas e modelos"]} faq={[["Pousadas precisam de PMOC?", "Pousadas com capacidade acima de 60.000 BTUs são obrigadas pela Lei 13.589/18. Mesmo abaixo desse limite, a manutenção documentada é exigida pela Vigilância Sanitária."], ["Qual o melhor equipamento para quarto de pousada?", "Split inverter hi-wall é a opção mais popular — bom custo-benefício, silencioso e eficiente. Para quartos premium, o cassete de 4 vias oferece ar mais uniforme."], ["Atendem pousadas no ABC Paulista?", "Sim. Atendemos pousadas em toda a região do ABC: Santo André, São Bernardo, São Caetano, Diadema e Mauá."]]} vizinhos="Santo André · São Bernardo · São Caetano · Vila Mariana · Moema" navigate={navigate} />;
            if (p === '/ar-condicionado-academia-sp') return <SegmentoView slug="academia" title="Academia" tag="FITNESS" headline="Ar Condicionado para Academias em São Paulo" desc="Sistemas de climatização para academias, estúdios de pilates e crossfit em SP. Alta capacidade, PMOC e manutenção que não para seu negócio." dor="Academia quente perde aluno. Sistema subdimensionado não refresca e gera reclamação e cancelamento de matrícula." servicos={["Projeto de dimensionamento correto para alta ocupação", "Instalação de sistemas de alta capacidade", "PMOC e manutenção preventiva", "Higienização profissional dos filtros"]} faq={[["Qual capacidade de BTUs para academia?", "Para academias, o cálculo considera a quantidade de pessoas em exercício — que gera muito mais calor que pessoas em repouso. Fazemos o cálculo de carga térmica gratuitamente."], ["Com que frequência fazer manutenção em academia?", "Recomendamos manutenção a cada 2 meses — o alto fluxo de pessoas e a umidade do suor contaminam os filtros rapidamente."], ["Academias são obrigadas a ter PMOC?", "Academias com capacidade acima de 60.000 BTUs são obrigadas pela Lei 13.589/18. A maioria das academias de médio porte se enquadra nessa faixa."]]} vizinhos="Vila Mariana · Moema · Brooklin · Pinheiros · Itaim Bibi" navigate={navigate} />;
            if (p === '/ar-condicionado-escola-sp') return <SegmentoView slug="escola" title="Escola" tag="EDUCAÇÃO" headline="Ar Condicionado para Escolas em São Paulo" desc="Instalação e manutenção de ar condicionado para escolas, creches e universidades em SP. PMOC obrigatório e qualidade do ar para alunos e professores." dor="Sala de aula quente reduz concentração e rendimento. PMOC irregular pode resultar em interdição pela Vigilância Sanitária." servicos={["Instalação em salas de aula e áreas comuns", "Contrato PMOC para instituições de ensino", "Manutenção preventiva nas férias escolares", "Higienização com produtos seguros para crianças"]} faq={[["Escolas são obrigadas a ter PMOC?", "Sim. Instituições de ensino com sistema de ar condicionado acima de 60.000 BTUs são obrigadas pela Lei 13.589/18. O descumprimento pode resultar em interdição."], ["Qual o melhor horário para manutenção em escola?", "Realizamos a manutenção preferencialmente durante as férias escolares para não impactar as aulas."], ["O ar condicionado pode piorar alergias das crianças?", "Um ar condicionado sem manutenção acumula fungos e ácaros. Com higienização regular, o ar condicionado melhora a qualidade do ar."]]} vizinhos="Vila Mariana · Moema · Brooklin · Santo André · São Bernardo" navigate={navigate} />;
            if (p === '/instalacao-ar-condicionado-sp') return <SegmentoView slug="instalacao-ar-condicionado-sp" title="Instalação de Ar Condicionado em SP" tag="INSTALAÇÃO" headline="Instalação de Ar Condicionado em São Paulo" desc="Serviço completo de instalação de ar condicionado em São Paulo e ABC. Split, multi-split, VRF e cassete. Técnicos certificados, obra limpa e garantia por escrito." dor="Instalação mal feita gera vazamento de gás, infiltração e danos à estrutura. Escolha quem tem técnico certificado e garante por escrito." servicos={["Instalação de split hi-wall residencial e comercial", "Instalação de multi-split para múltiplos ambientes", "Infraestrutura elétrica e hidráulica completa", "Obra limpa sem quebradeira", "Garantia de 1 ano na mão de obra", "Teste de funcionamento antes de entregar"]} faq={[["Quanto custa instalar ar condicionado em SP?", "Uma instalação residencial padrão em SP começa a partir de R$ 350. O valor varia conforme a complexidade da infraestrutura e o tipo de equipamento. Visita técnica gratuita e orçamento no mesmo dia."], ["Quanto tempo leva a instalação?", "Uma instalação de split simples leva em média 3 a 5 horas. Multi-split pode levar 1 a 2 dias dependendo do número de ambientes."], ["A instalação inclui infraestrutura elétrica?", "Sim. Realizamos toda a infraestrutura necessária: tubulação de cobre, dreno, suporte e ponto elétrico. Tudo documentado no orçamento antes de começar."]  ]} vizinhos="Vila Mariana · Moema · Pinheiros · Itaim Bibi · Santana · Tatuapé · SP e ABC" navigate={navigate} />;
            if (p === '/manutencao-ar-condicionado-sp') return <SegmentoView slug="manutencao-ar-condicionado-sp" title="Manutenção de Ar Condicionado em SP" tag="MANUTENÇÃO" headline="Manutenção de Ar Condicionado em São Paulo" desc="Manutenção preventiva e corretiva de ar condicionado em São Paulo e ABC. Todas as marcas, peças originais e garantia por escrito." dor="Ar condicionado sem manutenção consome até 30% mais energia e quebra antes do tempo. Uma visita preventiva evita o custo de um conserto." servicos={["Manutenção preventiva com checklist completo", "Manutenção corretiva e diagnóstico de defeitos", "Limpeza de filtros, serpentina e dreno", "Verificação de gás refrigerante", "Contratos mensais, trimestrais ou anuais", "Relatório técnico após cada visita"]} faq={[["Com que frequência fazer manutenção de ar condicionado?", "Para uso residencial, recomendamos a cada 6 meses. Para uso comercial ou intenso, a cada 3 meses. Ambientes com muita poeira ou cozinhas podem precisar de manutenção mensal."], ["Quanto custa a manutenção de ar condicionado em SP?", "A manutenção preventiva começa a partir de R$ 120 por aparelho. Contratos mensais têm valor reduzido. Diagnóstico gratuito na primeira visita."], ["A manutenção é feita em todas as marcas?", "Sim. Atendemos todas as marcas: LG, Samsung, Daikin, Midea, Fujitsu, Carrier, Elgin, Gree e outras."]  ]} vizinhos="Vila Mariana · Moema · Pinheiros · Itaim Bibi · Santana · Tatuapé · SP e ABC" navigate={navigate} />;
            if (p === '/tecnico-ar-condicionado-sp') return <SegmentoView slug="tecnico-ar-condicionado-sp" title="Técnico de Ar Condicionado em SP" tag="TÉCNICO" headline="Técnico de Ar Condicionado em São Paulo" desc="Técnicos certificados de ar condicionado em São Paulo e ABC. Instalação, manutenção e conserto com garantia por escrito e atendimento em até 2 horas." dor="Técnico sem certificação pode anular a garantia do fabricante e causar danos ao equipamento. Exija credencial e garantia por escrito." servicos={["Técnicos com certificação de fabricante", "Atendimento em até 2 horas em SP e ABC", "Identificados, uniformizados e com histórico de avaliações", "Garantia por escrito em todo serviço", "Diagnóstico preciso com equipamentos profissionais", "Peças originais com nota fiscal"]} faq={[["Como escolher um técnico de ar condicionado confiável em SP?", "Verifique se o técnico tem certificação do fabricante, se emite garantia por escrito e se tem avaliações no Google. Desconfie de preços muito abaixo do mercado — geralmente indica uso de peças genéricas ou mão de obra não qualificada."], ["Quanto cobra um técnico de ar condicionado em SP?", "A visita técnica da New Clima é gratuita. O valor do serviço é orçado no local após o diagnóstico. Manutenção preventiva a partir de R$ 120, instalação a partir de R$ 350."], ["O técnico vai até meu apartamento em SP?", "Sim. Atendemos apartamentos e condomínios em toda São Paulo e ABC. Respeitamos as normas de acesso do condomínio e trabalhamos com proteção de piso e móveis."]  ]} vizinhos="Vila Mariana · Moema · Pinheiros · Itaim Bibi · Santana · Tatuapé · SP e ABC" navigate={navigate} />;
            if (p === '/conserto-ar-condicionado-sp') return <SegmentoView slug="conserto-ar-condicionado-sp" title="Conserto de Ar Condicionado em SP" tag="CONSERTO" headline="Conserto de Ar Condicionado em São Paulo" desc="Conserto de ar condicionado em São Paulo e ABC. Diagnóstico preciso, peças originais e garantia de 90 dias. Atendimento em até 2 horas." dor="Ar condicionado parado no verão é urgência. Diagnóstico rápido e conserto no mesmo dia na maioria dos casos." servicos={["Diagnóstico gratuito na visita técnica", "Conserto de todas as marcas e modelos", "Recarga de gás refrigerante", "Troca de compressor, capacitor e placa", "Conserto de vazamento e dreno entupido", "Garantia de 90 dias no serviço"]} faq={[["Qual o prazo para conserto de ar condicionado em SP?", "Na maioria dos casos consertamos no mesmo dia da visita. Para peças especiais, o prazo é de 1 a 3 dias úteis. Respondemos em até 2 horas após o contato."], ["Vale a pena consertar ou comprar um novo?", "Depende do defeito e da idade do aparelho. Em geral, se o conserto custar mais de 50% do valor de um aparelho novo, vale mais a pena trocar. Fazemos essa avaliação gratuitamente na visita."], ["Vocês consertam todas as marcas?", "Sim. Consertamos LG, Samsung, Daikin, Midea, Fujitsu, Carrier, Elgin, Gree, Springer e outras marcas."]  ]} vizinhos="Vila Mariana · Moema · Pinheiros · Itaim Bibi · Santana · Tatuapé · SP e ABC" navigate={navigate} />;
            if (p === '/empresa-ar-condicionado-sp') return <SegmentoView slug="empresa-ar-condicionado-sp" title="Empresa de Ar Condicionado em SP" tag="EMPRESA" headline="Empresa de Ar Condicionado em São Paulo" desc="New Clima — empresa especializada em ar condicionado em São Paulo e ABC desde 2018. Instalação, manutenção, higienização e PMOC com equipe própria e garantia por escrito." dor="Contratar empresa sem equipe própria ou sem histórico é risco. Peça CNPJ, avaliações no Google e garantia documentada antes de fechar." servicos={["Empresa com CNPJ e equipe técnica própria", "Desde 2018 em SP e ABC", "4.9 estrelas no Google com 24 avaliações", "Contratos para residências e empresas", "PMOC conforme Lei 13.589/18", "Garantia por escrito em todo serviço"]} faq={[["A New Clima é uma empresa registrada?", "Sim. Somos uma empresa com CNPJ, equipe técnica própria e atuando em São Paulo e ABC desde 2018. Emitimos nota fiscal e garantia por escrito em todo serviço."], ["Atendem tanto residencial quanto comercial?", "Sim. Atendemos apartamentos, casas, escritórios, condomínios, clínicas, restaurantes, hotéis e indústrias em SP e ABC."], ["Como solicitar orçamento?", "Pelo WhatsApp (11) 96346-2516. Respondemos em até 2 horas e agendamos a visita técnica gratuita conforme sua disponibilidade."]  ]} vizinhos="Vila Mariana · Moema · Pinheiros · Itaim Bibi · Santana · Tatuapé · SP e ABC" navigate={navigate} />;
            if (p === '/assistencia-tecnica-ar-condicionado-sp') return <SegmentoView slug="assistencia-tecnica-ar-condicionado-sp" title="Assistência Técnica de Ar Condicionado em SP" tag="ASSISTÊNCIA TÉCNICA" headline="Assistência Técnica de Ar Condicionado em São Paulo" desc="Assistência técnica especializada em ar condicionado em São Paulo e ABC. Conserto, manutenção e instalação com técnicos certificados e garantia por escrito." dor="Assistência técnica não autorizada pode anular a garantia do fabricante. Verifique sempre as credenciais antes de contratar." servicos={["Assistência técnica para todas as marcas", "Conserto de compressor, placa e capacitor", "Recarga de gás refrigerante R410A e R32", "Manutenção preventiva e corretiva", "Instalação e reinstalação de equipamentos", "Atendimento residencial e comercial em SP e ABC"]} faq={[["A New Clima é assistência técnica autorizada?", "Somos uma empresa independente especializada em ar condicionado, atendendo todas as marcas com técnicos certificados. Para garantia de fábrica específica, consulte o fabricante."], ["Qual o prazo de atendimento da assistência técnica?", "Respondemos em até 2 horas e agendamos a visita conforme sua disponibilidade. Para urgências, tentamos atender no mesmo dia."], ["A assistência técnica atende fins de semana?", "Atendemos de segunda a sexta das 8h às 18h e sábados das 8h às 13h. Para emergências, nosso WhatsApp fica disponível fora do horário comercial."]  ]} vizinhos="Vila Mariana · Moema · Pinheiros · Itaim Bibi · Santana · Tatuapé · SP e ABC" navigate={navigate} />; title="Escola" tag="EDUCAÇÃO" headline="Ar Condicionado para Escolas em São Paulo" desc="Instalação e manutenção de ar condicionado para escolas, creches e universidades em SP. PMOC obrigatório e qualidade do ar para alunos e professores." dor="Sala de aula quente reduz concentração e rendimento. PMOC irregular pode resultar em interdição pela Vigilância Sanitária." servicos={["Instalação em salas de aula e áreas comuns", "Contrato PMOC para instituições de ensino", "Manutenção preventiva nas férias escolares", "Higienização com produtos seguros para crianças"]} faq={[["Escolas são obrigadas a ter PMOC?", "Sim. Instituições de ensino com sistema de ar condicionado acima de 60.000 BTUs são obrigadas pela Lei 13.589/18. O descumprimento pode resultar em interdição."], ["Qual o melhor horário para manutenção em escola?", "Realizamos a manutenção preferencialmente durante as férias escolares (janeiro e julho) para não impactar as aulas."], ["O ar condicionado pode piorar alergias das crianças?", "Um ar condicionado sem manutenção acumula fungos e ácaros. Com higienização regular, o ar condicionado melhora a qualidade do ar — especialmente em SP, com alto nível de poluição."]]} vizinhos="Vila Mariana · Moema · Brooklin · Santo André · São Bernardo" navigate={navigate} />;
            if (p === '/ar-condicionado-sao-paulo') return <SaoPauloRegion navigate={navigate} />;
            if (p === '/ar-condicionado-santo-andre') return <SantoAndreRegion navigate={navigate} />;
            if (p === '/ar-condicionado-sao-bernardo-do-campo') return <SaoBernardoRegion navigate={navigate} />;
            if (p === '/ar-condicionado-sao-caetano-do-sul') return <SaoCaetanoRegion navigate={navigate} />;
            if (p === '/ar-condicionado-diadema') return <DiademaMauaRegion regionName="Diadema" navigate={navigate} />;
            if (p === '/ar-condicionado-maua') return <DiademaMauaRegion regionName="Mauá" navigate={navigate} />;
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
                  src="https://cdn.coteibem.com.br/company/41315/logo/f4d0405d-28b6-4834-a8ca-9e63b68073fa.png"
                  alt="New Clima Ar Condicionado"
                  className="h-16 w-auto brightness-0 invert"
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
            Dúvidas? Fale com um técnico!
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
function RegionsTabs({ navigate }: { navigate: (p: PageId) => void }) {
  const [activeTab, setActiveTab] = React.useState(0)

  const tabs = [
    {
      label: 'Zona Sul',
      page: 'sao-paulo' as PageId,
      bairros: [
        'Vila Mariana', 'Moema', 'Saúde', 'Ipiranga', 'Jabaquara', 'Santo Amaro',
        'Campo Belo', 'Campo Grande', 'Brooklin', 'Cursino', 'Mirandópolis',
        'Planalto Paulista', 'Aclimação', 'Vila Clementino', 'Chácara Klabin',
        'Paraíso', 'Vila Olímpia', 'Itaim Bibi', 'Morumbi', 'Vila Andrade',
      ],
    },
    {
      label: 'Zona Oeste',
      page: 'sao-paulo' as PageId,
      bairros: [
        'Pinheiros', 'Vila Madalena', 'Perdizes', 'Lapa', 'Pompéia', 'Água Branca',
        'Alto de Pinheiros', 'Butantã', 'Vila Leopoldina', 'Jardim Europa',
        'Jardim América', 'Jardim Paulista', 'Jardins', 'Cerqueira César',
        'Consolação', 'Santa Cecília', 'Higienópolis', 'Pacaembu',
      ],
    },
    {
      label: 'Zona Norte',
      page: 'sao-paulo' as PageId,
      bairros: [
        'Santana', 'Tucuruvi', 'Vila Guilherme', 'Vila Maria', 'Casa Verde',
        'Mandaqui', 'Tremembé', 'Jaçanã', 'Vila Medeiros', 'Freguesia do Ó',
        'Brasilândia', 'Limão', 'Bom Retiro', 'Pari', 'Santa Efigênia',
      ],
    },
    {
      label: 'Zona Leste',
      page: 'sao-paulo' as PageId,
      bairros: [
        'Tatuapé', 'Anália Franco', 'Mooca', 'Vila Prudente', 'Penha',
        'Aricanduva', 'Carrão', 'Água Rasa', 'Belém', 'Brás',
        'Jardim Anália', 'Parque São Jorge', 'Vila Formosa', 'Sapopemba',
        'São Mateus', 'Itaquera', 'Guaianases',
      ],
    },
    {
      label: 'Região Central',
      page: 'sao-paulo' as PageId,
      bairros: [
        'Centro', 'República', 'Sé', 'Liberdade', 'Bela Vista', 'Cambuci',
        'Consolação', 'Santa Cecília', 'Vila Buarque', 'Luz', 'Glicério',
        'Santa Efigênia', 'Bom Retiro', 'Pari', 'Brás',
      ],
    },
    {
      label: 'Santo André',
      page: 'santo-andre' as PageId,
      bairros: [
        'Centro', 'Bairro Jardim', 'Campestre', 'Vila Assunção', 'Vila Gilda',
        'Vila Bastos', 'Utinga', 'Santa Teresinha', 'Parque das Nações',
        'Vila Pires', 'Jardim Bela Vista', 'Vila Alzira', 'Paraíso',
        'Vila Humaitá', 'Jardim', 'Bangú', 'Vila Luzita',
      ],
    },
    {
      label: 'São Bernardo',
      page: 'sao-bernardo' as PageId,
      bairros: [
        'Centro', 'Rudge Ramos', 'Jardim do Mar', 'Assunção', 'Nova Petrópolis',
        'Baeta Neves', 'Planalto', 'Demarchi', 'Alves Dias', 'Anchieta',
        'Paulicéia', 'Cooperativa', 'Vila Euclides', 'Ferrazópolis',
        'Jardim Olavo', 'Independência', 'Vila São Pedro',
      ],
    },
    {
      label: 'São Caetano',
      page: 'sao-caetano' as PageId,
      bairros: [
        'Centro', 'Santa Paula', 'Barcelona', 'Santo Antônio', 'Olímpico',
        'Boa Vista', 'Cerâmica', 'Fundação', 'Nova Gerty', 'Jardim São Caetano',
        'Oswaldo Cruz', 'Prosperidade', 'São José', 'Mauá',
      ],
    },
    {
      label: 'Diadema',
      page: 'diadema' as PageId,
      bairros: [
        'Centro', 'Serraria', 'Taboão', 'Piraporinha', 'Canhema', 'Conceição',
        'Eldorado', 'Campanário', 'Inamar', 'Vila Nogueira', 'Casa Grande',
        'Bairro Casa Grande', 'Jardim Canhema', 'Vila Mota',
      ],
    },
    {
      label: 'Mauá',
      page: 'maua' as PageId,
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


function HomeView({ navigate }: { navigate: (p: PageId) => void }) {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-primary overflow-hidden pt-16 pb-24">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-light rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div

            >
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-white text-sm font-semibold mb-8">
                <CheckCircle2 size={16} className="text-success" />
                Atendimento Premium em SP e ABC
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-[1.1] mb-6">
                Instalação de <span className="text-blue-400">Ar Condicionado</span> em São Paulo e ABC Paulista
              </h1>
              <p className="text-lg text-blue-100/80 mb-10 max-w-xl leading-relaxed">
                A New Clima Ar é especialista em <strong>instalação, manutenção e limpeza de ar condicionado em São Paulo e no ABC</strong>. Oferecemos soluções completas de climatização, PMOC para empresas e projetos personalizados para residências com foco em eficiência e economia.
              </p>
              
              <div className="flex flex-wrap gap-8 mb-10">
                {[
                  { number: "Desde 2018", label: "Operando em SP e ABC" },
                  { number: "500+", label: "Equipamentos instalados" },
                  { number: "4.9★", label: "24 avaliações no Google" },
                  { number: "100%", label: "Com garantia por escrito" },
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="text-2xl font-extrabold text-white">{stat.number}</div>
                    <div className="text-xs text-blue-100/60 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <WhatsAppButton className="h-14 px-8 text-lg" text="Quero Solicitar Orçamento" />
                <button 
                  onClick={() => navigate('contato')}
                  className="h-14 px-8 rounded-xl border-2 border-white/20 text-white font-bold hover:bg-white/10 transition-all"
                >
                  Saiba Mais
                </button>
              </div>
            </div>

              <div

              className="hidden lg:block relative"
            >
              <div className="relative z-10 bg-white rounded-3xl p-8 shadow-2xl border border-white/10">
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-primary">Receba uma Proposta</h3>
                  <p className="text-sm text-slate-500">Preencha os dados e entraremos em contato.</p>
                </div>
                <form className="space-y-4" action="https://wa.me/5511963462516" method="GET">
                  <div className="space-y-2">
                    <label htmlFor="hero-name" className="text-xs font-bold text-slate-400 uppercase tracking-wider">Nome Completo</label>
                    <input id="hero-name" type="text" placeholder="Seu nome" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary-light" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="hero-phone" className="text-xs font-bold text-slate-400 uppercase tracking-wider">WhatsApp / Telefone</label>
                    <input id="hero-phone" type="tel" placeholder="(11) 99999-9999" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary-light" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="hero-service" className="text-xs font-bold text-slate-400 uppercase tracking-wider">Serviço Desejado</label>
                    <select id="hero-service" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary-light">
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
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent rounded-full blur-3xl opacity-20" />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-400 rounded-full blur-3xl opacity-10" />
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
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block bg-ice text-primary-light text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4">Nossos Serviços</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">Do split do quarto ao sistema VRF de um galpão</h2>
            <p className="text-slate-500 text-lg">A New Clima cobre todo o ciclo: instalação, manutenção, higienização e PMOC.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                tag: "INSTALAÇÃO",
                title: "Instalação de Ar Condicionado em SP",
                desc: "Split, multi-split, VRF e cassete em São Paulo e ABC. Projeto dimensionado, instalação limpa e teste de funcionamento antes de entregar.",
                img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80&auto=format&fit=crop",
                page: 'split-multisplit' as PageId,
              },
              {
                tag: "MANUTENÇÃO",
                title: "Manutenção Preventiva e Corretiva em SP",
                desc: "Planos mensais, trimestrais ou sob demanda em São Paulo e ABC. Atuamos antes do defeito aparecer — evita parada e conta de luz inflada.",
                img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&auto=format&fit=crop",
                page: 'manutencao-preventiva' as PageId,
              },
              {
                tag: "HIGIENIZAÇÃO",
                title: "Higienização de Ar Condicionado em SP",
                desc: "Remove fungos, bactérias e poeira do evaporador em São Paulo e ABC. Ar mais limpo para respirar e equipamento com vida útil maior.",
                img: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600&q=80&auto=format&fit=crop",
                page: 'limpeza' as PageId,
              },
              {
                tag: "PMOC",
                title: "Contrato PMOC — Lei 13.589/18",
                desc: "Plano de Manutenção, Operação e Controle obrigatório para prédios, shoppings e hospitais em São Paulo e ABC. Documentação completa.",
                img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80&auto=format&fit=crop",
                page: 'manutencao-preventiva' as PageId,
              },
              {
                tag: "SISTEMAS VRF",
                title: "Sistemas VRF e Mini VRF em SP",
                desc: "Projetos completos para grandes residências e edifícios corporativos em São Paulo e ABC. Máxima eficiência energética e controle total.",
                img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80&auto=format&fit=crop",
                page: 'vrf-mini-vrf' as PageId,
              },
              {
                tag: "COMERCIAL",
                title: "Ar Condicionado Comercial em SP e ABC",
                desc: "Cassete, Piso-Teto e Dutado para lojas, escritórios e restaurantes em São Paulo e ABC. Projeto técnico e execução completos.",
                img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80&auto=format&fit=crop",
                page: 'sistemas-comerciais' as PageId,
              },
            ].map((s, i) => (
              <div
                key={i}
                onClick={() => navigate(s.page)}
                className="group cursor-pointer bg-white border border-slate-100 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <span className="absolute top-4 left-4 bg-white/90 text-primary text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full">
                    {s.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-primary-light transition-colors">{s.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">{s.desc}</p>
                  <div className="flex items-center gap-2 text-primary-light font-bold text-sm">
                    Saiba mais <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Segments Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <span className="text-primary-light text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Segmentos</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary">Para quem atendemos</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Wind size={28} />,
                title: "Residencial",
                desc: "Apartamentos, casas e condomínios. Instalação discreta, manutenção programada e higienização para quem quer ar limpo em casa.",
                page: 'split-multisplit' as PageId,
              },
              {
                icon: <Settings size={28} />,
                title: "Comercial",
                desc: "Escritórios, lojas, clínicas e restaurantes. Equipamento que resfria com consistência, sem barulho e sem parada no meio do expediente.",
                page: 'sistemas-comerciais' as PageId,
              },
              {
                icon: <Zap size={28} />,
                title: "Industrial",
                desc: "Galpões, fábricas e data centers. Sistemas dimensionados para rodar 24/7 com controle preciso de temperatura e umidade.",
                page: 'vrf-mini-vrf' as PageId,
              },
              {
                icon: <ShieldCheck size={28} />,
                title: "PMOC Empresarial",
                desc: "Prédios comerciais, hospitais, shoppings e escolas. Plano de manutenção completo com responsável técnico e documentação legal.",
                page: 'manutencao-preventiva' as PageId,
              },
            ].map((seg, i) => (
              <div
                key={i}
                onClick={() => navigate(seg.page)}
                className="bg-white p-8 rounded-3xl border border-slate-200 hover:border-primary-light hover:shadow-lg transition-all cursor-pointer group"
              >
                <div className="w-12 h-12 bg-ice rounded-xl flex items-center justify-center text-primary-light mb-6 group-hover:scale-110 transition-transform">
                  {seg.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{seg.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">{seg.desc}</p>
                <div className="flex items-center gap-2 text-primary-light font-bold text-sm">
                  Ver serviços <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white relative overflow-hidden">
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
                  title: "Você chama no WhatsApp",
                  desc: "Conta o que precisa — pode mandar fotos ou a planta se tiver. Respondemos em até 2 horas."
                },
                {
                  step: "02",
                  icon: <Ruler />,
                  title: "Agendamos a visita",
                  desc: "Um técnico vai ao local, avalia o ambiente e confere a infraestrutura. Sem custo e sem compromisso."
                },
                {
                  step: "03",
                  icon: <HardHat />,
                  title: "Você recebe o orçamento",
                  desc: "Escopo, prazo e valor fechado por escrito — sem taxa escondida e sem 'a partir de'."
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
                  title: "Você só aprova funcionando",
                  desc: "Teste final antes de entregar. Garantia por escrito em todo serviço executado."
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
                alt="Equipe New Clima Ar realizando instalação técnica" 
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
                subtitle="Não somos apenas instaladores. Somos uma empresa referência focada em resultados e satisfação do cliente."
              />
              
              <div className="space-y-8">
                <FeatureItem 
                  title="Técnicos Certificados"
                  desc="Nossa equipe possui certificações NR-10, NR-35 e treinamentos diretos dos fabricantes (LG, Samsung, Daikin)."
                />
                <FeatureItem 
                  title="Garantia por Escrito"
                  desc="Todos os nossos serviços acompanham certificado de garantia e nota fiscal, assegurando seu investimento."
                />
                <FeatureItem 
                  title="Infraestrutura de Ponta"
                  desc="Utilizamos materiais de primeira linha (cobre de alta pureza, isolamento blindado) para evitar vazamentos futuros."
                />
                <FeatureItem 
                  title="Atendimento Local"
                  desc="Base operacional estratégica em São Paulo e ABC para garantir rapidez no atendimento e suporte pós-venda."
                />
              </div>

              <div className="mt-12">
                <WhatsAppButton text="Falar com um Técnico Agora" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block bg-ice text-primary-light text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4">
              Nossa Equipe
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">
              Quem vai até a sua casa
            </h2>
            <p className="text-slate-500 text-lg">
              Técnicos certificados, uniformizados e com nome — você sabe exatamente quem está atendendo você.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-slate-50 rounded-3xl p-8 flex items-center gap-6 border border-slate-100">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center shrink-0 overflow-hidden">
                <img
                  src="https://lh3.googleusercontent.com/6heGd7th8Pj-lMMTr-rWhQgDXIHEtDgkUzYkEakZwnOvYabXG6ykwi_RHfm8RpDcoNoWHvGRKRz8Yf2l7A=s360-w360-h360"
                  alt="José Erivaldo - Técnico New Clima"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <div className="font-extrabold text-primary text-lg">José Erivaldo</div>
                <div className="text-primary-light text-sm font-bold mb-2">Técnico Sênior · Desde 2018</div>
                <div className="flex gap-1 text-accent">
                  {[1,2,3,4,5].map(i => <Star key={i} size={12} fill="currentColor" />)}
                </div>
                <p className="text-slate-500 text-sm mt-2 leading-relaxed italic">
                  "Pontual, atencioso e caprichoso — explica tudo que está fazendo."
                </p>
              </div>
            </div>
            <div className="bg-primary rounded-3xl p-8 text-white flex flex-col justify-between">
              <div>
                <div className="text-blue-100/70 text-sm font-bold uppercase tracking-widest mb-4">Por que isso importa?</div>
                <p className="text-white/90 leading-relaxed">
                  Quando você contrata a New Clima, sabe quem vai aparecer. Técnico identificado, uniformizado e com histórico de avaliações reais no Google.
                </p>
              </div>
              <a
                href="https://maps.app.goo.gl/kHeynjnXoG943iG3A"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-5 rounded-xl transition-all text-sm"
              >
                Ver 24 avaliações no Google <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Regions Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <span className="text-primary-light text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Onde Atendemos</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-3">Regiões onde a New Clima atende</h2>
            <p className="text-slate-500 text-lg max-w-2xl">São Paulo capital por zona, ABC Paulista completo. Visita técnica gratuita para qualquer bairro listado.</p>
          </div>

          <RegionsTabs navigate={navigate} />
        </div>
      </section>

      {/* Google Reviews Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            centered
            tag="Depoimentos"
            title="Clientes que confiam na New Clima"
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
                  service="Instalação, Manutenção e Limpeza"
                  content="Contratei o profissional José Erivaldo para serviços de instalação, manutenção preventiva, conserto e limpeza do meu ar-condicionado. O trabalho foi muito ótimo! Ele é pontual, atencioso, caprichoso e explica tudo o que está fazendo. O ambiente ficou limpo e o ar-condicionado funcionando perfeitamente. Recomendo muito e com certeza voltarei a contratar!"
                />
              </div>
              <div className="flex-none w-[85vw] md:w-[400px] snap-center">
                <GoogleReviewCard 
                  name="Victor Peres"
                  service="Instalação de 3 Ar Condicionados"
                  content="Contratei esta empresa para instalação de 3 Ar Condicionado na minha residência. O Sr. Erivaldo é um ótimo profissional e atencioso, me explicou como seria feito todo serviço. Muito obrigado!"
                />
              </div>
              <div className="flex-none w-[85vw] md:w-[400px] snap-center">
                <GoogleReviewCard 
                  name="Melcia Beleza"
                  service="Manutenção Corretiva"
                  content="A empresa tem um excelente atendimento, são atenciosos e o técnico responsável Erivaldo consertou o problema do meu equipamento. Indico muito essa empresa!"
                />
              </div>
              <div className="flex-none w-[85vw] md:w-[400px] snap-center">
                <GoogleReviewCard 
                  name="Rosemeire Fonseca"
                  service="Manutenção de Ar Condicionado"
                  content="Indico muito a empresa New Clima. Ótimo trabalho, técnico muito atencioso."
                />
              </div>
              <div className="flex-none w-[85vw] md:w-[400px] snap-center">
                <GoogleReviewCard 
                  name="Matheus Santos"
                  service="Serviços Gerais"
                  content="Empresa com muita experiência e trabalho de qualidade. Os melhores profissionais que já trabalhei."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <SectionHeading 
            centered
            tag="FAQ"
            title="Dúvidas Frequentes"
          />
          
          <div className="space-y-4">
            <FaqItem 
              question="Quanto custa instalar ar condicionado em São Paulo?"
              answer="O valor varia conforme a capacidade do equipamento (BTUs), complexidade da infraestrutura e distância entre as unidades. Uma instalação residencial padrão em SP começa a partir de R$ 350. O orçamento é gratuito — nossa equipe visita o local sem compromisso e entrega o valor exato no mesmo dia."
            />
            <FaqItem 
              question="Quanto tempo leva para instalar um ar condicionado?"
              answer="Uma instalação padrão de split hi-wall leva em média de 3 a 5 horas, dependendo da complexidade da infraestrutura e distância entre as unidades."
            />
            <FaqItem 
              question="Qual a garantia dos serviços?"
              answer="Oferecemos 1 ano de garantia em nossas instalações e 90 dias em manutenções corretivas. Trabalhamos apenas com materiais de primeira linha."
            />
            <FaqItem 
              question="Vocês atendem em apartamentos?"
              answer="Sim, somos especialistas em instalações em apartamentos, respeitando normas de condomínio, fachadas e varandas técnicas."
            />
            <FaqItem 
              question="Qual a diferença entre o modelo Inverter e o Convencional?"
              answer="O modelo Inverter economiza até 60% de energia pois seu compressor nunca desliga totalmente, mantendo a temperatura constante, enquanto o convencional liga e desliga, gerando picos de consumo."
            />
            <FaqItem 
              question="Com que frequência devo fazer a limpeza do ar condicionado?"
              answer="Para uso residencial, recomendamos a limpeza completa (higienização) a cada 6 meses. Em ambientes comerciais ou com uso intenso, o ideal é a cada 3 meses ou mensalmente via PMOC."
            />
            <FaqItem 
              question="Vocês instalam aparelhos comprados em outras lojas?"
              answer="Sim! Realizamos a instalação técnica de qualquer marca ou modelo, garantindo que você não perca a garantia de fábrica do seu equipamento."
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
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8">
            Pronto para climatizar seu ambiente?
          </h2>
          <p className="text-blue-100/70 text-lg mb-12 max-w-2xl mx-auto">
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

function ServiceDetailView({ service, navigate }: { service: string, navigate: (p: PageId) => void }) {
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

function BlogView({ navigate, postId }: { navigate: (p: PageId) => void, postId?: string }) {
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
          alt={title} 
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

function AboutView({ navigate }: { navigate: (p: PageId) => void }) {
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
          <img src="https://lh3.googleusercontent.com/iQKQFvKF5SWFsxmrm5b60daSTbTDLx4TiQGsh2R-UnoejbPz0gCFAuwhvwAd1QUAKN0Bqwy-m28h8Z2ITQ=s360-w360-h360" alt="Sobre a New Clima Ar" className="rounded-3xl shadow-2xl w-full h-auto object-cover" referrerPolicy="no-referrer" loading="lazy" />
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

function RegionView({ region, navigate }: { region: string, navigate: (p: PageId) => void }) {
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
  navigate: (p: PageId) => void
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
            {faq.map((item, i) => {
              const [open, setOpen] = React.useState(false)
              return (
                <div key={i} className="border border-slate-200 rounded-2xl overflow-hidden">
                  <button onClick={() => setOpen(!open)} className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-slate-50 transition-colors">
                    <span className="font-bold text-primary">{item[0]}</span>
                    <ChevronDown size={18} className={`text-slate-400 transition-transform shrink-0 ml-4 ${open ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-6 pb-5 pt-4 text-slate-500 text-sm leading-relaxed border-t border-slate-50">{item[1]}</div>
                  </div>
                </div>
              )
            })}
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
  navigate: (p: PageId) => void
}) {
  const servicos = [
    { title: `Instalação de Ar Condicionado em ${bairro}`, desc: `Split, multi-split e VRF com infraestrutura completa em ${bairro}. Obra limpa, garantia de 1 ano.`, page: 'split-multisplit' as PageId },
    { title: `Manutenção de Ar Condicionado em ${bairro}`, desc: `Manutenção preventiva e corretiva em ${bairro}. Todas as marcas, peças originais.`, page: 'manutencao-preventiva' as PageId },
    { title: `Limpeza de Ar Condicionado em ${bairro}`, desc: `Higienização profunda com bactericida em ${bairro}. Elimina fungos, ácaros e mau cheiro.`, page: 'limpeza' as PageId },
    { title: `PMOC para Empresas em ${bairro}`, desc: `Gestão completa de PMOC para empresas e condomínios em ${bairro}. Conformidade com a Lei 13.589/18.`, page: 'manutencao-preventiva' as PageId },
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
              Instalação e Manutenção de Ar Condicionado em {bairro}
            </h1>
            <p className="text-lg text-blue-100/80 mb-8 max-w-2xl">
              A New Clima Ar atende {bairro} com instalação, manutenção e higienização de ar condicionado. Técnicos certificados, visita técnica gratuita e garantia por escrito.
            </p>
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
            <p className="text-blue-100/50 text-sm mt-4">⚡ Resposta em até 2 horas · Visita técnica sem custo</p>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-primary mb-3">Serviços de Ar Condicionado em {bairro}</h2>
            <p className="text-slate-500">Atendimento técnico especializado para residências, apartamentos e empresas em {bairro}.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {servicos.map((s, i) => (
              <div
                key={i}
                onClick={() => navigate(s.page)}
                className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-primary-light hover:shadow-lg transition-all cursor-pointer group"
              >
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-primary-light transition-colors">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{s.desc}</p>
                <div className="flex items-center gap-2 text-primary-light font-bold text-sm">
                  Saiba mais <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por que New Clima */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-primary mb-8 text-center">
            Por que contratar a New Clima em {bairro}?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: <ShieldCheck size={24} />, title: 'Garantia por Escrito', desc: `Todo serviço em ${bairro} com garantia documentada. Sem letra miúda.` },
              { icon: <Clock size={24} />, title: 'Resposta Rápida', desc: `Atendemos ${bairro} e região em até 2 horas. Emergências no mesmo dia.` },
              { icon: <CheckCircle2 size={24} />, title: 'Obra Limpa', desc: `Instalamos em apartamentos e casas em ${bairro} sem quebradeira e sem sujeira.` },
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
          <h2 className="text-2xl font-extrabold text-primary mb-6">Perguntas Frequentes — Ar Condicionado em {bairro}</h2>
          <div className="space-y-4">
            {[
              {
                q: `Quanto custa instalar ar condicionado em ${bairro}?`,
                a: `Uma instalação residencial padrão em ${bairro} começa a partir de R$ 350, dependendo do modelo e complexidade da infraestrutura. A visita técnica é gratuita e o orçamento é entregue no mesmo dia, sem compromisso.`
              },
              {
                q: `Vocês atendem apartamentos em ${bairro}?`,
                a: `Sim. Somos especialistas em instalações em condomínios e apartamentos em ${bairro}, com total respeito às normas de fachada, varandas técnicas e regimentos internos.`
              },
              {
                q: `Fazem manutenção de ar condicionado em ${bairro}?`,
                a: `Sim. Realizamos manutenção preventiva, corretiva e limpeza profunda de todas as marcas em ${bairro}. Atendemos residências, escritórios e empresas.`
              },
              {
                q: `Qual o prazo de atendimento em ${bairro}?`,
                a: `Respondemos em até 2 horas e agendamos a visita técnica conforme sua disponibilidade. Para emergências, nosso WhatsApp funciona 24h.`
              },
            ].map((item, i) => {
              const [open, setOpen] = React.useState(false)
              return (
                <div key={i} className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
                  <button onClick={() => setOpen(!open)} className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-slate-50 transition-colors">
                    <span className="font-bold text-primary">{item.q}</span>
                    <ChevronDown size={18} className={`text-slate-400 transition-transform ${open ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-6 pb-5 pt-4 text-slate-500 text-sm leading-relaxed border-t border-slate-50">{item.a}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Bairros vizinhos */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-bold text-primary mb-6">Também atendemos bairros próximos a {bairro}</h2>
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
            Precisa de ar condicionado em {bairro}?
          </h2>
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

function SitemapView({ navigate }: { navigate: (p: PageId) => void }) {
  const serviceLinks = [
    { label: 'Instalação de Ar Condicionado Split e Multi Split', page: 'split-multisplit' as PageId },
    { label: 'Ar Condicionado Cassete e Piso-Teto para Empresas', page: 'sistemas-comerciais' as PageId },
    { label: 'Sistemas VRF e Mini VRF', page: 'vrf-mini-vrf' as PageId },
    { label: 'Manutenção Preventiva e PMOC', page: 'manutencao-preventiva' as PageId },
    { label: 'Conserto e Manutenção Corretiva de Ar Condicionado', page: 'manutencao-corretiva' as PageId },
    { label: 'Limpeza e Higienização de Ar Condicionado', page: 'limpeza' as PageId },
  ]

  const segmentLinks = [
    { label: 'Ar Condicionado Residencial — Apartamentos e Casas', page: 'split-multisplit' as PageId },
    { label: 'Ar Condicionado Comercial — Lojas, Escritórios e Restaurantes', page: 'sistemas-comerciais' as PageId },
    { label: 'Ar Condicionado Industrial — Galpões e Indústrias', page: 'vrf-mini-vrf' as PageId },
    { label: 'PMOC para Empresas — Conformidade com a Lei 13.589/18', page: 'manutencao-preventiva' as PageId },
  ]

  const bairroLinks = [
    { label: 'Instalação de Ar Condicionado em Moema', page: 'bairro-moema' as PageId },
    { label: 'Instalação de Ar Condicionado em Vila Mariana', page: 'bairro-vila-mariana' as PageId },
    { label: 'Instalação de Ar Condicionado em Pinheiros', page: 'bairro-pinheiros' as PageId },
    { label: 'Instalação de Ar Condicionado no Itaim Bibi', page: 'bairro-itaim-bibi' as PageId },
    { label: 'Instalação de Ar Condicionado nos Jardins', page: 'bairro-jardins' as PageId },
    { label: 'Instalação de Ar Condicionado no Tatuapé', page: 'bairro-tatuape' as PageId },
    { label: 'Instalação de Ar Condicionado em Santana', page: 'bairro-santana' as PageId },
    { label: 'Instalação de Ar Condicionado no Brooklin', page: 'bairro-brooklin' as PageId },
    { label: 'Instalação de Ar Condicionado em Perdizes', page: 'bairro-perdizes' as PageId },
    { label: 'Instalação de Ar Condicionado no Morumbi', page: 'bairro-morumbi' as PageId },
    { label: 'Instalação de Ar Condicionado na Mooca', page: 'bairro-mooca' as PageId },
    { label: 'Instalação de Ar Condicionado no Anália Franco', page: 'bairro-analia-franco' as PageId },
    { label: 'Instalação de Ar Condicionado em Vila Madalena', page: 'bairro-vila-madalena' as PageId },
    { label: 'Instalação de Ar Condicionado em Campo Belo', page: 'bairro-campo-belo' as PageId },
    { label: 'Instalação de Ar Condicionado na Saúde', page: 'bairro-saude' as PageId },
    { label: 'Instalação de Ar Condicionado em Higienópolis', page: 'bairro-higienopolis' as PageId },
    { label: 'Instalação de Ar Condicionado na Lapa', page: 'bairro-lapa' as PageId },
    { label: 'Instalação de Ar Condicionado em Santo Amaro', page: 'bairro-santo-amaro' as PageId },
    { label: 'Instalação de Ar Condicionado no Tucuruvi', page: 'bairro-tucuruvi' as PageId },
    { label: 'Instalação de Ar Condicionado no Ipiranga', page: 'bairro-ipiranga' as PageId },
    { label: 'Instalação de Ar Condicionado em Vila Prudente', page: 'bairro-vila-prudente' as PageId },
    { label: 'Instalação de Ar Condicionado em Jabaquara', page: 'bairro-jabaquara' as PageId },
    { label: 'Instalação de Ar Condicionado em Campo Grande', page: 'bairro-campo-grande' as PageId },
    { label: 'Instalação de Ar Condicionado em Penha', page: 'bairro-penha' as PageId },
    { label: 'Instalação de Ar Condicionado em Cursino', page: 'bairro-cursino' as PageId },
    { label: 'Instalação de Ar Condicionado em Água Rasa', page: 'bairro-agua-rasa' as PageId },
    { label: 'Instalação de Ar Condicionado em Bela Vista', page: 'bairro-bela-vista' as PageId },
    { label: 'Instalação de Ar Condicionado em Butantã', page: 'bairro-butanta' as PageId },
    { label: 'Instalação de Ar Condicionado em Vila Olímpia', page: 'bairro-vila-olimpia' as PageId },
    { label: 'Instalação de Ar Condicionado em Pompéia', page: 'bairro-pompeia' as PageId },
    { label: 'Instalação de Ar Condicionado em Paraíso', page: 'bairro-paraiso' as PageId },
    { label: 'Instalação de Ar Condicionado em Aclimação', page: 'bairro-aclimacao' as PageId },
    { label: 'Instalação de Ar Condicionado em Mirandópolis', page: 'bairro-mirandopolis' as PageId },
    { label: 'Instalação de Ar Condicionado em Planalto Paulista', page: 'bairro-planalto-paulista' as PageId },
    { label: 'Instalação de Ar Condicionado em Vila Clementino', page: 'bairro-vila-clementino' as PageId },
    { label: 'Instalação de Ar Condicionado em Chácara Klabin', page: 'bairro-chacara-klabin' as PageId },
    { label: 'Instalação de Ar Condicionado em Cambuci', page: 'bairro-cambuci' as PageId },
    { label: 'Instalação de Ar Condicionado em Liberdade', page: 'bairro-liberdade' as PageId },
  ]

  const regionLinks = [
    { label: 'Ar Condicionado em São Paulo (Capital)', page: 'sao-paulo' as PageId },
    { label: 'Ar Condicionado em Santo André', page: 'santo-andre' as PageId },
    { label: 'Ar Condicionado em São Bernardo do Campo', page: 'sao-bernardo' as PageId },
    { label: 'Ar Condicionado em São Caetano do Sul', page: 'sao-caetano' as PageId },
    { label: 'Ar Condicionado em Diadema', page: 'diadema' as PageId },
    { label: 'Ar Condicionado em Mauá', page: 'maua' as PageId },
  ]

  const blogLinks = [
    { label: 'PMOC: O Que É e Por Que Sua Empresa É Obrigada a Ter', page: 'blog-pmoc-obrigatorio' as PageId },
    { label: 'Multa por Não Ter PMOC em SP: R$ 2.000 a R$ 1,5 Milhão', page: 'blog-multa-pmoc' as PageId },
    { label: 'PMOC para Condomínios em SP: Guia para Síndicos', page: 'blog-pmoc-condominio' as PageId },
    { label: 'Quanto Custa o PMOC em São Paulo?', page: 'blog-custo-pmoc' as PageId },
    { label: 'Quanto Custa Instalar Ar Condicionado em SP em 2026?', page: 'blog-custo-instalacao' as PageId },
    { label: 'Qual Ar Condicionado Comprar em 2026?', page: 'blog-qual-ac' as PageId },
    { label: 'Split ou Multi Split para Apartamento em SP?', page: 'blog-split-multi-split' as PageId },
    { label: 'O Que Acontece Sem Manutenção no Ar Condicionado?', page: 'blog-manutencao-consequencias' as PageId },
    { label: 'Ar Condicionado Inverter: Vale a Pena?', page: 'blog-inverter' as PageId },
    { label: 'Instalação em Apartamento em SP: Guia Completo', page: 'blog-apartamento' as PageId },
    { label: 'Como Calcular os BTUs Ideais para Seu Ambiente', page: 'blog-btus' as PageId },
    { label: 'PMOC Obrigatório: O Que Sua Empresa Precisa Saber', page: 'blog-pmoc' as PageId },
    { label: 'LG Round Cassette: Climatização 360°', page: 'blog-round-cassette' as PageId },
    { label: 'Obra Limpa: Instalação Sem Quebra-Quebra', page: 'blog-obra-limpa' as PageId },
    { label: 'Como Instalar Ar Condicionado no Quarto', page: 'blog-quarto' as PageId },
    { label: 'Split Convencional vs Inverter: Qual Escolher?', page: 'blog-convencional-inverter' as PageId },
    { label: 'Ar Condicionado para Empresas: Do Split ao VRF', page: 'blog-empresas' as PageId },
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

  const LinkList = ({ links }: { links: { label: string, page: PageId }[] }) => (
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
            { label: 'Início', page: 'home' as PageId },
            { label: 'Quem Somos', page: 'sobre' as PageId },
            { label: 'Blog', page: 'blog' as PageId },
            { label: 'Contato', page: 'contato' as PageId },
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
            { label: 'Ar Condicionado para Clínicas Médicas', page: 'segmento-clinica' as PageId },
            { label: 'Ar Condicionado para Escritórios', page: 'segmento-escritorio' as PageId },
            { label: 'Ar Condicionado para Condomínios', page: 'segmento-condominio' as PageId },
            { label: 'Ar Condicionado para Restaurantes', page: 'segmento-restaurante' as PageId },
            { label: 'Ar Condicionado para Hotéis', page: 'segmento-hotel' as PageId },
            { label: 'Ar Condicionado para Pousadas', page: 'segmento-pousada' as PageId },
            { label: 'Ar Condicionado para Academias', page: 'segmento-academia' as PageId },
            { label: 'Ar Condicionado para Escolas', page: 'segmento-escola' as PageId },
          ]} />
        </div>
        <div>
          <h2 className="text-lg font-bold text-primary mb-4 pb-2 border-b border-slate-100">Regiões Atendidas</h2>
          <LinkList links={regionLinks} />
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
