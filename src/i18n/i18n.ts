import { translations, type Lang } from './translations';

function formatDuration(startYear: number, startMonth: number, t: Record<string, string>): string {
  const now = new Date();
  let years = now.getFullYear() - startYear;
  let months = now.getMonth() - (startMonth - 1);

  if (months < 0) {
    years--;
    months += 12;
  }

  const parts: string[] = [];
  if (years > 0) {
    parts.push(`${years} ${years === 1 ? t['duration.year_one'] : t['duration.year_other']}`);
  }
  if (months > 0) {
    parts.push(`${months} ${months === 1 ? t['duration.month_one'] : t['duration.month_other']}`);
  }

  return parts.length > 0 ? parts.join(', ') : t['duration.less'];
}

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

  // Update dynamic duration spans — format: "YYYY-MM" e.g. "2025-09"
  document.querySelectorAll<HTMLElement>('[data-i18n-duration]').forEach((el) => {
    const dateStr = el.getAttribute('data-i18n-duration')!;
    const [year, month] = dateStr.split('-').map(Number);
    el.textContent = formatDuration(year, month, t);
  });

  // Sync the html[lang] attribute
  document.documentElement.lang = lang;

  // Persist the choice
  localStorage.setItem('lang', lang);

  // Signal that translations have been applied (used by typewriter)
  document.dispatchEvent(new CustomEvent('i18n:applied', { detail: { lang } }));
}

export function getCurrentLang(): Lang {
  const stored = localStorage.getItem('lang');
  if (stored === 'es' || stored === 'en') return stored;
  return 'es';
}
