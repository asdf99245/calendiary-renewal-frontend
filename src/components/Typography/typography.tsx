import { ParamHTMLAttributes } from 'react';
import { ReactNode } from 'react';
import { type VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/utils/cn';

const TypographyVariants = cva('antialiased', {
  variants: {
    variant: {
      heading1: 'text-heading1',
      heading2: 'text-heading2',
      heading3: 'text-heading3',
      heading4: 'text-heading4',
      heading5: 'text-heading5',
      heading6: 'text-heading6',
      body1: 'text-body1',
      body2: 'text-body2',
      caption: 'text-caption',
      button: 'text-button',
    },
  },
  defaultVariants: {
    variant: 'body1',
  },
});

type TypographyVariantProps = VariantProps<typeof TypographyVariants>;

interface Props extends ParamHTMLAttributes<HTMLParagraphElement>, TypographyVariantProps {
  children: ReactNode;
}

export function Typography({ children, variant, className, ...props }: Props) {
  return (
    <p className={cn(TypographyVariants({ variant }), className)} {...props}>
      {children}
    </p>
  );
}
