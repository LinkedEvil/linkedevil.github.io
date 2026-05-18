/**
 * notifications.js — lógica da página de notificações (notifications.html).
 */

const NOTIF_ICONS = {
  like: '😈', comment: '💬', connection: '🤝', share: '🔄',
  view: '👁️', birthday: '🎂', work_anniversary: '🏆',
  recommendation: '⭐', mention: '@'
};

document.addEventListener('DOMContentLoaded', () => {
  renderNotifications('all');
  App.renderFooter('notificationsFooter');
  setupTabs();
});

function setupTabs() {
  document.querySelectorAll('.notification-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.notification-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderNotifications(tab.dataset.filter);
    });
  });
}

function renderNotifications(filter) {
  const list = filter === 'all'
    ? AppData.notifications
    : AppData.notifications.filter(n => n.type === filter);

  document.getElementById('notificationsList').innerHTML = list.map(notif => {
    const u = AppData.users[notif.author];
    return `
      <div class="notification-item ${notif.unread ? 'unread' : ''}">
        <div class="notification-avatar" style="background:${u.avatarColor}">${u.initials}</div>
        <div class="notification-content">
          <div class="notification-text"><strong>${u.name}</strong> ${notif.text}</div>
          <div class="notification-time">${notif.time}</div>
          ${notif.postPreview
            ? `<div class="notification-post-preview">${notif.postPreview}</div>`
            : ''}
        </div>
        <span class="notification-icon">${NOTIF_ICONS[notif.type] || '🔔'}</span>
      </div>`;
  }).join('');
}

function markAllRead() {
  AppData.notifications.forEach(n => { n.unread = false; });
  renderNotifications('all');
}
