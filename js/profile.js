/**
 * profile.js — lógica da página de perfil (profile.html).
 */

document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(location.search);
  const userId = params.get('id') || AppData.currentUserId;
  renderProfile(userId);
  App.renderFooter('profileFooter');
});

function renderProfile(userId) {
  const user = AppData.users[userId];
  if (!user) return;

  const isOwner = userId === AppData.currentUserId;

  document.getElementById('profileBanner').style.background = user.bannerGradient;

  const avatar = document.getElementById('profileAvatar');
  avatar.textContent = user.initials;
  avatar.style.background = user.avatarColor;

  document.getElementById('profileName').textContent = user.name;
  document.getElementById('profileTagline').textContent = user.headline;
  document.getElementById('profileLocation').innerHTML =
    `${user.location} · <a href="#">${user.connectionText}</a>`;
  document.getElementById('profileConnections').textContent = `👥 ${user.connectionText}`;

  const openToSection = document.getElementById('profileOpenTo');
  if (isOwner && user.openTo) {
    openToSection.innerHTML = `
      <div class="profile-open-to">
        <h4>${App.t('profile.openTo')}</h4>
        <p>${user.openTo}</p>
      </div>`;
  } else {
    openToSection.innerHTML = '';
  }

  document.getElementById('profileActions').innerHTML = isOwner
    ? `<button class="btn-primary">${App.t('profile.editProfile')}</button>
       <button class="btn-tertiary">${App.t('profile.more')}</button>`
    : `<button class="btn-primary">${App.t('profile.recommend')}</button>
       <button class="btn-secondary" onclick="App.connectUser(this)">${App.t('profile.connect')}</button>
       <button class="btn-tertiary">${App.t('profile.message')}</button>
       <button class="btn-tertiary">${App.t('profile.more')}</button>`;

  document.getElementById('profileSummary').textContent = user.summary;

  document.getElementById('profileExperience').innerHTML = user.experience.map(exp => `
    <div class="experience-item">
      <div class="experience-logo">${exp.logo}</div>
      <div class="experience-info">
        <h3>${exp.role}</h3>
        <div class="exp-company">${exp.company}</div>
        <div class="exp-date">${exp.date}</div>
        <div class="exp-desc">${exp.desc}</div>
      </div>
    </div>`).join('');

  document.getElementById('profileEducation').innerHTML = user.education.map(edu => `
    <div class="education-item">
      <div class="education-logo">${edu.logo}</div>
      <div class="experience-info">
        <h3>${edu.school}</h3>
        <div class="exp-company">${edu.degree}</div>
        <div class="exp-date">${edu.date}</div>
      </div>
    </div>`).join('');

  document.getElementById('profileSkills').innerHTML =
    `<div class="skills-grid">` +
    user.skills.map(s => `<span class="skill-tag">${s}</span>`).join('') +
    `</div>`;
}
