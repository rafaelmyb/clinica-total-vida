/** Institutional copy — informative tone, emphasis on care quality and team. */

export const clinicContact = {
  phoneDisplay: "(69) 3215-4275",
  phoneHref: "tel:+556932154275",
  instagramHref: "https://www.instagram.com/clinicatotalvida/",
  addressLines: [
    "Rua Uruguai, nº 2486, bairro Embratel",
    "Porto Velho — RO, CEP 76820-856",
  ],
  hoursWeekdays: "Segunda a sexta-feira: 08:00 às 21:00",
  weekendNote:
    "Atendimento aos finais de semana: confirme diretamente com a recepção, pois pode variar conforme a agenda da equipe.",
} as const;

export type SpecialtyItem = {
  id: string;
  title: string;
  description: string;
  categoryId: string;
};

export const specialtyCategories = [
  {
    id: "mental",
    label: "Saúde mental e emocional",
    blurb:
      "Linhas de cuidado que integram avaliação, escuta e acompanhamento — com linguagem clara e respeito ao seu ritmo.",
  },
  {
    id: "botox",
    label: "Botox e preenchimento facial",
    blurb:
      "Injeções de toxina botulínica e material de preenchimento para melhorar a aparência facial, com avaliação e acompanhamento especializado.",
  },
  {
    id: "corpo",
    label: "Corpo, hábitos e rotina",
    blurb:
      "Nutrição e terapia ocupacional como pontes entre orientação profissional e a vida cotidiana.",
  },
  {
    id: "relacoes",
    label: "Relações e família",
    blurb:
      "Espaços para fortalecer vínculos, diálogo e mediação quando o cuidado envolve mais de uma pessoa.",
  },
] as const;

export const specialtyItems: SpecialtyItem[] = [
  {
    id: "psiquiatria",
    categoryId: "mental",
    title: "Psiquiatria",
    description:
      "Avaliação clínica e acompanhamento em saúde mental com plano individualizado, integrado ao restante da equipe quando fizer sentido ao seu caso.",
  },
  {
    id: "psicologia",
    categoryId: "mental",
    title: "Psicologia",
    description:
      "Escuta acolhedora e intervenções alinhadas às suas metas — seja para atravessar um momento difícil ou para construir recursos emocionais duradouros.",
  },
  {
    id: "psicanalise",
    categoryId: "mental",
    title: "Psicanálise",
    description:
      "Um espaço de profundidade para compreender padrões, relações e subjetividade, com tempo e continuidade.",
  },
  {
    id: "botox",
    categoryId: "botox",
    title: "Botox",
    description:
      "Injeção de toxina botulínica para redução de rugas e linhas de expressão, com avaliação e acompanhamento especializado.",
  },
  {
    id: "preenchimento-labial",
    categoryId: "botox",
    title: "Preenchimento labial",
    description:
      "Injeção de material de preenchimento para melhorar a aparência facial, com avaliação e acompanhamento especializado.",
  },
  {
    id: "fios-pdo",
    categoryId: "botox",
    title: "Fios PDO",
    description:
      "Injeção de fios de polidioxanona para melhorar a aparência facial, com avaliação e acompanhamento especializado. É uma técnica que utiliza fios de polidioxanona para elevar e moldar as estruturas faciais, criando uma aparência mais jovem e natural.",
  },
  {
    id: "nutricao",
    categoryId: "corpo",
    title: "Nutrição",
    description:
      "Orientação alimentar fundamentada em evidências e alinhada aos seus hábitos, preferências e metas de saúde.",
  },
  {
    id: "nutrologia",
    categoryId: "corpo",
    title: "Nutrologia",
    description:
      "Avaliação e acompanhamento do estado nutricional, com orientação especializada em casos de desnutrição, obesidade e doenças crônicas.",
  },
  {
    id: "acompanhamento-fisico",
    categoryId: "corpo",
    title: "Acompanhamento físico",
    description:
      "Avaliação e acompanhamento do estado físico, com orientação especializada em casos de doenças crônicas, lesões ou desequilíbrios.",
  },
  {
    id: "depressao",
    categoryId: "mental",
    title: "Depressão",
    description:
      "Acompanhamento em quadros de humor baixo e desânimo, com equipe multidisciplinar e plano compartilhado quando necessário.",
  },
  {
    id: "ansiedade",
    categoryId: "mental",
    title: "Ansiedade",
    description:
      "Suporte em preocupação excessiva, tensão e sintomas que interferem no sono, trabalho ou relações — com estratégias práticas e acolhimento.",
  },
  {
    id: "casais",
    categoryId: "relacoes",
    title: "Terapia de casais",
    description:
      "Espaço para fortalecer diálogo, vínculo e resolução de conflitos, com foco no que vocês desejam construir juntos.",
  },
  {
    id: "familia",
    categoryId: "relacoes",
    title: "Terapia familiar",
    description:
      "Mediação e suporte quando a família busca alinhar comunicação, limites e cuidado mútuo em momentos de transição ou tensão.",
  },
];

