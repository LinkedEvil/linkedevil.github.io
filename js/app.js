/**
 * app.js — autenticação, navegação e utilitários compartilhados.
 * Carregado em todas as páginas (exceto index.html que tem lógica própria).
 */

/* ---- Traduções ---- */
const translations = {
  pt: {
    'nav.search': 'Pesquisar no LinkedEvil...',
    'nav.home': 'Início',
    'nav.network': 'Rede',
    'nav.jobs': 'Vagas',
    'nav.messages': 'Mensagens',
    'nav.notifications': 'Notificações',
    'nav.me': 'Eu ▾',
    'lang.switch': 'EN',
    'sidebar.connections': 'Conexões',
    'sidebar.views': 'Visualizações',
    'sidebar.tryPremium': 'Experimente o',
    'sidebar.savedItems': 'Meus itens',
    'sidebar.saved': 'Salvos',
    'footer.about': 'Sobre',
    'footer.accessibility': 'Acessibilidade',
    'footer.help': 'Central de Ajuda',
    'footer.privacy': 'Privacidade',
    'footer.terms': 'Termos',
    'footer.advertising': 'Publicidade',
    'footer.careers': 'Carreiras',
    'footer.brand': 'Marca',
    'footer.copyright': 'LinkedEvil Corporation © 2025',
    'feed.startPost': 'Começar publicação',
    'feed.media': 'Mídia',
    'feed.event': 'Evento',
    'feed.article': 'Artigo',
    'feed.news': 'LinkedEvil Notícias',
    'feed.corrupt': 'Pessoas que você pode corromper',
    'feed.moreNews': 'Ver mais notícias ▾',
    'feed.ad': 'Anúncio',
    'feed.createPost': 'Criar publicação',
    'feed.anyone': '🌐 Qualquer pessoa ▾',
    'feed.chaosPlaceholder': 'Sobre o que você quer espalhar o caos?',
    'feed.publish': 'Publicar',
    'feed.recommend': 'Recomendar',
    'feed.recommended': 'Recomendado',
    'feed.comment': 'Comentar',
    'feed.share': 'Compartilhar',
    'feed.send': 'Enviar',
    'feed.addComment': 'Adicionar comentário...',
    'feed.comments': 'comentários',
    'feed.shares': 'compartilhamentos',
    'feed.now': 'agora',
    'feed.connect': '+ Conectar',
    'profile.about': 'Sobre',
    'profile.experience': 'Experiência',
    'profile.education': 'Formação acadêmica',
    'profile.skills': 'Competências',
    'profile.editProfile': '✏️ Editar perfil',
    'profile.more': 'Mais ▾',
    'profile.recommend': '😈 Recomendar',
    'profile.connect': '+ Conectar',
    'profile.message': '💬 Mensagem',
    'profile.openTo': 'Aberto a',
    'profile.pending': '⏳ Pendente',
    'jobs.title': 'Vagas de Emprego',
    'jobs.placeholder': 'Cargo, empresa ou habilidade...',
    'jobs.location': 'Localização',
    'jobs.search': 'Pesquisar',
    'jobs.recommended': 'Recomendadas para você',
    'jobs.match': 'de compatibilidade',
    'jobs.save': 'Salvar vaga',
    'notifications.title': 'Notificações',
    'notifications.markAll': 'Marcar todas como lidas',
    'notifications.all': 'Todas',
    'notifications.likes': 'Recomendações',
    'notifications.mentions': 'Menções',
    'notifications.birthdays': 'Aniversários',
    'messaging.title': 'Mensagens',
    'messaging.newMsg': 'Nova mensagem',
    'messaging.searchPlaceholder': 'Pesquisar mensagens...',
    'messaging.inputPlaceholder': 'Escreva uma mensagem...',
    'messaging.online': 'Online',
    'messaging.offline': 'Offline',
    'network.title': 'Sua Rede',
    'network.connections': 'Conexões',
    'network.contacts': 'Contatos',
    'network.pages': 'Páginas',
    'network.groups': 'Grupos',
    'network.pending': 'Convites pendentes',
    'network.connectionsTitle': 'Conexões',
    'network.mutualConnections': 'conexões em comum',
    'network.confirm': 'Confirmar',
    'network.ignore': 'Ignorar',
    'network.connected': '✓ Conectado',
    'network.connect': '+ Conectar',
    'parody.title': '😈 Aviso de Paródia',
    'parody.body': `<p>Este site é uma <strong>paródia fictícia</strong> criada exclusivamente para entretenimento.</p>
<p>Todos os personagens, empresas, vagas e situações apresentados aqui são completamente fictícios e têm fins humorísticos. Não há intenção de ofender, desrespeitar ou prejudicar qualquer pessoa, grupo, empresa ou instituição.</p>
<p>Se você identificar algum conteúdo que considere inadequado, por favor entre em contato:</p>
<p class="parody-contact"><a href="mailto:linkedevil@gmail.com">📧 linkedevil@gmail.com</a></p>`,
    'parody.close': '😈 Entendido!',
    'evil.title': 'Aviso de Paródia',
    'consent.text': '<strong>LinkedEvil</strong> usa cookies para exibir publicidade personalizada via <strong>Google AdSense</strong> e melhorar sua experiência. Ao continuar, você concorda com nossa <a href="privacy.html">Política de Privacidade</a> e com o uso de cookies.',
    'consent.decline': 'Recusar',
    'consent.accept': 'Aceitar cookies',
  },
  en: {
    'nav.search': 'Search LinkedEvil...',
    'nav.home': 'Home',
    'nav.network': 'Network',
    'nav.jobs': 'Jobs',
    'nav.messages': 'Messages',
    'nav.notifications': 'Notifications',
    'nav.me': 'Me ▾',
    'lang.switch': 'PT',
    'sidebar.connections': 'Connections',
    'sidebar.views': 'Profile views',
    'sidebar.tryPremium': 'Try',
    'sidebar.savedItems': 'My items',
    'sidebar.saved': 'Saved',
    'footer.about': 'About',
    'footer.accessibility': 'Accessibility',
    'footer.help': 'Help Center',
    'footer.privacy': 'Privacy',
    'footer.terms': 'Terms',
    'footer.advertising': 'Advertising',
    'footer.careers': 'Careers',
    'footer.brand': 'Brand',
    'footer.copyright': 'LinkedEvil Corporation © 2025',
    'feed.startPost': 'Start a post',
    'feed.media': 'Media',
    'feed.event': 'Event',
    'feed.article': 'Article',
    'feed.news': 'LinkedEvil News',
    'feed.corrupt': 'People you may want to corrupt',
    'feed.moreNews': 'See more news ▾',
    'feed.ad': 'Ad',
    'feed.createPost': 'Create post',
    'feed.anyone': '🌐 Anyone ▾',
    'feed.chaosPlaceholder': 'What chaos do you want to spread?',
    'feed.publish': 'Post',
    'feed.recommend': 'Like',
    'feed.recommended': 'Liked',
    'feed.comment': 'Comment',
    'feed.share': 'Share',
    'feed.send': 'Send',
    'feed.addComment': 'Add a comment...',
    'feed.comments': 'comments',
    'feed.shares': 'shares',
    'feed.now': 'now',
    'feed.connect': '+ Connect',
    'profile.about': 'About',
    'profile.experience': 'Experience',
    'profile.education': 'Education',
    'profile.skills': 'Skills',
    'profile.editProfile': '✏️ Edit profile',
    'profile.more': 'More ▾',
    'profile.recommend': '😈 Like',
    'profile.connect': '+ Connect',
    'profile.message': '💬 Message',
    'profile.openTo': 'Open to',
    'profile.pending': '⏳ Pending',
    'jobs.title': 'Job Openings',
    'jobs.placeholder': 'Title, company or skill...',
    'jobs.location': 'Location',
    'jobs.search': 'Search',
    'jobs.recommended': 'Recommended for you',
    'jobs.match': 'match',
    'jobs.save': 'Save job',
    'notifications.title': 'Notifications',
    'notifications.markAll': 'Mark all as read',
    'notifications.all': 'All',
    'notifications.likes': 'Likes',
    'notifications.mentions': 'Mentions',
    'notifications.birthdays': 'Birthdays',
    'messaging.title': 'Messages',
    'messaging.newMsg': 'New message',
    'messaging.searchPlaceholder': 'Search messages...',
    'messaging.inputPlaceholder': 'Write a message...',
    'messaging.online': 'Online',
    'messaging.offline': 'Offline',
    'network.title': 'Your Network',
    'network.connections': 'Connections',
    'network.contacts': 'Contacts',
    'network.pages': 'Pages',
    'network.groups': 'Groups',
    'network.pending': 'Pending invitations',
    'network.connectionsTitle': 'Connections',
    'network.mutualConnections': 'mutual connections',
    'network.confirm': 'Accept',
    'network.ignore': 'Ignore',
    'network.connected': '✓ Connected',
    'network.connect': '+ Connect',
    'parody.title': '😈 Parody Disclaimer',
    'parody.body': `<p>This website is a <strong>fictional parody</strong> created solely for entertainment purposes.</p>
<p>All characters, companies, job listings, and situations presented here are completely fictional and intended for humor. There is no intention to offend, disrespect, or harm any person, group, company, or institution.</p>
<p>If you find any content that you consider inappropriate, please reach out:</p>
<p class="parody-contact"><a href="mailto:linkedevil@gmail.com">📧 linkedevil@gmail.com</a></p>`,
    'parody.close': '😈 Got it!',
    'evil.title': 'Parody Disclaimer',
    'consent.text': '<strong>LinkedEvil</strong> uses cookies to display personalized ads via <strong>Google AdSense</strong> and improve your experience. By continuing, you agree to our <a href="privacy.html">Privacy Policy</a> and use of cookies.',
    'consent.decline': 'Decline',
    'consent.accept': 'Accept cookies',
  }
};

