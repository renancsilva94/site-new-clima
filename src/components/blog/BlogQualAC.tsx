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

export const BlogQualAC = () => (
  <BlogPostLayout tag="Guia de Compra" title="Qual Ar Condicionado Comprar em 2026? Guia Completo para São Paulo" date="26 de Junho, 2026" author="Equipe Técnica New Clima">
    <p>Com tantos modelos, marcas e tecnologias disponíveis, escolher o ar condicionado certo para São Paulo pode parecer difícil. Neste guia, mostramos o que avaliar antes de comprar e quais modelos são mais indicados para cada perfil.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Inverter ou convencional?</h2>
    <p>Para uso residencial em SP com mais de 4 horas diárias, o <strong>Inverter sempre é a melhor escolha</strong>. A economia de energia em 1 ano paga a diferença de preço. O convencional só faz sentido para ambientes de uso esporádico (menos de 2 horas por dia).</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">As melhores marcas de ar condicionado em 2026</h2>
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse text-sm">
        <thead><tr className="bg-primary text-white"><th className="p-3 text-left border border-primary">Marca</th><th className="p-3 text-left border border-primary">Ponto forte</th><th className="p-3 text-left border border-primary">Melhor para</th></tr></thead>
        <tbody>
          <tr className="bg-white"><td className="p-3 border border-slate-200 font-bold">LG</td><td className="p-3 border border-slate-200">Tecnologia Dual Inverter, eficiência energética</td><td className="p-3 border border-slate-200">Residencial e comercial</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200 font-bold">Samsung</td><td className="p-3 border border-slate-200">Wind-Free, distribuição de ar sem corrente direta</td><td className="p-3 border border-slate-200">Quartos e salas</td></tr>
          <tr className="bg-white"><td className="p-3 border border-slate-200 font-bold">Daikin</td><td className="p-3 border border-slate-200">Qualidade japonesa, durabilidade e silêncio</td><td className="p-3 border border-slate-200">Comercial e premium</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200 font-bold">Midea</td><td className="p-3 border border-slate-200">Melhor custo-benefício do mercado</td><td className="p-3 border border-slate-200">Quem quer economia</td></tr>
          <tr className="bg-white"><td className="p-3 border border-slate-200 font-bold">Fujitsu</td><td className="p-3 border border-slate-200">Baixíssimo nível de ruído, filtragem avançada</td><td className="p-3 border border-slate-200">Quartos e ambientes sensíveis</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200 font-bold">Electrolux</td><td className="p-3 border border-slate-200">Assistência ampla, boa relação preço-qualidade</td><td className="p-3 border border-slate-200">Residencial em geral</td></tr>
        </tbody>
      </table>
    </div>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">O que avaliar antes de comprar</h2>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li><strong>BTUs corretos para o ambiente:</strong> o erro mais comum — veja nossa calculadora de BTUs</li>
      <li><strong>Tecnologia Inverter:</strong> economiza até 60% de energia em uso contínuo</li>
      <li><strong>Eficiência energética (Selo Procel):</strong> prefira equipamentos com selo A ou A+</li>
      <li><strong>Nível de ruído:</strong> para quartos, prefira modelos abaixo de 40 dB(A)</li>
      <li><strong>Wi-Fi integrado:</strong> permite controle pelo celular — conforto e economia</li>
      <li><strong>Filtros antibacterianos:</strong> importante para quem tem alergias ou crianças pequenas</li>
      <li><strong>Assistência técnica na sua região:</strong> verifique se há autorizada próxima em SP</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Faixa de preço dos modelos mais vendidos em SP (2026)</h2>
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse text-sm">
        <thead><tr className="bg-primary text-white"><th className="p-3 text-left border border-primary">Tipo</th><th className="p-3 text-left border border-primary">BTUs</th><th className="p-3 text-left border border-primary">Faixa de preço (equipamento)</th></tr></thead>
        <tbody>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Split Inverter entrada</td><td className="p-3 border border-slate-200">9.000</td><td className="p-3 border border-slate-200 font-bold text-primary">R$ 1.400 a R$ 2.000</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Split Inverter intermediário</td><td className="p-3 border border-slate-200">12.000</td><td className="p-3 border border-slate-200 font-bold text-primary">R$ 1.800 a R$ 2.800</td></tr>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Split Inverter premium</td><td className="p-3 border border-slate-200">18.000</td><td className="p-3 border border-slate-200 font-bold text-primary">R$ 2.500 a R$ 4.000</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Multi Split 2x12.000</td><td className="p-3 border border-slate-200">2 ambientes</td><td className="p-3 border border-slate-200 font-bold text-primary">R$ 4.500 a R$ 7.000</td></tr>
        </tbody>
      </table>
    </div>
    <div className="bg-ice rounded-2xl p-6 my-8 border border-primary/10">
      <h3 className="text-lg font-bold text-primary mb-2">Não sabe qual modelo comprar? Consultamos gratuitamente.</h3>
      <p className="text-slate-600 text-sm mb-4">Indicamos o modelo ideal para o seu ambiente e orçamento · Sem compromisso</p>
      <a href="https://api.whatsapp.com/send/?phone=5511963462516&text=Olá!%20Preciso%20de%20ajuda%20para%20escolher%20o%20ar%20condicionado%20certo." rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-success text-white font-bold py-3 px-6 rounded-xl text-sm hover:-translate-y-0.5 transition-all">Consultar pelo WhatsApp</a>
    </div>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Perguntas frequentes</h2>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Comprar com ou sem instalação?</h3>
    <p>Comprar separado da instalação costuma ser mais econômico — você escolhe o equipamento na loja e contrata a instalação com uma empresa especializada. Pacotes de loja geralmente têm margem maior na instalação.</p>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Vale a pena comprar ar condicionado usado?</h3>
    <p>Somente se vier com procedência comprovada, nota fiscal e ainda na garantia. Ar condicionado usado sem histórico de manutenção pode ter gás baixo, compressor desgastado e custo de manutenção imediato que supera o desconto.</p>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Qual marca tem melhor assistência técnica em SP?</h3>
    <p>LG, Samsung e Midea têm a maior rede de autorizadas em São Paulo. Daikin e Fujitsu têm menos pontos mas melhor nível técnico das autorizadas. A New Clima atende todas as marcas com técnicos certificados.</p>
  </BlogPostLayout>
);

export default BlogQualAC;
