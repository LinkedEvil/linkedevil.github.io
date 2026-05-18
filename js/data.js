/**
 * data.js — fonte de dados estáticos para o LinkedEvil.
 *
 * Estrutura espelhada em data/*.json para portabilidade com backend.
 * Quando o backend estiver pronto, substitua este arquivo por um loader
 * que faça fetch() nos endpoints da API e preencha window.AppData.
 */

window.AppData = {

  /* ---- Usuários ---- */
  users: {
    "lucifer_morningstar": {
      id: "lucifer_morningstar",
      name: "Lucifer Morningstar",
      initials: "LM",
      headline: "CEO & Fundador @ EvilCorp | Senhor do Submundo | Especialista em Pactos Corporativos",
      location: "Inferno, Brasil (Remoto)",
      avatarColor: "#ff1a1a",
      bannerGradient: "linear-gradient(135deg, #1a0000, #4a0000, #2a0000)",
      connections: 666,
      connectionText: "666 conexões",
      summary: "Com mais de 6.000 anos de experiência em liderança e gestão de almas, fundei a EvilCorp com a missão de transformar o mercado corporativo em um verdadeiro inferno (de produtividade). Especialista em pactos de alto nível, negociações com entidades sobrenaturais e gestão de equipes demoníacas.",
      openTo: "Buscando novos pactos e aquisições hostis de empresas concorrentes.",
      experience: [
        { role: "CEO & Fundador",             company: "EvilCorp",          logo: "😈", date: "Jan 666 a.C. - Presente · 6.000 anos",        desc: "Fundei e lidero a maior corporação do submundo. Responsável por estratégias de aquisição de almas, gestão de 666.000 funcionários demoníacos." },
        { role: "Consultor Sênior de Maldade",company: "Underworld Inc.",   logo: "🔥", date: "Jan 300 a.C. - Dez 665 a.C. · 365 anos",      desc: "Estratégias de corrupção corporativa que aumentaram a receita em 666%." },
        { role: "Gerente de Tentação",        company: "Garden of Eden Ltd.",logo: "🍎", date: "Jan 10.000 a.C. - Dez 301 a.C. · 9.700 anos", desc: "Gerenciei campanhas de tentação em larga escala. Caso de sucesso: Adão e Eva." }
      ],
      education: [
        { school: "Universidade do Submundo",    logo: "🎓", degree: "MBA em Maldade Corporativa", date: "666 a.C. - 665 a.C." },
        { school: "Academia Celestial (expulso)", logo: "👼", degree: "Bacharel em Angelologia",    date: "10.000 a.C. - 9.999 a.C." }
      ],
      skills: ["Liderança Sombria","Negociação de Pactos","Gestão de Almas","Corrupção Corporativa","Maldade Estratégica","Dominação de Mercado","Gestão de Crise Infernal","Oratória Demoníaca"]
    },
    "hades_underworld": {
      id: "hades_underworld",
      name: "Hades Underworld",
      initials: "HU",
      headline: "Diretor de Operações @ Underworld Inc. | Deus do Submundo | M&A Specialist",
      location: "Tártaro, Grécia",
      avatarColor: "#6a0dad",
      bannerGradient: "linear-gradient(135deg, #2a0040, #4a0060)",
      connections: 543, connectionText: "543 conexões",
      summary: "Administrador do submundo grego com vasta experiência em gestão de recursos sobrenaturais.",
      experience: [{ role: "COO - Diretor de Operações", company: "Underworld Inc.", logo: "🔥", date: "Jan 800 a.C. - Presente · 2.800 anos", desc: "Gerencio operações diárias do submundo grego. Supervisiono Cerberus e toda infraestrutura de processamento de almas." }],
      education: [{ school: "Olimpo University", logo: "🎓", degree: "Mestrado em Administração de Reinos", date: "900 a.C. - 800 a.C." }],
      skills: ["Gestão de Reinos","M&A Sobrenatural","Liderança Divina","Estratégia de Expansão"]
    },
    "medusa_corp": {
      id: "medusa_corp",
      name: "Medusa Górgona",
      initials: "MG",
      headline: "VP de Recursos Humanos @ EvilCorp | Transformando pessoas em pedra (e em talentos)",
      location: "Atenas, Grécia (Hybrid)",
      avatarColor: "#2e8b57",
      bannerGradient: "linear-gradient(135deg, #002a00, #004a00)",
      connections: 321, connectionText: "321 conexões",
      summary: "Especialista em RH com foco em retenção de talentos (literalmente - ninguém sai daqui).",
      experience: [{ role: "VP de Recursos Humanos", company: "EvilCorp", logo: "😈", date: "Mar 500 a.C. - Presente · 2.500 anos", desc: "Taxa de retenção: 100% (literalmente transformo quem tenta sair em estátua)." }],
      education: [{ school: "Templo de Atena (antes do incidente)", logo: "🎓", degree: "Bacharel em Gestão de Pessoas", date: "600 a.C. - 500 a.C." }],
      skills: ["Gestão de Pessoas","Retenção de Talentos","Petrificação Corporativa","Recrutamento Sombrio"]
    },
    "dracula_night": {
      id: "dracula_night",
      name: "Drácula Night",
      initials: "DN",
      headline: "CFO @ EvilCorp | Mestre das Finanças Noturnas | Blood Accounting Expert",
      location: "Transilvânia, Romênia",
      avatarColor: "#8b0000",
      bannerGradient: "linear-gradient(135deg, #1a0000, #3a0000)",
      connections: 444, connectionText: "444 conexões",
      summary: "Diretor financeiro com 500 anos de experiência em gestão de recursos.",
      experience: [{ role: "CFO - Diretor Financeiro", company: "EvilCorp", logo: "😈", date: "Jan 1500 - Presente · 525 anos", desc: "Especialista em paraísos fiscais sobrenaturais e otimização de fluxo de almas." }],
      education: [{ school: "Castelo University", logo: "🎓", degree: "Mestrado em Finanças Sombrias", date: "1400 - 1450" }],
      skills: ["Finanças Corporativas","Contabilidade Criativa","Gestão de Risco","Otimização Fiscal"]
    },
    "loki_trickster": {
      id: "loki_trickster",
      name: "Loki Trickster",
      initials: "LT",
      headline: "Head de Marketing @ EvilCorp | Deus da Trapaça | Growth Hacker",
      location: "Asgard / Midgard (Nômade)",
      avatarColor: "#228b22",
      bannerGradient: "linear-gradient(135deg, #001a00, #003a00)",
      connections: 890, connectionText: "890 conexões",
      summary: "Especialista em marketing enganoso e growth hacking.",
      experience: [{ role: "Head de Marketing", company: "EvilCorp", logo: "😈", date: "Jan 1000 - Presente · 1.025 anos", desc: "Campanhas virais que já enganaram bilhões." }],
      education: [{ school: "Asgard Academy", logo: "🎓", degree: "Bacharel em Artes da Trapaça", date: "800 - 900" }],
      skills: ["Growth Hacking","Marketing Viral","Engenharia Social","Branding Sombrio"]
    },
    "lilith_first": {
      id: "lilith_first",
      name: "Lilith First",
      initials: "LF",
      headline: "CTO @ EvilCorp | Primeira Mulher Rebelde | Tech Lead do Inferno",
      location: "Mar Morto, Israel",
      avatarColor: "#800080",
      bannerGradient: "linear-gradient(135deg, #2a002a, #4a004a)",
      connections: 777, connectionText: "777 conexões",
      summary: "Pioneira em tecnologia demoníaca. Desenvolvi o primeiro sistema operacional do inferno (InfernoOS).",
      experience: [{ role: "CTO - Diretora de Tecnologia", company: "EvilCorp", logo: "😈", date: "Jan 3000 a.C. - Presente · 5.000 anos", desc: "Desenvolvi InfernoOS, o sistema operacional mais malicioso já criado." }],
      education: [{ school: "Eden Tech Institute", logo: "🎓", degree: "PhD em Tecnologia Sombria", date: "4000 a.C. - 3000 a.C." }],
      skills: ["Arquitetura de Sistemas","InfernoOS","Machine Learning Sombrio","DevOps Infernal"]
    },
    "cerberus_security": {
      id: "cerberus_security",
      name: "Cerberus Security",
      initials: "CS",
      headline: "Head de Segurança @ EvilCorp | 3 cabeças são melhor que 1 | Cybersecurity Expert",
      location: "Portões do Inferno",
      avatarColor: "#4a4a4a",
      bannerGradient: "linear-gradient(135deg, #1a1a1a, #3a3a3a)",
      connections: 222, connectionText: "222 conexões",
      summary: "Responsável pela segurança física e digital de toda a EvilCorp.",
      experience: [{ role: "Head de Segurança", company: "EvilCorp", logo: "😈", date: "Jan 700 a.C. - Presente · 2.700 anos", desc: "Zero incidentes de segurança em 2.700 anos." }],
      education: [{ school: "Underworld Security Academy", logo: "🎓", degree: "Mestrado em Segurança Sobrenatural", date: "800 a.C. - 700 a.C." }],
      skills: ["Segurança Corporativa","Cybersecurity","Gestão de Crise","Monitoramento 360°"]
    }
  },

  /* ---- Posts ---- */
  posts: [
    { id: 1, author: "lucifer_morningstar", time: "2h",  image: "🔥 EVILCORP - 666B ALMAS 🔥",           reactions: {"😈":2456,"🔥":1890,"👏":567},  shares: 342,  comments: [{author:"hades_underworld",text:"Parabéns, parceiro! O submundo grego está orgulhoso! 🔥"},{author:"medusa_corp",text:"Minha equipe de RH está trabalhando em dobro para bater essa meta! 💪"}],
      content: "📢 Anúncio importante: A EvilCorp acaba de ultrapassar a marca de 666 bilhões de almas processadas! 🎉\n\nQuero agradecer a todos os nossos funcionários demoníacos que trabalharam incansavelmente (literalmente, é o inferno) para alcançar este marco.\n\nPróximo objetivo: 1 trilhão de almas até o final do ano. Quem topa o desafio? 😈\n\n#EvilCorp #LiderançaSombria #MetasImpossíveis #666" },
    { id: 2, author: "loki_trickster",      time: "4h",  image: "📊 CAMPANHA: 100% DE CONVERSÃO 📊",     reactions: {"😂":3421,"😈":2100,"🎯":890},  shares: 1567, comments: [{author:"lucifer_morningstar",text:"Excelente trabalho, Loki! Essa é a atitude que esperamos! 😈"}],
      content: "Acabei de lançar uma campanha de marketing que enganou 3 deuses nórdicos e 5 mortais. Taxa de conversão: 100%. 🎯\n\n\"A melhor trapaça é aquela que a vítima agradece.\" - Loki Trickster, 2025\n\n#Marketing #GrowthHacking #TrapaçaProfissional" },
    { id: 3, author: "medusa_corp",         time: "6h",  image: null,                                      reactions: {"😂":5678,"🪨":2345,"😈":1234}, shares: 2345, comments: [{author:"lilith_first",text:"Medusa, você é genial! 💪"},{author:"dracula_night",text:"Ninguém sai daqui vivo... digo, da empresa. 😅"}],
      content: "Dica de RH para líderes:\n\nSe seus funcionários estão pensando em sair da empresa... TRANSFORME-OS EM PEDRA. 🪨\n\nNa EvilCorp, nossa taxa de retenção é de 100%. Coincidência? Não acho. 😏\n\n#RH #RetençãoDeTalentos #PetrificaçãoCorporativa" },
    { id: 4, author: "lilith_first",        time: "8h",  image: "💻 INFERNO OS 6.6.6 - DOWNLOAD AGORA 💻", reactions: {"🔥":4567,"😈":3456,"💻":1234}, shares: 4567, comments: [{author:"cerberus_security",text:"O firewall é incrível! Protege contra 3 cabeças de ataques simultâneos! 🐕"}],
      content: "🚀 Lançamento do InfernoOS 6.6.6!\n\n✅ Firewall demoníaco de última geração\n✅ Processamento de 666 milhões de transações por segundo\n✅ IA maligna para otimização de workflows\n\nDownload gratuito para funcionários da EvilCorp. Para outros... o preço é sua alma. 😈\n\n#InfernoOS #TecnologiaSombria #Inovação" },
    { id: 5, author: "dracula_night",       time: "12h", image: null,                                      reactions: {"💰":2345,"😈":1890,"🦇":567},  shares: 890,  comments: [],
      content: "💰 Dica financeira do dia:\n\nSe você quer crescer financeiramente, precisa estar disposto a sugar... recursos. 💉\n\nNosso cash flow já transcendeu a mortalidade. E olha que eu sou especialista em coisas que não morrem. 🦇\n\n#Finanças #CFO #BloodAccounting" },
    { id: 6, author: "hades_underworld",    time: "1d",  image: null,                                      reactions: {"🔥":3456,"👏":2345,"😈":1234}, shares: 1234, comments: [{author:"lucifer_morningstar",text:"Hades, você é um verdadeiro líder! 🔥"},{author:"loki_trickster",text:"Até eu respeito o trabalho dele. E eu não respeito ninguém. 😅"}],
      content: "Reflexão de domingo:\n\nGerenciar o submundo não é fácil. São milhões de almas, Cerberus para alimentar (3x a ração), e os juízes dos mortos sempre reclamando da carga horária.\n\nTodo grande líder começou governando um pequeno pedaço do inferno.\n\n#Liderança #Submundo #Gestão" }
  ],

  /* ---- Vagas ---- */
  jobs: [
    { id: 1, title: "Gerente de Aquisição de Almas",   company: "EvilCorp", location: "Inferno, Brasil (Remoto)",        time: "há 2 horas", match: "95%", skills: ["Negociação","Pactos","Vendas"],                   logo: "😈" },
    { id: 2, title: "Desenvolvedor InfernoOS Sênior",  company: "EvilCorp", location: "Inferno, Brasil (Híbrido)",       time: "há 5 horas", match: "88%", skills: ["InfernoOS","C++ Sombrio","DevOps Infernal"],       logo: "😈" },
    { id: 3, title: "Analista de Marketing Enganoso",  company: "EvilCorp", location: "Asgard (Remoto)",                 time: "há 1 dia",   match: "76%", skills: ["Growth Hacking","Engenharia Social","Copywriting"],logo: "😈" },
    { id: 4, title: "Contador de Sangue",              company: "EvilCorp", location: "Transilvânia (Presencial)",       time: "há 2 dias",  match: "65%", skills: ["Contabilidade","Finanças","Excel"],               logo: "😈" },
    { id: 5, title: "Guardião de Portões Jr.",         company: "EvilCorp", location: "Portões do Inferno (Presencial)", time: "há 3 dias",  match: "50%", skills: ["Segurança","Vigilância","Força Física"],          logo: "😈" },
    { id: 6, title: "Especialista em RH (Retenção)",   company: "EvilCorp", location: "Atenas, Grécia (Híbrido)",        time: "há 4 dias",  match: "82%", skills: ["RH","Retenção","Petrificação"],                   logo: "😈" }
  ],

  /* ---- Convites ---- */
  invitations: [
    { author: "hades_underworld",  time: "há 2 dias", mutual: 12 },
    { author: "medusa_corp",       time: "há 3 dias", mutual: 8  },
    { author: "cerberus_security", time: "há 5 dias", mutual: 5  }
  ],

  /* ---- Notificações ---- */
  notifications: [
    { author: "lilith_first",     type: "like",             text: "curtiu sua publicação sobre metas de almas",        time: "há 15 min", unread: true,  postPreview: "📢 Anúncio importante: A EvilCorp acaba de ultrapassar a marca de 666 bilhões de almas processadas!" },
    { author: "loki_trickster",   type: "comment",          text: "comentou na sua publicação",                        time: "há 1h",     unread: true,  postPreview: null },
    { author: "dracula_night",    type: "connection",       text: "aceitou sua conexão. Agora vocês estão conectados!",time: "há 2h",     unread: true,  postPreview: null },
    { author: "medusa_corp",      type: "like",             text: "curtiu sua publicação sobre metas de almas",        time: "há 3h",     unread: false, postPreview: null },
    { author: "hades_underworld", type: "comment",          text: "comentou: \"Parabéns, parceiro! 🔥\"",              time: "há 4h",     unread: false, postPreview: null },
    { author: "cerberus_security",type: "share",            text: "compartilhou sua publicação sobre InfernoOS",       time: "há 6h",     unread: false, postPreview: "🚀 Lançamento do InfernoOS 6.6.6!" },
    { author: "hades_underworld", type: "view",             text: "visualizou seu perfil 3 vezes esta semana",         time: "há 8h",     unread: false, postPreview: null },
    { author: "loki_trickster",   type: "birthday",         text: "faz aniversário hoje! Envie uma maldição.",         time: "há 12h",    unread: false, postPreview: null },
    { author: "medusa_corp",      type: "work_anniversary", text: "completou 2.500 anos na EvilCorp!",                 time: "há 1 dia",  unread: false, postPreview: null },
    { author: "dracula_night",    type: "like",             text: "curtiu seu comentário na publicação de Drácula",    time: "há 1 dia",  unread: false, postPreview: null },
    { author: "hades_underworld", type: "recommendation",   text: "recomendou suas habilidades em Liderança Sombria",  time: "há 2 dias", unread: false, postPreview: null },
    { author: "lilith_first",     type: "mention",          text: "mencionou você: \"@Lucifer concorda com a Medusa?\"",time: "há 3 dias",unread: false, postPreview: null }
  ],

  /* ---- Mensagens ---- */
  messages: {
    "hades_underworld": { online: true,  messages: [
      { from: "hades_underworld",    text: "E aí, Lucifer! Vi os números do Q4. Impressionante! 🔥",          time: "10:30" },
      { from: "lucifer_morningstar", text: "Obrigado, Hades! A equipe demoníaca está trabalhando muito.",      time: "10:32" },
      { from: "hades_underworld",    text: "Bora fazer aquela fusão EvilCorp + Underworld Inc.? 🤝",          time: "10:35" },
      { from: "lucifer_morningstar", text: "Com certeza! Vou pedir para o Drácula preparar os números.",      time: "10:37" },
      { from: "hades_underworld",    text: "Perfeito! Cerberus está pronto para a cerimônia também 🐕",        time: "10:40" }
    ]},
    "loki_trickster": { online: false, messages: [
      { from: "loki_trickster",      text: "Chefe, a campanha nova está pronta. 100% de conversão garantida! 😏", time: "09:00" },
      { from: "lucifer_morningstar", text: "Manda o relatório, Loki.",                                            time: "09:05" },
      { from: "loki_trickster",      text: "Relatório? Eu sou o Loki. Os números se explicam sozinhos. 😂",       time: "09:07" },
      { from: "lucifer_morningstar", text: "LOKI. MANDA. O. RELATÓRIO.",                                          time: "09:08" },
      { from: "loki_trickster",      text: "Ok ok... tô mandando. Mas não precisa gritar. 😅",                    time: "09:10" }
    ]},
    "medusa_corp": { online: true,  messages: [
      { from: "medusa_corp",         text: "Lucifer, preciso de aprovação para petrificar mais 3 funcionários.",   time: "14:00" },
      { from: "lucifer_morningstar", text: "Aprovado. Mas só os que assinaram contrato de exclusividade.",        time: "14:05" },
      { from: "medusa_corp",         text: "Todos assinaram. Vou transformar em estátuas de mármore. 🪨",          time: "14:07" },
      { from: "lucifer_morningstar", text: "Perfeito. Coloque no lobby. Impressiona os visitantes.",              time: "14:10" }
    ]},
    "dracula_night": { online: false, messages: [
      { from: "dracula_night",       text: "Lucifer, o fluxo de caixa está positivo. Mas preciso de mais... sangue.", time: "16:00" },
      { from: "lucifer_morningstar", text: "Quantos recursos precisa?",                                               time: "16:05" },
      { from: "dracula_night",       text: "666 milhões. Para o próximo trimestre. 🦇",                               time: "16:07" },
      { from: "lucifer_morningstar", text: "Vou autorizar. Mas pare de beber sangue dos estagiários.",               time: "16:10" },
      { from: "dracula_night",       text: "Sem promessas. 😈",                                                       time: "16:12" }
    ]},
    "lilith_first": { online: true,  messages: [
      { from: "lilith_first",        text: "O InfernoOS 6.6.6 está pronto para deploy! 🚀",                    time: "11:00" },
      { from: "lucifer_morningstar", text: "Ótimo! Tem algum bug demoníaco?",                                  time: "11:05" },
      { from: "lilith_first",        text: "Só os intencionais. O firewall agora petrifica invasões. 😈",      time: "11:07" },
      { from: "lucifer_morningstar", text: "Genial! Deploy agora!",                                           time: "11:10" }
    ]}
  },

  /* Usuário atual em sessão */
  currentUserId: "lucifer_morningstar"
};
