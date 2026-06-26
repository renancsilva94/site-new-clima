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

export const BlogManutencaoPreventivaSP = () => (
  <BlogPostLayout tag="Manutenção" title="Manutenção Preventiva de Ar Condicionado em SP: O Que É e Por Que Fazer" date="26 de Junho, 2026" author="Equipe Técnica New Clima">
    <p>A manutenção preventiva é o conjunto de verificações e procedimentos realizados periodicamente para manter o ar condicionado funcionando com eficiência, prevenir defeitos e prolongar a vida útil. Em São Paulo, com alta poluição e uso intenso, é ainda mais importante.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">O que está incluso na preventiva completa?</h2>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li>Higienização do evaporador com bactericida</li>
      <li>Limpeza dos filtros, bandeja e dreno</li>
      <li>Verificação do nível de gás refrigerante</li>
      <li>Verificação de componentes elétricos e capacitor</li>
      <li>Lubrificação dos rolamentos do ventilador</li>
      <li>Verificação da temperatura de saída de ar</li>
      <li>Relatório técnico com as condições do equipamento</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Preventiva x corretiva: a diferença de custo</h2>
    <p>A preventiva é como a revisão do carro — muito mais barata do que o conserto após a quebra. Um filtro sujo aumenta 30% o consumo de energia. Sem manutenção por 12 meses o compressor pode falhar — custo de R$ 800 a R$ 2.500 vs R$ 180 a R$ 300 da preventiva.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Preços em SP em 2026</h2>
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse text-sm">
        <thead><tr className="bg-primary text-white"><th className="p-3 text-left border border-primary">Atendimento</th><th className="p-3 text-left border border-primary">Frequência</th><th className="p-3 text-left border border-primary">Custo</th></tr></thead>
        <tbody>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Residencial (1 equipamento)</td><td className="p-3 border border-slate-200">Semestral</td><td className="p-3 border border-slate-200 font-bold text-primary">R$ 180 a R$ 300</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Residencial (2 a 4 equipamentos)</td><td className="p-3 border border-slate-200">Semestral</td><td className="p-3 border border-slate-200 font-bold text-primary">R$ 280 a R$ 500</td></tr>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Comercial (até 5 equipamentos)</td><td className="p-3 border border-slate-200">Trimestral</td><td className="p-3 border border-slate-200 font-bold text-primary">R$ 400 a R$ 800/visita</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Contrato anual empresa</td><td className="p-3 border border-slate-200">Mensal ou trimestral</td><td className="p-3 border border-slate-200 font-bold text-success">A partir de R$ 350/mês</td></tr>
        </tbody>
      </table>
    </div>
    <div className="bg-ice rounded-2xl p-6 my-8 border border-primary/10">
      <h3 className="text-lg font-bold text-primary mb-2">Agende a manutenção preventiva em SP</h3>
      <p className="text-slate-600 text-sm mb-4">A partir de R$ 180 · Todas as marcas · Relatório técnico incluso · Garantia 90 dias</p>
      <a href="https://api.whatsapp.com/send/?phone=5511963462516&text=Olá!%20Gostaria%20de%20agendar%20manutenção%20preventiva%20de%20ar%20condicionado." rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-success text-white font-bold py-3 px-6 rounded-xl text-sm hover:-translate-y-0.5 transition-all">Agendar Manutenção Preventiva</a>
    </div>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Perguntas frequentes</h2>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Aparelho funcionando bem precisa de manutenção?</h3>
    <p>Sim. Um aparelho sem sintomas pode ter filtros sujos aumentando 20% o consumo, fungos no evaporador e dreno parcialmente entupido — tudo sem sintomas visíveis ainda.</p>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">A preventiva inclui recarga de gás?</h3>
    <p>A verificação do nível de gás está inclusa. A recarga, se necessária, é cobrada à parte com orçamento aprovado por você.</p>
  </BlogPostLayout>
);

export default BlogManutencaoPreventivaSP;
