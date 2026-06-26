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

export const BlogBarulhento = () => (
  <BlogPostLayout tag="Problemas" title="Ar Condicionado Fazendo Barulho: Causas e Como Resolver" date="26 de Junho, 2026" author="Equipe Técnica New Clima">
    <p>Ar condicionado barulhento é um problema comum — especialmente em aparelhos com mais de 3 anos sem manutenção. O barulho pode ir de um leve zumbido até um estrondo que acorda o vizinho. Cada tipo de ruído indica uma causa diferente.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Tipos de barulho e o que cada um indica</h2>
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse text-sm">
        <thead><tr className="bg-primary text-white"><th className="p-3 text-left border border-primary">Tipo de barulho</th><th className="p-3 text-left border border-primary">Causa provável</th><th className="p-3 text-left border border-primary">Urgência</th></tr></thead>
        <tbody>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Vibração / chacoalhando</td><td className="p-3 border border-slate-200">Parafusos soltos, suporte fraco ou peça solta interna</td><td className="p-3 border border-slate-200 font-bold text-primary">Média</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Zumbido elétrico</td><td className="p-3 border border-slate-200">Capacitor ou componente elétrico com defeito</td><td className="p-3 border border-slate-200 font-bold text-primary">Média</td></tr>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Ranger / chiado</td><td className="p-3 border border-slate-200">Rolamento do motor do ventilador desgastado</td><td className="p-3 border border-slate-200 font-bold text-red-600">Alta</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Bater / traque</td><td className="p-3 border border-slate-200">Objeto dentro do equipamento ou pá do ventilador quebrada</td><td className="p-3 border border-slate-200 font-bold text-red-600">Alta — desligar imediatamente</td></tr>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Borbulhar / gorgolejar</td><td className="p-3 border border-slate-200">Gás refrigerante baixo ou ar no sistema</td><td className="p-3 border border-slate-200 font-bold text-primary">Média</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Barulho ao ligar e depois some</td><td className="p-3 border border-slate-200">Normal — é o compressor dando partida</td><td className="p-3 border border-slate-200 font-bold text-success">Nenhuma</td></tr>
        </tbody>
      </table>
    </div>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Quando desligar imediatamente</h2>
    <p>Se o barulho for de batida, traque ou pancada — desligue na chave geral e chame técnico. Pás de ventilador quebradas ou objetos dentro do equipamento podem causar danos graves ao motor e ao compressor.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Condensadora barulhenta: o que fazer</h2>
    <p>A condensadora (unidade externa) normalmente faz mais barulho do que a interna. Barulho excessivo na condensadora pode indicar:</p>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li>Suporte de fixação frouxo — aperte os parafusos</li>
      <li>Vibração sendo transmitida pela parede — use borrachas anti-vibração</li>
      <li>Rolamento do motor do ventilador externo desgastado — troca necessária</li>
      <li>Compressor com desgaste — diagnóstico técnico obrigatório</li>
    </ul>
    <div className="bg-ice rounded-2xl p-6 my-8 border border-primary/10">
      <h3 className="text-lg font-bold text-primary mb-2">Ar condicionado barulhento em SP?</h3>
      <p className="text-slate-600 text-sm mb-4">Diagnóstico gratuito · Atendimento em até 2h · Garantia de 90 dias · SP e ABC</p>
      <a href="https://api.whatsapp.com/send/?phone=5511963462516&text=Olá!%20Meu%20ar%20condicionado%20está%20fazendo%20barulho%20e%20preciso%20de%20diagnóstico." rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-success text-white font-bold py-3 px-6 rounded-xl text-sm hover:-translate-y-0.5 transition-all">Diagnóstico Gratuito</a>
    </div>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Perguntas frequentes</h2>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Ar condicionado novo faz barulho — é normal?</h3>
    <p>Um leve zumbido do compressor é normal. Vibração, ranger ou chiado em aparelho novo não é normal — verifique se os parafusos de fixação estão bem apertados e se a instalação está correta. Se persistir, acione a garantia.</p>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Barulho de borbulhar é perigoso?</h3>
    <p>Não é perigoso, mas indica gás baixo ou ar no sistema — o que reduz a eficiência e pode danificar o compressor a médio prazo. Vale chamar técnico para verificar.</p>
  </BlogPostLayout>
);

export default BlogBarulhento;
