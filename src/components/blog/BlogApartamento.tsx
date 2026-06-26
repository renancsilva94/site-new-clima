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

export const BlogApartamento = () => (
  <BlogPostLayout tag="Instalação" title="Instalação de Ar Condicionado em Apartamento em SP: Tudo o Que Você Precisa Saber" date="26 de Junho, 2026" author="Equipe Técnica New Clima">
    <p>Instalar ar condicionado em apartamento em São Paulo tem particularidades que não existem em casas. Normas de condomínio, restrições de fachada e regras de obra tornam o processo mais delicado — e escolher uma empresa sem experiência pode gerar problemas com o síndico e até multas do condomínio.</p>
    <p>Neste guia, explicamos tudo o que você precisa saber antes de instalar ar condicionado no seu apartamento em SP.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">O que verificar antes de instalar em apartamento</h2>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li><strong>Regulamento interno do condomínio:</strong> alguns proíbem condensadoras na fachada frontal ou exigem aprovação prévia do síndico</li>
      <li><strong>Varanda técnica:</strong> verifique se o prédio tem área específica para condensadoras e quais são as dimensões permitidas</li>
      <li><strong>Circuito elétrico:</strong> o apartamento precisa ter ponto elétrico dedicado com disjuntor dimensionado para o equipamento</li>
      <li><strong>Impermeabilização:</strong> furos na laje ou paredes externas exigem impermeabilização adequada para evitar infiltrações</li>
      <li><strong>Vizinho de baixo:</strong> a instalação do dreno deve direcionar a água corretamente para evitar gotejamento no apartamento do andar inferior</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Split ou Multi Split para apartamento?</h2>
    <p>Para apartamentos com restrição de fachada — que é a maioria dos condomínios novos em SP — o <strong>Multi Split</strong> é a solução mais indicada. Uma única condensadora na varanda técnica atende todos os cômodos, sem impactar a fachada.</p>
    <p>Para apartamentos que permitem múltiplas condensadoras ou onde você quer climatizar apenas um cômodo, o <strong>Split individual</strong> é mais econômico e simples.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Onde instalar a condensadora em apartamento?</h2>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li><strong>Varanda técnica:</strong> local ideal — arejado, sem exposição solar direta e aprovado pela maioria dos condomínios</li>
      <li><strong>Varanda da sala ou quarto:</strong> possível se o condomínio permitir e houver espaço adequado</li>
      <li><strong>Shaft ou duto técnico:</strong> em alguns prédios existe espaço específico para condensadoras — verifique com a administradora</li>
    </ul>
    <p><strong>Evite:</strong> instalar a condensadora em locais sem ventilação adequada, muito próximo de janelas de vizinhos (barulho e calor) ou em posições que comprometam a fachada sem aprovação do condomínio.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Obra limpa: o que significa na prática?</h2>
    <p>Obra limpa não é apenas uma promessa — é um processo que inclui:</p>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li>Proteção do piso e móveis com lona antes de qualquer perfuração</li>
      <li>Uso de aspirador industrial durante as perfurações para capturar o pó</li>
      <li>Infraestrutura embutida na parede sempre que possível</li>
      <li>Acabamento nas saídas de tubulação com passa-fio ou saia</li>
      <li>Remoção de todo o entulho e limpeza completa ao término</li>
    </ul>
    <p>A New Clima garante obra limpa em todos os apartamentos de São Paulo — aprovada pelo síndico e sem reclamações dos vizinhos.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Quanto custa instalar em apartamento em SP?</h2>
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse text-sm">
        <thead><tr className="bg-primary text-white"><th className="p-3 text-left border border-primary">Tipo</th><th className="p-3 text-left border border-primary">Custo de instalação</th><th className="p-3 text-left border border-primary">Observação</th></tr></thead>
        <tbody>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Split simples (1 cômodo)</td><td className="p-3 border border-slate-200 font-bold text-primary">R$ 350 a R$ 700</td><td className="p-3 border border-slate-200">Infraestrutura aparente</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Split com infra embutida</td><td className="p-3 border border-slate-200 font-bold text-primary">R$ 600 a R$ 1.200</td><td className="p-3 border border-slate-200">Tubulação dentro da parede</td></tr>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Multi Split 2 cômodos</td><td className="p-3 border border-slate-200 font-bold text-primary">R$ 900 a R$ 1.800</td><td className="p-3 border border-slate-200">1 condensadora externa</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Multi Split 3 cômodos</td><td className="p-3 border border-slate-200 font-bold text-primary">R$ 1.400 a R$ 2.500</td><td className="p-3 border border-slate-200">Ideal para aptos 2/3 quartos</td></tr>
        </tbody>
      </table>
    </div>
    <div className="bg-ice rounded-2xl p-6 my-8 border border-primary/10">
      <h3 className="text-lg font-bold text-primary mb-2">Instale com quem conhece os condomínios de SP</h3>
      <p className="text-slate-600 text-sm mb-4">Obra limpa · Aprovada pelo síndico · Visita gratuita · Garantia de 1 ano</p>
      <a href="https://api.whatsapp.com/send/?phone=5511963462516&text=Olá!%20Quero%20instalar%20ar%20condicionado%20no%20meu%20apartamento." rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-success text-white font-bold py-3 px-6 rounded-xl text-sm hover:-translate-y-0.5 transition-all">Solicitar Orçamento</a>
    </div>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Perguntas frequentes</h2>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Preciso de autorização do condomínio para instalar?</h3>
    <p>Sim. A maioria dos condomínios exige comunicação prévia ou aprovação formal. A New Clima orienta sobre os documentos necessários e, se solicitado, emite declaração de responsabilidade técnica para o condomínio.</p>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">E se o condomínio não permitir condensadora na fachada?</h3>
    <p>Existem alternativas: condensadora na varanda técnica, shaft ou duto interno. Em último caso, alguns modelos de cassete ou piso-teto não precisam de condensadora externa. Avaliamos a melhor solução na visita técnica gratuita.</p>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">A instalação pode causar infiltração no apartamento de baixo?</h3>
    <p>Não, desde que o dreno seja instalado corretamente. A tubulação de drenagem deve ser direcionada para o ralo mais próximo ou para fora do prédio conforme as normas do condomínio. A New Clima garante instalação de dreno sem vazamentos.</p>
  </BlogPostLayout>
);

export default BlogApartamento;
