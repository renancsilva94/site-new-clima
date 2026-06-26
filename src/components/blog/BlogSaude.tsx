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

export const BlogSaude = () => (
  <BlogPostLayout tag="Saúde" title="Ar Condicionado Faz Mal à Saúde? A Verdade Sobre os Riscos e Como Evitá-los" date="26 de Junho, 2026" author="Equipe Técnica New Clima">
    <p>A dúvida é comum: o ar condicionado faz mal à saúde? A resposta curta é: <strong>não, quando bem instalado e com manutenção em dia</strong>. O problema ocorre quando o equipamento fica sem limpeza — transformando-se em um reservatório de fungos, bactérias e ácaros que são espalhados pelo ar.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Quais são os riscos reais do ar condicionado?</h2>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li><strong>Fungos e bactérias nos filtros sujos:</strong> filtros sem limpeza acumulam microorganismos que causam rinite, sinusite e infecções respiratórias</li>
      <li><strong>Ressecamento do ar:</strong> o ar condicionado reduz a umidade do ambiente — abaixo de 30% pode causar irritação nos olhos, nariz e garganta</li>
      <li><strong>Corrente de ar direta:</strong> fluxo de ar frio apontado diretamente para o corpo causa dores musculares e cervicalgias</li>
      <li><strong>Legionella:</strong> bactéria que pode se proliferar em sistemas de ar condicionado central sem manutenção adequada — causa a Doença dos Legionários</li>
      <li><strong>Temperatura muito baixa:</strong> ambientes abaixo de 18°C podem causar hipotermia leve e piorar problemas respiratórios</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Como usar o ar condicionado sem prejudicar a saúde?</h2>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li>Mantenha a temperatura entre <strong>22°C e 24°C</strong> — conforto sem ressecamento excessivo</li>
      <li>Direcione as aletas para o teto, nunca para as pessoas</li>
      <li>Limpe os filtros a cada 15 dias em uso intenso</li>
      <li>Faça manutenção preventiva semestral com técnico certificado</li>
      <li>Mantenha uma fonte de umidade no ambiente — plantas ou umidificador</li>
      <li>Ventile o ambiente por alguns minutos por dia abrindo janelas</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Ar condicionado e rinite: mito ou verdade?</h2>
    <p>O ar condicionado <strong>não causa rinite</strong> — mas pode piorar rinite pré-existente quando os filtros estão sujos. O verdadeiro vilão é o acúmulo de ácaros, fungos e poeira nos filtros que são então espalhados pelo ar. Com limpeza regular, o ar condicionado pode até ajudar quem tem rinite — filtrando partículas do ambiente.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Ar condicionado é prejudicial para crianças?</h2>
    <p>Não, desde que usado corretamente. A temperatura recomendada para crianças é entre 23°C e 25°C. O ar não deve ser direcionado diretamente para o berço ou cama. E a limpeza dos filtros deve ser mais frequente em ambientes com crianças — a cada 2 semanas.</p>
    <div className="bg-ice rounded-2xl p-6 my-8 border border-primary/10">
      <h3 className="text-lg font-bold text-primary mb-2">Mantenha o ar do seu ambiente saudável</h3>
      <p className="text-slate-600 text-sm mb-4">Higienização profissional com bactericida · Remove fungos e ácaros · A partir de R$ 150</p>
      <a href="https://api.whatsapp.com/send/?phone=5511963462516&text=Olá!%20Gostaria%20de%20agendar%20uma%20higienização%20do%20meu%20ar%20condicionado." rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-success text-white font-bold py-3 px-6 rounded-xl text-sm hover:-translate-y-0.5 transition-all">Agendar Higienização</a>
    </div>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Perguntas frequentes</h2>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Com que frequência devo limpar o filtro?</h3>
    <p>A cada 15 dias para uso diário intenso. A cada mês para uso moderado. A limpeza do filtro externo pode ser feita em casa com aspirador e água. A higienização interna (evaporador) deve ser feita por técnico a cada 6 meses.</p>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Ar condicionado pode transmitir vírus?</h3>
    <p>O ar condicionado convencional (split) recircula o ar do ambiente — não aspira ar externo. Ele pode circular vírus que já estão no ambiente, mas não os introduz de fora. Ventilação adequada e filtros limpos reduzem esse risco.</p>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Qual a umidade ideal do ambiente com ar condicionado?</h3>
    <p>Entre 40% e 60% de umidade relativa. Abaixo de 30% causa ressecamento das mucosas. Acima de 70% favorece o crescimento de fungos. Um termohigrômetro (menos de R$ 50 em lojas online) ajuda a monitorar.</p>
  </BlogPostLayout>
);

export default BlogSaude;
