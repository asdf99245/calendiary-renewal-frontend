import { SVGProps } from 'react';
import * as icons from '@/assets/icons';
import { cn } from '@/utils/cn';

interface Props extends SVGProps<SVGSVGElement> {
  iconType: keyof typeof icons;
  color?: string;
  size?: number | string;
}

export function Icon({ iconType, color, size = 24, className, ...props }: Props) {
  const SVGIcon = icons[iconType];

  return (
    <SVGIcon
      fill={color}
      width={size}
      height={size}
      className={cn({ 'fill-text-primary': !color }, className)}
      {...props}
    />
  );
}
