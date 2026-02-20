import { translations, type Lang } from './translations';

export function applyTranslations(lang: Lang): void {
  const t = translations[lang];

  // Update plain text content
  document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n')!;
    if (key in t) el.textContent = t[key];
  });

  // Update inner HTML (for elements with embedded tags like <span>)
  document.querySelectorAll<HTMLElement>('[data-i18n-html]').forEach((el) => {
    const key = el.getAttribute('data-i18n-html')!;
    if (key in t) el.innerHTML = t[key];
  });

  // Update input/textarea placeholders
  document.querySelectorAll<HTMLInputElement>('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder')!;
    if (key in t) el.placeholder = t[key];
  });

  // Sync the html[lang] attribute
  document.documentElement.lang = lang;

  // Persist the choice
  localStorage.setItem('lang', lang);
}

export function getCurrentLang(): Lang {
  const stored = localStorage.getItem('lang');
  if (stored === 'es' || stored === 'en') return stored;
  return 'es';
}
