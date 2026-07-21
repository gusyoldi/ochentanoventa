import { TOAST_MESSAGES } from '@/services/toast/constants';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { showToast, Toast } from '@/services/toast/toast';
import { afterEach, describe, expect, it, MockedFunction, vi } from 'vitest';
import Form from './Form';
import { sendContactForm } from './sendContactForm';

vi.mock('./sendContactForm', () => ({
  sendContactForm: vi.fn(),
}));

const mockedSendContactForm = sendContactForm as MockedFunction<
  typeof sendContactForm
>;

vi.mock('@/services/toast/toast', () => ({
  showToast: {
    success: vi.fn(),
    error: vi.fn(),
  },
}));

const mockedToast = showToast as Toast as {
  success: ReturnType<typeof vi.fn>;
  error: ReturnType<typeof vi.fn>;
};

const fillForm = async (user: ReturnType<typeof userEvent.setup>) => {
  await user.type(screen.getByLabelText(/nombre completo/i), 'Juan');
  await user.type(screen.getByLabelText(/email/i), 'juan@mail.com');
  await user.type(screen.getByLabelText(/celular/i), '12345678');
  await user.type(screen.getByLabelText(/localidad/i), 'Buenos Aires');
  await user.type(screen.getByLabelText(/mensaje/i), 'Hola');
};

describe('Form component', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('muestra toast.success cuando el envío es exitoso', async () => {
    mockedSendContactForm.mockResolvedValue({});

    const user = userEvent.setup();

    render(<Form />);

    await fillForm(user);

    await user.click(screen.getByRole('button', { name: /enviar consulta/i }));

    await waitFor(() => {
      expect(mockedSendContactForm).toBeCalled();
      expect(mockedToast.success).toHaveBeenCalledWith(
        TOAST_MESSAGES.contactSuccess,
      );
    });

    expect(mockedToast.error).not.toHaveBeenCalled();
  });

  it('muestra toast.error cuando falla el envío', async () => {
    mockedSendContactForm.mockRejectedValue(new Error('fail'));

    const user = userEvent.setup();

    render(<Form />);

    await fillForm(user);

    await user.click(screen.getByRole('button', { name: /enviar consulta/i }));

    await waitFor(() => {
      expect(mockedToast.error).toHaveBeenCalledWith(
        TOAST_MESSAGES.contactError,
      );
    });

    expect(mockedToast.success).not.toHaveBeenCalled();
  });

  it('muestra errores y no envía el formulario si está vacío', async () => {
    const user = userEvent.setup();

    render(<Form />);

    await user.click(screen.getByRole('button', { name: /enviar consulta/i }));

    expect(
      await screen.findByText('Debe ingresar un nombre'),
    ).toBeInTheDocument();
    expect(screen.getByText('Debe ingresar un email')).toBeInTheDocument();
    expect(screen.getByText('Debe ingresar un número')).toBeInTheDocument();
    expect(screen.getByText('Debe ingresar una localidad')).toBeInTheDocument();
    expect(screen.getByText('Debe ingresar un mensaje')).toBeInTheDocument();

    expect(mockedSendContactForm).not.toHaveBeenCalled();

    expect(mockedToast.success).not.toHaveBeenCalled();
    expect(mockedToast.error).not.toHaveBeenCalled();
  });
});
