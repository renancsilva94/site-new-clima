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

export const BlogConsumo = () => (
  <BlogPostLayout tag="Economia" title="Ar Condicionado Gasta Mais de Dia ou à Noite? Verdade e Mitos" date="26 de Junho, 2026" author="Equipe Técnica New Clima">
    <p>Uma dúvida muito comum: o ar condicionado gasta mais energia de dia ou à noite? A resposta depende da temperatura externa, do tipo de equipamento e do comportamento de uso — mas vamos desvendar cada cenário.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">O que determina o consumo do ar condicionado?</h2>
    <p>O consumo do ar condicionado é proporcional ao trabalho que o compressor precisa fazer para atingir e manter a temperatura configurada. Quanto maior a diferença entre a temperatura externa e a temperatura desejada, mais o compressor trabalha e mais energia consome.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">De dia x à noite: qual gasta mais?</h2>
    <p>Em São Paulo, especialmente no verão, o dia é mais quente — com temperaturas que podem ultrapassar 35°C. À noite, a temperatura cai para 22°C a 26°C. Isso significa que:</p>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li><strong>De dia:</strong> o ar condicionado trabalha mais para vencer o calor externo — maior consumo</li>
      <li><strong>À noite:</strong> a temperatura externa já é menor, o compressor trabalha menos — menor consumo</li>
      <li><strong>Com Inverter à noite:</strong> em modo Sleep, o consumo pode cair para 100-200W — extremamente econômico</li>
    </ul>
    <p>Conclusão: <strong>de dia gasta mais</strong> na maioria dos casos em São Paulo.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Quanto gasta o ar condicionado por hora?</h2>
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse text-sm">
        <thead><tr className="bg-primary text-white"><th className="p-3 text-left border border-primary">Equipamento</th><th className="p-3 text-left border border-primary">Consumo médio</th><th className="p-3 text-left border border-primary">Custo/hora (R$ 0,85/kWh)</th></tr></thead>
        <tbody>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Split convencional 9.000 BTUs</td><td className="p-3 border border-slate-200">900W</td><td className="p-3 border border-slate-200 font-bold text-primary">R$ 0,77/hora</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Split convencional 12.000 BTUs</td><td className="p-3 border border-slate-200">1.200W</td><td className="p-3 border border-slate-200 font-bold text-primary">R$ 1,02/hora</td></tr>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Split Inverter 12.000 BTUs (partida)</td><td className="p-3 border border-slate-200">1.200W</td><td className="p-3 border border-slate-200 font-bold text-primary">R$ 1,02/hora</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Split Inverter 12.000 BTUs (manutenção)</td><td className="p-3 border border-slate-200">300-500W</td><td className="p-3 border border-slate-200 font-bold text-success">R$ 0,26 a R$ 0,43/hora</td></tr>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Split Inverter 18.000 BTUs (manutenção)</td><td className="p-3 border border-slate-200">400-700W</td><td className="p-3 border border-slate-200 font-bold text-success">R$ 0,34 a R$ 0,60/hora</td></tr>
        </tbody>
      </table>
    </div>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Como reduzir o consumo sem abrir mão do conforto</h2>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li>Use temperatura entre 23°C e 24°C — cada grau a menos aumenta o consumo em 8%</li>
      <li>Mantenha filtros limpos — filtro sujo aumenta o consumo em até 30%</li>
      <li>Use o modo Sleep à noite — reduz a temperatura gradualmente e economiza energia</li>
      <li>Feche portas e janelas durante o uso — evita entrada de calor externo</li>
      <li>Use película solar nas janelas — reduz a carga térmica do ambiente em até 40%</li>
      <li>Troque por Inverter se ainda tiver convencional — economia de até 60% em uso contínuo</li>
    </ul>
    <div className="bg-ice rounded-2xl p-6 my-8 border border-primary/10">
      <h3 className="text-lg font-bold text-primary mb-2">Conta de luz alta? Pode ser o ar condicionado sem manutenção.</h3>
      <p className="text-slate-600 text-sm mb-4">Manutenção preventiva reduz o consumo em até 30% · A partir de R$ 180</p>
      <a href="https://api.whatsapp.com/send/?phone=5511963462516&text=Olá!%20Minha%20conta%20de%20luz%20aumentou%20e%20quero%20verificar%20o%20ar%20condicionado." rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-success text-white font-bold py-3 px-6 rounded-xl text-sm hover:-translate-y-0.5 transition-all">Agendar Manutenção</a>
    </div>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Perguntas frequentes</h2>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Deixar ligado o dia todo gasta mais do que ligar e desligar?</h3>
    <p>Para Inverter: deixar ligado gasta menos — o compressor fica em modo econômico. Para convencional: depende; ligar e desligar gera picos de consumo na partida, mas desligar por horas longas pode compensar. Em geral, para uso acima de 4 horas, manter ligado o dia todo com Inverter é mais econômico.</p>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">O ar condicionado aumentou minha conta de luz. O que fazer?</h3>
    <p>Primeiro, verifique se o filtro está limpo. Segundo, se for convencional, considere trocar por Inverter. Terceiro, agende uma manutenção preventiva — filtro sujo e gás baixo aumentam significativamente o consumo.</p>
  </BlogPostLayout>
);

export default BlogConsumo;
