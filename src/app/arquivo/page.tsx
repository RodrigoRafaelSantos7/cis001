"use client";

import { HistoryIcon } from "lucide-react";
import Image from "next/image";
import { Footer } from "@/components/app/footer";
import { Navigation } from "@/components/app/navigation";
import { Badge } from "@/components/ui/badge-component";

type ContentItem =
  | { type: "text"; content: string }
  | { type: "image"; url: string; caption?: string };

type TimelinePeriod = {
  years: string;
  content: ContentItem[];
};

const TIMELINE_DATA: TimelinePeriod[] = [
  {
    years: "1979-1990",
    content: [
      {
        type: "text",
        content:
          "O Coral Infantil de Setúbal foi formalmente constituído em 24 de novembro de 1979. A Comissão Fundadora foi formada por Adriano Pereira, Agostinho Claro dos Santos, António da Costa Ferrão, Deolinda Manuel Nogueira Godinho, Dina Teresa de Oliveira Barco, José Luís Rocha Carvalho, Laura Silva de Oliveira, Laureano Rocha Lorenzo, Maria Dulce Palhota Ferreira e Maria Leonor Neves Ferrão.",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/1.png",
      },
      {
        type: "text",
        content:
          "Era então constituído por 50 coralistas, com idades compreendidas entre os 6 e os 14 anos e fazia-se acompanhar por uma orquestra privativa, composta por 16 elementos.",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/2.jpg",
      },
      {
        type: "text",
        content:
          'Não possuindo instalações próprias, o Coral ensaiava numa sala do Museu Etnográfico, cedida para o efeito pelo Município. Em 1982, uma época conturbada em que muitas coletividades recém-nascidas não recebiam os necessários apoios e em que se avolumava o problema das instalações, o Coral foi "despejado" da sala onde costumava ensaiar, ficando sem condições de continuar o seu trabalho. Valeu então ao Coral o auxílio da Sociedade União Setubalense, que cedeu gratuitamente uma sala, mas as condições não eram as melhores e em junho desse mesmo ano o Coral viu-se forçado a suspender totalmente as atividades.',
      },
      {
        type: "text",
        content:
          'Depois de muitas portas se terem fechado, houve uma que se abriu, a porta da "Stella-Maris", instituição que acolheu o Coral até novembro de 1993, altura em que foi inaugurada a sede social. O nome do Padre Manuel Vieira ficará, assim, para sempre ligado à história do Coral.',
      },
      {
        type: "text",
        content:
          "Em março de 1984 foram retomados os ensaios e o Coral realizou em 26 de maio desse mesmo ano o seu primeiro espetáculo depois da interrupção das atividades. Nesse mesmo dia tomaram posse os primeiros Órgãos Dirigentes com Fernando Garcia dos Santos a assumir a presidência da Direção.",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/3.jpg",
      },
      {
        type: "text",
        content:
          "A partir daqui o Coral, com os seus 65 coralistas e a sua Orquestra de 16 músicos, fez dezenas de atuações, não só em Setúbal como em diversos pontos do país.",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/4.jpg",
      },
      {
        type: "text",
        content:
          'Foi, então, convidado a gravar um programa de televisão e, sob a direção de Carlos Alberto Moniz, gravou um disco com dois temas: "A saia da Luisinha" e "Rei D. Leão". Tratou-se de um período em que o Coral Infantil de Setúbal se afirmou como uma instituição credível no panorama cultural setubalense.',
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/5.jpg",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/6.jpg",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/7.jpg",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/8.jpg",
      },
      {
        type: "text",
        content:
          "Apesar dos sucessos que foi obtendo e do crescente protagonismo que foi assumindo, em finais de 1986 o Coral viu-se de novo envolvido numa situação de crise, com a demissão de Adriano Pereira, seu fundador e maestro.",
      },
      {
        type: "text",
        content:
          "Em março de 1986, Raul Veloso tomou posse como presidente da Direção, cargo que ocupou ao longo de dez anos. A direção artística foi, entretanto, assumida pelo Maestro Maurício Vieira da Silva, que se manteve nesse cargo entre 1987 e 1992.",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/9.jpg",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/10.jpg",
      },
      {
        type: "text",
        content:
          "Em 8 de maio de 1988 realizou-se o 1º Festival da Canção Infantil de Setúbal/Costa Azul, tendo como principal objetivo a criação e promoção de novas canções de natureza infantil. Anabela foi a vencedora da 1ª edição deste festival, que decorreu anualmente até 2001.",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/11.jpg",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/12.jpg",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/13.jpg",
      },
      {
        type: "text",
        content:
          "Em 1989 foi dado um passo decisivo para se concretizar a aquisição de uma sede social para a instituição. No dia 26 de julho de 1989, em cerimónia que decorreu no Salão Nobre da Câmara Municipal de Setúbal, na presença do Senhor Presidente da Câmara, Professor Mata Cáceres, a Portucel entregou ao Coral Infantil de Setúbal, na pessoa do seu Presidente, Raul Veloso, a quantia de 11 milhões e 700 mil escudos, destinada à aquisição da sede.",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/14.jpg",
      },
    ],
  },
  {
    years: "1990-2000",
    content: [
      {
        type: "text",
        content:
          "Em 1991 deu-se início a outra realização que se manterá ao longo dos anos, passando a constituir uma tradição e um ponto alto das atividades de cada época. Trata-se dos Encontros de Coros Infantis da Cidade de Setúbal, que no dia 8 de março de 1991 tiveram a sua primeira edição. (15,16,17)",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/15.jpg",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/16.jpg",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/17.jpg",
      },
      {
        type: "text",
        content:
          "O Encontro de Coros e o Festival da Canção Infantil passaram a ser os pontos altos da vida do Coral.",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/18.jpg",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/19.jpg",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/20.jpg",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/21.jpg",
      },
      {
        type: "text",
        content:
          "Em 27 de novembro de 1993, coincidindo com o 14º Aniversário do Coral, foi inaugurada pelo Professor Mata Cáceres, Presidente da Câmara Municipal de Setúbal, a sede social da instituição, na Avenida dos Combatentes da Grande Guerra. Apesar da exiguidade das instalações, a existência de uma sede própria revelar-se-á de fundamental importância para o normal funcionamento das atividades.",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/22.jpg",
      },
      {
        type: "text",
        content:
          "Entretanto, em 1992, Jorge Salgueiro assumira o cargo de Maestro dando início a uma nova fase na vida da instituição. Jorge Salgueiro apresentou um projeto próprio e ambicioso, que se sintetizou em dois grandes objetivos: A integração do Coral no contexto internacional de coros infantis, com capacidade para interpretar as grandes peças do repertório sinfónico e de câmara para coro infantil; e, a médio prazo, estimular o gosto e a prática da música clássica na cidade de Setúbal.",
      },
      {
        type: "text",
        content:
          "Com Jorge Salgueiro o Coral começou por interpretar temas acompanhados ao piano por Teresa Cabica e, mais tarde, foi criada uma equipa de trabalho constituída por um Pianista (Óscar Mourão), um Professor de Formação Musical (Mário Cabica) e uma Professora de Canto (Juliana Telmo) que, com o Maestro, garantia a necessária formação dos coralistas. Esta equipa foi sendo reformulada e alguns anos depois era constituída por Paulo Tavares, Mário Cabica e Ana Cosme.",
      },
      {
        type: "text",
        content:
          "Foi por esta altura que se formou igualmente um Mini-Grupo, constituído por um número restrito de coralistas mais novos, que interpretava temas de Festivais da Canção Infantil e Juvenil da Costa Azul e aliava a dança ao canto. A sua manutenção revelou-se difícil, dado que as exigências do Coral não deixavam muito tempo livre para esta atividade.",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/23.jpg",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/24.jpg",
      },
      {
        type: "text",
        content:
          'Em abril de 1995 foi estreado o musical infantil em 1 ato "Festa da Bicharada", uma peça musical da autoria de Mário Gomes Silvério e Jorge Salgueiro. Apesar de apenas contar duas apresentações, a peça registou um grande êxito.',
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/25.jpg",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/26.jpg",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/27.jpg",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/28.jpg",
      },
      {
        type: "text",
        content:
          'Em 1996 António Santos foi eleito Presidente da Direção. Concretizou-se, então, a gravação do primeiro CD do Coral, sob a direção do Maestro Jorge Salgueiro. Trata-se do CD "enCANTAR" que apresentava uma vertente clássica de repertório sinfónico e uma vertente mais lúdica, com temas de filmes da Walt Disney. Este CD foi lançado no Concerto Comemorativo do 18º Aniversário do Coral, em 23 de novembro de 1997, no Fórum Municipal Luísa Todi.',
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/29.jpg",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/30.jpg",
      },
      {
        type: "text",
        content:
          "Afirmando-se, cada vez mais, como uma instituição fundamental no panorama cultural setubalense, o Coral foi distinguido, pela Câmara Municipal de Setúbal, em 15 de setembro de 1997, com a Medalha de Honra da Cidade de Setúbal.",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/31.jpg",
      },
      {
        type: "text",
        content:
          "Em 1998 Isabel Mendes foi eleita Presidente da Direção. O Coral enfrentou, entretanto, algumas dificuldades de funcionamento face à impossibilidade de o Maestro Jorge Salgueiro continuar a assumir a direção do Coral. A marca decisiva que ele imprimira à atividade do Coral e a dedicação e entrega com que assumira as suas funções, tornava difícil a sua substituição. Valeu, na altura, a disponibilidade de Paulo Tavares, pianista residente do Coral, que, conhecendo bem o tipo de trabalho, conseguiu dar continuidade às atividades. A função de pianista foi, provisoriamente, assumida por José Bom de Sousa e posteriormente por Olga Beliaeva.",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/32.jpg",
      },
      {
        type: "text",
        content:
          "Em 1999 o cargo de Maestro é assumido por Nuno Batalha, formando nova equipa de trabalho, constituída por António Laertes (Piano), Célia Inês Nascimento (Técnica Vocal/Soprano) e Mário Cabica (Formação Musical/Clarinete).",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/33.jpg",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/34.jpg",
      },
      {
        type: "text",
        content:
          "O Coral consolidava os objetivos traçados e aventurava-se em novos projetos. Em dezembro de 1999, concretizou-se uma deslocação a Madrid e o Coral atuou, com grande êxito, na Basílica de San Francisco el Grande.",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/35.jpg",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/36.jpg",
      },
      {
        type: "text",
        content:
          "O mérito do trabalho desenvolvido pelo Coral foi também reconhecido a nível institucional e, em agosto de 1999, a Presidência do Conselho de Ministros atribuiu ao Coral Infantil de Setúbal o Estatuto de Entidade de Utilidade Pública.",
      },
    ],
  },
  {
    years: "2000-2010",
    content: [
      {
        type: "text",
        content:
          "Em março de 2000, os coralistas acolheram em suas casas os colegas do Coro Infantil do Gabinete Coordenador de Educação Artística da Madeira que, por sua vez, os acolhem em junho. O Coral atuou, então, no Funchal. Em todas as atuações foi elogiada a qualidade que apresentava, bem como o repertório.",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/37.jpg",
      },
      {
        type: "text",
        content:
          "Seguro das suas capacidades para se lançar em novos projetos, o Coral sentia, entretanto, a necessidade de um novo espaço que permitisse viabilizar o crescimento da instituição, quer em termos do número de coralistas, quer em termos da diversidade de atividades. Sensível a esta necessidade, a Câmara Municipal de Setúbal cedeu ao Coral o rés-do-chão de dois prédios situados na Quinta da Poupinha. Esta cedência, por um período de 50 anos, foi feita em regime de comodato, cujo contrato foi assinado em setembro de 2000.",
      },
      {
        type: "text",
        content:
          "Em 2001 realizou-se a 14ª e última edição do Festival da Canção Infantil e Juvenil Setúbal/Costa Azul. Para além das dificuldades financeiras inerentes à sua realização, a proliferação deste tipo de festivais a nível nacional levara à sua descaracterização como evento promotor de um salutar convívio artístico e relacionamento interpessoal entre crianças e jovens, e adquiria uma componente cada vez mais competitiva e comercial. A Direção do Coral assumiu que devia privilegiar outro tipo de eventos, que se enquadrassem nos valores e objetivos que definem a sua essência. A colaboração e intercâmbio com outros agrupamentos corais foi, por isso, valorizada.",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/38.jpg",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/39.jpg",
      },
      {
        type: "text",
        content:
          'Em 2002 o Coral concretizou a gravação do seu segundo CD, sob a direção do Maestro Nuno Batalha. "VOZES" é um CD composto exclusivamente por temas "a cappella" e foi gravado na Igreja de S. Sebastião. A apresentação pública teve lugar na Biblioteca Pública Municipal de Setúbal em 28 de setembro.',
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/40.jpg",
      },
      {
        type: "text",
        content:
          "Em 2002, Gonçalo Simões passou a integrar a equipa de trabalho como pianista.",
      },
      {
        type: "text",
        content:
          'Em 3 de novembro de 2002, o CIS apresentou o espectáculo "Música e Fantasia", tendo como base temas da Walt Disney e aliando a música a outras formas de expressão artística.',
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/41 (2).png",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/42 (2).png",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/43 (2).png",
      },
      {
        type: "text",
        content:
          "Em 2003, a Direção do CIS deu seguimento ao processo de candidatura para concretização das obras na nova sede, no âmbito do PRODEP e as obras tiveram início em agosto de 2004. A concretização das obras exigiu um enorme esforço de todos os elementos da direção, sendo de realçar o apoio de Dulce Oliveira, na organização e acompanhamento do concurso, e Manuel Rebelo dos Santos, no acompanhamento das obras.",
      },
      {
        type: "text",
        content:
          "Em 2004 o CIS comemorou 25 anos de existência, que foram assinalados com um CD comemorativo, com o seu hino da autoria de José Azóia e Adriano Pereira.",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/50.jpg",
      },
      {
        type: "text",
        content: "A nova sede foi inaugurada em 16 de abril de 2005.",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/44 (2).png",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/45.png",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/46.jpg",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/47.jpg",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/48.jpg",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/49.jpg",
      },
      {
        type: "text",
        content:
          'Em 3 de junho de 2005, o Coral Infantil de Setúbal apresentou o seu segundo musical em estreia absoluta, intitulado "Kate e o Skate", com libreto de Risoleta Pinto Pedro e música de Jorge Salgueiro. Este musical teve ainda cinco apresentações em 2006, no Fórum Municipal Luísa Todi, no Teatro da Malaposta, em Lisboa e no Centro de Artes do Espectáculo, em Portalegre.',
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/51.jpg",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/52.jpg",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/53.jpg",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/54.jpg",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/55.jpg",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/56.jpg",
      },
      {
        type: "text",
        content:
          'O Coral gravou, ainda, a coletânea de quatro CDs "Jardim de Infância" (disco de platina, em março de 2009), bem como a coletânea de CDs que acompanhava os livros da disciplina de Expressão Musical e Dramática do 1º Ciclo do Ensino Básico da Região Autónoma da Madeira.',
      },
      {
        type: "text",
        content:
          "Em janeiro de 2006, foi formado o Coro Feminino TuttiEncantus, constituído por ex-coralistas do coro infantil, que pretendiam dar continuidade ao seu gosto pela música e pelo canto. A sua primeira apresentação pública teve lugar em março de 2006, por ocasião do 14º Encontro de Coros Infantis e Juvenis de Setúbal e, a partir de então, deram início às suas atuações autónomas, atuando também com o coro infantil quando tal se justificava.",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/57.jpg",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/58.png",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/59.jpg",
      },
      {
        type: "text",
        content:
          'Em junho de 2006, o CIS participou na iniciativa "S. Julião em Festa", promovida pela Junta de Freguesia de S. Julião, que promoveu a animação do espaço junto ao Jardim da Algodeia. As associações presentes puderam, assim, angariar fundos para o seu funcionamento.',
      },
      {
        type: "text",
        content:
          'Entre novembro de 2006 e dezembro de 2007 integrou um projeto inovador de parceria com a Banda da Armada e o Grupo de Teatro o Bando, no âmbito da qual foi sendo composta e apresentada a fábula sinfónica "Projecto Tartaruga", de Jorge Salgueiro. A primeira apresentação teve lugar no Grande Auditório da Escola Naval, no Alfeite, em 20 de dezembro de 2006 e a apresentação final da obra teve lugar no Centro Cultural de Belém, em Lisboa, nos dias 8 e 9 de dezembro de 2007. Ao longo deste ano, foram realizadas onze atuações conjuntas com a Banda da Armada, que contribuíram para cimentar a forte parceria que se estabeleceu.',
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/60.jpg",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/61.png",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/62.png",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/63.jpg",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/64.jpg",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/65.png",
      },
      {
        type: "text",
        content:
          "Em 2008, recebemos o Coro do Conservatório de Ponta Delgada, cujos elementos ficaram alojados em casa dos nossos coralistas, uma experiência muito positiva que sempre valorizamos. O coro realizou dois concertos, um com o Coro Feminino TuttiEncantus e outro no âmbito do 16º Encontro de Coros Infantis e Juvenis de Setúbal.",
      },
      {
        type: "text",
        content:
          "O 29º Aniversário do CIS foi comemorado no Museu do Trabalho, por o Fórum Municipal Luísa Todi ter, entretanto, encerrado para obras. O repertório deste concerto, de música tradicional de Setúbal recolhida por Maria Adelaide Rosado Pinto, teve a participação especial e muito sigilosa de um coro de pais.",
      },
      {
        type: "text",
        content:
          "O encerramento do Fórum causou grandes constrangimentos ao funcionamento do CIS e obrigou a realizar concertos em espaços mais exíguos. O 17º Encontro de Coros Infantis e Juvenis de Setúbal foi realizado no Club Setubalense, em 22 de março de 2009.",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/65-2.jpg",
      },
      {
        type: "text",
        content:
          'Entre novembro de 2009 e novembro de 2010, o CIS concretizou um novo e ambicioso projeto, destinado a assinalar o 30º Aniversário do Coral: "Coral Infantil de Setúbal - 30 Anos, 30 Coros", iniciativa que trouxe até Setúbal um total de 30 coros de diversos pontos de país. O lançamento deste projeto teve lugar por ocasião do Concerto Comemorativo do 30º Aniversário, que teve lugar no Auditório da Anunciada, por o Fórum Municipal Luísa Todi continuar encerrado. Para concluir este projeto, o Coral encomendou uma obra inédita, "O Poeta da Arrábida", baseada na vida e obra de Sebastião da Gama. Para o efeito pediu a colaboração da Associação Sebastião da Gama, na pessoa do professor João Ribeiro, que fez a seleção e organização de textos do poeta. A música é da autoria de Samuel Pascoal.',
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/66.jpg",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/67.jpg",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/68.jpg",
      },
    ],
  },
  {
    years: "2010-2020",
    content: [
      {
        type: "text",
        content:
          'Ao longo do ano de 2010 foi dada continuidade ao projeto "30 Anos, 30 Coros", tendo sido concretizados nove concertos com diferentes coros mistos a nível nacional. A segunda fase do projeto preconizava a apresentação da obra "O Poeta da Arrábida", com a participação da Banda da Armada e representantes dos 30 coros envolvidos no projeto. O facto de o Fórum Luísa Todi continuar encerrado constituiu uma dificuldade intransponível, por falta de locais alternativos com a devida dimensão, pelo que a apresentação desta obra só ocorreu em 2013.',
      },
      {
        type: "text",
        content:
          "Devido ao encerramento do Fórum, o 18º Encontro de Coros Infantis e Juvenis realizou-se no Auditório da Anunciada e o Concerto Comemorativo do 31º Aniversário teve lugar no Club Setubalense.",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/68-2.jpg",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/68-3.JPG",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/68-4.JPG",
      },
      {
        type: "text",
        content:
          "Decorreram neste ano as Comemorações do Centenário da Implantação da República e o Coral marcou presença com uma atuação nos jardins do Palácio de Belém.",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/68-5.JPG",
      },
      {
        type: "text",
        content:
          "Neste mesmo ano, foi concretizada uma deslocação à Ilha de S. Miguel, Açores, no âmbito de uma parceria com o Conservatório Regional de Ponta Delgada, estabelecida em 2008. Esta deslocação constituiu um ponto alto da atividade do CIS, embora os reduzidos apoios tenham inviabilizado a deslocação de alguns coralistas.",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/69.jpg",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/70.jpg",
      },
      {
        type: "text",
        content:
          "A equipa, coordenada pelo Maestro Nuno Batalha, era então constituída pelos professores Diliana Santos (Técnica Vocal / Soprano), Gonçalo Simões (Piano) e Raquel Pereira (Formação Musical).",
      },
      {
        type: "text",
        content:
          "No ano de 2011, o encerramento do Fórum Municipal Luísa Todi continuou a causar constrangimentos à realização dos concertos, pelo que o 19º Encontro de Coros Infantis e Juvenis se realizou no Centro de Espectáculos do Tróia Design Hotel e o Concerto Comemorativo do 32º Aniversário teve lugar no Auditório da Anunciada.",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/71.JPG",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/72.JPG",
      },
      {
        type: "text",
        content:
          'Por ocasião das Comemorações do Dia da Marinha, que decorreram em Setúbal, o Coral Infantil de Setúbal e o Coro Feminino TuttiEncantus participaram num concerto com a Banda da Armada, no Largo José Afonso. Esta foi uma oportunidade para apresentar alguns excertos da obra coral sinfónica "O Poeta da Arrábida".',
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/73.JPG",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/74.JPG",
      },
      {
        type: "text",
        content:
          "Em maio de 2011, realizou-se a 1ª edição do Festival de Música de Setúbal e o Coral teve a sua primeira participação neste festival, num concerto realizado no Auditório da Anunciada.",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/75.JPG",
      },
      {
        type: "text",
        content:
          "O Coral sentiu, entretanto, necessidade de alargar a sua oferta, pelo que também proporcionou aulas de violino aos seus coralistas, em regime facultativo. As aulas estavam a cargo da professora Raquel Pereira e a primeira apresentação pública foi por ocasião do Concerto de Aniversário.",
      },
      {
        type: "text",
        content:
          "O 20º Encontro de Coros ainda se realizou num espaço diferente, a Sala de Espectáculos da Fundação Inatel.",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/76.jpg",
      },
      {
        type: "text",
        content:
          "Em junho de 2012, o Coral teve uma participação mais significativa na 2ª edição do Festival de Música de Setúbal, participando em dois concertos, em colaboração com várias escolas do ensino básico e escolas de música.",
      },
      {
        type: "text",
        content:
          'Respondendo a uma solicitação do coro belga "Les Petits Chanteurs de S. Pierre", o Coral acolheu este prestigiado coro e realizou um concerto conjunto nos Claustros do Convento de Jesus.',
      },
      {
        type: "text",
        content:
          "A classe de violinos realizou, entretanto, várias atuações e o Coro Feminino TuttiEncantus continuou o seu percurso, afirmando cada vez mais a sua qualidade.",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/77.JPG",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/78.JPG",
      },
      {
        type: "text",
        content:
          "O Fórum Municipal Luísa Todi reabriu ao público no final de 2012 e o Concerto Comemorativo do 33º Aniversário pode voltar a realizar-se naquele espaço, entretanto renovado e oferecendo óptimas condições.",
      },
      {
        type: "text",
        content:
          'A reabertura do Fórum permitiu, finalmente, a apresentação integral da obra coral sinfónica "O Poeta da Arrábida", por ocasião do Concerto comemorativo do 34º Aniversário, em 23 de novembro de 2013. Este foi o grande evento do ano, que contou com a participação da Banda da Armada Portuguesa, do Coro do Conservatório Regional de Setúbal e do Coro de Câmara de Setúbal, para além do Coral Infantil de Setúbal e do Coro Feminino TuttiEncantus.',
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/80.JPG",
      },
      {
        type: "text",
        content:
          "Ao longo dos anos, o Coral foi sempre mantendo uma vertente solidária, associando-se a causas que justificam o seu apoio. A título de exemplo, em 2013 o Coral colaborou com a APPDA e o Lar Paula Borba.",
      },
      {
        type: "text",
        content:
          'A colaboração com outros agrupamentos corais e associações ou entidades foi sempre uma vertente muito valorizada e o ano de 2014 espelhou bem esse facto, quer nos eventos por nós organizados, quer respondendo a convites e solicitações. Destacando apenas os mais emblemáticos, dever-se-á referir o Concerto Comemorativo do 35º Aniversário, "Um Aniversário com… Gospel", com o Coro Gospel de Lisboa, o concerto-instalação "Quando o Homem Lavrava o Mar", com concepção e interpretação de Fernando Mota e o evento musical e teatral "Ir e Vir Abril Abrir", criado pelo Grupo de Teatro O Bando.',
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/81.jpg",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/82.JPG",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/83.JPG",
      },
      {
        type: "text",
        content:
          'Na época que se iniciou em setembro de 2015, o CIS tentou alargar o âmbito da sua atividade a um grupo etário mais baixo, criando o grupo "Pequenos Cantores do Coral Infantil de Setúbal", sob orientação da professora Raquel Pereira. Simultaneamente, o coro feminino foi reforçado com novos elementos, saídos do coro infantil. Os três grupos realizaram um notável concerto de aniversário, com o tema "Um Aniversário com… Rock".',
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/84.jpg",
      },
      {
        type: "text",
        content:
          "Nesta época foram-se tornando evidentes algumas dificuldades financeiras, que se vinham a fazer sentir há algum tempo. Os apoios institucionais foram assumindo um carácter meramente simbólico e pontual e o apoio derivado do protocolo com a Secil passou a ser o principal suporte da atividade. A cobrança de bilhetes nos eventos por nós organizados tornou-se incontornável e foi necessário reduzir custos, nomeadamente com deslocações. A participação na Fest'Asso, promovida pela União de Freguesias de Setúbal, tornou-se um meio imprescindível de obter receitas.",
      },
      {
        type: "text",
        content:
          "O Coro Feminino TuttiEncantus foi-se afirmando ao longo do tempo como um coro que interpreta um repertório próprio de grande exigência e qualidade e essas características ficaram bem patentes no ano de 2016 em que, para além de concertos com o coro infantil, como o Concerto de Natal, concretizaram várias atuações autónomas. Refira-se, a título de exemplo, o concerto que assinalou o 263º Aniversário do Nascimento de Luísa Todi, o 8º Recital Lions Clube Almada Tejo e o Encontro de Coros em Silves.",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/85.jpg",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/86.JPG",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/87.JPG",
      },
      {
        type: "text",
        content:
          "O 37º aniversário do Coral foi assinalado com uma sessão no Salão Nobre dos Paços do Conselho, em que revisitamos os 37 anos de história, quer a nível de repertório, quer a nível das fardas.",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/88.jpg",
      },
      {
        type: "text",
        content:
          'No Festival de Música de Setúbal, o CIS participou nos concertos "Alma Brasileira" e "Fábula do Sal".',
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/89.png",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/89-2.png",
      },
      {
        type: "text",
        content:
          'A apresentação da ópera infantil "Um Sonho Mágico", no Fórum Municipal Luísa Todi, marcou o ano de 2017. Integralmente interpretada pelos coros feminino e infantil, teve como solista Carolina Mendes e contou com a participação do ator José Nobre e os figurinos de Zé Nova. Foi um enorme êxito, que muito se deveu ao trabalho do maestro Nuno Batalha.',
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/90.JPG",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/91.JPG",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/92.JPG",
      },
      {
        type: "text",
        content:
          "Este ano foi também marcado pelo acolhimento ao Choeur Melopée, de Bruxelas, que participou no 25º Encontro de Coros Infantis e Juvenis. Este acolhimento por parte dos familiares das nossas crianças e jovens foi marcante para o êxito desta iniciativa e contribuiu para criar as condições para a uma futura deslocação a Bruxelas.",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/93.JPG",
      },
      {
        type: "text",
        content:
          'O ano de 2017 foi, ainda, marcado por vários concertos inéditos, como "Revivendo os 80\'s", que assinalou o Dia Mundial do Rock. O concerto que assinalou o 38º aniversário do Coral teve como tema "Um Aniversário com… Grandes Clássicos" e foi realizado em parceria com o Coro Setúbal Voz, que assinalava o seu primeiro aniversário. A deslocação à Maia, para participar no 4º Encontro de Coros Infantis, foi também um ponto alto deste ano.',
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/94.JPG",
      },
      {
        type: "text",
        content:
          "O evento mais marcante de 2018 foi a deslocação do coro infantil e do coro feminino a Bruxelas, a convite do Choeur Melopée. Ao longo da época foram realizados vários eventos para angariar fundos, como um peddy-paper na zona histórica de Setúbal.",
      },
      {
        type: "text",
        content:
          'No âmbito do projeto "Setúbal mais bonita", embelezámos o interior e o exterior da nossa sede, sempre a sonhar com Bruxelas.',
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/95.JPG",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/95-2.jpg",
      },
      {
        type: "text",
        content:
          "Esta deslocação constituiu uma experiência única que ficou marcada na memória de todos os que nela participaram.",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/96.JPG",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/97.jpg",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/98.JPG",
      },
      {
        type: "text",
        content:
          "No 26º Encontro de Coros Infantis e Juvenis recebemos o Coro Infanto Juvenil da Ribeira Brava e o Coral Infantil Notas Livres, de Vendas Novas, e na 8ª edição do Festival de Música de Setúbal atuamos com Celina da Piedade e João Gil.",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/99.jpg",
      },
      {
        type: "text",
        content:
          'O 39º aniversário do Coral foi "Um Aniversário com… Disney", realizado em parceria com a Banda da Sociedade Filarmónica União Arrentelense.',
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/100.JPG",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/101.JPG",
      },
      {
        type: "text",
        content:
          "Realizámos, neste ano, uma atuação de Natal no Centro de Apoio a Idosos Dependentes que se revestiu de um significado muito especial, por nele se encontrar Arminda Galinho, a nossa saudosa D. Arminda, que tantos anos de entrega e carinho dedicou ao Coral.",
      },
      {
        type: "text",
        content:
          'No ano de 2019 comemorámos o 40º aniversário do Coral e este foi um ano marcado por diferentes colaboração e parcerias, que muito enriqueceram a nossa atividade. A convite de David Zaccaria, integrámos o projeto "Por Terras do Zeca", atuando com Zeca Medeiros, Filipa Pais, Maria Anadon e João Afonso. Com Ana Bacalhau, Jorge Benvinda, Sérgio Godinho e Vitorino, integrámos o projeto "Canções de Roda", com uma apresentação na Praça do Giraldo, em Évora, e outra na Festa do Avante.',
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/102.JPG",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/103.JPG",
      },
      {
        type: "text",
        content:
          'A gravação do CD "Enleio", do grupo UXUkalhus, contou com a participação do coro infantil, que também participou na sua apresentação no Teatro Ibérico, em Lisboa. Participámos, ainda, na 5ª edição do Festival Exib Música, que homenageou Zeca Afonso, e na 9ª edição do festival de Música de Setúbal atuámos com Beatriz Nunes. O coro feminino, por sua vez, integrou o concerto "Método", de Rodrigo Leão, no Centro de Artes do Seixal.',
      },
      {
        type: "text",
        content:
          'O Concerto Comemorativo do 40º Aniversário teve como tema "Um Aniversário com… Memórias" e nele revivemos a riquíssima história da nossa instituição, revisitando também o repertório ao longo dos seus 40 anos de existência. Neste concerto homenageámos o maestro Nuno Batalha e o pianista Gonçalo Simões, pedras basilares da estabilidade e qualidade artística nos últimos 20 anos.',
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/104.JPG",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/105.JPG",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/106.JPG",
      },
      {
        type: "text",
        content:
          'Esta importante efeméride foi também assinalada pela exposição "40 Anos, 40 Fotos", que se manteve no foyer do Fórum Municipal Luísa Todi, entre 16 de novembro e 27 de dezembro.',
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/107.JPG",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/108.JPG",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/109.JPG",
      },
      {
        type: "text",
        content:
          "O ano de 2020 foi marcado pela pandemia de Covid 19, que se traduziu numa redução total das atividades presenciais a partir de março.",
      },
      {
        type: "text",
        content:
          "No dia 7 de janeiro o coro infantil e o coro feminino participaram num grandioso Concerto de Ano Novo com a Banda da Força Aérea Portuguesa, no Fórum Municipal Luísa Todi.",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/110.JPG",
      },
      {
        type: "text",
        content:
          "No dia 8 de março, o coro feminino participou no Encontro de Coros Juvenis, que se realizou no Círculo de Cultura Musical Bombarralense.",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/111.JPG",
      },
      {
        type: "text",
        content:
          "O 28º Encontro de Coros infantis e juvenis, previsto para 15 de março, teve de ser cancelado e a partir dessa data foram suspensas todas as atividades. Os ensaios só foram retomados em setembro, diversificando os horários para pequenos grupos, o que não se revelou muito profícuo. O coro feminino, pela sua reduzida dimensão, conseguiu retomar os ensaios em setembro e preparar dois concertos, em outubro e dezembro.",
      },
      {
        type: "text",
        content:
          "Conscientes das repercussões desta situação no futuro da instituição, os corpos sociais e o maestro tentaram encontrar formas de garantir a coesão do grupo, através de atividades online e de atividades presenciais pontuais que, respeitando as normas de distanciamento, permitissem assinalar datas significativas e criar momentos de encontro e partilha. Dessa forma, assinalámos o 25 de Abril, o 1º de Maio, o Dia da Criança, o 41º Aniversário do CIS e o Natal.",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/112.JPG",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/113.JPG",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/114.jpg",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/115.jpg",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/116.JPG",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/117.JPG",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/118.JPG",
      },
      {
        type: "text",
        content:
          'O Coro Feminino TuttiEncantus voltou a integrar o projeto "Método" de Rodrigo Leão, no concerto que assinalou a reabertura do Convento de Jesus, em 10 de outubro.',
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/119.JPG",
      },
      {
        type: "text",
        content:
          'No dia 19 de dezembro, o coro feminino realizou um magnífico concerto de natal, "Nativitate", na Igreja do Convento de Jesus.',
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/120.JPG",
      },
    ],
  },
  {
    years: "2021-Presente",
    content: [
      {
        type: "text",
        content:
          "O ano de 2021 continuou a revestir um carácter atípico, já que continuaram a fazer-se sentir os efeitos da pandemia.",
      },
      {
        type: "text",
        content:
          "O coro infantil sofreu uma quebra significativa no número de elementos, já que não houve admissão de coralistas durante duas épocas. O coro feminino manteve maior estabilidade e a coesão do grupo foi menos afetada.",
      },
      {
        type: "text",
        content:
          "Face a esta situação, foi feita uma campanha de admissão de coralistas, mas o contexto pandémico não permitiu que surtisse o efeito pretendido.",
      },
      {
        type: "text",
        content:
          'Tal como em 2020, não foi possível concretizar a realização do tradicional Encontro de Coros Infantis e Juvenis e o Festival de Música de Setúbal apenas contemplou a realização de quatro concertos intimistas, tendo o coro infantil participado no concerto "Escuta a minha Oração", no dia 20 de maio, na Igreja do Convento de Jesus.',
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/121.JPG",
      },
      {
        type: "text",
        content:
          'Em agosto foi possível reativar o projeto "Canções de Roda", com Ana Bacalhau, Jorge Benvinda, Sérgio Godinho e Vitorino, no Parque Miraflores, em Oeiras.',
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/122.JPG",
      },
      {
        type: "text",
        content:
          "Em setembro, o coro feminino participou num grande evento que assinalou o Dia da Cidade, que foi criado e realizado por OMIRI. O evento decorreu no espaço exterior do Convento de Jesus e registou um enorme êxito. Posteriormente foi editado o livro e o CD ilustrativo.",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/123.JPG",
      },
      {
        type: "text",
        content:
          "O Concerto Comemorativo do 42º Aniversário teve como convidados Íris Maravilha e João Mendonza.",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/124.JPG",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/125.JPG",
      },
      {
        type: "text",
        content:
          "Em 2022, as atividades assumiram maior normalidade e foram retomadas as aulas de Técnica Vocal, a cargo da professora Ana Tomás.",
      },
      {
        type: "text",
        content:
          "Foi possível, após dois anos de interrupção, retomar o Encontro de Coros Infantis e Juvenis que, na sua 28ª edição, acolheu o Coro Happy Kids, de Pegões, o Coro Juvenil do Ateneu Vilafranquense e o Coro Juvenil Euterpe, de Alhandra e o Coro Misto da Beira Interior.",
      },
      {
        type: "text",
        content:
          "A situação de guerra que, entretanto, tivera início na Ucrânia não deixava ninguém indiferente e, face ao sofrimento de tantas crianças e jovens afetadas por essa guerra, o CIS fez reverter toda a receita deste concerto para a Unicef-Ucrânia.",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/126.JPG",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/127.JPG",
      },
      {
        type: "text",
        content:
          'O Festival de Música de Setúbal retomou a sua dinâmica e o coro infantil teve três participações no evento: o Concerto de Abertura, com Pedro Abrunhosa, "Cantar a Vida", no âmbito do projeto Escrita de Canções e "Nesse Impossível Jardim", uma obra em estreia absoluta interpretada pelo Ensemble Juvenil, com a participação da APPACDM.',
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/128.jpg",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/129.jpg",
      },
      {
        type: "text",
        content:
          "Foram retomadas as deslocações e os coros infantil e feminino participaram no 20º Encontro de Coros Infantis e Juvenis, em Lagos.",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/130.JPG",
      },
      {
        type: "text",
        content:
          "Os dois coros participaram também num concerto na Igreja de S. Sebastião, que assinalou a chegadas dos símbolos das Jornadas Mundiais da Juventude àquela paróquia.",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/131.JPG",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/132.JPG",
      },
      {
        type: "text",
        content:
          'O Concerto Comemorativo do 43º Aniversário teve como solistas convidados a soprano Ana Tomás e o tenor Jaime Varela, na interpretação de árias de ópera famosas. O concerto teve também a participação do Cetóbriga Chamber Choir. O momento de cantar os parabéns ao Coral e receber "O Coralíssimo", no final do concerto, pode voltar a ser um momento de alegria e reencontro.',
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/133.JPG",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/134.JPG",
      },
      {
        type: "text",
        content:
          "Em 2023, o Coral continuou a registar dificuldades a nível do número de coralistas do coro infantil, embora se tenha registado a entrada de nove novos elementos. O coro feminino, à semelhança dos últimos anos, continuou a constituir um importante reforço nas atuações conjuntas.",
      },
      {
        type: "text",
        content:
          "As atividades adquiriram um carácter de maior normalidade e já foi possível voltar a realizar o tradicional lanche de confraternização, após o 29º Encontro de Coros Infantis e Juvenis, que contou com a participação do Vox Feminis, Coro Feminino do CCMB (Círculo de Cultura Musical Bombarralense) e do Coral Atlântico Juvenil, de Sines. Este concerto realizou-se a 19 de março, Dia do Pai, pelo que contou com a colaboração de alguns pais, que se juntaram aos filhos em palco, para interpretar um tema. Teve, ainda, a participação especial do grupo Trovas & Cantigas, um grupo de música tradicional portuguesa que, em janeiro de 2023, começou a realizar os seus ensaios nas instalações do Coral, o que possibilitou um salutar e desejável encontro de gerações.",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/135.JPG",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/136.JPG",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/137.jpg",
      },
      {
        type: "text",
        content:
          "O coro feminino participou, pela primeira vez, no Festival Internacional de Música de Setúbal, acompanhando Camané em alguns temas, no Concerto de Abertura do Festival.",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/138.jpg",
      },
      {
        type: "text",
        content:
          "O coro infantil teve duas participações no Festival Internacional de Música de Setúbal, uma com Bárbara Tinoco e outra com Júlio Resende e o Fado Jazz Ensemble, que teve a coralista Carolina Mendes como solista.",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/139.jpg",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/140.jpg",
      },
      {
        type: "text",
        content:
          'O coro feminino realizou também um concerto na Igreja do Convento de Jesus, participou no concerto "ComTradições", no Fórum Municipal Luísa Todi, um projeto criado e desenvolvido por OMIRI (Vasco Ribeiro Casais) e ainda participou no espetáculo que assinalou o 20º Aniversário da UNISETI (Universidade Sénior de Setúbal).',
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/141.JPG",
      },
      {
        type: "text",
        content:
          "No Concerto Comemorativo do 44º Aniversário ficou patente a importância que atribuímos às parcerias com outros agrupamentos. Para além dos nossos dois coros, contámos com a participação do Coral Luísa Todi, do grupo South River Jazz Band e do grupo Trovas & Cantigas.",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/142.JPG",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/143.JPG",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/144.JPG",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/145.JPG",
      },
      {
        type: "text",
        content:
          "O ano de 2024 foi marcado pelas Comemorações dos 50 Anos do 25 de Abril e o CIS não se alheou destas comemorações, tendo participado no concerto que assinalou essa importante efeméride no dia 24 de abril, no Largo José Afonso, e no dia 27 de abril atuou no Fórum Municipal Luísa Todi, na cerimónia que distinguiu as vidas dos que trabalharam em prol da comunidade ao longo dos últimos 50 anos.",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/146.jpg",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/147.jpg",
      },
      {
        type: "text",
        content:
          'No Festival Internacional de Música de Setúbal, o coro infantil participou no concerto "Zeca Tocado por Miúdos", no Fórum Municipal Luísa Todi, e no concerto "Escutar a Diferença", nos Claustros do Convento de Jesus.',
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/148.jpg",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/149.jpg",
      },
      {
        type: "text",
        content:
          'O coro feminino, por sua vez, participou no concerto "A Pomba da Paz é Cheia de Revoluções Futuras", no Fórum Municipal Luísa Todi.',
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/150.jpg",
      },
      {
        type: "text",
        content:
          "Ainda no contexto destas comemorações, o coro feminino atuou na inauguração do memorial a Zeca Afonso.",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/151.jpg",
      },
      {
        type: "text",
        content:
          "O coro feminino continuou a ter um importante papel no reforço do coro infantil e manteve o seu próprio programa autónomo de atuações, pautado sempre por grande qualidade. No dia 2 de março, atuou na Igreja de Santo António, em Aires, com o Coral Loureiros, no dia 18 de outubro, atuou na Igreja do Convento de Jesus, com o Coral Luísa Todi. Neste concerto, as coralistas estrearam a nova indumentária, confecionada pela ex-coralista Lara Jean Torrão, que faz jus à afirmação da identidade do coro.",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/152.jpg",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/153.jpg",
      },
      {
        type: "text",
        content:
          "O coro infantil, ainda que não tivesse o número desejável de coralistas, foi consolidando o seu caminho e retomando atividades que todos apreciam, como os intercâmbios com outros coros. Em março, recebemos, no nosso 30º Encontro de Coros Infantis e Juvenis, o Coro Infantojuvenil de Lagos e o Coro do Carmo, de Beja, e em abril deslocámo-nos a Beja, para participar no 2º Encontro de Coros Juvenis de Beja.",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/154.jpg",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/155.JPG",
      },
      {
        type: "text",
        content:
          "Dada a dificuldade em reforçar o número de coralistas, foi encetada uma parceria com a Escola Básica Nº 3 (Montalvão) do Agrupamento de Escolas Bocage, visando esse objetivo. Esta parceria teve início em outubro de 2024, tendo como público alvo os alunos dos 3º e 4º anos. No âmbito do projeto 'Bora Lá Cantar!, estes alunos passaram a ter uma atividade semanal de canto, dinamizada por Mafalda Louro e orientada pelo maestro Nuno Batalha, prevendo-se que essa atividade se vá cruzando ao longo do ano letivo com diferentes atividades do Coral Infantil de Setúbal e possa, assim, motivar mais crianças para a sua participação no nosso coro.",
      },
      {
        type: "text",
        content:
          "Mafalda Louro assumiu em 2024 as funções de professora de Técnica Vocal, passando a integrar a equipa constituída pelo maestro Nuno Batalha e pelo pianista Gonçalo Simões.",
      },
      {
        type: "text",
        content:
          'Os 45 anos de existência do Coral Infantil de Setúbal foram assinalados com um projeto diferente, correspondendo a um convite do músico Rogério Charraz para interpretar a obra "O Coreto". Neste projeto participaram também o coro feminino e os alunos da Escola Básica Nº 3. O concerto teve lugar no Fórum Municipal Luísa Todi, no dia 30 de novembro, e registou um enorme êxito.',
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/156.JPG",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/157.JPG",
      },
      {
        type: "text",
        content:
          "Os alunos da escola participaram também nas atuações de Natal que se realizaram na Praça do Bocage e na Biblioteca Pública Municipal de Setúbal, e várias crianças quiseram, entretanto, integrar o coro infantil.",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/158.JPG",
      },
      {
        type: "image",
        url: "https://cdn.coralinfantilsetubal.com/159.JPG",
      },
    ],
  },
];

