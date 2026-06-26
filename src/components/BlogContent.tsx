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
  <BlogPostLayout tag="PMOC" title="O Que é PMOC? Guia Completo Sobre o Plano de Manutenção de Ar Condicionado" date="26 de Junho, 2026" author="Equipe Técnica New Clima">
    <p>PMOC é a sigla para <strong>Plano de Manutenção, Operação e Controle</strong> — um documento técnico obrigatório por lei federal que estabelece os procedimentos de manutenção para sistemas de ar condicionado em uso público ou coletivo. Se você tem uma empresa, clínica ou condomínio em São Paulo com ar condicionado, provavelmente precisa ter um PMOC em vigor.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">O que é o PMOC na prática?</h2>
    <p>O PMOC é um documento que define:</p>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li>Quais equipamentos de ar condicionado existem no estabelecimento</li>
      <li>Quais procedimentos de manutenção devem ser realizados em cada um</li>
      <li>Com que frequência cada manutenção deve ocorrer</li>
      <li>Quem é o responsável técnico (engenheiro com ART)</li>
      <li>Registro de todas as manutenções realizadas</li>
    </ul>
    <p>Na prática, o PMOC é a "agenda de manutenção" do seu sistema de ar condicionado — com a diferença de que é um documento legal, assinado por engenheiro, e que comprova para a Vigilância Sanitária que os equipamentos estão sendo mantidos adequadamente.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Qual a lei que exige o PMOC?</h2>
    <p>O PMOC é exigido por:</p>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li><strong>Lei Federal 13.589/18</strong> — institui a obrigatoriedade para todos os sistemas de ar condicionado de uso público ou coletivo</li>
      <li><strong>Portaria MS 3.523/98</strong> — do Ministério da Saúde, que estabelece os requisitos técnicos mínimos</li>
      <li><strong>Resolução RE 9/2003 da ANVISA</strong> — define os padrões de qualidade do ar interior</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Quem precisa ter PMOC?</h2>
    <p>Todo estabelecimento com sistema de ar condicionado de <strong>uso público ou coletivo com capacidade acima de 60.000 BTUs</strong>. Exemplos práticos em São Paulo:</p>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li>Escritórios e empresas comerciais</li>
      <li>Clínicas médicas e odontológicas</li>
      <li>Restaurantes, hotéis e bares</li>
      <li>Farmácias e drogarias</li>
      <li>Academias, escolas e creches</li>
      <li>Condomínios com ar nas áreas comuns</li>
      <li>Shopping centers e estabelecimentos de grande porte</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">O que diferencia um PMOC completo de um incompleto?</h2>
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse text-sm">
        <thead><tr className="bg-primary text-white"><th className="p-3 text-left border border-primary">Item</th><th className="p-3 text-left border border-primary">PMOC completo</th><th className="p-3 text-left border border-primary">PMOC incompleto</th></tr></thead>
        <tbody>
          <tr className="bg-white"><td className="p-3 border border-slate-200">ART do engenheiro</td><td className="p-3 border border-slate-200 font-bold text-success">✅ Inclusa</td><td className="p-3 border border-slate-200 font-bold text-red-600">❌ Ausente</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Cadastro dos equipamentos</td><td className="p-3 border border-slate-200 font-bold text-success">✅ Todos listados</td><td className="p-3 border border-slate-200 font-bold text-red-600">❌ Parcial</td></tr>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Cronograma de manutenções</td><td className="p-3 border border-slate-200 font-bold text-success">✅ Com datas e frequências</td><td className="p-3 border border-slate-200 font-bold text-red-600">❌ Genérico</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Registros de execução</td><td className="p-3 border border-slate-200 font-bold text-success">✅ Laudo após cada visita</td><td className="p-3 border border-slate-200 font-bold text-red-600">❌ Inexistente</td></tr>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Validade perante a VISA-SP</td><td className="p-3 border border-slate-200 font-bold text-success">✅ Aceito na fiscalização</td><td className="p-3 border border-slate-200 font-bold text-red-600">❌ Pode gerar multa</td></tr>
        </tbody>
      </table>
    </div>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Quanto custa elaborar o PMOC em SP?</h2>
    <p>O custo varia conforme o número de equipamentos e se inclui apenas a elaboração do documento ou também a execução das manutenções:</p>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li>Elaboração do documento (sem execução): R$ 500 a R$ 1.500 (taxa única)</li>
      <li>Contrato completo (documento + manutenções): R$ 350 a R$ 4.500/mês</li>
    </ul>
    <div className="bg-ice rounded-2xl p-6 my-8 border border-primary/10">
      <h3 className="text-lg font-bold text-primary mb-2">Precisa de PMOC para sua empresa em SP?</h3>
      <p className="text-slate-600 text-sm mb-4">Levantamento gratuito · Proposta no mesmo dia · ART inclusa · Documentação completa</p>
      <a href="https://api.whatsapp.com/send/?phone=5511963462516&text=Olá!%20Preciso%20elaborar%20o%20PMOC%20para%20minha%20empresa%20em%20SP." rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-success text-white font-bold py-3 px-6 rounded-xl text-sm hover:-translate-y-0.5 transition-all">Solicitar Proposta</a>
    </div>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Perguntas frequentes</h2>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">PMOC e manutenção preventiva são a mesma coisa?</h3>
    <p>Não. O PMOC é o plano documentado que define o que deve ser feito. A manutenção preventiva é a execução prática do plano. Os dois são necessários — ter apenas o documento sem executar as manutenções também configura irregularidade.</p>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Por quanto tempo devo guardar o PMOC?</h3>
    <p>A Portaria MS 3.523/98 recomenda manter os registros por no mínimo 5 anos. Em caso de fiscalização ou processo administrativo, ter o histórico completo é fundamental.</p>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Posso fazer o PMOC eu mesmo?</h3>
    <p>Não. O PMOC exige a assinatura de um engenheiro mecânico ou habilitado com ART registrada no CREA. A elaboração por não-habilitado não tem validade legal e não será aceita pela Vigilância Sanitária.</p>
  </BlogPostLayout>
);

export const BlogRoundCassette = () => (
  <BlogPostLayout tag="Equipamentos" title="LG Round Cassette: O Que É, Vantagens e Para Quais Ambientes É Indicado" date="26 de Junho, 2026" author="Equipe Técnica New Clima">
    <p>O LG Round Cassette é um dos modelos de ar condicionado mais sofisticados disponíveis no mercado brasileiro — e também um dos mais elegantes. Se você já viu aquele ar condicionado redondo instalado no teto de um escritório ou hotel em São Paulo, provavelmente era um Round Cassette.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">O que é o LG Round Cassette?</h2>
    <p>O Round Cassette é um modelo de ar condicionado cassete (instalado no teto) com design circular exclusivo da LG. Ao contrário dos cassetes tradicionais que têm formato retangular, o Round Cassette tem formato redondo e distribui o ar em 360° — cobrindo uniformemente o ambiente em todas as direções.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Vantagens do LG Round Cassette</h2>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li><strong>Distribuição de ar em 360°:</strong> elimina pontos quentes no ambiente — todos os cantos recebem ar na mesma intensidade</li>
      <li><strong>Design elegante:</strong> o formato circular e o acabamento branco ou espelhado se integra melhor ao teto do que os cassetes retangulares tradicionais</li>
      <li><strong>Tecnologia Dual Inverter:</strong> economia de energia de até 70% em comparação com modelos convencionais</li>
      <li><strong>Controle individual de aletas:</strong> cada uma das 4 aletas pode ser ajustada independentemente</li>
      <li><strong>Sensor de presença:</strong> detecta onde as pessoas estão no ambiente e direciona o ar para onde é necessário</li>
      <li><strong>Nível de ruído baixo:</strong> a partir de 30 dB(A) — ideal para ambientes de trabalho e reuniões</li>
      <li><strong>Controle Wi-Fi:</strong> compatível com o app LG ThinQ para controle pelo celular</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Para quais ambientes o Round Cassette é indicado?</h2>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li><strong>Salas de reunião:</strong> distribuição uniforme e baixo ruído são essenciais</li>
      <li><strong>Recepções e lobbies:</strong> o design elegante valoriza o ambiente</li>
      <li><strong>Restaurantes e cafés:</strong> cobertura uniforme sem corrente de ar direta nos clientes</li>
      <li><strong>Escritórios open space:</strong> uma unidade pode atender grandes áreas sem criar zonas quentes</li>
      <li><strong>Clínicas e consultórios:</strong> baixo ruído e distribuição uniforme são ideais</li>
      <li><strong>Lojas e showrooms:</strong> design discreto que não compete visualmente com o produto</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Capacidades disponíveis no Brasil</h2>
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse text-sm">
        <thead><tr className="bg-primary text-white"><th className="p-3 text-left border border-primary">Capacidade</th><th className="p-3 text-left border border-primary">Área recomendada</th><th className="p-3 text-left border border-primary">Faixa de preço (equipamento)</th></tr></thead>
        <tbody>
          <tr className="bg-white"><td className="p-3 border border-slate-200">18.000 BTUs</td><td className="p-3 border border-slate-200">Até 25m²</td><td className="p-3 border border-slate-200 font-bold text-primary">R$ 4.500 a R$ 6.000</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">24.000 BTUs</td><td className="p-3 border border-slate-200">Até 35m²</td><td className="p-3 border border-slate-200 font-bold text-primary">R$ 5.500 a R$ 7.500</td></tr>
          <tr className="bg-white"><td className="p-3 border border-slate-200">36.000 BTUs</td><td className="p-3 border border-slate-200">Até 50m²</td><td className="p-3 border border-slate-200 font-bold text-primary">R$ 7.000 a R$ 10.000</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">48.000 BTUs</td><td className="p-3 border border-slate-200">Até 70m²</td><td className="p-3 border border-slate-200 font-bold text-primary">R$ 9.000 a R$ 13.000</td></tr>
        </tbody>
      </table>
    </div>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Instalação do Round Cassette: o que considerar</h2>
    <p>A instalação do Round Cassette exige forro de gesso ou forro modular para embutir a unidade interna. Os pontos de atenção são:</p>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li>Altura do pé direito: mínimo de 2,60m para instalação adequada</li>
      <li>Espaço acima do forro: necessário pelo menos 30cm para a unidade interna e a tubulação</li>
      <li>Acesso para manutenção: é essencial deixar um painel removível acima da unidade</li>
      <li>Drenagem: o dreno deve ser direcionado para um ralo ou para fora</li>
    </ul>
    <div className="bg-ice rounded-2xl p-6 my-8 border border-primary/10">
      <h3 className="text-lg font-bold text-primary mb-2">Instale o Round Cassette com quem tem experiência</h3>
      <p className="text-slate-600 text-sm mb-4">Instalação e manutenção de cassetes em SP e ABC · Visita técnica gratuita · Garantia de 1 ano</p>
      <a href="https://api.whatsapp.com/send/?phone=5511963462516&text=Olá!%20Tenho%20interesse%20na%20instalação%20do%20LG%20Round%20Cassette." rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-success text-white font-bold py-3 px-6 rounded-xl text-sm hover:-translate-y-0.5 transition-all">Solicitar Instalação</a>
    </div>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Perguntas frequentes</h2>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Round Cassette pode ser instalado em residência?</h3>
    <p>Sim, mas é mais comum em ambiente comercial. Em residências, é indicado para salas grandes (acima de 30m²) com forro de gesso. O resultado estético é premium — parece com os sistemas de hotéis 5 estrelas.</p>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Manutenção do Round Cassette é diferente?</h3>
    <p>A frequência é a mesma — semestral para uso comercial padrão, trimestral para uso intenso. O acesso à unidade interna requer abertura do painel de forro, o que exige técnico experiente com cassetes.</p>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Round Cassette é mais eficiente que split convencional?</h3>
    <p>Para ambientes acima de 25m², sim. A distribuição em 360° é mais eficiente do que o fluxo unidirecional do split, pois elimina pontos quentes e reduz o tempo que o compressor precisa trabalhar em alta potência.</p>
  </BlogPostLayout>
);

