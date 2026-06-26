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

export const BlogConsertoSP = () => (
  <BlogPostLayout tag="Conserto" title="Conserto de Ar Condicionado em SP: Diagnóstico Gratuito e Atendimento em 2h" date="26 de Junho, 2026" author="Equipe Técnica New Clima">
    <p>O ar condicionado quebrou? A New Clima atende em até 2 horas com diagnóstico gratuito em São Paulo e ABC. Identificamos o problema e apresentamos o orçamento antes de qualquer serviço.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Defeitos mais comuns e custos</h2>
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse text-sm">
        <thead><tr className="bg-primary text-white"><th className="p-3 text-left border border-primary">Defeito</th><th className="p-3 text-left border border-primary">Sintoma</th><th className="p-3 text-left border border-primary">Custo estimado</th></tr></thead>
        <tbody>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Dreno entupido</td><td className="p-3 border border-slate-200">Água pingando</td><td className="p-3 border border-slate-200 font-bold text-success">R$ 80 a R$ 150</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Recarga de gás</td><td className="p-3 border border-slate-200">Não gela</td><td className="p-3 border border-slate-200 font-bold text-success">R$ 200 a R$ 400</td></tr>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Troca de capacitor</td><td className="p-3 border border-slate-200">Não liga ou desliga sozinho</td><td className="p-3 border border-slate-200 font-bold text-success">R$ 100 a R$ 250</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Troca de placa eletrônica</td><td className="p-3 border border-slate-200">Erros no display</td><td className="p-3 border border-slate-200 font-bold text-primary">R$ 400 a R$ 1.200</td></tr>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Troca de compressor</td><td className="p-3 border border-slate-200">Não gela, compressor não liga</td><td className="p-3 border border-slate-200 font-bold text-red-600">R$ 800 a R$ 2.500</td></tr>
        </tbody>
      </table>
    </div>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Como funciona o atendimento</h2>
    <ol className="list-decimal pl-6 space-y-2 my-4">
      <li>Contato pelo WhatsApp — descreva o problema e informe o endereço</li>
      <li>Agendamento no horário mais conveniente</li>
      <li>Visita técnica com diagnóstico gratuito</li>
      <li>Orçamento apresentado antes de qualquer serviço</li>
      <li>Conserto no mesmo dia na maioria dos casos</li>
      <li>Garantia de 90 dias no serviço e nas peças</li>
    </ol>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Conserto ou troca? Como decidir</h2>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li><strong>Menos de 5 anos:</strong> sempre vale consertar</li>
      <li><strong>5 a 10 anos com defeito simples:</strong> vale consertar</li>
      <li><strong>Acima de 10 anos com compressor ou placa:</strong> avalie a troca por Inverter</li>
    </ul>
    <div className="bg-ice rounded-2xl p-6 my-8 border border-primary/10">
      <h3 className="text-lg font-bold text-primary mb-2">Precisa de conserto em SP?</h3>
      <p className="text-slate-600 text-sm mb-4">Diagnóstico gratuito · Até 2 horas · Conserto no mesmo dia · Garantia 90 dias · SP e ABC</p>
      <a href="https://api.whatsapp.com/send/?phone=5511963462516&text=Olá!%20Preciso%20de%20conserto%20de%20ar%20condicionado." rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-success text-white font-bold py-3 px-6 rounded-xl text-sm hover:-translate-y-0.5 transition-all">Solicitar Conserto</a>
    </div>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Perguntas frequentes</h2>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">O diagnóstico é realmente gratuito?</h3>
    <p>Sim. Você só paga se aprovar o orçamento e quiser prosseguir com o conserto.</p>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Consertam todas as marcas?</h3>
    <p>Sim. LG, Samsung, Daikin, Midea, Fujitsu, Electrolux, Carrier, Springer e todas as demais marcas.</p>
  </BlogPostLayout>
);

export default BlogConsertoSP;
