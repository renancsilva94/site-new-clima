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

export const BlogDesligaSozinho = () => (
  <BlogPostLayout tag="Problemas" title="Ar Condicionado Desliga Sozinho: 8 Causas e Como Resolver" date="26 de Junho, 2026" author="Equipe Técnica New Clima">
    <p>O ar condicionado ligar e desligar sozinho é um problema comum em São Paulo e pode ter diversas causas — da mais simples (filtro sujo) à mais grave (compressor com defeito). Entender a causa certa evita gastar com consertos desnecessários.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">As 8 causas mais comuns para o ar condicionado desligar sozinho</h2>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li><strong>1. Filtro entupido:</strong> o filtro sujo restringe o fluxo de ar, causando superaquecimento do compressor — o sistema de proteção desliga o equipamento automaticamente</li>
      <li><strong>2. Gás refrigerante baixo:</strong> sem gás suficiente, a pressão do sistema cai e o presostato de baixa pressão desliga o compressor</li>
      <li><strong>3. Condensadora bloqueada:</strong> se a unidade externa não tem ventilação adequada (muito próxima de paredes ou coberta), o compressor superaquece e desliga</li>
      <li><strong>4. Problema elétrico:</strong> tensão instável, disjuntor subdimensionado ou fiação com mau contato causam desligamentos intermitentes</li>
      <li><strong>5. Placa eletrônica com defeito:</strong> falha no controlador do sistema pode causar desligamentos aleatórios</li>
      <li><strong>6. Sensor de temperatura com defeito:</strong> o termistor com problema envia leituras erradas para a placa — o sistema interpreta que a temperatura foi atingida e desliga</li>
      <li><strong>7. Compressor superaquecido:</strong> compressor com desgaste ou com óleo vencido superaquece e desliga pelo termostato interno de proteção</li>
      <li><strong>8. Timer ativado acidentalmente:</strong> muitos aparelhos têm timer que pode ser ativado sem querer pelo controle remoto</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Como identificar a causa?</h2>
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse text-sm">
        <thead><tr className="bg-primary text-white"><th className="p-3 text-left border border-primary">Sintoma adicional</th><th className="p-3 text-left border border-primary">Causa provável</th></tr></thead>
        <tbody>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Desliga após 10-15 min, gerou pouco frio</td><td className="p-3 border border-slate-200">Filtro sujo ou gás baixo</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Condensadora muito quente ao toque</td><td className="p-3 border border-slate-200">Ventilação insuficiente ou compressor com defeito</td></tr>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Disjuntor cai junto</td><td className="p-3 border border-slate-200">Problema elétrico — curto ou sobrecarga</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Desliga em horário fixo</td><td className="p-3 border border-slate-200">Timer ativado — verifique o controle remoto</td></tr>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Código de erro no display</td><td className="p-3 border border-slate-200">Falha específica — anote o código e chame técnico</td></tr>
        </tbody>
      </table>
    </div>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">O que fazer antes de chamar o técnico</h2>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li>Limpe o filtro — retire, lave com água e deixe secar completamente antes de recolocar</li>
      <li>Verifique se a condensadora externa está livre de obstáculos e com ventilação adequada</li>
      <li>Confirme se o timer não está ativado no controle remoto</li>
      <li>Verifique o disjuntor dedicado — se estiver esquentando, pode estar subdimensionado</li>
    </ul>
    <p>Se o problema persistir após essas verificações, é hora de chamar um técnico. Continuar forçando o equipamento pode transformar um conserto simples em substituição de compressor.</p>
    <div className="bg-ice rounded-2xl p-6 my-8 border border-primary/10">
      <h3 className="text-lg font-bold text-primary mb-2">Diagnóstico gratuito em São Paulo</h3>
      <p className="text-slate-600 text-sm mb-4">Atendemos em até 2 horas · Diagnóstico sem custo · Orçamento antes de qualquer serviço</p>
      <a href="https://api.whatsapp.com/send/?phone=5511963462516&text=Olá!%20Meu%20ar%20condicionado%20está%20desligando%20sozinho%20e%20preciso%20de%20diagnóstico." rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-success text-white font-bold py-3 px-6 rounded-xl text-sm hover:-translate-y-0.5 transition-all">Diagnóstico Gratuito</a>
    </div>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Perguntas frequentes</h2>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Ar condicionado desligando sozinho pode pegar fogo?</h3>
    <p>Em casos de problema elétrico (curto na placa ou fiação), existe risco. Se o desligamento vier acompanhado de cheiro de queimado, desligue imediatamente na chave geral e chame um técnico.</p>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Quanto custa consertar ar condicionado que desliga sozinho?</h3>
    <p>Depende da causa. Limpeza de filtro: R$ 0 (pode fazer em casa). Recarga de gás: R$ 200 a R$ 400. Troca de sensor: R$ 150 a R$ 350. Troca de placa: R$ 400 a R$ 1.200. Troca de compressor: R$ 800 a R$ 2.500.</p>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Posso usar o ar condicionado enquanto ele desliga sozinho?</h3>
    <p>Não recomendamos. Continuar usando enquanto o problema persiste pode agravar a situação — especialmente se a causa for superaquecimento do compressor ou problema elétrico.</p>
  </BlogPostLayout>
);

export default BlogDesligaSozinho;
