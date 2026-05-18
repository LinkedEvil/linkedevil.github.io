/**
 * app.js — autenticação, navegação e utilitários compartilhados.
 * Carregado em todas as páginas (exceto index.html que tem lógica própria).
 */

/* ---- Utilitários ---- */
const App = {
  currentUser() {
    return AppData.users[AppData.currentUserId];
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
    btn.textContent = '⏳ Pendente';
    btn.style.cssText = 'background:#f5f5f5;color:#666;border-color:#ccc;';
    btn.disabled = true;
  },

  /* Toggle dark mode */
  toggleDarkMode() {
    const isDark = document.body.style.filter === 'invert(1) hue-rotate(180deg)';
    document.body.style.filter = isDark ? '' : 'invert(1) hue-rotate(180deg)';
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
            <span class="stat-label">Conexões</span>
            <span class="stat-value">${u.connections.toLocaleString('pt-BR')}</span>
          </div>
          <div class="profile-card-stat">
            <span class="stat-label">Visualizações</span>
            <span class="stat-value">6.666</span>
          </div>
        </div>
        <div class="profile-card-premium">
          <span class="premium-label">Experimente o</span>
          <div class="premium-title">LinkedEvil Premium</div>
        </div>
        <div class="profile-card-saved">
          <span class="saved-label">Meus itens</span>
          <div class="saved-title">Salvos</div>
        </div>
      </div>`;
  },

  /* Renderiza a barra de nav (injeta no elemento #navBar) */
  renderNav() {
    const u = this.currentUser();
    const el = document.getElementById('navBar');
    if (!el) return;
    el.innerHTML = `
      <nav class="top-nav">
        <div class="nav-inner">
          <a class="nav-logo" href="feed.html">Linked<span>Evil</span></a>
          <div class="nav-search">
            <span class="nav-search-icon">🔍</span>
            <input type="text" placeholder="Pesquisar no LinkedEvil...">
          </div>
          <div class="nav-items">
            <a class="nav-item" data-page="feed"          href="feed.html">
              <span class="nav-item-icon">🏠</span><span class="nav-item-label">Início</span>
            </a>
            <a class="nav-item" data-page="network"       href="network.html">
              <span class="nav-item-icon">👥</span><span class="nav-item-label">Rede</span>
              <span class="badge">3</span>
            </a>
            <a class="nav-item" data-page="jobs"          href="jobs.html">
              <span class="nav-item-icon">💼</span><span class="nav-item-label">Vagas</span>
            </a>
            <a class="nav-item" data-page="messaging"     href="messaging.html">
              <span class="nav-item-icon">💬</span><span class="nav-item-label">Mensagens</span>
              <span class="badge">5</span>
            </a>
            <a class="nav-item" data-page="notifications" href="notifications.html">
              <span class="nav-item-icon">🔔</span><span class="nav-item-label">Notificações</span>
              <span class="badge">12</span>
            </a>
            <a class="nav-item" data-page="profile"       href="profile.html">
              <div class="nav-profile-pic">${u.initials}</div>
              <span class="nav-item-label">Eu ▾</span>
            </a>
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
          <a href="#">Sobre</a><a href="#">Acessibilidade</a><a href="#">Central de Ajuda</a>
          <a href="#">Privacidade</a><a href="#">Termos</a><a href="#">Publicidade</a>
          <a href="#">Carreiras</a><a href="#">Marca</a>
        </div>
        <div class="footer-brand">LinkedEvil Corporation © 2025</div>
      </div>`;
  }
};

document.addEventListener('DOMContentLoaded', () => {
  App.renderNav();
});
