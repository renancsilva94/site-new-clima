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

export const BlogConvencionalInverter = () => (
  <BlogPostLayout tag="Guia Técnico" title="Split Convencional x Inverter: Qual Vale Mais a Pena em 2026?" date="26 de Junho, 2026" author="Equipe Técnica New Clima">
    <p>A escolha entre split convencional e Inverter é uma das decisões mais importantes ao comprar um ar condicionado. A diferença de preço inicial pode parecer o fator decisivo — mas o custo total ao longo dos anos conta uma história diferente.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Diferença técnica: como cada um funciona</h2>
    <p>O <strong>convencional</strong> tem compressor de velocidade fixa: liga no máximo, resfria o ambiente e desliga. Quando a temperatura sobe, liga de novo no máximo. Esse ciclo gera picos de consumo e variações de temperatura.</p>
    <p>O <strong>Inverter</strong> tem compressor de velocidade variável: liga, atinge a temperatura e reduz a velocidade para manter — sem desligar. Muito mais eficiente em uso contínuo.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Comparação completa</h2>
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse text-sm">
        <thead><tr className="bg-primary text-white"><th className="p-3 text-left border border-primary">Critério</th><th className="p-3 text-left border border-primary">Convencional</th><th className="p-3 text-left border border-primary">Inverter</th></tr></thead>
        <tbody>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Preço do equipamento</td><td className="p-3 border border-slate-200 font-bold text-success">Menor (R$ 800-1.500)</td><td className="p-3 border border-slate-200">Maior (R$ 1.400-3.000)</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Consumo de energia</td><td className="p-3 border border-slate-200 font-bold text-red-600">Alto</td><td className="p-3 border border-slate-200 font-bold text-success">30-60% menor</td></tr>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Velocidade de resfriamento</td><td className="p-3 border border-slate-200">Normal</td><td className="p-3 border border-slate-200 font-bold text-success">Mais rápido</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Controle de temperatura</td><td className="p-3 border border-slate-200">Variação ±2°C</td><td className="p-3 border border-slate-200 font-bold text-success">Preciso (±0,5°C)</td></tr>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Nível de ruído</td><td className="p-3 border border-slate-200">Mais alto (partidas)</td><td className="p-3 border border-slate-200 font-bold text-success">Mais silencioso</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Vida útil do compressor</td><td className="p-3 border border-slate-200">Menor</td><td className="p-3 border border-slate-200 font-bold text-success">Maior</td></tr>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Manutenção</td><td className="p-3 border border-slate-200">Mais simples</td><td className="p-3 border border-slate-200">Placa mais sofisticada</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Payback (retorno do investimento)</td><td className="p-3 border border-slate-200">—</td><td className="p-3 border border-slate-200 font-bold text-success">4 a 8 meses de economia</td></tr>
        </tbody>
      </table>
    </div>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Quando o convencional ainda faz sentido?</h2>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li>Uso muito esporádico — menos de 2 horas por dia</li>
      <li>Orçamento muito limitado e necessidade imediata</li>
      <li>Ambiente temporário (aluguel de curto prazo)</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Para todos os outros casos: Inverter</h2>
    <p>Para uso residencial acima de 4 horas diárias, home office, quartos e salas em São Paulo, o Inverter é sempre a melhor escolha a médio e longo prazo. A economia na conta de luz paga a diferença de preço em menos de um ano.</p>
    <div className="bg-ice rounded-2xl p-6 my-8 border border-primary/10">
      <h3 className="text-lg font-bold text-primary mb-2">Instale seu Inverter com quem entende do assunto</h3>
      <p className="text-slate-600 text-sm mb-4">Instalação profissional em SP · Obra limpa · Garantia de 1 ano</p>
      <a href="https://api.whatsapp.com/send/?phone=5511963462516&text=Olá!%20Quero%20instalar%20um%20ar%20condicionado%20Inverter%20em%20SP." rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-success text-white font-bold py-3 px-6 rounded-xl text-sm hover:-translate-y-0.5 transition-all">Solicitar Instalação</a>
    </div>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Perguntas frequentes</h2>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Inverter funciona em 110V?</h3>
    <p>A maioria dos Inverters disponíveis no Brasil é bivolt (110V/220V). Verifique sempre a etiqueta do equipamento antes da instalação.</p>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Posso trocar apenas o compressor convencional por Inverter?</h3>
    <p>Não. O sistema Inverter exige compressor, placa eletrônica e circuito de controle compatíveis — não é possível converter um equipamento convencional. A troca é sempre do equipamento completo.</p>
  </BlogPostLayout>
);

export default BlogConvencionalInverter;
