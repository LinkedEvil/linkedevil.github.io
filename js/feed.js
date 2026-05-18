/**
 * feed.js — lógica da página de feed (feed.html).
 */

let userPosts = [];

document.addEventListener('DOMContentLoaded', () => {
  const u = App.currentUser();

  const creatorAvatar = document.getElementById('creatorAvatar');
  if (creatorAvatar) {
    creatorAvatar.textContent = u.initials;
    creatorAvatar.style.background = u.avatarColor;
  }
  const modalAvatar = document.getElementById('modalAvatar');
  if (modalAvatar) {
    modalAvatar.textContent = u.initials;
    modalAvatar.style.background = u.avatarColor;
  }
  const modalAuthorName = document.getElementById('modalAuthorName');
  if (modalAuthorName) modalAuthorName.textContent = u.name;

  App.renderLeftSidebar('leftSidebar');
  renderSuggestions();
  renderFeed();
  App.renderFooter('rightFooter');
});

function renderFeed() {
  const container = document.getElementById('feedPosts');
  const allPosts = [
    ...userPosts.map(p => ({ ...p, _isNew: true })),
    ...AppData.posts
  ];
  container.innerHTML = allPosts.map(post => buildPostHtml(post)).join('');
}

function buildPostHtml(post) {
  const author = AppData.users[post.author];
  const totalReactions = Object.values(post.reactions).reduce((a, b) => a + b, 0);

  const commentsHtml = post.comments.map(c => {
    const ca = AppData.users[c.author];
    return `
      <div class="comment">
        <div class="comment-avatar" style="background:${ca.avatarColor}">${ca.initials}</div>
        <div class="comment-body">
          <div class="comment-author">${ca.name}</div>
          <div class="comment-text">${c.text}</div>
        </div>
      </div>`;
  }).join('');

  const imageHtml = post.image
    ? `<div class="post-image"><div class="post-image-text">${post.image}</div></div>`
    : '';

  const hashtags = post.content.replace(/#(\S+)/g, '<span class="hashtag">#$1</span>');

  return `
    <div class="feed-post">
      <div class="post-header">
        <a class="post-avatar" href="profile.html?id=${author.id}" style="background:${author.avatarColor}">${author.initials}</a>
        <div class="post-meta">
          <a class="post-author" href="profile.html?id=${author.id}">${author.name}</a>
          <div class="post-author-desc">${author.headline.split('|')[0]}</div>
          <div class="post-time">${post.time} · 🌐</div>
        </div>
        <button class="post-more">⋯</button>
      </div>
      <div class="post-body">${hashtags}</div>
      ${imageHtml}
      <div class="post-stats">
        <div class="post-reactions">
          <div class="reaction-icons">
            <div class="reaction-icon" style="background:#ff1a1a">😈</div>
            <div class="reaction-icon" style="background:#ff6600">🔥</div>
            <div class="reaction-icon" style="background:#ffcc00">👏</div>
          </div>
          <span>${App.fmtNum(totalReactions)}</span>
        </div>
        <div class="post-comments-count">${post.comments.length} ${App.t('feed.comments')} · ${App.fmtNum(post.shares)} ${App.t('feed.shares')}</div>
      </div>
      <div class="post-actions">
        <button class="post-action-btn" onclick="toggleLike(this)">
          <span class="action-icon">😈</span> ${App.t('feed.recommend')}
        </button>
        <button class="post-action-btn" onclick="toggleComments(this)">
          <span class="action-icon">💬</span> ${App.t('feed.comment')}
        </button>
        <button class="post-action-btn">
          <span class="action-icon">🔄</span> ${App.t('feed.share')}
        </button>
        <button class="post-action-btn">
          <span class="action-icon">📤</span> ${App.t('feed.send')}
        </button>
      </div>
      <div class="comments-section">
        ${commentsHtml}
        <div class="comment-input-wrapper">
          <div class="comment-avatar" style="background:#ff1a1a;width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-size:12px;font-weight:600;flex-shrink:0">${App.currentUser().initials}</div>
          <input type="text" placeholder="${App.t('feed.addComment')}" onkeypress="addCommentKey(event, this)">
          <button onclick="addCommentBtn(this)">${App.t('feed.comment')}</button>
        </div>
      </div>
    </div>`;
}

function renderSuggestions() {
  const container = document.getElementById('suggestionsContainer');
  if (!container) return;
  const ids = ['hades_underworld', 'medusa_corp', 'dracula_night'];

  container.innerHTML = ids.map(id => {
    const u = AppData.users[id];
    return `
      <div class="suggestion-item">
        <a class="suggestion-avatar" href="profile.html?id=${u.id}" style="background:${u.avatarColor}">${u.initials}</a>
        <div class="suggestion-info">
          <div class="suggestion-name">${u.name}</div>
          <div class="suggestion-desc">${u.headline.split('|')[0]}</div>
        </div>
        <button class="btn-connect" onclick="App.connectUser(this)">${App.t('feed.connect')}</button>
      </div>`;
  }).join('');
}

/* ---- Post modal ---- */
function openPostModal() {
  document.getElementById('postModal').classList.remove('hidden');
  document.getElementById('postTextarea').focus();
}

function closePostModal() {
  document.getElementById('postModal').classList.add('hidden');
  document.getElementById('postTextarea').value = '';
  togglePostButton();
}

function togglePostButton() {
  const val = document.getElementById('postTextarea').value.trim();
  document.getElementById('postSubmitBtn').disabled = val.length === 0;
}

function submitPost() {
  const text = document.getElementById('postTextarea').value.trim();
  if (!text) return;

  userPosts.unshift({
    id: Date.now(),
    author: AppData.currentUserId,
    time: App.t('feed.now'),
    content: text,
    image: null,
    reactions: { '😈': 0, '🔥': 0, '👏': 0 },
    comments: [],
    shares: 0
  });

  closePostModal();
  renderFeed();
}

/* ---- Interações ---- */
function toggleLike(btn) {
  btn.classList.toggle('liked');
  const icon = btn.querySelector('.action-icon');
  icon.classList.add('like-animation');
  setTimeout(() => icon.classList.remove('like-animation'), 300);
  btn.innerHTML = btn.classList.contains('liked')
    ? `<span class="action-icon">😈</span> ${App.t('feed.recommended')}`
    : `<span class="action-icon">😈</span> ${App.t('feed.recommend')}`;
}

function toggleComments(btn) {
  const post = btn.closest('.feed-post');
  const section = post.querySelector('.comments-section');
  section.classList.toggle('show');
  if (section.classList.contains('show')) {
    section.querySelector('input').focus();
  }
}

function addCommentKey(event, input) {
  if (event.key === 'Enter') addComment(input);
}

function addCommentBtn(btn) {
  addComment(btn.closest('.comment-input-wrapper').querySelector('input'));
}

function addComment(input) {
  const text = input.value.trim();
  if (!text) return;
  const u = App.currentUser();
  const wrapper = input.closest('.comment-input-wrapper');
  const frag = document.createRange().createContextualFragment(`
    <div class="comment">
      <div class="comment-avatar" style="background:${u.avatarColor};width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-size:12px;font-weight:600;flex-shrink:0">${u.initials}</div>
      <div class="comment-body">
        <div class="comment-author">${u.name}</div>
        <div class="comment-text">${text}</div>
      </div>
    </div>`);
  wrapper.closest('.comments-section').insertBefore(frag, wrapper);
  input.value = '';
}
