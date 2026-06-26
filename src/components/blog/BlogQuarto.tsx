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

export const BlogQuarto = () => (
  <BlogPostLayout tag="Guia Prático" title="Ar Condicionado no Quarto: Posição Ideal, BTUs e Cuidados para Dormir Melhor" date="26 de Junho, 2026" author="Equipe Técnica New Clima">

    <p>A posição do ar condicionado no quarto é uma das decisões mais importantes para garantir noites confortáveis em São Paulo. Um equipamento mal posicionado pode gerar corrente de ar direta, barulho excessivo e consumo desnecessário de energia.</p>

    <p>Neste guia, explicamos onde instalar, qual BTU escolher e quais cuidados tomar para dormir melhor com ar condicionado.</p>

    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Onde instalar o ar condicionado no quarto?</h2>

    <p>A regra mais importante: <strong>nunca instale o ar condicionado diretamente acima da cabeceira da cama</strong>. O fluxo de ar frio direto sobre quem dorme causa ressecamento das vias respiratórias, dores musculares e piora de rinite e sinusite.</p>

    <p>As melhores posições são:</p>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li><strong>Parede lateral à cama:</strong> o ar é direcionado para o ambiente, não diretamente para quem dorme — posição ideal</li>
      <li><strong>Parede oposta à cama:</strong> o ar percorre todo o quarto antes de chegar a você — boa opção para quartos maiores</li>
      <li><strong>Acima da porta:</strong> funciona bem em quartos pequenos, onde o ar circula rapidamente</li>
    </ul>

    <p><strong>Evite:</strong> paredes com janelas (variação de temperatura atrapalha o desempenho), paredes opostas a janelas com incidência solar direta e posições onde o fluxo aponte diretamente para a cama.</p>

    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Qual BTU para quarto de dormir?</h2>

    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-primary text-white">
            <th className="p-3 text-left border border-primary">Tamanho do quarto</th>
            <th className="p-3 text-left border border-primary">BTUs recomendados</th>
            <th className="p-3 text-left border border-primary">Observação</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Até 10m²</td><td className="p-3 border border-slate-200 font-bold text-primary">7.000 a 9.000 BTUs</td><td className="p-3 border border-slate-200">Quarto solteiro padrão</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">10m² a 18m²</td><td className="p-3 border border-slate-200 font-bold text-primary">9.000 a 12.000 BTUs</td><td className="p-3 border border-slate-200">Quarto casal padrão</td></tr>
          <tr className="bg-white"><td className="p-3 border border-slate-200">18m² a 25m²</td><td className="p-3 border border-slate-200 font-bold text-primary">12.000 a 18.000 BTUs</td><td className="p-3 border border-slate-200">Quarto casal grande / suíte</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Acima de 25m²</td><td className="p-3 border border-slate-200 font-bold text-primary">18.000 a 24.000 BTUs</td><td className="p-3 border border-slate-200">Suíte master com closet</td></tr>
        </tbody>
      </table>
    </div>

    <p><strong>Importante:</strong> quartos com exposição solar direta (especialmente oeste), muitas janelas ou andares altos precisam de 10% a 20% a mais de BTUs do que a tabela indica.</p>

    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Split ou Multi Split para o quarto?</h2>

    <p>Para climatizar apenas o quarto, o <strong>Split Hi-Wall</strong> é a opção mais econômica e prática. O Multi Split faz sentido quando você quer climatizar o quarto e mais um ou dois cômodos com uma única condensadora externa — ideal para apartamentos com restrição de fachada.</p>

    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Temperatura ideal para dormir com ar condicionado</h2>

    <p>A temperatura ideal para dormir varia entre <strong>20°C e 23°C</strong> para a maioria das pessoas. Temperaturas abaixo de 18°C podem causar hipotermia leve e piorar problemas respiratórios. Acima de 24°C, o sono tende a ser mais superficial e interrompido.</p>

    <p>Dicas práticas:</p>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li>Use o modo <strong>Sleep</strong> (disponível na maioria dos aparelhos): aumenta a temperatura gradualmente ao longo da noite, economizando energia sem comprometer o conforto</li>
      <li>Direcione as aletas para o teto, não para a cama</li>
      <li>Mantenha o quarto com alguma umidade — aparelhos inversores com função Dry ajudam a controlar</li>
      <li>Deixe uma fresta de janela aberta se o apartamento permitir — renova o ar sem comprometer o resfriamento</li>
    </ul>

    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Ar condicionado no quarto faz mal?</h2>

    <p>O ar condicionado <strong>não faz mal</strong> quando instalado corretamente e com manutenção em dia. O problema ocorre quando:</p>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li>O fluxo de ar aponta diretamente para quem dorme</li>
      <li>Os filtros estão sujos — espalhando fungos e bactérias pelo ambiente</li>
      <li>A temperatura está muito baixa (abaixo de 18°C)</li>
      <li>O ambiente fica muito seco sem nenhuma fonte de umidade</li>
    </ul>

    <p>Com instalação correta, filtros limpos e temperatura adequada, o ar condicionado melhora significativamente a qualidade do sono — especialmente em São Paulo, onde as noites de verão ultrapassam os 28°C.</p>

    <div className="bg-ice rounded-2xl p-6 my-8 border border-primary/10">
      <h3 className="text-lg font-bold text-primary mb-2">Instale o ar condicionado do seu quarto com segurança</h3>
      <p className="text-slate-600 text-sm mb-4">Visita técnica gratuita · Indicamos a posição ideal · Obra limpa · Garantia de 1 ano</p>
      <a href="https://api.whatsapp.com/send/?phone=5511963462516&text=Olá!%20Quero%20instalar%20ar%20condicionado%20no%20meu%20quarto%20e%20gostaria%20de%20orientação." rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-success text-white font-bold py-3 px-6 rounded-xl text-sm hover:-translate-y-0.5 transition-all">
        Falar com Especialista pelo WhatsApp
      </a>
    </div>

    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Perguntas frequentes</h2>

    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Posso deixar o ar condicionado ligado a noite toda?</h3>
    <p>Sim, desde que use o modo Sleep e configure a temperatura entre 21°C e 23°C. Os aparelhos modernos com tecnologia Inverter são projetados para funcionar continuamente com baixo consumo de energia.</p>

    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Qual a altura ideal para instalar no quarto?</h3>
    <p>Entre 2,10m e 2,30m do piso. Muito baixo compromete a distribuição do ar pelo ambiente. Muito alto dificulta a manutenção e pode gerar ruído excessivo.</p>

    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Com que frequência limpar o filtro do quarto?</h3>
    <p>A limpeza dos filtros externos deve ser feita a cada 15 dias em quartos com uso diário. A manutenção preventiva completa deve ser feita a cada 6 meses por um técnico certificado.</p>

    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Ar condicionado inverter vale a pena para o quarto?</h3>
    <p>Sim, especialmente para uso noturno. O Inverter mantém a temperatura constante sem ligar e desligar o compressor — gerando menos ruído e consumindo até 60% menos energia do que o convencional em uso contínuo.</p>

  </BlogPostLayout>
);

export default BlogQuarto;
