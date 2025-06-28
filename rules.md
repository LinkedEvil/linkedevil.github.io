# Regras Gerais do Sistema

- Todo o CSS deve estar centralizado no arquivo style.css, sem uso de estilos inline nos arquivos HTML.
- O layout deve ser responsivo e manter alta fidelidade visual ao LinkedIn.
- O código HTML deve ser limpo, semanticamente correto, organizado e fácil de manter.
- Utilize classes CSS padronizadas para sidebars, cards, botões e demais elementos visuais.
- Utilize imagens locais (pasta img/) para avatares, logos e conteúdos promovidos sempre que possível.
- Atualize este arquivo sempre que houver mudanças estruturais ou visuais relevantes em qualquer página do sistema.

# Regras Específicas para feed.html

- A página feed.html deve conter a barra superior fixa, sidebars esquerda e direita, e o feed central de posts.
- O feed central deve exibir posts com avatar, nome, cargo, conteúdo, botões de interação (curtir, comentar, compartilhar, enviar), todos com ícones Font Awesome.
- Os sidebars devem conter perfil resumido, links rápidos, sugestões de conexão e conteúdos promovidos, todos padronizados com a classe .sidebar-box.
- O layout dos sidebars e do feed deve ser responsivo e seguir o padrão visual do LinkedIn.
- Não utilizar o card de perfil detalhado nesta página.
- O formulário de novo post deve ser simples, com textarea e botão, e visual alinhado ao LinkedIn.
- Utilize classes como .new-post, .post, .post-header, .post-actions, .suggestions, etc.

# Regras Específicas para darth_vader.html

- O card inicial de perfil deve ser uma <section> dentro do <main class="feed">, seguindo o padrão de visualização de perfil de terceiros no LinkedIn.
- Todos os estilos visuais do card de perfil inicial (imagem de fundo, avatar, nome, cargo, empresa, cidade, botões) devem estar centralizados no arquivo style.css, sem uso de estilos inline.
- Utilize as classes CSS: .profile-header-card, .profile-header-bg, .profile-header-content, .profile-header-avatar, .profile-header-info, .profile-header-actions, .connect-btn, .message-btn, .profile-name, .profile-job, .profile-company, .profile-city, etc.
- O HTML deve ser semanticamente correto, usando <section> para cada bloco de informações do perfil (Destaques, Sobre, Atividade, Experiência, Educação, Habilidades, Publicações, Honras e Prêmios, Idiomas, Interesses).
- A seção de Experiência deve usar .experience-list, .experience-item, .experience-col-logo, .experience-logo, .experience-details, .experience-divider, etc., com layout de duas colunas e linha divisória entre experiências.
- O avatar do perfil deve ficar em uma linha e as informações em outra, usando .profile-header-avatar e .profile-header-info.
- Não utilizar sidebar-left ou sidebar-left-group nesta página de perfil.
- O layout deve ser responsivo e manter alta fidelidade visual ao LinkedIn.
- O arquivo não deve conter estilos duplicados ou conflitantes com outros arquivos HTML do projeto.
- O código deve ser limpo, organizado e fácil de manter.