export const BlogObraLimpa = () => (
  <BlogPostLayout tag="Instalação" title="Instalação de Ar Condicionado com Obra Limpa: O Que É e Por Que Importa" date="26 de Junho, 2026" author="Equipe Técnica New Clima">
    <p>Obra limpa não é um diferencial de luxo — é o padrão mínimo que qualquer instalação de ar condicionado deveria seguir. Em São Paulo, onde a maioria das instalações acontece em apartamentos com regras rígidas de condomínio, a obra limpa é muitas vezes a condição para que o serviço seja feito.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">O que é obra limpa na instalação de ar condicionado?</h2>
    <p>Obra limpa é o conjunto de práticas que garantem que a instalação do ar condicionado seja feita sem danificar o imóvel, sem sujar as áreas comuns e sem deixar entulho. Na prática, inclui:</p>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li>Proteção do piso e móveis com lona antes de qualquer perfuração</li>
      <li>Uso de aspirador industrial durante as perfurações para capturar pó e resíduos</li>
      <li>Infraestrutura embutida na parede sempre que possível</li>
      <li>Acabamento nas saídas de tubulação com passa-fio ou acabamento de gesso</li>
      <li>Proteção de corredores e elevadores durante o transporte de material</li>
      <li>Remoção completa de entulho, embalagens e resíduos ao término</li>
      <li>Limpeza final do ambiente com pano úmido</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Por que obra limpa é essencial em apartamentos de SP?</h2>
    <p>Em São Paulo, a maioria dos condomínios tem regras rígidas sobre obras:</p>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li>Horário restrito (geralmente 8h às 17h em dias úteis)</li>
      <li>Proibição de sujeira nas áreas comuns</li>
      <li>Responsabilidade do morador por danos causados durante a obra</li>
      <li>Alguns síndicos pedem declaração de responsabilidade da empresa</li>
    </ul>
    <p>Uma instalação com sujeira excessiva pode resultar em advertência ou multa do condomínio para o morador — e em má reputação para a empresa instaladora.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Infraestrutura aparente x embutida</h2>
    <p><strong>Infraestrutura aparente:</strong> a tubulação de cobre e os cabos ficam à vista, protegidos por canaletas plásticas. É mais rápida e barata, mas esteticamente menos elegante.</p>
    <p><strong>Infraestrutura embutida:</strong> a tubulação passa dentro da parede — o resultado é mais limpo visualmente, sem canaletas aparentes. Exige mais trabalho e tempo, mas é o padrão em apartamentos novos e em reformas planejadas.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Como identificar uma empresa que faz obra limpa?</h2>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li>Pergunta sobre as regras do condomínio antes de começar</li>
      <li>Chega com equipamentos de proteção (lona, aspirador industrial)</li>
      <li>Apresenta os materiais que serão usados antes de começar</li>
      <li>Não cobra extra por limpeza — já está incluso no preço</li>
      <li>Tem avaliações positivas no Google mencionando obra limpa</li>
    </ul>
    <div className="bg-ice rounded-2xl p-6 my-8 border border-primary/10">
      <h3 className="text-lg font-bold text-primary mb-2">Instalação com obra limpa garantida em SP</h3>
      <p className="text-slate-600 text-sm mb-4">Aprovada pelo síndico · Sem sujeira · Sem danos ao imóvel · Garantia de 1 ano por escrito</p>
      <a href="https://api.whatsapp.com/send/?phone=5511963462516&text=Olá!%20Preciso%20de%20instalação%20de%20ar%20condicionado%20com%20obra%20limpa%20no%20meu%20apartamento." rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-success text-white font-bold py-3 px-6 rounded-xl text-sm hover:-translate-y-0.5 transition-all">Solicitar Instalação</a>
    </div>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Perguntas frequentes</h2>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Obra limpa custa mais caro?</h3>
    <p>Não necessariamente. A New Clima inclui obra limpa no preço padrão de todas as instalações — não é cobrado como adicional. Desconfie de empresas que cobram separado pela "proteção do imóvel".</p>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Preciso avisar o síndico antes da instalação?</h3>
    <p>Sim. A maioria dos condomínios exige comunicação prévia de obra — mesmo que seja apenas para instalar um ar condicionado. A New Clima orienta sobre os documentos necessários e, se pedido, emite declaração de responsabilidade técnica.</p>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Quanto tempo dura a instalação com obra limpa?</h3>
    <p>A instalação com obra limpa leva um pouco mais de tempo do que uma instalação rápida — geralmente 30 a 60 minutos a mais. Mas o resultado final não tem sujeira e não gera problemas com o condomínio.</p>
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
  <BlogPostLayout tag="Guia Técnico" title="Split Convencional x Inverter: Qual Vale Mais a Pena em 2026?" date="26 de Junho, 2026" author="Equipe Técnica New Clima">
    <p>A escolha entre split convencional e Inverter é uma das decisões mais importantes ao comprar um ar condicionado. A diferença de preço inicial pode parecer o fator decisivo — mas o custo total ao longo dos anos conta uma história diferente.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Diferença técnica: como cada um funciona</h2>
    <p>O <strong>convencional</strong> tem compressor de velocidade fixa: liga no máximo, resfria o ambiente e desliga. Quando a temperatura sobe, liga de novo no máximo. Esse ciclo gera picos de consumo e variações de temperatura.</p>
    <p>O <strong>Inverter</strong> tem compressor de velocidade variável: liga, atinge a temperatura e reduz a velocidade para manter — sem desligar. Muito mais eficiente em uso contínuo.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Comparação completa</h2>
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse text-sm">
        <thead><tr className="bg-primary text-white"><th className="p-3 text-left border border-primary">Critério</th><th className="p-3 text-left border border-primary">Convencional</th><th className="p-3 text-left border border-primary">Inverter</th></tr></thead>
        <tbody>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Preço do equipamento</td><td className="p-3 border border-slate-200 font-bold text-success">Menor (R$ 800-1.500)</td><td className="p-3 border border-slate-200">Maior (R$ 1.400-3.000)</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Consumo de energia</td><td className="p-3 border border-slate-200 font-bold text-red-600">Alto</td><td className="p-3 border border-slate-200 font-bold text-success">30-60% menor</td></tr>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Velocidade de resfriamento</td><td className="p-3 border border-slate-200">Normal</td><td className="p-3 border border-slate-200 font-bold text-success">Mais rápido</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Controle de temperatura</td><td className="p-3 border border-slate-200">Variação ±2°C</td><td className="p-3 border border-slate-200 font-bold text-success">Preciso (±0,5°C)</td></tr>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Nível de ruído</td><td className="p-3 border border-slate-200">Mais alto (partidas)</td><td className="p-3 border border-slate-200 font-bold text-success">Mais silencioso</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Vida útil do compressor</td><td className="p-3 border border-slate-200">Menor</td><td className="p-3 border border-slate-200 font-bold text-success">Maior</td></tr>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Manutenção</td><td className="p-3 border border-slate-200">Mais simples</td><td className="p-3 border border-slate-200">Placa mais sofisticada</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Payback (retorno do investimento)</td><td className="p-3 border border-slate-200">—</td><td className="p-3 border border-slate-200 font-bold text-success">4 a 8 meses de economia</td></tr>
        </tbody>
      </table>
    </div>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Quando o convencional ainda faz sentido?</h2>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li>Uso muito esporádico — menos de 2 horas por dia</li>
      <li>Orçamento muito limitado e necessidade imediata</li>
      <li>Ambiente temporário (aluguel de curto prazo)</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Para todos os outros casos: Inverter</h2>
    <p>Para uso residencial acima de 4 horas diárias, home office, quartos e salas em São Paulo, o Inverter é sempre a melhor escolha a médio e longo prazo. A economia na conta de luz paga a diferença de preço em menos de um ano.</p>
    <div className="bg-ice rounded-2xl p-6 my-8 border border-primary/10">
      <h3 className="text-lg font-bold text-primary mb-2">Instale seu Inverter com quem entende do assunto</h3>
      <p className="text-slate-600 text-sm mb-4">Instalação profissional em SP · Obra limpa · Garantia de 1 ano</p>
      <a href="https://api.whatsapp.com/send/?phone=5511963462516&text=Olá!%20Quero%20instalar%20um%20ar%20condicionado%20Inverter%20em%20SP." rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-success text-white font-bold py-3 px-6 rounded-xl text-sm hover:-translate-y-0.5 transition-all">Solicitar Instalação</a>
    </div>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Perguntas frequentes</h2>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Inverter funciona em 110V?</h3>
    <p>A maioria dos Inverters disponíveis no Brasil é bivolt (110V/220V). Verifique sempre a etiqueta do equipamento antes da instalação.</p>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Posso trocar apenas o compressor convencional por Inverter?</h3>
    <p>Não. O sistema Inverter exige compressor, placa eletrônica e circuito de controle compatíveis — não é possível converter um equipamento convencional. A troca é sempre do equipamento completo.</p>
  </BlogPostLayout>
);

