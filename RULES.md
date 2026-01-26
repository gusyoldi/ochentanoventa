# RULES.md - Ochenta Noventa

## 🧠 SKILL: Strict TypeScript Mastery

### Objective
Ensure type safety across the board to prevent runtime errors and build failures in Vercel.

### Rules
- **No `any`**: The use of `any` is strictly prohibited. Use explicit types, generics, or `unknown` with type narrowing.
- **Ref Handling**: When merging refs, use specific React ref types instead of casting to `any`.
- **API Safety**: Type all API responses from Strapi using Zod or manual interfaces.

### Acceptable
- Using `unknown` for external data before validation.
- Casting with `as` only when strictly necessary and with the correct type.

### Unacceptable
- `// @ts-ignore` or `// @ts-nocheck`.
- `any` in function parameters or return types.

---

## 🧠 SKILL: Resilience Over Runtime Perfection

### Objective
Prioritize successful builds and service availability over strict content accuracy from external providers.

### Rules
- **Fallback Content**: Always provide mocks or empty states for Strapi/EmailJS data.
- **Graceful Failure**: Use `try/catch` in all service calls. Log errors but do not break the UI.
- **Next.js Stability**: Never throw errors during `generateStaticParams` or static generation.

### Acceptable
- Showing a "Contenido no disponible" message.
- Using default SEO metadata if the CMS fails.

### Unacceptable
- White screens of death (WSOD) due to API timeouts.
- Hard dependencies on Strapi uptime for build success.

---

## ♿ SKILL: Accessible Interaction Design

### Objective
Maintain a high standard of accessibility (A11y).

### Rules
- **Focus Management**: Modals must implement a "Focus Trap" and return focus to the trigger on close.
- **Keyboard Navigation**: Interactive elements must have a visible `focus-visible` state (gold border).
- **Semantic Labels**: Use `aria-label` for icons or non-text elements.

### Acceptable
- `autoFocus` on form inputs.
- `Esc` key support for all overlays.

### Unacceptable
- Breaking keyboard tab order.
- Using non-semantic elements for interactive controls.

---

## 🔍 SKILL: SEO-Centric Development

### Objective
Maintain high discoverability and performance.

### Rules
- **Metadata**: Every page must export `metadata` or `generateMetadata`.
- **Semantic HTML**: Exactly one `h1` per page.
- **Image Optimization**: Use Next.js `Image` with descriptive `alt` and `sizes`.

---

## 🛠️ SKILL: Technical Discipline

### Objective
Maintain clean and consistent workflow.

### Rules
- **Package Manager**: Use ONLY `pnpm`.
- **Commits**: Follow **Conventional Commits**.
- **Consistency**: Use existing hooks like `useFocusTrap`.
