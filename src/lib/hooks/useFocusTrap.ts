import { useEffect, useRef } from 'react';

export function useFocusTrap(isActive: boolean) {
  const containerRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isActive) {
      // 1. Save current focus
      previousFocusRef.current = document.activeElement as HTMLElement;

      const container = containerRef.current;
      if (!container) return;

      // 2. Find all focusable elements
      const focusableElements = container.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      const handleTab = (e: KeyboardEvent) => {
        if (e.key !== 'Tab') return;

        if (e.shiftKey) {
          // If Shift + Tab and on the first element, wrap to the last
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement?.focus();
          }
        } else {
          // If Tab and on the last element, wrap to the first
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement?.focus();
          }
        }
      };

      const handleEsc = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          // Close button trigger or logic will be handled by the modal context
          // But we can let it bubble or handle it here if needed
        }
      };

      document.addEventListener('keydown', handleTab);
      
      // Auto-focus the first element if none is auto-focused inside
      // (Usually handled by autoFocus prop, but good as fallback)
      // firstElement?.focus();

      return () => {
        document.removeEventListener('keydown', handleTab);
        // 3. Return focus on cleanup
        previousFocusRef.current?.focus();
      };
    }
  }, [isActive]);

  return containerRef;
}
