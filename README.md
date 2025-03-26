# Inmuebles Compartidos

Plataforma web multilingüe para la gestión y visualización de propiedades inmobiliarias, desarrollada con Astro.js.

## 🏠 Descripción del Proyecto

Este proyecto es una aplicación web moderna para la gestión de propiedades inmobiliarias que ofrece:
- Soporte multilingüe (Español/Inglés)
- Catálogo de propiedades y habitaciones
- Filtros de búsqueda avanzados
- Diseño responsive y moderno
- Sistema de rutas internacionalizadas

## 🚀 Estructura del Proyecto

```text
/
├── public/
│   ├── images/
│   │   ├── flags/          # Banderas para selector de idioma
│   │   ├── properties/     # Imágenes de propiedades
│   │   └── rooms/         # Imágenes de habitaciones
│   └── favicon.svg
├── src/
│   ├── assets/           # Recursos estáticos
│   ├── components/       # Componentes reutilizables
│   │   ├── Navbar.astro
│   │   ├── PropertyCard.astro
│   │   ├── PropertyFilters.astro
│   │   ├── RoomFilters.astro
│   │   └── Welcome.astro
│   ├── content/         # Contenido en Markdown
│   │   ├── properties/  # Datos de propiedades
│   │   └── rooms/      # Datos de habitaciones
│   ├── i18n/           # Configuración de internacionalización
│   ├── layouts/        # Plantillas base
│   └── pages/          # Rutas y páginas
│       ├── en/         # Páginas en inglés
│       └── es/         # Páginas en español
└── package.json
```

## ⚙️ Tecnologías Utilizadas

- [Astro.js](https://astro.build/) - Framework web
- Content Collections para gestión de contenido
- i18n para internacionalización
- Sistema de rutas dinámicas
- Markdown para contenido estructurado

## 🧞 Comandos

| Comando                   | Acción                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Instala dependencias                             |
| `npm run dev`             | Inicia servidor de desarrollo en `localhost:4321`|
| `npm run build`           | Construye el sitio para producción              |
| `npm run preview`         | Previsualiza la build localmente                |

## 🌐 Internacionalización

El proyecto soporta múltiples idiomas:
- 🇪🇸 Español (por defecto)
- 🇬🇧 Inglés

La estructura de rutas refleja esta configuración con prefijos de idioma (/es/, /en/).

## 📝 Gestión de Contenido

El contenido se gestiona a través de archivos Markdown en:
- `/src/content/properties/` - Para propiedades inmobiliarias
- `/src/content/rooms/` - Para habitaciones y suites

Cada propiedad y habitación tiene su propia página detallada con imágenes y características.
