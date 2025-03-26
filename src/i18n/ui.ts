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

export const languages = {
  es: 'Español',
  en: 'English',
} as const;

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
      bedrooms: 'Dormitorios',
      bathrooms: 'Baños',
      features: 'Características',
      furnished: 'Amueblado',
      desk: 'Escritorio',
      tv: 'TV',
      wifi: 'WiFi',
      air_conditioning: 'Aire acondicionado',
      heating: 'Calefacción',
      apply: 'Aplicar filtros',
      garage: 'Garaje',
      pool: 'Piscina',
      garden: 'Jardín'
    },
    rooms: {
      individual: 'Individual',
      shared: 'Compartida',
      private: 'Baño privado',
      shared_bathroom: 'Baño compartido'
    },
    contact: {
      info_title: 'Información de Contacto',
      form_title: 'Envíanos un Mensaje',
      address: 'Dirección',
      phone: 'Teléfono',
      email: 'Correo Electrónico',
      hours: 'Horario',
      schedule: 'Lunes a Viernes: 9:00 - 20:00\nSábados: 10:00 - 14:00',
      name: 'Nombre',
      email_field: 'Correo Electrónico',
      phone_field: 'Teléfono',
      subject: 'Asunto',
      message: 'Mensaje',
      send: 'Enviar Mensaje'
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
      bedrooms: 'Bedrooms',
      bathrooms: 'Bathrooms',
      features: 'Features',
      furnished: 'Furnished',
      desk: 'Desk',
      tv: 'TV',
      wifi: 'WiFi',
      air_conditioning: 'Air Conditioning',
      heating: 'Heating',
      apply: 'Apply Filters',
      garage: 'Garage',
      pool: 'Pool',
      garden: 'Garden'
    },
    rooms: {
      individual: 'Individual',
      shared: 'Shared',
      private: 'Private bathroom',
      shared_bathroom: 'Shared bathroom'
    },
    contact: {
      info_title: 'Contact Information',
      form_title: 'Send us a Message',
      address: 'Address',
      phone: 'Phone',
      email: 'Email',
      hours: 'Business Hours',
      schedule: 'Monday to Friday: 9:00 AM - 8:00 PM\nSaturday: 10:00 AM - 2:00 PM',
      name: 'Name',
      email_field: 'Email',
      phone_field: 'Phone',
      subject: 'Subject',
      message: 'Message',
      send: 'Send Message'
    }
  }
};
