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

export const BlogPMOC = () => (
  <BlogPostLayout tag="PMOC" title="O Que é PMOC? Guia Completo Sobre o Plano de Manutenção de Ar Condicionado" date="26 de Junho, 2026" author="Equipe Técnica New Clima">
    <p>PMOC é a sigla para <strong>Plano de Manutenção, Operação e Controle</strong> — um documento técnico obrigatório por lei federal que estabelece os procedimentos de manutenção para sistemas de ar condicionado em uso público ou coletivo. Se você tem uma empresa, clínica ou condomínio em São Paulo com ar condicionado, provavelmente precisa ter um PMOC em vigor.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">O que é o PMOC na prática?</h2>
    <p>O PMOC é um documento que define:</p>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li>Quais equipamentos de ar condicionado existem no estabelecimento</li>
      <li>Quais procedimentos de manutenção devem ser realizados em cada um</li>
      <li>Com que frequência cada manutenção deve ocorrer</li>
      <li>Quem é o responsável técnico (engenheiro com ART)</li>
      <li>Registro de todas as manutenções realizadas</li>
    </ul>
    <p>Na prática, o PMOC é a "agenda de manutenção" do seu sistema de ar condicionado — com a diferença de que é um documento legal, assinado por engenheiro, e que comprova para a Vigilância Sanitária que os equipamentos estão sendo mantidos adequadamente.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Qual a lei que exige o PMOC?</h2>
    <p>O PMOC é exigido por:</p>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li><strong>Lei Federal 13.589/18</strong> — institui a obrigatoriedade para todos os sistemas de ar condicionado de uso público ou coletivo</li>
      <li><strong>Portaria MS 3.523/98</strong> — do Ministério da Saúde, que estabelece os requisitos técnicos mínimos</li>
      <li><strong>Resolução RE 9/2003 da ANVISA</strong> — define os padrões de qualidade do ar interior</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Quem precisa ter PMOC?</h2>
    <p>Todo estabelecimento com sistema de ar condicionado de <strong>uso público ou coletivo com capacidade acima de 60.000 BTUs</strong>. Exemplos práticos em São Paulo:</p>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li>Escritórios e empresas comerciais</li>
      <li>Clínicas médicas e odontológicas</li>
      <li>Restaurantes, hotéis e bares</li>
      <li>Farmácias e drogarias</li>
      <li>Academias, escolas e creches</li>
      <li>Condomínios com ar nas áreas comuns</li>
      <li>Shopping centers e estabelecimentos de grande porte</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">O que diferencia um PMOC completo de um incompleto?</h2>
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse text-sm">
        <thead><tr className="bg-primary text-white"><th className="p-3 text-left border border-primary">Item</th><th className="p-3 text-left border border-primary">PMOC completo</th><th className="p-3 text-left border border-primary">PMOC incompleto</th></tr></thead>
        <tbody>
          <tr className="bg-white"><td className="p-3 border border-slate-200">ART do engenheiro</td><td className="p-3 border border-slate-200 font-bold text-success">✅ Inclusa</td><td className="p-3 border border-slate-200 font-bold text-red-600">❌ Ausente</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Cadastro dos equipamentos</td><td className="p-3 border border-slate-200 font-bold text-success">✅ Todos listados</td><td className="p-3 border border-slate-200 font-bold text-red-600">❌ Parcial</td></tr>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Cronograma de manutenções</td><td className="p-3 border border-slate-200 font-bold text-success">✅ Com datas e frequências</td><td className="p-3 border border-slate-200 font-bold text-red-600">❌ Genérico</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Registros de execução</td><td className="p-3 border border-slate-200 font-bold text-success">✅ Laudo após cada visita</td><td className="p-3 border border-slate-200 font-bold text-red-600">❌ Inexistente</td></tr>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Validade perante a VISA-SP</td><td className="p-3 border border-slate-200 font-bold text-success">✅ Aceito na fiscalização</td><td className="p-3 border border-slate-200 font-bold text-red-600">❌ Pode gerar multa</td></tr>
        </tbody>
      </table>
    </div>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Quanto custa elaborar o PMOC em SP?</h2>
    <p>O custo varia conforme o número de equipamentos e se inclui apenas a elaboração do documento ou também a execução das manutenções:</p>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li>Elaboração do documento (sem execução): R$ 500 a R$ 1.500 (taxa única)</li>
      <li>Contrato completo (documento + manutenções): R$ 350 a R$ 4.500/mês</li>
    </ul>
    <div className="bg-ice rounded-2xl p-6 my-8 border border-primary/10">
      <h3 className="text-lg font-bold text-primary mb-2">Precisa de PMOC para sua empresa em SP?</h3>
      <p className="text-slate-600 text-sm mb-4">Levantamento gratuito · Proposta no mesmo dia · ART inclusa · Documentação completa</p>
      <a href="https://api.whatsapp.com/send/?phone=5511963462516&text=Olá!%20Preciso%20elaborar%20o%20PMOC%20para%20minha%20empresa%20em%20SP." rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-success text-white font-bold py-3 px-6 rounded-xl text-sm hover:-translate-y-0.5 transition-all">Solicitar Proposta</a>
    </div>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Perguntas frequentes</h2>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">PMOC e manutenção preventiva são a mesma coisa?</h3>
    <p>Não. O PMOC é o plano documentado que define o que deve ser feito. A manutenção preventiva é a execução prática do plano. Os dois são necessários — ter apenas o documento sem executar as manutenções também configura irregularidade.</p>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Por quanto tempo devo guardar o PMOC?</h3>
    <p>A Portaria MS 3.523/98 recomenda manter os registros por no mínimo 5 anos. Em caso de fiscalização ou processo administrativo, ter o histórico completo é fundamental.</p>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Posso fazer o PMOC eu mesmo?</h3>
    <p>Não. O PMOC exige a assinatura de um engenheiro mecânico ou habilitado com ART registrada no CREA. A elaboração por não-habilitado não tem validade legal e não será aceita pela Vigilância Sanitária.</p>
  </BlogPostLayout>
);

export default BlogPMOC;