export const BlogEmpresas = () => (
  <BlogPostLayout tag="Empresarial" title="Ar Condicionado para Empresas em SP: VRF, Cassete e PMOC — Guia Completo" date="26 de Junho, 2026" author="Equipe Técnica New Clima">
    <p>Escolher o sistema de ar condicionado para uma empresa em São Paulo envolve variáveis que não existem na instalação residencial: capacidade para ambientes maiores, eficiência energética em uso contínuo, manutenção com o mínimo de interrupção das atividades e cumprimento do PMOC.</p>
    <p>Neste guia, explicamos os principais sistemas comerciais e como a New Clima atende empresas em São Paulo e ABC.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Principais sistemas de ar condicionado para empresas</h2>
    <h3 className="text-lg font-bold text-slate-800 mt-4 mb-2">Multi Split comercial</h3>
    <p>Indicado para escritórios pequenos e médios (até 300m²). Uma condensadora externa atende múltiplos ambientes. Instalação mais simples e custo inicial menor.</p>
    <h3 className="text-lg font-bold text-slate-800 mt-4 mb-2">VRF / Mini VRF (Volume de Refrigerante Variável)</h3>
    <p>Ideal para empresas acima de 300m² ou com múltiplos andares. Sistema central com condensadora(s) externa(s) de alta capacidade e múltiplas unidades internas (fan coils). Altamente eficiente, controle individual por zona e manutenção centralizada.</p>
    <h3 className="text-lg font-bold text-slate-800 mt-4 mb-2">Cassete</h3>
    <p>Unidade interna instalada no teto, com distribuição de ar em 4 direções. Ideal para salas de reunião, lobbies e open spaces. Estética mais profissional e distribuição de ar mais uniforme.</p>
    <h3 className="text-lg font-bold text-slate-800 mt-4 mb-2">Piso-Teto</h3>
    <p>Unidade versátil que pode ser instalada no piso ou no teto. Indicada para salas com pé direito alto ou locais sem forro para cassete.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Comparativo por tamanho de empresa</h2>
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse text-sm">
        <thead><tr className="bg-primary text-white"><th className="p-3 text-left border border-primary">Porte</th><th className="p-3 text-left border border-primary">Área</th><th className="p-3 text-left border border-primary">Sistema indicado</th></tr></thead>
        <tbody>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Pequena empresa / sala comercial</td><td className="p-3 border border-slate-200">Até 100m²</td><td className="p-3 border border-slate-200">Multi Split ou splits individuais</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Empresa média / escritório</td><td className="p-3 border border-slate-200">100m² a 300m²</td><td className="p-3 border border-slate-200">Multi Split comercial ou Mini VRF</td></tr>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Empresa grande / open space</td><td className="p-3 border border-slate-200">300m² a 1.000m²</td><td className="p-3 border border-slate-200">VRF + Cassete</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Corporativo / multi-andar</td><td className="p-3 border border-slate-200">Acima de 1.000m²</td><td className="p-3 border border-slate-200">VRF com múltiplas condensadoras</td></tr>
        </tbody>
      </table>
    </div>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">PMOC: obrigação para todas as empresas</h2>
    <p>Toda empresa com sistema de ar condicionado acima de 60.000 BTUs de uso coletivo é obrigada a ter o PMOC. A New Clima elabora e executa o PMOC com ART inclusa e documentação completa para a Vigilância Sanitária de SP.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Contrato de manutenção para empresas em SP</h2>
    <p>A New Clima oferece contratos de manutenção personalizados para empresas, incluindo:</p>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li>Visitas preventivas mensais ou trimestrais</li>
      <li>Atendimento de emergência com SLA definido em contrato</li>
      <li>Relatórios técnicos após cada visita</li>
      <li>PMOC incluso com ART</li>
      <li>Desconto em peças e serviços corretivos</li>
    </ul>
    <div className="bg-ice rounded-2xl p-6 my-8 border border-primary/10">
      <h3 className="text-lg font-bold text-primary mb-2">Solicite uma proposta para sua empresa em SP</h3>
      <p className="text-slate-600 text-sm mb-4">Levantamento gratuito · Proposta personalizada · PMOC incluso · Contrato com SLA</p>
      <a href="https://api.whatsapp.com/send/?phone=5511963462516&text=Olá!%20Preciso%20de%20uma%20proposta%20de%20manutenção%20de%20ar%20condicionado%20para%20minha%20empresa%20em%20SP." rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-success text-white font-bold py-3 px-6 rounded-xl text-sm hover:-translate-y-0.5 transition-all">Solicitar Proposta Empresarial</a>
    </div>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Perguntas frequentes</h2>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">VRF vale a pena para empresas pequenas?</h3>
    <p>Para empresas com menos de 200m², o Multi Split geralmente é mais custo-eficiente. O VRF se justifica a partir de 300m² ou quando há necessidade de controle individual por zona e maior eficiência energética em uso contínuo.</p>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">A manutenção pode ser feita fora do horário comercial?</h3>
    <p>Sim. A New Clima oferece agendamento em horários que minimizam o impacto nas atividades da empresa — incluindo fins de semana e períodos de baixa demanda operacional.</p>
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
  <BlogPostLayout tag="Saúde" title="Ar Condicionado Faz Mal à Saúde? A Verdade Sobre os Riscos e Como Evitá-los" date="26 de Junho, 2026" author="Equipe Técnica New Clima">
    <p>A dúvida é comum: o ar condicionado faz mal à saúde? A resposta curta é: <strong>não, quando bem instalado e com manutenção em dia</strong>. O problema ocorre quando o equipamento fica sem limpeza — transformando-se em um reservatório de fungos, bactérias e ácaros que são espalhados pelo ar.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Quais são os riscos reais do ar condicionado?</h2>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li><strong>Fungos e bactérias nos filtros sujos:</strong> filtros sem limpeza acumulam microorganismos que causam rinite, sinusite e infecções respiratórias</li>
      <li><strong>Ressecamento do ar:</strong> o ar condicionado reduz a umidade do ambiente — abaixo de 30% pode causar irritação nos olhos, nariz e garganta</li>
      <li><strong>Corrente de ar direta:</strong> fluxo de ar frio apontado diretamente para o corpo causa dores musculares e cervicalgias</li>
      <li><strong>Legionella:</strong> bactéria que pode se proliferar em sistemas de ar condicionado central sem manutenção adequada — causa a Doença dos Legionários</li>
      <li><strong>Temperatura muito baixa:</strong> ambientes abaixo de 18°C podem causar hipotermia leve e piorar problemas respiratórios</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Como usar o ar condicionado sem prejudicar a saúde?</h2>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li>Mantenha a temperatura entre <strong>22°C e 24°C</strong> — conforto sem ressecamento excessivo</li>
      <li>Direcione as aletas para o teto, nunca para as pessoas</li>
      <li>Limpe os filtros a cada 15 dias em uso intenso</li>
      <li>Faça manutenção preventiva semestral com técnico certificado</li>
      <li>Mantenha uma fonte de umidade no ambiente — plantas ou umidificador</li>
      <li>Ventile o ambiente por alguns minutos por dia abrindo janelas</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Ar condicionado e rinite: mito ou verdade?</h2>
    <p>O ar condicionado <strong>não causa rinite</strong> — mas pode piorar rinite pré-existente quando os filtros estão sujos. O verdadeiro vilão é o acúmulo de ácaros, fungos e poeira nos filtros que são então espalhados pelo ar. Com limpeza regular, o ar condicionado pode até ajudar quem tem rinite — filtrando partículas do ambiente.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Ar condicionado é prejudicial para crianças?</h2>
    <p>Não, desde que usado corretamente. A temperatura recomendada para crianças é entre 23°C e 25°C. O ar não deve ser direcionado diretamente para o berço ou cama. E a limpeza dos filtros deve ser mais frequente em ambientes com crianças — a cada 2 semanas.</p>
    <div className="bg-ice rounded-2xl p-6 my-8 border border-primary/10">
      <h3 className="text-lg font-bold text-primary mb-2">Mantenha o ar do seu ambiente saudável</h3>
      <p className="text-slate-600 text-sm mb-4">Higienização profissional com bactericida · Remove fungos e ácaros · A partir de R$ 150</p>
      <a href="https://api.whatsapp.com/send/?phone=5511963462516&text=Olá!%20Gostaria%20de%20agendar%20uma%20higienização%20do%20meu%20ar%20condicionado." rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-success text-white font-bold py-3 px-6 rounded-xl text-sm hover:-translate-y-0.5 transition-all">Agendar Higienização</a>
    </div>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Perguntas frequentes</h2>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Com que frequência devo limpar o filtro?</h3>
    <p>A cada 15 dias para uso diário intenso. A cada mês para uso moderado. A limpeza do filtro externo pode ser feita em casa com aspirador e água. A higienização interna (evaporador) deve ser feita por técnico a cada 6 meses.</p>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Ar condicionado pode transmitir vírus?</h3>
    <p>O ar condicionado convencional (split) recircula o ar do ambiente — não aspira ar externo. Ele pode circular vírus que já estão no ambiente, mas não os introduz de fora. Ventilação adequada e filtros limpos reduzem esse risco.</p>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Qual a umidade ideal do ambiente com ar condicionado?</h3>
    <p>Entre 40% e 60% de umidade relativa. Abaixo de 30% causa ressecamento das mucosas. Acima de 70% favorece o crescimento de fungos. Um termohigrômetro (menos de R$ 50 em lojas online) ajuda a monitorar.</p>
  </BlogPostLayout>
);

