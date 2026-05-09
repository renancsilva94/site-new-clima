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
import { 
  SaoPauloRegion, 
  SantoAndreRegion, 
  SaoBernardoRegion, 
  SaoCaetanoRegion, 
  DiademaMauaRegion 
} from './components/RegionContent';

// --- Types ---
type PageId = 'home' | 'split-multisplit' | 'sistemas-comerciais' | 'vrf-mini-vrf' | 'manutencao-preventiva' | 'manutencao-corretiva' | 'limpeza' | 'blog' | 'sobre' | 'contato' | 'sao-paulo' | 'santo-andre' | 'sao-bernardo' | 'sao-caetano' | 'diadema' | 'maua' | 'blog-inverter' | 'blog-apartamento' | 'blog-btus' | 'blog-pmoc' | 'blog-round-cassette' | 'blog-obra-limpa' | 'blog-quarto' | 'blog-convencional-inverter' | 'blog-empresas' | 'blog-pmoc-obrigatorio' | 'blog-multa-pmoc' | 'blog-pmoc-condominio' | 'blog-custo-pmoc' | 'blog-custo-instalacao' | 'blog-qual-ac' | 'blog-split-multi-split' | 'blog-manutencao-consequencias';

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
      'blog-manutencao-consequencias': '/blog/manutencao-ar-condicionado-consequencias'
    }
    const path = routes[page] || '/'
    router.push(path)
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
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
              <button onClick={() => navigate('sobre')} className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-primary-light">Sobre</button>
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
          {isMobileMenuOpen && (
              <div

                className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
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
                  <button onClick={() => navigate('sobre')} className="text-left font-semibold py-2">Sobre Nós</button>
                  <button onClick={() => navigate('contato')} className="text-left font-semibold py-2">Contato</button>
                  <WhatsAppButton className="w-full mt-2" text="WhatsApp (11) 96346-2516" />
                </div>
              </div>
            )}
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
            if (p === '/ar-condicionado-sao-paulo') return <RegionView region="sao-paulo" navigate={navigate} />;
            if (p === '/ar-condicionado-santo-andre') return <RegionView region="santo-andre" navigate={navigate} />;
            if (p === '/ar-condicionado-sao-bernardo-do-campo') return <RegionView region="sao-bernardo" navigate={navigate} />;
            if (p === '/ar-condicionado-sao-caetano-do-sul') return <RegionView region="sao-caetano" navigate={navigate} />;
            if (p === '/ar-condicionado-diadema') return <RegionView region="diadema" navigate={navigate} />;
            if (p === '/ar-condicionado-maua') return <RegionView region="maua" navigate={navigate} />;
            return <HomeView navigate={navigate} />;
          })()}
        </main>

        {/* Footer */}
        <footer className="bg-primary text-white pt-12 pb-6">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
              <div className="space-y-6">
                <img src="https://cdn.coteibem.com.br/company/41315/logo/f4d0405d-28b6-4834-a8ca-9e63b68073fa.png" alt="New Clima Ar" className="h-20 w-auto brightness-0 invert" />
                <p className="text-blue-100/70 text-sm leading-relaxed">
                  Referência em climatização de alta performance em São Paulo e ABC. Projetos residenciais, comerciais e industriais com foco em eficiência energética e qualidade do ar.
                </p>
                <div className="flex gap-4">
                  <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"><Instagram size={18} /></a>
                  <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"><Facebook size={18} /></a>
                  <a href="#" aria-label="Linkedin" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"><Linkedin size={18} /></a>
                </div>
              </div>

              <div>
                <h4 className="font-display font-bold text-lg mb-6">Serviços Especializados</h4>
                <ul className="space-y-3 text-sm text-blue-100/60">
                  <li><button onClick={() => navigate('split-multisplit')} className="hover:text-white transition-colors">Instalação de Ar Condicionado Split</button></li>
                  <li><button onClick={() => navigate('sistemas-comerciais')} className="hover:text-white transition-colors">Sistemas Cassete e Piso-Teto</button></li>
                  <li><button onClick={() => navigate('vrf-mini-vrf')} className="hover:text-white transition-colors">Sistemas VRF e Mini VRF</button></li>
                  <li><button onClick={() => navigate('manutencao-preventiva')} className="hover:text-white transition-colors">Manutenção Preventiva e PMOC</button></li>
                  <li><button onClick={() => navigate('manutencao-corretiva')} className="hover:text-white transition-colors">Conserto de Ar Condicionado</button></li>
                  <li><button onClick={() => navigate('limpeza')} className="hover:text-white transition-colors">Limpeza de Ar Condicionado SP</button></li>
                </ul>
              </div>

              <div>
                <h4 className="font-display font-bold text-lg mb-6">Regiões de Atendimento</h4>
                <ul className="space-y-3 text-sm text-blue-100/60">
                  <li><button onClick={() => navigate('sao-paulo')} className="hover:text-white transition-colors">São Paulo (Capital)</button></li>
                  <li><button onClick={() => navigate('santo-andre')} className="hover:text-white transition-colors">Santo André</button></li>
                  <li><button onClick={() => navigate('sao-bernardo')} className="hover:text-white transition-colors">São Bernardo do Campo</button></li>
                  <li><button onClick={() => navigate('sao-caetano')} className="hover:text-white transition-colors">São Caetano do Sul</button></li>
                  <li><button onClick={() => navigate('diadema')} className="hover:text-white transition-colors">Diadema e Mauá</button></li>
                </ul>
              </div>

              <div>
                <h4 className="font-display font-bold text-lg mb-6">Fale Conosco</h4>
                <ul className="space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <MapPin size={18} className="text-accent shrink-0" />
                    <span className="text-blue-100/60">R. Santa Cruz, 2187 - Vila Mariana, São Paulo - SP</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone size={18} className="text-accent shrink-0" />
                    <a href="tel:+5511963462516" className="text-blue-100/60 hover:text-white">(11) 96346-2516</a>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="text-accent shrink-0">
                      <WhatsAppIcon size={18} />
                    </div>
                    <a href="https://wa.me/5511963462516" rel="noopener noreferrer" className="text-blue-100/60 hover:text-white">Falar no WhatsApp</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-blue-100/40">
              <p>© 2026 New Clima Ar Condicionado. Todos os direitos reservados.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-white">Política de Privacidade</a>
                <a href="#" className="hover:text-white">Termos de Uso</a>
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
                  { number: "7+", label: "Anos de experiência" },
                  { number: "500+", label: "Instalações realizadas" },
                  { number: "4.9★", label: "Nota no Google" },
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
      <section className="bg-white py-10 border-b border-slate-100 relative z-20 overflow-hidden">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0 border-b md:border-b-0 md:border-r border-slate-200 pb-4 md:pb-0 md:pr-8 w-full md:w-auto">
            <span className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em] leading-tight text-left block">
              Trabalhamos com as<br />
              <span className="text-primary font-extrabold">melhores marcas</span>
            </span>
          </div>
          
          <div className="flex-grow relative overflow-hidden py-2" role="region" aria-label="Marcas parceiras">
              <div
              className="flex items-center gap-12 md:gap-20 lg:gap-24 whitespace-nowrap"
              
            >
              {/* First set of logos */}
              {[
                { name: "Samsung", url: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Samsung_logo_blue.png", h: "h-6 md:h-8" },
                { name: "LG", url: "https://upload.wikimedia.org/wikipedia/commons/8/8d/LG_logo_%282014%29.svg", h: "h-6 md:h-8" },
                { name: "Daikin", url: "https://upload.wikimedia.org/wikipedia/commons/0/05/DAIKIN_logo.svg", h: "h-6 md:h-8" },
                { name: "Fujitsu", url: "https://upload.wikimedia.org/wikipedia/commons/5/53/Fujitsu-Logo.svg", h: "h-8 md:h-10" },
                { name: "Carrier", url: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Logo_of_the_Carrier_Corporation.svg", h: "h-6 md:h-8" },
                { name: "Midea", url: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Midea.svg", h: "h-6 md:h-8" },
                { name: "Elgin", url: "https://www.maquinadecartao.com/img/1/elgin-logo-fabricante-de-maquininha-de-cartao-david-tech.webp", h: "h-6 md:h-8" },
                { name: "Gree", url: "https://upload.wikimedia.org/wikipedia/commons/0/01/Gree_electric_appliances_logo.svg", h: "h-6 md:h-8" }
              ].map((brand, idx) => (
                <img 
                  key={`${brand.name}-${idx}`}
                  src={brand.url} 
                  alt={brand.name} 
                  className={`${brand.h} opacity-100 transition-all duration-300`} 
                  referrerPolicy="no-referrer" 
                />
              ))}
              
              {/* Duplicate set for seamless loop */}
              {[
                { name: "Samsung", url: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Samsung_logo_blue.png", h: "h-6 md:h-8" },
                { name: "LG", url: "https://upload.wikimedia.org/wikipedia/commons/8/8d/LG_logo_%282014%29.svg", h: "h-6 md:h-8" },
                { name: "Daikin", url: "https://upload.wikimedia.org/wikipedia/commons/0/05/DAIKIN_logo.svg", h: "h-6 md:h-8" },
                { name: "Fujitsu", url: "https://upload.wikimedia.org/wikipedia/commons/5/53/Fujitsu-Logo.svg", h: "h-8 md:h-10" },
                { name: "Carrier", url: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Logo_of_the_Carrier_Corporation.svg", h: "h-6 md:h-8" },
                { name: "Midea", url: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Midea.svg", h: "h-6 md:h-8" },
                { name: "Elgin", url: "https://www.maquinadecartao.com/img/1/elgin-logo-fabricante-de-maquininha-de-cartao-david-tech.webp", h: "h-6 md:h-8" },
                { name: "Gree", url: "https://upload.wikimedia.org/wikipedia/commons/0/01/Gree_electric_appliances_logo.svg", h: "h-6 md:h-8" }
              ].map((brand, idx) => (
                <img 
                  key={`${brand.name}-dup-${idx}`}
                  src={brand.url} 
                  alt={brand.name} 
                  className={`${brand.h} opacity-100 transition-all duration-300`} 
                  referrerPolicy="no-referrer" 
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-[#020617]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <p className="text-blue-400 text-sm font-bold uppercase tracking-[0.3em] mb-4">Especialistas em Climatização</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">Serviços de Ar Condicionado em São Paulo e ABC com Garantia Técnica</h2>
            <p className="text-blue-100/60">Soluções técnicas completas para garantir o conforto térmico e a qualidade do ar em seu imóvel residencial ou comercial.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard 
              icon={<Wind />}
              category="RESIDENCIAL"
              title="Instalação de Ar Condicionado Split"
              desc="Instalação técnica em SP com infraestrutura embutida, acabamento impecável e garantia total do fabricante."
              onClick={() => navigate('split-multisplit')}
            />
            <ServiceCard 
              icon={<Wind />}
              category="COMERCIAL"
              title="Sistemas Cassete e Piso-Teto"
              desc="Soluções de climatização para lojas e escritórios em São Paulo. Sistemas Cassete, Piso-Teto e Dutados com eficiência."
              onClick={() => navigate('sistemas-comerciais')}
            />
            <ServiceCard 
              icon={<Wind />}
              category="ALTA TECNOLOGIA"
              title="Sistemas VRF e Mini VRF"
              desc="Soluções avançadas para grandes residências e edifícios corporativos. Máxima eficiência energética e controle total."
              onClick={() => navigate('vrf-mini-vrf')}
            />
            <ServiceCard 
              icon={<Settings />}
              category="MANUTENÇÃO"
              title="Manutenção Preventiva e PMOC"
              desc="Gestão de PMOC para empresas no ABC e SP. Visitas técnicas regulares para garantir a saúde e o ar puro."
              onClick={() => navigate('manutencao-preventiva')}
            />
            <ServiceCard 
              icon={<AlertTriangle />}
              category="CORRETIVA"
              title="Conserto de Ar Condicionado"
              desc="Conserto de ar condicionado rápido em São Paulo. Diagnóstico preciso, peças originais e solução definitiva."
              onClick={() => navigate('manutencao-corretiva')}
            />
            <ServiceCard 
              icon={<Droplets />}
              category="HIGIENE"
              title="Limpeza de Ar Condicionado SP"
              desc="Higienização profunda bactericida. Eliminação de fungos e ácaros para um ambiente saudável no ABC e SP."
              onClick={() => navigate('limpeza')}
            />
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
                  title: "Consulta Técnica",
                  desc: "Avaliamos seu ambiente com visita presencial para entender cada detalhe técnico."
                },
                {
                  step: "02",
                  icon: <Ruler />,
                  title: "Projeto Personalizado",
                  desc: "Dimensionamento preciso (BTUs) para garantir máximo conforto com menor consumo."
                },
                {
                  step: "03",
                  icon: <HardHat />,
                  title: "Execução Profissional",
                  desc: "Equipe técnica treinada, uniformizada e focada em prazos e normas de segurança."
                },
                {
                  step: "04",
                  icon: <Paintbrush />,
                  title: "Acabamento Perfeito",
                  desc: "Entregamos a obra pronta: gesso, pintura e limpeza inclusos. Você não se preocupa com nada."
                },
                {
                  step: "05",
                  icon: <HeartHandshake />,
                  title: "Pós-venda Ativo",
                  desc: "Garantia real, suporte técnico prioritário e plano de manutenção preventiva."
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

      {/* Regions Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            centered
            tag="Onde Atendemos"
            title="Presença em São Paulo e ABC Paulista"
            subtitle="Atendimento rápido em bairros estratégicos e em todas as cidades do ABC."
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: 'São Paulo', id: 'sao-paulo' },
              { name: 'Santo André', id: 'santo-andre' },
              { name: 'São Bernardo', id: 'sao-bernardo' },
              { name: 'São Caetano', id: 'sao-caetano' },
              { name: 'Diadema', id: 'diadema' },
              { name: 'Mauá', id: 'maua' }
            ].map((city) => (
              <button 
                key={city.id}
                onClick={() => navigate(city.id as any)}
                className="bg-white border border-slate-200 p-6 rounded-2xl text-center hover:border-primary-light hover:shadow-lg transition-all group"
              >
                <MapPin size={24} className="mx-auto mb-3 text-slate-300 group-hover:text-primary-light transition-colors" />
                <span className="font-bold text-primary">{city.name}</span>
              </button>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {['Moema', 'Vila Mariana', 'Tatuapé', 'Anália Franco', 'Pinheiros', 'Perdizes', 'Santana', 'Ipiranga', 'Saúde', 'Brooklin'].map((bairro) => (
              <div key={bairro} className="bg-white/50 border border-slate-100 px-4 py-2 rounded-full text-center text-sm text-slate-500 font-medium">
                {bairro}
              </div>
            ))}
          </div>
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
      {isOpen && (
              <div

          >
            <div className="px-6 pb-5 text-slate-500 text-sm leading-relaxed border-t border-slate-50 pt-4">
              {answer}
            </div>
          </div>
        )}
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
