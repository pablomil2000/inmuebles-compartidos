interface Translations {
  nav: {
    home: string;
    properties: string;
    rooms: string;
    contact: string;
  };
  welcome: {
    title: string;
    description: string;
  };
  filters: {
    price: string;
    min: string;
    max: string;
    room_type: string;
    bathroom: string;
    features: string;
    individual: string;
    shared: string;
    private_bathroom: string;
    shared_bathroom: string;
    furnished: string;
    desk: string;
    tv: string;
    wifi: string;
    air_conditioning: string;
    heating: string;
    apply: string;
  };
  rooms: {
    individual: string;
    shared: string;
    private: string;
    shared_bathroom: string;
  }
}

export const languages = {
  es: 'Español',
  en: 'English',
};

export const defaultLang = 'es';

export const translations: Record<string, Translations> = {
  es: {
    nav: {
      home: 'Inicio',
      properties: 'Propiedades',
      rooms: 'Habitaciones',
      contact: 'Contacto'
    },
    welcome: {
      title: 'Bienvenido a Inmuebles',
      description: 'Encuentra tu hogar ideal'
    },
    filters: {
      price: 'Precio',
      min: 'Mínimo',
      max: 'Máximo',
      room_type: 'Tipo de habitación',
      bathroom: 'Baño',
      features: 'Características',
      individual: 'Individual',
      shared: 'Compartida',
      private_bathroom: 'Baño privado',
      shared_bathroom: 'Baño compartido',
      furnished: 'Amueblada',
      desk: 'Escritorio',
      tv: 'TV',
      wifi: 'WiFi',
      air_conditioning: 'Aire acondicionado',
      heating: 'Calefacción',
      apply: 'Aplicar filtros'
    },
    rooms: {
      individual: 'Individual',
      shared: 'Compartida',
      private: 'Baño privado',
      shared_bathroom: 'Baño compartido'
    }
  },
  en: {
    nav: {
      home: 'Home',
      properties: 'Properties',
      rooms: 'Rooms',
      contact: 'Contact'
    },
    welcome: {
      title: 'Welcome to Real Estate',
      description: 'Find your ideal home'
    },
    filters: {
      price: 'Price',
      min: 'Min',
      max: 'Max',
      room_type: 'Room Type',
      bathroom: 'Bathroom',
      features: 'Features',
      individual: 'Individual',
      shared: 'Shared',
      private_bathroom: 'Private bathroom',
      shared_bathroom: 'Shared bathroom',
      furnished: 'Furnished',
      desk: 'Desk',
      tv: 'TV',
      wifi: 'WiFi',
      air_conditioning: 'Air conditioning',
      heating: 'Heating',
      apply: 'Apply filters'
    },
    rooms: {
      individual: 'Individual',
      shared: 'Shared',
      private: 'Private bathroom',
      shared_bathroom: 'Shared bathroom'
    }
  }
};
