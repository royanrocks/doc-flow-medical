// Doc Flow Medical — shared interactions

const TEXT_SIZES = [87.5, 100, 112.5, 125, 150, 175];
const TEXT_SIZE_KEY = 'df-text-size';

function applyTextSize(pct) {
  document.documentElement.style.fontSize = pct + '%';
  try { localStorage.setItem(TEXT_SIZE_KEY, String(pct)); } catch (e) {}
  const status = document.getElementById('a11y-status');
  if (status) status.textContent = 'Text size ' + Math.round(pct) + '%';
}

function currentTextSize() {
  let saved = NaN;
  try { saved = parseFloat(localStorage.getItem(TEXT_SIZE_KEY)); } catch (e) {}
  return TEXT_SIZES.includes(saved) ? saved : 100;
}

// Google Translate keeps the chosen language in the "googtrans" cookie, so it
// persists across pages. The cookie may be set on the bare host or the parent domain.
function clearTranslateCookie() {
  const host = location.hostname;
  const expired = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
  document.cookie = expired;
  document.cookie = expired + '; domain=' + host;
  document.cookie = expired + '; domain=.' + host.split('.').slice(-2).join('.');
}

function translateTo(lang) {
  if (lang === 'en') {
    clearTranslateCookie();
    location.reload();
    return;
  }
  const combo = document.querySelector('.goog-te-combo');
  if (combo) {
    combo.value = lang;
    combo.dispatchEvent(new Event('change'));
  } else {
    document.cookie = 'googtrans=/en/' + lang + '; path=/';
    location.reload();
  }
}

window.dfTranslateInit = function () {
  if (!window.google || !google.translate) return;
  new google.translate.TranslateElement(
    { pageLanguage: 'en', autoDisplay: false },
    'google_translate_element'
  );
  const labelCombo = () => {
    const combo = document.querySelector('.goog-te-combo');
    if (!combo) return false;
    combo.setAttribute('aria-label', 'Translate this page — choose a language');
    return true;
  };
  if (!labelCombo()) {
    const obs = new MutationObserver(() => { if (labelCombo()) obs.disconnect(); });
    obs.observe(document.getElementById('google_translate_element'), { childList: true, subtree: true });
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && nav.classList.contains('open')) {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Open menu');
        toggle.focus();
      }
    });
  }

  const status = document.createElement('div');
  status.id = 'a11y-status';
  status.className = 'visually-hidden';
  status.setAttribute('role', 'status');
  document.body.appendChild(status);

  document.querySelectorAll('[data-text-size]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const i = TEXT_SIZES.indexOf(currentTextSize());
      const action = btn.dataset.textSize;
      if (action === 'up') applyTextSize(TEXT_SIZES[Math.min(i + 1, TEXT_SIZES.length - 1)]);
      else if (action === 'down') applyTextSize(TEXT_SIZES[Math.max(i - 1, 0)]);
      else applyTextSize(100);
    });
  });

  document.querySelectorAll('[data-translate]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      translateTo(btn.dataset.translate);
    });
  });
});
