/**
 * network.js — lógica da página de rede (network.html).
 */

document.addEventListener('DOMContentLoaded', () => {
  renderInvitations();
  renderConnections();
  App.renderFooter('networkFooter');
});

function renderInvitations() {
  const container = document.getElementById('invitationsContainer');
  container.innerHTML = AppData.invitations.map(inv => {
    const u = AppData.users[inv.author];
    return `
      <div class="invitation-item" id="inv-${u.id}">
        <a class="invitation-avatar" href="profile.html?id=${u.id}" style="background:${u.avatarColor}">${u.initials}</a>
        <div class="invitation-info">
          <a class="invitation-name" href="profile.html?id=${u.id}">${u.name}</a>
          <div class="invitation-desc">${u.headline.split('|')[0]}</div>
          <div class="invitation-time">${inv.time} · ${inv.mutual} conexões em comum</div>
        </div>
        <div class="invitation-actions">
          <button class="btn-accept" onclick="acceptInvitation('${u.id}', this)">Confirmar</button>
          <button class="btn-ignore" onclick="ignoreInvitation('${u.id}')">Ignorar</button>
        </div>
      </div>`;
  }).join('');
}

function renderConnections() {
  const container = document.getElementById('connectionsGrid');
  container.innerHTML = Object.values(AppData.users)
    .filter(u => u.id !== AppData.currentUserId)
    .map(u => `
      <div class="network-card">
        <div class="network-card-banner" style="background:${u.bannerGradient}"></div>
        <a class="network-card-avatar" href="profile.html?id=${u.id}" style="background:${u.avatarColor}">${u.initials}</a>
        <div class="network-card-name">${u.name}</div>
        <div class="network-card-desc">${u.headline.split('|')[0]}</div>
        <div class="network-card-action">
          <button class="btn-connect" onclick="App.connectUser(this)">+ Conectar</button>
        </div>
      </div>`).join('');
}

function acceptInvitation(userId, btn) {
  const item = document.getElementById(`inv-${userId}`);
  item.style.background = '#f0fff0';
  btn.textContent = '✓ Conectado';
  btn.style.background = '#4caf50';
  btn.disabled = true;
  btn.nextElementSibling.style.display = 'none';
}

function ignoreInvitation(userId) {
  document.getElementById(`inv-${userId}`).remove();
}
