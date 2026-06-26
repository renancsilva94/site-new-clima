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

export const BlogArCondicionadoSala = () => (
  <BlogPostLayout tag="Guia de Compra" title="Ar Condicionado para Sala: Qual BTU, Onde Instalar e Qual Modelo Escolher" date="26 de Junho, 2026" author="Equipe Técnica New Clima">
    <p>A sala de estar é geralmente o ambiente maior e mais desafiador de climatizar em um apartamento ou casa em São Paulo. Escolher o equipamento certo — em BTUs, modelo e posição de instalação — faz toda a diferença no conforto e na conta de luz.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Quantos BTUs para a sala?</h2>
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse text-sm">
        <thead><tr className="bg-primary text-white"><th className="p-3 text-left border border-primary">Tamanho da sala</th><th className="p-3 text-left border border-primary">BTUs recomendados</th><th className="p-3 text-left border border-primary">Modelo</th></tr></thead>
        <tbody>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Até 20m²</td><td className="p-3 border border-slate-200 font-bold text-primary">12.000 BTUs</td><td className="p-3 border border-slate-200">Split Hi-Wall</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">20m² a 30m²</td><td className="p-3 border border-slate-200 font-bold text-primary">18.000 BTUs</td><td className="p-3 border border-slate-200">Split Hi-Wall</td></tr>
          <tr className="bg-white"><td className="p-3 border border-slate-200">30m² a 45m²</td><td className="p-3 border border-slate-200 font-bold text-primary">24.000 BTUs</td><td className="p-3 border border-slate-200">Split Hi-Wall ou Cassete</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Acima de 45m²</td><td className="p-3 border border-slate-200 font-bold text-primary">30.000+ BTUs ou Multi Split</td><td className="p-3 border border-slate-200">Multi Split ou Cassete</td></tr>
        </tbody>
      </table>
    </div>
    <p className="text-sm text-slate-500 italic">* Salas com muitas janelas, exposição solar intensa ou pé direito alto precisam de 10% a 20% a mais de BTUs.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Onde instalar o ar condicionado na sala?</h2>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li><strong>Parede oposta ao sofá:</strong> distribui o ar por toda a sala sem apontar diretamente para quem está sentado</li>
      <li><strong>Parede lateral:</strong> boa opção quando não há parede oposta adequada</li>
      <li><strong>Evite paredes com janelas:</strong> variação de temperatura reduz eficiência</li>
      <li><strong>Altura ideal:</strong> 2,10m a 2,30m do piso</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Split ou Cassete para sala?</h2>
    <p><strong>Split Hi-Wall:</strong> mais econômico, instalação mais simples. Ideal para salas até 30m².</p>
    <p><strong>Cassete:</strong> distribuição de ar em 4 direções, estética mais elegante, instalado no teto. Ideal para salas acima de 30m² ou ambientes onde a estética é prioridade. Requer forro de gesso.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Sala com cozinha integrada: o que considerar</h2>
    <p>Salas integradas com cozinha (open concept) têm carga térmica muito maior — o fogão e eletrodomésticos geram calor constantemente. Nesses casos, acrescente 20% a 30% nos BTUs calculados e considere posicionar o ar condicionado na parte da sala, longe da cozinha.</p>
    <div className="bg-ice rounded-2xl p-6 my-8 border border-primary/10">
      <h3 className="text-lg font-bold text-primary mb-2">Instale o ar condicionado ideal para sua sala em SP</h3>
      <p className="text-slate-600 text-sm mb-4">Calculamos o BTU certo · Indicamos o modelo ideal · Visita gratuita · Garantia de 1 ano</p>
      <a href="https://api.whatsapp.com/send/?phone=5511963462516&text=Olá!%20Quero%20instalar%20ar%20condicionado%20na%20minha%20sala%20em%20SP." rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-success text-white font-bold py-3 px-6 rounded-xl text-sm hover:-translate-y-0.5 transition-all">Solicitar Instalação</a>
    </div>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Perguntas frequentes</h2>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Um ar condicionado resolve a sala toda?</h3>
    <p>Para salas até 35m² com um ponto de instalação bem posicionado, sim. Para salas maiores ou em L, pode ser necessário dois equipamentos ou um cassete com distribuição em 4 direções.</p>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Inverter vale para sala?</h3>
    <p>Sim, especialmente em salas usadas por muitas horas ao dia. A economia no consumo se paga em poucos meses de uso.</p>
  </BlogPostLayout>
);

export default BlogArCondicionadoSala;
