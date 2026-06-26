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

export const BlogTemperatura = () => (
  <BlogPostLayout tag="Uso" title="Temperatura Ideal do Ar Condicionado: Por Saúde, Economia e Conforto" date="26 de Junho, 2026" author="Equipe Técnica New Clima">
    <p>Qual a temperatura ideal para o ar condicionado? A resposta varia conforme o ambiente, o horário e o perfil de quem usa — mas existe uma faixa que combina conforto, saúde e economia para a maioria das situações em São Paulo.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Temperatura ideal por tipo de ambiente</h2>
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse text-sm">
        <thead><tr className="bg-primary text-white"><th className="p-3 text-left border border-primary">Ambiente</th><th className="p-3 text-left border border-primary">Temperatura ideal</th><th className="p-3 text-left border border-primary">Motivo</th></tr></thead>
        <tbody>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Sala de estar</td><td className="p-3 border border-slate-200 font-bold text-primary">22°C a 24°C</td><td className="p-3 border border-slate-200">Conforto para atividades normais</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Quarto (adulto)</td><td className="p-3 border border-slate-200 font-bold text-primary">20°C a 23°C</td><td className="p-3 border border-slate-200">Favorece o sono profundo</td></tr>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Quarto (criança)</td><td className="p-3 border border-slate-200 font-bold text-primary">23°C a 25°C</td><td className="p-3 border border-slate-200">Mais seguro para crianças</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Escritório</td><td className="p-3 border border-slate-200 font-bold text-primary">22°C a 24°C</td><td className="p-3 border border-slate-200">Produtividade e conforto</td></tr>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Academia / espaço esportivo</td><td className="p-3 border border-slate-200 font-bold text-primary">18°C a 21°C</td><td className="p-3 border border-slate-200">Corpo em atividade gera mais calor</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Servidor / datacenter</td><td className="p-3 border border-slate-200 font-bold text-primary">18°C a 20°C</td><td className="p-3 border border-slate-200">Proteção dos equipamentos</td></tr>
        </tbody>
      </table>
    </div>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Temperatura e economia de energia</h2>
    <p>Cada grau a menos no ar condicionado aumenta o consumo de energia em aproximadamente <strong>8%</strong>. Ou seja:</p>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li>Usar 18°C em vez de 24°C aumenta o consumo em até 50%</li>
      <li>Subir de 22°C para 24°C economiza cerca de 16% na conta de luz</li>
      <li>O PROCEL e o INMETRO recomendam 23°C como temperatura de referência para escritórios</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Por que temperatura muito baixa faz mal?</h2>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li>Abaixo de 18°C pode causar hipotermia leve e dores musculares</li>
      <li>A diferença grande entre o ambiente interno e o externo (que em SP pode chegar a 15°C) causa choque térmico ao entrar e sair</li>
      <li>Ar muito frio resseca as mucosas do nariz e garganta, facilitando infecções</li>
      <li>Ambientes muito frios reduzem a produtividade e aumentam o desconforto</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Diferença de temperatura máxima recomendada</h2>
    <p>A diferença entre a temperatura interna e a temperatura externa não deve ultrapassar <strong>7°C a 10°C</strong>. Em dias muito quentes em São Paulo (35°C+), o ideal é manter o ambiente em torno de 25°C a 27°C — não em 18°C, que gera um choque de 17°C ao sair para a rua.</p>
    <div className="bg-ice rounded-2xl p-6 my-8 border border-primary/10">
      <h3 className="text-lg font-bold text-primary mb-2">Seu ar condicionado não mantém a temperatura certa?</h3>
      <p className="text-slate-600 text-sm mb-4">Pode ser falta de gás, filtro sujo ou equipamento subdimensionado · Diagnóstico gratuito</p>
      <a href="https://api.whatsapp.com/send/?phone=5511963462516&text=Olá!%20Meu%20ar%20condicionado%20não%20está%20mantendo%20a%20temperatura%20certa." rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-success text-white font-bold py-3 px-6 rounded-xl text-sm hover:-translate-y-0.5 transition-all">Diagnóstico Gratuito</a>
    </div>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Perguntas frequentes</h2>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Qual temperatura o governo recomenda para empresas?</h3>
    <p>A NR-17 (Norma Regulamentadora do Trabalho) estabelece que em escritórios a temperatura deve ficar entre 20°C e 23°C. O INMETRO recomenda 23°C como padrão para economia de energia.</p>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">O ar condicionado realmente atinge a temperatura configurada?</h3>
    <p>Depende do dimensionamento. Um equipamento subdimensionado para o ambiente nunca atingirá temperaturas muito baixas em dias quentes. Se o ar condicionado não atinge a temperatura configurada, pode ser BTU insuficiente, gás baixo ou filtro sujo.</p>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Posso usar 16°C (temperatura mínima) para resfriar mais rápido?</h3>
    <p>O ar condicionado resfria na mesma velocidade independente da temperatura configurada — o compressor trabalha na mesma intensidade. Configurar 16°C não resfria mais rápido, apenas mantém o compressor ligado por mais tempo, gastando mais energia.</p>
  </BlogPostLayout>
);

export default BlogTemperatura;
