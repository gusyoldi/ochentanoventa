import z from 'zod';

export const FormSchema = z.object({
  user_name: z.string().min(1, 'Debe ingresar un nombre'),
  user_email: z
    .string()
    .min(1, 'Debe ingresar un email')
    .pipe(z.email('El formato del email es inválido')),
  phone: z
    .string()
    .min(1, 'Debe ingresar un número')
    .min(8, 'El número debe tener al menos 8 dígitos')
    .regex(/^[0-9+]+$/, 'Sólo números'),

  location: z.string().min(1, 'Debe ingresar una localidad'),
  message: z
    .string()
    .min(1, 'Debe ingresar un mensaje')
    .max(200, 'El mensaje no puede superar los 200 caracteres'),
  _honey: z.string().optional(),
});