const TimelineSection = ({ period }: { period: TimelinePeriod }) => (
  <div className="flex w-full flex-col items-start justify-start gap-6 border-[rgba(55,50,47,0.12)] border-b py-12 md:flex-row md:gap-12 md:py-16">
    {/* Year Badge - Left Side */}
    <div className="flex w-full items-start justify-start md:w-auto md:min-w-[160px]">
      <div className="flex items-center justify-center rounded-full bg-[#0D4A85] px-6 py-2 shadow-[0px_0px_0px_2.5px_rgba(255,255,255,0.08)_inset]">
        <div className="font-sans font-semibold text-base text-white leading-6">
          {period.years}
        </div>
      </div>
    </div>

    {/* Content - Right Side */}
    <div className="flex flex-1 flex-col gap-4">
      {period.content.map((item, idx) => {
        if (item.type === "text") {
          return (
            <p
              className="font-normal font-sans text-[#605A57] text-sm leading-7 sm:text-base"
              key={`${period.years}-content-${idx}`}
            >
              {item.content}
            </p>
          );
        }

        // Image item
        return (
          <div
            className="flex flex-col gap-2 overflow-hidden rounded-lg"
            key={`${period.years}-content-${idx}`}
          >
            <div className="relative h-[350px] w-full overflow-hidden rounded-lg shadow-[0px_0px_0px_0.9056603908538818px_rgba(0,0,0,0.08)] sm:h-[400px]">
              <Image
                alt={item.caption || `Imagem ${idx}`}
                className="h-full w-full object-contain"
                fill
                src={item.url}
              />
            </div>
            {item.caption && (
              <p className="text-center font-normal font-sans text-[#605A57] text-xs leading-5 sm:text-sm">
                {item.caption}
              </p>
            )}
          </div>
        );
      })}
    </div>
  </div>
);

