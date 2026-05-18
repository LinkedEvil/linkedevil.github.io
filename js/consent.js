/**
 * consent.js — Google Consent Mode v2 + cookie consent banner.
 *
 * Fluxo:
 *  1. O HTML já chamou gtag('consent','default',{tudo:'denied'}) antes do gtag carregar.
 *  2. Este script, ao carregar, verifica o localStorage:
 *     - 'accepted' → dispara update granted + carrega AdSense
 *     - 'declined' → dispara update denied (mantém padrão, mas registra explicitamente)
 *     - sem resposta → exibe o banner de consentimento
 *  3. O usuário interage com o banner → update + persistência no localStorage.
 */

const CONSENT_KEY    = 'linkedevil_cookie_consent';
const ADSENSE_CLIENT = 'ca-pub-2855595619421919';

/* ---- Helpers de Consent Mode v2 ---- */
const CONSENT_GRANTED = {
  analytics_storage:       'granted',
  ad_storage:              'granted',
  ad_user_data:            'granted',
  ad_personalization:      'granted',
  functionality_storage:   'granted',
  personalization_storage: 'granted',
};

const CONSENT_DENIED = {
  analytics_storage:       'denied',
  ad_storage:              'denied',
  ad_user_data:            'denied',
  ad_personalization:      'denied',
  functionality_storage:   'denied',
  personalization_storage: 'denied',
};

function updateConsent(state) {
  if (typeof gtag === 'function') {
    gtag('consent', 'update', state);
  }
}

/* ---- AdSense ---- */
function loadAdSense() {
  if (document.getElementById('adsense-script')) return;
  const s = document.createElement('script');
  s.id = 'adsense-script';
  s.async = true;
  s.crossOrigin = 'anonymous';
  s.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`;
  document.head.appendChild(s);
  document.querySelectorAll('.adsbygoogle').forEach(() => {
    try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch (_) {}
  });
}

/* ---- Banner ---- */
function hideBanner() {
  const el = document.getElementById('cookieConsent');
  if (el) el.classList.add('hidden');
}

function acceptCookies() {
  localStorage.setItem(CONSENT_KEY, 'accepted');
  hideBanner();
  updateConsent(CONSENT_GRANTED);
  loadAdSense();
}

function declineCookies() {
  localStorage.setItem(CONSENT_KEY, 'declined');
  hideBanner();
  updateConsent(CONSENT_DENIED);
}

function injectBanner() {
  /* Usa App.t() se disponível, caso contrário usa textos em PT como fallback */
  const t = (key, fallback) => (typeof App !== 'undefined' ? App.t(key) : fallback);

  const banner = document.createElement('div');
  banner.id = 'cookieConsent';
  banner.innerHTML = `
    <div class="consent-text">
      ${t('consent.text',
        '<strong>LinkedEvil</strong> usa cookies para exibir publicidade personalizada via <strong>Google AdSense</strong> e melhorar sua experiência. Ao continuar, você concorda com nossa <a href="privacy.html">Política de Privacidade</a> e com o uso de cookies.'
      )}
    </div>
    <div class="consent-actions">
      <button class="btn-consent-decline" onclick="declineCookies()">${t('consent.decline', 'Recusar')}</button>
      <button class="btn-consent-accept"  onclick="acceptCookies()">${t('consent.accept', 'Aceitar cookies')}</button>
    </div>`;
  document.body.appendChild(banner);
}

/* ---- Inicialização ---- */
document.addEventListener('DOMContentLoaded', () => {
  const consent = localStorage.getItem(CONSENT_KEY);
  if (consent === 'accepted') {
    updateConsent(CONSENT_GRANTED);
    loadAdSense();
  } else if (consent === 'declined') {
    updateConsent(CONSENT_DENIED);
  } else {
    injectBanner();
  }
});