/* ---- Utilitários ---- */
const App = {
  currentUser() {
    return AppData.users[AppData.currentUserId];
  },

  getLang() {
    return localStorage.getItem('linkedevil_lang') || 'pt';
  },

  t(key) {
    return (translations[this.getLang()] || translations.pt)[key] || key;
  },

  setLang(lang) {
    localStorage.setItem('linkedevil_lang', lang);
    location.reload();
  },

  /* Retorna o prefixo de caminho baseado na URL atual (ex: 'en/', 'br/', ou '') */
  getBasePath() {
    const parts = location.pathname.split('/');
    if (parts.includes('en')) return 'en/';
    if (parts.includes('br')) return 'br/';
    return '';
  },

  /* Marca o item de nav ativo com base no filename atual */
  setActiveNav() {
    const page = location.pathname.split('/').pop().replace('.html', '') || 'feed';
    document.querySelectorAll('.nav-item[data-page]').forEach(el => {
      el.classList.toggle('active', el.dataset.page === page);
    });
  },

  /* Formata número de reações */
  fmtNum(n) {
    return n >= 1000 ? (n / 1000).toFixed(1).replace('.0', '') + 'k' : String(n);
  },

  /* Conectar usuário (botão) */
  connectUser(btn) {
    btn.textContent = this.t('profile.pending');
    btn.style.cssText = 'background:#f5f5f5;color:#666;border-color:#ccc;';
    btn.disabled = true;
  },

  /* Modal de paródia */
  openParodyModal() {
    document.getElementById('parodyModal').classList.remove('hidden');
  },

  closeParodyModal() {
    document.getElementById('parodyModal').classList.add('hidden');
  },

  /* Injeta o modal de paródia no body */
  renderParodyModal() {
    if (document.getElementById('parodyModal')) return;
    const div = document.createElement('div');
    div.id = 'parodyModal';
    div.className = 'modal-overlay hidden';
    div.innerHTML = `
      <div class="parody-modal">
        <div class="parody-modal-header">
          <h2>${this.t('parody.title')}</h2>
        </div>
        <div class="parody-modal-body">
          ${this.t('parody.body')}
        </div>
        <div class="parody-modal-footer">
          <button class="btn-primary" onclick="App.closeParodyModal()">${this.t('parody.close')}</button>
        </div>
      </div>`;
    document.body.appendChild(div);
    div.addEventListener('click', e => { if (e.target === div) App.closeParodyModal(); });
  },

  /* Aplica traduções a elementos com data-i18n* */
  applyI18n() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const val = this.t(el.dataset.i18n);
      if (val) el.textContent = val;
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const val = this.t(el.dataset.i18nPlaceholder);
      if (val) el.placeholder = val;
    });
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      const val = this.t(el.dataset.i18nTitle);
      if (val) el.title = val;
    });
    document.documentElement.lang = this.getLang() === 'en' ? 'en' : 'pt-BR';
  },

  /* Renderiza o card de sidebar esquerda */
  renderLeftSidebar(containerId) {
    const u = this.currentUser();
    const el = document.getElementById(containerId);
    if (!el) return;
    el.innerHTML = `
      <div class="profile-card">
        <div class="profile-card-banner" style="background:${u.bannerGradient}"></div>
        <a class="profile-card-avatar" href="profile.html">${u.initials}</a>
        <div class="profile-card-info">
          <h3 onclick="location.href='profile.html'">${u.name}</h3>
          <p>${u.headline.split('|')[0]}</p>
        </div>
        <div class="profile-card-stats">
          <div class="profile-card-stat">
            <span class="stat-label">${this.t('sidebar.connections')}</span>
            <span class="stat-value">${u.connections.toLocaleString('pt-BR')}</span>
          </div>
          <div class="profile-card-stat">
            <span class="stat-label">${this.t('sidebar.views')}</span>
            <span class="stat-value">6.666</span>
          </div>
        </div>
        <div class="profile-card-premium">
          <span class="premium-label">${this.t('sidebar.tryPremium')}</span>
          <div class="premium-title">LinkedEvil Premium</div>
        </div>
        <div class="profile-card-saved">
          <span class="saved-label">${this.t('sidebar.savedItems')}</span>
          <div class="saved-title">${this.t('sidebar.saved')}</div>
        </div>
      </div>`;
  },

  /* Renderiza a barra de nav (injeta no elemento #navBar) */
  renderNav() {
    const u = this.currentUser();
    const el = document.getElementById('navBar');
    if (!el) return;
    const nextLang = this.getLang() === 'pt' ? 'en' : 'pt';
    const bp = this.getBasePath();
    el.innerHTML = `
      <nav class="top-nav">
        <div class="nav-inner">
          <a class="nav-logo" href="${bp}feed.html">Linked<span>Evil</span></a>
          <div class="nav-search">
            <span class="nav-search-icon">🔍</span>
            <input type="text" placeholder="${this.t('nav.search')}">
          </div>
          <div class="nav-items">
            <a class="nav-item" data-page="feed" href="${bp}feed.html">
              <span class="nav-item-icon">🏠</span><span class="nav-item-label">${this.t('nav.home')}</span>
            </a>
            <a class="nav-item" data-page="network" href="${bp}network.html">
              <span class="nav-item-icon">👥</span><span class="nav-item-label">${this.t('nav.network')}</span>
              <span class="badge">3</span>
            </a>
            <a class="nav-item" data-page="jobs" href="${bp}jobs.html">
              <span class="nav-item-icon">💼</span><span class="nav-item-label">${this.t('nav.jobs')}</span>
            </a>
            <a class="nav-item" data-page="messaging" href="${bp}messaging.html">
              <span class="nav-item-icon">💬</span><span class="nav-item-label">${this.t('nav.messages')}</span>
              <span class="badge">5</span>
            </a>
            <a class="nav-item" data-page="notifications" href="${bp}notifications.html">
              <span class="nav-item-icon">🔔</span><span class="nav-item-label">${this.t('nav.notifications')}</span>
              <span class="badge">12</span>
            </a>
            <a class="nav-item" data-page="profile" href="${bp}profile.html">
              <div class="nav-profile-pic">${u.initials}</div>
              <span class="nav-item-label">${this.t('nav.me')}</span>
            </a>
            <button class="nav-lang-toggle" onclick="App.setLang('${nextLang}')" title="Switch language / Trocar idioma">${this.t('lang.switch')}</button>
          </div>
        </div>
      </nav>`;
    this.setActiveNav();
  },

  /* Footer padrão */
  renderFooter(containerId) {
    const el = document.getElementById(containerId);
    if (!el) return;
    el.innerHTML = `
      <div class="footer">
        <div class="footer-links">
          <a href="#">${this.t('footer.about')}</a>
          <a href="#">${this.t('footer.accessibility')}</a>
          <a href="#">${this.t('footer.help')}</a>
          <a href="privacy.html">${this.t('footer.privacy')}</a>
          <a href="#">${this.t('footer.terms')}</a>
          <a href="#">${this.t('footer.advertising')}</a>
          <a href="#">${this.t('footer.careers')}</a>
          <a href="#">${this.t('footer.brand')}</a>
        </div>
        <div class="footer-brand">${this.t('footer.copyright')}</div>
      </div>`;
  }
};

document.addEventListener('DOMContentLoaded', () => {
  App.renderNav();
  App.renderParodyModal();
  App.applyI18n();
});