export const heroCopy = {
  badge: "Total Vida · cuidado integral",
  titleBefore: "Saúde mental e física ",
  titleHighlight: "com propósito e acolhimento.",
  lead: "A Clínica Total Vida reúne especialidades que conversam entre si — para que você não precise fragmentar o que sente. Aqui, o cuidado é pensado como trajetória: escuta, planejamento e continuidade, com profissionais alinhados à mesma ética de respeito.",
  pills: [
    { label: "Equipe multidisciplinar", hint: "várias linhas de cuidado" },
    { label: "Horário estendido em dias úteis", hint: "08h–21h" },
    { label: "Estrutura especializada", hint: "Porto Velho — RO" },
  ],
  footnote:
    "Informações neste site são institucionais; o plano terapêutico ou médico é sempre definido em consulta.",
  instagramCta: "Conheça-nos",
} as const;

export const integratedCopy = {
  title: "Uma proposta que integra o que você vive",
  body: [
    "Acreditamos que bem-estar não se resume a um sintoma isolado. Corpo, mente, relações e rotina se influenciam — e por isso valorizamos uma visão articulada, na qual psiquiatria, psicologia, terapias e nutrição podem se complementar quando há indicação clínica.",
    "Nosso objetivo é claro: oferecer um ambiente onde você se sinta ouvido, informado e parte das decisões sobre o próprio cuidado, sem pressa desnecessária e sem promessas vazias.",
  ],
} as const;

export const journeySteps = [
  {
    id: "1",
    title: "Primeiro contato e acolhimento",
    short:
      "Você é recebido com clareza sobre horários, especialidades e próximos passos — para reduzir dúvidas antes mesmo da primeira consulta.",
    detail:
      "Na recepção e no primeiro atendimento, priorizamos explicar como funciona o fluxo na clínica, quais profissionais podem integrar seu caso e como agendar de forma compatível com sua rotina. O objetivo é que você chegue ao consultório já com expectativas alinhadas à realidade do cuidado em saúde mental e física.",
    bullets: ["Informação objetiva", "Respeito ao seu tempo"],
    accent: "blue" as const,
    differential: "Vamos te receber com clareza e respeito",
  },
  {
    id: "2",
    title: "Avaliação e plano compartilhado",
    short:
      "Cada especialidade constrói uma compreensão do seu contexto — e, quando faz sentido, os profissionais dialogam para um plano coerente.",
    detail:
      "O plano terapêutico ou de acompanhamento é construído com você: metas, frequência e possíveis combinações de cuidados são discutidos de forma transparente. Quando há indicação de integração entre áreas, buscamos continuidade e comunicação responsável entre a equipe.",
    bullets: ["Decisões explicadas", "Integração quando indicada"],
    accent: "amber" as const,
    differential: "Construímos um plano de cuidado com você",
  },
  {
    id: "3",
    title: "Continuidade e ajustes",
    short:
      "O cuidado acompanha mudanças na sua vida: revisões, encaminhamentos e ajustes são parte natural do processo.",
    detail:
      "Saúde mental e hábitos evoluem; por isso valorizamos retornos, reavaliações e honestidade sobre o que está funcionando ou precisa ser rediscutido. A clínica existe para sustentar uma relação de longo prazo com o paciente, não apenas encontros isolados.",
    bullets: ["Acompanhamento no tempo", "Espaço para reavaliar"],
    accent: "brand" as const,
    differential: "Continuidade e ajustes são parte natural do processo",
  },
] as const;

