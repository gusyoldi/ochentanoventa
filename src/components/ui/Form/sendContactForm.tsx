import { FormData } from './Form';

export async function sendContactForm(formData: FormData) {
  if (formData._honey) {
    throw new Error('Bot detected via honeypot');
  }

  const res = await fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.error || 'Error al enviar el formulario');
  }

  return data;
}
