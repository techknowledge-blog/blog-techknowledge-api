import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function seedPosts() {
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

Por isso, eu hoje não levo esse pensamento comigo. Posso até demorar um pouco mais para resolver o problema, mas pelo menos vou ter explorado todos os cenários possíveis para melhor resolvê-lo.`,
      previewContent:
        'Nesse post vamos abordar um pouco sobre um assunto bastante comum em nossa área onde nos deparamos constantemente com esse cenário. Será que fazer funcionar e depois melhorar é a melhor forma de se resolver um problema? Vem descobrir comigo.',
      slug: 'faz-funcionar-e-depois-melhora-sera-mesmo',
      isPublished: true,
      categoryId: 1,
      article_level: '',
      estimated_time: 3,
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
      article_level: '',
      estimated_time: 3,
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
      article_level: '',
      estimated_time: 4,
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

Para mais informações, aqui está meu Linkedin: https://www.linkedin.com/in/mikael-ribeiro/`,
      previewContent:
        'Quem é a Leticia e o Mikael? São dois aventureiros? São dois alíenigenas de outro planeta? Ou são só dois devs que gostam muito de tecnologia? Vem descubrir um pouco sobre a jornada desses dois jovens devs.',
      slug: 'quem-somos-nos',
      isPublished: true,
      categoryId: 3,
      article_level: '',
      estimated_time: 1,
    },
  });

  const DEV_FRONTEND = await prisma.post.upsert({
    where: { id: 5 },
    update: {},
    create: {
      title: 'Desafios na Trajetória de um Desenvolvedor Frontend',
      authorId: 3,
      content: `A carreira de desenvolvedor frontend é cheia de momentos empolgantes, mas também de muitos desafios que nem sempre são comentados. Quando a gente escolhe seguir essa área, é comum imaginar que será apenas sobre construir interfaces bonitas e responsivas, mas a realidade é bem mais complexa e cheia de detalhes que exigem muita dedicação e aprendizado contínuo.

### A curva de aprendizado é intensa

No início da jornada, um dos primeiros desafios é entender que **HTML, CSS e JavaScript**, que parecem simples separadamente, viram um universo de possibilidades e problemas quando combinados. Responsividade, acessibilidade, performance, SEO, compatibilidade entre navegadores… tudo isso passa a fazer parte do nosso vocabulário e do nosso dia a dia.

Aprender boas práticas de semântica HTML, dominar seletores CSS mais avançados e entender a manipulação do DOM com JavaScript nativo é só o começo. O tempo todo surgem novos padrões, como CSS Grid e Flexbox, que mudam a maneira como montamos layouts.

### A evolução constante das tecnologias

Outro ponto é a velocidade com que surgem novas ferramentas, frameworks e boas práticas. Hoje é React, amanhã é Angular, depois vem o Svelte... e assim vai. A gente nunca pode se acomodar. Cada novo framework traz novas convenções, novas maneiras de pensar em componentes, gerenciar estado, lidar com o roteamento de páginas.

A famigerada **"fadiga de JavaScript"** é real e lidar com ela exige disciplina para focar no que realmente agrega valor ao que você está construindo. Saber filtrar o que estudar e em que momento é uma habilidade importante.

### Dominar o JavaScript de verdade

Muita gente começa decorando pequenos trechos de código, mas cedo ou tarde chega o momento em que é preciso entender o JavaScript a fundo. Conceitos como closures, promessas, async/await, manipulação do DOM, tratamento de eventos, funções puras, imutabilidade, recursividade e padrões de projeto passam a ser exigidos.

Frameworks escondem muita complexidade, mas quem realmente entende JavaScript consegue resolver problemas mais complexos, otimizar aplicações e construir soluções mais robustas.

### Integração com APIs e backend

Não basta apenas fazer a página bonita funcionar. Em projetos reais, a comunicação com servidores é inevitável. É preciso entender como consumir APIs REST e GraphQL, lidar com autenticação via tokens JWT, tratamento de erros HTTP, atualização dinâmica de dados e cache.

Além disso, muitas vezes precisamos entender conceitos de backend como estrutura de banco de dados, modelagem de informações e performance de consultas, para criar interfaces que realmente atendam às necessidades do usuário de forma eficiente.

### Experiência do usuário (UX) e acessibilidade

A preocupação com quem está usando o que construímos é essencial. Desenvolvedores frontend precisam pensar na experiência do usuário (UX) desde o primeiro momento: cores, espaçamento, legibilidade, navegabilidade, feedbacks visuais...

Além disso, acessibilidade é um compromisso ético e legal. Garantir que pessoas com deficiências consigam navegar usando leitores de tela, teclados ou dispositivos adaptados deve ser uma prioridade. Práticas como o uso correto de ARIA roles, contraste de cores adequado, textos alternativos para imagens e navegação por teclado precisam ser aplicadas no código.

### Pressão, prazos apertados e expectativas

Nem sempre temos o tempo que gostaríamos para fazer tudo da melhor maneira. Muitas vezes, precisamos conciliar qualidade e velocidade, tomando decisões rápidas sem comprometer o resultado final. Saber negociar prazos, justificar escolhas técnicas para o time e stakeholders, lidar com feedbacks (nem sempre tão amigáveis) e trabalhar bem em equipe são habilidades técnicas e emocionais igualmente importantes.

### Organização de projetos e escalabilidade

Conforme os projetos crescem, o frontend precisa se organizar. Arquiteturas como componentização, separação de responsabilidades, gerenciamento de estado global, roteamento, otimização de bundle, lazy loading e testes automatizados se tornam cruciais.

Ter boas práticas de versionamento (Git), padronização de código (linting, prettier), documentação clara e revisões de código (code reviews) também impactam diretamente a manutenção e escalabilidade da aplicação.

### Conclusão

Ser desenvolvedor frontend é encarar uma montanha-russa constante de aprendizados e desafios. Cada novo projeto traz suas próprias particularidades, exigindo adaptação, resiliência e muita sede de conhecimento. Mas é justamente essa dinâmica que torna a profissão tão empolgante. Cada nova tecnologia dominada, cada problema resolvido, cada interface que encanta o usuário, é uma vitória que faz todo o esforço valer a pena.

O segredo está em nunca parar de aprender, manter a curiosidade viva e, principalmente, lembrar que errar faz parte do processo. O importante é continuar evoluindo, um código de cada vez, construindo não apenas páginas, mas experiências memoráveis.`,
      previewContent:
        'Ser desenvolvedor frontend é desafiador devido às rápidas mudanças tecnológicas e novas ferramentas. Se você está começando ou já atua na área, este conteúdo é para você!',
      slug: 'desafios-desenvolvedor-frontend',
      isPublished: true,
      categoryId: 1,
      article_level: '',
      estimated_time: 4,
    },
  });

  const YOU_LEARN_FROM_YOUR_MISTAKES = await prisma.post.upsert({
    where: { id: 6 },
    update: {},
    create: {
      title: 'Errando é Que Se Aprende',
      authorId: 4,
      content: ``,
      previewContent:
        'Erros na programação podem ser frustrantes, mas também são mestres valiosos. Quer descobrir como transformar cada falha em um passo para evoluir? Vem conferir o post!',
      slug: 'errando-que-se-aprende',
      isPublished: true,
      categoryId: 1,
      article_level: '',
      estimated_time: 6,
    },
  });

  const PRATICE_HOW_TO_BECOME_A_DEVELOPER = await prisma.post.upsert({
    where: { id: 7 },
    update: {},
    create: {
      title: 'PRATIQUE! Como ser um desenvolvedor.',
      authorId: 5,
      content: `Se você está começando na área de desenvolvimento web, provavelmente já se deparou com uma enxurrada de conceitos novos, muitos dos quais talvez você ainda não entenda direito, mas deixa eu te antecipar que isso é perfeitamente normal. Às vezes, o mais difícil é saber por onde começar ou o que priorizar. Se esse é o seu caso, talvez este texto te ajude. A gente vai falar sobre o que realmente faz a diferença no aprendizado: a prática. Na verdade, ela é mais complicada do que parece. Vai lá pegar um café e um petisco e volta quando estiver pronto, eu te espero. Tudo certo? Vamos nessa.

### Tutorial não é prática

Vou começar com um balde de água fria: aqueles tutoriais que você salvou para assistir depois provavelmente não vão te ajudar tanto assim no começo. Não porque são ruins, mas porque programação é uma área que exige prática. Muita prática.

Essa é uma daquelas verdades que demoram para cair a ficha, comigo foi assim também, mesmo depois de anos estudando. Mas em algum momento você percebe que está travado, vendo vídeo atrás de vídeo no YouTube, e não progride. E aí bate a frustração, aquela sensação de que **“isso não é para mim”**. Spoiler: é sim, só falta você botar a mão na massa.

### Quando tudo virou a chave para mim

Deixa eu te contar quando isso mudou para mim: era por volta de 2018 e eu era um belíssimo estudante de programação, cheio de dúvidas sobre o que o tal do Node.js V10 era capaz de fazer. Naquele ponto, eu só sabia subir um servidor simples para servir arquivos com o express, esse foi o máximo que eu já tinha chegado. Foi quando um amigo me procurou com um problema: a comunidade gamer dele no Discord tinha passado de dez mil membros e organizar os conteúdos estava virando um caos. Ele queria saber se eu podia criar uma CMS para organizar tudo aquilo.

Hoje eu posso dizer que tudo que eu aprendi sobre arquitetura ao longo dos anos começou naquela noite de sexta-feira quando eu comecei o projeto. Eu tinha um objetivo claro e sabia o que precisava ser feito. Mas, sinceramente? Eu não sabia quase nada de Node. Sério, quase nada. E ainda assim eu fui atrás de acordo com o que eu ia precisando encaixar na plataforma. Pesquisei, testei, errei e fui aprendendo no caminho. Aquele projeto virou meu laboratório, e foi ali que comecei a entender de fato conceitos que hoje fazem parte do meu dia a dia como desenvolvedor.

### Você não precisa saber tudo

O que eu quero dizer com tudo que eu já te contei até aqui é: **você não precisa saber tudo sobre tudo antes de começar**. Temas como algoritmos e estruturas de dados são importantes e excelentes formas de se começar, é claro, mas a forma como a gente aprende nem sempre segue uma ordem e tá tudo bem! Às vezes, o melhor jeito de aprender é começar um projeto que te empolgue. Algo que te faça querer abrir o computador todos os dias e focar naquilo.

Com o tempo, as lacunas de conhecimento vão sendo preenchidas. Você vai adicionando funcionalidades, esbarrando em problemas, pesquisando soluções. Vai ler um artigo sobre arquitetura e perceber que pode aplicar aquilo no seu projeto. E assim, aos poucos, vai consolidando o que aprendeu. No fim das contas, o que mais ensina é o que você faz com o que já sabe.

### Frustração faz parte do processo

Vai ter dia que nada vai funcionar. Vai ter código que vai te fazer perder horas por conta de um ponto e vírgula esquecido. Vai ter bug que some quando você tenta mostrar para alguém. Esses momentos são normais e importantes. Aprender a programar é aprender a lidar com frustração. Mas cada vez que você passa por isso, você sai mais preparado. Resolver bugs, entender erros, refatorar um código bagunçado... tudo isso é prática real. E é assim que se aprende.

### Faça projetos simples (e depois complique)

Não precisa começar tentando construir o próximo Twitter. Às vezes, um projetinho simples resolve: um to-do list, um site de receitas, uma agenda pessoal. O importante é começar com algo que você consiga imaginar pronto, mesmo que só na sua cabeça, e que tenha alguma utilidade para você ou para as pessoas à sua volta. Depois que funcionar, aí sim você complica: coloca autenticação, faz deploy, cria testes, melhora a UI, separa em componentes... e por aí vai.

### Para resumir tudo que foi dito até aqui

Se você quer se tornar um bom desenvolvedor, precisa aceitar que o caminho passa pela prática e vai escalando até você saber exatamente o que fazer quando alguém te passa uma regra de negócio. Aprender vendo vídeos ou lendo livros técnicos pode até dar uma base, mas você só vai fixar de verdade quando colocar a mão no código.

Escolha um projeto. Qualquer um. Algo que te motive. Algo que te faça pesquisar, testar, quebrar a cara e tentar de novo. Porque é nesse ciclo que você vai, aos poucos, virar um desenvolvedor de verdade. Até a próxima!`,
      previewContent:
        'Se você está começando no desenvolvimento web, é normal se sentir perdido entre tantos conceitos novos. Mas sabe o que realmente faz a diferença no aprendizado? A prática. E ela pode ser mais desafiadora do que parece. Vem conferir o post!',
      slug: 'pratique-como-ser-um-desenvolvedor',
      isPublished: true,
      categoryId: 1,
      article_level: '',
      estimated_time: 4,
    },
  });

  const HOW_I_LEARNED_TO_CREATE_MY_OWN_INTERFACES = await prisma.post.upsert({
    where: { id: 8 },
    update: {},
    create: {
      title: 'Como Aprendi a Criar Minhas Próprias Interfaces',
      authorId: 2,
      content: `Como uma boa backend, posso dizer que sou uma aprendiz no mundo do frontend e do design. Sempre atuei como Full Stack, mas com o foco mais no backend (PHP 💜). Em 2022, decidi me aventurar no universo do design e mergulhar mais fundo no frontend, porque queria criar e desenvolver os layouts dos meus próprios projetos. Se eu sabia alguma coisa de design? Muito pouco, quase nada, para ser sincera. Mas mesmo assim, abracei o desafio e comecei uma nova jornada. Vou contar um pouco sobre como aprendi a criar minhas próprias interfaces.

Para essa leitura, recomendo um bom lofi, acompanhado de uma xícara de café ou chá. Preparado? Vamos para a leitura.

### O início de tudo

Se havia alguém sem nenhuma habilidade em design e longe de ser boa em frontend, essa pessoa era eu. Me considerava uma verdadeira sobrevivente, fazendo o possível com o que sabia. Os projetos em que eu atuava eram em Angular, os vídeos do canal da Loiane no YouTube foram meu verdadeiro salva-vidas, que me ajudaram muito nessa fase.

Depois de um tempo trabalhando com backend, senti que já dominava bem a área e queria me desafiar em algo novo. Pensei: por que não o frontend? E não só isso, por que não criar também o design dos meus próprios projetos? Já tinha feito alguns clones de interfaces, mas com o tempo percebi que não estava, de fato, aprendendo. Sabe aquela sensação de estar só copiando e colando? Era exatamente assim que me sentia. Nada contra esse tipo de prática (acho super válida), mas eu queria ir além, pensar fora da caixa e desenvolver meus próprios projetos do zero, desde o design até a interface final.

Bom, não foi tão fácil assim. Na primeira tentativa, fiquei horas olhando para uma tela branca, sem conseguir fazer nada. Tentei de novo e de novo e nada. Logo veio o pensamento de que isso não era para mim e que não ia conseguir.

### Onde eu estava errando?

No início do meu aprendizado, algo que me atrapalhou bastante foi a vontade de querer criar algo super elaborado, bonito e complexo, com aquele ar de ser super inovador. No entanto, essa mentalidade acabou me prejudicando, pois nunca conseguia sair do zero ou continuar um projeto por não estar bom e aí desistia.

Em todo projeto era assim: passava horas tentando construir algo legal no Figma, mas nada parecia bom o suficiente. No fim, sobrava apenas uma tela branca ou uma tela não finalizada e um sentimento enorme de frustração. O mesmo acontecia quando tentava desenvolver uma interface, apesar de saber HTML, CSS e JavaScript, às vezes ficava muito travada, sem conseguir resolver um problema.

> **Tenho muitos projetos não finalizados por isso.**

Mas fica a pergunta: será que era mesmo necessário já começar assim, com tal pensamento? Se eu estava no início da minha jornada. E esse foi meu outro erro, não respeitei meu processo de aprendizagem, quis pular muitos degraus para avançar rápido, que esqueci do quanto a base era importante e que me faltava conhecimento também.

Um exemplo disso foi eu ir para o Next.js sem ainda compreender conceitos importantes do React.

### O que eu fiz para melhorar?

Depois de entender onde estava errando tanto no frontend quanto na parte de design, comecei a estruturar melhor meus estudos. Primeiro, decidi começar com a parte do design, porque ter foco é algo importante; se colocar várias coisas para estudar ao mesmo tempo pode te atrapalhar.

> **Dica importante:** Tenha um foco. Escolha uma área para estudar, divida em pequenas partes os conteúdos que tem dentro dela. Vai marcando um check, em cada assunto que você finalizou. No final, você vai perceber o quanto evoluiu. Lembra, você não precisa correr, não é uma maratona. Respeitar o seu processo de aprendizagem é importante.

Continuando, um amigo me indicou o livro chamado Design Para Quem Não É Designer, que foi ótimo para começar a entender os fundamentos. Passei a estudar um pouco sobre UX/UI e a seguir profissionais da área. Também pensei: E se eu tentar começar fazendo algo bem simples? Sem tantos detalhes e não precisa ser bonito, só para começar a fluir e ver se consigo fazer algo. Lembro-me de fazer as artes dos conteúdos de tech que eu criava para o meu Instagram, e isso me ajudou e muito. E aos poucos fui evoluindo na parte do design.

Com o tempo, fui tendo mais facilidade para desenhar e construir as telas no Figma, com isso vi que era hora de voltar ao frontend. Agora, estou fazendo uma revisão da linguagem do JavaScript, através de um canal no YouTube muito bom chamado **SuperSimpleDev** (recomendo). Ele ensina bastante sobre os conceitos básicos e avançados da linguagem.

### Procure referências e sites para se inspirar

Um erro que cometi também no início foi querer fazer algo realmente do zero, sem ter nenhuma influência de outros designs que já existiam. Um pensamento egoísta que acabou me prejudicando muito. Você pode construir layouts do zero, mas tendo referências que podem te ajudar nesse processo.

**Sites como:**

- [Pinterest](https://br.pinterest.com/)
- [Dribbble](https://dribbble.com/)
- [Behance](https://www.behance.net/)

Se tornaram meus maiores aliados na hora de construir um design. Também acompanho alguns canais no YouTube, como:

- [Design Systems London](https://www.youtube.com/@DesignSystemsLondon)
- [awwwards.](https://www.youtube.com/@AwwwardsTV)

Eventos de design também são uma fonte de inspiração para mim, tanto na identidade visual quanto nos slides das palestras. Eu também tenho vários sites salvos, que me inspiram em seu design. E ainda assim, consigo criar algo com a minha própria assinatura e design.

### Lembre-se: você não precisa fazer tudo sozinho

Procurei os meus amigos para me ajudarem. Sempre que eu termino um design ou a interface, envio para eles me passarem um feedback sobre como está ficando, o que eu posso melhorar e assim por diante.

Também tenho colaborações em projetos com eles e um faz o code review do outro, o que é bem legal.

Vale a pena ressaltar que nenhum dos meus amigos para quem eu envio até hoje meus designs é formado em Design. Se torna interessante, porque eu acabo tendo a visão deles como usuários. Já na parte do frontend, eu envio para meus amigos que atuam na área.

Comecei a ter mentorias com um amigo que é designer. Durante as mentorias, fui compreendendo melhor sobre a área.

Busque por amigos ou pessoas que podem te auxiliar em sua jornada.

### A prática leva à "perfeição"

Sem a prática, eu não teria chegado aonde cheguei hoje. Ela foi fundamental para todo esse processo e não leva à perfeição, mas vai te ajudar a evoluir. Não ganhei super poderes no design, pelo contrário, me pego em vários momentos, construindo uma tela, aí não dá certo e vou lá e tento de novo, aí olho para ela, percebo que posso melhorar e assim vai. Meu Figma não me deixa mentir (risos).

![rascunho interface figma](/src/assets/images/ideias.png)

O mesmo vale para o frontend. Continuo praticando.

### Conclusão

Sendo assim, deixo duas reflexões. Duas perguntas que me guiaram durante esse processo:

- Todos os sites precisam ser completamente diferentes?

- Eu realmente preciso criar algo 100% original para que funcione?

A resposta que encontrei é: não. Padrões de design existem por um motivo, foram pensados por profissionais que estudaram profundamente a experiência do usuário. E seguir esses padrões não tira o valor da criação, pelo contrário: eles são a base para construir interfaces melhores e mais intuitivas.

Hoje, criar minhas próprias interfaces se tornou menos assustador. Consigo pensar na estrutura, rascunhar as telas, montar no Figma e transformar isso em código com muito mais clareza e confiança. Ainda tenho muito a aprender, mas entendi que criar boas interfaces é um processo contínuo, feito de prática, estudo e coragem para começar, mesmo sem saber tudo.

Se você também está nesse caminho, saiba que cada passo importa. E o próximo pode ser seu melhor layout até agora.`,
      previewContent:
        'Criar uma interface do zero pode parecer assustador no início, principalmente se você, como eu, veio do backend. Neste post, compartilho como comecei a aprender design, como passei a projetar minhas próprias telas, do rascunho ao desenvolvimento.',
      slug: 'criando-minhas-interfaces',
      isPublished: true,
      categoryId: 1,
      article_level: '',
      estimated_time: 7,
    },
  });

  const THE_MOBILE_DEVELOPMENT_MARKET_2025 = await prisma.post.upsert({
    where: { id: 9 },
    update: {},
    create: {
      title:
        'O mercado de desenvolvimento mobile em 2025: O que preciso saber?',
      authorId: 6,
      content: `A área de desenvolvimento mobile continua sendo uma das áreas mais aquecidas em tecnologia. Em 2025, a presença de smartphones em praticamente todas as mãos e os avanços das tecnologias móveis como 5G, IA embarcada e integração com dispositivos IoT tornam esse campo ainda mais promissor.

Mas com o crescimento vêm os desafios: o mercado está mais competitivo do que nunca.

**Neste artigo, trago um pouco da minha experiência de pelo menos 5 anos na área de desenvolvimento mobile, e ao final desse artigo você vai entender:**

- O cenário atual do desenvolvimento mobile em 2025.

- As principais oportunidades na área.

- Como se destacar em um mercado competitivo?

- Soft Skills essenciais para desenvolvedores mobile.

- Dicas práticas para acelerar sua carreira como dev mobile e como continuar se desenvolvendo.

### O cenário atual do desenvolvimento mobile em 2025

O número de apps em uso continua crescendo em todo o mundo. Segundo dados recentes, usuários passam em média 5 a 6 horas por dia em aplicativos móveis, e empresas estão cada vez mais investindo na criação de soluções digitais próprias.

**As tendências mais quentes em 2025 incluem:**

- **Super Apps:** aplicativos únicos que oferecem e centralizam múltiplas funcionalidades (ex: pagamentos, compras, comunicação).

- **IA embarcada:** uso de inteligência artificial diretamente no dispositivo, sem depender da nuvem.

- **Apps conectados com IoT e wearables:** integração com dispositivos como smartwatches, fones e carros.

- **Aplicativos com experiências imersivas:** realidade aumentada, interfaces por voz e microinterações mais sofisticadas.

> A demanda é alta, mas a concorrência também.

### As principais oportunidades na área

**Apesar da competitividade, há espaço de sobra para novos talentos. Algumas áreas em alta:**

- **Desenvolvimento híbrido (React Native, Flutter, Kotlin Multiplataform):** a procura por devs que dominam tecnologias híbridas aumentou significativamente devido à possibilidade de criar apps nativos para Android e iOS com uma única base de código.

- **Desenvolvimento nativo especializado (Kotlin/Swift):** empresas que exigem alto desempenho e integração mais profunda com o sistema operacional.

- **Aplicativos para nichos específicos:** apps voltados para saúde, educação, finanças, logística e agro continuam crescendo e também cresce a necessidade de integrar esses aplicativos com IA.

- **Freelancer e produtos próprios:** com ferramentas modernas, devs independentes conseguem criar e monetizar seus próprios apps através de diversas formas (anúncios, assinaturas, etc.).

### Como se destacar em um mercado competitivo?

**Em 2025, ser apenas mais um dev mobile não basta. É preciso se destacar. E algumas dicas que tenho são:**

**1. Construa um portfólio real.**

Nada chama mais atenção do que projetos práticos. Construa apps próprios, colabore com projetos open source ou simule soluções para empresas fictícias.

**2. Aprenda uma stack moderna.**

- Flutter + Dart

- React Native

- Kotlin Multiplatform

- SwiftUI (iOS Nativo)

> Tenha ao menos uma stack bem dominada e acompanhe as novidades da comunidade em canais como Slack, Blogs, etc.

**3. Entenda de UX/UI.**

Saber desenvolver é ótimo. Mas saber criar uma experiência de uso agradável é um diferencial que te destaca.

**4. Seja multiplataforma e adaptável.**

Empresas procuram profissionais que entendam tanto do mobile quanto do backend, cloud, APIs e até automações de testes.

**5. Construa presença online.**

Poste projetos no GitHub, escreva sobre aprendizados no Medium ou LinkedIn, participe de comunidades. Isso ajuda no networking e visibilidade.

### Soft Skills essenciais para desenvolvedores mobile

Muitos focam apenas no código, mas saber se comunicar bem, trabalhar em equipe, resolver problemas e entender o negócio é o que realmente diferencia um bom desenvolvedor.

**Ao meu ver, destaco algumas das soft skills mais importantes:**

- **Pensamento crítico:** Capacidade de analisar problemas com lógica, questionar soluções prontas e propor alternativas mais eficientes e inteligentes.

- **Empatia com o usuário:** entender as necessidades e limitações do usuário final para criar experiências intuitivas, acessíveis e agradáveis.

- **Organização e gestão de tempo:** saber planejar tarefas, definir prioridades e manter prazos, evitando acúmulo e retrabalho.

- **Colaboração em projetos ágeis:** Trabalhar bem em equipe, comunicar-se com clareza e participar ativamente de ciclos ágeis como deadlines, plannings e reviews.

### Dicas práticas para acelerar sua carreira como dev mobile e como continuar se desenvolvendo

- Estude todos os dias: nem que seja 30 minutos. A tecnologia evolui muito rápido.

- Consuma conteúdos atuais: blogs, canais do YouTube, newsletters, podcasts.

- Participe de eventos e meetups (presenciais ou online).

- Faça cursos práticos e projetos paralelos.

- Procure mentores ou grupos de apoio, uma rede de desenvolvedores pode acelerar muito sua evolução.

### Conclusão

O mercado de desenvolvimento mobile em 2025 está cheio de possibilidades. Para quem está começando, o desafio é encontrar um caminho entre tantas tecnologias e ferramentas. Para quem já está na estrada, o foco deve ser a especialização e a diferenciação.

Com dedicação, estudo constante e projetos práticos, é totalmente possível construir uma carreira sólida, promissora e bem remunerada na área mobile.

O segredo? **Nunca parar de aprender e sempre buscar entregar valor com o que você cria.**`,
      previewContent:
        'O desenvolvimento mobile não para de crescer e, com ele, as oportunidades e desafios também. Neste artigo, compartilho minha experiência na área e trago insights valiosos para quem quer se destacar nesse mercado em constante evolução.',
      slug: 'desenvolvimento-mobile-2025',
      isPublished: true,
      categoryId: 7,
      article_level: '',
      estimated_time: 4,
    },
  });

  const LINVING_OUTSIDE_BRAZIL_IS_IT_REALLY_WORTH_IT = await prisma.post.upsert(
    {
      where: { id: 12 },
      update: {},
      create: {
        title: 'Morar Fora do Brasil: Vale a Pena Mesmo?',
        authorId: 1,
        content: `Desde o ensino médio, sempre tive o desejo de viver a experiência de morar fora do Brasil. Não por status ou para postar fotos bonitas nas redes sociais dizendo que estou morando no exterior, mas porque, desde cedo, eu sentia um profundo desgosto pelas condições de vida que nos são oferecidas aqui.

### Por que eu quis sair do Brasil

A questão da segurança sempre foi um dos principais motivos que me motivaram a querer sair assim que tivesse a chance. Não é segredo para ninguém o quanto a violência urbana e a desigualdade social afetam o nosso dia a dia. E quando consegui meu primeiro emprego como desenvolvedor, comecei a perceber, de forma ainda mais clara, o quanto o trabalhador brasileiro é, na maioria das vezes, desvalorizado, enquanto a mão de obra brasileira é, curiosamente, muito bem vista lá fora.

Isso me motivou ainda mais a estudar inglês com mais afinco e a me aprofundar nos estudos de programação, para aumentar as minhas chances de conseguir uma vaga no exterior. Inicialmente, meu plano era trabalhar remotamente para alguma empresa de fora, para entender como era trabalhar com culturas diferentes, aprender a lidar com processos e exigências de outros países e, quem sabe, dar o primeiro passo para sair definitivamente.

### A oportunidade nos Emirados Árabes Unidos

![The skyline is dominated by modern high-rise buildings with sleek, glass facades that reflect the light beautifully.The colors of the sky range from soft pinks and purples to blues, suggesting either sunrise or sunset, adding a calm and picturesque ambiance to the scene. The cityscape is mirrored in a perfectly still body of water, creating a beautiful symmetrical reflection that enhances the sense of tranquility and elegance. Notable architectural features include several curved skyscrapers, which are characteristic of Abu Dhabi’s modern design aesthetic. The foreground features lush greenery and palm trees, subtly visible near the water’s edge, highlighting the city’s blend of nature and urban development.](https://www.expo2020dubai.com/-/media/expo2020/uae/abu-dhabi/expo2020-auh-skyline-1-3200-x-1800.jpg "Imagem 1: Emirado de Abu Dhabi")
_Imagem 1: Emirado de Abu Dhabi_

Um dia, surgiu a oportunidade de trabalhar nos Emirados Árabes Unidos como expert da [WorldSkills Competition](https://worldskills.org/), representando o país na competição internacional. A vaga exigia que eu me mudasse para a capital, Abu Dhabi, e começasse uma nova vida por lá. Parecia a chance perfeita para colocar em prática tudo o que eu vinha planejando.

Sendo muito sincero, não pensei muito antes de tomar a decisão. Claro que, no início, a insegurança bate forte: será que vou me adaptar? Será que vou conseguir me virar em um país com uma cultura tão diferente? Mas minha vontade de viver essa experiência falava mais alto, e a sensação de estar investindo no meu futuro superou qualquer medo.

Depois de três meses de processo seletivo, preparação de documentação, visto e passagem, finalmente cheguei ao país, em setembro de 2023, pronto para encarar essa nova jornada.

### Minha experiência até agora

Atualmente, estou com 1 ano e 9 meses de experiência nos Emirados e não me arrependo nem por um segundo.

É claro que é difícil ficar longe da família, dos amigos de infância, e até mesmo da nossa comida (quem nunca sentiu falta de um bom arroz com feijão?). Mas o ganho na qualidade de vida compensa muito. Poder andar na rua sem medo, ter condições de comprar carro, videogame (😆), roupas legais, viajar com mais frequência e alcançar uma estabilidade financeira em um país de primeiro mundo são benefícios que, sinceramente, fazem tudo valer a pena.

Além disso, sinto-me muito privilegiado pelas pessoas que conheci aqui. Fiz amizades que me ajudaram a me adaptar, e o ambiente multicultural expandiu minha mente de maneiras que eu nem imaginava. A educação que recebi da minha família e os valores que me passaram foram fundamentais para que eu pudesse aproveitar ao máximo essa experiência. Sem esse alicerce, seria bem mais difícil.

### O que eu já compartilhei no LinkedIn

Em uma publicação que fiz no LinkedIn após quase três meses vivendo nos Emirados Árabes Unidos, compartilhei algumas das minhas primeiras impressões sobre essa nova fase da minha vida.

**Aqui estão alguns trechos e reflexões que destaquei:**

**🌡️ Temperatura**

Uma das primeiras coisas que me surpreenderam foi o calor intenso. Cheguei ao hotel por volta das 2 da manhã e, ao sair do carro, meus óculos embaçaram instantaneamente devido à mudança brusca de temperatura. Estava fazendo quase 40 °C de madrugada! Felizmente, isso é característico do verão; no final do ano, o clima fica bem mais ameno.

**🕒 Fuso Horário**

A diferença de fuso horário é de sete horas em relação ao Brasil. Isso torna a comunicação com a família um pouco desafiadora, exigindo planejamento para encontrar horários adequados para conversar sem conflitos de agenda.

**🛡️ Segurança**

A segurança em Abu Dhabi é um dos aspectos que mais me impressionaram. A cidade é considerada uma das mais seguras do mundo, com câmeras em praticamente todos os lugares. A sensação de poder sair à noite, usar o celular na rua sem medo ou até esquecer um notebook em um local público e encontrá-lo intacto horas depois é algo extraordinário. Para nós, brasileiros, acostumados a estar sempre em alerta, essa tranquilidade é quase surreal.

**🗣️ Sotaques e Comunicação**

Embora o árabe seja a língua oficial, mais de 80% da população é composta por estrangeiros, tornando o inglês essencial para a comunicação. No entanto, cada pessoa tem seu próprio sotaque: indianos, filipinos, paquistaneses, ingleses, irlandeses, emiratenses, entre outros, o que pode tornar a compreensão desafiadora no início. Adaptar-se a essa diversidade linguística requer paciência e prática.

**💰 Custo de Vida**

O custo de vida aqui é significativamente mais alto do que no Brasil. No entanto, isso é compensado por um poder de compra maior, devido aos salários mais elevados. É fundamental pesquisar e planejar financeiramente antes de se mudar, para evitar dificuldades. Abu Dhabi é uma cidade moderna, com infraestrutura de qualidade, e possui uma cultura de luxo e extravagância, oferecendo inúmeras oportunidades de consumo.

> 📑 **Note:** Se você quiser ler a publicação completa, deixo aqui o link para o post no LinkedIn: [clique aqui](https://www.linkedin.com/feed/update/urn:li:activity:7139656049820680192/).

### Conclusão

![The skyline is dominated by modern high-rise buildings with sleek, glass facades that reflect the light beautifully.The colors of the sky range from soft pinks and purples to blues, suggesting either sunrise or sunset, adding a calm and picturesque ambiance to the scene. The cityscape is mirrored in a perfectly still body of water, creating a beautiful symmetrical reflection that enhances the sense of tranquility and elegance. Notable architectural features include several curved skyscrapers, which are characteristic of Abu Dhabi’s modern design aesthetic. The foreground features lush greenery and palm trees, subtly visible near the water’s edge, highlighting the city’s blend of nature and urban development.](https://lh3.googleusercontent.com/pw/AP1GczNso_dwF3iuyUjzWzUU7qVGKfdBb8m1AJhQvp90L4rNvvGeXonRJX90r5SzxqvAoQ8jxsWxrJ7E0ZmdQ3RbRNgNxsTifxkqpOLHFdhV4-uHM8xlC6EAUrM7JFuWOA8FaYB3GE67Xm51Y2ZPo8rOESY8vw=w1423-h1423-s-no?authuser=0 "Imagem 2: Mikael em Lyon, França, para a WorldSkills Competition 2024")
_Imagem 2: Mikael em Lyon, França, para a WorldSkills Competition 2024_

Respondendo à pergunta do título: **sim, vale muito a pena**.

Estude inglês, invista na sua formação e, se você, assim como eu, se sente revoltado(a) com a situação do Brasil, busque oportunidades para explorar outros horizontes. O mundo é muito maior do que a gente imagina, e há muitas possibilidades para quem está disposto a trabalhar duro e se adaptar.

Para mim, tem sido uma experiência fantástica tanto profissional quanto pessoal. Se você tem esse sonho, vá atrás dele com coragem e determinação.

**Deixo meu contato caso queiram trocar ideias ou tirar dúvidas. Um grande abraço!**

**Email:** [mikaelrsimoes19@gmail.com](mailto:mikaelrsimoes19@gmail.com)

**LinkedIn:** [Mikael Ribeiro](https://www.linkedin.com/in/mikael-ribeiro/) (me chama no PV)`,
        previewContent:
          'Morar fora vai muito além de fotos bonitas. Neste artigo, compartilho quais os motivos que o levaram a buscar uma vida no exterior. Um relato sincero sobre os desafios e aprendizados.  Vale a pena mesmo? Descubra na leitura.',
        slug: 'morar-fora-do-brasil-vale-a-pena-mesmo',
        isPublished: true,
        categoryId: 1,
        article_level: '',
        estimated_time: 7,
      },
    },
  );

  const FIRST_STEPS_AS_A_FREELANCER = await prisma.post.upsert({
    where: { id: 13 },
    update: {},
    create: {
      title: 'Primeiros Passos como Freelancer: Desafios, Dicas e Descobertas.',
      authorId: 8,
      content: `Começar a jornada como freelancer é como embarcar em uma aventura cheia de incertezas, mas também repleta de possibilidades. No início, tudo parece novo e desafiador: encontrar os primeiros clientes, definir preços justos, organizar a rotina e aprender a se vender no mercado. A liberdade de trabalhar por conta própria vem acompanhada de muitas responsabilidades e é justamente nesse equilíbrio que mora o aprendizado.

Neste artigo, compartilho minha visão e aprendizados nesse início de caminhada.

### Como conseguir os primeiros clientes?

No início, rolam muitas dúvidas, principalmente sobre como conseguir os primeiros projetos. No meu caso, comecei oferecendo ajuda para pessoas próximas. Uma amiga que estava se formando em psicologia topou fazer um site simples comigo para divulgar o seu trabalho. Fiz de forma gratuita, como forma de praticar e também para montar meu portfólio.

Uma boa dica é conversar com amigos que têm outras profissões e sugerir uma landing page simples. Mesmo sem ser algo muito complexo, já é possível mostrar seu trabalho. Se ainda não tiver clientes, crie projetos com foco em um nicho específico. Isso ajuda a mostrar seu estilo e passa mais credibilidade.

### O papel do networking nos freelas que consegui

Networking é fundamental para conseguir freelas e, na verdade, para muitas outras áreas da vida profissional. Desde os 13 anos, grande parte das minhas oportunidades de trabalho surgiu por meio de conexões. Com os freelas, não foi diferente.

Em dezembro, enquanto conversava em um grupo de WhatsApp de desenvolvedores, comentei sobre uma landing page que fiz para minha amiga psicóloga e mencionei que estava começando a pegar freelas. Pouco tempo depois, um dos participantes me chamou no privado oferecendo um freela de frontend e aceitei na hora.

Desde então, sempre que aparece algo na área, ele me chama. Isso mostra como o networking pode abrir portas e fazer toda a diferença na carreira.

### Conselhos para quem quer começar como freelancer

Se você está começando na programação, busque os primeiros freelas com pessoas próximas, como amigos ou familiares, é um ambiente mais seguro para ganhar confiança.

Para quem já tem experiência trabalhando como desenvolvedor, a dica é começar com projetos simples, como uma landing page, e ir evoluindo aos poucos. Se possível, trabalhe junto com alguém mais experiente. Isso ajuda a ter mais segurança, aprender na prática e ainda construir networking desde o início.

Mais do que só desenvolver, é importante saber comunicar o valor do que você faz. O cliente precisa entender os benefícios, como uma landing page pode atrair mais pacientes, por exemplo.

Outro ponto importante é entender a real necessidade do cliente e o que de fato ele precisa.

### Dicas para montar um contrato de freela

Elaborar um contrato não é fácil, principalmente se você está começando como freelancer. No entanto, ele é essencial para garantir segurança no trabalho.

Para fazer os meus primeiros contratos, contei com a ajuda de uma amiga advogada para revisar eles e posso dizer a vocês que isso fez toda a diferença.

Se você não sabe por onde começar, busque o apoio de alguém da área jurídica para revisar o documento e, se possível, registre em cartório.

Além disso, é importante entender o perfil do cliente com quem você vai trabalhar. Já na primeira conversa, dá para perceber o tipo de relação que pode surgir. Sempre registre o que for combinado, seja por e-mail ou outro meio escrito. Isso evita mal-entendidos e protege ambos os lados.

### Como lido com o processo do cliente: briefing, entrega e mais

No universo do freelancer, sei que algumas pessoas seguem um processo para montar o projeto com o cliente, que vai desde o briefing, contrato e definir um prazo para entrega. No entanto, eu ainda não sigo um processo fixo.

Geralmente, tudo começa com uma conversa informal com o cliente. Vou ouvindo, entendendo a necessidade dele e tentando captar o que realmente espera do projeto.

A partir disso, ajusto a proposta e, se estiver tudo certo, seguimos com o trabalho. Aos poucos, tenho percebido a importância de criar um processo mais estruturado, com briefing, contrato e etapas de entrega bem definidas. Isso ajuda a organizar melhor e passar mais profissionalismo.

### Como me organizo no dia a dia como freelancer

Não costumo usar ferramentas específicas para me organizar, mas sempre faço anotações e fico atento aos prazos de entrega. Realizar a entrega no prazo e com qualidade é essencial para construir uma boa reputação como freelancer.

### O que eu gostaria de ter aprendido antes de começar como freelancer?

Gostaria de ter aprendido backend antes de começar a trabalhar como freelancer. Já perdi algumas oportunidades por não dominar essa parte, principalmente em projetos que exigiam uma entrega mais completa. Hoje estou estudando para me tornar full stack e ampliar as chances de pegar freelas mais completos e desafiadores.

### Como o trabalho como freelancer ajudou no meu crescimento como desenvolvedor?

Ser freelancer me ajudou muito a crescer como desenvolvedor. Você é constantemente desafiado a lidar com situações fora da sua zona de conforto e a aprender coisas que ainda não domina. Diferente dos estudos, o freela te coloca frente a problemas reais, com prazos e exigências de clientes, algo que você só entende de verdade quando começa a trabalhar.

Por exemplo, em um dos meus primeiros projetos, precisei criar um formulário com upload de múltiplos arquivos. Parecia simples no início, mas na prática, surgiram várias dificuldades que eu nunca tinha enfrentado nos estudos.

**Explicando um pouco melhor sobre esse meu aprendizado:**

Em um dos projetos, precisei criar um formulário com um **select** para escolher o tipo de arquivo e um **input file** para fazer o upload. Havia também um botão para adicionar novos campos com a mesma estrutura.

O problema surgiu quando adicionávamos um segundo campo: ao alterar o valor do primeiro **select**, o segundo também mudava automaticamente. Eles estavam compartilhando o mesmo estado.

Depois de muito tentar resolver, a saída foi criar um componente Select totalmente personalizado, com controle de estado isolado para cada instância. Só assim conseguimos fazer funcionar corretamente.

> 💡 **Nota:** Esses desafios do dia a dia me fizeram evoluir muito mais rápido.

### Conclusão

Trabalhar como freelancer tem sido uma jornada cheia de aprendizados, desafios e descobertas. Cada projeto me fez evoluir, tanto tecnicamente quanto na forma de lidar com clientes e me posicionar no mercado. Ainda estou construindo meu caminho, aprendendo com cada experiência, mas uma coisa é certa: com dedicação, curiosidade e boas conexões, é possível crescer muito na área. E o mais importante: começar simples, mas começar.`,
      previewContent:
        'Começar como freelancer em desenvolvimento pode parecer desafiador, mas com as experiências certas, tudo se encaixa. Neste artigo, compartilho como consegui meus primeiros clientes, os aprendizados e desafios.',
      slug: 'primeiros-passos-como-freelance',
      isPublished: true,
      categoryId: 8,
      article_level: '',
      estimated_time: 6,
    },
  });

  const COMPONENTS = await prisma.post.upsert({
    where: { id: 14 },
    update: {},
    create: {
      title: 'Componentes',
      authorId: 4,
      content: ``,
      previewContent:
        'Componentes são a base de qualquer interface bem estruturada e entender isso pode mudar a forma como você desenvolve. Neste artigo, vamos explorar o que são componentes, como pensar neles no seu dia a dia e por que eles são tão importantes no front-end.',
      slug: 'componentes',
      isPublished: true,
      categoryId: 9,
      article_level: '',
      estimated_time: 8,
    },
  });

  const TAILWINDCSS_IS_MOBILE_FIRST = await prisma.post.upsert({
    where: { id: 15 },
    update: {},
    create: {
      title: 'Tailwind é Mobile First? Vem descobrir comigo.',
      authorId: 2,
      content: ``,
      previewContent:
        'Quando comecei a usar o TailwindCSS, não fazia ideia de que ele já aplicava os estilos primeiro em dispositivos mobiles. Neste artigo, compartilho como descobri que o Tailwind é mobile first e o que isso significa na prática.',
      slug: 'tailwind-mobile-first',
      isPublished: true,
      categoryId: 10,
      article_level: '',
      estimated_time: 4,
    },
  });

  const TAILWINDCSS_A_POWERFUL_TOOL = await prisma.post.upsert({
    where: { id: 16 },
    update: {},
    create: {
      title: 'TailwindCSS: Uma ferramenta poderosa para estilização.',
      authorId: 2,
      content: ``,
      previewContent:
        'Neste artigo, você vai entender como essa ferramenta funciona, explorar sua estrutura e descobrir por que tantos desenvolvedores estão adotando o Tailwind no dia a dia.',
      slug: 'tailwind-uma-ferramenta-poderosa',
      isPublished: true,
      categoryId: 10,
      article_level: '',
      estimated_time: 5,
    },
  });

  const GENERIC_COMPONENTS = await prisma.post.upsert({
    where: { id: 17 },
    update: {},
    create: {
      title: 'Componentes Genéricos: A Arte de Não Reinventar a Roda (Parte 1)',
      authorId: 4,
      content: ``,
      previewContent:
        'Descubra como os componentes genéricos podem transformar sua forma de programar, evitando código duplicado e trazendo mais clareza e reutilização ao seu projeto.',
      slug: 'componentes-genericos-arte-de-nao-reinventar-roda-parte-1',
      isPublished: true,
      categoryId: 9,
      article_level: '',
      estimated_time: 8,
    },
  });

  const GENERIC_COMPONENTS_02 = await prisma.post.upsert({
    where: { id: 18 },
    update: {},
    create: {
      title: 'Componentes Genéricos: A Arte de Não Reinventar a Roda (Parte 2)',
      authorId: 4,
      content: ``,
      previewContent:
        'Na Parte 2, vamos explorar quando faz sentido usar componentes genéricos e quando isso pode virar um problema. Inclui o caso real dos filtros genéricos que deu tudo errado e lições práticas para evitar armadilhas.',
      slug: 'componentes-genericos-arte-de-nao-reinventar-roda-parte-2',
      isPublished: true,
      categoryId: 9,
      article_level: '',
      estimated_time: 8,
    },
  });

  const UNDERSTANDING_ALGORITHMS = await prisma.post.upsert({
    where: { id: 19 },
    update: {},
    create: {
      title: 'Entendendo Algoritmos',
      authorId: 2,
      content: ``,
      previewContent:
        'O que são algoritmos? Aprenda com exemplos do dia a dia como eles influenciam nossa rotina e a tecnologia ao nosso redor.',
      slug: 'entendendo-algoritmos',
      isPublished: true,
      categoryId: 11,
      article_level: 'Iniciante',
      estimated_time: 9,
    },
  });

  const TAILWINDCSS_V4 = await prisma.post.upsert({
    where: { id: 20 },
    update: {},
    create: {
      title: 'Tailwind CSS v4: Uma nova era para o framework.',
      authorId: 2,
      content: ``,
      previewContent:
        'O Tailwind CSS v4 chegou com uma nova arquitetura, mais desempenho e uma configuração simplificada. Descubra o que mudou e como essa versão redefine a forma de escrever CSS moderno.',
      slug: 'tailwind-css-v4-uma-nova-era-para-o-framework',
      isPublished: true,
      categoryId: 10,
      article_level: 'Avançado',
      estimated_time: 9,
    },
  });

  const DESIGN_SYSTEM = await prisma.post.upsert({
    where: { id: 22 },
    update: {},
    create: {
      title: 'Design System: o que é e quando não ter um',
      authorId: 9,
      content: ``,
      previewContent:
        'Neste artigo, você vai entender o que é um Design System e em quais cenários faz mais sentido não criar um.',
      slug: 'design-system-o-que-e-e-quando-nao-ter-um',
      isPublished: true,
      categoryId: 12,
      article_level: 'Intermediário',
      estimated_time: 8,
    },
  });

  console.log({
    FAZ_FUNCIONAR_E_DEPOIS_MELHORA_SERA_MESMO,
    OLIMPIADA_DO_CONHECIMENTO,
    TECHKNOWLEDGE_PONTO_ZERO,
    QUEM_SOMOS_NOS,
    DEV_FRONTEND,
    YOU_LEARN_FROM_YOUR_MISTAKES,
    PRATICE_HOW_TO_BECOME_A_DEVELOPER,
    HOW_I_LEARNED_TO_CREATE_MY_OWN_INTERFACES,
    THE_MOBILE_DEVELOPMENT_MARKET_2025,
    LINVING_OUTSIDE_BRAZIL_IS_IT_REALLY_WORTH_IT,
    FIRST_STEPS_AS_A_FREELANCER,
    COMPONENTS,
    TAILWINDCSS_IS_MOBILE_FIRST,
    TAILWINDCSS_A_POWERFUL_TOOL,
    GENERIC_COMPONENTS,
    GENERIC_COMPONENTS_02,
    UNDERSTANDING_ALGORITHMS,
    TAILWINDCSS_V4,
    DESIGN_SYSTEM,
  });
}
