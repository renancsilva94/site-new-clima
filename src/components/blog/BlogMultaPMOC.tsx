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

export const BlogMultaPMOC = () => (
  <BlogPostLayout tag="PMOC" title="Multa por Falta de PMOC em SP: Valores, Como Evitar e O Que Fazer se for Autuado" date="26 de Junho, 2026" author="Equipe Técnica New Clima">
    <p>A falta de PMOC em São Paulo pode resultar em multas que vão de <strong>R$ 2.000 a R$ 1,5 milhão</strong>. Com a Vigilância Sanitária intensificando as fiscalizações desde 2023, estar regularizado deixou de ser opcional — é uma necessidade real para qualquer negócio com ar condicionado em SP.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Quais são os valores das multas por PMOC irregular em SP?</h2>
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse text-sm">
        <thead><tr className="bg-primary text-white"><th className="p-3 text-left border border-primary">Infração</th><th className="p-3 text-left border border-primary">Base legal</th><th className="p-3 text-left border border-primary">Penalidade</th></tr></thead>
        <tbody>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Ausência do PMOC</td><td className="p-3 border border-slate-200">Lei 13.589/18</td><td className="p-3 border border-slate-200 font-bold text-red-600">R$ 2.000 a R$ 75.000</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">PMOC sem ART do responsável técnico</td><td className="p-3 border border-slate-200">Portaria MS 3.523/98</td><td className="p-3 border border-slate-200 font-bold text-red-600">R$ 2.000 a R$ 75.000</td></tr>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Manutenções não realizadas conforme o plano</td><td className="p-3 border border-slate-200">RE ANVISA 9/2003</td><td className="p-3 border border-slate-200 font-bold text-red-600">R$ 2.000 a R$ 75.000</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Reincidência</td><td className="p-3 border border-slate-200">Lei 6.437/77</td><td className="p-3 border border-slate-200 font-bold text-red-600">Multa em dobro</td></tr>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Risco comprovado à saúde pública</td><td className="p-3 border border-slate-200">Lei 6.437/77</td><td className="p-3 border border-slate-200 font-bold text-red-600">Até R$ 1.500.000 + interdição</td></tr>
        </tbody>
      </table>
    </div>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Quem fiscaliza o PMOC em São Paulo?</h2>
    <p>A fiscalização é realizada pela <strong>Vigilância Sanitária Municipal de São Paulo (VISA-SP)</strong>, subordinada à Secretaria Municipal de Saúde. A VISA-SP realiza:</p>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li>Vistorias programadas por setor (clínicas, restaurantes, academias)</li>
      <li>Vistorias por denúncia (qualquer pessoa pode denunciar)</li>
      <li>Ações coordenadas com a ANVISA em estabelecimentos de saúde</li>
      <li>Fiscalizações em prédios comerciais após reclamações de trabalhadores</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">O que o fiscal verifica na vistoria?</h2>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li>Existência do documento PMOC físico ou digital disponível no local</li>
      <li>ART do responsável técnico assinada e registrada</li>
      <li>Registros de manutenções realizadas com datas e assinaturas</li>
      <li>Condições gerais dos equipamentos — filtros, drenos e unidades</li>
      <li>Em alguns casos, laudo de qualidade do ar interior</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">O que fazer se receber uma notificação da Vigilância Sanitária?</h2>
    <ol className="list-decimal pl-6 space-y-3 my-4">
      <li>Não ignore — o prazo para regularização na notificação é geralmente de 30 a 60 dias</li>
      <li>Contrate imediatamente uma empresa para elaborar e executar o PMOC</li>
      <li>Solicite a ART do engenheiro responsável</li>
      <li>Apresente a documentação dentro do prazo para evitar a multa efetiva</li>
      <li>Mantenha o PMOC atualizado para as próximas vistorias</li>
    </ol>
    <div className="bg-ice rounded-2xl p-6 my-8 border border-primary/10">
      <h3 className="text-lg font-bold text-primary mb-2">Recebeu notificação ou quer regularizar antes da vistoria?</h3>
      <p className="text-slate-600 text-sm mb-4">Atendemos com urgência · PMOC completo com ART · Documentação pronta para a Vigilância Sanitária</p>
      <a href="https://api.whatsapp.com/send/?phone=5511963462516&text=Olá!%20Recebi%20uma%20notificação%20da%20Vigilância%20Sanitária%20sobre%20PMOC%20e%20preciso%20de%20ajuda%20urgente." rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-success text-white font-bold py-3 px-6 rounded-xl text-sm hover:-translate-y-0.5 transition-all">Urgente — Falar Agora</a>
    </div>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Perguntas frequentes</h2>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">A multa pode ser contestada?</h3>
    <p>Sim. Multas administrativas podem ser contestadas em até 20 dias da notificação. O argumento mais comum é a demonstração de que o PMOC existia mas houve falha na apresentação. Regularizar antes de contestar é sempre mais estratégico.</p>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">O responsável pessoal responde pela multa?</h3>
    <p>Sim. O gestor ou sócio administrador pode ser responsabilizado pessoalmente — especialmente se a irregularidade tiver causado dano à saúde de funcionários ou clientes.</p>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Empresa pequena com 1 ar condicionado precisa de PMOC?</h3>
    <p>Se a capacidade total dos equipamentos for inferior a 60.000 BTUs, não há obrigatoriedade legal federal. Porém, a Vigilância Sanitária de SP pode exigir documentação em qualquer estabelecimento de saúde, alimentação ou que atenda o público — independente do BTU total.</p>
  </BlogPostLayout>
);

export default BlogMultaPMOC;