export const BlogDormir = () => (
  <BlogPostLayout tag="Saúde" title="Dormir com Ar Condicionado Faz Mal? Temperatura Ideal e Cuidados" date="26 de Junho, 2026" author="Equipe Técnica New Clima">
    <p>Em São Paulo, onde as noites de verão ultrapassam os 28°C, dormir com ar condicionado é uma necessidade para muitas pessoas. Mas dormir com o aparelho ligado faz mal? <strong>A resposta é não — desde que você use corretamente</strong>.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Qual a temperatura ideal para dormir com ar condicionado?</h2>
    <p>A faixa ideal é entre <strong>20°C e 23°C</strong>. Estudos do sono mostram que o corpo precisa reduzir sua temperatura central para entrar em sono profundo — e um ambiente entre 20°C e 23°C facilita esse processo.</p>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li><strong>Abaixo de 18°C:</strong> pode causar hipotermia leve, dores musculares e piorar problemas respiratórios</li>
      <li><strong>Entre 20°C e 23°C:</strong> faixa ideal para adultos saudáveis</li>
      <li><strong>Entre 23°C e 25°C:</strong> recomendado para crianças, idosos e pessoas com problemas respiratórios</li>
      <li><strong>Acima de 26°C:</strong> o sono tende a ser mais leve e interrompido</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Como dormir com ar condicionado sem prejudicar a saúde?</h2>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li><strong>Use o modo Sleep:</strong> aumenta a temperatura gradualmente durante a madrugada, economizando energia e evitando que o ambiente fique frio demais</li>
      <li><strong>Direcione as aletas para o teto:</strong> nunca deixe o ar apontado diretamente para a cama</li>
      <li><strong>Mantenha os filtros limpos:</strong> filtros sujos espalham fungos e bactérias durante o sono</li>
      <li><strong>Use um copo d'água na mesa de cabeceira:</strong> combate o ressecamento da garganta</li>
      <li><strong>Mantenha uma fresta de janela:</strong> renova o ar sem comprometer o resfriamento</li>
      <li><strong>Cubra-se com um lençol leve:</strong> protege contra correntes de ar sem perder o conforto</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Problemas comuns de quem dorme com ar condicionado</h2>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li><strong>Nariz entupido de manhã:</strong> geralmente causado por filtros sujos ou temperatura muito baixa — não pelo ar condicionado em si</li>
      <li><strong>Garganta seca:</strong> ressecamento causado pela baixa umidade — solução: umidificador ou copo d'água</li>
      <li><strong>Dor no pescoço:</strong> corrente de ar direta na região — solução: redirecionar as aletas</li>
      <li><strong>Pele ressecada:</strong> umidade muito baixa no ambiente — solução: temperatura mais alta e planta no quarto</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Vale a pena deixar ligado a noite toda?</h2>
    <p>Sim, com o modo Sleep ativado. Os aparelhos Inverter modernos consumem entre 100W e 300W em modo de manutenção — comparável a uma lâmpada de LED. O gasto mensal para uma noite inteira com Inverter 12.000 BTUs fica em torno de R$ 50 a R$ 80.</p>
    <div className="bg-ice rounded-2xl p-6 my-8 border border-primary/10">
      <h3 className="text-lg font-bold text-primary mb-2">Ar condicionado com mau cheiro à noite? Hora de higienizar.</h3>
      <p className="text-slate-600 text-sm mb-4">Higienização profissional · Remove fungos e ácaros · Garantia de 90 dias</p>
      <a href="https://api.whatsapp.com/send/?phone=5511963462516&text=Olá!%20Meu%20ar%20condicionado%20está%20com%20mau%20cheiro%20e%20gostaria%20de%20uma%20higienização." rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-success text-white font-bold py-3 px-6 rounded-xl text-sm hover:-translate-y-0.5 transition-all">Agendar Higienização</a>
    </div>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Perguntas frequentes</h2>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Posso deixar o ar condicionado ligado enquanto durmo com a janela fechada?</h3>
    <p>Sim. O split recircula o ar do ambiente e não precisa de entrada de ar externo para funcionar. Janelas fechadas até melhoram a eficiência do equipamento.</p>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">É melhor desligar o ar condicionado antes de dormir?</h3>
    <p>Não. Desligar e religar gasta mais energia do que manter ligado em modo Sleep. O modo Sleep é projetado exatamente para uso noturno — mantém o conforto com menor consumo.</p>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Criança pode dormir com ar condicionado?</h3>
    <p>Sim, com temperatura entre 23°C e 25°C, aletas direcionadas para longe da cama e filtros sempre limpos. O modo Sleep também é recomendado para ambientes de crianças.</p>
  </BlogPostLayout>
);

export const BlogConsumo = () => (
  <BlogPostLayout tag="Economia" title="Ar Condicionado Gasta Mais de Dia ou à Noite? Verdade e Mitos" date="26 de Junho, 2026" author="Equipe Técnica New Clima">
    <p>Uma dúvida muito comum: o ar condicionado gasta mais energia de dia ou à noite? A resposta depende da temperatura externa, do tipo de equipamento e do comportamento de uso — mas vamos desvendar cada cenário.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">O que determina o consumo do ar condicionado?</h2>
    <p>O consumo do ar condicionado é proporcional ao trabalho que o compressor precisa fazer para atingir e manter a temperatura configurada. Quanto maior a diferença entre a temperatura externa e a temperatura desejada, mais o compressor trabalha e mais energia consome.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">De dia x à noite: qual gasta mais?</h2>
    <p>Em São Paulo, especialmente no verão, o dia é mais quente — com temperaturas que podem ultrapassar 35°C. À noite, a temperatura cai para 22°C a 26°C. Isso significa que:</p>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li><strong>De dia:</strong> o ar condicionado trabalha mais para vencer o calor externo — maior consumo</li>
      <li><strong>À noite:</strong> a temperatura externa já é menor, o compressor trabalha menos — menor consumo</li>
      <li><strong>Com Inverter à noite:</strong> em modo Sleep, o consumo pode cair para 100-200W — extremamente econômico</li>
    </ul>
    <p>Conclusão: <strong>de dia gasta mais</strong> na maioria dos casos em São Paulo.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Quanto gasta o ar condicionado por hora?</h2>
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse text-sm">
        <thead><tr className="bg-primary text-white"><th className="p-3 text-left border border-primary">Equipamento</th><th className="p-3 text-left border border-primary">Consumo médio</th><th className="p-3 text-left border border-primary">Custo/hora (R$ 0,85/kWh)</th></tr></thead>
        <tbody>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Split convencional 9.000 BTUs</td><td className="p-3 border border-slate-200">900W</td><td className="p-3 border border-slate-200 font-bold text-primary">R$ 0,77/hora</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Split convencional 12.000 BTUs</td><td className="p-3 border border-slate-200">1.200W</td><td className="p-3 border border-slate-200 font-bold text-primary">R$ 1,02/hora</td></tr>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Split Inverter 12.000 BTUs (partida)</td><td className="p-3 border border-slate-200">1.200W</td><td className="p-3 border border-slate-200 font-bold text-primary">R$ 1,02/hora</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Split Inverter 12.000 BTUs (manutenção)</td><td className="p-3 border border-slate-200">300-500W</td><td className="p-3 border border-slate-200 font-bold text-success">R$ 0,26 a R$ 0,43/hora</td></tr>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Split Inverter 18.000 BTUs (manutenção)</td><td className="p-3 border border-slate-200">400-700W</td><td className="p-3 border border-slate-200 font-bold text-success">R$ 0,34 a R$ 0,60/hora</td></tr>
        </tbody>
      </table>
    </div>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Como reduzir o consumo sem abrir mão do conforto</h2>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li>Use temperatura entre 23°C e 24°C — cada grau a menos aumenta o consumo em 8%</li>
      <li>Mantenha filtros limpos — filtro sujo aumenta o consumo em até 30%</li>
      <li>Use o modo Sleep à noite — reduz a temperatura gradualmente e economiza energia</li>
      <li>Feche portas e janelas durante o uso — evita entrada de calor externo</li>
      <li>Use película solar nas janelas — reduz a carga térmica do ambiente em até 40%</li>
      <li>Troque por Inverter se ainda tiver convencional — economia de até 60% em uso contínuo</li>
    </ul>
    <div className="bg-ice rounded-2xl p-6 my-8 border border-primary/10">
      <h3 className="text-lg font-bold text-primary mb-2">Conta de luz alta? Pode ser o ar condicionado sem manutenção.</h3>
      <p className="text-slate-600 text-sm mb-4">Manutenção preventiva reduz o consumo em até 30% · A partir de R$ 180</p>
      <a href="https://api.whatsapp.com/send/?phone=5511963462516&text=Olá!%20Minha%20conta%20de%20luz%20aumentou%20e%20quero%20verificar%20o%20ar%20condicionado." rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-success text-white font-bold py-3 px-6 rounded-xl text-sm hover:-translate-y-0.5 transition-all">Agendar Manutenção</a>
    </div>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Perguntas frequentes</h2>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Deixar ligado o dia todo gasta mais do que ligar e desligar?</h3>
    <p>Para Inverter: deixar ligado gasta menos — o compressor fica em modo econômico. Para convencional: depende; ligar e desligar gera picos de consumo na partida, mas desligar por horas longas pode compensar. Em geral, para uso acima de 4 horas, manter ligado o dia todo com Inverter é mais econômico.</p>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">O ar condicionado aumentou minha conta de luz. O que fazer?</h3>
    <p>Primeiro, verifique se o filtro está limpo. Segundo, se for convencional, considere trocar por Inverter. Terceiro, agende uma manutenção preventiva — filtro sujo e gás baixo aumentam significativamente o consumo.</p>
  </BlogPostLayout>
);

