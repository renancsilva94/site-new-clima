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

export const BlogNaoGela = () => (
  <BlogPostLayout tag="Problemas" title="Ar Condicionado Não Gela: 7 Causas e Como Resolver em SP" date="26 de Junho, 2026" author="Equipe Técnica New Clima">
    <p>Ligar o ar condicionado e ele não gelar é um dos problemas mais frustrantes — especialmente no verão em São Paulo. A boa notícia é que na maioria dos casos o problema tem solução rápida e sem alto custo.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">1. Filtro sujo ou entupido</h2>
    <p>A causa mais comum. O filtro sujo restringe o fluxo de ar — o aparelho fica ligado mas não consegue resfriar o ambiente. <strong>Solução:</strong> retire, lave com água, seque completamente e recoloque.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">2. Gás refrigerante baixo</h2>
    <p>O gás é responsável pelo resfriamento. Com vazamento, o sistema perde capacidade gradualmente. <strong>Solução:</strong> recarga de gás com verificação e reparo do vazamento. Sem corrigir o vazamento a recarga não resolve.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">3. Compressor com defeito</h2>
    <p>Quando o compressor falha, o aparelho não circula o gás e para de gelar. <strong>Como identificar:</strong> a condensadora não vibra quando ligada. <strong>Custo:</strong> R$ 800 a R$ 2.500.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">4. Condensadora sem ventilação</h2>
    <p>Unidade externa bloqueada superaquece e corta o resfriamento. <strong>Solução:</strong> garantir 30cm de espaço ao redor da condensadora.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">5. Capacitor com defeito</h2>
    <p>O capacitor ajuda o compressor a dar partida. Com defeito, o sistema não resfria bem. <strong>Custo:</strong> R$ 100 a R$ 250 — peça barata, serviço rápido.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">6. Sensor de temperatura com defeito</h2>
    <p>O termistor com defeito envia leituras erradas à placa — o sistema entende que a temperatura foi atingida e para de gelar. <strong>Custo:</strong> R$ 150 a R$ 300.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">7. Ambiente maior do que o BTU do equipamento</h2>
    <p>Um equipamento subdimensionado nunca consegue gelar adequadamente em dias de calor intenso. <strong>Solução:</strong> segundo equipamento ou troca por maior capacidade.</p>
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse text-sm">
        <thead><tr className="bg-primary text-white"><th className="p-3 text-left border border-primary">Causa</th><th className="p-3 text-left border border-primary">Custo estimado</th></tr></thead>
        <tbody>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Filtro sujo</td><td className="p-3 border border-slate-200 font-bold text-success">Gratuito</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Recarga de gás + reparo</td><td className="p-3 border border-slate-200 font-bold text-primary">R$ 200 a R$ 500</td></tr>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Capacitor</td><td className="p-3 border border-slate-200 font-bold text-success">R$ 100 a R$ 250</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Sensor/termistor</td><td className="p-3 border border-slate-200 font-bold text-success">R$ 150 a R$ 300</td></tr>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Compressor</td><td className="p-3 border border-slate-200 font-bold text-red-600">R$ 800 a R$ 2.500</td></tr>
        </tbody>
      </table>
    </div>
    <div className="bg-ice rounded-2xl p-6 my-8 border border-primary/10">
      <h3 className="text-lg font-bold text-primary mb-2">Ar condicionado não está gelando em SP?</h3>
      <p className="text-slate-600 text-sm mb-4">Diagnóstico gratuito · Atendimento em até 2h · Conserto no mesmo dia · Garantia de 90 dias</p>
      <a href="https://api.whatsapp.com/send/?phone=5511963462516&text=Olá!%20Meu%20ar%20condicionado%20não%20está%20gelando." rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-success text-white font-bold py-3 px-6 rounded-xl text-sm hover:-translate-y-0.5 transition-all">Diagnóstico Gratuito</a>
    </div>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Perguntas frequentes</h2>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Ar condicionado novo não gela — é normal?</h3>
    <p>Não. Um aparelho novo deve gelar imediatamente. Pode ser instalação incorreta ou defeito de fábrica — acione a garantia.</p>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Posso usar o aparelho que não gela?</h3>
    <p>Não recomendamos. O compressor em sobrecarga pode transformar um conserto simples em troca de compressor.</p>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Gela pouco em dia muito quente — é problema?</h3>
    <p>Pode ser normal se o ambiente for maior que o BTU do equipamento. Se sempre gelou bem e parou, é problema técnico.</p>
  </BlogPostLayout>
);

export default BlogNaoGela;
