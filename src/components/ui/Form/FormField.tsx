import { ReactNode } from 'react';

interface FormFieldProps {
  label: string;
  error?: string;
  htmlFor: string;
  children: ReactNode;
}

const FormField = ({ label, error, htmlFor, children }: FormFieldProps) => {
  return (
    <div className="flex flex-col gap-1 xl:col-span-2">
      <label className="text-xs" htmlFor={htmlFor}>
        {label} <span className="text-red-700">*</span>{' '}
      </label>
      {children}
      {error && <span className="mt-0.5 text-xs text-red-700">{error}</span>}
    </div>
  );
};

export default FormField;