export const BlogQuantoGasta = () => (
  <BlogPostLayout tag="Economia" title="Quanto Gasta um Ar Condicionado Inverter por Mês? Cálculo Real para SP" date="26 de Junho, 2026" author="Equipe Técnica New Clima">
    <p>A dúvida de quem está comprando um ar condicionado Inverter é sempre a mesma: <strong>quanto vai custar na conta de luz?</strong> Neste artigo, fazemos o cálculo real com os valores de energia de São Paulo em 2026.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Como calcular o gasto do ar condicionado?</h2>
    <p>A fórmula é simples:</p>
    <div className="bg-slate-100 rounded-xl p-4 my-4 font-mono text-sm">
      Custo = Potência (kW) × Horas de uso × Tarifa (R$/kWh)
    </div>
    <p>A tarifa média da Enel SP em 2026 é de aproximadamente <strong>R$ 0,85/kWh</strong> (bandeira verde). Em bandeira vermelha, pode chegar a R$ 1,05/kWh.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Tabela de gasto mensal por modelo (30 dias, 8h/dia)</h2>
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse text-sm">
        <thead><tr className="bg-primary text-white"><th className="p-3 text-left border border-primary">Modelo</th><th className="p-3 text-left border border-primary">Potência média</th><th className="p-3 text-left border border-primary">Gasto mensal</th></tr></thead>
        <tbody>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Inverter 9.000 BTUs</td><td className="p-3 border border-slate-200">~350W médio</td><td className="p-3 border border-slate-200 font-bold text-success">~R$ 71/mês</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Inverter 12.000 BTUs</td><td className="p-3 border border-slate-200">~450W médio</td><td className="p-3 border border-slate-200 font-bold text-success">~R$ 92/mês</td></tr>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Inverter 18.000 BTUs</td><td className="p-3 border border-slate-200">~650W médio</td><td className="p-3 border border-slate-200 font-bold text-success">~R$ 132/mês</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Convencional 12.000 BTUs</td><td className="p-3 border border-slate-200">~1.200W médio</td><td className="p-3 border border-slate-200 font-bold text-red-600">~R$ 244/mês</td></tr>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Convencional 18.000 BTUs</td><td className="p-3 border border-slate-200">~1.800W médio</td><td className="p-3 border border-slate-200 font-bold text-red-600">~R$ 367/mês</td></tr>
        </tbody>
      </table>
    </div>
    <p className="text-sm text-slate-500 italic">* Estimativas baseadas em uso de 8h/dia, 30 dias, tarifa R$ 0,85/kWh. A potência média do Inverter considera alternância entre carga máxima (partida) e mínima (manutenção).</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Gasto real para diferentes perfis de uso</h2>
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse text-sm">
        <thead><tr className="bg-primary text-white"><th className="p-3 text-left border border-primary">Perfil de uso</th><th className="p-3 text-left border border-primary">Horas/dia</th><th className="p-3 text-left border border-primary">Custo mensal (Inverter 12.000)</th></tr></thead>
        <tbody>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Uso leve (só à noite)</td><td className="p-3 border border-slate-200">6h</td><td className="p-3 border border-slate-200 font-bold text-success">~R$ 69/mês</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Uso moderado (tarde + noite)</td><td className="p-3 border border-slate-200">8h</td><td className="p-3 border border-slate-200 font-bold text-primary">~R$ 92/mês</td></tr>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Home office + noite</td><td className="p-3 border border-slate-200">12h</td><td className="p-3 border border-slate-200 font-bold text-primary">~R$ 138/mês</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Uso intenso (dia todo)</td><td className="p-3 border border-slate-200">16h</td><td className="p-3 border border-slate-200 font-bold text-red-600">~R$ 184/mês</td></tr>
        </tbody>
      </table>
    </div>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">O que aumenta o gasto além do esperado?</h2>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li><strong>Filtro sujo:</strong> aumenta o consumo em até 30%</li>
      <li><strong>Temperatura configurada muito baixa:</strong> cada grau a menos = 8% mais consumo</li>
      <li><strong>Gás refrigerante baixo:</strong> compressor trabalha mais para atingir a temperatura</li>
      <li><strong>Ambiente muito grande para o BTU do equipamento:</strong> compressor nunca descansa</li>
      <li><strong>Sol direto no ambiente:</strong> carga térmica alta força o compressor</li>
    </ul>
    <div className="bg-ice rounded-2xl p-6 my-8 border border-primary/10">
      <h3 className="text-lg font-bold text-primary mb-2">Conta de luz alta? Manutenção resolve.</h3>
      <p className="text-slate-600 text-sm mb-4">Limpeza e regulagem reduzem o consumo em até 30% · A partir de R$ 180 · São Paulo e ABC</p>
      <a href="https://api.whatsapp.com/send/?phone=5511963462516&text=Olá!%20Quero%20reduzir%20o%20gasto%20do%20meu%20ar%20condicionado%20na%20conta%20de%20luz." rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-success text-white font-bold py-3 px-6 rounded-xl text-sm hover:-translate-y-0.5 transition-all">Agendar Manutenção</a>
    </div>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Perguntas frequentes</h2>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Como saber quanto o ar condicionado está gastando de verdade?</h3>
    <p>A forma mais precisa é usar um medidor de energia (wattímetro plug-in — menos de R$ 50 online). Conecte entre a tomada e o aparelho e monitore o consumo real em diferentes situações de uso.</p>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Vale a pena trocar convencional por Inverter apenas pela economia?</h3>
    <p>Para uso acima de 6 horas diárias, sim. A economia média de R$ 100 a R$ 150/mês paga a diferença de preço entre convencional e Inverter em 4 a 8 meses.</p>
  </BlogPostLayout>
);

