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

export const BlogInverter = () => (
  <BlogPostLayout tag="Guia Técnico" title="Ar Condicionado Inverter: O Que É, Vantagens e Vale a Pena em SP?" date="26 de Junho, 2026" author="Equipe Técnica New Clima">
    <p>O ar condicionado Inverter já representa mais de 70% das vendas em São Paulo — e não é por acaso. A tecnologia promete economia de energia de até 60% em relação ao modelo convencional. Mas vale a pena pagar mais por um Inverter? Neste guia explicamos tudo.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">O que é o ar condicionado Inverter?</h2>
    <p>O ar condicionado Inverter tem um compressor de velocidade variável. Em vez de ligar e desligar para controlar a temperatura (como o convencional), ele ajusta a velocidade do compressor continuamente — mantendo a temperatura estável com muito menos gasto de energia.</p>
    <p>O modelo <strong>convencional</strong> funciona assim: liga no máximo, resfria o ambiente, desliga, o ambiente esquenta, liga de novo. Esse ciclo de liga e desliga consome muita energia e gera variações de temperatura.</p>
    <p>O modelo <strong>Inverter</strong> funciona assim: liga e vai reduzindo a velocidade conforme o ambiente atinge a temperatura desejada — mantendo tudo estável sem desligar o compressor.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Comparação: Inverter x Convencional</h2>
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse text-sm">
        <thead><tr className="bg-primary text-white"><th className="p-3 text-left border border-primary">Critério</th><th className="p-3 text-left border border-primary">Convencional</th><th className="p-3 text-left border border-primary">Inverter</th></tr></thead>
        <tbody>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Consumo de energia</td><td className="p-3 border border-slate-200">Alto (picos na partida)</td><td className="p-3 border border-slate-200 font-bold text-success">30% a 60% menor</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Controle de temperatura</td><td className="p-3 border border-slate-200">Variação de ±2°C</td><td className="p-3 border border-slate-200 font-bold text-success">Estável (±0,5°C)</td></tr>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Nível de ruído</td><td className="p-3 border border-slate-200">Mais ruidoso (partidas)</td><td className="p-3 border border-slate-200 font-bold text-success">Mais silencioso</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Preço inicial</td><td className="p-3 border border-slate-200 font-bold text-success">Menor</td><td className="p-3 border border-slate-200">15% a 30% mais caro</td></tr>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Vida útil do compressor</td><td className="p-3 border border-slate-200">Menor (desgaste por partidas)</td><td className="p-3 border border-slate-200 font-bold text-success">Maior</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Tempo para resfriar</td><td className="p-3 border border-slate-200">Mais lento</td><td className="p-3 border border-slate-200 font-bold text-success">Mais rápido</td></tr>
        </tbody>
      </table>
    </div>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Quanto economiza na conta de luz em SP?</h2>
    <p>Em São Paulo, onde o ar condicionado fica ligado em média 6 a 8 horas por dia durante o verão, a economia do Inverter é significativa. Um split 12.000 BTUs convencional consome em média 1.200W. O mesmo equipamento Inverter consome em regime de manutenção entre 300W e 600W.</p>
    <p>Calculando com a tarifa média da Enel SP (R$ 0,85/kWh em 2026):</p>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li>Convencional: ~R$ 180/mês ligado 8h/dia</li>
      <li>Inverter: ~R$ 80/mês nas mesmas condições</li>
      <li><strong>Economia: ~R$ 100/mês ou R$ 1.200/ano</strong></li>
    </ul>
    <p>A diferença de preço entre um convencional e um Inverter é de R$ 400 a R$ 800. Com a economia gerada, o Inverter se paga em 4 a 8 meses de uso.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Inverter vale a pena para quem usa pouco?</h2>
    <p>Se você usa o ar condicionado menos de 2 horas por dia, a economia do Inverter é menor e o retorno leva mais tempo. Para esse perfil, o convencional pode ser mais vantajoso pelo menor preço inicial.</p>
    <p>Para uso acima de 4 horas diárias — especialmente à noite no quarto ou em home office — o Inverter é sempre a melhor escolha a longo prazo.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Manutenção do Inverter é diferente?</h2>
    <p>A frequência de manutenção é a mesma — semestral para uso residencial. Porém, o Inverter tem placa eletrônica mais sofisticada, e o conserto em caso de queima é mais caro. Por isso, a manutenção preventiva é ainda mais importante para proteger o investimento.</p>
    <div className="bg-ice rounded-2xl p-6 my-8 border border-primary/10">
      <h3 className="text-lg font-bold text-primary mb-2">Quer instalar um Inverter em SP?</h3>
      <p className="text-slate-600 text-sm mb-4">Indicamos o modelo certo para o seu ambiente · Visita gratuita · Garantia de 1 ano</p>
      <a href="https://api.whatsapp.com/send/?phone=5511963462516&text=Olá!%20Tenho%20interesse%20em%20instalar%20um%20ar%20condicionado%20Inverter." rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-success text-white font-bold py-3 px-6 rounded-xl text-sm hover:-translate-y-0.5 transition-all">Falar com Especialista</a>
    </div>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Perguntas frequentes</h2>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Inverter funciona em 110V e 220V?</h3>
    <p>A maioria dos modelos Inverter disponíveis no Brasil é bivolt — funciona em 110V e 220V automaticamente. Verifique sempre a etiqueta do equipamento antes da instalação.</p>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Posso trocar um convencional por Inverter na mesma instalação?</h3>
    <p>Sim, desde que a bitola do cabo elétrico e o disjuntor sejam compatíveis com a carga do novo equipamento. Nossa equipe verifica tudo na visita técnica gratuita.</p>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Quais marcas de Inverter são mais recomendadas em SP?</h3>
    <p>LG, Samsung, Daikin, Midea e Fujitsu são as mais vendidas e com melhor assistência técnica em São Paulo. A New Clima instala e faz manutenção em todas essas marcas.</p>
  </BlogPostLayout>
);

export default BlogInverter;