export const careModelAccordion = [
  {
    id: "equipe",
    title: "Equipe e papéis bem definidos",
    summary:
      "Médicos, psicólogos e demais profissionais atuam dentro de suas competências — com encaminhamento ético quando outra especialidade agrega ao seu cuidado.",
    points: [
      "Linha clara entre avaliação médica, psicoterapia e outras terapias.",
      "Respeito à privacidade e à confidencialidade em cada atendimento.",
    ],
  },
  {
    id: "visao",
    title: "Visão de conjunto, sem perder o individual",
    summary:
      "O painel de cuidado que você enxerga é o seu: priorizamos que cada pessoa entenda o papel de cada profissional no seu processo.",
    points: [
      "Coordenação quando há mais de um especialista envolvido.",
      "Comunicação objetiva sobre objetivos e prazos realistas.",
    ],
  },
  {
    id: "especialidades",
    title: "Múltiplas especialidades sob o mesmo teto",
    summary:
      "Da saúde mental a suporte nutricional e terapêutico, a clínica concentra linhas de atenção que muitas vezes se complementam no dia a dia do paciente.",
    points: [
      "Menos deslocamento entre serviços descoordenados.",
      "Identidade única de acolhimento e padrão de atendimento.",
    ],
  },
] as const;

/** Left column intro above the care accordion (balances the photo column on large screens). */
export const careAccordionColumnIntro = {
  eyebrow: "Na prática",
  title: "Um lugar pensado para o cuidado inteiro",
  paragraphs: [
    "A recepção e as salas compartilham a mesma identidade: acolhimento claro, privacidade e continuidade. Os três pilares abaixo traduzem como profissionais e instituição se combinam — abra cada um para ver o que isso significa no seu dia a dia.",
  ],
} as const;

export const valuesDetailed = [
  {
    title: "Ética e transparência",
    body: "O cuidado em saúde exige honestidade sobre limites, indicações e o que a evidência permite esperar. Nossa postura é explicar o raciocínio clínico de forma acessível, para que você participe das escolhas.",
  },
  {
    title: "Acolhimento real, não performático",
    body: "Ambiente físico e humano pensados para reduzir o desconforto de buscar ajuda — desde a recepção até a sala de consulta. Respeito à diversidade de histórias, ritmos e identidades.",
  },
  {
    title: "Raízes em Porto Velho",
    body: "Estamos na Rua Uruguai, bairro Embratel, com horário que tenta dialogar com quem trabalha ou estuda durante o dia. Queremos ser referência local de cuidado sério e contínuo.",
  },
] as const;

export const contactSectionCopy = {
  title: "Onde estamos e como falar com a clínica",
  intro:
    "Para dúvidas sobre especialidades, agenda ou documentação, o canal principal é o telefone da recepção nos horários informados. O endereço abaixo corresponde ao atendimento presencial.",
  noteEmail:
    "E-mail e WhatsApp institucionais podem ser acrescentados quando a clínica definir canais oficiais — até lá, use o telefone para evitar informações desencontradas.",
} as const;

export const teamTeaserCopy = {
  title: "Profissionais e perfis na clínica",
  lead: "Cada membro da equipe traz formação e experiência específicas; no site, você encontra páginas dedicadas com mais contexto sobre a atuação do Dr. Potthyer Vieira e da Dra. Quiele Vieira.",
} as const;

/** Shared alt for highlight photos (illustrative, not individual bios). */
export const homeTeamSpotlightImageAlt =
  "Referência visual da equipe e do ambiente da clínica";

/** Intro copy above the team highlight strip (photos are illustrative, not biographies). */
export const homeTeamSectionIntro = {
  eyebrow: "Equipe multidisciplinar",
  title: "Profissionais preparados e altamente especializados",
  lead: "Na Clínica Total Vida, o cuidado se apoia em profissionais de diferentes especialidades — todos alinhados aos mesmos princípios de acolhimento, ética e diálogo entre áreas quando o seu caso pede integração.",
} as const;

/** Short text blocks beside highlight photos; copy stays generic (team), not individual bios. */
export const homeTeamSpotlights = [
  {
    // href: "/doutor-potthyer-vieira" as const,
    imageBadge: "Destaque",
    title: "Qualidade e responsabilidade técnica",
    description:
      "Valorizamos profissionais com formação sólida, atualização contínua e postura ética. Cada especialidade atua dentro de suas competências, com encaminhamento claro quando outra área pode somar ao seu cuidado.",
  },
  {
    // href: "/doutora-quiele-vieira" as const,
    imageBadge: "Destaque",
    title: "Acolhimento e trabalho em conjunto",
    description:
      "Da recepção às salas, buscamos consistência no atendimento: menos ruído entre serviços e mais diálogo entre quem acompanha você. O time é treinado para ouvir, explicar e respeitar o ritmo de cada pessoa.",
  },
] as const;
