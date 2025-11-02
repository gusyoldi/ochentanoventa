'use client';

import {
  cloneElement,
  createContext,
  ReactElement,
  ReactNode,
  useContext,
  useState,
} from 'react';
import { createPortal } from 'react-dom';

import { XIcon } from 'lucide-react';
import { useClickOutside } from '../hooks/useClickOutside';

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

  const ref = useClickOutside<HTMLDivElement>(close, true);

  if (name !== openName) return null;

  return createPortal(
    <div className="h-100dvh fixed top-0 left-0 h-full w-full backdrop-blur-sm transition-all">
      <div
        className="fixed top-1/2 left-1/2 max-h-[90vh] w-full max-w-lg translate-x-[-50%] translate-y-[-50%] rounded-lg border bg-neutral-900 p-6 text-white shadow-lg xl:max-w-3xl xl:p-10"
        ref={ref}
      >
        <button
          className="absolute top-5 right-8 translate-x-[0.4rem] border-none bg-none p-2 text-neutral-400 transition-all duration-200 hover:text-white"
          onClick={close}
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
