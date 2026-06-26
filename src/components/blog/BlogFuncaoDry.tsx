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

export const BlogFuncaoDry = () => (
  <BlogPostLayout tag="Uso" title="Função Dry do Ar Condicionado: Para Que Serve e Quando Usar" date="26 de Junho, 2026" author="Equipe Técnica New Clima">
    <p>A função Dry (ou modo seco) está presente na maioria dos ares condicionados modernos, mas poucos usuários sabem para que serve e quando usar. Entender essa função pode melhorar o conforto e reduzir o consumo de energia em São Paulo — especialmente nos dias chuvosos e úmidos.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">O que é a função Dry?</h2>
    <p>O modo Dry (seco) é projetado para <strong>reduzir a umidade do ar</strong> sem necessariamente resfriar muito o ambiente. Nesse modo, o ventilador funciona em velocidade baixa e o compressor liga e desliga em ciclos curtos — removendo a umidade do ar sem causar muito resfriamento.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Dry x Modo Refrigeração: qual a diferença?</h2>
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse text-sm">
        <thead><tr className="bg-primary text-white"><th className="p-3 text-left border border-primary">Característica</th><th className="p-3 text-left border border-primary">Modo Refrigeração</th><th className="p-3 text-left border border-primary">Modo Dry</th></tr></thead>
        <tbody>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Objetivo principal</td><td className="p-3 border border-slate-200">Reduzir temperatura</td><td className="p-3 border border-slate-200">Reduzir umidade</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Velocidade do ventilador</td><td className="p-3 border border-slate-200">Conforme configurado</td><td className="p-3 border border-slate-200">Sempre baixa</td></tr>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Compressor</td><td className="p-3 border border-slate-200">Ligado continuamente</td><td className="p-3 border border-slate-200">Liga/desliga em ciclos</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Consumo de energia</td><td className="p-3 border border-slate-200">Maior</td><td className="p-3 border border-slate-200">Menor</td></tr>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Resfriamento</td><td className="p-3 border border-slate-200">Intenso</td><td className="p-3 border border-slate-200">Leve</td></tr>
        </tbody>
      </table>
    </div>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Quando usar o modo Dry em SP?</h2>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li><strong>Dias chuvosos e abafados:</strong> temperatura amena mas umidade alta — o Dry remove o "bafão" sem esfriar demais</li>
      <li><strong>Período de transição (outono/inverno em SP):</strong> quando não está quente o suficiente para o modo frio mas a umidade está alta</li>
      <li><strong>Ambientes com mofo:</strong> umidade reduzida inibe o crescimento de fungos</li>
      <li><strong>Noites de verão com chuva:</strong> temperatura cai mas a umidade permanece alta</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Dry economiza energia?</h2>
    <p>Sim. O modo Dry consome aproximadamente <strong>30% a 50% menos</strong> do que o modo refrigeração, pois o compressor trabalha em ciclos curtos. Para dias em que a temperatura está suportável mas a umidade está alta — o que é comum em São Paulo — o Dry é a opção mais econômica e confortável.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Dry pode substituir o desumidificador?</h2>
    <p>Para uso doméstico em São Paulo, o modo Dry do ar condicionado é suficiente para a maioria das situações. Desumidificadores dedicados são indicados para ambientes com umidade muito alta e persistente — como subsolos, adegas ou locais com problema de infiltração.</p>
    <div className="bg-ice rounded-2xl p-6 my-8 border border-primary/10">
      <h3 className="text-lg font-bold text-primary mb-2">Seu ar condicionado não tem modo Dry ou está com problema?</h3>
      <p className="text-slate-600 text-sm mb-4">Verificamos o funcionamento de todos os modos · Manutenção a partir de R$ 180</p>
      <a href="https://api.whatsapp.com/send/?phone=5511963462516&text=Olá!%20Gostaria%20de%20verificar%20o%20funcionamento%20do%20meu%20ar%20condicionado." rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-success text-white font-bold py-3 px-6 rounded-xl text-sm hover:-translate-y-0.5 transition-all">Falar com Técnico</a>
    </div>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Perguntas frequentes</h2>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">O modo Dry esfria o ambiente?</h3>
    <p>Sim, levemente — como efeito secundário da remoção de umidade. Mas o resfriamento é muito menor do que no modo refrigeração. Se o objetivo é resfriar, use o modo Cool (refrigeração).</p>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Posso deixar o Dry ligado a noite toda?</h3>
    <p>Sim. O modo Dry tem consumo baixo e pode ser usado durante a noite em dias úmidos. Em noites frias, combine com temperatura mais alta para evitar ressecamento excessivo do ar.</p>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">O modo Dry ajuda a combater o mofo no ambiente?</h3>
    <p>Sim. Fungos se proliferam em umidade acima de 60-70%. O uso regular do modo Dry mantém a umidade em faixas que inibem o crescimento de mofo — especialmente útil em quartos e salas de apartamentos em SP durante o inverno úmido.</p>
  </BlogPostLayout>
);

export default BlogFuncaoDry;
