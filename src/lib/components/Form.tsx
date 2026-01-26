'use client';

import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

interface FormData {
  user_name: string;
  user_email: string;
  phone: string;
  location: string;
  message: string;
}

interface FormProps {
  onCloseModal?: () => void;
}

const Form = ({ onCloseModal }: FormProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async () => {
    if (!formRef.current) return;

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error('EmailJS credentials not configured');
      toast.error('Error de configuración. Por favor, contacta al administrador.');
      return;
    }

    try {
      await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicKey,
      );

      toast.success('Su consulta se envió correctamente!');
      reset();
      onCloseModal?.();
    } catch (error) {
      console.error('Error al enviar el correo:', error);
      toast.error('No se pudo enviar su consulta, intente nuevamente.');
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit(onSubmit)}
      className="font-roboto flex flex-col gap-3 px-3 py-5 xl:grid xl:grid-cols-4 xl:grid-rows-2 xl:px-10"
    >
      <h3 className="mb-[6px] text-center text-[18px] font-bold xl:col-span-full xl:text-xl">
        Pedinos un presupuesto para tu evento
      </h3>
      <div className="flex flex-col gap-1 xl:col-span-2">
        <label className="text-xs">
          Nombre completo <span className="text-red-700">*</span>{' '}
        </label>
        <input
          type="text"
          id="user_name"
          className="xl:p2 rounded-sm bg-white p-1 text-xs text-black xl:text-sm"
          {...register('user_name', { required: true })}
        />
        {errors.user_name && (
          <span className="text-xs text-red-700">Es necesario un nombre</span>
        )}
      </div>

      <div className="flex flex-col gap-1 xl:col-span-2">
        <label className="text-xs">
          Email <span className="text-red-700">*</span>{' '}
        </label>
        <input
          type="email"
          id="user_email"
          className="xl:p2 rounded-sm bg-white p-1 text-xs text-black xl:text-sm"
          {...register('user_email', { required: true })}
        />
        {errors.user_email && (
          <span className="text-xs text-red-700">Es necesario un email</span>
        )}
      </div>

      <div className="flex flex-col gap-1 xl:col-span-2">
        <label className="text-xs">
          Celular <span className="text-red-700">*</span>{' '}
        </label>
        <input
          type="number"
          id="phone"
          className="xl:p2 rounded-sm bg-white p-1 text-xs text-black xl:text-sm"
          {...register('phone', { required: true })}
        />
        {errors.phone && (
          <span className="text-xs text-red-700">Es necesario un número</span>
        )}
      </div>

      <div className="flex flex-col gap-1 xl:col-span-2">
        <label className="text-xs">
          Localidad del evento <span className="text-red-700">*</span>{' '}
        </label>
        <input
          type="text"
          id="location"
          className="xl:p2 rounded-sm bg-white p-1 text-xs text-black xl:text-sm"
          {...register('location', { required: true })}
        />
        {errors.location && (
          <span className="text-xs text-red-700">
            Es necesaria una localidad
          </span>
        )}
      </div>

      <div className="flex flex-col gap-1 xl:col-span-full">
        <label className="text-xs">Mensaje</label>
        <textarea
          name="message"
          rows={10}
          cols={30}
          placeholder="Contanos un poco más acerca de tu evento..."
          className="placeholder:font-roboto max-h-28 rounded-sm bg-white p-2 text-xs text-black placeholder:p-0.5 placeholder:text-xs placeholder:text-black"
        ></textarea>
      </div>

      <button className="hover:text-gold mt-2 cursor-pointer text-sm uppercase transition-colors duration-100 ease-in-out hover:font-bold xl:col-span-full">
        Enviar consulta
      </button>
    </form>
  );
};

export default Form;
