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

export const BlogVidaUtil = () => (
  <BlogPostLayout tag="Manutenção" title="Vida Útil do Ar Condicionado: Quanto Dura e Como Prolongar" date="26 de Junho, 2026" author="Equipe Técnica New Clima">
    <p>Um ar condicionado bem cuidado dura entre <strong>12 e 15 anos</strong>. Sem manutenção adequada, esse tempo pode cair para 5 a 7 anos — uma diferença de até R$ 3.000 em substituições antecipadas.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Vida útil por tipo de equipamento</h2>
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse text-sm">
        <thead><tr className="bg-primary text-white"><th className="p-3 text-left border border-primary">Tipo</th><th className="p-3 text-left border border-primary">Vida útil com manutenção</th><th className="p-3 text-left border border-primary">Sem manutenção</th></tr></thead>
        <tbody>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Split convencional</td><td className="p-3 border border-slate-200 font-bold text-success">10 a 12 anos</td><td className="p-3 border border-slate-200 font-bold text-red-600">5 a 7 anos</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Split Inverter</td><td className="p-3 border border-slate-200 font-bold text-success">12 a 15 anos</td><td className="p-3 border border-slate-200 font-bold text-red-600">6 a 8 anos</td></tr>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Multi Split</td><td className="p-3 border border-slate-200 font-bold text-success">12 a 15 anos</td><td className="p-3 border border-slate-200 font-bold text-red-600">5 a 7 anos</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Cassete / VRF comercial</td><td className="p-3 border border-slate-200 font-bold text-success">15 a 20 anos</td><td className="p-3 border border-slate-200 font-bold text-red-600">8 a 10 anos</td></tr>
        </tbody>
      </table>
    </div>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">O que mais desgasta o ar condicionado?</h2>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li><strong>Falta de limpeza dos filtros:</strong> causa superaquecimento do compressor por restrição de fluxo de ar</li>
      <li><strong>Gás refrigerante baixo:</strong> compressor trabalha em sobrecarga para compensar a perda de eficiência</li>
      <li><strong>Instalação incorreta:</strong> inclinação errada da unidade interna causa acúmulo de água; condensadora sem ventilação adequada superaquece</li>
      <li><strong>Tensão elétrica instável:</strong> variações de tensão danificam a placa eletrônica e o motor do compressor</li>
      <li><strong>Uso contínuo sem descanso:</strong> principalmente em verões intensos de SP</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Como prolongar a vida útil do seu ar condicionado</h2>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li>Limpe os filtros a cada 15 dias em uso intenso</li>
      <li>Faça manutenção preventiva semestral com técnico certificado</li>
      <li>Instale um estabilizador ou use circuito elétrico dedicado com DPS (Dispositivo de Proteção contra Surtos)</li>
      <li>Nunca bloqueie a ventilação da condensadora externa</li>
      <li>Verifique o nível de gás anualmente</li>
      <li>Não deixe o aparelho ligado em ambiente fechado sem retorno de ar</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Quando vale a pena consertar x trocar?</h2>
    <p>A regra geral: se o custo do conserto supera <strong>50% do valor de um equipamento novo equivalente</strong>, a troca é mais vantajosa. Guia rápido:</p>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li><strong>Aparelho com menos de 5 anos:</strong> sempre vale consertar</li>
      <li><strong>5 a 10 anos:</strong> depende do problema — peças menores (capacitor, sensor) vale; compressor ou placa, avalie</li>
      <li><strong>Acima de 10 anos com problema no compressor:</strong> geralmente mais vantajoso trocar por Inverter novo</li>
    </ul>
    <div className="bg-ice rounded-2xl p-6 my-8 border border-primary/10">
      <h3 className="text-lg font-bold text-primary mb-2">Seu ar condicionado tem mais de 5 anos sem manutenção?</h3>
      <p className="text-slate-600 text-sm mb-4">Manutenção preventiva agora evita problemas maiores · A partir de R$ 180 · São Paulo e ABC</p>
      <a href="https://api.whatsapp.com/send/?phone=5511963462516&text=Olá!%20Quero%20fazer%20manutenção%20preventiva%20no%20meu%20ar%20condicionado." rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-success text-white font-bold py-3 px-6 rounded-xl text-sm hover:-translate-y-0.5 transition-all">Agendar Manutenção</a>
    </div>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Perguntas frequentes</h2>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Ar condicionado de 15 anos ainda vale a pena usar?</h3>
    <p>Se estiver funcionando bem e com manutenção em dia, pode continuar. Mas considere que os modelos mais antigos consomem muito mais energia que os Inverter atuais — a troca pode se pagar rapidamente pela economia na conta de luz.</p>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Qual marca dura mais?</h3>
    <p>Daikin e Fujitsu têm reputação de maior durabilidade. LG e Samsung têm boa durabilidade com manutenção adequada. A diferença de vida útil entre marcas é menor do que a diferença entre ter ou não ter manutenção preventiva regular.</p>
  </BlogPostLayout>
);

export default BlogVidaUtil;
