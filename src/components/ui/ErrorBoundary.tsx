'use client';

import { useEffect } from 'react';

interface ErrorBoundaryProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorBoundary({ error, reset }: ErrorBoundaryProps) {
  useEffect(() => {
    // Log error to console in development
    console.error('Error boundary caught:', error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-black px-4">
      <div className="text-center text-white">
        <h2 className="font-montserrat mb-4 text-2xl font-bold">
          Algo salió mal
        </h2>
        <p className="font-roboto mb-6 text-sm text-grey">
          Ocurrió un error inesperado. Por favor, intenta nuevamente.
        </p>
        <button
          onClick={reset}
          className="hover:text-gold rounded-sm bg-white px-6 py-2 text-sm font-bold text-black transition-colors duration-200 hover:bg-grey"
        >
          Intentar nuevamente
        </button>
      </div>
    </div>
  );
}
