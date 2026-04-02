import React from 'react';
import { 
  Phone, 
  MessageCircle, 
  Menu, 
  X, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  ChevronDown,
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
  Linkedin
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

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
  BlogPMOC 
} from './components/BlogContent';
import { 
  SaoPauloRegion, 
  SantoAndreRegion, 
  SaoBernardoRegion, 
  SaoCaetanoRegion, 
  DiademaMauaRegion 
} from './components/RegionContent';

// --- Types ---
type PageId = 'home' | 'split-multisplit' | 'sistemas-comerciais' | 'vrf-mini-vrf' | 'manutencao-preventiva' | 'manutencao-corretiva' | 'limpeza' | 'blog' | 'sobre' | 'contato' | 'sao-paulo' | 'santo-andre' | 'sao-bernardo' | 'sao-caetano' | 'diadema' | 'maua' | 'blog-inverter' | 'blog-apartamento' | 'blog-btus' | 'blog-pmoc';

// --- Components ---

const WhatsAppButton = ({ className, text = "Orçamento via WhatsApp" }: { className?: string, text?: string }) => (
  <a 
    href="https://wa.me/5511963462516?text=Olá! Vim pelo site da New Clima Ar e gostaria de solicitar um orçamento." 
    target="_blank" 
    rel="noopener noreferrer"
    className={`inline-flex items-center justify-center gap-2 bg-success hover:bg-success/90 text-white font-bold py-3 px-6 rounded-xl transition-all hover:-translate-y-0.5 shadow-lg hover:shadow-success/40 ${className}`}
  >
    <MessageCircle size={20} />
    {text}
  </a>
);

const SectionHeading = ({ tag, title, subtitle, centered = false }: { tag?: string, title: string, subtitle?: string, centered?: boolean }) => (
  <div className={`mb-12 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'}`}>
    {tag && (
      <span className="inline-block bg-ice text-primary-light text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4">
        {tag}
      </span>
    )}
    <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4 leading-tight">
      {title}
    </h2>
    {subtitle && (
      <p className="text-lg text-slate-600 leading-relaxed">
        {subtitle}
      </p>
    )}
  </div>
);

