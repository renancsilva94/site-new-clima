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

export const BlogQuantoGasta = () => (
  <BlogPostLayout tag="Economia" title="Quanto Gasta um Ar Condicionado Inverter por Mês? Cálculo Real para SP" date="26 de Junho, 2026" author="Equipe Técnica New Clima">
    <p>A dúvida de quem está comprando um ar condicionado Inverter é sempre a mesma: <strong>quanto vai custar na conta de luz?</strong> Neste artigo, fazemos o cálculo real com os valores de energia de São Paulo em 2026.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Como calcular o gasto do ar condicionado?</h2>
    <p>A fórmula é simples:</p>
    <div className="bg-slate-100 rounded-xl p-4 my-4 font-mono text-sm">
      Custo = Potência (kW) × Horas de uso × Tarifa (R$/kWh)
    </div>
    <p>A tarifa média da Enel SP em 2026 é de aproximadamente <strong>R$ 0,85/kWh</strong> (bandeira verde). Em bandeira vermelha, pode chegar a R$ 1,05/kWh.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Tabela de gasto mensal por modelo (30 dias, 8h/dia)</h2>
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse text-sm">
        <thead><tr className="bg-primary text-white"><th className="p-3 text-left border border-primary">Modelo</th><th className="p-3 text-left border border-primary">Potência média</th><th className="p-3 text-left border border-primary">Gasto mensal</th></tr></thead>
        <tbody>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Inverter 9.000 BTUs</td><td className="p-3 border border-slate-200">~350W médio</td><td className="p-3 border border-slate-200 font-bold text-success">~R$ 71/mês</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Inverter 12.000 BTUs</td><td className="p-3 border border-slate-200">~450W médio</td><td className="p-3 border border-slate-200 font-bold text-success">~R$ 92/mês</td></tr>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Inverter 18.000 BTUs</td><td className="p-3 border border-slate-200">~650W médio</td><td className="p-3 border border-slate-200 font-bold text-success">~R$ 132/mês</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Convencional 12.000 BTUs</td><td className="p-3 border border-slate-200">~1.200W médio</td><td className="p-3 border border-slate-200 font-bold text-red-600">~R$ 244/mês</td></tr>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Convencional 18.000 BTUs</td><td className="p-3 border border-slate-200">~1.800W médio</td><td className="p-3 border border-slate-200 font-bold text-red-600">~R$ 367/mês</td></tr>
        </tbody>
      </table>
    </div>
    <p className="text-sm text-slate-500 italic">* Estimativas baseadas em uso de 8h/dia, 30 dias, tarifa R$ 0,85/kWh. A potência média do Inverter considera alternância entre carga máxima (partida) e mínima (manutenção).</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Gasto real para diferentes perfis de uso</h2>
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse text-sm">
        <thead><tr className="bg-primary text-white"><th className="p-3 text-left border border-primary">Perfil de uso</th><th className="p-3 text-left border border-primary">Horas/dia</th><th className="p-3 text-left border border-primary">Custo mensal (Inverter 12.000)</th></tr></thead>
        <tbody>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Uso leve (só à noite)</td><td className="p-3 border border-slate-200">6h</td><td className="p-3 border border-slate-200 font-bold text-success">~R$ 69/mês</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Uso moderado (tarde + noite)</td><td className="p-3 border border-slate-200">8h</td><td className="p-3 border border-slate-200 font-bold text-primary">~R$ 92/mês</td></tr>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Home office + noite</td><td className="p-3 border border-slate-200">12h</td><td className="p-3 border border-slate-200 font-bold text-primary">~R$ 138/mês</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Uso intenso (dia todo)</td><td className="p-3 border border-slate-200">16h</td><td className="p-3 border border-slate-200 font-bold text-red-600">~R$ 184/mês</td></tr>
        </tbody>
      </table>
    </div>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">O que aumenta o gasto além do esperado?</h2>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li><strong>Filtro sujo:</strong> aumenta o consumo em até 30%</li>
      <li><strong>Temperatura configurada muito baixa:</strong> cada grau a menos = 8% mais consumo</li>
      <li><strong>Gás refrigerante baixo:</strong> compressor trabalha mais para atingir a temperatura</li>
      <li><strong>Ambiente muito grande para o BTU do equipamento:</strong> compressor nunca descansa</li>
      <li><strong>Sol direto no ambiente:</strong> carga térmica alta força o compressor</li>
    </ul>
    <div className="bg-ice rounded-2xl p-6 my-8 border border-primary/10">
      <h3 className="text-lg font-bold text-primary mb-2">Conta de luz alta? Manutenção resolve.</h3>
      <p className="text-slate-600 text-sm mb-4">Limpeza e regulagem reduzem o consumo em até 30% · A partir de R$ 180 · São Paulo e ABC</p>
      <a href="https://api.whatsapp.com/send/?phone=5511963462516&text=Olá!%20Quero%20reduzir%20o%20gasto%20do%20meu%20ar%20condicionado%20na%20conta%20de%20luz." rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-success text-white font-bold py-3 px-6 rounded-xl text-sm hover:-translate-y-0.5 transition-all">Agendar Manutenção</a>
    </div>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Perguntas frequentes</h2>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Como saber quanto o ar condicionado está gastando de verdade?</h3>
    <p>A forma mais precisa é usar um medidor de energia (wattímetro plug-in — menos de R$ 50 online). Conecte entre a tomada e o aparelho e monitore o consumo real em diferentes situações de uso.</p>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Vale a pena trocar convencional por Inverter apenas pela economia?</h3>
    <p>Para uso acima de 6 horas diárias, sim. A economia média de R$ 100 a R$ 150/mês paga a diferença de preço entre convencional e Inverter em 4 a 8 meses.</p>
  </BlogPostLayout>
);

export default BlogQuantoGasta;
