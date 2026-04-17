import toast from 'react-hot-toast';

export type Toast = {
  success: (message: string) => void;
  error: (message: string) => void;
};

export const showToast: Toast = {
  success: (message: string) => toast.success(message),
  error: (message: string) => toast.error(message),
};
