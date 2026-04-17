import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/utils';

const buttonVariants = cva('cursor-pointer', {
  variants: {
    variant: {
      default: '',
      form: 'hover:text-gold mt-2 uppercase transition-colors duration-100 ease-in-out hover:font-bold xl:col-span-full disabled:text-gray-500 disabled:cursor-not-allowed disabled:hover:font-normal',
    },
    size: {
      default: '',
      sm: 'text-sm',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'sm',
  },
});

type ButtonVariants = VariantProps<typeof buttonVariants>;

type ButtonProps = React.ComponentProps<'button'> & {
  variant?: ButtonVariants['variant'];
  size?: 'sm';
  asChild?: boolean;
  ['data-testid']?: string;
  isDisabled?: boolean;
  isLoading?: boolean;
};

function Button({
  children,
  className,
  variant,
  size,
  asChild = false,
  isDisabled = false,
  isLoading = false,
  ...props
}: ButtonProps) {
  const DynamicComponent =
    asChild && !isLoading && !isDisabled ? Slot : 'button';

  return (
    <DynamicComponent
      disabled={isLoading || isDisabled}
      aria-disabled={isLoading || isDisabled}
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {isLoading ? 'Enviando...' : children}
    </DynamicComponent>
  );
}

export { Button, buttonVariants };
