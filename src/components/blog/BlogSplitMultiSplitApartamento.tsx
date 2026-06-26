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

export const BlogSplitMultiSplitApartamento = () => (
  <BlogPostLayout tag="Guia Técnico" title="Split ou Multi Split: Qual a Melhor Opção para Apartamento em SP?" date="26 de Junho, 2026" author="Equipe Técnica New Clima">

    <p>Essa é a dúvida mais comum de quem vai climatizar um apartamento em São Paulo: vale mais a pena instalar <strong>splits individuais em cada cômodo ou um único sistema Multi Split</strong> para o apartamento inteiro?</p>

    <p>A resposta depende do layout do seu apartamento, do número de cômodos que você quer climatizar e do seu orçamento. Neste guia, explicamos as diferenças, vantagens e desvantagens de cada opção para ajudar você a tomar a decisão certa.</p>

    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">O que é Split Hi-Wall e o que é Multi Split?</h2>

    <p><strong>Split Hi-Wall</strong> é o ar condicionado tradicional — uma unidade interna (evaporadora) conectada a uma unidade externa (condensadora) por meio de tubulação de cobre. Cada ambiente tem seu próprio equipamento completo e independente.</p>

    <p><strong>Multi Split</strong> é um sistema onde uma única unidade externa (condensadora) alimenta duas ou mais unidades internas em cômodos diferentes. É como ter vários ares condicionados com um único compressor externo.</p>

    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Comparação: Split x Multi Split para apartamentos em SP</h2>

    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-primary text-white">
            <th className="p-3 text-left border border-primary">Critério</th>
            <th className="p-3 text-left border border-primary">Split Individual</th>
            <th className="p-3 text-left border border-primary">Multi Split</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white"><td className="p-3 border border-slate-200 font-medium">Custo inicial</td><td className="p-3 border border-slate-200">Menor (por ambiente)</td><td className="p-3 border border-slate-200">Maior (sistema completo)</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200 font-medium">Unidades externas</td><td className="p-3 border border-slate-200">Uma por ambiente</td><td className="p-3 border border-slate-200">Uma para todos</td></tr>
          <tr className="bg-white"><td className="p-3 border border-slate-200 font-medium">Impacto na fachada</td><td className="p-3 border border-slate-200">Maior (mais condensadoras)</td><td className="p-3 border border-slate-200">Menor (1 condensadora)</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200 font-medium">Independência de uso</td><td className="p-3 border border-slate-200">Total (cada um no seu ritmo)</td><td className="p-3 border border-slate-200">Dependente (condensadora compartilhada)</td></tr>
          <tr className="bg-white"><td className="p-3 border border-slate-200 font-medium">Manutenção</td><td className="p-3 border border-slate-200">Mais simples por unidade</td><td className="p-3 border border-slate-200">Uma visita resolve tudo</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200 font-medium">Aprovação em condomínio</td><td className="p-3 border border-slate-200">Mais difícil (várias condensadoras)</td><td className="p-3 border border-slate-200">Mais fácil (1 condensadora)</td></tr>
          <tr className="bg-white"><td className="p-3 border border-slate-200 font-medium">Expansão futura</td><td className="p-3 border border-slate-200">Fácil (instala novo split)</td><td className="p-3 border border-slate-200">Limitada (capacidade da condensadora)</td></tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Quando escolher Split Individual?</h2>

    <ul className="list-disc pl-6 space-y-2 my-4">
      <li>Quando você quer climatizar apenas 1 ou 2 cômodos</li>
      <li>Quando o orçamento é mais restrito e você quer climatizar por etapas</li>
      <li>Quando os cômodos têm horários de uso muito diferentes (ex: sala de dia, quarto à noite)</li>
      <li>Quando não há restrição de fachada para múltiplas condensadoras</li>
      <li>Quando a instalação precisa ser feita rapidamente</li>
    </ul>

    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Quando escolher Multi Split?</h2>

    <ul className="list-disc pl-6 space-y-2 my-4">
      <li>Quando você quer climatizar 3 ou mais cômodos ao mesmo tempo</li>
      <li>Quando o condomínio tem restrições de fachada (apenas 1 condensadora permitida)</li>
      <li>Quando o apartamento tem varanda técnica pequena ou limitada</li>
      <li>Quando a estética é prioridade — apenas 1 condensadora visível</li>
      <li>Quando você quer uma solução integrada e planejada para o apartamento inteiro</li>
    </ul>

    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Condomínios em SP: a questão da fachada</h2>

    <p>Em São Paulo, muitos condomínios — especialmente os mais novos — têm regras rígidas sobre instalação de ar condicionado. As mais comuns são:</p>

    <ul className="list-disc pl-6 space-y-2 my-4">
      <li>Proibição de condensadoras na varanda frontal (fachada principal)</li>
      <li>Limitação ao número de condensadoras por apartamento</li>
      <li>Obrigatoriedade de bandeja de drenagem</li>
      <li>Aprovação prévia do síndico para qualquer instalação</li>
    </ul>

    <p>Nesses casos, o Multi Split é a solução mais indicada — uma única condensadora na varanda técnica ou área de serviço atende todos os cômodos sem impactar a fachada.</p>

    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Preços comparativos em São Paulo (2026)</h2>

    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-primary text-white">
            <th className="p-3 text-left border border-primary">Solução</th>
            <th className="p-3 text-left border border-primary">Cômodos</th>
            <th className="p-3 text-left border border-primary">Custo total (equipamento + instalação)</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white"><td className="p-3 border border-slate-200">2 Splits individuais 12.000 BTUs</td><td className="p-3 border border-slate-200">2</td><td className="p-3 border border-slate-200 font-bold text-primary">R$ 4.000 a R$ 6.000</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Multi Split 2x12.000 BTUs</td><td className="p-3 border border-slate-200">2</td><td className="p-3 border border-slate-200 font-bold text-primary">R$ 5.500 a R$ 8.000</td></tr>
          <tr className="bg-white"><td className="p-3 border border-slate-200">3 Splits individuais</td><td className="p-3 border border-slate-200">3</td><td className="p-3 border border-slate-200 font-bold text-primary">R$ 6.000 a R$ 9.000</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Multi Split 3x12.000 BTUs</td><td className="p-3 border border-slate-200">3</td><td className="p-3 border border-slate-200 font-bold text-primary">R$ 7.500 a R$ 11.000</td></tr>
        </tbody>
      </table>
    </div>

    <div className="bg-ice rounded-2xl p-6 my-8 border border-primary/10">
      <h3 className="text-lg font-bold text-primary mb-2">Não sabe qual escolher? A gente te ajuda.</h3>
      <p className="text-slate-600 text-sm mb-4">Visita técnica gratuita · Projeto personalizado · Respeitamos as normas do seu condomínio</p>
      <a href="https://api.whatsapp.com/send/?phone=5511963462516&text=Olá!%20Quero%20instalar%20ar%20condicionado%20no%20meu%20apartamento%20e%20gostaria%20de%20uma%20orientação." rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-success text-white font-bold py-3 px-6 rounded-xl text-sm hover:-translate-y-0.5 transition-all">
        Falar com Especialista pelo WhatsApp
      </a>
    </div>

    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Perguntas frequentes</h2>

    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Multi Split gasta mais energia que split individual?</h3>
    <p>Depende do uso. Se você usa todos os cômodos ao mesmo tempo, o Multi Split pode ser mais eficiente. Se usa os cômodos em horários diferentes, os splits individuais permitem ligar apenas o necessário.</p>

    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Se a condensadora do Multi Split quebrar, fico sem ar em todos os cômodos?</h3>
    <p>Sim, esse é o principal ponto de atenção do Multi Split. Se a condensadora apresentar problema, todas as unidades internas ficam sem funcionar até o conserto. Por isso, a manutenção preventiva é ainda mais importante em sistemas Multi Split.</p>

    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Posso misturar marcas no Multi Split?</h3>
    <p>Não. Todas as unidades internas devem ser da mesma marca e compatíveis com a condensadora. Misturar marcas invalida a garantia e pode danificar o sistema.</p>

    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Qual é a marca mais indicada para apartamento em SP?</h3>
    <p>LG, Samsung, Daikin e Midea são as mais utilizadas em apartamentos em São Paulo. A escolha deve considerar a assistência técnica disponível na sua região e a garantia oferecida pelo fabricante.</p>

  </BlogPostLayout>
);

export default BlogSplitMultiSplitApartamento;
