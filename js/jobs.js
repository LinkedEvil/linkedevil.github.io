/**
 * jobs.js — lógica da página de vagas (jobs.html).
 */

document.addEventListener('DOMContentLoaded', () => {
  renderJobs(AppData.jobs);
  App.renderFooter('jobsFooter');
});

function renderJobs(jobs) {
  document.getElementById('jobsList').innerHTML = jobs.map(job => `
    <div class="job-card">
      <div class="job-card-top">
        <div>
          <h3>${job.title}</h3>
          <div class="job-company">${job.company}</div>
          <div class="job-location">📍 ${job.location}</div>
          <div class="job-time">🕐 ${job.time}</div>
          <div class="job-match">✅ ${job.match} de compatibilidade</div>
          <div class="job-skills">
            ${job.skills.map(s => `<span class="skill-tag">${s}</span>`).join('')}
          </div>
        </div>
        <button class="bookmark" onclick="toggleBookmark(this)" title="Salvar vaga">🔖</button>
      </div>
    </div>`).join('');
}

function searchJobs() {
  const q = document.getElementById('jobSearch').value.toLowerCase();
  const filtered = AppData.jobs.filter(j =>
    j.title.toLowerCase().includes(q) ||
    j.company.toLowerCase().includes(q) ||
    j.skills.some(s => s.toLowerCase().includes(q))
  );
  renderJobs(filtered);
}

function toggleBookmark(btn) {
  btn.textContent = btn.textContent === '🔖' ? '✅' : '🔖';
}
