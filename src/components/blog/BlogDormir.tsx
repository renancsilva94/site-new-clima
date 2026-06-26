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

export const BlogDormir = () => (
  <BlogPostLayout tag="Saúde" title="Dormir com Ar Condicionado Faz Mal? Temperatura Ideal e Cuidados" date="26 de Junho, 2026" author="Equipe Técnica New Clima">
    <p>Em São Paulo, onde as noites de verão ultrapassam os 28°C, dormir com ar condicionado é uma necessidade para muitas pessoas. Mas dormir com o aparelho ligado faz mal? <strong>A resposta é não — desde que você use corretamente</strong>.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Qual a temperatura ideal para dormir com ar condicionado?</h2>
    <p>A faixa ideal é entre <strong>20°C e 23°C</strong>. Estudos do sono mostram que o corpo precisa reduzir sua temperatura central para entrar em sono profundo — e um ambiente entre 20°C e 23°C facilita esse processo.</p>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li><strong>Abaixo de 18°C:</strong> pode causar hipotermia leve, dores musculares e piorar problemas respiratórios</li>
      <li><strong>Entre 20°C e 23°C:</strong> faixa ideal para adultos saudáveis</li>
      <li><strong>Entre 23°C e 25°C:</strong> recomendado para crianças, idosos e pessoas com problemas respiratórios</li>
      <li><strong>Acima de 26°C:</strong> o sono tende a ser mais leve e interrompido</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Como dormir com ar condicionado sem prejudicar a saúde?</h2>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li><strong>Use o modo Sleep:</strong> aumenta a temperatura gradualmente durante a madrugada, economizando energia e evitando que o ambiente fique frio demais</li>
      <li><strong>Direcione as aletas para o teto:</strong> nunca deixe o ar apontado diretamente para a cama</li>
      <li><strong>Mantenha os filtros limpos:</strong> filtros sujos espalham fungos e bactérias durante o sono</li>
      <li><strong>Use um copo d'água na mesa de cabeceira:</strong> combate o ressecamento da garganta</li>
      <li><strong>Mantenha uma fresta de janela:</strong> renova o ar sem comprometer o resfriamento</li>
      <li><strong>Cubra-se com um lençol leve:</strong> protege contra correntes de ar sem perder o conforto</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Problemas comuns de quem dorme com ar condicionado</h2>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li><strong>Nariz entupido de manhã:</strong> geralmente causado por filtros sujos ou temperatura muito baixa — não pelo ar condicionado em si</li>
      <li><strong>Garganta seca:</strong> ressecamento causado pela baixa umidade — solução: umidificador ou copo d'água</li>
      <li><strong>Dor no pescoço:</strong> corrente de ar direta na região — solução: redirecionar as aletas</li>
      <li><strong>Pele ressecada:</strong> umidade muito baixa no ambiente — solução: temperatura mais alta e planta no quarto</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Vale a pena deixar ligado a noite toda?</h2>
    <p>Sim, com o modo Sleep ativado. Os aparelhos Inverter modernos consumem entre 100W e 300W em modo de manutenção — comparável a uma lâmpada de LED. O gasto mensal para uma noite inteira com Inverter 12.000 BTUs fica em torno de R$ 50 a R$ 80.</p>
    <div className="bg-ice rounded-2xl p-6 my-8 border border-primary/10">
      <h3 className="text-lg font-bold text-primary mb-2">Ar condicionado com mau cheiro à noite? Hora de higienizar.</h3>
      <p className="text-slate-600 text-sm mb-4">Higienização profissional · Remove fungos e ácaros · Garantia de 90 dias</p>
      <a href="https://api.whatsapp.com/send/?phone=5511963462516&text=Olá!%20Meu%20ar%20condicionado%20está%20com%20mau%20cheiro%20e%20gostaria%20de%20uma%20higienização." rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-success text-white font-bold py-3 px-6 rounded-xl text-sm hover:-translate-y-0.5 transition-all">Agendar Higienização</a>
    </div>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Perguntas frequentes</h2>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Posso deixar o ar condicionado ligado enquanto durmo com a janela fechada?</h3>
    <p>Sim. O split recircula o ar do ambiente e não precisa de entrada de ar externo para funcionar. Janelas fechadas até melhoram a eficiência do equipamento.</p>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">É melhor desligar o ar condicionado antes de dormir?</h3>
    <p>Não. Desligar e religar gasta mais energia do que manter ligado em modo Sleep. O modo Sleep é projetado exatamente para uso noturno — mantém o conforto com menor consumo.</p>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Criança pode dormir com ar condicionado?</h3>
    <p>Sim, com temperatura entre 23°C e 25°C, aletas direcionadas para longe da cama e filtros sempre limpos. O modo Sleep também é recomendado para ambientes de crianças.</p>
  </BlogPostLayout>
);

export default BlogDormir;
