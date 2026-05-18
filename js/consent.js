/**
 * consent.js — cookie consent banner + conditional AdSense loader.
 * AdSense is only injected after the user explicitly accepts cookies,
 * following GDPR / ePrivacy requirements.
 */

const CONSENT_KEY = 'linkedevil_cookie_consent';
// Replace with your actual AdSense publisher ID before going live:
const ADSENSE_CLIENT = 'ca-pub-XXXXXXXXXXXXXXXXX';

function loadAdSense() {
  if (document.getElementById('adsense-script')) return;
  const s = document.createElement('script');
  s.id = 'adsense-script';
  s.async = true;
  s.crossOrigin = 'anonymous';
  s.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`;
  document.head.appendChild(s);

  /* Push any already-rendered ad slots */
  document.querySelectorAll('.adsbygoogle').forEach(() => {
    try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch(_) {}
  });
}

function hideBanner() {
  const el = document.getElementById('cookieConsent');
  if (el) el.classList.add('hidden');
}

function acceptCookies() {
  localStorage.setItem(CONSENT_KEY, 'accepted');
  hideBanner();
  loadAdSense();
}

function declineCookies() {
  localStorage.setItem(CONSENT_KEY, 'declined');
  hideBanner();
}

function injectBanner() {
  const banner = document.createElement('div');
  banner.id = 'cookieConsent';
  banner.innerHTML = `
    <div class="consent-text">
      <strong>LinkedEvil</strong> usa cookies para exibir publicidade personalizada via
      <strong>Google AdSense</strong> e melhorar sua experiência.
      Ao continuar, você concorda com nossa
      <a href="#">Política de Privacidade</a> e com o uso de cookies.
    </div>
    <div class="consent-actions">
      <button class="btn-consent-decline" onclick="declineCookies()">Recusar</button>
      <button class="btn-consent-accept" onclick="acceptCookies()">Aceitar cookies</button>
    </div>`;
  document.body.appendChild(banner);
}

document.addEventListener('DOMContentLoaded', () => {
  const consent = localStorage.getItem(CONSENT_KEY);
  if (consent === 'accepted') {
    loadAdSense();
  } else if (!consent) {
    injectBanner();
  }
  // 'declined' → do nothing (no AdSense, no banner)
});
