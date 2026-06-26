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

export const BlogObraLimpa = () => (
  <BlogPostLayout tag="Instalação" title="Instalação de Ar Condicionado com Obra Limpa: O Que É e Por Que Importa" date="26 de Junho, 2026" author="Equipe Técnica New Clima">
    <p>Obra limpa não é um diferencial de luxo — é o padrão mínimo que qualquer instalação de ar condicionado deveria seguir. Em São Paulo, onde a maioria das instalações acontece em apartamentos com regras rígidas de condomínio, a obra limpa é muitas vezes a condição para que o serviço seja feito.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">O que é obra limpa na instalação de ar condicionado?</h2>
    <p>Obra limpa é o conjunto de práticas que garantem que a instalação do ar condicionado seja feita sem danificar o imóvel, sem sujar as áreas comuns e sem deixar entulho. Na prática, inclui:</p>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li>Proteção do piso e móveis com lona antes de qualquer perfuração</li>
      <li>Uso de aspirador industrial durante as perfurações para capturar pó e resíduos</li>
      <li>Infraestrutura embutida na parede sempre que possível</li>
      <li>Acabamento nas saídas de tubulação com passa-fio ou acabamento de gesso</li>
      <li>Proteção de corredores e elevadores durante o transporte de material</li>
      <li>Remoção completa de entulho, embalagens e resíduos ao término</li>
      <li>Limpeza final do ambiente com pano úmido</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Por que obra limpa é essencial em apartamentos de SP?</h2>
    <p>Em São Paulo, a maioria dos condomínios tem regras rígidas sobre obras:</p>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li>Horário restrito (geralmente 8h às 17h em dias úteis)</li>
      <li>Proibição de sujeira nas áreas comuns</li>
      <li>Responsabilidade do morador por danos causados durante a obra</li>
      <li>Alguns síndicos pedem declaração de responsabilidade da empresa</li>
    </ul>
    <p>Uma instalação com sujeira excessiva pode resultar em advertência ou multa do condomínio para o morador — e em má reputação para a empresa instaladora.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Infraestrutura aparente x embutida</h2>
    <p><strong>Infraestrutura aparente:</strong> a tubulação de cobre e os cabos ficam à vista, protegidos por canaletas plásticas. É mais rápida e barata, mas esteticamente menos elegante.</p>
    <p><strong>Infraestrutura embutida:</strong> a tubulação passa dentro da parede — o resultado é mais limpo visualmente, sem canaletas aparentes. Exige mais trabalho e tempo, mas é o padrão em apartamentos novos e em reformas planejadas.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Como identificar uma empresa que faz obra limpa?</h2>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li>Pergunta sobre as regras do condomínio antes de começar</li>
      <li>Chega com equipamentos de proteção (lona, aspirador industrial)</li>
      <li>Apresenta os materiais que serão usados antes de começar</li>
      <li>Não cobra extra por limpeza — já está incluso no preço</li>
      <li>Tem avaliações positivas no Google mencionando obra limpa</li>
    </ul>
    <div className="bg-ice rounded-2xl p-6 my-8 border border-primary/10">
      <h3 className="text-lg font-bold text-primary mb-2">Instalação com obra limpa garantida em SP</h3>
      <p className="text-slate-600 text-sm mb-4">Aprovada pelo síndico · Sem sujeira · Sem danos ao imóvel · Garantia de 1 ano por escrito</p>
      <a href="https://api.whatsapp.com/send/?phone=5511963462516&text=Olá!%20Preciso%20de%20instalação%20de%20ar%20condicionado%20com%20obra%20limpa%20no%20meu%20apartamento." rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-success text-white font-bold py-3 px-6 rounded-xl text-sm hover:-translate-y-0.5 transition-all">Solicitar Instalação</a>
    </div>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Perguntas frequentes</h2>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Obra limpa custa mais caro?</h3>
    <p>Não necessariamente. A New Clima inclui obra limpa no preço padrão de todas as instalações — não é cobrado como adicional. Desconfie de empresas que cobram separado pela "proteção do imóvel".</p>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Preciso avisar o síndico antes da instalação?</h3>
    <p>Sim. A maioria dos condomínios exige comunicação prévia de obra — mesmo que seja apenas para instalar um ar condicionado. A New Clima orienta sobre os documentos necessários e, se pedido, emite declaração de responsabilidade técnica.</p>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Quanto tempo dura a instalação com obra limpa?</h3>
    <p>A instalação com obra limpa leva um pouco mais de tempo do que uma instalação rápida — geralmente 30 a 60 minutos a mais. Mas o resultado final não tem sujeira e não gera problemas com o condomínio.</p>
  </BlogPostLayout>
);

export default BlogObraLimpa;
