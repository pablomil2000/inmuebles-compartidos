import { translations } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  return lang === 'en' ? 'en' : 'es';
}

export function useTranslations(lang: string) {
  return translations[lang as keyof typeof translations];
}

export function getRouteFromUrl(url: URL): string {
  const pathname = url.pathname;
  const parts = pathname.split('/');

  // Eliminar el primer elemento vacío y el idioma (si existe)
  parts.shift(); // eliminar primera '/'
  if (parts[0] === 'en') {
    parts.shift(); // eliminar 'en'
  }

  return '/' + parts.join('/');
}
