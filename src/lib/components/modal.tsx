'use client';

import { useClickOutside } from '@/hooks/useClickOutside';
import { useFocusTrap } from '@/hooks/useFocusTrap';
import { XIcon } from 'lucide-react';
import {
  cloneElement,
  createContext,
  ReactElement,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
  children: ReactNode;
}

interface OpenProps {
  children: ReactElement<{ onClick?: () => void }>;
  opens: string;
}

interface WindowProps {
  children: ReactElement<{ onCloseModal: () => void }>;
  name: string;
}

interface ModalContextType {
  openName: string;
  open: (name: string) => void;
  close: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

function Modal({ children }: ModalProps) {
  const [openName, setOpenName] = useState('');

  const close = () => setOpenName('');
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }: OpenProps) {
  const context = useContext(ModalContext);
  if (!context) throw new Error('Modal.Open must be used within Modal');
  const { open } = context;

  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({ children, name }: WindowProps) {
  const context = useContext(ModalContext);
  if (!context) throw new Error('Modal.Window must be used within Modal');

  const { openName, close } = context;
  const isOpen = name === openName;

  const clickOutsideRef = useClickOutside<HTMLDivElement>(close, true);
  const focusTrapRef = useFocusTrap(isOpen);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
    }
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isOpen, close]);

  if (!isOpen) return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal={true}
      className="h-100dvh fixed top-0 left-0 z-50 h-full w-full backdrop-blur-sm transition-all"
    >
      <div
        className="fixed top-1/2 left-1/2 max-h-[90vh] w-full max-w-lg translate-x-[-50%] translate-y-[-50%] rounded-lg border bg-neutral-900 p-6 text-white shadow-lg xl:max-w-3xl xl:p-10"
        ref={(el) => {
          // Merge refs manually since both hooks return refs
          if (el) {
            (
              clickOutsideRef as React.RefObject<HTMLDivElement | null>
            ).current = el;
            (focusTrapRef as React.RefObject<HTMLDivElement | null>).current =
              el;
          }
        }}
      >
        <button
          className="absolute top-5 right-8 translate-x-[0.4rem] border-none bg-none p-2 text-neutral-400 transition-all duration-200 hover:text-white"
          onClick={close}
          aria-label="Cerrar modal"
        >
          <XIcon size={18} />
        </button>

        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </div>
    </div>,
    document.body,
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
