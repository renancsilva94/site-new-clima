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

export const BlogPMOCCondominio = () => (
  <BlogPostLayout tag="PMOC" title="PMOC para Condomínios em São Paulo: Obrigações do Síndico e Como Contratar" date="26 de Junho, 2026" author="Equipe Técnica New Clima">
    <p>O síndico de condomínio em São Paulo tem responsabilidade direta pelo cumprimento do PMOC nas áreas comuns. A falta do plano pode resultar em multas para o condomínio — e o síndico pode responder pessoalmente em casos de dano à saúde dos moradores ou funcionários.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Quais condomínios precisam de PMOC em SP?</h2>
    <p>Condomínios com sistema de ar condicionado nas <strong>áreas comuns</strong> com capacidade acima de 60.000 BTUs. Na prática, isso inclui:</p>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li>Condomínios comerciais com ar nas recepções, lobbies e salas de reunião</li>
      <li>Condomínios mistos (residencial + comercial) com ar nas áreas comerciais</li>
      <li>Condomínios residenciais com ar central na academia, salão de festas ou coworking</li>
      <li>Condomínios com sistema VRF ou ar central que sirva áreas comuns</li>
    </ul>
    <p>Apartamentos residenciais com split individual em cada unidade <strong>não precisam</strong> de PMOC — a responsabilidade é do morador, não do condomínio.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Responsabilidade do síndico no PMOC</h2>
    <p>O síndico, como representante legal do condomínio, é responsável por:</p>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li>Contratar empresa habilitada para elaborar e executar o PMOC</li>
      <li>Garantir que as manutenções sejam realizadas conforme o cronograma</li>
      <li>Manter a documentação disponível para fiscalização</li>
      <li>Comunicar a mudança de equipamentos para atualização do PMOC</li>
      <li>Responder pessoalmente em caso de irregularidade comprovada</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Como funciona o contrato de PMOC para condomínio?</h2>
    <ol className="list-decimal pl-6 space-y-3 my-4">
      <li><strong>Levantamento técnico:</strong> técnico visita o condomínio e cadastra todos os equipamentos das áreas comuns</li>
      <li><strong>Elaboração do plano:</strong> documento com cronograma, procedimentos e responsável técnico com ART</li>
      <li><strong>Aprovação em assembleia:</strong> recomendado formalizar a contratação em ata de assembleia</li>
      <li><strong>Execução:</strong> visitas periódicas conforme o cronograma — mensal, trimestral ou semestral</li>
      <li><strong>Relatórios:</strong> laudo técnico após cada visita, arquivado e disponível para síndico e moradores</li>
    </ol>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Quanto custa o PMOC para condomínio em SP?</h2>
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse text-sm">
        <thead><tr className="bg-primary text-white"><th className="p-3 text-left border border-primary">Porte do condomínio</th><th className="p-3 text-left border border-primary">Equipamentos</th><th className="p-3 text-left border border-primary">Custo mensal</th></tr></thead>
        <tbody>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Pequeno (academia + lobby)</td><td className="p-3 border border-slate-200">3 a 8 equipamentos</td><td className="p-3 border border-slate-200 font-bold text-primary">R$ 400 a R$ 800/mês</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Médio (academia + salão + coworking)</td><td className="p-3 border border-slate-200">8 a 20 equipamentos</td><td className="p-3 border border-slate-200 font-bold text-primary">R$ 800 a R$ 1.800/mês</td></tr>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Grande (múltiplas áreas comuns)</td><td className="p-3 border border-slate-200">Acima de 20 equipamentos</td><td className="p-3 border border-slate-200 font-bold text-primary">A partir de R$ 1.800/mês</td></tr>
        </tbody>
      </table>
    </div>
    <div className="bg-ice rounded-2xl p-6 my-8 border border-primary/10">
      <h3 className="text-lg font-bold text-primary mb-2">PMOC para o seu condomínio em SP</h3>
      <p className="text-slate-600 text-sm mb-4">Levantamento gratuito · Proposta para apresentar em assembleia · ART inclusa · Relatórios mensais</p>
      <a href="https://api.whatsapp.com/send/?phone=5511963462516&text=Olá!%20Sou%20síndico%20e%20preciso%20de%20PMOC%20para%20o%20meu%20condomínio%20em%20SP." rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-success text-white font-bold py-3 px-6 rounded-xl text-sm hover:-translate-y-0.5 transition-all">Solicitar Proposta</a>
    </div>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Perguntas frequentes</h2>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">O PMOC do condomínio precisa ser aprovado em assembleia?</h3>
    <p>Não é obrigatório por lei, mas é uma boa prática. Formalizar em ata protege o síndico de questionamentos futuros sobre a despesa e demonstra transparência na gestão.</p>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Quem paga o PMOC — o condomínio ou os moradores?</h3>
    <p>O PMOC das áreas comuns é despesa do condomínio — rateada entre os condôminos conforme a fração ideal, como qualquer outra despesa de manutenção.</p>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Se o condomínio não tem PMOC, o síndico pode ser demitido?</h3>
    <p>Sim. Descumprir obrigações legais é motivo para destituição do síndico em assembleia, além da responsabilidade civil e pessoal pelas multas aplicadas.</p>
  </BlogPostLayout>
);

export default BlogPMOCCondominio;
