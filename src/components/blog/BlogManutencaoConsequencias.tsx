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

export const BlogManutencaoConsequencias = () => (
  <BlogPostLayout tag="Manutenção" title="O Que Acontece se Você Não Fizer Manutenção no Ar Condicionado?" date="26 de Junho, 2026" author="Equipe Técnica New Clima">

    <p>Deixar o ar condicionado sem manutenção parece uma economia — mas na prática é um dos erros mais caros que você pode cometer. Uma manutenção preventiva semestral custa em média <strong>R$ 180 a R$ 300</strong>. Um conserto por falta de manutenção pode custar <strong>R$ 800 a R$ 3.000</strong>.</p>

    <p>Entenda o que acontece, mês a mês, quando o ar condicionado fica sem manutenção em São Paulo.</p>

    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Meses 1 a 3: queda de eficiência</h2>

    <p>Com os filtros acumulando poeira e sujeira, o ar condicionado começa a trabalhar mais para entregar o mesmo resultado. O compressor força mais, o consumo de energia sobe e o ambiente demora mais para atingir a temperatura desejada.</p>

    <ul className="list-disc pl-6 space-y-2 my-4">
      <li>Aumento de 10% a 15% no consumo de energia</li>
      <li>Redução na capacidade de resfriamento</li>
      <li>Início do acúmulo de fungos e bactérias nos filtros</li>
    </ul>

    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Meses 3 a 6: problemas de saúde e mau cheiro</h2>

    <p>Os filtros sujos se tornam um ambiente perfeito para o crescimento de fungos, ácaros e bactérias. O ar que circula pelo ambiente começa a carregar esses microorganismos — causando problemas respiratórios, alergias e rinite, especialmente em crianças e idosos.</p>

    <ul className="list-disc pl-6 space-y-2 my-4">
      <li>Mau cheiro no ar expelido pelo aparelho</li>
      <li>Piora de rinite, asma e alergias</li>
      <li>Aumento de 20% a 30% no consumo de energia</li>
      <li>Possível início de gotejamento de água</li>
    </ul>

    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Meses 6 a 12: danos mecânicos</h2>

    <p>Com o compressor trabalhando em sobrecarga contínua, as peças mecânicas começam a se desgastar. O dreno entupido causa acúmulo de água que pode vazar para o teto ou paredes. O gás refrigerante começa a vazar pelos pontos de pressão mais fraca.</p>

    <ul className="list-disc pl-6 space-y-2 my-4">
      <li>Dreno entupido — água pingando no teto ou parede</li>
      <li>Vazamento de gás — aparelho para de gelar</li>
      <li>Rolamentos e ventiladores com desgaste acelerado</li>
      <li>Consumo de energia até 35% mais alto</li>
      <li>Ruídos e vibrações durante o funcionamento</li>
    </ul>

    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Acima de 12 meses: risco de quebra total</h2>

    <p>Um compressor que trabalhou em sobrecarga por mais de 12 meses tem grande chance de falhar completamente. A troca de compressor pode custar de R$ 800 a R$ 2.500 — e em muitos casos o custo do conserto supera o valor de um aparelho novo.</p>

    <ul className="list-disc pl-6 space-y-2 my-4">
      <li>Queima do compressor — conserto R$ 800 a R$ 2.500</li>
      <li>Queima da placa eletrônica — R$ 400 a R$ 1.200</li>
      <li>Danos estruturais por acúmulo de água</li>
      <li>Vida útil reduzida de 12-15 anos para 5-7 anos</li>
    </ul>

    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Comparativo de custo: manutenção x conserto</h2>

    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-primary text-white">
            <th className="p-3 text-left border border-primary">Cenário</th>
            <th className="p-3 text-left border border-primary">Custo em 3 anos</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Manutenção semestral (6 visitas)</td><td className="p-3 border border-slate-200 font-bold text-success">R$ 1.080 a R$ 1.800</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Sem manutenção + 1 conserto de compressor</td><td className="p-3 border border-slate-200 font-bold text-red-600">R$ 800 a R$ 2.500</td></tr>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Sem manutenção + danos por vazamento de água</td><td className="p-3 border border-slate-200 font-bold text-red-600">R$ 2.000 a R$ 8.000</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Economia de energia com manutenção (30%)</td><td className="p-3 border border-slate-200 font-bold text-success">- R$ 900 a R$ 1.500</td></tr>
        </tbody>
      </table>
    </div>

    <p>Na maioria dos casos, a <strong>manutenção preventiva se paga sozinha</strong> pela economia de energia gerada — sem contar a prevenção de consertos caros.</p>

    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Com que frequência fazer manutenção em SP?</h2>

    <ul className="list-disc pl-6 space-y-2 my-4">
      <li><strong>Uso residencial:</strong> a cada 6 meses (semestral)</li>
      <li><strong>Escritórios e comércios:</strong> a cada 3 meses (trimestral)</li>
      <li><strong>Clínicas e restaurantes:</strong> a cada 1 a 2 meses</li>
      <li><strong>Ambientes com muita poeira ou fumaça:</strong> mensalmente</li>
    </ul>

    <div className="bg-ice rounded-2xl p-6 my-8 border border-primary/10">
      <h3 className="text-lg font-bold text-primary mb-2">Agende sua manutenção preventiva em SP</h3>
      <p className="text-slate-600 text-sm mb-4">Manutenção a partir de R$ 180 · Todas as marcas · Garantia de 90 dias · Resposta em até 2h</p>
      <a href="https://api.whatsapp.com/send/?phone=5511963462516&text=Olá!%20Gostaria%20de%20agendar%20uma%20manutenção%20preventiva%20de%20ar%20condicionado." rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-success text-white font-bold py-3 px-6 rounded-xl text-sm hover:-translate-y-0.5 transition-all">
        Agendar Manutenção pelo WhatsApp
      </a>
    </div>

    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Perguntas frequentes</h2>

    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Posso limpar o filtro em casa?</h3>
    <p>Sim. A limpeza dos filtros externos pode ser feita em casa com aspirador e água. Mas a manutenção preventiva completa — que inclui verificação de gás, dreno, componentes elétricos e limpeza interna do evaporador — precisa ser feita por técnico certificado.</p>

    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Meu ar condicionado ainda gela bem. Precisa de manutenção?</h3>
    <p>Sim. O aparelho pode gelar bem e ainda ter filtros cheios de fungos, dreno parcialmente entupido e consumir 20% mais energia do que deveria. A manutenção preventiva resolve problemas antes que eles apareçam.</p>

    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Quanto tempo leva uma manutenção preventiva?</h3>
    <p>Uma manutenção preventiva completa de um split residencial leva entre 1h30 e 2h30. Sistemas com múltiplas unidades podem levar o dia todo.</p>

  </BlogPostLayout>
);

export default BlogManutencaoConsequencias;
