/**
 * messaging.js — lógica da página de mensagens (messaging.html).
 */

let currentChat = 'hades_underworld';

document.addEventListener('DOMContentLoaded', () => {
  renderMessagingSidebar();
  renderChat(currentChat);
});

function renderMessagingSidebar() {
  document.getElementById('messagingList').innerHTML =
    Object.entries(AppData.messages).map(([userId, data]) => {
      const u = AppData.users[userId];
      const last = data.messages[data.messages.length - 1];
      const isActive = userId === currentChat;
      return `
        <div class="messaging-item ${isActive ? 'active' : ''}" onclick="switchChat('${userId}')">
          <div class="messaging-item-avatar" style="background:${u.avatarColor}">
            ${u.initials}
            ${data.online ? '<div class="online-dot"></div>' : ''}
          </div>
          <div class="messaging-item-info">
            <div class="messaging-item-name">${u.name}</div>
            <div class="messaging-item-preview">${last.text}</div>
          </div>
          <div class="messaging-item-time">${last.time}</div>
        </div>`;
    }).join('');
}

function renderChat(userId) {
  const data = AppData.messages[userId];
  const u = AppData.users[userId];
  const myId = AppData.currentUserId;

  document.getElementById('chatHeader').innerHTML = `
    <div class="messaging-chat-header-avatar" style="background:${u.avatarColor}">${u.initials}</div>
    <div>
      <div class="messaging-chat-header-name">${u.name}</div>
      <div class="messaging-chat-header-status ${data.online ? '' : 'offline'}">
        ${data.online ? App.t('messaging.online') : App.t('messaging.offline')}
      </div>
    </div>`;

  const messagesEl = document.getElementById('chatMessages');
  messagesEl.innerHTML = data.messages.map(msg => `
    <div class="message ${msg.from === myId ? 'sent' : 'received'}">${msg.text}</div>`).join('');

  messagesEl.scrollTop = messagesEl.scrollHeight;
}

function switchChat(userId) {
  currentChat = userId;
  renderMessagingSidebar();
  renderChat(userId);
}

function sendMessage() {
  const input = document.getElementById('messageInput');
  const text = input.value.trim();
  if (!text) return;

  AppData.messages[currentChat].messages.push({
    from: AppData.currentUserId,
    text,
    time: new Date().toLocaleTimeString(App.getLang() === 'en' ? 'en-US' : 'pt-BR', { hour: '2-digit', minute: '2-digit' })
  });

  input.value = '';
  renderMessagingSidebar();
  renderChat(currentChat);
}

function sendOnEnter(event) {
  if (event.key === 'Enter') sendMessage();
}
