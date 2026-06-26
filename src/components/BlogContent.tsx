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

export const BlogInverter = () => (
  <BlogPostLayout tag="Guia Técnico" title="Ar Condicionado Inverter: O Que É, Vantagens e Vale a Pena em SP?" date="26 de Junho, 2026" author="Equipe Técnica New Clima">
    <p>O ar condicionado Inverter já representa mais de 70% das vendas em São Paulo — e não é por acaso. A tecnologia promete economia de energia de até 60% em relação ao modelo convencional. Mas vale a pena pagar mais por um Inverter? Neste guia explicamos tudo.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">O que é o ar condicionado Inverter?</h2>
    <p>O ar condicionado Inverter tem um compressor de velocidade variável. Em vez de ligar e desligar para controlar a temperatura (como o convencional), ele ajusta a velocidade do compressor continuamente — mantendo a temperatura estável com muito menos gasto de energia.</p>
    <p>O modelo <strong>convencional</strong> funciona assim: liga no máximo, resfria o ambiente, desliga, o ambiente esquenta, liga de novo. Esse ciclo de liga e desliga consome muita energia e gera variações de temperatura.</p>
    <p>O modelo <strong>Inverter</strong> funciona assim: liga e vai reduzindo a velocidade conforme o ambiente atinge a temperatura desejada — mantendo tudo estável sem desligar o compressor.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Comparação: Inverter x Convencional</h2>
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse text-sm">
        <thead><tr className="bg-primary text-white"><th className="p-3 text-left border border-primary">Critério</th><th className="p-3 text-left border border-primary">Convencional</th><th className="p-3 text-left border border-primary">Inverter</th></tr></thead>
        <tbody>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Consumo de energia</td><td className="p-3 border border-slate-200">Alto (picos na partida)</td><td className="p-3 border border-slate-200 font-bold text-success">30% a 60% menor</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Controle de temperatura</td><td className="p-3 border border-slate-200">Variação de ±2°C</td><td className="p-3 border border-slate-200 font-bold text-success">Estável (±0,5°C)</td></tr>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Nível de ruído</td><td className="p-3 border border-slate-200">Mais ruidoso (partidas)</td><td className="p-3 border border-slate-200 font-bold text-success">Mais silencioso</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Preço inicial</td><td className="p-3 border border-slate-200 font-bold text-success">Menor</td><td className="p-3 border border-slate-200">15% a 30% mais caro</td></tr>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Vida útil do compressor</td><td className="p-3 border border-slate-200">Menor (desgaste por partidas)</td><td className="p-3 border border-slate-200 font-bold text-success">Maior</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Tempo para resfriar</td><td className="p-3 border border-slate-200">Mais lento</td><td className="p-3 border border-slate-200 font-bold text-success">Mais rápido</td></tr>
        </tbody>
      </table>
    </div>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Quanto economiza na conta de luz em SP?</h2>
    <p>Em São Paulo, onde o ar condicionado fica ligado em média 6 a 8 horas por dia durante o verão, a economia do Inverter é significativa. Um split 12.000 BTUs convencional consome em média 1.200W. O mesmo equipamento Inverter consome em regime de manutenção entre 300W e 600W.</p>
    <p>Calculando com a tarifa média da Enel SP (R$ 0,85/kWh em 2026):</p>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li>Convencional: ~R$ 180/mês ligado 8h/dia</li>
      <li>Inverter: ~R$ 80/mês nas mesmas condições</li>
      <li><strong>Economia: ~R$ 100/mês ou R$ 1.200/ano</strong></li>
    </ul>
    <p>A diferença de preço entre um convencional e um Inverter é de R$ 400 a R$ 800. Com a economia gerada, o Inverter se paga em 4 a 8 meses de uso.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Inverter vale a pena para quem usa pouco?</h2>
    <p>Se você usa o ar condicionado menos de 2 horas por dia, a economia do Inverter é menor e o retorno leva mais tempo. Para esse perfil, o convencional pode ser mais vantajoso pelo menor preço inicial.</p>
    <p>Para uso acima de 4 horas diárias — especialmente à noite no quarto ou em home office — o Inverter é sempre a melhor escolha a longo prazo.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Manutenção do Inverter é diferente?</h2>
    <p>A frequência de manutenção é a mesma — semestral para uso residencial. Porém, o Inverter tem placa eletrônica mais sofisticada, e o conserto em caso de queima é mais caro. Por isso, a manutenção preventiva é ainda mais importante para proteger o investimento.</p>
    <div className="bg-ice rounded-2xl p-6 my-8 border border-primary/10">
      <h3 className="text-lg font-bold text-primary mb-2">Quer instalar um Inverter em SP?</h3>
      <p className="text-slate-600 text-sm mb-4">Indicamos o modelo certo para o seu ambiente · Visita gratuita · Garantia de 1 ano</p>
      <a href="https://api.whatsapp.com/send/?phone=5511963462516&text=Olá!%20Tenho%20interesse%20em%20instalar%20um%20ar%20condicionado%20Inverter." rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-success text-white font-bold py-3 px-6 rounded-xl text-sm hover:-translate-y-0.5 transition-all">Falar com Especialista</a>
    </div>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Perguntas frequentes</h2>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Inverter funciona em 110V e 220V?</h3>
    <p>A maioria dos modelos Inverter disponíveis no Brasil é bivolt — funciona em 110V e 220V automaticamente. Verifique sempre a etiqueta do equipamento antes da instalação.</p>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Posso trocar um convencional por Inverter na mesma instalação?</h3>
    <p>Sim, desde que a bitola do cabo elétrico e o disjuntor sejam compatíveis com a carga do novo equipamento. Nossa equipe verifica tudo na visita técnica gratuita.</p>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Quais marcas de Inverter são mais recomendadas em SP?</h3>
    <p>LG, Samsung, Daikin, Midea e Fujitsu são as mais vendidas e com melhor assistência técnica em São Paulo. A New Clima instala e faz manutenção em todas essas marcas.</p>
  </BlogPostLayout>
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

export const BlogBTUs = () => (
  <BlogPostLayout tag="Guia Técnico" title="Como Calcular BTUs: Tabela Completa para Escolher o Ar Condicionado Certo" date="26 de Junho, 2026" author="Equipe Técnica New Clima">
    <p>Escolher o ar condicionado com a potência errada é um dos erros mais comuns em São Paulo. Um equipamento com BTUs insuficientes não consegue resfriar o ambiente e fica ligado o tempo todo. Um equipamento superdimensionado liga e desliga com muita frequência, consumindo mais energia e reduzindo a vida útil.</p>
    <p>Neste guia, mostramos como calcular os BTUs certos para qualquer ambiente.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">O que é BTU?</h2>
    <p>BTU (British Thermal Unit) é a unidade de medida da capacidade de resfriamento de um ar condicionado. Quanto maior o BTU, mais potente o equipamento e maior sua capacidade de resfriar ambientes grandes.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Tabela de BTUs por tamanho de ambiente</h2>
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse text-sm">
        <thead><tr className="bg-primary text-white"><th className="p-3 text-left border border-primary">Área do ambiente</th><th className="p-3 text-left border border-primary">BTUs recomendados</th><th className="p-3 text-left border border-primary">Uso típico</th></tr></thead>
        <tbody>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Até 10m²</td><td className="p-3 border border-slate-200 font-bold text-primary">7.000 a 9.000 BTUs</td><td className="p-3 border border-slate-200">Quarto solteiro, escritório pequeno</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">10m² a 15m²</td><td className="p-3 border border-slate-200 font-bold text-primary">9.000 BTUs</td><td className="p-3 border border-slate-200">Quarto casal pequeno</td></tr>
          <tr className="bg-white"><td className="p-3 border border-slate-200">15m² a 20m²</td><td className="p-3 border border-slate-200 font-bold text-primary">12.000 BTUs</td><td className="p-3 border border-slate-200">Quarto casal, sala pequena</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">20m² a 30m²</td><td className="p-3 border border-slate-200 font-bold text-primary">18.000 BTUs</td><td className="p-3 border border-slate-200">Sala de estar, quarto grande</td></tr>
          <tr className="bg-white"><td className="p-3 border border-slate-200">30m² a 40m²</td><td className="p-3 border border-slate-200 font-bold text-primary">24.000 BTUs</td><td className="p-3 border border-slate-200">Sala ampla, escritório médio</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">40m² a 60m²</td><td className="p-3 border border-slate-200 font-bold text-primary">30.000 a 36.000 BTUs</td><td className="p-3 border border-slate-200">Sala grande, ambiente comercial</td></tr>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Acima de 60m²</td><td className="p-3 border border-slate-200 font-bold text-primary">Multi Split ou VRF</td><td className="p-3 border border-slate-200">Ambiente comercial, open space</td></tr>
        </tbody>
      </table>
    </div>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Fatores que aumentam a necessidade de BTUs</h2>
    <p>A tabela acima é uma referência base. Alguns fatores exigem acréscimo de BTUs:</p>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li><strong>Exposição solar intensa (especialmente oeste):</strong> acrescente 10% a 20%</li>
      <li><strong>Muitas janelas ou vidros sem película:</strong> acrescente 10%</li>
      <li><strong>Mais de 3 pessoas no ambiente:</strong> acrescente 600 BTUs por pessoa extra</li>
      <li><strong>Equipamentos eletrônicos gerando calor (servidores, TVs, computadores):</strong> acrescente 10% a 15%</li>
      <li><strong>Pé direito acima de 2,80m:</strong> acrescente 10% a 20%</li>
      <li><strong>Cozinha ou ambiente com fogão próximo:</strong> acrescente 20% a 30%</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Fórmula simplificada de cálculo de BTUs</h2>
    <p>Uma fórmula usada por técnicos para ambientes residenciais padrão em São Paulo:</p>
    <div className="bg-slate-100 rounded-xl p-4 my-4 font-mono text-sm">
      BTUs = Área (m²) × 600
    </div>
    <p>Exemplo: quarto de 15m² → 15 × 600 = 9.000 BTUs</p>
    <p>Para ambientes comerciais ou com alta carga térmica, o cálculo é mais complexo e deve ser feito por um técnico — a New Clima realiza esse cálculo gratuitamente na visita técnica.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Erros comuns na escolha de BTUs em SP</h2>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li><strong>Subestimar o ambiente:</strong> comprar 9.000 BTUs para um quarto de 20m² — o aparelho não consegue resfriar e fica em sobrecarga constante</li>
      <li><strong>Superdimensionar:</strong> comprar 18.000 BTUs para um quarto de 12m² — o equipamento liga e desliga com muita frequência, gerando umidade e consumindo mais energia</li>
      <li><strong>Ignorar a exposição solar:</strong> apartamentos voltados para o oeste em SP recebem sol da tarde intenso e precisam de mais BTUs</li>
      <li><strong>Não considerar o pé direito:</strong> lofts e ambientes com pé direito alto precisam de potência maior</li>
    </ul>
    <div className="bg-ice rounded-2xl p-6 my-8 border border-primary/10">
      <h3 className="text-lg font-bold text-primary mb-2">Não sabe quantos BTUs precisa? A gente calcula.</h3>
      <p className="text-slate-600 text-sm mb-4">Visita técnica gratuita · Cálculo personalizado · Indicação do modelo ideal</p>
      <a href="https://api.whatsapp.com/send/?phone=5511963462516&text=Olá!%20Preciso%20de%20ajuda%20para%20calcular%20os%20BTUs%20do%20meu%20ambiente." rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-success text-white font-bold py-3 px-6 rounded-xl text-sm hover:-translate-y-0.5 transition-all">Calcular Grátis pelo WhatsApp</a>
    </div>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Perguntas frequentes</h2>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Posso usar 9.000 BTUs em uma sala de 25m²?</h3>
    <p>Não é recomendado. Para uma sala de 25m², o mínimo recomendado é 12.000 BTUs. Um aparelho subdimensionado trabalha em sobrecarga e pode durar metade do tempo esperado.</p>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">BTU maior sempre é melhor?</h3>
    <p>Não. Um equipamento superdimensionado resfria o ambiente muito rápido e desliga — o ciclo curto de liga e desliga aumenta o consumo de energia e não remove a umidade adequadamente, deixando o ambiente frio mas úmido.</p>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Como calcular BTU para um ambiente com mezanino?</h3>
    <p>Some a área do nível inferior com o superior e aplique o fator de pé direito alto (+20%). Em ambientes com mezanino, geralmente é melhor ter dois equipamentos menores — um em cada nível — do que um grande concentrado.</p>
  </BlogPostLayout>
);

export const BlogPMOC = () => (
  <BlogPostLayout tag="Legislação" title="PMOC Obrigatório: O Que Sua Empresa Precisa Saber Para Evitar Multas" date="01 de Março, 2026" author="Equipe Técnica New Clima">
    <p>Desde 2018, a Lei Federal 13.589 tornou obrigatório o <strong>PMOC</strong> para todos os edifícios que possuem sistemas de ar condicionado acima de 60.000 BTUs.</p>
    <h2 className="text-2xl font-bold text-primary">Por que o PMOC é importante?</h2>
    <p>A falta do PMOC pode gerar multas que variam de <strong>R$ 2.000,00 a R$ 1.500.000,00</strong>, aplicadas pela Vigilância Sanitária.</p>
    <h2 className="text-2xl font-bold text-primary">O que deve constar no seu PMOC?</h2>
    <ul className="list-disc pl-6 space-y-2">
      <li>Identificação do imóvel e do responsável técnico.</li>
      <li>Relação de todos os equipamentos de climatização.</li>
      <li>Cronograma mensal de atividades de manutenção e limpeza.</li>
      <li>Relatórios de análise da qualidade do ar (semestral).</li>
    </ul>
  </BlogPostLayout>
);

export const BlogRoundCassette = () => (
  <BlogPostLayout tag="Tecnologia" title="LG Round Cassette: Climatização Circular Para Quem Não Aceita Ponto Quente" date="28 de Março, 2026" author="Ricardo Carvalho">
    <p>O <strong>LG Round Cassette</strong> é a revolução estética e funcional no mercado de climatização. O design circular permite uma distribuição de ar em 360 graus.</p>
    <h2 className="text-2xl font-bold text-primary">Design que Valoriza o Projeto</h2>
    <p>Com perfil ultra-fino, ele se integra perfeitamente a tetos modernos, sendo a escolha preferida de arquitetos em bairros como <strong>Vila Madalena e Pinheiros</strong>.</p>
    <h2 className="text-2xl font-bold text-primary">Vantagens Técnicas</h2>
    <ul className="list-disc pl-6 space-y-2">
      <li><strong>Fluxo de Ar 360°:</strong> Elimina correntes de ar diretas desconfortáveis.</li>
      <li><strong>Instalação Flexível:</strong> Ideal para ambientes com pé-direito alto.</li>
      <li><strong>Eficiência Inverter:</strong> Máxima economia com o selo de qualidade LG.</li>
    </ul>
  </BlogPostLayout>
);

export const BlogObraLimpa = () => (
  <BlogPostLayout tag="Instalação" title="Obra Limpa: Como Instalar Ar-Condicionado Sem Quebra-Quebra" date="25 de Março, 2026" author="Equipe Técnica New Clima">
    <p>Na <strong>New Clima Ar</strong>, desenvolvemos o método de <strong>Obra Limpa</strong>, focado em precisão e organização.</p>
    <h2 className="text-2xl font-bold text-primary">Tecnologia a Favor da Limpeza</h2>
    <p>Utilizamos ferramentas de perfuração com sistema de vácuo integrado, que capturam 99% da poeira no momento do furo.</p>
    <h2 className="text-2xl font-bold text-primary">Planejamento Estratégico</h2>
    <p>Nosso objetivo é entregar o conforto do ar condicionado com a casa exatamente como a encontramos: limpa e intacta.</p>
  </BlogPostLayout>
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

export const BlogConvencionalInverter = () => (
  <BlogPostLayout tag="Comparativo" title="Split Convencional vs Inverter: Qual Escolher Para Sua Realidade?" date="18 de Março, 2026" author="Ricardo Carvalho">
    <p>Embora o Inverter seja a tecnologia superior, entender as diferenças ajuda a decidir onde investir seu dinheiro.</p>
    <h2 className="text-2xl font-bold text-primary">Convencional (On/Off)</h2>
    <p>Funciona como uma lâmpada: ou está ligado no máximo, ou desligado. Gera picos de consumo e oscilação de temperatura de até 3°C.</p>
    <h2 className="text-2xl font-bold text-primary">Inverter</h2>
    <p>Funciona como um acelerador de carro: ajusta a potência conforme a necessidade. É até 60% mais econômico e muito mais silencioso.</p>
    <div className="bg-ice p-6 rounded-2xl border border-primary-light/10">
      <p className="font-bold text-primary">Veredito:</p>
      <p>Para o dia a dia em São Paulo, o Inverter é o único que faz sentido financeiro e técnico a longo prazo.</p>
    </div>
  </BlogPostLayout>
);

export const BlogEmpresas = () => (
  <BlogPostLayout tag="Corporativo" title="Ar Condicionado para Empresas: Do Split ao VRF com Foco em ROI" date="12 de Março, 2026" author="Equipe Técnica New Clima">
    <p>Climatização corporativa não é custo, é investimento em produtividade. Funcionários em ambientes com temperatura controlada produzem até 15% mais.</p>
    <h2 className="text-2xl font-bold text-primary">Escalabilidade</h2>
    <p>Para andares inteiros ou edifícios, o sistema <strong>VRF</strong> é a solução definitiva, permitindo controle centralizado e economia de escala.</p>
    <h2 className="text-2xl font-bold text-primary">Conformidade Legal</h2>
    <p>Toda empresa com sistema de climatização coletiva deve possuir o <strong>PMOC</strong>. A New Clima Ar cuida de toda a parte técnica e documentação.</p>
  </BlogPostLayout>
);

export const BlogPMOCObrigatorio = () => (
  <BlogPostLayout tag="PMOC" title="PMOC Obrigatório em São Paulo: Quem Deve Ter, Prazos e Como Regularizar" date="26 de Junho, 2026" author="Equipe Técnica New Clima">
    <p>O PMOC — Plano de Manutenção, Operação e Controle — é obrigatório por lei federal desde 1998 e tem fiscalização cada vez mais rigorosa em São Paulo. Empresas, condomínios e clínicas que não têm o plano em vigor podem ser multadas em até R$ 1,5 milhão pela Vigilância Sanitária.</p>
    <p>Neste guia explicamos quem é obrigado, quais são os prazos e como regularizar a situação da sua empresa em SP.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Qual a lei que exige o PMOC?</h2>
    <p>O PMOC é regulamentado por duas normas principais:</p>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li><strong>Lei Federal 13.589/18:</strong> institui a obrigatoriedade do PMOC para todos os sistemas de ar condicionado de uso público ou coletivo</li>
      <li><strong>Portaria MS 3.523/98:</strong> estabelece os requisitos técnicos mínimos para a qualidade do ar em ambientes climatizados</li>
      <li><strong>Resolução RE 9/2003 da ANVISA:</strong> define os padrões de qualidade do ar interior</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Quem é obrigado a ter PMOC em SP?</h2>
    <p>Todo estabelecimento com sistema de ar condicionado de <strong>uso público ou coletivo</strong> com capacidade acima de 60.000 BTUs. Na prática, isso inclui:</p>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li>Empresas e escritórios com ar condicionado central ou múltiplos splits</li>
      <li>Condomínios comerciais e mistos com ar nas áreas comuns</li>
      <li>Clínicas médicas, odontológicas e laboratórios</li>
      <li>Restaurantes, bares, hotéis e pousadas</li>
      <li>Farmácias e drogarias</li>
      <li>Academias, escolas e creches</li>
      <li>Shopping centers e estabelecimentos de grande porte</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">O que deve conter o PMOC?</h2>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li>Identificação do responsável técnico com ART (Anotação de Responsabilidade Técnica)</li>
      <li>Descrição de todos os equipamentos do sistema</li>
      <li>Cronograma de manutenções preventivas</li>
      <li>Procedimentos de limpeza e higienização</li>
      <li>Registro de todas as manutenções realizadas</li>
      <li>Laudo de qualidade do ar (em alguns casos exigido pela ANVISA)</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Quais são as multas por não ter PMOC em SP?</h2>
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse text-sm">
        <thead><tr className="bg-primary text-white"><th className="p-3 text-left border border-primary">Infração</th><th className="p-3 text-left border border-primary">Penalidade</th></tr></thead>
        <tbody>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Ausência do PMOC</td><td className="p-3 border border-slate-200 font-bold text-red-600">Multa de R$ 2.000 a R$ 75.000</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">PMOC desatualizado ou incompleto</td><td className="p-3 border border-slate-200 font-bold text-red-600">Multa de R$ 2.000 a R$ 75.000</td></tr>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Reincidência</td><td className="p-3 border border-slate-200 font-bold text-red-600">Multa em dobro</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Risco à saúde pública</td><td className="p-3 border border-slate-200 font-bold text-red-600">Até R$ 1.500.000 + interdição</td></tr>
        </tbody>
      </table>
    </div>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Como regularizar o PMOC da sua empresa em SP?</h2>
    <ol className="list-decimal pl-6 space-y-3 my-4">
      <li><strong>Contrate uma empresa especializada:</strong> deve ter engenheiro responsável com ART registrada no CREA</li>
      <li><strong>Levantamento técnico:</strong> técnico visita o estabelecimento e cadastra todos os equipamentos</li>
      <li><strong>Elaboração do plano:</strong> documento com cronograma, procedimentos e responsabilidades</li>
      <li><strong>Execução das manutenções:</strong> visitas periódicas conforme o cronograma do plano</li>
      <li><strong>Registro e arquivo:</strong> manter toda a documentação disponível para apresentar à Vigilância Sanitária</li>
    </ol>
    <div className="bg-ice rounded-2xl p-6 my-8 border border-primary/10">
      <h3 className="text-lg font-bold text-primary mb-2">Regularize o PMOC da sua empresa agora</h3>
      <p className="text-slate-600 text-sm mb-4">Levantamento gratuito · Proposta no mesmo dia · ART inclusa · Documentação completa para a Vigilância Sanitária</p>
      <a href="https://api.whatsapp.com/send/?phone=5511963462516&text=Olá!%20Preciso%20regularizar%20o%20PMOC%20da%20minha%20empresa%20em%20SP." rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-success text-white font-bold py-3 px-6 rounded-xl text-sm hover:-translate-y-0.5 transition-all">Falar com Especialista</a>
    </div>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Perguntas frequentes</h2>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Com que frequência o PMOC deve ser atualizado?</h3>
    <p>O PMOC deve ser atualizado sempre que houver mudança nos equipamentos (adição, remoção ou substituição) ou quando o cronograma de manutenções for alterado. Recomendamos revisão anual do documento.</p>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">A Vigilância Sanitária avisa antes de fiscalizar?</h3>
    <p>Não necessariamente. As fiscalizações podem ser programadas ou por denúncia. Estar regularizado a qualquer momento é a única garantia de evitar multas.</p>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">PMOC e manutenção preventiva são a mesma coisa?</h3>
    <p>Não. O PMOC é o plano documentado. A manutenção preventiva é a execução prática do plano. Os dois são obrigatórios e complementares — ter o documento sem executar as manutenções também configura irregularidade.</p>
  </BlogPostLayout>
);

export const BlogMultaPMOC = () => (
  <BlogPostLayout tag="Legislação" title="Multa por Não Ter PMOC em São Paulo: Valores de R$ 2.000 a R$ 1,5 Milhão" date="03 de Maio, 2026" author="Equipe Técnica New Clima">
    <p>Empresas em São Paulo sem PMOC estão sujeitas a multas de <strong>R$ 2.000 a R$ 1.500.000</strong>, aplicadas pela Vigilância Sanitária.</p>
    <h2 className="text-2xl font-bold text-primary">Valores das Multas por Falta de PMOC</h2>
    <ul className="list-disc pl-6 space-y-2">
      <li><strong>Infração leve:</strong> R$ 2.000 a R$ 75.000</li>
      <li><strong>Infração grave:</strong> R$ 75.000 a R$ 200.000</li>
      <li><strong>Infração gravíssima:</strong> R$ 200.000 a R$ 1.500.000</li>
      <li><strong>Reincidência:</strong> multa em dobro</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary">Como Regularizar Antes de Ser Fiscalizado?</h2>
    <p>Contrate a <strong>New Clima Ar Condicionado</strong> para elaborar e executar o PMOC. Em menos de 30 dias sua empresa estará em conformidade. WhatsApp: <strong>(11) 96346-2516</strong>.</p>
  </BlogPostLayout>
);

export const BlogPMOCCondominio = () => (
  <BlogPostLayout tag="Legislação" title="PMOC para Condomínios em SP: Guia Completo para Síndicos" date="04 de Maio, 2026" author="Equipe Técnica New Clima">
    <p>Síndicos de condomínios em São Paulo: se as áreas comuns têm mais de 60.000 BTUs de climatização, o <strong>PMOC é obrigatório</strong>. Multa pode chegar a R$ 1,5 milhão.</p>
    <h2 className="text-2xl font-bold text-primary">Responsabilidade do Síndico</h2>
    <p>O síndico é o responsável legal pelo cumprimento do PMOC. Em caso de fiscalização, o auto de infração é lavrado em nome do condomínio.</p>
    <h2 className="text-2xl font-bold text-primary">Quanto Custa o PMOC para Condomínios em SP?</h2>
    <p>Para condomínios de médio porte, o valor varia entre R$ 800 e R$ 2.500 mensais. A <strong>New Clima</strong> oferece orçamento gratuito: (11) 96346-2516.</p>
    <h2 className="text-2xl font-bold text-primary">Passo a Passo Para Regularizar</h2>
    <ul className="list-disc pl-6 space-y-2">
      <li><strong>1. Inventário:</strong> levantar todos os equipamentos das áreas comuns</li>
      <li><strong>2. Responsável técnico:</strong> contratar empresa habilitada</li>
      <li><strong>3. Elaboração do PMOC:</strong> documento com cronograma e procedimentos</li>
      <li><strong>4. Execução:</strong> início das manutenções conforme cronograma</li>
      <li><strong>5. Registros:</strong> manter arquivo de todas as manutenções</li>
    </ul>
  </BlogPostLayout>
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

export const BlogSaude = () => (
  <BlogPostLayout tag="Saúde" title="Ar Condicionado Faz Mal à Saúde? Verdades e Mitos" date="9 de Maio, 2026" author="José Erivaldo">
    <p>Uma dúvida muito comum entre nossos clientes em São Paulo é: <strong>ar condicionado faz mal à saúde?</strong> A resposta depende de como o equipamento é usado e mantido. Sem manutenção regular, sim, pode causar problemas. Com higienização em dia, é aliado da saúde.</p>
    <h2 className="text-2xl font-bold text-primary">Por que o ar condicionado pode fazer mal?</h2>
    <p>Quando o ar condicionado fica longos períodos sem limpeza, o filtro acumula <strong>fungos, ácaros, bactérias e poeira</strong>. Ao ligar o aparelho, essas partículas são expelidas no ar do ambiente, podendo causar:</p>
    <ul className="space-y-2 list-disc pl-6">
      <li><strong>Rinite e sinusite:</strong> irritação das mucosas nasais</li>
      <li><strong>Asma:</strong> especialmente em crianças e idosos</li>
      <li><strong>Alergias:</strong> coceira nos olhos, espirros frequentes</li>
      <li><strong>Ressecamento:</strong> ar seco irrita garganta e pele</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary">Como evitar os problemas de saúde?</h2>
    <p>A solução é simples: <strong>manutenção preventiva a cada 6 meses</strong> para uso residencial e a cada 3 meses para uso comercial. A higienização profunda elimina todos os agentes causadores de doenças respiratórias.</p>
    <p>Além disso, manter a temperatura entre <strong>23°C e 25°C</strong> e não apontar o fluxo de ar diretamente para as pessoas reduz muito os desconfortos. Em São Paulo, com a qualidade do ar já comprometida pela poluição, um ar condicionado limpo filtra partículas e melhora o ar interior.</p>
    <h2 className="text-2xl font-bold text-primary">Conclusão</h2>
    <p>Ar condicionado não faz mal à saúde — <strong>ar condicionado sujo faz</strong>. Com higienização regular, o equipamento melhora a qualidade do ar e o conforto de quem vive e trabalha no ambiente. Agende sua higienização com a New Clima: <strong>(11) 96346-2516</strong>.</p>
  </BlogPostLayout>
);

export const BlogDormir = () => (
  <BlogPostLayout tag="Uso do Ar Condicionado" title="Dormir com Ar Condicionado Faz Mal? Saiba a Verdade" date="9 de Maio, 2026" author="José Erivaldo">
    <p>Com o calor de São Paulo, dormir com ar condicionado ligado virou rotina para milhões de pessoas. Mas afinal, <strong>dormir com ar condicionado faz mal?</strong> Não necessariamente — desde que você siga algumas boas práticas.</p>
    <h2 className="text-2xl font-bold text-primary">O que pode causar desconforto à noite</h2>
    <ul className="space-y-2 list-disc pl-6">
      <li><strong>Temperatura muito baixa:</strong> abaixo de 20°C resseca as vias aéreas e causa desconforto</li>
      <li><strong>Ar direcionado ao corpo:</strong> pode causar torcicolos e ressecamento</li>
      <li><strong>Filtros sujos:</strong> expelem alérgenos que prejudicam o sono</li>
      <li><strong>Ruído excessivo:</strong> sinal de manutenção atrasada</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary">Como dormir bem com ar condicionado</h2>
    <p>Configure o <strong>timer (sleep mode)</strong> para desligar automaticamente após 2 a 3 horas. Mantenha a temperatura entre <strong>23°C e 26°C</strong>. Não aponte a saída de ar diretamente para a cama. Mantenha a higienização em dia — especialmente no quarto, onde você passa 8 horas respirando o ar filtrado pelo aparelho.</p>
    <p>Um dado importante: o modo <strong>Sleep</strong> presente na maioria dos inverter aumenta gradualmente a temperatura durante a noite, simulando a queda natural da temperatura corporal durante o sono — muito mais confortável e econômico.</p>
    <h2 className="text-2xl font-bold text-primary">Conclusão</h2>
    <p>Dormir com ar condicionado <strong>não faz mal</strong> quando o equipamento está limpo e a temperatura está regulada corretamente. O segredo é manutenção em dia e configuração adequada. Dúvidas? Fale com a New Clima: <strong>(11) 96346-2516</strong>.</p>
  </BlogPostLayout>
);

export const BlogConsumo = () => (
  <BlogPostLayout tag="Economia de Energia" title="Ar Condicionado Gasta Mais de Dia ou à Noite? Descubra Agora" date="9 de Maio, 2026" author="José Erivaldo">
    <p>Uma dúvida frequente de quem quer economizar na conta de luz em São Paulo: <strong>ar condicionado gasta mais de dia ou à noite?</strong> A resposta envolve temperatura externa, tipo de equipamento e como você usa o aparelho.</p>
    <h2 className="text-2xl font-bold text-primary">Por que o período faz diferença</h2>
    <p>O ar condicionado trabalha comparando a temperatura interna desejada com a temperatura externa. Quanto maior a diferença, mais esforço — e mais energia consumida. Em São Paulo, durante o dia o calor pode chegar a <strong>35°C ou mais</strong>. À noite, a temperatura cai para 20°C a 22°C.</p>
    <p>Resultado: <strong>de dia o ar condicionado consome mais</strong>, pois precisa trabalhar mais para atingir os 23°C desejados. À noite, o esforço é menor e o consumo cai significativamente.</p>
    <h2 className="text-2xl font-bold text-primary">Dicas para economizar independente do horário</h2>
    <ul className="space-y-2 list-disc pl-6">
      <li>Use o <strong>modo Inverter</strong> — ele ajusta a potência automaticamente</li>
      <li>Mantenha portas e janelas fechadas</li>
      <li>Use o <strong>timer</strong> para não deixar ligado sem necessidade</li>
      <li>Faça manutenção regular — aparelho limpo consome até <strong>30% menos</strong></li>
      <li>Mantenha a temperatura em <strong>23°C</strong> — cada grau a mais economiza 5% de energia</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary">Tarifa de energia em SP</h2>
    <p>Na ENEL São Paulo, a <strong>tarifa branca</strong> cobra mais nos horários de pico (18h às 21h). Se você tem tarifa convencional, o horário não impacta o custo direto — mas o consumo físico é maior durante o dia pelo calor externo. Consulte a New Clima para escolher o equipamento mais eficiente: <strong>(11) 96346-2516</strong>.</p>
  </BlogPostLayout>
);

export const BlogQuantoGasta = () => (
  <BlogPostLayout tag="Economia de Energia" title="Quanto Gasta um Ar Condicionado Inverter por Mês? Conta Exata" date="9 de Maio, 2026" author="José Erivaldo">
    <p>Antes de comprar ou instalar, a dúvida é sempre: <strong>quanto gasta um ar condicionado inverter por mês?</strong> A resposta depende da potência, horas de uso e tarifa local. Vamos aos números reais para São Paulo.</p>
    <h2 className="text-2xl font-bold text-primary">Como calcular o consumo</h2>
    <p>A fórmula básica: <strong>Consumo (kWh) = Potência (kW) × Horas de uso × Dias</strong>. Um split inverter de 9.000 BTUs tem potência média de 0,85 kW. Usando 8 horas por dia durante 30 dias: <strong>0,85 × 8 × 30 = 204 kWh/mês</strong>.</p>
    <p>Com a tarifa média da ENEL SP de <strong>R$ 0,85/kWh</strong>, o custo seria: <strong>204 × 0,85 = R$ 173/mês</strong>.</p>
    <h2 className="text-2xl font-bold text-primary">Tabela de consumo estimado em SP</h2>
    <ul className="space-y-2 list-disc pl-6">
      <li><strong>9.000 BTUs inverter (8h/dia):</strong> ~R$ 130 a R$ 180/mês</li>
      <li><strong>12.000 BTUs inverter (8h/dia):</strong> ~R$ 170 a R$ 230/mês</li>
      <li><strong>18.000 BTUs inverter (8h/dia):</strong> ~R$ 250 a R$ 320/mês</li>
      <li><strong>24.000 BTUs inverter (8h/dia):</strong> ~R$ 320 a R$ 420/mês</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary">Inverter vs Convencional — diferença real</h2>
    <p>Um modelo convencional de mesma potência consome em média <strong>35% a 60% mais</strong> do que o inverter, pois funciona em liga/desliga constante. O inverter ajusta a rotação do compressor — muito mais eficiente.</p>
    <p>A manutenção em dia também impacta diretamente: um aparelho com filtro sujo consome até <strong>30% mais energia</strong>. Agende com a New Clima: <strong>(11) 96346-2516</strong>.</p>
  </BlogPostLayout>
);

export const BlogMauCheiro = () => (
  <BlogPostLayout tag="Problemas" title="Mau Cheiro no Ar Condicionado: Causas e Como Eliminar" date="9 de Maio, 2026" author="José Erivaldo">
    <p>Se o seu ar condicionado está soltando <strong>mau cheiro</strong>, é sinal de que precisa de atenção imediata. O odor ruim indica acúmulo de fungos, bactérias ou sujeira — o que também prejudica a qualidade do ar que você respira.</p>
    <h2 className="text-2xl font-bold text-primary">Principais causas do mau cheiro</h2>
    <ul className="space-y-2 list-disc pl-6">
      <li><strong>Fungos e mofo:</strong> crescem na umidade do evaporador e na bandeja de dreno</li>
      <li><strong>Dreno entupido:</strong> água parada cria ambiente ideal para bactérias</li>
      <li><strong>Filtros sujos:</strong> retêm sujeira orgânica que apodrece com o calor</li>
      <li><strong>Cheiro de queimado:</strong> pode ser poeira acumulada nos resistores ou problema elétrico</li>
      <li><strong>Cheiro de plástico:</strong> pode ser equipamento novo aquecendo ou problema no motor</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary">Como eliminar o mau cheiro</h2>
    <p>A solução definitiva é a <strong>higienização profunda</strong> com produto bactericida. O processo inclui limpeza da serpentina evaporadora, turbina, filtros e desobstrução do dreno. Em São Paulo, a umidade alta favorece o crescimento de fungos — recomendamos higienização a cada 6 meses para residências.</p>
    <p><strong>Não use produtos caseiros</strong> como vinagre ou desinfetante diretamente no aparelho — podem danificar componentes e anular a garantia. Chame um técnico certificado. Agende com a New Clima: <strong>(11) 96346-2516</strong>.</p>
  </BlogPostLayout>
);

export const BlogDesligaSozinho = () => (
  <BlogPostLayout tag="Problemas" title="Ar Condicionado Desliga Sozinho: 7 Causas e Como Resolver" date="9 de Maio, 2026" author="José Erivaldo">
    <p>Se o seu <strong>ar condicionado desliga sozinho</strong>, não ignore. Pode ser algo simples como o timer ativado ou um sinal de alerta de um problema mais sério. Veja as causas mais comuns e como resolver.</p>
    <h2 className="text-2xl font-bold text-primary">7 razões para o ar condicionado desligar sozinho</h2>
    <ul className="space-y-2 list-disc pl-6">
      <li><strong>1. Timer ativado:</strong> verifique as configurações do controle remoto</li>
      <li><strong>2. Proteção contra superaquecimento:</strong> o compressor desliga para se proteger quando está muito quente — geralmente por falta de gás ou filtro sujo</li>
      <li><strong>3. Falta de gás refrigerante:</strong> o aparelho não consegue resfriar e entra em proteção</li>
      <li><strong>4. Filtro muito sujo:</strong> restringe o fluxo de ar e causa superaquecimento</li>
      <li><strong>5. Problema elétrico:</strong> tensão instável ou disjuntor fraco</li>
      <li><strong>6. Placa eletrônica com defeito:</strong> causa desligamentos aleatórios</li>
      <li><strong>7. Sensor de temperatura com defeito:</strong> lê temperatura errada e desliga indevidamente</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary">O que fazer</h2>
    <p>Primeiro, verifique se o timer está ativado. Se o aparelho desliga após alguns minutos de funcionamento, o mais provável é falta de gás ou filtro muito sujo — ambos resolvidos com uma visita técnica. Não tente recarregar o gás sozinho: exige equipamento específico e técnico habilitado.</p>
    <p>A New Clima atende em São Paulo e ABC com <strong>resposta em até 2 horas</strong>. Ligue: <strong>(11) 96346-2516</strong>.</p>
  </BlogPostLayout>
);

export const BlogVidaUtil = () => (
  <BlogPostLayout tag="Dicas" title="Qual a Vida Útil do Ar Condicionado? Como Prolongar" date="9 de Maio, 2026" author="José Erivaldo">
    <p>Você sabe qual é a <strong>vida útil do ar condicionado</strong>? Em média, um split bem mantido dura entre <strong>10 e 15 anos</strong>. Sem manutenção, esse prazo cai para 5 a 7 anos. Entenda o que faz a diferença.</p>
    <h2 className="text-2xl font-bold text-primary">Vida útil por tipo de equipamento</h2>
    <ul className="space-y-2 list-disc pl-6">
      <li><strong>Split hi-wall residencial:</strong> 10 a 15 anos com manutenção</li>
      <li><strong>Multi-split:</strong> 12 a 15 anos</li>
      <li><strong>Cassete comercial:</strong> 10 a 15 anos</li>
      <li><strong>VRF:</strong> 15 a 20 anos com manutenção preventiva</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary">O que reduz a vida útil</h2>
    <ul className="space-y-2 list-disc pl-6">
      <li>Falta de limpeza dos filtros — aumenta esforço do compressor</li>
      <li>Uso sem manutenção preventiva semestral</li>
      <li>Instalação mal feita — vibração e vazamentos destroem componentes</li>
      <li>Recarga de gás feita por não habilitados — pode causar danos irreversíveis</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary">Como prolongar a vida do seu ar condicionado</h2>
    <p>O segredo é simples: <strong>manutenção preventiva semestral</strong>. Inclui limpeza completa, verificação de gás, inspeção elétrica e lubrificação. O custo de uma manutenção preventiva é de R$ 120 a R$ 200 — muito menos do que um conserto de compressor (R$ 800 a R$ 2.500) ou um aparelho novo.</p>
    <p>Agende manutenção com a New Clima em SP e ABC: <strong>(11) 96346-2516</strong>.</p>
  </BlogPostLayout>
);

export const BlogTemperatura = () => (
  <BlogPostLayout tag="Dicas de Uso" title="Qual a Temperatura Ideal do Ar Condicionado? Conforto e Economia" date="9 de Maio, 2026" author="José Erivaldo">
    <p>Escolher a <strong>temperatura ideal do ar condicionado</strong> impacta diretamente no seu conforto, na conta de luz e na saúde. Em São Paulo, onde o calor pode passar dos 35°C no verão, a tentação é colocar na mínima — mas isso não é recomendado.</p>
    <h2 className="text-2xl font-bold text-primary">Qual temperatura usar?</h2>
    <p>Para <strong>conforto e economia</strong>, a recomendação dos especialistas é entre <strong>23°C e 25°C</strong>. O INMETRO recomenda 23°C como temperatura de referência para ambientes climatizados no Brasil.</p>
    <ul className="space-y-2 list-disc pl-6">
      <li><strong>Quarto (dormir):</strong> 23°C a 26°C</li>
      <li><strong>Sala e escritório:</strong> 22°C a 24°C</li>
      <li><strong>Academia:</strong> 19°C a 22°C</li>
      <li><strong>Servidor/datacenter:</strong> 18°C a 21°C</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary">Impacto na conta de luz</h2>
    <p>Cada grau a menos na temperatura configurada representa cerca de <strong>5% a 8% a mais no consumo de energia</strong>. Ou seja, colocar em 18°C em vez de 23°C aumenta o consumo em cerca de 25% a 40% sem trazer conforto proporcional.</p>
    <h2 className="text-2xl font-bold text-primary">Choque térmico e saúde</h2>
    <p>Temperaturas muito baixas causam <strong>choque térmico</strong> ao entrar e sair do ambiente — especialmente problemático em dias quentes de São Paulo. Para evitar, mantenha a diferença entre temperatura interna e externa em no máximo <strong>8°C a 10°C</strong>.</p>
    <p>Dúvidas sobre qual equipamento escolher para seu ambiente? Fale com a New Clima: <strong>(11) 96346-2516</strong>.</p>
  </BlogPostLayout>
);

export const BlogFuncaoDry = () => (
  <BlogPostLayout tag="Dicas de Uso" title="Função Dry no Ar Condicionado: Para que Serve e Quando Usar" date="9 de Maio, 2026" author="José Erivaldo">
    <p>Você já viu o símbolo de gota no controle remoto e ficou sem saber o que é? A <strong>função Dry</strong> (ou modo desumidificação) é um dos recursos mais úteis e menos usados dos ar condicionados — especialmente em São Paulo, onde a umidade pode chegar a 90%.</p>
    <h2 className="text-2xl font-bold text-primary">O que é a função Dry?</h2>
    <p>O modo Dry <strong>remove o excesso de umidade do ar</strong> sem resfriar tanto o ambiente. O compressor funciona em ciclos menores, priorizando a desumidificação. O resultado é um ar mais seco e confortável, sem aquela sensação de abafamento.</p>
    <h2 className="text-2xl font-bold text-primary">Quando usar o modo Dry?</h2>
    <ul className="space-y-2 list-disc pl-6">
      <li><strong>Dias nublados e chuvosos</strong> em São Paulo, quando a umidade está alta mas não está quente</li>
      <li><strong>Transição de estações</strong> — outono e primavera paulistana</li>
      <li><strong>Ambientes com mofo</strong> — reduz a umidade que favorece o crescimento de fungos</li>
      <li><strong>Quarto à noite</strong> — quando você quer conforto sem frio excessivo</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary">Dry vs Cool — qual a diferença?</h2>
    <p>No modo <strong>Cool</strong>, o objetivo é resfriar. No modo <strong>Dry</strong>, o objetivo é desumidificar — com temperatura mais próxima do ambiente. O consumo de energia no Dry é geralmente <strong>menor</strong> que no Cool para o mesmo período de uso.</p>
    <p>Para melhor eficiência de qualquer modo, mantenha a manutenção em dia. Agende com a New Clima em SP e ABC: <strong>(11) 96346-2516</strong>.</p>
  </BlogPostLayout>
);

export const BlogGas = () => (
  <BlogPostLayout tag="Técnico" title="Gás R32 e R410A: Qual a Diferença e Qual é Melhor?" date="9 de Maio, 2026" author="José Erivaldo">
    <p>Se você está comprando um ar condicionado novo ou foi informado que precisa recarregar o gás, provavelmente ouviu falar em <strong>R32 ou R410A</strong>. Entenda a diferença e por que isso importa para sua escolha.</p>
    <h2 className="text-2xl font-bold text-primary">O que é o gás refrigerante?</h2>
    <p>O gás refrigerante é o fluido que circula pelo sistema e realiza a troca térmica — é ele quem "faz o frio". Sem gás ou com nível baixo, o ar condicionado não resfria adequadamente e pode danificar o compressor.</p>
    <h2 className="text-2xl font-bold text-primary">R410A — o mais comum no Brasil</h2>
    <p>Durante anos foi o padrão. Não é inflamável e tem boa eficiência. Porém, seu <strong>GWP (potencial de aquecimento global) é alto</strong> — 2.088 vezes maior que o CO₂. Por isso está sendo gradualmente substituído.</p>
    <h2 className="text-2xl font-bold text-primary">R32 — o novo padrão</h2>
    <p>O R32 tem <strong>GWP de 675</strong> — muito menor que o R410A. É mais eficiente energeticamente, usa menor quantidade de carga e está presente na maioria dos inverter novos das marcas LG, Daikin, Midea e Samsung. A desvantagem: é levemente inflamável, exigindo técnico certificado para manuseio.</p>
    <h2 className="text-2xl font-bold text-primary">Posso misturar os gases?</h2>
    <p><strong>Nunca</strong>. R32 e R410A são incompatíveis e não podem ser misturados. Sempre informe o modelo do aparelho ao técnico para que ele use o gás correto. A New Clima trabalha com ambos os tipos em São Paulo e ABC: <strong>(11) 96346-2516</strong>.</p>
  </BlogPostLayout>
);