export default function App() {
  const [currentPage, setCurrentPage] = React.useState<PageId>('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navigate = (page: PageId) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <HelmetProvider>
      <div className="min-h-screen font-sans text-slate-900 bg-white selection:bg-primary/10 selection:text-primary">
        <Helmet>
          <title>New Clima Ar | Instalação e Manutenção de Ar Condicionado em SP e ABC</title>
          <meta name="description" content="Especialista em ar condicionado em São Paulo e ABC. Instalação, manutenção preventiva (PMOC), corretiva e limpeza profunda. Atendimento premium residencial e comercial." />
        </Helmet>

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
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100">
          <div className="container mx-auto px-4 h-20 flex items-center justify-between">
            <div 
              className="flex items-center gap-3 cursor-pointer group" 
              onClick={() => navigate('home')}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-primary-light to-primary rounded-xl flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
                <Wind size={24} />
              </div>
              <div>
                <h1 className="font-display font-extrabold text-xl text-primary leading-none">
                  New Clima Ar
                </h1>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  Engenharia de Climatização
                </span>
              </div>
            </div>

            <nav className="hidden lg:flex items-center gap-1">
              <div className="relative group">
                <button className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-primary-light flex items-center gap-1">
                  Serviços <ChevronDown size={14} />
                </button>
                <div className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-xl border border-slate-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all translate-y-2 group-hover:translate-y-0">
                  <button onClick={() => navigate('split-multisplit')} className="w-full text-left px-4 py-2 text-sm hover:bg-ice hover:text-primary-light transition-colors">Split e Multi Split</button>
                  <button onClick={() => navigate('sistemas-comerciais')} className="w-full text-left px-4 py-2 text-sm hover:bg-ice hover:text-primary-light transition-colors">Sistemas Comerciais</button>
                  <button onClick={() => navigate('vrf-mini-vrf')} className="w-full text-left px-4 py-2 text-sm hover:bg-ice hover:text-primary-light transition-colors">VRF e Mini VRF</button>
                  <button onClick={() => navigate('manutencao-preventiva')} className="w-full text-left px-4 py-2 text-sm hover:bg-ice hover:text-primary-light transition-colors">Manutenção Preventiva (PMOC)</button>
                  <button onClick={() => navigate('manutencao-corretiva')} className="w-full text-left px-4 py-2 text-sm hover:bg-ice hover:text-primary-light transition-colors">Manutenção Corretiva</button>
                  <button onClick={() => navigate('limpeza')} className="w-full text-left px-4 py-2 text-sm hover:bg-ice hover:text-primary-light transition-colors">Limpeza e Higienização</button>
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
              <WhatsAppButton className="ml-4 h-11 text-sm px-5" text="Falar com Especialista" />
            </nav>

            <button 
              className="lg:hidden p-2 text-primary"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
              >
                <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
                  <div className="font-bold text-xs text-slate-400 uppercase tracking-widest mb-1">Serviços</div>
                  <div className="grid grid-cols-2 gap-2">
                    <button onClick={() => navigate('split-multisplit')} className="text-left text-sm py-2 text-slate-600">Split/Multi Split</button>
                    <button onClick={() => navigate('sistemas-comerciais')} className="text-left text-sm py-2 text-slate-600">Comerciais</button>
                    <button onClick={() => navigate('vrf-mini-vrf')} className="text-left text-sm py-2 text-slate-600">VRF/Mini VRF</button>
                    <button onClick={() => navigate('manutencao-preventiva')} className="text-left text-sm py-2 text-slate-600">Preventiva</button>
                    <button onClick={() => navigate('manutencao-corretiva')} className="text-left text-sm py-2 text-slate-600">Corretiva</button>
                    <button onClick={() => navigate('limpeza')} className="text-left text-sm py-2 text-slate-600">Limpeza</button>
                  </div>
                  <hr className="border-slate-100" />
                  <button onClick={() => navigate('blog')} className="text-left font-semibold py-2">Blog</button>
                  <button onClick={() => navigate('sobre')} className="text-left font-semibold py-2">Sobre Nós</button>
                  <button onClick={() => navigate('contato')} className="text-left font-semibold py-2">Contato</button>
                  <WhatsAppButton className="w-full mt-2" text="WhatsApp (11) 96346-2516" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        {/* Main Content */}
        <main>
          {currentPage === 'home' && <HomeView navigate={navigate} />}
          {currentPage === 'split-multisplit' && <ServiceDetailView service="split" navigate={navigate} />}
          {currentPage === 'sistemas-comerciais' && <ServiceDetailView service="comercial" navigate={navigate} />}
          {currentPage === 'vrf-mini-vrf' && <ServiceDetailView service="vrf" navigate={navigate} />}
          {currentPage === 'manutencao-preventiva' && <ServiceDetailView service="preventiva" navigate={navigate} />}
          {currentPage === 'manutencao-corretiva' && <ServiceDetailView service="corretiva" navigate={navigate} />}
          {currentPage === 'limpeza' && <ServiceDetailView service="limpeza" navigate={navigate} />}
          {currentPage === 'blog' && <BlogView navigate={navigate} />}
          {currentPage === 'blog-inverter' && <BlogView navigate={navigate} postId="inverter" />}
          {currentPage === 'blog-apartamento' && <BlogView navigate={navigate} postId="apartamento" />}
          {currentPage === 'blog-btus' && <BlogView navigate={navigate} postId="btus" />}
          {currentPage === 'blog-pmoc' && <BlogView navigate={navigate} postId="pmoc" />}
          {currentPage === 'sobre' && <AboutView navigate={navigate} />}
          {currentPage === 'contato' && <ContactView />}
          {['sao-paulo', 'santo-andre', 'sao-bernardo', 'sao-caetano', 'diadema', 'maua'].includes(currentPage) && (
            <RegionView region={currentPage as any} navigate={navigate} />
          )}
        </main>

        {/* Footer */}
        <footer className="bg-primary text-white pt-16 pb-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-white">
                    <Wind size={24} />
                  </div>
                  <h2 className="font-display font-extrabold text-xl">New Clima Ar</h2>
                </div>
                <p className="text-blue-100/70 text-sm leading-relaxed">
                  Referência em climatização de alta performance em São Paulo e ABC. Projetos residenciais, comerciais e industriais com foco em eficiência energética e qualidade do ar.
                </p>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"><Instagram size={18} /></a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"><Facebook size={18} /></a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"><Linkedin size={18} /></a>
                </div>
              </div>

              <div>
                <h4 className="font-display font-bold text-lg mb-6">Serviços Especializados</h4>
                <ul className="space-y-3 text-sm text-blue-100/60">
                  <li><button onClick={() => navigate('split-multisplit')} className="hover:text-white transition-colors">Instalação Split e Multi Split</button></li>
                  <li><button onClick={() => navigate('sistemas-comerciais')} className="hover:text-white transition-colors">Sistemas Cassete e Piso-Teto</button></li>
                  <li><button onClick={() => navigate('vrf-mini-vrf')} className="hover:text-white transition-colors">Projetos VRF e Mini VRF</button></li>
                  <li><button onClick={() => navigate('manutencao-preventiva')} className="hover:text-white transition-colors">Manutenção Preventiva (PMOC)</button></li>
                  <li><button onClick={() => navigate('limpeza')} className="hover:text-white transition-colors">Limpeza e Higienização Química</button></li>
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
                    <MessageCircle size={18} className="text-accent shrink-0" />
                    <a href="https://wa.me/5511963462516" className="text-blue-100/60 hover:text-white">WhatsApp 24h</a>
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
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white px-4 py-2 rounded-full shadow-xl border border-slate-100 text-sm font-bold text-slate-700 pointer-events-auto"
          >
            Dúvidas? Fale com um técnico!
          </motion.div>
          <a 
            href="https://wa.me/5511963462516" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-16 h-16 bg-success text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform pointer-events-auto animate-bounce"
          >
            <MessageCircle size={32} />
          </a>
        </div>
      </div>
    </HelmetProvider>
  );
}

