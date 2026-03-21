# Ochenta Noventa

Sitio web oficial de **Ochenta Noventa**, una banda de Buenos Aires dedicada a realizar versiones de clásicos del rock argentino. Esta aplicación facilita la promoción de la banda y la contratación para eventos privados a través de una experiencia de usuario moderna y fluida.

## 🚀 Características

- **Diseño Moderno**: Interfaz construida con React 19 y Tailwind CSS 4.
- **CMS Headless**: Integración con Strapi para la gestión dinámica de contenido (imágenes, fechas, etc.).
- **Formulario de Contacto**: Funcionalidad de contacto integrada con EmailJS.
- **SEO & Performance**: Optimizada con Next.js 15 App Router, metadatos Open Graph y JSON-LD.
- **Accesibilidad**: Componentes diseñados con mejores prácticas (focus trap, textos alternativos).
- **Calidad de Código**: Testing con Vitest y Playwright, y tipado estricto con TypeScript.

## 🛠 Stack Tecnológico

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Lenguaje**: [TypeScript](https://www.typescriptlang.org/)
- **Estilos**: [Tailwind CSS 4](https://tailwindcss.com/)
- **CMS**: Strapi
- **Email**: EmailJS
- **Testing**: Vitest, Playwright
- **Package Manager**: [pnpm](https://pnpm.io/)

## 🏁 Comenzando

### Prerrequisitos

- Node.js (versión LTS recomendada)
- pnpm

### Instalación

1. Clonar el repositorio:
   ```bash
   git clone <url-del-repo>
   cd ochentanoventa-v2
   ```

2. Instalar dependencias:
   ```bash
   pnpm install
   ```

3. Configurar variables de entorno:
   Crear un archivo `.env.local` en la raíz del proyecto y configurar las variables necesarias (API URLs, keys de EmailJS, etc.).

4. Iniciar el servidor de desarrollo:
   ```bash
   pnpm dev
   ```

   La aplicación estará disponible en [http://localhost:3000](http://localhost:3000).

## 🏗 Estructura del Proyecto

```
ochentanoventa-v2/
├── src/
│   ├── app/                   # App Router de Next.js
│   │   ├── layout.tsx         # Layout principal
│   │   └── page.tsx           # Página principal (SPA)
│   ├── lib/
│   │   ├── components/        # Componentes UI organizados por sección
│   │   ├── constants/         # Contenido estático y configuración
│   │   ├── hooks/             # Custom hooks
│   │   ├── services/          # Integraciones (Strapi, EmailJS)
│   │   └── types/             # Definiciones de tipos TypeScript
│   └── ...
└── public/                    # Assets estáticos
```

## 📜 Scripts Disponibles

- `pnpm dev`: Inicia el servidor de desarrollo.
- `pnpm build`: Construye la aplicación para producción.
- `pnpm start`: Inicia la aplicación en modo producción.
- `pnpm lint`: Ejecuta el linter (ESLint).
- `pnpm ts-check`: Verifica tipos de TypeScript.
- `pnpm test`: Ejecuta pruebas unitarias con Vitest.

## 🤝 Contribución

1. Usar **pnpm** para gestión de paquetes.
2. Seguir **Conventional Commits** para los mensajes de commit.
3. Mantener **TypeScript estricto** (no usar `any`).
4. Asegurar que los tests pasen antes de hacer push.

## 📄 Licencia

Todos los derechos reservados. Ochenta Noventa.
