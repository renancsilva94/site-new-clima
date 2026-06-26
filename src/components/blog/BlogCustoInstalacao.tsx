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

export const BlogCustoInstalacao = () => (
  <BlogPostLayout tag="Preços" title="Quanto Custa Instalar Ar Condicionado em São Paulo em 2026?" date="26 de Junho, 2026" author="Equipe Técnica New Clima">

    <p>Instalar ar condicionado em São Paulo é um investimento que vale a pena — mas saber o preço certo antes de contratar evita surpresas. O custo de instalação em SP varia entre <strong>R$ 350 e R$ 2.500</strong>, dependendo do tipo de equipamento, da complexidade da obra e do bairro.</p>

    <p>Neste guia completo, mostramos os preços reais praticados em São Paulo em 2026, o que está incluso em cada orçamento e como evitar cobranças extras.</p>

    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Tabela de preços de instalação de ar condicionado em SP (2026)</h2>

    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-primary text-white">
            <th className="p-3 text-left border border-primary">Tipo de equipamento</th>
            <th className="p-3 text-left border border-primary">BTUs</th>
            <th className="p-3 text-left border border-primary">Preço de instalação</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Split Hi-Wall</td><td className="p-3 border border-slate-200">9.000 BTUs</td><td className="p-3 border border-slate-200 font-bold text-primary">R$ 350 a R$ 500</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Split Hi-Wall</td><td className="p-3 border border-slate-200">12.000 a 18.000 BTUs</td><td className="p-3 border border-slate-200 font-bold text-primary">R$ 400 a R$ 700</td></tr>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Split Hi-Wall</td><td className="p-3 border border-slate-200">24.000 BTUs</td><td className="p-3 border border-slate-200 font-bold text-primary">R$ 500 a R$ 900</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Multi Split</td><td className="p-3 border border-slate-200">2 ambientes</td><td className="p-3 border border-slate-200 font-bold text-primary">R$ 900 a R$ 1.600</td></tr>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Multi Split</td><td className="p-3 border border-slate-200">3 a 4 ambientes</td><td className="p-3 border border-slate-200 font-bold text-primary">R$ 1.400 a R$ 2.500</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Cassete / Piso-Teto</td><td className="p-3 border border-slate-200">18.000 a 36.000 BTUs</td><td className="p-3 border border-slate-200 font-bold text-primary">R$ 800 a R$ 1.800</td></tr>
        </tbody>
      </table>
    </div>

    <p className="text-sm text-slate-500 italic">* Valores de mão de obra em São Paulo em 2026. Não incluem o equipamento. Podem variar conforme complexidade da obra.</p>

    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">O que está incluso no preço de instalação?</h2>

    <p>Um orçamento de instalação completo em SP deve incluir:</p>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li>Fixação da unidade evaporadora (interna) e condensadora (externa)</li>
      <li>Interligação elétrica e de refrigeração entre as unidades</li>
      <li>Tubulação de cobre e drenagem do condensado</li>
      <li>Vácuo e carga de gás refrigerante (quando necessário)</li>
      <li>Teste de funcionamento e configuração do controle remoto</li>
      <li>Limpeza do ambiente ao término da obra</li>
    </ul>

    <p><strong>Atenção:</strong> infraestrutura embutida (passar tubulação dentro da parede), suporte reforçado para condensadora em fachada e instalação em altura acima de 3 metros podem gerar cobranças adicionais — peça sempre orçamento detalhado antes.</p>

    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">O que encarece a instalação em São Paulo?</h2>

    <ul className="list-disc pl-6 space-y-2 my-4">
      <li><strong>Apartamentos em condomínio:</strong> regras de fachada e obra limpa aumentam o tempo e o custo</li>
      <li><strong>Infraestrutura embutida:</strong> passar tubulação dentro de paredes custa mais, mas fica esteticamente melhor</li>
      <li><strong>Distância entre as unidades:</strong> quanto maior a distância entre a unidade interna e a externa, mais tubulação é necessária</li>
      <li><strong>Instalação em altura:</strong> andares altos ou equipamentos em locais de difícil acesso exigem equipamentos especiais</li>
      <li><strong>Elétrica sem ponto dedicado:</strong> se o imóvel não tem circuito elétrico dedicado para o ar condicionado, é necessário instalar um</li>
    </ul>

    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Instalação em apartamento em São Paulo: cuidados especiais</h2>

    <p>A maioria dos apartamentos em São Paulo tem regras específicas de condomínio para instalação de ar condicionado. Os principais pontos são:</p>

    <ul className="list-disc pl-6 space-y-2 my-4">
      <li>Aprovação prévia do síndico ou administradora</li>
      <li>Proibição de furos na fachada em alguns condomínios</li>
      <li>Uso obrigatório de bandeja de drenagem em algumas edificações</li>
      <li>Horário restrito para obras (geralmente 8h às 17h em dias úteis)</li>
      <li>Proteção de áreas comuns durante o serviço</li>
    </ul>

    <p>A New Clima conhece as normas dos principais condomínios de São Paulo e garante obra limpa, aprovada pelo síndico, sem danos à fachada ou às áreas comuns.</p>

    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Qual o BTU certo para o meu ambiente?</h2>

    <p>O cálculo de BTUs depende do tamanho do ambiente, quantidade de pessoas, número de janelas e exposição solar. Como referência rápida:</p>

    <ul className="list-disc pl-6 space-y-2 my-4">
      <li><strong>Até 15m²:</strong> 9.000 BTUs</li>
      <li><strong>15m² a 25m²:</strong> 12.000 BTUs</li>
      <li><strong>25m² a 35m²:</strong> 18.000 BTUs</li>
      <li><strong>35m² a 50m²:</strong> 24.000 BTUs</li>
      <li><strong>Acima de 50m²:</strong> Multi Split ou sistema VRF</li>
    </ul>

    <div className="bg-ice rounded-2xl p-6 my-8 border border-primary/10">
      <h3 className="text-lg font-bold text-primary mb-2">Orçamento gratuito de instalação em SP</h3>
      <p className="text-slate-600 text-sm mb-4">Visita técnica gratuita · Orçamento no mesmo dia · Obra limpa · Garantia por escrito</p>
      <a href="https://api.whatsapp.com/send/?phone=5511963462516&text=Olá!%20Gostaria%20de%20um%20orçamento%20de%20instalação%20de%20ar%20condicionado." rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-success text-white font-bold py-3 px-6 rounded-xl text-sm hover:-translate-y-0.5 transition-all">
        Solicitar Orçamento pelo WhatsApp
      </a>
    </div>

    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Perguntas frequentes sobre instalação em SP</h2>

    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">A instalação inclui o equipamento?</h3>
    <p>Não. Os preços acima são apenas de mão de obra. O equipamento (unidade interna + externa) é comprado separadamente e os preços variam conforme marca e capacidade.</p>

    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Quanto tempo leva a instalação?</h3>
    <p>Uma instalação padrão de split simples leva entre 2 e 4 horas. Multi Split com 3 ou mais unidades pode levar um dia inteiro. Instalações com infraestrutura embutida podem levar 2 dias.</p>

    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Qual a garantia da instalação?</h3>
    <p>A New Clima oferece garantia de 1 ano na instalação, com certificado por escrito. Problemas relacionados à instalação — vazamento de gás, queda de unidade, mal contato elétrico — são resolvidos sem custo adicional dentro do período de garantia.</p>

    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Preciso de ponto elétrico dedicado?</h3>
    <p>Sim. Todo ar condicionado precisa de um circuito elétrico exclusivo com disjuntor dimensionado para a carga do equipamento. Se o imóvel não tiver, é necessário instalar — o que pode ser feito pela nossa equipe no mesmo dia.</p>

  </BlogPostLayout>
);

export default BlogCustoInstalacao;
