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

export const BlogQuantoCustaLimpeza = () => (
  <BlogPostLayout tag="Preços" title="Quanto Custa a Limpeza de Ar Condicionado em SP em 2026?" date="26 de Junho, 2026" author="Equipe Técnica New Clima">
    <p>A limpeza de ar condicionado em São Paulo tem preços que variam bastante conforme o tipo de serviço, o número de equipamentos e o tipo de ambiente. Neste artigo, mostramos os preços reais praticados em 2026 e o que está incluso em cada serviço.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Tabela de preços de limpeza em SP (2026)</h2>
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse text-sm">
        <thead><tr className="bg-primary text-white"><th className="p-3 text-left border border-primary">Serviço</th><th className="p-3 text-left border border-primary">O que inclui</th><th className="p-3 text-left border border-primary">Preço médio</th></tr></thead>
        <tbody>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Limpeza de filtros (usuário)</td><td className="p-3 border border-slate-200">Filtros externos</td><td className="p-3 border border-slate-200 font-bold text-success">Gratuito</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Higienização split 9.000 BTUs</td><td className="p-3 border border-slate-200">Evaporador + bandeja + dreno</td><td className="p-3 border border-slate-200 font-bold text-primary">R$ 150 a R$ 200</td></tr>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Higienização split 12.000-18.000 BTUs</td><td className="p-3 border border-slate-200">Evaporador + bandeja + dreno</td><td className="p-3 border border-slate-200 font-bold text-primary">R$ 180 a R$ 250</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Higienização cassete</td><td className="p-3 border border-slate-200">Limpeza completa interna</td><td className="p-3 border border-slate-200 font-bold text-primary">R$ 250 a R$ 400</td></tr>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Higienização para clínica (ANVISA)</td><td className="p-3 border border-slate-200">Normas sanitárias + certificado</td><td className="p-3 border border-slate-200 font-bold text-primary">R$ 200 a R$ 400</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Pacote 3+ equipamentos</td><td className="p-3 border border-slate-200">Desconto por volume</td><td className="p-3 border border-slate-200 font-bold text-success">A partir de R$ 130/unid.</td></tr>
        </tbody>
      </table>
    </div>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">O que está incluso na higienização profissional?</h2>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li>Proteção do piso e móveis próximos</li>
      <li>Remoção e limpeza dos filtros externos</li>
      <li>Aplicação de bactericida no evaporador (serpentina)</li>
      <li>Limpeza da bandeja de condensado</li>
      <li>Desentupimento e limpeza do dreno</li>
      <li>Limpeza da carcaça e grelhas</li>
      <li>Teste de funcionamento ao término</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">O que NÃO está incluso (e cobra à parte)</h2>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li>Recarga de gás refrigerante — cobrado se necessário após verificação</li>
      <li>Troca de peças defeituosas identificadas durante o serviço</li>
      <li>Desentupimento de dreno com obstrução severa — pode ter custo adicional</li>
    </ul>
    <div className="bg-ice rounded-2xl p-6 my-8 border border-primary/10">
      <h3 className="text-lg font-bold text-primary mb-2">Agende a limpeza do seu ar condicionado em SP</h3>
      <p className="text-slate-600 text-sm mb-4">A partir de R$ 150 · Bactericida certificado · Todas as marcas · Garantia de 90 dias</p>
      <a href="https://api.whatsapp.com/send/?phone=5511963462516&text=Olá!%20Gostaria%20de%20saber%20o%20preço%20da%20limpeza%20do%20meu%20ar%20condicionado." rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-success text-white font-bold py-3 px-6 rounded-xl text-sm hover:-translate-y-0.5 transition-all">Solicitar Orçamento</a>
    </div>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Perguntas frequentes</h2>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Vale a pena pagar mais pela higienização profissional?</h3>
    <p>Sim. A limpeza de filtro não remove fungos do evaporador — apenas a higienização profissional resolve o mau cheiro e elimina microrganismos prejudiciais à saúde.</p>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Com que frequência fazer em SP?</h3>
    <p>Residencial a cada 6 meses. Comercial a cada 3 meses. Ambientes com pets ou muita poeira a cada 3 meses.</p>
  </BlogPostLayout>
);

export default BlogQuantoCustaLimpeza;
