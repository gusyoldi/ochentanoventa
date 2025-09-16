'use client';

import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';

interface FormData {
  user_name: string;
  user_email: string;
  phone: string;
  location: string;
  message: string;
}

const Form = () => {
  const form = useRef<HTMLFormElement>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = () => sendEmail();

  const sendEmail = () => {
    if (!form.current) return;

    emailjs
      .sendForm(
        'service_mtdmr5r',
        'template_ntmq6rx',
        form.current,
        'm4-E800NJXGTBTwxH',
      )
      .then(
        (result) => console.log(result.text),
        (error) => console.log(error.text),
      );

    reset();
  };

  return (
    <form
      ref={form}
      onSubmit={handleSubmit(onSubmit)}
      className="font-roboto flex flex-col gap-3 px-3 py-5 xl:grid xl:grid-cols-4 xl:grid-rows-2"
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
          placeholder="Contanos un poco mas acerca de tu evento..."
          className="placeholder:font-roboto max-h-28 rounded-sm bg-white p-2 text-xs text-black placeholder:p-0.5 placeholder:text-xs placeholder:text-black"
        ></textarea>
      </div>

      <button className="mt-2 cursor-pointer text-sm uppercase hover:font-bold xl:col-span-full">
        Enviar consulta
      </button>
    </form>
  );
};

export default Form;
