# AGENTS.md - Ochenta Noventa Website

## 📋 Descripción del Proyecto

**Ochenta Noventa** es un sitio web oficial de una banda musical de Buenos Aires especializada en versiones únicas de clásicos del Rock Argentino para eventos privados (casamientos, cumpleaños, eventos corporativos).

### Tipo de Proyecto
- **Framework**: Next.js 15.4.10 (App Router)
- **Lenguaje**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Package Manager**: **pnpm** (IMPORTANTE: usar siempre `pnpm`, NO `npm`)
- **Deployment**: **Vercel** (Sitio oficial deployado en Vercel)

## 🏗️ Arquitectura del Proyecto

```
ochentanoventa-v2/
├── .env.example               # Variables de entorno documentadas
├── .env.local                 # Variables de entorno locales (git ignored)
├── src/
│   ├── app/                   # App Router de Next.js
│   │   ├── layout.tsx        # Layout principal con metadata SEO
│   │   ├── page.tsx          # Página principal (home)
│   │   ├── error.tsx         # Error boundary global
│   │   ├── globals.css       # Estilos globales y theme tokens
│   │   ├── robots.ts         # Configuración robots.txt
│   │   └── sitemap.ts        # Sitemap dinámico
│   └── lib/
│       ├── components/       # Componentes React
│       │   ├── ui/          # Componentes UI reutilizables
│       │   ├── Navbar/      # Navegación
│       │   ├── ErrorBoundary.tsx  # Error boundary component
│       │   └── [otros]      # Secciones específicas
│       ├── constants/        # Constantes modularizadas ⭐
│       │   ├── index.ts     # Exportaciones centralizadas
│       │   ├── hero.ts      # Constantes Hero Section
│       │   ├── versions.ts  # Constantes Versions Section
│       │   ├── events.ts    # Constantes Events Section
│       │   └── media.ts     # Imágenes y volúmenes
│       ├── config/           # Configuración del sitio ⭐
│       │   └── site.ts      # URLs, links, configuración general
│       ├── types/            # Tipos TypeScript centralizados ⭐
│       │   └── index.ts     # Todos los tipos del proyecto
│       ├── hooks/            # Custom hooks
│       ├── services/         # Servicios externos
│       │   └── strapi/      # Integración con Strapi CMS
│       │       ├── defaults.ts    # Valores fallback
│       │       ├── types.ts       # Tipos Strapi
│       │       └── [servicios]    # getCarousel, getBanner, etc.
│       └── utils.ts          # Utilidades
├── public/
│   └── images/              # Assets estáticos
└── [archivos de configuración]
```

## 🔑 Conceptos Clave

### 1. **Gestión de Contenido**
- **Strapi CMS**: El proyecto consume imágenes de un CMS Strapi headless
- **Error Handling**: Todos los servicios Strapi tienen manejo de errores con fallbacks
- **Archivos relevantes**:
  - `src/lib/services/strapi/` - Servicios para obtener datos
  - `src/lib/services/strapi/defaults.ts` - Valores fallback cuando Strapi falla
  - `src/lib/constants/` - Contenido estático modularizado por sección ⭐

### 2. **Secciones Principales**
El sitio es una **single-page application** con las siguientes secciones:
1. **Banner** - Anuncio destacado (desde Strapi)
2. **Hero Section** - Presentación de la banda con carousel
3. **Versions Section** - Discografía y enlaces a Spotify
4. **Events Section** - Información sobre eventos privados
5. **Contact Section** - Formulario de contacto (EmailJS)

### 3. **Formulario de Contacto**
- Usa **EmailJS** para envío de correos
- **Credenciales**: Configuradas en variables de entorno (`.env.local`)
  - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
  - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
  - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
- Validación con `react-hook-form` y `zod`
- Manejo de errores con feedback al usuario

### 4. **SEO Implementado**
- Metadata en `layout.tsx`
- JSON-LD Schema.org (Organization)
- `robots.ts` y `sitemap.ts` dinámicos
- Imágenes optimizadas con Next.js Image

## 🛠️ Comandos Importantes

```bash
# IMPORTANTE: Este proyecto usa pnpm, NO npm
pnpm dev          # Servidor de desarrollo
pnpm build        # Build de producción
pnpm start        # Servidor de producción
pnpm lint         # Linting
pnpm ts-check     # Type checking
```

## 📦 Dependencias Principales

### Producción
- `next` - Framework React
- `react` & `react-dom` - Librería UI
- `@emailjs/browser` - Envío de emails
- `react-hook-form` - Gestión de formularios
- `zod` - Validación de schemas
- `embla-carousel-react` - Carousels
- `lucide-react` - Iconos
- `react-hot-toast` - Notificaciones

### Desarrollo
- `tailwindcss` - Framework CSS
- `prettier` & `prettier-plugin-tailwindcss` - Formateo
- `eslint` - Linting
- `husky` - Git hooks
- `@commitlint` - Validación de commits

## 🎨 Sistema de Diseño

### Tokens de Color (globals.css)
```css
--white: #f6f6f6
--gold: #fff0ba
--grey: #e5e5e5
```

### Fuentes
- **Roboto**: Texto general (weights: 100, 400, 700)
- **Montserrat**: Títulos (weights: 700, 800)

## 🔄 Flujo de Datos

