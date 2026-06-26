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

export const BlogNaoLiga = () => (
  <BlogPostLayout tag="Problemas" title="Ar Condicionado Não Liga: O Que Verificar Antes de Chamar o Técnico" date="26 de Junho, 2026" author="Equipe Técnica New Clima">
    <p>Ar condicionado que não liga pode ter desde uma causa simples — que você mesmo resolve em minutos — até um defeito elétrico que exige técnico especializado. Siga este guia antes de chamar a assistência.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Verificações básicas (faça primeiro)</h2>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li><strong>Verifique o disjuntor:</strong> vá ao quadro elétrico e confirme se o disjuntor do ar condicionado não desarmou. Se estiver desarmado, ligue novamente — se cair de novo, é problema elétrico.</li>
      <li><strong>Verifique a tomada:</strong> alguns aparelhos têm tomada própria — confirme se está bem encaixada e se tem energia.</li>
      <li><strong>Baterias do controle remoto:</strong> troque as pilhas do controle e tente novamente. Parece óbvio, mas é causa frequente.</li>
      <li><strong>Modo de operação:</strong> confirme se o controle está no modo correto (Cool, não Fan ou Dry).</li>
      <li><strong>Timer ativado:</strong> verifique se não há timer programado impedindo a partida.</li>
      <li><strong>Temperatura configurada:</strong> se configurado acima da temperatura ambiente, o compressor não liga — é comportamento normal.</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Causas técnicas que exigem técnico</h2>
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse text-sm">
        <thead><tr className="bg-primary text-white"><th className="p-3 text-left border border-primary">Causa</th><th className="p-3 text-left border border-primary">Sintoma adicional</th><th className="p-3 text-left border border-primary">Custo estimado</th></tr></thead>
        <tbody>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Capacitor de partida com defeito</td><td className="p-3 border border-slate-200">Zumbido mas não liga</td><td className="p-3 border border-slate-200 font-bold text-success">R$ 100 a R$ 250</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Placa eletrônica com defeito</td><td className="p-3 border border-slate-200">Nenhuma reação ao comando</td><td className="p-3 border border-slate-200 font-bold text-primary">R$ 400 a R$ 1.200</td></tr>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Fusível queimado</td><td className="p-3 border border-slate-200">Sem nenhuma indicação</td><td className="p-3 border border-slate-200 font-bold text-success">R$ 50 a R$ 150</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Compressor travado</td><td className="p-3 border border-slate-200">Disjuntor cai ao ligar</td><td className="p-3 border border-slate-200 font-bold text-red-600">R$ 800 a R$ 2.500</td></tr>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Problema na fiação</td><td className="p-3 border border-slate-200">Cheiro de queimado</td><td className="p-3 border border-slate-200 font-bold text-primary">R$ 150 a R$ 400</td></tr>
        </tbody>
      </table>
    </div>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Disjuntor cai toda vez que liga — o que fazer</h2>
    <p>Se o disjuntor desarma toda vez que você tenta ligar o ar condicionado, pode ser curto no compressor, compressor travado ou disjuntor subdimensionado. <strong>Não force religar várias vezes</strong> — isso pode queimar o compressor ou a fiação. Chame um técnico.</p>
    <div className="bg-ice rounded-2xl p-6 my-8 border border-primary/10">
      <h3 className="text-lg font-bold text-primary mb-2">Ar condicionado não liga em SP?</h3>
      <p className="text-slate-600 text-sm mb-4">Diagnóstico gratuito · Atendimento em até 2h · Conserto no mesmo dia · Garantia 90 dias</p>
      <a href="https://api.whatsapp.com/send/?phone=5511963462516&text=Olá!%20Meu%20ar%20condicionado%20não%20liga%20e%20preciso%20de%20diagnóstico." rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-success text-white font-bold py-3 px-6 rounded-xl text-sm hover:-translate-y-0.5 transition-all">Diagnóstico Gratuito</a>
    </div>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Perguntas frequentes</h2>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Ar condicionado não liga após queda de energia — é normal?</h3>
    <p>Sim. Muitos aparelhos têm proteção que impede a partida automática após queda de energia. Aguarde 3 minutos e tente ligar novamente pelo controle remoto.</p>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Posso resetar o ar condicionado?</h3>
    <p>Sim — desligue o disjuntor por 5 minutos e religue. Alguns aparelhos têm botão de reset na unidade interna. Consulte o manual da sua marca.</p>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Cheiro de queimado ao tentar ligar — o que fazer?</h3>
    <p>Desligue imediatamente na chave geral. Cheiro de queimado indica problema elétrico — pode ser risco de incêndio. Chame técnico antes de tentar ligar novamente.</p>
  </BlogPostLayout>
);

export default BlogNaoLiga;