const Page = () => (
  <div className="relative flex min-h-screen w-full flex-col items-center justify-start overflow-x-hidden bg-[#F7F5F3]">
    <div className="relative flex w-full flex-col items-center justify-start">
      {/* Main container with proper margins */}
      <div className="relative flex min-h-screen w-full max-w-none flex-col items-start justify-start px-4 sm:px-6 md:px-8 lg:w-[1060px] lg:max-w-[1060px] lg:px-0">
        {/* Left vertical line */}
        <div className="absolute top-0 left-4 z-0 h-full w-[1px] bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] sm:left-6 md:left-8 lg:left-0" />

        {/* Right vertical line */}
        <div className="absolute top-0 right-4 z-0 h-full w-[1px] bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] sm:right-6 md:right-8 lg:right-0" />

        <div className="relative z-10 flex flex-col items-center justify-center gap-4 self-stretch overflow-hidden pt-[9px] sm:gap-6 md:gap-8 lg:gap-[66px]">
          <Navigation />

          <div className="flex w-full flex-col items-center justify-start px-2 pt-16 pr-0 pb-8 pl-0 sm:px-4 sm:pt-20 sm:pr-0 sm:pb-12 sm:pl-0 md:px-8 md:pt-24 md:pb-16 lg:px-0 lg:pt-[125px]">
            {/* Header Section */}
            <div className="flex w-full flex-col items-center justify-center gap-6 border-[rgba(55,50,47,0.12)] border-b px-4 py-12 sm:px-6 sm:py-16 md:px-12 md:py-20">
              <div className="flex w-full max-w-[800px] flex-col items-center justify-start gap-4">
                <Badge
                  icon={<HistoryIcon className="size-3.5" />}
                  text="Arquivo"
                />
                <div className="flex w-full flex-col justify-center text-center font-sans font-semibold text-3xl text-[#49423D] leading-tight tracking-tight sm:text-4xl md:text-5xl md:leading-[60px]">
                  História do Coral Infantil de Setúbal
                </div>

                {/* Opening Quote */}
                <div className="mt-6 flex w-full max-w-[700px] flex-col items-center gap-4 rounded-lg bg-[#0D4A85]/5 px-6 py-8 sm:px-8 sm:py-10">
                  <div className="text-center font-normal font-serif text-[#0D4A85] text-lg italic leading-8 sm:text-xl sm:leading-9 md:text-2xl md:leading-10">
                    «Oiço vozes que ecoam no meu espírito como as mãos que me
                    acariciam o rosto. São estas mãos que constroem o futuro e é
                    nelas que confio o meu sorriso.»
                  </div>
                </div>

                <div className="mt-4 self-stretch text-center font-normal font-sans text-[#605A57] text-sm leading-6 sm:text-base sm:leading-7">
                  Uma viagem através de mais de quatro décadas de música,
                  <br className="hidden sm:block" />
                  amizade e crescimento artístico.
                </div>
              </div>
            </div>

            {/* Timeline Sections */}
            <div className="flex w-full flex-col items-start justify-start px-4 sm:px-6 md:px-12">
              {TIMELINE_DATA.map((period) => (
                <TimelineSection key={period.years} period={period} />
              ))}
            </div>

            <Footer />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Page;
