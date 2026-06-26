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

export const BlogBTUs = () => (
  <BlogPostLayout tag="Guia Técnico" title="Como Calcular BTUs: Tabela Completa para Escolher o Ar Condicionado Certo" date="26 de Junho, 2026" author="Equipe Técnica New Clima">
    <p>Escolher o ar condicionado com a potência errada é um dos erros mais comuns em São Paulo. Um equipamento com BTUs insuficientes não consegue resfriar o ambiente e fica ligado o tempo todo. Um equipamento superdimensionado liga e desliga com muita frequência, consumindo mais energia e reduzindo a vida útil.</p>
    <p>Neste guia, mostramos como calcular os BTUs certos para qualquer ambiente.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">O que é BTU?</h2>
    <p>BTU (British Thermal Unit) é a unidade de medida da capacidade de resfriamento de um ar condicionado. Quanto maior o BTU, mais potente o equipamento e maior sua capacidade de resfriar ambientes grandes.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Tabela de BTUs por tamanho de ambiente</h2>
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse text-sm">
        <thead><tr className="bg-primary text-white"><th className="p-3 text-left border border-primary">Área do ambiente</th><th className="p-3 text-left border border-primary">BTUs recomendados</th><th className="p-3 text-left border border-primary">Uso típico</th></tr></thead>
        <tbody>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Até 10m²</td><td className="p-3 border border-slate-200 font-bold text-primary">7.000 a 9.000 BTUs</td><td className="p-3 border border-slate-200">Quarto solteiro, escritório pequeno</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">10m² a 15m²</td><td className="p-3 border border-slate-200 font-bold text-primary">9.000 BTUs</td><td className="p-3 border border-slate-200">Quarto casal pequeno</td></tr>
          <tr className="bg-white"><td className="p-3 border border-slate-200">15m² a 20m²</td><td className="p-3 border border-slate-200 font-bold text-primary">12.000 BTUs</td><td className="p-3 border border-slate-200">Quarto casal, sala pequena</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">20m² a 30m²</td><td className="p-3 border border-slate-200 font-bold text-primary">18.000 BTUs</td><td className="p-3 border border-slate-200">Sala de estar, quarto grande</td></tr>
          <tr className="bg-white"><td className="p-3 border border-slate-200">30m² a 40m²</td><td className="p-3 border border-slate-200 font-bold text-primary">24.000 BTUs</td><td className="p-3 border border-slate-200">Sala ampla, escritório médio</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">40m² a 60m²</td><td className="p-3 border border-slate-200 font-bold text-primary">30.000 a 36.000 BTUs</td><td className="p-3 border border-slate-200">Sala grande, ambiente comercial</td></tr>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Acima de 60m²</td><td className="p-3 border border-slate-200 font-bold text-primary">Multi Split ou VRF</td><td className="p-3 border border-slate-200">Ambiente comercial, open space</td></tr>
        </tbody>
      </table>
    </div>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Fatores que aumentam a necessidade de BTUs</h2>
    <p>A tabela acima é uma referência base. Alguns fatores exigem acréscimo de BTUs:</p>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li><strong>Exposição solar intensa (especialmente oeste):</strong> acrescente 10% a 20%</li>
      <li><strong>Muitas janelas ou vidros sem película:</strong> acrescente 10%</li>
      <li><strong>Mais de 3 pessoas no ambiente:</strong> acrescente 600 BTUs por pessoa extra</li>
      <li><strong>Equipamentos eletrônicos gerando calor (servidores, TVs, computadores):</strong> acrescente 10% a 15%</li>
      <li><strong>Pé direito acima de 2,80m:</strong> acrescente 10% a 20%</li>
      <li><strong>Cozinha ou ambiente com fogão próximo:</strong> acrescente 20% a 30%</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Fórmula simplificada de cálculo de BTUs</h2>
    <p>Uma fórmula usada por técnicos para ambientes residenciais padrão em São Paulo:</p>
    <div className="bg-slate-100 rounded-xl p-4 my-4 font-mono text-sm">
      BTUs = Área (m²) × 600
    </div>
    <p>Exemplo: quarto de 15m² → 15 × 600 = 9.000 BTUs</p>
    <p>Para ambientes comerciais ou com alta carga térmica, o cálculo é mais complexo e deve ser feito por um técnico — a New Clima realiza esse cálculo gratuitamente na visita técnica.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Erros comuns na escolha de BTUs em SP</h2>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li><strong>Subestimar o ambiente:</strong> comprar 9.000 BTUs para um quarto de 20m² — o aparelho não consegue resfriar e fica em sobrecarga constante</li>
      <li><strong>Superdimensionar:</strong> comprar 18.000 BTUs para um quarto de 12m² — o equipamento liga e desliga com muita frequência, gerando umidade e consumindo mais energia</li>
      <li><strong>Ignorar a exposição solar:</strong> apartamentos voltados para o oeste em SP recebem sol da tarde intenso e precisam de mais BTUs</li>
      <li><strong>Não considerar o pé direito:</strong> lofts e ambientes com pé direito alto precisam de potência maior</li>
    </ul>
    <div className="bg-ice rounded-2xl p-6 my-8 border border-primary/10">
      <h3 className="text-lg font-bold text-primary mb-2">Não sabe quantos BTUs precisa? A gente calcula.</h3>
      <p className="text-slate-600 text-sm mb-4">Visita técnica gratuita · Cálculo personalizado · Indicação do modelo ideal</p>
      <a href="https://api.whatsapp.com/send/?phone=5511963462516&text=Olá!%20Preciso%20de%20ajuda%20para%20calcular%20os%20BTUs%20do%20meu%20ambiente." rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-success text-white font-bold py-3 px-6 rounded-xl text-sm hover:-translate-y-0.5 transition-all">Calcular Grátis pelo WhatsApp</a>
    </div>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Perguntas frequentes</h2>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Posso usar 9.000 BTUs em uma sala de 25m²?</h3>
    <p>Não é recomendado. Para uma sala de 25m², o mínimo recomendado é 12.000 BTUs. Um aparelho subdimensionado trabalha em sobrecarga e pode durar metade do tempo esperado.</p>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">BTU maior sempre é melhor?</h3>
    <p>Não. Um equipamento superdimensionado resfria o ambiente muito rápido e desliga — o ciclo curto de liga e desliga aumenta o consumo de energia e não remove a umidade adequadamente, deixando o ambiente frio mas úmido.</p>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Como calcular BTU para um ambiente com mezanino?</h3>
    <p>Some a área do nível inferior com o superior e aplique o fator de pé direito alto (+20%). Em ambientes com mezanino, geralmente é melhor ter dois equipamentos menores — um em cada nível — do que um grande concentrado.</p>
  </BlogPostLayout>
);

export default BlogBTUs;