// --- Views ---

function HomeView({ navigate }: { navigate: (p: PageId) => void }) {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-primary overflow-hidden pt-20 pb-32">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-light rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-white text-sm font-semibold mb-8">
                <CheckCircle2 size={16} className="text-success" />
                Atendimento Premium em SP e ABC
              </div>
              <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-[1.1] mb-6">
                Sistemas de <span className="text-blue-400">Climatização</span> de Alta Performance
              </h2>
              <p className="text-lg text-blue-100/80 mb-10 max-w-xl leading-relaxed">
                Projetos de engenharia, instalação técnica e manutenção especializada para residências, comércios e indústrias. Conforto térmico com máxima eficiência.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <WhatsAppButton className="h-14 px-8 text-lg" text="Solicitar Orçamento Grátis" />
                <button 
                  onClick={() => navigate('contato')}
                  className="h-14 px-8 rounded-xl border-2 border-white/20 text-white font-bold hover:bg-white/10 transition-all"
                >
                  Ver Nossos Serviços
                </button>
              </div>
              <div className="mt-12 flex flex-wrap gap-8 opacity-60 grayscale brightness-200">
                {/* Mock logos or trust indicators */}
                <div className="flex items-center gap-2 text-white font-bold text-sm italic">LG INVERTER</div>
                <div className="flex items-center gap-2 text-white font-bold text-sm italic">SAMSUNG WIND-FREE</div>
                <div className="flex items-center gap-2 text-white font-bold text-sm italic">DAIKIN VRV</div>
                <div className="flex items-center gap-2 text-white font-bold text-sm italic">MIDEA CARRIER</div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block relative"
            >
              <div className="relative z-10 bg-white rounded-3xl p-8 shadow-2xl border border-white/10">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-xl font-bold text-primary">Cálculo de Carga Térmica</h3>
                  <div className="bg-ice px-3 py-1 rounded-lg text-primary-light font-bold text-xs">GRÁTIS</div>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Tipo de Ambiente</label>
                    <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary-light">
                      <option>Residencial (Quarto/Sala)</option>
                      <option>Comercial (Escritório/Loja)</option>
                      <option>Corporativo (VRF/Dutado)</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Metragem (m²)</label>
                      <input type="number" placeholder="Ex: 20" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary-light" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Pessoas</label>
                      <input type="number" placeholder="Ex: 2" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary-light" />
                    </div>
                  </div>
                  <button className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-primary-light transition-colors shadow-lg shadow-primary/20">
                    Calcular BTUs Necessários
                  </button>
                  <p className="text-[10px] text-center text-slate-400 leading-tight">
                    *Cálculo aproximado. Recomendamos visita técnica para dimensionamento preciso de infraestrutura e engenharia.
                  </p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent rounded-full blur-3xl opacity-20" />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-400 rounded-full blur-3xl opacity-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 border-b border-slate-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-extrabold text-primary mb-1">15+ Anos</div>
              <div className="text-sm font-semibold text-slate-500 uppercase tracking-widest">Experiência</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-extrabold text-primary mb-1">5.000+</div>
              <div className="text-sm font-semibold text-slate-500 uppercase tracking-widest">Instalações</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-extrabold text-primary mb-1">100%</div>
              <div className="text-sm font-semibold text-slate-500 uppercase tracking-widest">Garantia Técnica</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-extrabold text-primary mb-1">24h</div>
              <div className="text-sm font-semibold text-slate-500 uppercase tracking-widest">Suporte WhatsApp</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            centered
            tag="Nossas Soluções"
            title="Engenharia e Serviços de Climatização"
            subtitle="Atendemos desde pequenos ambientes residenciais até grandes complexos corporativos com soluções customizadas."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Zap />}
              title="Split e Multi Split"
              desc="Instalação premium de sistemas hi-wall e multi-split com infraestrutura embutida e acabamento de alto padrão."
              onClick={() => navigate('split-multisplit')}
            />
            <ServiceCard 
              icon={<Thermometer />}
              title="Sistemas Comerciais"
              desc="Cassete, Piso-Teto e sistemas dutados para lojas, clínicas e escritórios que exigem alta vazão de ar."
              onClick={() => navigate('sistemas-comerciais')}
            />
            <ServiceCard 
              icon={<Settings />}
              title="VRF e Mini VRF"
              desc="Tecnologia de ponta para edifícios e grandes residências com controle individual de temperatura por ambiente."
              onClick={() => navigate('vrf-mini-vrf')}
            />
            <ServiceCard 
              icon={<ShieldCheck />}
              title="Manutenção Preventiva"
              desc="Planos de manutenção periódica e PMOC para garantir a saúde dos ocupantes e a vida útil do equipamento."
              onClick={() => navigate('manutencao-preventiva')}
            />
            <ServiceCard 
              icon={<AlertTriangle />}
              title="Manutenção Corretiva"
              desc="Diagnóstico preciso e reparo rápido de falhas, vazamentos de gás e problemas elétricos em todas as marcas."
              onClick={() => navigate('manutencao-corretiva')}
            />
            <ServiceCard 
              icon={<Droplets />}
              title="Limpeza e Higienização"
              desc="Limpeza profunda com produtos bactericidas homologados para eliminação de fungos, ácaros e odores."
              onClick={() => navigate('limpeza')}
            />
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/hvac-tech/800/1000" 
                alt="Técnico ar condicionado" 
                className="rounded-3xl shadow-2xl"
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
                subtitle="Não somos apenas instaladores. Somos uma empresa de engenharia focada em resultados e satisfação do cliente."
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
      <section className="py-24 bg-slate-50">
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

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            centered
            tag="Depoimentos"
            title="O que dizem nossos clientes"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              name="Ricardo Mendes"
              role="Empresário - Moema"
              content="Instalei o sistema VRF na minha empresa com a New Clima. O projeto foi impecável, economia de energia visível e o suporte pós-venda é excelente."
            />
            <TestimonialCard 
              name="Ana Paula Silva"
              role="Arquiteta - Santo André"
              content="Sempre indico para meus clientes. O acabamento da infraestrutura é muito superior ao que se vê no mercado. Profissionais educados e limpos."
            />
            <TestimonialCard 
              name="Dr. Carlos Eduardo"
              role="Clínica Médica - Tatuapé"
              content="Fizemos o PMOC da clínica. Tudo dentro das normas, relatórios detalhados e ar sempre limpo. Passamos pela fiscalização sem nenhum problema."
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <SectionHeading 
            centered
            tag="FAQ"
            title="Dúvidas Frequentes"
          />
          
          <div className="space-y-4">
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
              question="Quais as formas de pagamento?"
              answer="Aceitamos PIX, Cartão de Crédito (até 10x), Débito e faturamento para empresas (sob consulta)."
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8">
            Pronto para climatizar seu ambiente?
          </h2>
          <p className="text-blue-100/70 text-lg mb-12 max-w-2xl mx-auto">
            Fale agora com um de nossos especialistas e receba um orçamento personalizado para seu projeto.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <WhatsAppButton className="h-16 px-10 text-xl" text="Chamar no WhatsApp Agora" />
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

