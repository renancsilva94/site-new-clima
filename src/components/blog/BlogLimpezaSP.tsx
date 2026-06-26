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

export const BlogLimpezaSP = () => (
  <BlogPostLayout tag="Limpeza" title="Limpeza de Ar Condicionado em SP: Preços, Frequência e Como Funciona" date="26 de Junho, 2026" author="Equipe Técnica New Clima">
    <p>A limpeza do ar condicionado é um dos serviços mais importantes e mais negligenciados em São Paulo. Um aparelho sem limpeza regular acumula fungos, ácaros e bactérias que são expelidos no ar que você respira — causando alergias, rinite e infecções respiratórias.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Qual a diferença entre limpeza e higienização profissional?</h2>
    <p><strong>Limpeza de filtros (usuário):</strong> retira poeira dos filtros externos a cada 15 dias. Não inclui o evaporador interno onde os fungos realmente proliferam.</p>
    <p><strong>Higienização profissional:</strong> inclui limpeza do evaporador com bactericida, bandeja de condensado, dreno e todas as partes internas. Resolve mau cheiro e elimina fungos na raiz.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Quanto custa a limpeza em SP em 2026?</h2>
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse text-sm">
        <thead><tr className="bg-primary text-white"><th className="p-3 text-left border border-primary">Serviço</th><th className="p-3 text-left border border-primary">Preço médio SP</th></tr></thead>
        <tbody>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Limpeza de filtros (usuário)</td><td className="p-3 border border-slate-200 font-bold text-success">Gratuito</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Higienização profissional</td><td className="p-3 border border-slate-200 font-bold text-primary">R$ 150 a R$ 250</td></tr>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Manutenção preventiva completa</td><td className="p-3 border border-slate-200 font-bold text-primary">R$ 180 a R$ 350</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Higienização para clínicas (ANVISA)</td><td className="p-3 border border-slate-200 font-bold text-primary">R$ 200 a R$ 400</td></tr>
        </tbody>
      </table>
    </div>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Com que frequência fazer em SP?</h2>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li><strong>Filtros (usuário):</strong> a cada 15 dias em uso intenso</li>
      <li><strong>Higienização residencial:</strong> a cada 6 meses</li>
      <li><strong>Escritórios e comércios:</strong> a cada 3 meses</li>
      <li><strong>Clínicas e restaurantes:</strong> mensalmente ou conforme PMOC</li>
      <li><strong>Ambientes com pets:</strong> a cada 3 meses</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Sinais de que precisa de limpeza urgente</h2>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li>Mau cheiro quando liga o aparelho</li>
      <li>Mais rinite, tosse ou alergias do que o normal</li>
      <li>Ar saindo com pouca força no máximo</li>
      <li>Água pingando da unidade interna</li>
      <li>Mais de 6 meses sem manutenção</li>
    </ul>
    <div className="bg-ice rounded-2xl p-6 my-8 border border-primary/10">
      <h3 className="text-lg font-bold text-primary mb-2">Agende a limpeza do seu ar condicionado em SP</h3>
      <p className="text-slate-600 text-sm mb-4">Higienização com bactericida · Todas as marcas · A partir de R$ 150 · Garantia de 90 dias</p>
      <a href="https://api.whatsapp.com/send/?phone=5511963462516&text=Olá!%20Gostaria%20de%20agendar%20a%20limpeza%20do%20meu%20ar%20condicionado." rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-success text-white font-bold py-3 px-6 rounded-xl text-sm hover:-translate-y-0.5 transition-all">Agendar Limpeza</a>
    </div>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Perguntas frequentes</h2>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Limpeza de filtro resolve o mau cheiro?</h3>
    <p>Parcialmente. O mau cheiro vem do evaporador interno — apenas a higienização profissional com bactericida resolve definitivamente.</p>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Posso usar logo após a limpeza?</h3>
    <p>Sim, após secagem dos componentes — geralmente 30 a 60 minutos após o término.</p>
  </BlogPostLayout>
);

export default BlogLimpezaSP;