export const BlogMauCheiro = () => (
  <BlogPostLayout tag="Manutenção" title="Ar Condicionado com Mau Cheiro: Causas, Riscos e Como Resolver" date="26 de Junho, 2026" author="Equipe Técnica New Clima">
    <p>O ar condicionado com mau cheiro é um dos problemas mais comuns em São Paulo — e também um dos mais ignorados. O cheiro ruim não é apenas desconfortável: é um sinal de que o aparelho está cheio de fungos, bactérias e matéria orgânica que estão sendo expelidos no ar que você respira.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Por que o ar condicionado fica com mau cheiro?</h2>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li><strong>Fungos no evaporador:</strong> a principal causa — o evaporador (serpentina interna) fica úmido e acumula fungos que causam cheiro de mofo</li>
      <li><strong>Dreno entupido:</strong> água parada no dreno cria ambiente para bactérias anaeróbias que causam cheiro de esgoto</li>
      <li><strong>Filtros sujos:</strong> poeira, pêlos de animais e partículas orgânicas acumuladas nos filtros</li>
      <li><strong>Bandeja de condensado suja:</strong> acúmulo de limo e bactérias na bandeja de água</li>
      <li><strong>Roedor ou animal morto:</strong> em casos raros, animais entram na condensadora e morrem — cheiro intenso e repentino</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Tipos de cheiro e o que cada um indica</h2>
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse text-sm">
        <thead><tr className="bg-primary text-white"><th className="p-3 text-left border border-primary">Tipo de cheiro</th><th className="p-3 text-left border border-primary">Causa provável</th><th className="p-3 text-left border border-primary">Solução</th></tr></thead>
        <tbody>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Mofo / bolor</td><td className="p-3 border border-slate-200">Fungos no evaporador</td><td className="p-3 border border-slate-200">Higienização profissional</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Esgoto / podre</td><td className="p-3 border border-slate-200">Dreno entupido com bactérias</td><td className="p-3 border border-slate-200">Limpeza do dreno</td></tr>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Queimado / elétrico</td><td className="p-3 border border-slate-200">Problema elétrico ou motor</td><td className="p-3 border border-slate-200">Desligar e chamar técnico urgente</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Cigarro / fumaça</td><td className="p-3 border border-slate-200">Contaminação dos filtros</td><td className="p-3 border border-slate-200">Troca de filtros + higienização</td></tr>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Doce / adocicado</td><td className="p-3 border border-slate-200">Vazamento de gás refrigerante</td><td className="p-3 border border-slate-200">Verificação de gás pelo técnico</td></tr>
        </tbody>
      </table>
    </div>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Cheiro de queimado: quando desligar imediatamente</h2>
    <p>Se o ar condicionado emitir cheiro de queimado ou elétrico, <strong>desligue imediatamente</strong> no interruptor e na chave geral. Esse cheiro indica problema elétrico — motor com rolamento travado, curto na placa ou fiação danificada — que pode causar incêndio se ignorado.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Como resolver o mau cheiro?</h2>
    <p>A solução depende da causa:</p>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li><strong>Cheiro de mofo:</strong> higienização profissional com produto bactericida no evaporador — não resolve limpar apenas o filtro</li>
      <li><strong>Cheiro de esgoto:</strong> desentupimento do dreno e limpeza da bandeja de condensado</li>
      <li><strong>Cheiro elétrico:</strong> inspeção técnica urgente — não tente resolver sozinho</li>
      <li><strong>Prevenção:</strong> manutenção semestral evita o acúmulo de fungos e entupimento do dreno</li>
    </ul>
    <div className="bg-ice rounded-2xl p-6 my-8 border border-primary/10">
      <h3 className="text-lg font-bold text-primary mb-2">Seu ar condicionado está com mau cheiro?</h3>
      <p className="text-slate-600 text-sm mb-4">Atendemos em até 2 horas · Higienização com bactericida certificado · Garantia de 90 dias</p>
      <a href="https://api.whatsapp.com/send/?phone=5511963462516&text=Olá!%20Meu%20ar%20condicionado%20está%20com%20mau%20cheiro%20e%20preciso%20de%20atendimento." rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-success text-white font-bold py-3 px-6 rounded-xl text-sm hover:-translate-y-0.5 transition-all">Resolver Agora pelo WhatsApp</a>
    </div>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Perguntas frequentes</h2>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Posso usar aromatizador para mascarar o cheiro?</h3>
    <p>Não é recomendado. O aromatizador mascara o sintoma sem tratar a causa — os fungos e bactérias continuam se proliferando e sendo expelidos no ar. A solução é a higienização do evaporador.</p>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Quanto custa a higienização em SP?</h3>
    <p>A higienização profissional de um split residencial em São Paulo custa em média R$ 150 a R$ 250. O preço varia conforme o tamanho do equipamento e o grau de contaminação.</p>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Limpar o filtro resolve o mau cheiro?</h3>
    <p>Parcialmente. A limpeza do filtro remove parte da poeira e ácaros, mas o cheiro de mofo vem do evaporador (serpentina) — que fica atrás do filtro e só pode ser limpo com equipamento profissional e produto bactericida adequado.</p>
  </BlogPostLayout>
);

export const BlogDesligaSozinho = () => (
  <BlogPostLayout tag="Problemas" title="Ar Condicionado Desliga Sozinho: 8 Causas e Como Resolver" date="26 de Junho, 2026" author="Equipe Técnica New Clima">
    <p>O ar condicionado ligar e desligar sozinho é um problema comum em São Paulo e pode ter diversas causas — da mais simples (filtro sujo) à mais grave (compressor com defeito). Entender a causa certa evita gastar com consertos desnecessários.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">As 8 causas mais comuns para o ar condicionado desligar sozinho</h2>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li><strong>1. Filtro entupido:</strong> o filtro sujo restringe o fluxo de ar, causando superaquecimento do compressor — o sistema de proteção desliga o equipamento automaticamente</li>
      <li><strong>2. Gás refrigerante baixo:</strong> sem gás suficiente, a pressão do sistema cai e o presostato de baixa pressão desliga o compressor</li>
      <li><strong>3. Condensadora bloqueada:</strong> se a unidade externa não tem ventilação adequada (muito próxima de paredes ou coberta), o compressor superaquece e desliga</li>
      <li><strong>4. Problema elétrico:</strong> tensão instável, disjuntor subdimensionado ou fiação com mau contato causam desligamentos intermitentes</li>
      <li><strong>5. Placa eletrônica com defeito:</strong> falha no controlador do sistema pode causar desligamentos aleatórios</li>
      <li><strong>6. Sensor de temperatura com defeito:</strong> o termistor com problema envia leituras erradas para a placa — o sistema interpreta que a temperatura foi atingida e desliga</li>
      <li><strong>7. Compressor superaquecido:</strong> compressor com desgaste ou com óleo vencido superaquece e desliga pelo termostato interno de proteção</li>
      <li><strong>8. Timer ativado acidentalmente:</strong> muitos aparelhos têm timer que pode ser ativado sem querer pelo controle remoto</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Como identificar a causa?</h2>
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse text-sm">
        <thead><tr className="bg-primary text-white"><th className="p-3 text-left border border-primary">Sintoma adicional</th><th className="p-3 text-left border border-primary">Causa provável</th></tr></thead>
        <tbody>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Desliga após 10-15 min, gerou pouco frio</td><td className="p-3 border border-slate-200">Filtro sujo ou gás baixo</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Condensadora muito quente ao toque</td><td className="p-3 border border-slate-200">Ventilação insuficiente ou compressor com defeito</td></tr>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Disjuntor cai junto</td><td className="p-3 border border-slate-200">Problema elétrico — curto ou sobrecarga</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Desliga em horário fixo</td><td className="p-3 border border-slate-200">Timer ativado — verifique o controle remoto</td></tr>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Código de erro no display</td><td className="p-3 border border-slate-200">Falha específica — anote o código e chame técnico</td></tr>
        </tbody>
      </table>
    </div>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">O que fazer antes de chamar o técnico</h2>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li>Limpe o filtro — retire, lave com água e deixe secar completamente antes de recolocar</li>
      <li>Verifique se a condensadora externa está livre de obstáculos e com ventilação adequada</li>
      <li>Confirme se o timer não está ativado no controle remoto</li>
      <li>Verifique o disjuntor dedicado — se estiver esquentando, pode estar subdimensionado</li>
    </ul>
    <p>Se o problema persistir após essas verificações, é hora de chamar um técnico. Continuar forçando o equipamento pode transformar um conserto simples em substituição de compressor.</p>
    <div className="bg-ice rounded-2xl p-6 my-8 border border-primary/10">
      <h3 className="text-lg font-bold text-primary mb-2">Diagnóstico gratuito em São Paulo</h3>
      <p className="text-slate-600 text-sm mb-4">Atendemos em até 2 horas · Diagnóstico sem custo · Orçamento antes de qualquer serviço</p>
      <a href="https://api.whatsapp.com/send/?phone=5511963462516&text=Olá!%20Meu%20ar%20condicionado%20está%20desligando%20sozinho%20e%20preciso%20de%20diagnóstico." rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-success text-white font-bold py-3 px-6 rounded-xl text-sm hover:-translate-y-0.5 transition-all">Diagnóstico Gratuito</a>
    </div>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Perguntas frequentes</h2>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Ar condicionado desligando sozinho pode pegar fogo?</h3>
    <p>Em casos de problema elétrico (curto na placa ou fiação), existe risco. Se o desligamento vier acompanhado de cheiro de queimado, desligue imediatamente na chave geral e chame um técnico.</p>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Quanto custa consertar ar condicionado que desliga sozinho?</h3>
    <p>Depende da causa. Limpeza de filtro: R$ 0 (pode fazer em casa). Recarga de gás: R$ 200 a R$ 400. Troca de sensor: R$ 150 a R$ 350. Troca de placa: R$ 400 a R$ 1.200. Troca de compressor: R$ 800 a R$ 2.500.</p>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Posso usar o ar condicionado enquanto ele desliga sozinho?</h3>
    <p>Não recomendamos. Continuar usando enquanto o problema persiste pode agravar a situação — especialmente se a causa for superaquecimento do compressor ou problema elétrico.</p>
  </BlogPostLayout>
);

