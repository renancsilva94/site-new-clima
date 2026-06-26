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

export const BlogEscritorioSP = () => (
  <BlogPostLayout tag="Empresarial" title="Ar Condicionado para Escritório em SP: Como Escolher e Quanto Custa" date="26 de Junho, 2026" author="Equipe Técnica New Clima">
    <p>Escolher o ar condicionado certo para um escritório em São Paulo vai além do BTU — envolve nível de ruído, eficiência para uso contínuo, cumprimento do PMOC e impacto na produtividade da equipe.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Tipos de sistema para escritório</h2>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li><strong>Split Hi-Wall:</strong> ideal para salas individuais e escritórios até 25m²</li>
      <li><strong>Multi Split:</strong> uma condensadora atende várias salas — ideal para escritórios de 50m² a 200m²</li>
      <li><strong>Cassete:</strong> instalado no teto, distribuição de ar em 4 direções — ideal para open space e salas de reunião</li>
      <li><strong>VRF / Mini VRF:</strong> sistema central para escritórios acima de 200m² — controle individual por zona, altamente eficiente</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Cálculo de BTU para escritório</h2>
    <p>Escritórios têm carga térmica maior do que residências — computadores, servidores, impressoras e o calor humano de várias pessoas aumentam significativamente a necessidade de BTUs.</p>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li>Use a fórmula base: Área (m²) × 600 BTUs</li>
      <li>Acrescente 600 BTUs por pessoa acima de 2</li>
      <li>Acrescente 10% por computador ou monitor adicional</li>
      <li>Se houver servidor no ambiente, acrescente 20% a 30%</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">PMOC é obrigatório para escritórios?</h2>
    <p>Sim, para escritórios com sistema de ar condicionado acima de 60.000 BTUs de uso coletivo. A maioria dos escritórios comerciais em São Paulo se enquadra nessa obrigatoriedade. A New Clima elabora e executa o PMOC com ART inclusa.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Quanto custa para escritório em SP?</h2>
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse text-sm">
        <thead><tr className="bg-primary text-white"><th className="p-3 text-left border border-primary">Porte do escritório</th><th className="p-3 text-left border border-primary">Sistema indicado</th><th className="p-3 text-left border border-primary">Investimento estimado</th></tr></thead>
        <tbody>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Sala individual (até 25m²)</td><td className="p-3 border border-slate-200">Split 12.000-18.000 BTUs</td><td className="p-3 border border-slate-200 font-bold text-primary">R$ 2.000 a R$ 4.000</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Escritório médio (50-150m²)</td><td className="p-3 border border-slate-200">Multi Split ou Cassete</td><td className="p-3 border border-slate-200 font-bold text-primary">R$ 8.000 a R$ 20.000</td></tr>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Open space (150-300m²)</td><td className="p-3 border border-slate-200">Mini VRF + Cassetes</td><td className="p-3 border border-slate-200 font-bold text-primary">R$ 20.000 a R$ 50.000</td></tr>
        </tbody>
      </table>
    </div>
    <div className="bg-ice rounded-2xl p-6 my-8 border border-primary/10">
      <h3 className="text-lg font-bold text-primary mb-2">Solicite proposta para seu escritório em SP</h3>
      <p className="text-slate-600 text-sm mb-4">Levantamento gratuito · Projeto técnico · PMOC incluso · Garantia por escrito</p>
      <a href="https://api.whatsapp.com/send/?phone=5511963462516&text=Olá!%20Preciso%20de%20ar%20condicionado%20para%20meu%20escritório%20em%20SP." rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-success text-white font-bold py-3 px-6 rounded-xl text-sm hover:-translate-y-0.5 transition-all">Solicitar Proposta</a>
    </div>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Perguntas frequentes</h2>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Qual temperatura regulamentar para escritórios em SP?</h3>
    <p>A NR-17 estabelece entre 20°C e 23°C. O INMETRO recomenda 23°C como referência para economia de energia.</p>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Manutenção pode ser feita fora do horário comercial?</h3>
    <p>Sim. A New Clima agenda manutenções em horários que minimizam o impacto nas atividades — incluindo fins de semana.</p>
  </BlogPostLayout>
);

export default BlogEscritorioSP;
