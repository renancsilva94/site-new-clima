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

export const BlogGas = () => (
  <BlogPostLayout tag="Técnico" title="Gás R32 x R410A: Diferenças, Vantagens e Qual Está no Seu Ar Condicionado" date="26 de Junho, 2026" author="Equipe Técnica New Clima">
    <p>Se o seu ar condicionado parou de gelar ou está gelando menos do que antes, pode ser que o gás refrigerante esteja baixo. Mas afinal, que gás é esse? Quais são as diferenças entre R32 e R410A? E quanto custa fazer a recarga em São Paulo?</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">O que é o gás refrigerante?</h2>
    <p>O gás refrigerante é o fluido que circula entre as unidades interna e externa do ar condicionado, absorvendo o calor do ambiente interno e liberando-o no externo. Sem gás suficiente, o sistema perde capacidade de resfriamento.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">R32 x R410A: comparação completa</h2>
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse text-sm">
        <thead><tr className="bg-primary text-white"><th className="p-3 text-left border border-primary">Característica</th><th className="p-3 text-left border border-primary">R410A</th><th className="p-3 text-left border border-primary">R32</th></tr></thead>
        <tbody>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Uso</td><td className="p-3 border border-slate-200">Padrão até 2020</td><td className="p-3 border border-slate-200 font-bold text-success">Padrão atual (2020+)</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Potencial de aquecimento global (GWP)</td><td className="p-3 border border-slate-200 font-bold text-red-600">2.088</td><td className="p-3 border border-slate-200 font-bold text-success">675 (3x menor)</td></tr>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Eficiência energética</td><td className="p-3 border border-slate-200">Boa</td><td className="p-3 border border-slate-200 font-bold text-success">Melhor (+10%)</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Quantidade necessária</td><td className="p-3 border border-slate-200">Maior</td><td className="p-3 border border-slate-200 font-bold text-success">30% menos</td></tr>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Inflamabilidade</td><td className="p-3 border border-slate-200 font-bold text-success">Não inflamável</td><td className="p-3 border border-slate-200">Levemente inflamável (classe A2L)</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Custo do gás</td><td className="p-3 border border-slate-200">Mais caro (em desuso)</td><td className="p-3 border border-slate-200 font-bold text-success">Mais acessível</td></tr>
        </tbody>
      </table>
    </div>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Qual gás está no meu ar condicionado?</h2>
    <p>Você encontra essa informação na <strong>etiqueta da unidade externa</strong> (condensadora) ou no manual do equipamento. Como referência:</p>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li>Equipamentos fabricados até 2019: geralmente R410A</li>
      <li>Equipamentos fabricados de 2020 em diante: geralmente R32</li>
      <li>Equipamentos mais antigos (anterior a 2010): podem usar R22 (em desuso e ilegal para novos equipamentos)</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Sinais de que o gás está baixo</h2>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li>Ar condicionado liga mas não gela ou gela pouco</li>
      <li>Unidade interna fica com gelo na serpentina</li>
      <li>Compressor fica ligado continuamente sem atingir a temperatura</li>
      <li>Consumo de energia aumentou sem mudança de uso</li>
      <li>Água pingando mais do que o normal da unidade interna</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Quanto custa a recarga de gás em SP?</h2>
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse text-sm">
        <thead><tr className="bg-primary text-white"><th className="p-3 text-left border border-primary">Serviço</th><th className="p-3 text-left border border-primary">Preço médio em SP (2026)</th></tr></thead>
        <tbody>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Verificação de gás (diagnóstico)</td><td className="p-3 border border-slate-200 font-bold text-primary">R$ 80 a R$ 150</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Recarga R32 (split 9.000-12.000 BTUs)</td><td className="p-3 border border-slate-200 font-bold text-primary">R$ 200 a R$ 350</td></tr>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Recarga R410A (split 9.000-12.000 BTUs)</td><td className="p-3 border border-slate-200 font-bold text-primary">R$ 250 a R$ 400</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Detecção de vazamento + recarga</td><td className="p-3 border border-slate-200 font-bold text-primary">R$ 350 a R$ 600</td></tr>
        </tbody>
      </table>
    </div>
    <p><strong>Atenção:</strong> se o gás acabou, existe um vazamento no sistema. Apenas recarregar sem localizar e reparar o vazamento é jogo perdido — em poucos meses o gás acaba de novo.</p>
    <div className="bg-ice rounded-2xl p-6 my-8 border border-primary/10">
      <h3 className="text-lg font-bold text-primary mb-2">Ar condicionado não está gelando em SP?</h3>
      <p className="text-slate-600 text-sm mb-4">Diagnóstico gratuito · Verificamos o gás e identificamos vazamentos · Garantia de 90 dias</p>
      <a href="https://api.whatsapp.com/send/?phone=5511963462516&text=Olá!%20Meu%20ar%20condicionado%20não%20está%20gelando%20e%20pode%20ser%20problema%20de%20gás." rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-success text-white font-bold py-3 px-6 rounded-xl text-sm hover:-translate-y-0.5 transition-all">Diagnóstico Gratuito</a>
    </div>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Perguntas frequentes</h2>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Posso misturar R32 com R410A?</h3>
    <p>Não. Os gases têm propriedades diferentes e não são compatíveis. Misturar gases diferentes danifica o compressor e invalida a garantia do equipamento.</p>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">O gás do ar condicionado acaba naturalmente?</h3>
    <p>Não. O sistema de refrigeração é fechado — o gás não se consome. Se o gás está baixo, existe um vazamento que precisa ser localizado e reparado antes da recarga.</p>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Com que frequência verificar o gás?</h3>
    <p>A verificação do nível de gás faz parte da manutenção preventiva semestral. Se o aparelho está gelando normalmente, não há necessidade de recarga — o gás não é consumido em operação normal.</p>
  </BlogPostLayout>
);


// ── NOVOS ARTIGOS ────────────────────────────────────────────────────────────

export default BlogGas;
