import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, test } from 'vitest';
import Navbar from './Navbar';

describe('Navbar', () => {
  test('renders correctly and opens modal', async () => {
    const user = userEvent.setup();

    render(<Navbar />);

    const contactButton = screen.getByRole('button', { name: /contacto/i });
    expect(screen.getByTestId('logo')).toBeInTheDocument();
    expect(contactButton).toBeInTheDocument();
    await user.click(contactButton);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });
});
