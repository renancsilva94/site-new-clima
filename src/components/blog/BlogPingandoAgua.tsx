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

export const BlogPingandoAgua = () => (
  <BlogPostLayout tag="Problemas" title="Ar Condicionado Pingando Água: Causas, Riscos e Como Resolver" date="26 de Junho, 2026" author="Equipe Técnica New Clima">
    <p>Água pingando do ar condicionado dentro de casa não deve ser ignorado. Além do desconforto, o vazamento pode causar manchas no teto, mofo na parede e infiltração no apartamento do vizinho de baixo.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Por que o ar condicionado pinga água?</h2>
    <p>É normal produzir água — é um subproduto do resfriamento. O evaporador condensa a umidade do ar em forma de água, que deve ser drenada para fora pelo dreno. O problema ocorre quando esse sistema falha.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Causas mais comuns</h2>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li><strong>Dreno entupido:</strong> causa mais comum — limo e fungos bloqueiam o escoamento. Água transborda pela unidade interna.</li>
      <li><strong>Bandeja de condensado suja ou trincada:</strong> acúmulo de limo ou rachadura na bandeja causa vazamento lateral.</li>
      <li><strong>Filtro muito sujo:</strong> restringe o ar, o evaporador gela, e no degelo a água transborda.</li>
      <li><strong>Gás baixo:</strong> evaporador fica frio demais, forma gelo — no degelo gera excesso de água.</li>
      <li><strong>Inclinação errada na instalação:</strong> a unidade interna deve ter leve inclinação para drenar. Se instalada reta, a água acumula.</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Riscos de ignorar o vazamento</h2>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li>Manchas de umidade no teto ou parede</li>
      <li>Crescimento de mofo na estrutura</li>
      <li>Infiltração no apartamento do vizinho de baixo — responsabilidade civil</li>
      <li>Danos elétricos se a água atingir a fiação</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">O que fazer enquanto espera o técnico</h2>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li>Desligue o ar condicionado no interruptor</li>
      <li>Coloque recipiente ou toalhas para conter a água</li>
      <li>Não ligue novamente até o problema ser resolvido</li>
      <li>Fotografe o vazamento para documentar</li>
    </ul>
    <div className="bg-ice rounded-2xl p-6 my-8 border border-primary/10">
      <h3 className="text-lg font-bold text-primary mb-2">Ar condicionado pingando em SP? Resolvemos em até 2 horas.</h3>
      <p className="text-slate-600 text-sm mb-4">Diagnóstico gratuito · Desentupimento de dreno · Garantia de 90 dias · SP e ABC</p>
      <a href="https://api.whatsapp.com/send/?phone=5511963462516&text=Olá!%20Meu%20ar%20condicionado%20está%20pingando%20água." rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-success text-white font-bold py-3 px-6 rounded-xl text-sm hover:-translate-y-0.5 transition-all">Resolver Agora</a>
    </div>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Perguntas frequentes</h2>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">É normal pingar um pouco de água?</h3>
    <p>Não dentro de casa. A água deve ser drenada para fora. Qualquer gotejamento interno indica problema no sistema de drenagem.</p>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Quanto custa desentupir o dreno?</h3>
    <p>Em média R$ 80 a R$ 150 isoladamente, ou incluso na manutenção preventiva (R$ 180 a R$ 300).</p>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Posso desentupir o dreno sozinho?</h3>
    <p>Com pera de borracha na saída do dreno é possível em alguns casos. Entupimento interno requer técnico com equipamento adequado.</p>
  </BlogPostLayout>
);

export default BlogPingandoAgua;
