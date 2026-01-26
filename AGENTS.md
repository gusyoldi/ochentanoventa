# AGENTS.md - Ochenta Noventa Website

Este documento centraliza la información crítica para que cualquier agente de IA o desarrollador pueda entender, mantener y escalar el proyecto **Ochenta Noventa**.

## 📋 Descripción del Proyecto
**Ochenta Noventa** es el sitio web oficial de una banda musical de Buenos Aires. Funciona como una Single Page Application (SPA) orientada a promocionar versiones de clásicos del rock argentino y facilitar la contratación para eventos privados.

### Stack Tecnológico
- **Framework**: Next.js 15.4.10 (App Router)
- **UI**: React 19 + Tailwind CSS 4
- **Lenguaje**: TypeScript 5
- **CMS**: Strapi (Headless) para gestión de imágenes y contenido dinámico.
- **Formulario**: EmailJS para envío de consultas.
- **Package Manager**: **pnpm** (IMPORTANTE: Se ha migrado de npm a pnpm. Usar siempre `pnpm` y mantener `pnpm-lock.yaml`).
- **Deployment**: Vercel.

## 🏗️ Arquitectura y Estructura
- `src/app/`: Rutas, layouts y páginas principales.
- `src/lib/components/`: Componentes organizados por sección (Hero, Events, Contact, etc.).
- `src/lib/hooks/`: Hooks personalizados (ej. `useFocusTrap`, `useClickOutside`).
- `src/lib/services/strapi/`: Capa de servicios para consumo de CMS con manejo de errores y fallbacks.
- `src/lib/constants/`: Contenido estático modularizado (históricamente en `app/constants.ts`, ahora transicionando a modular).
- `public/`: Assets estáticos y multimedia.

## 🚨 Reglas Críticas
1. **Variables de Entorno**: Nunca hardcodear secretos. Usar `.env.local` y el prefijo `NEXT_PUBLIC_` para variables accesibles desde el cliente.
2. **Resiliencia**: Siempre usar bloques `try/catch` y valores **fallback** en servicios externos (Strapi/EmailJS) para evitar que el build o la página fallen.
3. **Flujo Git**: Seguir **Conventional Commits**. Trabajar en ramas de funcionalidad y crear PRs hacia `main`.
4. **SEO y Accesibilidad**:
   - Mantener `lang="es"` en `layout.tsx`.
   - Asegurar Open Graph / Twitter Cards metadata.
   - Usar textos `alt` descriptivos en imágenes.
   - **Focus Trap**: Mantener el foco atrapado en modales y usar `autoFocus` en formularios.

## ✅ Mejoras Implementadas (Enero 2026)
- **Arquitectura**: Migración parcial a constantes modulares, tipos centralizados y manejo global de errores (`error.tsx`).
- **SEO/Accesibilidad**: Metadata enriquecida configurada, idioma corregido a español, y mejoras de navegación con teclado (Focus Trap).
- **Tooling**: Configuración de `pnpm` forzada para deploy en Vercel.

## 🛠️ Comandos Útiles
```bash
pnpm dev          # Desarrollo
pnpm run build    # Build de producción (e inspección de tipos)
pnpm ts-check     # Verificación de tipos manual
pnpm lint         # Linting de código
```

---
*Si realizas cambios estructurales, actualiza este documento para el próximo agente.*
