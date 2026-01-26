# TAREAS.md - Resumen de Progreso Ochenta Noventa

Este archivo resume las mejoras realizadas y los próximos pasos organizados por temática.

---

## 🏗️ Arquitectura y Estabilidad
Liderar la transición tecnológica y asegurar que el sitio sea resiliente ante fallos.

### ✅ Hecho
- **Variables de Entorno**: Configurado `.env.example` y movidas credenciales de EmailJS de código a env vars.
- **Resiliencia Strapi**: Implementado `try/catch` y valores **fallback** en todos los servicios de Strapi para evitar fallos de build/página.
- **Gestión de Errores**: Implementado `ErrorBoundary` global y página `error.tsx` personalizada.
- **Gestión de Paquetes**: Migración de `npm` a **`pnpm`** y limpieza de conflictos de lockfiles en Vercel.
- **Modularización**: Inicio de la separación de constantes por sección y centralización de tipos TypeScript.

### ⏳ Pendiente
- **Optimización de Bundle**: Analizar y reducir el tamaño del JS enviado al cliente.
- **Cache Headers**: Configurar headers de caché agresivos para activos estáticos.

---

## 🔍 SEO (Search Engine Optimization)
Mejorar la visibilidad en buscadores y la presentación en redes sociales.

### ✅ Hecho
- **Configuración Básica**: Idioma corregido a español (`lang="es"`).
- **Metadata Enriquecida**: Implementado Open Graph (Facebook/WhatsApp) y Twitter Cards en `layout.tsx`.
- **Textos Alternativos**: Actualizados los `alt` de las imágenes en constantes para ser descriptivos y amigables para Google Images.
- **Canonical URLs**: Configurado `metadataBase` para asegurar links canónicos correctos.

### ⏳ Pendiente
- **Schema.org Expandido**: Implementar tipos `MusicGroup`, `Service` (eventos) y `MusicRecording` para Rich Snippets.
- **Keywords**: Refinar lista de palabras clave según tendencias.

---

## ♿ Accesibilidad (A11y)
Asegurar que cualquier persona, independientemente de sus capacidades, pueda usar el sitio.

### ✅ Hecho
- **Navegación con Teclado**: Implementado **Focus Trap** en modales y **autoFocus** en formularios para evitar navegación "ciega".
- **Estilos Visuales**: Agregados estilos de `focus-visible` (borde dorado) para identificar el foco actual.
- **Contexto Semántico**: Agregados **ARIA labels** en Navbar y Carousels.
- **Cierre Intuitivo**: Soporte para tecla `Escape` en modales.

### ⏳ Pendiente
- **Contraste**: Auditar colores específicos (ej. dorado sobre blanco) con estándar WCAG AA.
- **Auncios Dinámicos**: Implementar `aria-live` para mensajes de éxito/error en formularios.

---

## 🖼️ Performance y UI
Velocidad de carga y experiencia visual fluida.

### ✅ Hecho
- **Formatos Modernos**: Habilitados AVIF y WebP en la configuración de Next.js.
- **Imágenes Responsivas**: Configurados `deviceSizes` y optimizados `sizes` en carousels.

### ⏳ Pendiente
- **LCP Optimization**: Priorizar la carga de la primera imagen del Hero.
- **Placeholders**: Agregar efecto de `blur` durante la carga de portadas de álbumes.

---
*Última actualización: 26 de Enero, 2026*
