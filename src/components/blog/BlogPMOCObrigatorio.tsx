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

export const BlogPMOCObrigatorio = () => (
  <BlogPostLayout tag="PMOC" title="PMOC Obrigatório em São Paulo: Quem Deve Ter, Prazos e Como Regularizar" date="26 de Junho, 2026" author="Equipe Técnica New Clima">
    <p>O PMOC — Plano de Manutenção, Operação e Controle — é obrigatório por lei federal desde 1998 e tem fiscalização cada vez mais rigorosa em São Paulo. Empresas, condomínios e clínicas que não têm o plano em vigor podem ser multadas em até R$ 1,5 milhão pela Vigilância Sanitária.</p>
    <p>Neste guia explicamos quem é obrigado, quais são os prazos e como regularizar a situação da sua empresa em SP.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Qual a lei que exige o PMOC?</h2>
    <p>O PMOC é regulamentado por duas normas principais:</p>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li><strong>Lei Federal 13.589/18:</strong> institui a obrigatoriedade do PMOC para todos os sistemas de ar condicionado de uso público ou coletivo</li>
      <li><strong>Portaria MS 3.523/98:</strong> estabelece os requisitos técnicos mínimos para a qualidade do ar em ambientes climatizados</li>
      <li><strong>Resolução RE 9/2003 da ANVISA:</strong> define os padrões de qualidade do ar interior</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Quem é obrigado a ter PMOC em SP?</h2>
    <p>Todo estabelecimento com sistema de ar condicionado de <strong>uso público ou coletivo</strong> com capacidade acima de 60.000 BTUs. Na prática, isso inclui:</p>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li>Empresas e escritórios com ar condicionado central ou múltiplos splits</li>
      <li>Condomínios comerciais e mistos com ar nas áreas comuns</li>
      <li>Clínicas médicas, odontológicas e laboratórios</li>
      <li>Restaurantes, bares, hotéis e pousadas</li>
      <li>Farmácias e drogarias</li>
      <li>Academias, escolas e creches</li>
      <li>Shopping centers e estabelecimentos de grande porte</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">O que deve conter o PMOC?</h2>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li>Identificação do responsável técnico com ART (Anotação de Responsabilidade Técnica)</li>
      <li>Descrição de todos os equipamentos do sistema</li>
      <li>Cronograma de manutenções preventivas</li>
      <li>Procedimentos de limpeza e higienização</li>
      <li>Registro de todas as manutenções realizadas</li>
      <li>Laudo de qualidade do ar (em alguns casos exigido pela ANVISA)</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Quais são as multas por não ter PMOC em SP?</h2>
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse text-sm">
        <thead><tr className="bg-primary text-white"><th className="p-3 text-left border border-primary">Infração</th><th className="p-3 text-left border border-primary">Penalidade</th></tr></thead>
        <tbody>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Ausência do PMOC</td><td className="p-3 border border-slate-200 font-bold text-red-600">Multa de R$ 2.000 a R$ 75.000</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">PMOC desatualizado ou incompleto</td><td className="p-3 border border-slate-200 font-bold text-red-600">Multa de R$ 2.000 a R$ 75.000</td></tr>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Reincidência</td><td className="p-3 border border-slate-200 font-bold text-red-600">Multa em dobro</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Risco à saúde pública</td><td className="p-3 border border-slate-200 font-bold text-red-600">Até R$ 1.500.000 + interdição</td></tr>
        </tbody>
      </table>
    </div>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Como regularizar o PMOC da sua empresa em SP?</h2>
    <ol className="list-decimal pl-6 space-y-3 my-4">
      <li><strong>Contrate uma empresa especializada:</strong> deve ter engenheiro responsável com ART registrada no CREA</li>
      <li><strong>Levantamento técnico:</strong> técnico visita o estabelecimento e cadastra todos os equipamentos</li>
      <li><strong>Elaboração do plano:</strong> documento com cronograma, procedimentos e responsabilidades</li>
      <li><strong>Execução das manutenções:</strong> visitas periódicas conforme o cronograma do plano</li>
      <li><strong>Registro e arquivo:</strong> manter toda a documentação disponível para apresentar à Vigilância Sanitária</li>
    </ol>
    <div className="bg-ice rounded-2xl p-6 my-8 border border-primary/10">
      <h3 className="text-lg font-bold text-primary mb-2">Regularize o PMOC da sua empresa agora</h3>
      <p className="text-slate-600 text-sm mb-4">Levantamento gratuito · Proposta no mesmo dia · ART inclusa · Documentação completa para a Vigilância Sanitária</p>
      <a href="https://api.whatsapp.com/send/?phone=5511963462516&text=Olá!%20Preciso%20regularizar%20o%20PMOC%20da%20minha%20empresa%20em%20SP." rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-success text-white font-bold py-3 px-6 rounded-xl text-sm hover:-translate-y-0.5 transition-all">Falar com Especialista</a>
    </div>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Perguntas frequentes</h2>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Com que frequência o PMOC deve ser atualizado?</h3>
    <p>O PMOC deve ser atualizado sempre que houver mudança nos equipamentos (adição, remoção ou substituição) ou quando o cronograma de manutenções for alterado. Recomendamos revisão anual do documento.</p>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">A Vigilância Sanitária avisa antes de fiscalizar?</h3>
    <p>Não necessariamente. As fiscalizações podem ser programadas ou por denúncia. Estar regularizado a qualquer momento é a única garantia de evitar multas.</p>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">PMOC e manutenção preventiva são a mesma coisa?</h3>
    <p>Não. O PMOC é o plano documentado. A manutenção preventiva é a execução prática do plano. Os dois são obrigatórios e complementares — ter o documento sem executar as manutenções também configura irregularidade.</p>
  </BlogPostLayout>
);

export default BlogPMOCObrigatorio;
