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
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 bg-success text-white font-bold py-4 px-8 rounded-xl transition-all hover:-translate-y-0.5 shadow-lg shadow-success/20"
      >
        <MessageCircle size={20} />
        Falar no WhatsApp
      </a>
    </div>
  </div>
);

export const BlogInverter = () => (
  <BlogPostLayout 
    tag="Guia de Compra"
    title="Ar-Condicionado Inverter Vale a Pena? A Verdade Sobre a Economia"
    date="15 de Março, 2026"
    author="Eng. Ricardo Carvalho"
  >
    <p>
      Uma das perguntas mais frequentes que recebemos na <strong>New Clima Ar Condicionado</strong> é se a tecnologia Inverter realmente compensa o investimento inicial mais alto. A resposta curta é: <strong>sim, mas depende do seu perfil de uso.</strong>
    </p>
    <h2 className="text-2xl font-bold text-primary">Como funciona a tecnologia Inverter?</h2>
    <p>
      Diferente dos aparelhos convencionais (On/Off), onde o compressor liga e desliga constantemente para manter a temperatura, o sistema Inverter nunca desliga totalmente. Ele apenas reduz a velocidade do compressor quando a temperatura desejada é atingida. Isso evita os picos de energia que ocorrem toda vez que um motor elétrico precisa "dar a partida".
    </p>
    <h2 className="text-2xl font-bold text-primary">Vantagens Reais</h2>
    <ul className="list-disc pl-6 space-y-2">
      <li><strong>Economia de Energia:</strong> Redução de até 60% na conta de luz comparado ao modelo convencional.</li>
      <li><strong>Conforto Térmico:</strong> A temperatura do ambiente fica estável, sem aquelas oscilações de "muito frio" e "muito quente".</li>
      <li><strong>Silêncio Absoluto:</strong> Como o compressor trabalha em rotações menores, o ruído da unidade externa é drasticamente menor.</li>
      <li><strong>Durabilidade:</strong> Menos desgaste mecânico por não ter o impacto do liga/desliga constante.</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary">Quando vale a pena?</h2>
    <p>
      Se você usa o ar condicionado por mais de 4 horas diárias (como em quartos para dormir ou escritórios), o <strong>Inverter se paga em menos de 18 meses</strong> apenas com a economia na conta de luz. Em São Paulo, onde o calor tem sido cada vez mais frequente, o Inverter deixou de ser um luxo para se tornar uma escolha inteligente de engenharia residencial.
    </p>
  </BlogPostLayout>
);

export const BlogApartamento = () => (
  <BlogPostLayout 
    tag="Instalação"
    title="Instalação de Ar-Condicionado em Apartamento: O Que Saber Antes de Começar"
    date="10 de Março, 2026"
    author="Equipe Técnica New Clima"
  >
    <p>
      Morar em apartamento em <strong>São Paulo ou no ABC</strong> exige planejamento extra na hora de instalar um ar condicionado. Não basta apenas comprar o aparelho; é preciso respeitar normas de condomínio, prefeitura e segurança estrutural.
    </p>
    <h2 className="text-2xl font-bold text-primary">1. Normas do Condomínio e Fachada</h2>
    <p>
      Antes de qualquer furo, consulte a convenção do seu condomínio. Muitos prédios proíbem a alteração da fachada ou exigem que a condensadora fique em locais específicos, como a varanda técnica. O descumprimento pode gerar multas pesadas e a obrigatoriedade de remover o equipamento.
    </p>
    <h2 className="text-2xl font-bold text-primary">2. Varanda Técnica e Drenagem</h2>
    <p>
      A drenagem é o ponto onde ocorrem mais problemas em apartamentos. A água condensada precisa ser descartada corretamente. Se o prédio não possui dreno embutido, você precisará de uma bomba de dreno ou de um projeto que direcione a água para um ralo interno, evitando o gotejamento na fachada ou no vizinho de baixo.
    </p>
    <h2 className="text-2xl font-bold text-primary">3. Carga Elétrica e Disjuntores</h2>
    <p>
      Verifique se o quadro elétrico do seu apartamento suporta a carga do novo aparelho. Em prédios mais antigos, pode ser necessária a troca da fiação ou do disjuntor para evitar sobrecargas e riscos de incêndio.
    </p>
    <div className="bg-ice p-6 rounded-2xl border border-primary-light/10">
      <p className="font-bold text-primary mb-2">Dica de Ouro:</p>
      <p className="text-sm">Sempre solicite a ART (Anotação de Responsabilidade Técnica) do instalador. Muitos condomínios exigem esse documento assinado por um engenheiro para autorizar a entrada da equipe.</p>
    </div>
  </BlogPostLayout>
);

