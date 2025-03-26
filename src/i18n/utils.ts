import { translations } from './ui';

export interface Translations {
  'nav.home': string;
  'nav.properties': string;
  'nav.rooms': string;
  'nav.contact': string;
  filters: {
    price: string;
    min: string;
    max: string;
    bedrooms: string;
    bathrooms: string;
    features: string;
    furnished: string;
    desk: string;
    tv: string;
    wifi: string;
    air_conditioning: string;
    heating: string;
    apply: string;
    garage: string;
    pool: string;
    garden: string;
  };
  rooms: {
    individual: string;
    shared: string;
    private: string;
    shared_bathroom: string;
  };
  contact: {
    info_title: string;
    form_title: string;
    address: string;
    phone: string;
    email: string;
    hours: string;
    schedule: string;
    name: string;
    email_field: string;
    phone_field: string;
    subject: string;
    message: string;
    send: string;
  };
}

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
