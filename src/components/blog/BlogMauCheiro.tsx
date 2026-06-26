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

export const BlogMauCheiro = () => (
  <BlogPostLayout tag="Manutenção" title="Ar Condicionado com Mau Cheiro: Causas, Riscos e Como Resolver" date="26 de Junho, 2026" author="Equipe Técnica New Clima">
    <p>O ar condicionado com mau cheiro é um dos problemas mais comuns em São Paulo — e também um dos mais ignorados. O cheiro ruim não é apenas desconfortável: é um sinal de que o aparelho está cheio de fungos, bactérias e matéria orgânica que estão sendo expelidos no ar que você respira.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Por que o ar condicionado fica com mau cheiro?</h2>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li><strong>Fungos no evaporador:</strong> a principal causa — o evaporador (serpentina interna) fica úmido e acumula fungos que causam cheiro de mofo</li>
      <li><strong>Dreno entupido:</strong> água parada no dreno cria ambiente para bactérias anaeróbias que causam cheiro de esgoto</li>
      <li><strong>Filtros sujos:</strong> poeira, pêlos de animais e partículas orgânicas acumuladas nos filtros</li>
      <li><strong>Bandeja de condensado suja:</strong> acúmulo de limo e bactérias na bandeja de água</li>
      <li><strong>Roedor ou animal morto:</strong> em casos raros, animais entram na condensadora e morrem — cheiro intenso e repentino</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Tipos de cheiro e o que cada um indica</h2>
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse text-sm">
        <thead><tr className="bg-primary text-white"><th className="p-3 text-left border border-primary">Tipo de cheiro</th><th className="p-3 text-left border border-primary">Causa provável</th><th className="p-3 text-left border border-primary">Solução</th></tr></thead>
        <tbody>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Mofo / bolor</td><td className="p-3 border border-slate-200">Fungos no evaporador</td><td className="p-3 border border-slate-200">Higienização profissional</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Esgoto / podre</td><td className="p-3 border border-slate-200">Dreno entupido com bactérias</td><td className="p-3 border border-slate-200">Limpeza do dreno</td></tr>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Queimado / elétrico</td><td className="p-3 border border-slate-200">Problema elétrico ou motor</td><td className="p-3 border border-slate-200">Desligar e chamar técnico urgente</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Cigarro / fumaça</td><td className="p-3 border border-slate-200">Contaminação dos filtros</td><td className="p-3 border border-slate-200">Troca de filtros + higienização</td></tr>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Doce / adocicado</td><td className="p-3 border border-slate-200">Vazamento de gás refrigerante</td><td className="p-3 border border-slate-200">Verificação de gás pelo técnico</td></tr>
        </tbody>
      </table>
    </div>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Cheiro de queimado: quando desligar imediatamente</h2>
    <p>Se o ar condicionado emitir cheiro de queimado ou elétrico, <strong>desligue imediatamente</strong> no interruptor e na chave geral. Esse cheiro indica problema elétrico — motor com rolamento travado, curto na placa ou fiação danificada — que pode causar incêndio se ignorado.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Como resolver o mau cheiro?</h2>
    <p>A solução depende da causa:</p>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li><strong>Cheiro de mofo:</strong> higienização profissional com produto bactericida no evaporador — não resolve limpar apenas o filtro</li>
      <li><strong>Cheiro de esgoto:</strong> desentupimento do dreno e limpeza da bandeja de condensado</li>
      <li><strong>Cheiro elétrico:</strong> inspeção técnica urgente — não tente resolver sozinho</li>
      <li><strong>Prevenção:</strong> manutenção semestral evita o acúmulo de fungos e entupimento do dreno</li>
    </ul>
    <div className="bg-ice rounded-2xl p-6 my-8 border border-primary/10">
      <h3 className="text-lg font-bold text-primary mb-2">Seu ar condicionado está com mau cheiro?</h3>
      <p className="text-slate-600 text-sm mb-4">Atendemos em até 2 horas · Higienização com bactericida certificado · Garantia de 90 dias</p>
      <a href="https://api.whatsapp.com/send/?phone=5511963462516&text=Olá!%20Meu%20ar%20condicionado%20está%20com%20mau%20cheiro%20e%20preciso%20de%20atendimento." rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-success text-white font-bold py-3 px-6 rounded-xl text-sm hover:-translate-y-0.5 transition-all">Resolver Agora pelo WhatsApp</a>
    </div>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Perguntas frequentes</h2>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Posso usar aromatizador para mascarar o cheiro?</h3>
    <p>Não é recomendado. O aromatizador mascara o sintoma sem tratar a causa — os fungos e bactérias continuam se proliferando e sendo expelidos no ar. A solução é a higienização do evaporador.</p>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Quanto custa a higienização em SP?</h3>
    <p>A higienização profissional de um split residencial em São Paulo custa em média R$ 150 a R$ 250. O preço varia conforme o tamanho do equipamento e o grau de contaminação.</p>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Limpar o filtro resolve o mau cheiro?</h3>
    <p>Parcialmente. A limpeza do filtro remove parte da poeira e ácaros, mas o cheiro de mofo vem do evaporador (serpentina) — que fica atrás do filtro e só pode ser limpo com equipamento profissional e produto bactericida adequado.</p>
  </BlogPostLayout>
);

export default BlogMauCheiro;
