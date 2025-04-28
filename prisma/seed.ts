import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  //USERS
  const mikkaiser = await prisma.user.upsert({
    where: { email: 'mikaelrsimoes19@gmail.com' },
    update: {},
    create: {
      name: 'Mikael Ribeiro',
      email: 'mikaelrsimoes19@gmail.com',
      function: 'Desenvolvedor Full Stack',
    },
  });

  const leticia = await prisma.user.upsert({
    where: { email: 'contatoleticiadia@gmail.com' },
    update: {},
    create: {
      name: 'Leticia Dias',
      email: 'contatoleticiadia@gmail.com',
      function: 'Desenvolvedora Full Stack',
    },
  });

  const monique = await prisma.user.upsert({
    where: { email: 'nickyalbuquerque2008@gmail.com' },
    update: {},
    create: {
      name: 'Monique Campos',
      email: 'nickyalbuquerque2008@gmail.com',
      function: 'Desenvolvedora Frontend',
    },
  });

  //CATEGORY
  const CATEGORY_REFLEXION = await prisma.category.upsert({
    where: { id: 1 },
    update: {},
    create: { name: 'reflexões' },
  });

  const CATEGORY_OLYMPIAD = await prisma.category.upsert({
    where: { id: 2 },
    update: {},
    create: { name: 'olimpíada' },
  });

  const CATEGORY_TECHKNOWLEDGE = await prisma.category.upsert({
    where: { id: 3 },
    update: {},
    create: { name: 'techknowledge' },
  });

  const CATEGORY_JAVASCRIPT = await prisma.category.upsert({
    where: { id: 4 },
    update: {},
    create: { name: 'JavaScript' },
  });

  const CATEGORY_CHALLENGE = await prisma.category.upsert({
    where: { id: 5 },
    update: {},
    create: { name: 'challenges' },
  });

  const CATEGORY_CLOUDCOMPUTING = await prisma.category.upsert({
    where: { id: 6 },
    update: {},
    create: { name: 'cloud computing' },
  });

  //POSTS

  const FAZ_FUNCIONAR_E_DEPOIS_MELHORA_SERA_MESMO = await prisma.post.upsert({
    where: { id: 1 },
    update: {},
    create: {
      title: '"Faz funcionar e depois melhora." Será mesmo?',
      authorId: 2,
      content: `Cheguei à conclusão de que esse pensamento pode ser perigoso, porque quando pensamos assim, acabamos nos acostumando apenas em fazer funcionar e nos esquecemos de melhorar depois. Isso é algo muito comum, principalmente para nós desenvolvedores, mas que em determinadas situações acaba fazendo sentido, por diversos motivos.

Fazemos o uso de metodologias que até aplicam esses conceitos (e só para deixar claro não estou criticando ou julgando mal), apenas mostrando um ponto de vista um pouco diferente a respeito do assunto, pois muitos times aplicam como base para organizar e administrar as demandas dos projetos.

### Por que eu não trago esse pensamento comigo?

Como desenvolvedora, sei que ver algo funcionando é uma mistura de satisfação e alegria ao mesmo tempo, só que fazer funcionar não significa ter encontrado a melhor solução. E é nesse ponto que eu quero chegar.

Pensa comigo: e se a gente mudar o pensamento de fazer funcionar e depois melhorar para: qual a melhor solução para resolver esse problema?

Aqui não estou nem entrando em assuntos que envolvem padrões de projetos, código ou arquitetura, mas sim no próprio produto em si que você está trabalhando.

Muitas das vezes tratamos uma aplicação ou software como se fosse apenas algo legal que estou trabalhando ou até mesmo paga os meus boletos e isso acaba tirando não só a importância, como também a imagem de que aquilo é um produto, que é escalado para diversos usuários que fazem uso do mesmo.

Não somente isso, mas que existe todo um ecossistema em volta daquele produto e você não é única pessoa que faz parte dele. Por isso, você precisa pensar em boas soluções para resolver os problemas do produto ao qual você está trabalhando, além de trazer um código que seja fácil de ser ler e manter, isso é importante.

**Por isso fazer perguntas como:**

- Qual é a melhor solução para resolver esse problema?
- Essa solução que encontrei, de fato resolve o problema ou apenas está quebrando o galho agora?
- Qual efeito colateral que esse código pode trazer na aplicação?
- Outro desenvolvedor vai entender o que eu fiz aqui no código?

### Uma pequena ilustração

Imagina que você comprou uma casa nova, certo? Ela é bonita, tem uma estrutura muito boa e se destaca entre as outras casas da vizinhança, porque ela acabou de ser construída.

Com o passar do tempo, a casa começa a apresentar alguns problemas e você percebe que precisa fazer uma reforma na casa, para poder manter ela e para que outros problemas piores não apareçam.

O mesmo acontece com uma aplicação ou software. Eles são construídos, mas precisam de manutenção constante, não só para resolver bugs encontrados, como também para adição de novas funcionalidades para trazer sempre a melhor experiência para o usuário.

### Conclusão

Se eu apenas penso em fazer funcionar, nunca vou me preocupar em encontrar a melhor solução para resolver o problema, mas sim em pegar a primeira solução que eu encontrar e é isso.

Além de ser algo ruim, dificulta a manutenção do código e diminui a vida útil do software ou aplicação.

Por isso, eu hoje não levo esse pensamento comigo. Posso até demorar um pouco mais para resolver o problema, mas pelo menos vou ter explorado todos os cenários possíveis para melhor resolvê-lo.
        `,
      previewContent:
        'Nesse post vamos abordar um pouco sobre um assunto bastante comum em nossa área onde nos deparamos constantemente com esse cenário. Será que fazer funcionar e depois melhorar é a melhor forma de se resolver um problema? Vem descobrir comigo.',
      slug: 'faz-funcionar-e-depois-melhora-sera-mesmo',
      isPublished: true,
      categoryId: 1,
    },
  });

  const OLIMPIADA_DO_CONHECIMENTO = await prisma.post.upsert({
    where: { id: 2 },
    update: {},
    create: {
      title: 'Olímpiada do Conhecimento',
      authorId: 2,
      content: `### O que é a Olímpiada do Conhecimento?

É uma competição de educação profissional. Estados de todo o Brasil, seleciona um ou mais competidores para cada ocupação participante dessa disputa para concorrer a tão sonhada vaga para a competição internacional WorldSkills.

A Olímpiada do Conhecimento é também conhecida como a seletiva nacional para WorldSkills, que é a maior competição de educação profissional do mundo. Reconhecida por inspirar diversos jovens competidores ao redor do mundo, testando suas habilidades e conhecimentos de acordo com sua ocupação com um padrão-ouro de excelência.

### Como é o processo de treinamento dos competidores?

Para cada ocupação dentro da Olímpiada do Conhecimento existe um processo para os treinamentos. Em geral cada competidor(a) tem um período de 2 anos em preparo para a competição, onde passa por um série de treinamentos intensivos, com provas e simulados para testar suas habilidades e conhecimentos na área da sua ocupação.

Todo esse processo não seria possível sem um treinador(a). O treinador é uma parte fundamental para o desenvolvimento do competidor durante a prepação para a Olímpiada do Conhecimento. Por isso, cada competidor(a) é acompanhado por um treinador(a) que o auxília com métodos, estrátegias, técnicas para que possa estar capacitado e pronto para a disputa.

### Curiosidades

A 43ª WorldSkills Competition aconteceu no Anhembi Parque, São Paulo, Brasil, de 11 a 16 de agosto de 2015, sendo a única edição que aconteceu na América Latina.

A Olímpiada do Conhecimento era um evento geral que acontecia durante 1 semana em um local, que reunida os competidores de todos os estados participantes.

Intercâmbios internos entre os estados aconteciam para realização de pequenas disputas em preparação para Olímpiada do Conhecimento, mas com o período da pademia ficou suspenso por um tempo.

### Conclusão

Nesse post conhecemos um pouco sobre a Olímpiada do Conhecimento e o que ela representa para todos que já tiveram a oportunidade de participar dela. É uma experiência única, que só quem viveu saber o quanto especial se torna em nossas vidas.

No próximo post vou contar como eu (Leticia) e o Mikael nos tornamos competidores e como foi nossa experiência nessa competição.`,
      previewContent:
        'O que é a Olimpíada do Conhecimento? Como é o processo de treinamento dos competidores? Isso e muito mais, vamos ver no decorrer deste post, sobre essa competição que tem gerado um impacto na vida de muitos competidores que passam por ela.',
      slug: 'olimpiada-do-conhecimento',
      isPublished: true,
      categoryId: 2,
    },
  });

  const TECHKNOWLEDGE_PONTO_ZERO = await prisma.post.upsert({
    where: { id: 3 },
    update: {},
    create: {
      title: 'Techknowledge: Ponto Zero',
      authorId: 1,
      content: `Uma das melhores formas (se não a melhor) de aprender um assunto é ensinando. Transmitindo o conhecimento que nos foi passado. E nos vimos na necessidade de compartilhar nossa experiência, tanto como competidores da Olimpíada do Conhecimento, quanto como desenvolvedores. Demonstrar quais são os problemas que encontramos no dia-a-dia e como os resolvemos. Dessa necessidade, surgiu o Techknowledge!

### Por que "Techknowledge"?

Vamos começar pelo nome, claro…

"Tech" faz referência ao termo em inglês, que quer dizer "Tecnologia". A outra parte do nome, "Knowledge", que dizer **conhecimento**. À primeira vista, pode parecer estranho, mas é fácil de se acostumar, prometo ;)

Eu e a Letícia brincávamos durante o período da competição, nos autoproclamamos "atletas do conhecimento", justamente por todo o contexto da olimpíada e o tempo dos treinos, que, de uma forma ou de outra, nos tornavam atletas.

Logo, a palavra "conhecimento" já era uma certeza nossa em relação ao nome do blog. E como queremos falar sobre tecnologia, programação e afins, um nome "Tech" vem a calhar (além de ser bem legal, convenhamos).

### Planejamento

Nós sabíamos que seria necessário reservar um tempo fixo durante a semana para dedicarmos ao blog. Até porque planejar uma aplicação exige tempo de pesquisa, modelagem, testes e muito estudo. Então, semanalmente, combinamos de nos reunir em uma call no Google Meeting, todo sábado.

A hora podia variar, mas estabelecemos que 3 horas por semana seria um tempo adequado e que encaixaria bem tanto na minha agenda, quanto da Letícia.

Já imaginamos quais seriam as fases do planejamento da aplicação, que incluía levantar os requisitos, buscar referências, modelar banco de dados, escolher tecnologias, fazer protótipos de baixa, média e alta fidelidade, entre outros itens. Isso apenas para estabelecer qual seria o terreno do qual esse blog iria crescer. Pois uma professora nossa, chamada Leyla Carolyne (ainda vamos mencionar ela bastante em outros posts) nos disse uma vez que 80% do tempo de construção de um software é na fase no-code, e os outros de 20% que são, de fato, implementação.

### Referências

Nos dedicamos durante 3 meses para os passos que mencionamos acima. Fizemos todo o design das páginas, nos inspirando na estrutura do Blog do Stack Overflow e da Rocketseat, além do Blog do Josh, que, em minha humilde opinião, é o mais bonito visualmente.

### O que vem a seguir?

Esta é a versão 1.0.0 de nosso blog, nosso MVP, então a organização de alguns itens do layout e a estilização das páginas não estão **ainda** em sua forma final, na que modelamos no Figma. Mas estamos muito orgulhosos de pôr ele no ar, de ver nosso projeto ganhando vida e crescendo cada vez mais!

Esse é apenas um dos muitos posts que vamos documentar nossa experiência durante a criação do blog, explicando o porquê de cada decisão relacionada à negócio, design, tecnologias utilizadas e muito mais!`,
      previewContent:
        'Como surgiu a ideia de criar esse blog? Qual a finalidade do nosso projeto? Nesse primeiro post, vamos nos apresentar e  falar um pouco da motivação por trás do TechKnowledge!',
      slug: 'techknowledge-ponto-zero',
      isPublished: true,
      categoryId: 3,
    },
  });

  const QUEM_SOMOS_NOS = await prisma.post.upsert({
    where: { id: 4 },
    update: {},
    create: {
      title: 'Quem somos nós?',
      authorId: 2,
      content: `### Quem é você Leticia Dias?

Meu nome é Leticia Dias, sou desenvolvedora Full Stack no SENAI Alagoas e medalhista de bronze na seletiva nacional WorldSkills Shanghai 2022 na ocupação de Tecnologias Web! Também sou uma jovem aventureira apaixonada por tecnologia, astronomia, artes, universo geek, café e chá. Gosto de explorar, aprender e compartilhar minha jornada com as pessoas e em meu tempo livre passar um tempo com os amigos e a família.

Para entrar em contato, aqui está meu Linkedin: https://www.linkedin.com/in/leticia-dia/

### Quem é você Mikael Ribeiro?

Meu nome é Mikael Ribeiro Simões, sou de Maceió, Alagoas - um lugar bem quente, inclusive. Sou Desenvolvedor Full Stack, medalhista de ouro na Seletiva Nacional da WorldSkills Shanghai 2022 na ocupação Soluções de Software para Negócios, Especialista em Desenvolvimento Web e dono de um cachorro vira-lata chamado Cadinho :)

Não gosto muito de café, meio que o oposto do que um programador diria né, mas... temos que aprender a sobreviver às noites frias mesmo sem cafeína, não é mesmo?

Sou fã de astronomia e ainda creio que vamos dominar Marte um dia, inclusive se Elon Musk quiser me dar uma carona, não tenho nenhuma objeção!

Para mais informações, aqui está meu Linkedin: https://www.linkedin.com/in/mikael-ribeiro/

        `,
      previewContent:
        'Quem é a Leticia e o Mikael? São dois aventureiros? São dois alíenigenas de outro planeta? Ou são só dois devs que gostam muito de tecnologia? Vem descubrir um pouco sobre a jornada desses dois jovens devs.',
      slug: 'quem-somos-nos',
      isPublished: true,
      categoryId: 3,
    },
  });

  const CHALLENGE_CALCULATOR = await prisma.post.upsert({
    where: { id: 5 },
    update: {},
    create: {
      title: 'Construa Sua Própria Calculadora do Zero!',
      authorId: 2,
      content: `Quando estamos começando na programação, é muito importante praticar os fundamentos. Esses conceitos são a base de tudo, e exercitá-los ajuda não só a reforçar o conhecimento, mas também a entender melhor como a linguagem realmente funciona na prática.

Por isso, desenvolvi esse desafio para praticar os conceitos básicos do javacript.

O desafio é uma calculadora que criei usando HTML, CSS e JavaScript e a proposta é simples: desenvolver uma calculadora funcional, que permita realizar operações básicas como adição, subtração, multiplicação e divisão.

**Esse desafio vai desenvolver também:**

- Validação de entrada (para evitar erros com operadores duplicados ou pontos decimais)
- Alternância de tema (modo claro e escuro com troca de ícones e imagens)
- Responsividade

Te convido a participar e construí-lo também. Bora codar? 🙂🚀

**Link do repositório:** [Challenge: Calculator](https://github.com/leticiadia/calculator)

**Observação:**

Todas as instruções sobre o desafio, incluindo o layout, estão no README do repositório, assim como a solução.

Bom desafio e te vejo no próximo! 💙`,
      previewContent:
        'Se você está aprendendo JavaScript ou quer revisar os fundamentos da linguagem com um projeto divertido e funcional, esse desafio é pra você!',
      slug: 'challenge-calculator',
      isPublished: true,
      categoryId: 5,
    },
  });

  const CHALLENGE_SHOPPING_CART = await prisma.post.upsert({
    where: { id: 6 },
    update: {},
    create: {
      title: 'Carrinho de Compras',
      authorId: 2,
      content: `Você já parou para pensar em como um projeto simples pode evoluir e o quanto você pode aprender construindo-o?

Foi com esse pensamento que eu criei o Challenge Shopping Cart, um desafio dividido em três níveis: fácil, médio e difícil. A ideia central é mostrar como podemos desenvolver um projeto simples e aos poucos ir evoluindo-o.

### O que você vai encontrar nesse desafio?

Cada nível do desafio representa uma etapa da evolução do projeto. Ao longo do caminho, você vai colocar em prática seus conhecimentos em HTML, CSS e JavaScript, enquanto desenvolve ainda mais suas habilidades em programação.

### Sobre o desafio

**O desafio, como mencionado anteriormente, é dividido em três níveis, sendo eles:**

**Nível fácil:**

- No primeiro nível, o foco é criar um carrinho simples, com adição de produtos e contagem de itens. Ideal para quem está começando e quer entender como funcionam os eventos e as variáveis na aplicação.

**Nível médio:**

- Aqui o desafio já sobe um degrau. Entram funcionalidades como remover itens do carrinho, atualizar a quantidade e trabalhar com manipulação da DOM.

**Nível difícil:**

- No último nível, você vai precisar lidar com mais lógica, armazenamento e persistência dos dados no localStorage, redirecionamento entre páginas e muito mais.

### Instruções e soluções

**Cada desafio está separado em uma pasta específica, contendo:**

- Um arquivo com as instruções detalhadas do que deve ser feito;
- A solução do desafio, caso você queira comparar com o que fez ou estudar uma forma de resolver.

Assim, você pode aprender no seu ritmo, explorando cada fase do projeto e entendendo o que pode ser melhorado em cada etapa.

### Link

**Link do repositório:** [Challenge - Carrinho de Compras](https://github.com/leticiadia/shopping-cart)

### Conclusão

Praticar com projetos reais, mesmo que pequenos, faz toda a diferença! Esse tipo de exercício te mostra que não é preciso construir algo gigante para evoluir, basta começar, e aos poucos, ir melhorando.

Desafios como esse reforçam os fundamentos e mostram que dá sim para aprender se divertindo com código. Bora praticar?

Se você fizer, me marca e o Mikael também. Queremos ver o resultado de vocês também 😊🚀

Bom desafio e te vejo no próximo! 💙`,
      previewContent:
        'Se você quer entender como um projeto simples pode evoluir em diferentes níveis de complexidade e aplicar na prática os fundamentos do JavaScript, esse desafio de Carrinho de Compras é pra você.',
      slug: 'challenge-shopping-cart',
      isPublished: true,
      categoryId: 5,
    },
  });

  const DEV_FRONTEND = await prisma.post.upsert({
    where: { id: 7 },
    update: {},
    create: {
      title: 'Desafios na Trajetória de um Desenvolvedor Frontend',
      authorId: 3,
      content: `A carreira de desenvolvedor frontend é cheia de momentos empolgantes, mas
também de muitos desafios que nem sempre são comentados. Quando a gente
escolhe seguir essa área, é comum imaginar que será apenas sobre construir
interfaces bonitas e responsivas, mas a realidade é bem mais complexa e cheia de
detalhes que exigem muita dedicação e aprendizado contínuo.

### A curva de aprendizado é intensa

No início da jornada, um dos primeiros desafios é entender que **HTML, CSS e
JavaScript**, que parecem simples separadamente, viram um universo de
possibilidades e problemas quando combinados. Responsividade, acessibilidade,
performance, SEO, compatibilidade entre navegadores… tudo isso passa a fazer
parte do nosso vocabulário e do nosso dia a dia.

Aprender boas práticas de semântica HTML, dominar seletores CSS mais avançados
e entender a manipulação do DOM com JavaScript nativo é só o começo. O tempo
todo surgem novos padrões, como CSS Grid e Flexbox, que mudam a maneira como
montamos layouts.

### A evolução constante das tecnologias

Outro ponto é a velocidade com que surgem novas ferramentas, frameworks e boas
práticas. Hoje é React, amanhã é Angular, depois vem o Svelte... e assim vai. A gente
nunca pode se acomodar. Cada novo framework traz novas convenções, novas
maneiras de pensar em componentes, gerenciar estado, lidar com o roteamento de
páginas.

A famigerada **"fadiga de JavaScript"** é real e lidar com ela exige disciplina para focar no que realmente agrega valor ao que você está construindo. Saber filtrar o que
estudar e em que momento é uma habilidade importante.

### Dominar o JavaScript de verdade

Muita gente começa decorando pequenos trechos de código, mas cedo ou tarde
chega o momento em que é preciso entender o JavaScript a fundo. Conceitos como
closures, promessas, async/await, manipulação do DOM, tratamento de eventos,
funções puras, imutabilidade, recursividade e padrões de projeto passam a ser
exigidos.

Frameworks escondem muita complexidade, mas quem realmente entende
JavaScript consegue resolver problemas mais complexos, otimizar aplicações e
construir soluções mais robustas.

### Integração com APIs e backend

Não basta apenas fazer a página bonita funcionar. Em projetos reais, a comunicação
com servidores é inevitável. É preciso entender como consumir APIs REST e
GraphQL, lidar com autenticação via tokens JWT, tratamento de erros HTTP,
atualização dinâmica de dados e cache.

Além disso, muitas vezes precisamos entender conceitos de backend como estrutura
de banco de dados, modelagem de informações e performance de consultas, para
criar interfaces que realmente atendam às necessidades do usuário de forma
eficiente.

### Experiência do usuário (UX) e acessibilidade

A preocupação com quem está usando o que construímos é essencial.
Desenvolvedores frontend precisam pensar na experiência do usuário (UX) desde o
primeiro momento: cores, espaçamento, legibilidade, navegabilidade, feedbacks
visuais...

Além disso, acessibilidade é um compromisso ético e legal. Garantir que
pessoas com deficiências consigam navegar usando leitores de tela, teclados ou
dispositivos adaptados deve ser uma prioridade. Práticas como o uso correto de ARIA
roles, contraste de cores adequado, textos alternativos para imagens e navegação por teclado precisam ser aplicadas no código.

### Pressão, prazos apertados e expectativas

Nem sempre temos o tempo que gostaríamos para fazer tudo da melhor maneira.
Muitas vezes, precisamos conciliar qualidade e velocidade, tomando decisões rápidas
sem comprometer o resultado final. Saber negociar prazos, justificar escolhas
técnicas para o time e stakeholders, lidar com feedbacks (nem sempre tão amigáveis)
e trabalhar bem em equipe são habilidades técnicas e emocionais igualmente
importantes.

### Organização de projetos e escalabilidade

Conforme os projetos crescem, o frontend precisa se organizar. Arquiteturas como
componentização, separação de responsabilidades, gerenciamento de estado global,
roteamento, otimização de bundle, lazy loading e testes automatizados se tornam
cruciais.

Ter boas práticas de versionamento (Git), padronização de código (linting, prettier),
documentação clara e revisões de código (code reviews) também impactam
diretamente a manutenção e escalabilidade da aplicação.

### Conclusão

Ser desenvolvedor frontend é encarar uma montanha-russa constante de
aprendizados e desafios. Cada novo projeto traz suas próprias particularidades,
exigindo adaptação, resiliência e muita sede de conhecimento. Mas é justamente essa dinâmica que torna a profissão tão empolgante. Cada nova tecnologia dominada, cada problema resolvido, cada interface que encanta o usuário, é uma vitória que faz todo o esforço valer a pena.

O segredo está em nunca parar de aprender, manter a curiosidade viva e,
principalmente, lembrar que errar faz parte do processo. O importante é continuar
evoluindo, um código de cada vez, construindo não apenas páginas, mas
experiências memoráveis.`,
      previewContent:
        'Ser desenvolvedor frontend é desafiador devido às rápidas mudanças tecnológicas e novas ferramentas. Se você está começando ou já atua na área, este conteúdo é para você!',
      slug: 'desafios-desenvolvedor-frontend',
      isPublished: true,
      categoryId: 1,
    },
  });

  console.log({ mikkaiser, leticia, monique });
  console.log({
    CATEGORY_REFLEXION,
    CATEGORY_OLYMPIAD,
    CATEGORY_TECHKNOWLEDGE,
    CATEGORY_JAVASCRIPT,
    CATEGORY_CHALLENGE,
    CATEGORY_CLOUDCOMPUTING,
  });
  console.log({
    FAZ_FUNCIONAR_E_DEPOIS_MELHORA_SERA_MESMO,
    OLIMPIADA_DO_CONHECIMENTO,
    TECHKNOWLEDGE_PONTO_ZERO,
    QUEM_SOMOS_NOS,
    CHALLENGE_CALCULATOR,
    CHALLENGE_SHOPPING_CART,
    DEV_FRONTEND,
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
