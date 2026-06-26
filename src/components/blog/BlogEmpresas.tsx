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

export const BlogEmpresas = () => (
  <BlogPostLayout tag="Empresarial" title="Ar Condicionado para Empresas em SP: VRF, Cassete e PMOC — Guia Completo" date="26 de Junho, 2026" author="Equipe Técnica New Clima">
    <p>Escolher o sistema de ar condicionado para uma empresa em São Paulo envolve variáveis que não existem na instalação residencial: capacidade para ambientes maiores, eficiência energética em uso contínuo, manutenção com o mínimo de interrupção das atividades e cumprimento do PMOC.</p>
    <p>Neste guia, explicamos os principais sistemas comerciais e como a New Clima atende empresas em São Paulo e ABC.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Principais sistemas de ar condicionado para empresas</h2>
    <h3 className="text-lg font-bold text-slate-800 mt-4 mb-2">Multi Split comercial</h3>
    <p>Indicado para escritórios pequenos e médios (até 300m²). Uma condensadora externa atende múltiplos ambientes. Instalação mais simples e custo inicial menor.</p>
    <h3 className="text-lg font-bold text-slate-800 mt-4 mb-2">VRF / Mini VRF (Volume de Refrigerante Variável)</h3>
    <p>Ideal para empresas acima de 300m² ou com múltiplos andares. Sistema central com condensadora(s) externa(s) de alta capacidade e múltiplas unidades internas (fan coils). Altamente eficiente, controle individual por zona e manutenção centralizada.</p>
    <h3 className="text-lg font-bold text-slate-800 mt-4 mb-2">Cassete</h3>
    <p>Unidade interna instalada no teto, com distribuição de ar em 4 direções. Ideal para salas de reunião, lobbies e open spaces. Estética mais profissional e distribuição de ar mais uniforme.</p>
    <h3 className="text-lg font-bold text-slate-800 mt-4 mb-2">Piso-Teto</h3>
    <p>Unidade versátil que pode ser instalada no piso ou no teto. Indicada para salas com pé direito alto ou locais sem forro para cassete.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Comparativo por tamanho de empresa</h2>
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse text-sm">
        <thead><tr className="bg-primary text-white"><th className="p-3 text-left border border-primary">Porte</th><th className="p-3 text-left border border-primary">Área</th><th className="p-3 text-left border border-primary">Sistema indicado</th></tr></thead>
        <tbody>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Pequena empresa / sala comercial</td><td className="p-3 border border-slate-200">Até 100m²</td><td className="p-3 border border-slate-200">Multi Split ou splits individuais</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Empresa média / escritório</td><td className="p-3 border border-slate-200">100m² a 300m²</td><td className="p-3 border border-slate-200">Multi Split comercial ou Mini VRF</td></tr>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Empresa grande / open space</td><td className="p-3 border border-slate-200">300m² a 1.000m²</td><td className="p-3 border border-slate-200">VRF + Cassete</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Corporativo / multi-andar</td><td className="p-3 border border-slate-200">Acima de 1.000m²</td><td className="p-3 border border-slate-200">VRF com múltiplas condensadoras</td></tr>
        </tbody>
      </table>
    </div>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">PMOC: obrigação para todas as empresas</h2>
    <p>Toda empresa com sistema de ar condicionado acima de 60.000 BTUs de uso coletivo é obrigada a ter o PMOC. A New Clima elabora e executa o PMOC com ART inclusa e documentação completa para a Vigilância Sanitária de SP.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Contrato de manutenção para empresas em SP</h2>
    <p>A New Clima oferece contratos de manutenção personalizados para empresas, incluindo:</p>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li>Visitas preventivas mensais ou trimestrais</li>
      <li>Atendimento de emergência com SLA definido em contrato</li>
      <li>Relatórios técnicos após cada visita</li>
      <li>PMOC incluso com ART</li>
      <li>Desconto em peças e serviços corretivos</li>
    </ul>
    <div className="bg-ice rounded-2xl p-6 my-8 border border-primary/10">
      <h3 className="text-lg font-bold text-primary mb-2">Solicite uma proposta para sua empresa em SP</h3>
      <p className="text-slate-600 text-sm mb-4">Levantamento gratuito · Proposta personalizada · PMOC incluso · Contrato com SLA</p>
      <a href="https://api.whatsapp.com/send/?phone=5511963462516&text=Olá!%20Preciso%20de%20uma%20proposta%20de%20manutenção%20de%20ar%20condicionado%20para%20minha%20empresa%20em%20SP." rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-success text-white font-bold py-3 px-6 rounded-xl text-sm hover:-translate-y-0.5 transition-all">Solicitar Proposta Empresarial</a>
    </div>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Perguntas frequentes</h2>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">VRF vale a pena para empresas pequenas?</h3>
    <p>Para empresas com menos de 200m², o Multi Split geralmente é mais custo-eficiente. O VRF se justifica a partir de 300m² ou quando há necessidade de controle individual por zona e maior eficiência energética em uso contínuo.</p>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">A manutenção pode ser feita fora do horário comercial?</h3>
    <p>Sim. A New Clima oferece agendamento em horários que minimizam o impacto nas atividades da empresa — incluindo fins de semana e períodos de baixa demanda operacional.</p>
  </BlogPostLayout>
);

export default BlogEmpresas;
