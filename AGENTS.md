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
- **Package Manager**: **pnpm** (IMPORTANTE: usar siempre `pnpm`, mantener `pnpm-lock.yaml`).
- **Deployment**: Vercel.

## 🏗️ Arquitectura y Estructura

```
ochentanoventa-v2/
├── src/
│   ├── app/                   # App Router de Next.js
│   │   ├── layout.tsx         # Layout principal con metadata SEO
│   │   ├── page.tsx           # Página principal (home)
│   │   ├── error.tsx          # Error boundary global
│   └── lib/
│       ├── components/        # Componentes organizados por sección
│       ├── constants/         # Contenido estático modularizado ⭐
│       ├── config/            # Configuración de sitio (site.ts)
│       ├── types/             # Tipos TypeScript centralizados
│       ├── hooks/             # Custom hooks (ej. useFocusTrap)
│       └── services/          # Strapi & EmailJS integration
└── public/                    # Assets estáticos
```

## 🚨 Reglas Críticas
1. **Variables de Entorno**: Nunca hardcodear secretos. Usar `.env.local`.
2. **Resiliencia**: Siempre usar bloques `try/catch` y valores **fallback** en servicios externos.
3. **Flujo Git**: Seguir **Conventional Commits**.
4. **TypeScript Estricto**: Prohibido el uso de `any`. Ver [RULES.md](file:///Users/gustavoyoldi/src/deployed/ochentanoventa-v2/RULES.md).
5. **SEO y Accesibilidad**:
   - Mantener metadata Open Graph / Twitter Cards.
   - Usar textos `alt` descriptivos.
   - **Focus Trap** en modales.

## ✅ Mejoras Implementadas (Enero 2026)
- **Arquitectura**: Migración a constantes modulares y tipos centralizados.
- **Resiliencia**: Manejo de errores Strapi con fallbacks.
- **Estabilidad**: Solución de errores de build por tipos `any`.
- **Tooling**: Configuración forzada de `pnpm`.

## 🛠️ Comandos Útiles
```bash
pnpm dev          # Desarrollo
pnpm run build    # Build de producción
pnpm ts-check     # Verificación de tipos
pnpm lint         # Linting
```

---
*Para reglas detalladas de codificación para LLMs, consultar [RULES.md](file:///Users/gustavoyoldi/src/deployed/ochentanoventa-v2/RULES.md).*
