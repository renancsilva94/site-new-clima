'use client'
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

export const BlogRoundCassette = () => (
  <BlogPostLayout tag="Equipamentos" title="LG Round Cassette: O Que É, Vantagens e Para Quais Ambientes É Indicado" date="26 de Junho, 2026" author="Equipe Técnica New Clima">
    <p>O LG Round Cassette é um dos modelos de ar condicionado mais sofisticados disponíveis no mercado brasileiro — e também um dos mais elegantes. Se você já viu aquele ar condicionado redondo instalado no teto de um escritório ou hotel em São Paulo, provavelmente era um Round Cassette.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">O que é o LG Round Cassette?</h2>
    <p>O Round Cassette é um modelo de ar condicionado cassete (instalado no teto) com design circular exclusivo da LG. Ao contrário dos cassetes tradicionais que têm formato retangular, o Round Cassette tem formato redondo e distribui o ar em 360° — cobrindo uniformemente o ambiente em todas as direções.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Vantagens do LG Round Cassette</h2>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li><strong>Distribuição de ar em 360°:</strong> elimina pontos quentes no ambiente — todos os cantos recebem ar na mesma intensidade</li>
      <li><strong>Design elegante:</strong> o formato circular e o acabamento branco ou espelhado se integra melhor ao teto do que os cassetes retangulares tradicionais</li>
      <li><strong>Tecnologia Dual Inverter:</strong> economia de energia de até 70% em comparação com modelos convencionais</li>
      <li><strong>Controle individual de aletas:</strong> cada uma das 4 aletas pode ser ajustada independentemente</li>
      <li><strong>Sensor de presença:</strong> detecta onde as pessoas estão no ambiente e direciona o ar para onde é necessário</li>
      <li><strong>Nível de ruído baixo:</strong> a partir de 30 dB(A) — ideal para ambientes de trabalho e reuniões</li>
      <li><strong>Controle Wi-Fi:</strong> compatível com o app LG ThinQ para controle pelo celular</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Para quais ambientes o Round Cassette é indicado?</h2>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li><strong>Salas de reunião:</strong> distribuição uniforme e baixo ruído são essenciais</li>
      <li><strong>Recepções e lobbies:</strong> o design elegante valoriza o ambiente</li>
      <li><strong>Restaurantes e cafés:</strong> cobertura uniforme sem corrente de ar direta nos clientes</li>
      <li><strong>Escritórios open space:</strong> uma unidade pode atender grandes áreas sem criar zonas quentes</li>
      <li><strong>Clínicas e consultórios:</strong> baixo ruído e distribuição uniforme são ideais</li>
      <li><strong>Lojas e showrooms:</strong> design discreto que não compete visualmente com o produto</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Capacidades disponíveis no Brasil</h2>
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse text-sm">
        <thead><tr className="bg-primary text-white"><th className="p-3 text-left border border-primary">Capacidade</th><th className="p-3 text-left border border-primary">Área recomendada</th><th className="p-3 text-left border border-primary">Faixa de preço (equipamento)</th></tr></thead>
        <tbody>
          <tr className="bg-white"><td className="p-3 border border-slate-200">18.000 BTUs</td><td className="p-3 border border-slate-200">Até 25m²</td><td className="p-3 border border-slate-200 font-bold text-primary">R$ 4.500 a R$ 6.000</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">24.000 BTUs</td><td className="p-3 border border-slate-200">Até 35m²</td><td className="p-3 border border-slate-200 font-bold text-primary">R$ 5.500 a R$ 7.500</td></tr>
          <tr className="bg-white"><td className="p-3 border border-slate-200">36.000 BTUs</td><td className="p-3 border border-slate-200">Até 50m²</td><td className="p-3 border border-slate-200 font-bold text-primary">R$ 7.000 a R$ 10.000</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">48.000 BTUs</td><td className="p-3 border border-slate-200">Até 70m²</td><td className="p-3 border border-slate-200 font-bold text-primary">R$ 9.000 a R$ 13.000</td></tr>
        </tbody>
      </table>
    </div>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Instalação do Round Cassette: o que considerar</h2>
    <p>A instalação do Round Cassette exige forro de gesso ou forro modular para embutir a unidade interna. Os pontos de atenção são:</p>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li>Altura do pé direito: mínimo de 2,60m para instalação adequada</li>
      <li>Espaço acima do forro: necessário pelo menos 30cm para a unidade interna e a tubulação</li>
      <li>Acesso para manutenção: é essencial deixar um painel removível acima da unidade</li>
      <li>Drenagem: o dreno deve ser direcionado para um ralo ou para fora</li>
    </ul>
    <div className="bg-ice rounded-2xl p-6 my-8 border border-primary/10">
      <h3 className="text-lg font-bold text-primary mb-2">Instale o Round Cassette com quem tem experiência</h3>
      <p className="text-slate-600 text-sm mb-4">Instalação e manutenção de cassetes em SP e ABC · Visita técnica gratuita · Garantia de 1 ano</p>
      <a href="https://api.whatsapp.com/send/?phone=5511963462516&text=Olá!%20Tenho%20interesse%20na%20instalação%20do%20LG%20Round%20Cassette." rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-success text-white font-bold py-3 px-6 rounded-xl text-sm hover:-translate-y-0.5 transition-all">Solicitar Instalação</a>
    </div>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Perguntas frequentes</h2>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Round Cassette pode ser instalado em residência?</h3>
    <p>Sim, mas é mais comum em ambiente comercial. Em residências, é indicado para salas grandes (acima de 30m²) com forro de gesso. O resultado estético é premium — parece com os sistemas de hotéis 5 estrelas.</p>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Manutenção do Round Cassette é diferente?</h3>
    <p>A frequência é a mesma — semestral para uso comercial padrão, trimestral para uso intenso. O acesso à unidade interna requer abertura do painel de forro, o que exige técnico experiente com cassetes.</p>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Round Cassette é mais eficiente que split convencional?</h3>
    <p>Para ambientes acima de 25m², sim. A distribuição em 360° é mais eficiente do que o fluxo unidirecional do split, pois elimina pontos quentes e reduz o tempo que o compressor precisa trabalhar em alta potência.</p>
  </BlogPostLayout>
);

export default BlogRoundCassette;
