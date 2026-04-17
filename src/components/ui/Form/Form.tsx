'use client';

import { Button } from '@/lib/components/button';
import { TOAST_MESSAGES } from '@/services/toast/constants';
import { showToast } from '@/services/toast/toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import z from 'zod';
import FormField from './FormField';
import { FormSchema } from './schema';
import { sendContactForm } from './sendContactForm';

export type FormData = z.infer<typeof FormSchema>;

interface FormProps {
  onCloseModal?: () => void;
}

const Form = ({ onCloseModal }: FormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(FormSchema) });

  const onSubmit = async (data: FormData) => {
    if (data._honey) {
      console.warn('Bot detected via honeypot');
      return;
    }

    try {
      await sendContactForm(data);

      showToast.success(TOAST_MESSAGES.contactSuccess);
      reset();
      onCloseModal?.();
    } catch (error) {
      console.error('Error al enviar el correo:', error);
      showToast.error(TOAST_MESSAGES.contactError);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="font-roboto flex flex-col gap-3 px-3 py-5 xl:grid xl:grid-cols-4 xl:grid-rows-2 xl:px-10"
    >
      <h3 className="mb-[6px] text-center text-[18px] font-bold xl:col-span-full xl:text-xl">
        Pedinos un presupuesto para tu evento
      </h3>
      <FormField
        htmlFor="user_name"
        label="Nombre completo"
        error={errors.user_name && errors.user_name.message}
      >
        <input
          type="text"
          id="user_name"
          className="xl:p2 rounded-sm bg-white p-1 text-xs text-black xl:text-sm"
          autoFocus
          {...register('user_name')}
        />
      </FormField>

      <FormField
        label="Email"
        htmlFor="user_email"
        error={errors.user_email && errors.user_email.message}
      >
        <input
          type="email"
          id="user_email"
          className="xl:p2 rounded-sm bg-white p-1 text-xs text-black xl:text-sm"
          {...register('user_email')}
        />
      </FormField>

      <FormField
        htmlFor="phone"
        label="Celular"
        error={errors.phone && errors.phone.message}
      >
        <input
          type="tel"
          id="phone"
          className="xl:p2 rounded-sm bg-white p-1 text-xs text-black xl:text-sm"
          {...register('phone')}
        />
      </FormField>

      <input
        type="text"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        {...register('_honey')}
      />

      <FormField
        htmlFor="location"
        label="Localidad del evento"
        error={errors.location && errors.location.message}
      >
        <input
          type="text"
          id="location"
          className="xl:p2 rounded-sm bg-white p-1 text-xs text-black xl:text-sm"
          {...register('location')}
        />
      </FormField>

      <div className="flex flex-col gap-1 xl:col-span-full">
        <label className="text-xs" htmlFor="message">
          Mensaje
          <span className="ml-0.5 text-red-700">*</span>{' '}
        </label>
        <textarea
          id="message"
          rows={10}
          cols={30}
          placeholder="Contanos un poco más acerca de tu evento..."
          className="placeholder:font-roboto max-h-28 rounded-sm bg-white p-2 text-xs text-black placeholder:p-0.5 placeholder:text-xs placeholder:text-black"
          {...register('message')}
        ></textarea>
        {errors.message && (
          <span className="mt-0.5 text-xs text-red-700">
            {errors.message.message}
          </span>
        )}
      </div>

      <Button variant="form" isLoading={isSubmitting} type="submit">
        Enviar consulta
      </Button>
    </form>
  );
};

export default Form;
