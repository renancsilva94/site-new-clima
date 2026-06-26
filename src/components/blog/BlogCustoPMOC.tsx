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

export const BlogCustoPMOC = () => (
  <BlogPostLayout tag="Preços" title="Quanto Custa o PMOC em São Paulo em 2026? Preços, O Que Está Incluso e Como Contratar" date="25 de Junho, 2026" author="Equipe Técnica New Clima">

    <p>Se você é responsável por uma empresa, condomínio ou clínica em São Paulo com sistema de ar condicionado, provavelmente já ouviu falar do PMOC — o Plano de Manutenção, Operação e Controle exigido pela Lei 13.589/18. A dúvida mais comum é: <strong>quanto custa o PMOC em São Paulo?</strong></p>

    <p>A resposta direta: o custo do PMOC em São Paulo varia entre <strong>R$ 350 e R$ 4.500 por mês</strong>, dependendo do número de equipamentos, da frequência das visitas e do porte do estabelecimento. Neste artigo, explicamos tudo que está incluso, quais são as multas por irregularidade e como contratar o serviço correto.</p>

    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">O que é o PMOC e quem é obrigado a ter?</h2>

    <p>O PMOC é o Plano de Manutenção, Operação e Controle de sistemas de ar condicionado, instituído pela <strong>Lei Federal 13.589/18</strong> e regulamentado pela Portaria MS 3.523/98. Todo estabelecimento com sistema de ar condicionado de uso público ou coletivo com capacidade acima de <strong>60.000 BTUs</strong> é obrigado a ter o PMOC em vigor.</p>

    <p>Na prática, isso inclui:</p>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li>Empresas e escritórios comerciais</li>
      <li>Condomínios com ar condicionado nas áreas comuns</li>
      <li>Clínicas médicas, odontológicas e laboratórios</li>
      <li>Restaurantes, hotéis e pousadas</li>
      <li>Escolas, creches e universidades</li>
      <li>Academias e espaços esportivos</li>
      <li>Farmácias e estabelecimentos de saúde</li>
    </ul>

    <p>A fiscalização é feita pela Vigilância Sanitária de São Paulo, que realiza vistorias periódicas — especialmente em estabelecimentos de saúde e alimentação.</p>

    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Tabela de preços do PMOC em São Paulo em 2026</h2>

    <p>Os valores variam conforme o número de equipamentos e a frequência das manutenções preventivas:</p>

    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-primary text-white">
            <th className="p-3 text-left border border-primary">Porte do estabelecimento</th>
            <th className="p-3 text-left border border-primary">Equipamentos</th>
            <th className="p-3 text-left border border-primary">Frequência</th>
            <th className="p-3 text-left border border-primary">Custo mensal</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white">
            <td className="p-3 border border-slate-200 font-medium">Pequeno porte</td>
            <td className="p-3 border border-slate-200">Até 5 equipamentos</td>
            <td className="p-3 border border-slate-200">Semestral</td>
            <td className="p-3 border border-slate-200 font-bold text-primary">R$ 350 a R$ 700/mês</td>
          </tr>
          <tr className="bg-slate-50">
            <td className="p-3 border border-slate-200 font-medium">Médio porte</td>
            <td className="p-3 border border-slate-200">6 a 20 equipamentos</td>
            <td className="p-3 border border-slate-200">Trimestral</td>
            <td className="p-3 border border-slate-200 font-bold text-primary">R$ 700 a R$ 2.000/mês</td>
          </tr>
          <tr className="bg-white">
            <td className="p-3 border border-slate-200 font-medium">Grande porte</td>
            <td className="p-3 border border-slate-200">21 a 50 equipamentos</td>
            <td className="p-3 border border-slate-200">Mensal</td>
            <td className="p-3 border border-slate-200 font-bold text-primary">R$ 2.000 a R$ 4.500/mês</td>
          </tr>
          <tr className="bg-slate-50">
            <td className="p-3 border border-slate-200 font-medium">Corporativo</td>
            <td className="p-3 border border-slate-200">Acima de 50 equipamentos</td>
            <td className="p-3 border border-slate-200">Mensal</td>
            <td className="p-3 border border-slate-200 font-bold text-primary">A partir de R$ 4.500/mês</td>
          </tr>
          <tr className="bg-white">
            <td className="p-3 border border-slate-200 font-medium">Elaboração do documento</td>
            <td className="p-3 border border-slate-200">Qualquer porte</td>
            <td className="p-3 border border-slate-200">Taxa única</td>
            <td className="p-3 border border-slate-200 font-bold text-primary">R$ 500 a R$ 1.500 (único)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p className="text-sm text-slate-500 italic">* Valores de referência para São Paulo e ABC Paulista em 2026. O custo exato depende da localização, número de equipamentos e frequência de visitas. Solicite uma proposta gratuita.</p>

    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">O que está incluso no contrato de PMOC?</h2>

    <p>Um contrato de PMOC completo deve incluir, obrigatoriamente:</p>

    <ul className="list-disc pl-6 space-y-2 my-4">
      <li><strong>Elaboração do Plano:</strong> documento técnico com todos os procedimentos de manutenção conforme a norma</li>
      <li><strong>ART (Anotação de Responsabilidade Técnica):</strong> assinatura de engenheiro responsável</li>
      <li><strong>Visitas preventivas:</strong> limpeza de filtros, verificação de gás, dreno e componentes elétricos</li>
      <li><strong>Relatório técnico:</strong> laudo após cada visita, pronto para apresentar à Vigilância Sanitária</li>
      <li><strong>Registro de manutenções:</strong> histórico completo de todos os serviços realizados</li>
      <li><strong>Orientação de operação:</strong> treinamento para os responsáveis pela operação dos equipamentos</li>
    </ul>

    <p>Atenção: contratos que não incluem a ART ou o relatório técnico não atendem às exigências legais e podem ser contestados pela Vigilância Sanitária.</p>

    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Quais são as multas por não ter PMOC em São Paulo?</h2>

    <p>As penalidades por irregularidade no PMOC em São Paulo são severas:</p>

    <ul className="list-disc pl-6 space-y-2 my-4">
      <li><strong>Multa mínima:</strong> R$ 2.000 por infração</li>
      <li><strong>Multa máxima:</strong> R$ 1.500.000 (um milhão e quinhentos mil reais)</li>
      <li><strong>Interdição do estabelecimento:</strong> em casos de risco à saúde pública</li>
      <li><strong>Responsabilidade pessoal do gestor:</strong> o responsável legal pode ser autuado individualmente</li>
    </ul>

    <p>A Vigilância Sanitária de São Paulo intensificou as fiscalizações desde 2023, especialmente em clínicas, restaurantes e condomínios comerciais. Regularizar antes da vistoria é sempre mais barato e menos arriscado.</p>

    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Vale a pena contratar o PMOC? Análise de custo-benefício</h2>

    <p>A conta é simples. Um contrato de PMOC para uma empresa de médio porte em São Paulo custa em média <strong>R$ 1.200/mês</strong>. Sem o PMOC, os riscos são:</p>

    <ul className="list-disc pl-6 space-y-2 my-4">
      <li>Multa mínima de R$ 2.000 — já paga 1,5 mês de contrato</li>
      <li>Equipamentos sem manutenção consomem até 30% mais energia</li>
      <li>Aparelhos sem preventiva quebram com muito mais frequência — conserto emergencial custa 3x mais</li>
      <li>Interdição do estabelecimento por um dia pode custar dezenas de milhares em faturamento perdido</li>
    </ul>

    <p>Na maioria dos casos, o PMOC se paga apenas com a economia de energia gerada pela manutenção regular dos equipamentos.</p>

    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Como escolher a empresa certa para o PMOC em São Paulo?</h2>

    <p>Antes de contratar, verifique se a empresa oferece:</p>

    <ul className="list-disc pl-6 space-y-2 my-4">
      <li>ART (Anotação de Responsabilidade Técnica) inclusa no contrato</li>
      <li>Relatório técnico após cada visita preventiva</li>
      <li>Técnicos certificados pelas marcas dos equipamentos</li>
      <li>Experiência comprovada com o tipo do seu estabelecimento</li>
      <li>Contrato com prazo e frequência de visitas claramente definidos</li>
      <li>CNPJ ativo e nota fiscal em todos os serviços</li>
    </ul>

    <p>Desconfie de empresas que oferecem PMOC muito abaixo do preço de mercado sem incluir a ART — esse documento é obrigatório e sua ausência invalida o contrato perante a Vigilância Sanitária.</p>

    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">PMOC em São Paulo e ABC: New Clima atende sua empresa</h2>

    <p>A New Clima Ar Condicionado elabora e executa contratos de PMOC em São Paulo e ABC Paulista (Santo André, São Bernardo do Campo, São Caetano do Sul, Diadema e Mauá). Nossa equipe é certificada pelas principais marcas do mercado e entrega toda a documentação necessária para a Vigilância Sanitária.</p>

    <p>Fazemos o levantamento dos seus equipamentos gratuitamente e entregamos a proposta no mesmo dia.</p>

    <div className="bg-ice rounded-2xl p-6 my-8 border border-primary/10">
      <h3 className="text-lg font-bold text-primary mb-2">Solicite sua proposta de PMOC gratuitamente</h3>
      <p className="text-slate-600 text-sm mb-4">Levantamento gratuito · Proposta no mesmo dia · ART inclusa · Documentação completa</p>
      <div className="flex flex-col sm:flex-row gap-3">
        <a href="https://api.whatsapp.com/send/?phone=5511963462516&text=Olá!%20Gostaria%20de%20uma%20proposta%20de%20PMOC%20para%20minha%20empresa." rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-success text-white font-bold py-3 px-6 rounded-xl text-sm hover:-translate-y-0.5 transition-all">
          Solicitar Proposta pelo WhatsApp
        </a>
        <a href="tel:+5511963462516" className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary font-bold py-3 px-6 rounded-xl text-sm hover:bg-primary hover:text-white transition-all">
          (11) 96346-2516
        </a>
      </div>
    </div>

    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Perguntas frequentes sobre o custo do PMOC em SP</h2>

    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">O PMOC é obrigatório para escritórios pequenos?</h3>
    <p>Escritórios com sistema de ar condicionado acima de 60.000 BTUs são obrigados. A maioria dos escritórios comerciais em São Paulo se enquadra nessa faixa. Para escritórios menores, a Vigilância Sanitária pode exigir durante vistorias, especialmente em prédios comerciais.</p>

    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Condomínio residencial precisa de PMOC?</h3>
    <p>Condomínios com ar condicionado central ou com capacidade acima de 60.000 BTUs nas áreas comuns são obrigados. O síndico responde legalmente pelo cumprimento — inclusive com responsabilidade pessoal em casos de multa.</p>

    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Qual a diferença entre PMOC e manutenção preventiva?</h3>
    <p>A manutenção preventiva é a execução prática do serviço (limpeza, verificação de gás, ajustes). O PMOC é o plano documentado que define quando, como e com que frequência essas manutenções devem ser feitas — e comprova para a Vigilância Sanitária que estão sendo realizadas conforme a lei.</p>

    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Com que frequência as visitas do PMOC devem ser feitas?</h3>
    <p>A frequência mínima é semestral para a maioria dos estabelecimentos. Para ambientes com alto fluxo de pessoas (clínicas, restaurantes, academias), recomendamos visitas trimestrais ou até mensais. A frequência correta é definida no plano conforme o tipo de uso dos equipamentos.</p>

    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Quanto tempo leva para elaborar o PMOC?</h3>
    <p>A elaboração do documento leva em média 5 a 10 dias úteis após o levantamento técnico dos equipamentos. A execução (visitas preventivas) começa imediatamente após a assinatura do contrato.</p>

  </BlogPostLayout>
);

export default BlogCustoPMOC;