export const BlogVidaUtil = () => (
  <BlogPostLayout tag="Manutenção" title="Vida Útil do Ar Condicionado: Quanto Dura e Como Prolongar" date="26 de Junho, 2026" author="Equipe Técnica New Clima">
    <p>Um ar condicionado bem cuidado dura entre <strong>12 e 15 anos</strong>. Sem manutenção adequada, esse tempo pode cair para 5 a 7 anos — uma diferença de até R$ 3.000 em substituições antecipadas.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Vida útil por tipo de equipamento</h2>
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse text-sm">
        <thead><tr className="bg-primary text-white"><th className="p-3 text-left border border-primary">Tipo</th><th className="p-3 text-left border border-primary">Vida útil com manutenção</th><th className="p-3 text-left border border-primary">Sem manutenção</th></tr></thead>
        <tbody>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Split convencional</td><td className="p-3 border border-slate-200 font-bold text-success">10 a 12 anos</td><td className="p-3 border border-slate-200 font-bold text-red-600">5 a 7 anos</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Split Inverter</td><td className="p-3 border border-slate-200 font-bold text-success">12 a 15 anos</td><td className="p-3 border border-slate-200 font-bold text-red-600">6 a 8 anos</td></tr>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Multi Split</td><td className="p-3 border border-slate-200 font-bold text-success">12 a 15 anos</td><td className="p-3 border border-slate-200 font-bold text-red-600">5 a 7 anos</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Cassete / VRF comercial</td><td className="p-3 border border-slate-200 font-bold text-success">15 a 20 anos</td><td className="p-3 border border-slate-200 font-bold text-red-600">8 a 10 anos</td></tr>
        </tbody>
      </table>
    </div>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">O que mais desgasta o ar condicionado?</h2>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li><strong>Falta de limpeza dos filtros:</strong> causa superaquecimento do compressor por restrição de fluxo de ar</li>
      <li><strong>Gás refrigerante baixo:</strong> compressor trabalha em sobrecarga para compensar a perda de eficiência</li>
      <li><strong>Instalação incorreta:</strong> inclinação errada da unidade interna causa acúmulo de água; condensadora sem ventilação adequada superaquece</li>
      <li><strong>Tensão elétrica instável:</strong> variações de tensão danificam a placa eletrônica e o motor do compressor</li>
      <li><strong>Uso contínuo sem descanso:</strong> principalmente em verões intensos de SP</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Como prolongar a vida útil do seu ar condicionado</h2>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li>Limpe os filtros a cada 15 dias em uso intenso</li>
      <li>Faça manutenção preventiva semestral com técnico certificado</li>
      <li>Instale um estabilizador ou use circuito elétrico dedicado com DPS (Dispositivo de Proteção contra Surtos)</li>
      <li>Nunca bloqueie a ventilação da condensadora externa</li>
      <li>Verifique o nível de gás anualmente</li>
      <li>Não deixe o aparelho ligado em ambiente fechado sem retorno de ar</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Quando vale a pena consertar x trocar?</h2>
    <p>A regra geral: se o custo do conserto supera <strong>50% do valor de um equipamento novo equivalente</strong>, a troca é mais vantajosa. Guia rápido:</p>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li><strong>Aparelho com menos de 5 anos:</strong> sempre vale consertar</li>
      <li><strong>5 a 10 anos:</strong> depende do problema — peças menores (capacitor, sensor) vale; compressor ou placa, avalie</li>
      <li><strong>Acima de 10 anos com problema no compressor:</strong> geralmente mais vantajoso trocar por Inverter novo</li>
    </ul>
    <div className="bg-ice rounded-2xl p-6 my-8 border border-primary/10">
      <h3 className="text-lg font-bold text-primary mb-2">Seu ar condicionado tem mais de 5 anos sem manutenção?</h3>
      <p className="text-slate-600 text-sm mb-4">Manutenção preventiva agora evita problemas maiores · A partir de R$ 180 · São Paulo e ABC</p>
      <a href="https://api.whatsapp.com/send/?phone=5511963462516&text=Olá!%20Quero%20fazer%20manutenção%20preventiva%20no%20meu%20ar%20condicionado." rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-success text-white font-bold py-3 px-6 rounded-xl text-sm hover:-translate-y-0.5 transition-all">Agendar Manutenção</a>
    </div>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Perguntas frequentes</h2>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Ar condicionado de 15 anos ainda vale a pena usar?</h3>
    <p>Se estiver funcionando bem e com manutenção em dia, pode continuar. Mas considere que os modelos mais antigos consomem muito mais energia que os Inverter atuais — a troca pode se pagar rapidamente pela economia na conta de luz.</p>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Qual marca dura mais?</h3>
    <p>Daikin e Fujitsu têm reputação de maior durabilidade. LG e Samsung têm boa durabilidade com manutenção adequada. A diferença de vida útil entre marcas é menor do que a diferença entre ter ou não ter manutenção preventiva regular.</p>
  </BlogPostLayout>
);

export const BlogTemperatura = () => (
  <BlogPostLayout tag="Uso" title="Temperatura Ideal do Ar Condicionado: Por Saúde, Economia e Conforto" date="26 de Junho, 2026" author="Equipe Técnica New Clima">
    <p>Qual a temperatura ideal para o ar condicionado? A resposta varia conforme o ambiente, o horário e o perfil de quem usa — mas existe uma faixa que combina conforto, saúde e economia para a maioria das situações em São Paulo.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Temperatura ideal por tipo de ambiente</h2>
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse text-sm">
        <thead><tr className="bg-primary text-white"><th className="p-3 text-left border border-primary">Ambiente</th><th className="p-3 text-left border border-primary">Temperatura ideal</th><th className="p-3 text-left border border-primary">Motivo</th></tr></thead>
        <tbody>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Sala de estar</td><td className="p-3 border border-slate-200 font-bold text-primary">22°C a 24°C</td><td className="p-3 border border-slate-200">Conforto para atividades normais</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Quarto (adulto)</td><td className="p-3 border border-slate-200 font-bold text-primary">20°C a 23°C</td><td className="p-3 border border-slate-200">Favorece o sono profundo</td></tr>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Quarto (criança)</td><td className="p-3 border border-slate-200 font-bold text-primary">23°C a 25°C</td><td className="p-3 border border-slate-200">Mais seguro para crianças</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Escritório</td><td className="p-3 border border-slate-200 font-bold text-primary">22°C a 24°C</td><td className="p-3 border border-slate-200">Produtividade e conforto</td></tr>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Academia / espaço esportivo</td><td className="p-3 border border-slate-200 font-bold text-primary">18°C a 21°C</td><td className="p-3 border border-slate-200">Corpo em atividade gera mais calor</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Servidor / datacenter</td><td className="p-3 border border-slate-200 font-bold text-primary">18°C a 20°C</td><td className="p-3 border border-slate-200">Proteção dos equipamentos</td></tr>
        </tbody>
      </table>
    </div>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Temperatura e economia de energia</h2>
    <p>Cada grau a menos no ar condicionado aumenta o consumo de energia em aproximadamente <strong>8%</strong>. Ou seja:</p>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li>Usar 18°C em vez de 24°C aumenta o consumo em até 50%</li>
      <li>Subir de 22°C para 24°C economiza cerca de 16% na conta de luz</li>
      <li>O PROCEL e o INMETRO recomendam 23°C como temperatura de referência para escritórios</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Por que temperatura muito baixa faz mal?</h2>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li>Abaixo de 18°C pode causar hipotermia leve e dores musculares</li>
      <li>A diferença grande entre o ambiente interno e o externo (que em SP pode chegar a 15°C) causa choque térmico ao entrar e sair</li>
      <li>Ar muito frio resseca as mucosas do nariz e garganta, facilitando infecções</li>
      <li>Ambientes muito frios reduzem a produtividade e aumentam o desconforto</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Diferença de temperatura máxima recomendada</h2>
    <p>A diferença entre a temperatura interna e a temperatura externa não deve ultrapassar <strong>7°C a 10°C</strong>. Em dias muito quentes em São Paulo (35°C+), o ideal é manter o ambiente em torno de 25°C a 27°C — não em 18°C, que gera um choque de 17°C ao sair para a rua.</p>
    <div className="bg-ice rounded-2xl p-6 my-8 border border-primary/10">
      <h3 className="text-lg font-bold text-primary mb-2">Seu ar condicionado não mantém a temperatura certa?</h3>
      <p className="text-slate-600 text-sm mb-4">Pode ser falta de gás, filtro sujo ou equipamento subdimensionado · Diagnóstico gratuito</p>
      <a href="https://api.whatsapp.com/send/?phone=5511963462516&text=Olá!%20Meu%20ar%20condicionado%20não%20está%20mantendo%20a%20temperatura%20certa." rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-success text-white font-bold py-3 px-6 rounded-xl text-sm hover:-translate-y-0.5 transition-all">Diagnóstico Gratuito</a>
    </div>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Perguntas frequentes</h2>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Qual temperatura o governo recomenda para empresas?</h3>
    <p>A NR-17 (Norma Regulamentadora do Trabalho) estabelece que em escritórios a temperatura deve ficar entre 20°C e 23°C. O INMETRO recomenda 23°C como padrão para economia de energia.</p>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">O ar condicionado realmente atinge a temperatura configurada?</h3>
    <p>Depende do dimensionamento. Um equipamento subdimensionado para o ambiente nunca atingirá temperaturas muito baixas em dias quentes. Se o ar condicionado não atinge a temperatura configurada, pode ser BTU insuficiente, gás baixo ou filtro sujo.</p>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Posso usar 16°C (temperatura mínima) para resfriar mais rápido?</h3>
    <p>O ar condicionado resfria na mesma velocidade independente da temperatura configurada — o compressor trabalha na mesma intensidade. Configurar 16°C não resfria mais rápido, apenas mantém o compressor ligado por mais tempo, gastando mais energia.</p>
  </BlogPostLayout>
);