1. **Página Principal** (`app/page.tsx`):
   - Obtiene imágenes del carousel desde Strapi
   - Pasa datos a componentes de sección
   - Usa constantes para contenido estático

2. **Strapi Integration**:
   - `getCarousel()` - Obtiene 3 sets de imágenes
   - `getBanner()` - Obtiene banner promocional
   - `getLastVolume()` - Obtiene último volumen musical

## 🚨 Reglas Importantes para Agentes

### ⚠️ CRÍTICO
1. **SIEMPRE usar `pnpm`**, nunca `npm` o `yarn`
2. **Variables de entorno**: Las credenciales están en `.env.local`, NO hardcodeadas
3. **Imports**: Usar `@/lib/constants` para constantes y `@/lib/types` para tipos
4. **Error boundaries**: El proyecto tiene manejo global de errores, respetarlo
5. **Respetar** la estructura de carpetas modular existente
6. **Mantener** el idioma español en todo el contenido

### 📝 Convenciones de Código
- **Commits**: Seguir Conventional Commits (enforced por commitlint)
- **Formato**: Prettier con plugin de Tailwind
- **TypeScript**: Modo strict habilitado
- **Componentes**: Usar Server Components por defecto, marcar 'use client' solo cuando sea necesario

### ✅ Mejoras Implementadas (2026-01-26)

#### Arquitectura
- ✅ **Variables de entorno**: `.env.example` creado, credenciales movidas a env vars
- ✅ **Error boundaries**: Implementado `ErrorBoundary.tsx` y `error.tsx` global
- ✅ **Manejo de errores Strapi**: Try-catch con fallbacks en todos los servicios
- ✅ **Constantes modularizadas**: Separadas por sección en `lib/constants/`
- ✅ **Types centralizados**: Todos los tipos en `lib/types/index.ts`
- ✅ **Config centralizada**: `lib/config/site.ts` para configuración del sitio
- ✅ **Next.js Image optimizado**: AVIF/WebP, tamaños responsivos, cache headers

#### Pendientes SEO
- ⏳ Agregar más metadata (Open Graph, Twitter Cards)
- ⏳ Implementar breadcrumbs schema
- ⏳ Agregar canonical URLs
- ⏳ Mejorar alt text de imágenes

#### Pendientes Accesibilidad
- ⏳ Agregar skip navigation links
- ⏳ Mejorar contraste de colores
- ⏳ Implementar focus visible en elementos interactivos
- ⏳ Agregar ARIA labels donde corresponda

## 🔗 URLs y Recursos

- **Sitio Web**: https://www.ochentanoventa.com.ar
- **Spotify**: https://open.spotify.com/artist/1t7L3htJvTcz93Fa9aMiI6
- **CMS**: Strapi (hostname: `**.media.strapiapp.com`)

## 📞 Contacto y Soporte

Para consultas sobre el proyecto, referirse a:
- **Variables de entorno**: Ver `.env.example` para lista completa
- **Configuración de EmailJS**: Variables en `.env.local`
- **Configuración de Strapi**: `lib/services/strapi/` con error handling
- **Constantes**: `lib/constants/` (modularizado por sección)
- **Tipos**: `lib/types/index.ts` (centralizados)

---

## 🔄 Historial de Cambios

### 2026-01-26: Mejoras de Arquitectura

**Cambios Implementados:**

1. **Variables de Entorno**
   - Creado `.env.example` con documentación completa
   - Movidas credenciales de EmailJS de hardcoded a env vars
   - Form.tsx actualizado para usar `process.env.NEXT_PUBLIC_*`

2. **Error Handling**
   - Implementado `ErrorBoundary.tsx` component
   - Agregado `app/error.tsx` para error boundary global
   - Servicios Strapi con try-catch y fallbacks (`defaults.ts`)
   - Mejor logging de errores con `console.error`

3. **Organización de Código**
   - Constantes modularizadas en `lib/constants/`:
     - `hero.ts` - Hero Section content
     - `versions.ts` - Versions Section content
     - `events.ts` - Events Section content
     - `media.ts` - Imágenes y volúmenes
     - `index.ts` - Exportaciones centralizadas
   - Types centralizados en `lib/types/index.ts`
   - Config en `lib/config/site.ts`
   - `app/constants.ts` ahora re-exporta (deprecated pero compatible)

4. **Optimización de Imágenes**
   - `next.config.ts` mejorado:
     - Formatos AVIF y WebP habilitados
     - Device sizes optimizados: [350, 590, 768, 1024, 1280, 1920]
     - Cache headers para assets estáticos (1 año)
    - **Fix**: Agregado `"use client"` a `src/app/error.tsx` para evitar errores de compilación

**Impacto:**
- ✅ Mejor seguridad (credenciales en env vars)
- ✅ Mejor mantenibilidad (código modular)
- ✅ Mejor resiliencia (error handling con fallbacks)
- ✅ Mejor performance (imágenes optimizadas)
- ✅ Backward compatible (re-exports en app/constants.ts)

---

### Instrucciones Especiales
- **Cada vez que se haga un cambio de código**, verificar que el build funcione correctamente con `pnpm build`
- **Antes de commits**, asegurarse de que pase el linting y type checking
- **Al agregar nuevas dependencias**, documentarlas en esta sección
- **Al modificar constantes**, editar archivos en `lib/constants/`, NO en `app/constants.ts`