function ServiceCard({ icon, title, desc, onClick }: { icon: React.ReactNode, title: string, desc: string, onClick: () => void }) {
  return (
    <div 
      onClick={onClick}
      className="bg-white p-8 rounded-3xl border border-slate-200 hover:border-primary-light hover:shadow-xl transition-all cursor-pointer group"
    >
      <div className="w-14 h-14 bg-ice rounded-2xl flex items-center justify-center text-primary-light mb-6 group-hover:scale-110 transition-transform">
        {React.cloneElement(icon as React.ReactElement, { size: 28 })}
      </div>
      <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed mb-6">{desc}</p>
      <div className="flex items-center gap-2 text-primary-light font-bold text-sm group-hover:gap-3 transition-all">
        Ver Detalhes <ArrowRight size={16} />
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

function TestimonialCard({ name, role, content }: { name: string, role: string, content: string }) {
  return (
    <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
      <div className="flex gap-1 text-accent mb-6">
        {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
      </div>
      <p className="text-slate-700 italic mb-8 leading-relaxed">"{content}"</p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
          {name.charAt(0)}
        </div>
        <div>
          <div className="font-bold text-primary">{name}</div>
          <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">{role}</div>
        </div>
      </div>
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
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            <div className="px-6 pb-5 text-slate-500 text-sm leading-relaxed border-t border-slate-50 pt-4">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// --- Placeholder Views (To be expanded) ---

function ServiceDetailView({ service, navigate }: { service: string, navigate: (p: PageId) => void }) {
  return (
    <div className="container mx-auto px-4">
      {service === 'split' && <SplitMultiSplit />}
      {service === 'comercial' && <SistemasComerciais />}
      {service === 'vrf' && <VRFMiniVRF />}
      {service === 'preventiva' && <ManutencaoPreventiva />}
      {service === 'corretiva' && <ManutencaoCorretiva />}
      {service === 'limpeza' && <LimpezaHigienizacao />}
      <div className="pb-20">
        <button onClick={() => navigate('home')} className="text-primary-light font-bold flex items-center gap-2 hover:gap-3 transition-all">
          <ArrowRight size={16} className="rotate-180" /> Voltar para Home
        </button>
      </div>
    </div>
  );
}

function BlogView({ navigate, postId }: { navigate: (p: PageId) => void, postId?: string }) {
  if (postId === 'inverter') return <div className="container mx-auto px-4"><BlogInverter /><button onClick={() => navigate('blog')} className="mb-20 text-primary-light font-bold flex items-center gap-2"><ArrowRight size={16} className="rotate-180" /> Voltar para Blog</button></div>;
  if (postId === 'apartamento') return <div className="container mx-auto px-4"><BlogApartamento /><button onClick={() => navigate('blog')} className="mb-20 text-primary-light font-bold flex items-center gap-2"><ArrowRight size={16} className="rotate-180" /> Voltar para Blog</button></div>;
  if (postId === 'btus') return <div className="container mx-auto px-4"><BlogBTUs /><button onClick={() => navigate('blog')} className="mb-20 text-primary-light font-bold flex items-center gap-2"><ArrowRight size={16} className="rotate-180" /> Voltar para Blog</button></div>;
  if (postId === 'pmoc') return <div className="container mx-auto px-4"><BlogPMOC /><button onClick={() => navigate('blog')} className="mb-20 text-primary-light font-bold flex items-center gap-2"><ArrowRight size={16} className="rotate-180" /> Voltar para Blog</button></div>;

  return (
    <div className="py-20 container mx-auto px-4">
      <SectionHeading 
        tag="Nosso Blog"
        title="Dicas e Engenharia de Climatização"
        subtitle="Conteúdo técnico para ajudar você a escolher e manter seu ar condicionado com inteligência."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <BlogCard 
          title="Ar-Condicionado Inverter Vale a Pena?"
          desc="Entenda a tecnologia que reduz em até 60% sua conta de luz."
          onClick={() => navigate('blog-inverter')}
        />
        <BlogCard 
          title="Instalação em Apartamento"
          desc="O que saber sobre normas de fachada e drenagem em condomínios."
          onClick={() => navigate('blog-apartamento')}
        />
        <BlogCard 
          title="Como Calcular os BTUs"
          desc="Guia prático para não errar na potência do seu equipamento."
          onClick={() => navigate('blog-btus')}
        />
        <BlogCard 
          title="PMOC Obrigatório"
          desc="Sua empresa está em dia com a legislação? Veja os riscos."
          onClick={() => navigate('blog-pmoc')}
        />
      </div>
    </div>
  );
}

function BlogCard({ title, desc, onClick }: { title: string, desc: string, onClick: () => void }) {
  return (
    <div onClick={onClick} className="bg-white border border-slate-200 rounded-3xl p-8 hover:shadow-xl transition-all cursor-pointer group">
      <div className="w-full h-48 bg-slate-100 rounded-2xl mb-6 overflow-hidden">
        <img src={`https://picsum.photos/seed/${title}/600/400`} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" referrerPolicy="no-referrer" />
      </div>
      <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
      <p className="text-slate-500 text-sm mb-6">{desc}</p>
      <div className="text-primary-light font-bold text-sm flex items-center gap-2">Ler Artigo <ArrowRight size={16} /></div>
    </div>
  );
}

function AboutView({ navigate }: { navigate: (p: PageId) => void }) {
  return (
    <div className="py-20 container mx-auto px-4">
      <SectionHeading 
        tag="Nossa História"
        title="New Clima Ar Condicionado: Engenharia e Conforto"
        subtitle="Mais de 15 anos transformando ambientes em São Paulo e ABC com soluções de climatização de alta performance."
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
        <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-6">
          <p>
            Fundada com o propósito de elevar o padrão técnico do mercado de HVAC (Heating, Ventilation, and Air Conditioning) no Brasil, a <strong>New Clima Ar Condicionado</strong> consolidou-se como uma das principais referências em engenharia de climatização em São Paulo.
          </p>
          <p>
            Nossa jornada começou com o foco em instalações residenciais de alto padrão, mas rapidamente expandimos para projetos corporativos complexos, sistemas VRF e gestão de PMOC para grandes empresas. Acreditamos que um ambiente bem climatizado vai além do conforto térmico; trata-se de saúde, produtividade e eficiência energética.
          </p>
          <div className="bg-ice p-8 rounded-3xl border border-primary-light/10">
            <h4 className="text-primary font-bold mb-2">Nossa Missão</h4>
            <p className="text-sm italic">"Proporcionar a melhor experiência em conforto térmico através de soluções de engenharia sustentáveis, seguras e de alta performance."</p>
          </div>
        </div>
        <div className="relative">
          <img src="https://picsum.photos/seed/office-hvac/800/600" alt="Escritório New Clima" className="rounded-3xl shadow-2xl" referrerPolicy="no-referrer" />
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100">
            <div className="text-primary font-bold text-2xl">100%</div>
            <div className="text-slate-400 text-xs font-bold uppercase tracking-widest">Comprometimento</div>
          </div>
        </div>
      </div>

      <SectionHeading 
        centered
        tag="Nossa Equipe"
        title="Liderança Técnica"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        <TeamCard 
          name="Ricardo Carvalho"
          role="Engenheiro Chefe"
          desc="Especialista em sistemas VRF e projetos industriais com 20 anos de mercado."
        />
        <TeamCard 
          name="Paulo Souza"
          role="Coordenador de Campo"
          desc="Lidera nossa equipe de instaladores certificados com foco em acabamento premium."
        />
        <TeamCard 
          name="Fernando Oliveira"
          role="Especialista em Manutenção"
          desc="Expert em diagnósticos complexos e placas eletrônicas Inverter."
        />
      </div>

      <div className="bg-primary rounded-3xl p-12 text-center text-white">
        <h3 className="text-3xl font-bold mb-6">Pronto para trabalhar conosco?</h3>
        <p className="text-blue-100/70 mb-8 max-w-xl mx-auto">Seja para sua casa ou para sua empresa, temos a solução técnica ideal.</p>
        <WhatsAppButton text="Solicitar Consultoria Técnica" />
      </div>
    </div>
  );
}

function TeamCard({ name, role, desc }: { name: string, role: string, desc: string }) {
  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-8 text-center hover:shadow-lg transition-all">
      <div className="w-24 h-24 bg-ice rounded-full mx-auto mb-6 flex items-center justify-center text-primary-light font-bold text-3xl">
        {name.charAt(0)}
      </div>
      <h4 className="text-xl font-bold text-primary mb-1">{name}</h4>
      <div className="text-primary-light text-xs font-bold uppercase tracking-widest mb-4">{role}</div>
      <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}


function ContactView() {
  return (
    <div className="py-20 container mx-auto px-4">
      <SectionHeading 
        tag="Contato"
        title="Fale Conosco"
        subtitle="Estamos prontos para atender seu chamado."
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-slate-50 p-8 rounded-3xl">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Nome Completo</label>
                <input type="text" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">WhatsApp</label>
                <input type="tel" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Assunto</label>
              <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3">
                <option>Instalação</option>
                <option>Manutenção</option>
                <option>Limpeza</option>
                <option>Outros</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Mensagem</label>
              <textarea className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 h-32"></textarea>
            </div>
            <button className="w-full bg-primary text-white font-bold py-4 rounded-xl">Enviar Mensagem</button>
          </form>
        </div>
        <div className="space-y-8">
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-ice rounded-2xl flex items-center justify-center text-primary-light shrink-0">
              <Phone size={24} />
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">Telefone</h4>
              <p className="text-slate-500">(11) 96346-2516</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-ice rounded-2xl flex items-center justify-center text-primary-light shrink-0">
              <MapPin size={24} />
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">Endereço</h4>
              <p className="text-slate-500">R. Santa Cruz, 2187 - Vila Mariana, São Paulo - SP</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RegionView({ region, navigate }: { region: string, navigate: (p: PageId) => void }) {
  return (
    <div className="container mx-auto px-4">
      {region === 'sao-paulo' && <SaoPauloRegion />}
      {region === 'santo-andre' && <SantoAndreRegion />}
      {region === 'sao-bernardo' && <SaoBernardoRegion />}
      {region === 'sao-caetano' && <SaoCaetanoRegion />}
      {region === 'diadema' && <DiademaMauaRegion regionName="Diadema" />}
      {region === 'maua' && <DiademaMauaRegion regionName="Mauá" />}
      <div className="pb-20">
        <button onClick={() => navigate('home')} className="text-primary-light font-bold flex items-center gap-2">
          <ArrowRight size={16} className="rotate-180" /> Voltar para Home
        </button>
      </div>
    </div>
  );
}
