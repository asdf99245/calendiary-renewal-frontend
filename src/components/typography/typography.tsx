import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';
import { createElement } from 'react';
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

type TypographyVariant = NonNullable<TypographyVariantProps['variant']>;

type TypographyVariantProps = VariantProps<typeof TypographyVariants>;

type TypographyProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
};

type Props<T extends ElementType> = TypographyProps<T> & TypographyVariantProps;

export function Typography<T extends ElementType = 'p'>({
  as,
  children,
  variant,
  ...props
}: Props<T> & Omit<ComponentPropsWithoutRef<T>, keyof Props<T>>) {
  const Element = as || (variant && ELEMENT_MAPPING[variant]) || 'p';

  const dynamicProps = {
    className: cn(TypographyVariants({ variant })),
    ...props,
  };

  return createElement(Element, dynamicProps, children);
}

const ELEMENT_MAPPING: Record<TypographyVariant, ElementType> = {
  heading1: 'h1',
  heading2: 'h2',
  heading3: 'h3',
  heading4: 'h4',
  heading5: 'h5',
  heading6: 'h6',
  body1: 'p',
  body2: 'p',
  caption: 'p',
  button: 'span',
} as const;
