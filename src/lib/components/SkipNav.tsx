'use client';

export default function SkipNav() {
  return (
    <a
      href="#main-content"
      className="bg-gold text-black sr-only absolute top-4 left-4 z-50 rounded-sm px-4 py-2 font-bold transition-all focus:not-sr-only focus:outline-none focus:ring-2 focus:ring-white"
    >
      Saltar al contenido principal
    </a>
  );
}