export const BlogFuncaoDry = () => (
  <BlogPostLayout tag="Uso" title="Função Dry do Ar Condicionado: Para Que Serve e Quando Usar" date="26 de Junho, 2026" author="Equipe Técnica New Clima">
    <p>A função Dry (ou modo seco) está presente na maioria dos ares condicionados modernos, mas poucos usuários sabem para que serve e quando usar. Entender essa função pode melhorar o conforto e reduzir o consumo de energia em São Paulo — especialmente nos dias chuvosos e úmidos.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">O que é a função Dry?</h2>
    <p>O modo Dry (seco) é projetado para <strong>reduzir a umidade do ar</strong> sem necessariamente resfriar muito o ambiente. Nesse modo, o ventilador funciona em velocidade baixa e o compressor liga e desliga em ciclos curtos — removendo a umidade do ar sem causar muito resfriamento.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Dry x Modo Refrigeração: qual a diferença?</h2>
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse text-sm">
        <thead><tr className="bg-primary text-white"><th className="p-3 text-left border border-primary">Característica</th><th className="p-3 text-left border border-primary">Modo Refrigeração</th><th className="p-3 text-left border border-primary">Modo Dry</th></tr></thead>
        <tbody>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Objetivo principal</td><td className="p-3 border border-slate-200">Reduzir temperatura</td><td className="p-3 border border-slate-200">Reduzir umidade</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Velocidade do ventilador</td><td className="p-3 border border-slate-200">Conforme configurado</td><td className="p-3 border border-slate-200">Sempre baixa</td></tr>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Compressor</td><td className="p-3 border border-slate-200">Ligado continuamente</td><td className="p-3 border border-slate-200">Liga/desliga em ciclos</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Consumo de energia</td><td className="p-3 border border-slate-200">Maior</td><td className="p-3 border border-slate-200">Menor</td></tr>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Resfriamento</td><td className="p-3 border border-slate-200">Intenso</td><td className="p-3 border border-slate-200">Leve</td></tr>
        </tbody>
      </table>
    </div>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Quando usar o modo Dry em SP?</h2>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li><strong>Dias chuvosos e abafados:</strong> temperatura amena mas umidade alta — o Dry remove o "bafão" sem esfriar demais</li>
      <li><strong>Período de transição (outono/inverno em SP):</strong> quando não está quente o suficiente para o modo frio mas a umidade está alta</li>
      <li><strong>Ambientes com mofo:</strong> umidade reduzida inibe o crescimento de fungos</li>
      <li><strong>Noites de verão com chuva:</strong> temperatura cai mas a umidade permanece alta</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Dry economiza energia?</h2>
    <p>Sim. O modo Dry consome aproximadamente <strong>30% a 50% menos</strong> do que o modo refrigeração, pois o compressor trabalha em ciclos curtos. Para dias em que a temperatura está suportável mas a umidade está alta — o que é comum em São Paulo — o Dry é a opção mais econômica e confortável.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Dry pode substituir o desumidificador?</h2>
    <p>Para uso doméstico em São Paulo, o modo Dry do ar condicionado é suficiente para a maioria das situações. Desumidificadores dedicados são indicados para ambientes com umidade muito alta e persistente — como subsolos, adegas ou locais com problema de infiltração.</p>
    <div className="bg-ice rounded-2xl p-6 my-8 border border-primary/10">
      <h3 className="text-lg font-bold text-primary mb-2">Seu ar condicionado não tem modo Dry ou está com problema?</h3>
      <p className="text-slate-600 text-sm mb-4">Verificamos o funcionamento de todos os modos · Manutenção a partir de R$ 180</p>
      <a href="https://api.whatsapp.com/send/?phone=5511963462516&text=Olá!%20Gostaria%20de%20verificar%20o%20funcionamento%20do%20meu%20ar%20condicionado." rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-success text-white font-bold py-3 px-6 rounded-xl text-sm hover:-translate-y-0.5 transition-all">Falar com Técnico</a>
    </div>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Perguntas frequentes</h2>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">O modo Dry esfria o ambiente?</h3>
    <p>Sim, levemente — como efeito secundário da remoção de umidade. Mas o resfriamento é muito menor do que no modo refrigeração. Se o objetivo é resfriar, use o modo Cool (refrigeração).</p>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Posso deixar o Dry ligado a noite toda?</h3>
    <p>Sim. O modo Dry tem consumo baixo e pode ser usado durante a noite em dias úmidos. Em noites frias, combine com temperatura mais alta para evitar ressecamento excessivo do ar.</p>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">O modo Dry ajuda a combater o mofo no ambiente?</h3>
    <p>Sim. Fungos se proliferam em umidade acima de 60-70%. O uso regular do modo Dry mantém a umidade em faixas que inibem o crescimento de mofo — especialmente útil em quartos e salas de apartamentos em SP durante o inverno úmido.</p>
  </BlogPostLayout>
);

export const BlogGas = () => (
  <BlogPostLayout tag="Técnico" title="Gás R32 x R410A: Diferenças, Vantagens e Qual Está no Seu Ar Condicionado" date="26 de Junho, 2026" author="Equipe Técnica New Clima">
    <p>Se o seu ar condicionado parou de gelar ou está gelando menos do que antes, pode ser que o gás refrigerante esteja baixo. Mas afinal, que gás é esse? Quais são as diferenças entre R32 e R410A? E quanto custa fazer a recarga em São Paulo?</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">O que é o gás refrigerante?</h2>
    <p>O gás refrigerante é o fluido que circula entre as unidades interna e externa do ar condicionado, absorvendo o calor do ambiente interno e liberando-o no externo. Sem gás suficiente, o sistema perde capacidade de resfriamento.</p>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">R32 x R410A: comparação completa</h2>
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse text-sm">
        <thead><tr className="bg-primary text-white"><th className="p-3 text-left border border-primary">Característica</th><th className="p-3 text-left border border-primary">R410A</th><th className="p-3 text-left border border-primary">R32</th></tr></thead>
        <tbody>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Uso</td><td className="p-3 border border-slate-200">Padrão até 2020</td><td className="p-3 border border-slate-200 font-bold text-success">Padrão atual (2020+)</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Potencial de aquecimento global (GWP)</td><td className="p-3 border border-slate-200 font-bold text-red-600">2.088</td><td className="p-3 border border-slate-200 font-bold text-success">675 (3x menor)</td></tr>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Eficiência energética</td><td className="p-3 border border-slate-200">Boa</td><td className="p-3 border border-slate-200 font-bold text-success">Melhor (+10%)</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Quantidade necessária</td><td className="p-3 border border-slate-200">Maior</td><td className="p-3 border border-slate-200 font-bold text-success">30% menos</td></tr>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Inflamabilidade</td><td className="p-3 border border-slate-200 font-bold text-success">Não inflamável</td><td className="p-3 border border-slate-200">Levemente inflamável (classe A2L)</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Custo do gás</td><td className="p-3 border border-slate-200">Mais caro (em desuso)</td><td className="p-3 border border-slate-200 font-bold text-success">Mais acessível</td></tr>
        </tbody>
      </table>
    </div>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Qual gás está no meu ar condicionado?</h2>
    <p>Você encontra essa informação na <strong>etiqueta da unidade externa</strong> (condensadora) ou no manual do equipamento. Como referência:</p>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li>Equipamentos fabricados até 2019: geralmente R410A</li>
      <li>Equipamentos fabricados de 2020 em diante: geralmente R32</li>
      <li>Equipamentos mais antigos (anterior a 2010): podem usar R22 (em desuso e ilegal para novos equipamentos)</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Sinais de que o gás está baixo</h2>
    <ul className="list-disc pl-6 space-y-2 my-4">
      <li>Ar condicionado liga mas não gela ou gela pouco</li>
      <li>Unidade interna fica com gelo na serpentina</li>
      <li>Compressor fica ligado continuamente sem atingir a temperatura</li>
      <li>Consumo de energia aumentou sem mudança de uso</li>
      <li>Água pingando mais do que o normal da unidade interna</li>
    </ul>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Quanto custa a recarga de gás em SP?</h2>
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse text-sm">
        <thead><tr className="bg-primary text-white"><th className="p-3 text-left border border-primary">Serviço</th><th className="p-3 text-left border border-primary">Preço médio em SP (2026)</th></tr></thead>
        <tbody>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Verificação de gás (diagnóstico)</td><td className="p-3 border border-slate-200 font-bold text-primary">R$ 80 a R$ 150</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Recarga R32 (split 9.000-12.000 BTUs)</td><td className="p-3 border border-slate-200 font-bold text-primary">R$ 200 a R$ 350</td></tr>
          <tr className="bg-white"><td className="p-3 border border-slate-200">Recarga R410A (split 9.000-12.000 BTUs)</td><td className="p-3 border border-slate-200 font-bold text-primary">R$ 250 a R$ 400</td></tr>
          <tr className="bg-slate-50"><td className="p-3 border border-slate-200">Detecção de vazamento + recarga</td><td className="p-3 border border-slate-200 font-bold text-primary">R$ 350 a R$ 600</td></tr>
        </tbody>
      </table>
    </div>
    <p><strong>Atenção:</strong> se o gás acabou, existe um vazamento no sistema. Apenas recarregar sem localizar e reparar o vazamento é jogo perdido — em poucos meses o gás acaba de novo.</p>
    <div className="bg-ice rounded-2xl p-6 my-8 border border-primary/10">
      <h3 className="text-lg font-bold text-primary mb-2">Ar condicionado não está gelando em SP?</h3>
      <p className="text-slate-600 text-sm mb-4">Diagnóstico gratuito · Verificamos o gás e identificamos vazamentos · Garantia de 90 dias</p>
      <a href="https://api.whatsapp.com/send/?phone=5511963462516&text=Olá!%20Meu%20ar%20condicionado%20não%20está%20gelando%20e%20pode%20ser%20problema%20de%20gás." rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-success text-white font-bold py-3 px-6 rounded-xl text-sm hover:-translate-y-0.5 transition-all">Diagnóstico Gratuito</a>
    </div>
    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Perguntas frequentes</h2>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Posso misturar R32 com R410A?</h3>
    <p>Não. Os gases têm propriedades diferentes e não são compatíveis. Misturar gases diferentes danifica o compressor e invalida a garantia do equipamento.</p>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">O gás do ar condicionado acaba naturalmente?</h3>
    <p>Não. O sistema de refrigeração é fechado — o gás não se consome. Se o gás está baixo, existe um vazamento que precisa ser localizado e reparado antes da recarga.</p>
    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Com que frequência verificar o gás?</h3>
    <p>A verificação do nível de gás faz parte da manutenção preventiva semestral. Se o aparelho está gelando normalmente, não há necessidade de recarga — o gás não é consumido em operação normal.</p>
  </BlogPostLayout>
);