export const BlogBTUs = () => (
  <BlogPostLayout 
    tag="Guia Técnico"
    title="Como Calcular os BTUs Ideais Para Seu Ambiente: Não Erre na Escolha"
    date="05 de Março, 2026"
    author="Eng. Ricardo Carvalho"
  >
    <p>
      Escolher um ar condicionado com capacidade insuficiente (poucos BTUs) fará com que ele nunca gele o ambiente e gaste muita energia tentando. Escolher um muito potente (muitos BTUs) é desperdício de dinheiro e pode gerar um ambiente úmido e desconfortável.
    </p>
    <h2 className="text-2xl font-bold text-primary">A Regra de Ouro do Cálculo</h2>
    <p>
      Para um cálculo básico residencial em São Paulo, consideramos:
    </p>
    <ul className="list-disc pl-6 space-y-2">
      <li><strong>600 BTUs</strong> por metro quadrado (m²).</li>
      <li><strong>+ 600 BTUs</strong> por pessoa adicional (a primeira não conta).</li>
      <li><strong>+ 600 BTUs</strong> por cada eletrônico que gere calor (TV, Computador).</li>
      <li><strong>+ 800 BTUs</strong> (em vez de 600) se o ambiente tiver muita incidência de sol à tarde.</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary">Exemplo Prático</h2>
    <p>
      Um quarto de 15m², com sol à tarde, 2 pessoas e 1 TV:
      <br />
      (15m² x 800) + 600 (pessoa extra) + 600 (TV) = <strong>13.200 BTUs</strong>.
      <br />
      Nesse caso, o ideal seria um aparelho de <strong>12.000 BTUs</strong> (se o sol for leve) ou <strong>18.000 BTUs</strong> para garantir conforto total.
    </p>
    <p>
      Lembre-se: esse cálculo é uma estimativa. Ambientes comerciais, com pé-direito alto ou muitas janelas de vidro exigem um cálculo de carga térmica profissional feito por um técnico da <strong>New Clima Ar</strong>.
    </p>
  </BlogPostLayout>
);

export const BlogPMOC = () => (
  <BlogPostLayout 
    tag="Legislação"
    title="PMOC Obrigatório: O Que Sua Empresa Precisa Saber Para Evitar Multas"
    date="01 de Março, 2026"
    author="Equipe de Engenharia New Clima"
  >
    <p>
      Desde 2018, a Lei Federal 13.589 tornou obrigatório o <strong>PMOC (Plano de Manutenção, Operação e Controle)</strong> para todos os edifícios públicos ou privados que possuem sistemas de ar condicionado. Se sua empresa tem uma soma de capacidades superior a 60.000 BTUs (5 TR), você precisa de um PMOC assinado por um responsável técnico.
    </p>
    <h2 className="text-2xl font-bold text-primary">Por que o PMOC é importante?</h2>
    <p>
      O objetivo principal é garantir a qualidade do ar interno e prevenir a "Síndrome do Edifício Doente". A falta do PMOC pode gerar multas que variam de <strong>R$ 2.000,00 a R$ 1.500.000,00</strong>, aplicadas pela Vigilância Sanitária.
    </p>
    <h2 className="text-2xl font-bold text-primary">O que deve constar no seu PMOC?</h2>
    <ul className="list-disc pl-6 space-y-2">
      <li>Identificação do imóvel e do responsável técnico.</li>
      <li>Relação de todos os equipamentos de climatização.</li>
      <li>Cronograma mensal de atividades de manutenção e limpeza.</li>
      <li>Relatórios de análise da qualidade do ar (semestral).</li>
      <li>Registro de todas as ocorrências e reparos feitos no sistema.</li>
    </ul>
    <p>
      A <strong>New Clima Ar Condicionado</strong> oferece a gestão completa do PMOC para sua empresa em São Paulo e ABC, cuidando de toda a burocracia e garantindo que seus equipamentos operem sempre na máxima eficiência.
    </p>
  </BlogPostLayout>
);
